<template>
  <view class="content">
    <image class="logo" src="/static/image/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <custom-icon />
  </view>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Hello');
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
