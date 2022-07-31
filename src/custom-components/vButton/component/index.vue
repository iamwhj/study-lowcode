<template>
  <button class="btn-box" :style="btnStyle">
    {{ content }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: { type: String, default: '240px' },
  height: { type: String, default: '28px' },
  content: { type: String, default: '按钮' },
});

const btnStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
    backgroundColor: '#409EFF'
  };
});
</script>

<style scoped>
.btn-box {
  text-align: center;
  line-height: v-bind(height);
  border: none;
}
</style>
