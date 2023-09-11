<template>
    <div class="box">
        <div v-for="(item, index) in arr" :index="index">
            <!-- 正常展示 -->
            <!-- <img :src="item" alt="" width="300" height="500"> -->

            <!-- 自定义指令懒加载展示  把:src="item"换成 v-lazy-img="item" -->
            <img v-lazy-img="item" alt="" width="300" height="500">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Directive } from "vue";
/***
 * 懒加载
 * 1. 通过vite提供的方法进行图片一次性全部引入
 * 2. 自定义指令懒加载
 */



/**
 * vite方法图片一次性引入:
 * import.meta.globalEager("相对路径")  (静态加载, 被弃用了,但是还可用) == import.meta.glob("相对路径",{eager:true}) 
 * import.meta.glob("相对路径")    (懒加载, import函数,可以进行代码分包)
 * 
 */

// glob是懒加载的模式
// let modules ={
//     "xxxx":()=>import("xxxx");   //遇到import会进行代码分包
// }


// globalEager 静态加载
// import xxx from "xxx";

const imageList: Record<string, { default: string }> = import.meta.glob("@/assets/imgs/*.*", { eager: true });
//   console.log(imageList);
let arr = Object.values(imageList).map(v => v.default);
// console.log(arr);


/**
 * 自定义指令懒加载 函数简写形式
 * 
 * @param el  el放在img上,所以泛型为HTMLImageElement
 * @param binding 是图片链接,所以为string类型;
 * 
 */
const vLazyImg: Directive<HTMLImageElement, string> = async (el, binding) => {
    // 1. 通过el.src设置默认展示图片;
    const defaultImg = await import("@/assets/vue.svg");
    el.src = defaultImg.default;
    // console.log(el);
    // console.log(defaultImg);

    // 2.当滑到可视区域时,将默认图片进行替换 通过IntersectionObserver判断可视区域
    const observer = new IntersectionObserver((entries)=>{
        // entries是个数组,取第0项就ok  通过entries[0]属性intersectionRatio [0-1] 来判断展示比例 
        console.log(entries[0],binding.value)
        if(entries[0].intersectionRatio>0){
            el.src=binding.value;
            // 停止当前元素监听
            observer.unobserve(el);
        }
    })
    observer.observe(el); //observe(监听的元素)

}



</script>

<style scoped>  
.box {
    height: 100vh;
    overflow: auto;
    text-align: center;
}
</style>