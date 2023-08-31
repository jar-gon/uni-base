<template>
  <uni-forms ref="FormRef" :model="formData" validateTrigger="blur" v-bind="formProperties">
    <template v-for="(field, name) in formFields" :key="name">
      <uni-forms-item
        v-if="['text', 'textarea', 'password', 'number', 'idcard', 'digit'].includes(field.type)"
        :name="name"
        v-bind="field.itemAttrs"
      >
        <uni-easyinput
          :type="field.type"
          v-model="formData[name]"
          :placeholder="field.itemAttrs?.label"
          v-bind="field.attrs"
        />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'numberBox'" :name="name" v-bind="field.itemAttrs">
        <uni-number-box v-model="formData[name]" v-bind="field.attrs" />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'rate'" :name="name" v-bind="field.itemAttrs">
        <uni-rate v-model="formData[name]" v-bind="field.attrs" />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'checkbox'" :name="name" v-bind="field.itemAttrs">
        <uni-data-checkbox v-model="formData[name]" v-bind="field.attrs" />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'select'" :name="name" v-bind="field.itemAttrs">
        <zxz-uni-data-select v-model="formData[name]" :placeholder="field.itemAttrs?.label" v-bind="field.attrs" />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'picker'" :name="name" v-bind="field.itemAttrs">
        <uni-data-picker v-model="formData[name]" :placeholder="field.itemAttrs?.label" v-bind="field.attrs" />
      </uni-forms-item>

      <uni-forms-item
        v-if="['date', 'daterange', 'datetime', 'datetimerange'].includes(field.type)"
        :name="name"
        v-bind="field.itemAttrs"
      >
        <uni-datetime-picker
          :type="field.type"
          v-model="formData[name]"
          :placeholder="field.itemAttrs?.label"
          v-bind="field.attrs"
        />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'file'" :name="name" v-bind="field.itemAttrs">
        <uni-file-picker v-model="formData[name]" v-bind="field.attrs" @select="select" />
      </uni-forms-item>

      <uni-forms-item v-if="field.type == 'slot'" :name="name" v-bind="field.itemAttrs">
        <slot :name="name" :field="field" :formData="formData" />
      </uni-forms-item>
    </template>
  </uni-forms>
</template>

<script setup>
import { ref, useAttrs, watchEffect } from 'vue';
import { isEmptyObject } from '@/utils/index.js';

// 定义组件的基本信息
defineOptions({
  name: 'MySimpleForm',
  inheritAttrs: false,
});

// 获取props
const { formStates } = defineProps({
  formStates: {
    type: Object,
    required: true,
    default: () => {
      return {};
    },
  },
});

const formProperties = ref({});
const formFields = ref(formStates.items || {});
const formData = ref({});

watchEffect(() => {
  const data = {};
  const { form: formProperty, items } = formStates;
  // 给formData初始值
  if (isEmptyObject(formData.value)) {
    const items = formStates.items;
    Object.keys(items).forEach(item => {
      data[item] = (formData.value && formData.value[item]) || items[item].defaultValue;
    });
    formData.value = data;
  }

  // 合并attrs
  formProperties.value = Object.assign({}, formProperty || {}, useAttrs());
});

const emit = defineEmits(['submitForm']);
const FormRef = ref();
function submit() {
  FormRef.value.validate().then(res => {
    // 抖音小程序res为{}
    emit('submitForm', formData.value);
  });
}

function select(e) {
  console.log('上传成功', e);
}

defineExpose({
  submit,
});
</script>
