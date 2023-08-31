<template>
  <view class="empty">
    <image class="empty-img" src="https://web-data.zmlearn.com/image/f660c9f5-b5d0-4384-bec6-3bd0f264f318.png" mode="aspectFit" />
    <text class="empty-text">暂无数据</text>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.empty {
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-img {
    margin-bottom: 10px;
    width: 114px;
    height: 114px;
  }
}
</style>
