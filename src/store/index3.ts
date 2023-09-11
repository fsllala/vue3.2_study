import { defineStore } from "pinia";

import{Names} from "./store_name";

export const useGettersStore =defineStore(Names.TEST_THREE,{
    state() {
        return{
            name:"fsllala",
            age:18,
        }
    },
    getters:{
        // 需要加返回值的类型,不然会报错;        // 可以调用getters中其他方法
        newName():string{
            return `$-${this.name}-${this.newAge}`
        },

        // 其他方法
        newAge():string{
            return `喵喵喵-${this.age}`
        }
    },
    actions:{}
})