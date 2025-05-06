import { createApp } from 'vue'
import ElementPlus from "element-plus";
import './style.css'
import App from './App.vue'
import router from "./router";

const app = createApp(App);
app.use(router);

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    // locale: locale,
    // 支持 large、default、small
    size: "default",
  });

app.mount('#app')
