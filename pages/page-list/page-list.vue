<template>
  <view class="container">
    <my-list ref="myListRef" :params="params" :fieldsMap="{ totalPage: 'pages' }" :getDataFun="getDataFun">
      <template #default="{ item, index }">
        <view class="list-item">{{ item.trainId }} - {{ index }}</view>
      </template>
    </my-list>
    <navigator url="/example/data-select/data-select">
      <button>data-select</button>
    </navigator>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onLoad, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app';

import { queryTrainVideoByTrainIdForPage } from '@/api/index.js';

const getDataFun = () => {
  return new Promise((resolve, reject) => {
    const data = {
      code: '0',
      message: '',
      data: {
        pages: 4,
        list: [
          { trainId: 0 },
          { trainId: 1 },
          { trainId: 2 },
          { trainId: 3 },
          { trainId: 4 },
          { trainId: 5 },
          { trainId: 6 },
          { trainId: 7 },
          { trainId: 8 },
          { trainId: 9 },
        ],
      },
    };
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const params = reactive({
  trainId: '',
  videoName: '',
});

onLoad(options => {
  params.trainId = options.trainId;
});

const myListRef = ref();
onReachBottom(() => {
  myListRef.value.onReachBottom();
});

onPullDownRefresh(() => {
  myListRef.value.onPullDownRefresh();
});
</script>

<style lang="scss" scoped>
.list-item {
  height: 80px;
  margin-bottom: 20px;
  background-color: #fff;
}
</style>
