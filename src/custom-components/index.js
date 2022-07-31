import Button from './vButton/component';
import ButtonConfig from './vButton/config';

const registerCustomComponents = (Vue) => {
  Vue.component('vButton', Button);
  Vue.component('vButtonConfig', ButtonConfig);
};

export default registerCustomComponents;
