<template>
  <el-form :model="form">
    <el-form-item label="按钮文字：">
      <el-input v-model="form.content" style="width: 230px" />
    </el-form-item>
  </el-form>
  <BaseSetting />
</template>

<script setup>
import { reactive, watch } from 'vue';
import BaseSetting from '@/components/baseSetting';

const props = defineProps({
  updateCompDeail: { type: Function },
  content: { type: String, default: '按钮' },
});

const form = reactive({
  content: props.content,
});

watch(form, () => {
  props.updateCompDeail(form);
});
</script>

<style scoped></style>
