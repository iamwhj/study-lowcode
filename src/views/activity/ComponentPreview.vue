<template>
  <div
    class="preview-content"
  >
    <div
      v-for="component in page.components"
      :key="component.mark"
      :class="{
        'component-container': true,
        checked: component.mark === currentMark,
      }"
      :style="{ 'text-align': component.style.align }"
    >
      <div style="display: inline-block">
        <component
          :is="component.name"
          :class="component.mark"
          v-bind="{ ...component.detail, ...generateStyle(component.style) }"
        ></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { getComponentTemplateData } from '@/commom';
import { computed, ref } from 'vue';
import { selectComponent, generateStyle } from '@/commom/helper';

const store = useStore();
const page = computed(() => store.getters.page);
const currentMark = computed(() => store.getters.currentComponent.mark);

</script>

<style scoped>
.preview-content {
  position: relative;
  height: 100%;
  overflow-y: auto;
  background-color: rgb(241, 234, 234);
}
.preview-content::-webkit-scrollbar {
  display: none;
}
.preview-content .checked {
  border: 1px dashed #1890ff;
}

.preview-content .component-container {
  overflow: hidden;
  font-size: 0;
}
</style>
