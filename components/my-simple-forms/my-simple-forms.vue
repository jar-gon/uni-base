<template>
  <uni-forms ref="formRef" validateTrigger="blur" :rules="formProperty.rules" :modelValue="formData">
    <template v-for="(field, name) in formFields" :key="name">
      <uni-forms-item v-if="['text', 'textarea', 'password', 'number', 'idcard', 'digit'].includes(field.type)" :label="field.label" :name="name" :required="field.required">
        <uni-easyinput :type="field.type" v-model="formData[name]" :placeholder="field.placeholder" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'checkbox'" :label="field.label" :name="name" :required="field.required">
        <uni-data-checkbox v-model="formData[name]" :localdata="field.localdata" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'select'" :label="field.label" :name="name" :required="field.required">
        <zxz-uni-data-select v-model="formData[name]" :localdata="field.localdata" v-bind="field.attr || {}" />
      </uni-forms-item>
      <!-- <uni-forms-item v-if="field.type == 'select'" :label="field.label" :name="name" :required="field.required">
        <uni-data-select v-model="formData[name]" :localdata="field.localdata" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'searchSelect'" :label="field.label" :name="name" :required="field.required">
        <my-search-select v-model="formData[name]" :candidates="field.candidates" :placeholder="field.placeholder" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'combox'" :label="field.label" :name="name" :required="field.required">
        <uni-combox v-model="formData[name]" :candidates="field.localdata" v-bind="field.attr || {}" />
      </uni-forms-item> -->
      <uni-forms-item v-if="field.type == 'picker'" :label="field.label" :name="name" :required="field.required">
        <uni-data-picker v-model="formData[name]" :localdata="field.localdata" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="['date', 'daterange', 'datetime', 'datetimerange'].includes(field.type)" :label="field.label" :name="name" :required="field.required">
        <uni-datetime-picker :type="field.type" v-model="formData[name]" :placeholder="field.placeholder" v-bind="field.attr || {}" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'file'" :label="field.label" :name="name" :required="field.required">
        <uni-file-picker :type="field.type" v-model="formData[name]" v-bind="field.attr || {}" @select="select" />
      </uni-forms-item>
      <uni-forms-item v-if="field.type == 'slot'" :label="field.label" :name="name" :required="field.required">
        <slot :name="name" :field="field" :formData="formData" />
      </uni-forms-item>
    </template>
  </uni-forms>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  formStates: {
    type: Object,
    required: true,
    default: () => {
      return {};
    },
  },
});

const formProperty = ref();
const formFields = ref();
const formData = ref();

watchEffect(() => {
  const data = {};
  formProperty.value = props.formStates.form || {};
  formFields.value = props.formStates.fields || {};
  if (!formData.value || JSON.stringify(formData.value) === '{}') {
    Object.keys(formFields.value).forEach(item => {
      data[item] = (formData.value && formData.value[item]) || formFields.value[item].defaultValue;
    });
    formData.value = data;
  }
});

const formRef = ref();
const emit = defineEmits(['submitForm']);
function submit() {
  formRef.value.validate().then(res => {
    emit('submitForm', res);
  });
}

function select(e) {
  console.log('上传成功', e);
}

defineExpose({
  submit,
});
</script>
