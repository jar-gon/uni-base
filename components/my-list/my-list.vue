<template>
  <view class="list">
    <template v-for="(item, index) in list" :key="index">
      <slot :item="item" :index="index" />
    </template>
  </view>
  <uni-load-more :status="status" v-bind="loadMoreAttrs" />
  <my-message ref="myMessageRef" />
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

import { debounce } from '@/utils/index.js';

const { params, pageSize, getDataFun, fieldsMap } = defineProps({
  params: {
    type: Object,
    default: () => {
      return reactive({});
    },
  },
  pageSize: {
    type: Number,
    default: () => {
      return 10;
    },
  },
  getDataFun: {
    type: Function,
    required: true,
  },
  fieldsMap: {
    type: Object,
    default() {
      return {};
    },
  },
  loadMoreAttrs: {
    type: Object,
    default() {
      return {};
    },
  },
});

const pagination = reactive({
  pageNo: 1,
  pageSize,
  pages: 0,
});

const fieldMap = reactive({
  pageNo: 'pageNo',
  pageSize: 'pageSize',
  pages: 'pages',
  list: 'list',
});

Object.assign(fieldMap, fieldsMap);

const status = ref('more');
const list = ref([]);
const _getData = debounce(getData);

watch(
  params,
  (newVal, oldVal) => {
    onPullDownRefresh();
  },
  {
    deep: true,
    immediate: true,
  }
);

function onPullDownRefresh() {
  pagination.pageNo = 1;
  list.value = [];
  _getData();
}

function onReachBottom() {
  if (status.value === 'more') {
    _getData();
  }
}

const myMessageRef = ref();
function getData() {
  const pageParams = {};
  pageParams[fieldMap.pageNo] = pagination.pageNo;
  pageParams[fieldMap.pageSize] = pagination.pageSize;
  status.value = 'loading';
  console.info('params', { ...params, ...pageParams });
  getDataFun({ ...params, ...pageParams }).then(res => {
    const { data, code, message } = res;
    uni.stopPullDownRefresh();
    status.value = 'more';
    if (code === '0') {
      list.value = list.value.concat(data[fieldMap.list] || []);
      pagination.pages = data[fieldMap.pages] || 0;
      if (pagination.pageNo >= data[fieldMap.pages]) {
        status.value = 'noMore';
      }
      pagination.pageNo++;
    } else {
      myMessageRef.value.error(message || '接口请求错误');
    }
  });
}

defineExpose({
  onReachBottom,
  onPullDownRefresh,
});
</script>

<style lang="scss" scoped>
.list {
  width: 100%;

  &-bottom {
    padding: 4px 0;
    text-align: center;
  }
}
</style>
