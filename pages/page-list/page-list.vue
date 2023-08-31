<template>
  <view class="container">
    <my-list ref="myListRef" :params="params" :apiFun="queryTrainVideoByTrainIdForPage">
      <template #default="{ item }">
        <view class="list-item">{{ item.trainVideoId }}</view>
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

import { queryTrainVideoByTrainIdForPage } from '@/api';

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
  height: 280px;
  margin-bottom: 20px;
  background-color: #fff;
}
</style>
