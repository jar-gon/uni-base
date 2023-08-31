<script setup>
import { onLaunch } from '@dcloudio/uni-app';

// import { initBase } from '@/utils/common.js';

onLaunch(() => {
  // initBase();
});
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
@import '@/static/iconfont/iconfont.css';

/* #ifndef APP-NVUE */
// 设置整个项目的背景色
page {
  color: #666;
  background-color: #f5f5f5;
}
/* #endif */

.container {
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
}
</style>
