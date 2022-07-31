<template>
  <el-collapse v-model="activeName">
    <el-collapse-item
      v-for="collapse in categoryList"
      :key="collapse.id"
      :title="collapse.name"
      :name="collapse.name"
    >
      <div class="component-box">
        <div
          class="component-item"
          v-for="item in componentList"
          :key="item.id"
          draggable="true"
          @dragstart="dragStart($event, item)"
        >
          <img :src="item.path" />
          <span>{{ item.full_name }}</span>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
const activeName = ['基础组件'];

// 分类列表
const categoryList = [
  { id: 1, name: '基础组件' }
];

// 组件列表
const componentList = [
  {
    id: 1,
    name: 'vButton',
    full_name: '按钮',
    path: 'https://s1.ax1x.com/2022/07/11/j6ctCq.png',
  },
];

// 拖动组件
const dragStart = (e, item) => {
  const transferData = {
    name: item.name,
    fullName: item.full_name,
  };
  e.dataTransfer.setData('component-drag', JSON.stringify(transferData));
};
</script>

<style scoped>
.el-collapse-item {
  padding-left: 12px;
}
.el-collapse-item :deep(.el-collapse-item__header) {
  font-weight: 600;
}

.component-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 20px;
}
.component-box .component-item {
  width: 64px;
  height: 86px;
  text-align: center;
  font-size: 0;
}
.component-item img {
  width: 64px;
  height: 64px;
}
.component-item span {
  font-family: 'Microsoft YaHei';
  font-size: 13px;
}
</style>
