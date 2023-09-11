import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia';

const app = createApp(App);
const store = createPinia();

app.use(router);
app.use(ElementPlus);
app.use(store);

app.config.globalProperties.$fsl = "fsllala";
app.config.globalProperties.$say = {
    good<T>(message: T) {
        return "good" + message;
    }
};


type Say = {
    good<T>(message: T): string
}
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module 'vue' {
    export interface ComponentCustomProperties {
        $fsl: string,
        $say: Say
    }
}




    app.mount('#app')
