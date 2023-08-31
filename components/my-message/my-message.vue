<template>
  <uni-popup ref="popupRef" type="message">
    <uni-popup-message :type="type" :message="message" :duration="duration">
      <slot></slot>
    </uni-popup-message>
  </uni-popup>
</template>

<script setup>
import { ref } from 'vue';

const popupRef = ref();
const type = ref();
const message = ref();
const duration = ref();

function open(options) {
  type.value = options.type;
  message.value = options.message || '';
  duration.value = options.duration || 3000;
  popupRef.value.open();
}

const handleFun = {};
['success', 'warning', 'info', 'error'].forEach(type => {
  handleFun[type] = options => {
    if (typeof options === 'string') {
      options = { message: options };
    }
    open({ ...options, type });
  };
});

defineExpose(handleFun);
</script>
