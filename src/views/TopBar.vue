<template>
  <div class="topBar">
    <div class="menu-controll" @click="emit('changeMenuCollapse')">
      <el-icon :size="22">
        <Fold v-if="!menuCollapse" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="right-info">
      <div class="github">
        <a href="//github.com/iamwhj/mobile-maker" target="_blank">
          <img
            src="http://121.37.148.236:3301/image/upload_fc1b4bb47c49d38370f9b7ae07bc95ec.png"
            title="star好吗"
          />
          <span style="position: relative; bottom: 6px">源码仓库</span>
        </a>
      </div>
      <div class="revert">
        <el-icon><House /></el-icon>
        <span>返回活动</span>
      </div>
      <div class="userName">
        <el-icon><Avatar /></el-icon>
        <span>Admin</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Fold, Expand, House, Avatar } from '@element-plus/icons-vue';

const props = defineProps(['menuCollapse']);
const emit = defineEmits(['changeMenuCollapse']);
</script>

<style scoped>
.topBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 12px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.topBar .menu-controll {
  cursor: pointer;
}
.topBar .right-info {
  display: flex;
  gap: 20px;
  font-size: 14px;
}
.right-info .github {
  cursor: pointer;
}
.github img {
  width: 1.6em;
}
.github .revert {
  cursor: pointer;
}
.el-icon {
  position: relative;
  top: 2px;
  right: 3px;
}
</style>
