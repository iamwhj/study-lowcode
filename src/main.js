import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import registerCustomComponents from './custom-components';

const app = createApp(App).use(store).use(ElementPlus);

// 注册自定义组件
registerCustomComponents(app);

app.mount('#app');
