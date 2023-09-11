
/**
 * 自定义hooks,将图片转为base64
 * 自定义hooks其实就是一个函数, 不同的是函数里面可以放vue的声明周期
*/


type Options = {
    el: string
}
import { onMounted } from "vue";

export default function (options: Options): Promise<{ baseUrl: string }> {
    return new Promise<{ baseUrl: string }>((resolve) => {
        onMounted(() => {
            const oImgs: HTMLImageElement = document.getElementById(options.el) as HTMLImageElement;
            oImgs.onload = () => {
                resolve({
                    baseUrl: base64(oImgs)
                })
            }
        })


        // 通过canvas 实现 一个toBase64的函数
        const base64 = (ele: HTMLImageElement) => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = ele.width;
            canvas.height = ele.height;
            ctx?.drawImage(ele, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL("image/png")
        }
    })

}

