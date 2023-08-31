<template>
  <view v-if="notEmpty">
    <view class="list">
      <view class="list-item" v-for="(item, index) in dataList" :key="index">
        <slot :item="item" />
      </view>
    </view>
    <view class="list-bottom" v-if="isMore">
      <slot name="loading">
        <uni-icons type="reload" />
        <text>下滑加载更多…</text>
      </slot>
    </view>
    <view class="list-bottom" v-else>
      <slot name="noMore">没有更多内容啦</slot>
    </view>
  </view>
  <my-empty v-else />
  <my-message ref="myMessageRef" />
</template>

<script setup>
import { computed, reactive, ref, onBeforeMount, onBeforeUnmount } from 'vue';

const props = defineProps({
  params: {
    type: Object,
    default: () => {
      return {};
    },
  },
  pageSize: {
    type: Number,
    default: () => {
      return 10;
    },
  },
  apiFun: {
    type: Function,
    required: true,
  },
  filterFun: {
    type: Function,
  },
  map: {
    type: Object,
    default() {
      return {
        list: 'list',
        pages: 'pages',
      };
    },
  },
});

const pagesNum = ref(0);
const pageParams = reactive({
  pageNo: 1,
  pageSize: props.pageSize,
});
const isMore = computed(() => {
  return pagesNum.value >= pageParams.pageNo;
});

const dataList = ref([]);
const notEmpty = computed(() => {
  return dataList.value.length > 0;
});

onBeforeMount(() => {
  getList();
});

let isPullDownRefresh = false;
function onPullDownRefresh() {
  pageParams.pageNo = 1;
  isPullDownRefresh = true;
  getList();
}

function onReachBottom() {
  if (isMore.value) {
    getList();
  }
}

const myMessageRef = ref();
const emit = defineEmits(['handleResult']);
function getList() {
  props.apiFun({ ...props.params, ...pageParams }).then(res => {
    emit('handleResult', res);
    if (isPullDownRefresh) {
      dataList.value = [];
      uni.stopPullDownRefresh();
      isPullDownRefresh = false;
    }
    const { data, code, message } = res;
    if (code === '0') {
      const list = data[props.map.list];
      const pages = data[props.map.pages];
      pageParams.pageNo++;
      pagesNum.value = pages;
      props.filterFun && props.filterFun(list);
      dataList.value.push(...list);
    } else {
      myMessageRef.value.error(message);
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
