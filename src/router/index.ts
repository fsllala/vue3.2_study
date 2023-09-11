import { createRouter, RouteRecordRaw, createWebHistory, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "Home",
        component: () => import("../pages/路由/01.路由基础/home.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../pages/路由/01.路由基础/login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../pages/路由/01.路由基础/register.vue"),
    },
    {
        path: "/goods",
        name: "Goods",
        component: () => import("../pages/路由/02_路由传参/goods.vue"),
    },
    {
        path: "/detail",
        name: "Detail",
        component: () => import("../pages/路由/02_路由传参/detail.vue"),
    },
    {
        path: "/footer",
        name: "Footer",
        component: () => import("../pages/路由/03_二级路由/footer.vue"),
        children: [
            {
                path: "home",
                name: "Home",
                component: () => import("../pages/路由/03_二级路由/home.vue"),
            },
            {
                path: "mine",
                name: "Mine",
                component: () => import("../pages/路由/03_二级路由/mine.vue"),
            }
        ]
    },
    {
        path: "/detail",
        name: "Detail",
        component: () => import("../pages/路由/02_路由传参/detail.vue"),
    },
    // 01_ref部分
    {
        path: "/ref",
        name: "Ref",
        component: () => import("../pages/01_响应式数据/ref.vue"),
    },
    {
        path: "/reactive",
        name: "Reactive",
        component: () => import("../pages/01_响应式数据/reactive.vue"),
    },
    {
        path: "/toRef",
        name: "ToRef",
        component: () => import("../pages/01_响应式数据/ref解构.vue"),
    },
    {
        path: "/computed",
        name: "Computed",
        component: () => import("../pages/02_computed/01_computed.vue"),
    },
    {
        path: "/watch",
        name: "Watch",
        component: () => import("../pages/03_watch/01_watch.vue"),
    },
    {
        path: "/watchEffect",
        name: "WatchEffect",
        component: () => import("../pages/03_watch/02_watchEffect.vue"),
    },
    {
        path: "/parent",
        name: "Parent",
        component: () => import("../pages/04_父子组件传值/parent.vue"),
    },
    {
        path: "/digui",
        name: "Digui",
        component: () => import("../pages/05_递归组件/index.vue"),
    },
    {
        path: "/dongtai",
        name: "Dongtai",
        component: () => import("../pages/06_动态组件.vue/index.vue"),
    },
    {
        path: "/slot",
        name: "Slot",
        component: () => import("../pages/07_插槽/index.vue"),
    },
    {
        path: "/provide",
        name: "Provide",
        component: () => import("../pages/08_provide/index.vue"),
    },
    {
        path: "/direactive",
        name: "Direactive",
        component: () => import("../pages/09_自定义指令/index.vue"),
    },
    {
        path: "/lazyImg",
        name: "LazyImg",
        component: () => import("../pages/09_自定义指令/lazyImg.vue"),
    },
    {
        path: "/debounce",
        name: "Debounce",
        component: () => import("../pages/09_自定义指令/debounce.vue"),
    },
    {
        path: "/hooks",
        name: "Hooks",
        component: () => import("../pages/10_hooks/index.vue"),
    },
    {
        path: "/global",
        name: "Global",
        component: () => import("../pages/11_全局变量/index.vue"),
    },
    {
        path: "/pinia",
        name: "Pinia",
        component: () => import("../pages/12_pinia/index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


/** hash模式原理:  可以在可以在浏览器F12进行验证
 * 通过(window.)location.hash; 
 * 可以在浏览器F12,(window.)location.hash="/home";(window.)location.hash="/register";来进行跳转;
 * 
 * 如何监听左右箭头呢?
 * window.addEventListener("hashchange",(e)=>{console.log(e)})  然后回车,点击左右箭头,会出现一个对象,里面有newURL与oldURL
 */


/** history模式原理: 可以在可以在浏览器F12进行验证
 *  通过H5的 history进行监听的   
 * 
 * 如何监听左右箭头呢?
 * window.addEventListener("popstate",(e)=>{console.log(e)}) 然后回车,点击左右箭头
*/

export default router;
