<template>
  <view class="container">
    <my-simple-forms ref="mySimpleFormRef" :formStates="formStates" @submitForm="submitForm">
      <template #checkNum="{ field, formData }">
        <view class="ver-code">
          <uni-easyinput type="text" v-model="formData.checkNum" trim="all" maxlength="4" placeholder="请输入验证码" />
          <image class="code" src="https://web-data.zmlearn.com/image/fh5Saqrz8WvX6WL9qCbwvJ/icon_schdule.svg" />
        </view>
      </template>
    </my-simple-forms>
    <button @click="submit">Submit</button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

import { getFormStates } from './form.js';

const formStates = ref();
formStates.value = getFormStates();

const mySimpleFormRef = ref();
function submit() {
  mySimpleFormRef.value.submit();
}
function submitForm(formData) {
  console.info('formData：', formData);
}

const value = ref([]);
const range = [
  {
    value: 0,
    text: '篮球',
    disable: true,
  },
  {
    value: 1,
    text: '足球',
  },
  {
    value: 2,
    text: '游泳',
  },
];
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
