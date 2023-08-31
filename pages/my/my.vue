<template>
  <!-- #ifdef H5 -->
  <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="标题" shadow />
  <!-- #endif -->
  <navigator url="/example/data-select/data-select">
    <button>data-select</button>
  </navigator>
  <navigator url="/pages/page-list/page-list?trainId=86">
    <button>page-list</button>
  </navigator>
  <navigator url="/example/form/form">
    <button>form</button>
  </navigator>
  <view class="container">{{ code }}</view>
</template>

<script setup>
import { ref } from 'vue';

const code = ref();

// #ifndef H5
uni.getProvider({
  service: 'oauth',
  success: res => {
    const provider = res.provider[0];
    uni.login({
      provider,
      success: res => {
        code.value = res.code;
      },
    });
  },
});
// #endif
</script>

<style></style>
