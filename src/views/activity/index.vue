<template>
  <div class="activity-edit">
    <div class="button-box">
      <div class="operate-btn">
        <el-button>预览</el-button>
        <div>
          <el-button>保存</el-button>
          <el-button type="primary">发布</el-button>
        </div>
      </div>
    </div>
    <div class="activity-assemble">
      <div class="components">
        <ComponentList />
      </div>
      <div class="mobile">
        <ComponentPreview />
      </div>
      <div class="attribute">
        <ComponentSetting />
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentList from './ComponentList.vue';
import ComponentPreview from './ComponentPreview.vue';
import ComponentSetting from './ComponentSetting.vue';
</script>

<style scoped>
.activity-edit {
  height: calc(100vh - 50px);
  overflow: hidden;
}
.activity-edit .button-box {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-top: 4px;
  height: 46px;
  border-bottom: 1px solid rgb(242, 236, 236);
}
.button-box .operate-btn {
  float: right;
  display: flex;
}
.operate-btn .el-button {
  margin-right: 12px;
}
.activity-assemble {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 50px);
}
.activity-assemble .components {
  width: 300px;
  height: 100%;
  border-right: 1px solid #eee;
}
.activity-assemble .mobile {
  position: relative;
  width: 276px;
  height: 560px;
  background-image: url('@/assets/image/model.png');
  background-repeat: no-repeat;
  background-size: 276px 560px;
  box-sizing: border-box;
  padding: 69px 18px 66px;
}
.activity-assemble .attribute {
  width: 400px;
  height: 100%;
  border-left: 1px solid #eee;
}
</style>
