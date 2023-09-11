一: ref与reactive的区别
1. ref支持所有的类型,reactive仅支持引用数据类型 Array Object Map Set
2. ref取值、赋值都需要.value; reactive 不需要.value;
3. reactive proxy不能直接赋值,否则会破坏响应式对象的(A=B,将一个非响应式地址赋值给了reactive,致其失去响应式)
   解决方法:(其实就是不改变引用数据类型的地址即可)
   + 数组 可以使用push加解构
   + 将数组当做对象的一个属性