import { defineStore } from "pinia";
import { Names } from "./store_name";

export const usePiniaTest = defineStore(Names.TEST_ONE, {
    // 必须是个函数
    // 在state中返回的对象,会自动挂再到这个store实例上,可以在getters和actions通过this来访问;
    state() {
        return {
            current: 100,
            names: "fsllala",
        }
    },
    // 类似于computed,也有缓存
    getters: {},
    // 类似于methods, 同步,异步都可以做 提交state
    actions: {
        // 1.修改store中的state的值  (好像有5种方法,通过actions修改是最好的,易于代码维护)
        changeState(num: number) {
            this.current = num;
        }
    }
})  