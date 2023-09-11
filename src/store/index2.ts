import { defineStore } from "pinia";
import { Names } from "./store_name"



// 3.1 actions里面可以是同步
type User = {
    name: string,
    age: number
}

const result: User = {
    name: "fsllala",
    age: 18
}


// 3.2 actions里面可以是异步
const loginYB = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "yibu",
                age: 2000
            })
        }, 2000);
    })
}


export const useGetterAndActStore = defineStore(Names.TEST_TWO, {
    state() {
        return {
            user: <User>{},
            sex:"man",
        }
    },
    getters: {},
    actions: {
        // 同步
        fetchTB() {
            this.user = result;
        },
        // 异步
        async fetchYB() {
            const results = await loginYB();
            this.user = results;

            // 3.3actions里面可以调用actions中的其他方法  
            this.setSex("woman")
        },

        // 其他方法
        setSex(sex:string){
            this.sex=sex;
        }
    }
})