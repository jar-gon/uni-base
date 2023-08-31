<template>
  <view class="container">
    <my-simple-forms ref="mySimpleFormRef" :formStates="formStates" @submitForm="submitForm">
      <template #checkNum="{ field, formData }">
        <view class="ver-code">
          <uni-easyinput type="text" v-model="formData.checkNum" v-bind="field.attrs" />
          <image class="code" :src="imgSrc" @click="verCode" />
        </view>
      </template>
    </my-simple-forms>
    <button @click="submit" :disabled="loading" :loading="loading">Submit</button>
    <view class="tip">此小程序用于公司内部工作，输入账号密码后再登录</view>
  </view>
  <my-message ref="myMessageRef" />
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

import { initBase } from '@/utils/common.js';
import { VerificationCode, Login } from '@/api';
import { getFormStates } from './login.js';

const formStates = ref({});
formStates.value = getFormStates();

onLoad(() => {
  formStates.value = getFormStates();
  verCode();
});

const imgSrc = ref();
let currentUserCode = '';
function verCode() {
  VerificationCode().then(res => {
    const { code, data } = res;
    if (code === '0') {
      imgSrc.value = 'data:image/jpg;base64,' + data.imgUrl;
      currentUserCode = data.currentUserCode;
    }
  });
}

const mySimpleFormRef = ref();
const myMessageRef = ref();
const loading = ref(false);
function submit() {
  mySimpleFormRef.value.submit();
}
function submitForm(formData) {
  loading.value = true;
  formData.currentUserCode = currentUserCode;
  Login(formData).then(res => {
    const { code, data, message } = res;
    if (code === '0') {
      uni.setStorageSync('token', data.token);
      initBase();
      uni.navigateBack();
    } else {
      myMessageRef.value.error(message);
    }
    loading.value = false;
  });
}
</script>

<style lang="scss" scoped>
.ver-code {
  display: flex;

  .code {
    margin-left: 10px;
    width: 100px;
    height: 35px;
  }
}

.tip {
  margin-top: 10px;
  text-align: center;
}
</style>
