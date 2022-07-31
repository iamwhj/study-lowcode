<template>
  <div
    class="preview-content"
    @drop.stop.prevent="componentDrap"
    @dragover.prevent
  >
    <div
      v-for="component in page.components"
      :key="component.mark"
      :class="{
        'component-container': true,
        checked: component.mark === currentMark,
      }"
      :style="{ 'text-align': component.style.align }"
      @click="switchComponent(component)"
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

// 拖入组件
const componentDrap = (e) => {
  const data = e.dataTransfer.getData('component-drag');
  const component = JSON.parse(data);
  const componentData = getComponentTemplateData({
    name: component.name,
    fullName: component.fullName,
  });
  // 添加组件
  store.commit('addComponent', componentData);
  // 更新选中组件
  selectComponent(store, {
    name: component.name,
    fullName: component.fullName,
    mark: componentData.mark,
  });
};

// 选中组件
const switchComponent = (component) => {
  selectComponent(store, component);
};
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
