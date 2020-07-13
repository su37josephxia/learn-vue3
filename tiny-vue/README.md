只有刻意练习才能提高。为了更好的理解Vue3源码我计划使用渐进式的方法完成一个简写版的Vue框架。

## 写作计划
欢迎大家持续关注、计划肯定会变的越来越好。

- Step00 NoMVVM
- Step01 MVVM(Mock版)
- Step02 编译函数(Mock)
- Step03 数据劫持(精简版)
    - defineProperty Vue2.0
    - Proxy/Reflect Vue3.0
- Step04 编译、渲染(Mock版)
- Step05 (Ast、Transform、Generate)、渲染(精简版)
- Step06 自定义渲染器(Mock版)
- Step07 Dom Diff原理

## Step00 NoMVVM

![](https://user-gold-cdn.xitu.io/2020/7/8/1732c3aa1015b651?w=330&h=126&f=gif&s=20064)

想象一下如果没有MVVM框架我们要怎么实现一个这样的功能。
- 创建一个数据模型
```js
const data = {
        message: 'Hello Vue 3!!'
    }
```
- 创建一个视图
```js
<div id='app'>
    <input />
    <button></button>
</div>
```
- 创建一个将模型数据更新到视图上的渲染函数 
```js
function update() {
    // 更新视图
    document.querySelector('button').innerHTML = data.message
    document.querySelector('input').value = data.message
}

```
- 执行首次数据更新
```js
// 首次数据渲染
update()
```
- 绑定按钮点击事件
    - 修改模型中数据： 反转字符串
    - 修改模型后重新渲染数据
```js
document.querySelector('button').addEventListener('click', function () {
    data.message = data.message.split('').reverse().join('')
    update()
})
```
- 对输入项变化进行监听
    - 数据项变化时修改模型中数据
    - 修改模型后重新渲染数据
```js
document.querySelector('input').addEventListener('keyup', function () {
    data.message = this.value
    update()
})
```



### 数据监听的实现
Vue普遍走的就是数据劫持方式。不同的在于使用DefineProperty还是Proxy。也就是一次一个属性劫持还是一次劫持一个对象。当然后者比前者听着就明显有优势。这也就是Vue3的响应式原理。

Proxy/Reflect是在ES2015规范中加入的，Proxy可以更好的拦截对象行为，Reflect可以更优雅的操纵对象。
优势在于
- 针对整个对象定制 而不是对象的某个属性，所以也就不需要对keys进行遍历。
- 支持数组,这个DefineProperty不具备。这样就省去了重载数组方法这样的Hack过程。
- Proxy 的第二个参数可以有 13 种拦截方法，这比起 Object.defineProperty() 要更加丰富
- Proxy 作为新标准受到浏览器厂商的重点关注和性能优化，相比之下 Object.defineProperty() 是一个已有的老方法
- 可以通过递归方便的进行对象嵌套。

说了这么多我们先来一个小例子
```js
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
})
```


### 视图变化的监听
浏览器视图的变化,主要体现在对输入项变化的监听上，所以只需要通过绑定监听事件就可以了。
```js
    document.querySelector('input').addEventListener('keyup', function () {
        data.message = this.value
    })
```



