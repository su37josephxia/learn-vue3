# CompositionAPI

## 一、为什么选择CompositionAPI

### 1. Vue2的局限性
- 组件逻辑膨胀导致的可读性变差
- 无法跨组件重用代码
- Vue2对TS的支持有限

想象一下如果我们编写一个组件包含🔍搜索和排序另两个功能

在传统的OptionsAPI中我们需要将逻辑分散到以下六个部分

> OptionsAPI	
>
> - components	
> - props	
> - data	
> - computed	
> - methods	
> - lifecycle methods	

这样会是我们编辑一个逻辑不得不在代码中反复横跳


![image-20201111093749891](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201111093749891.png)

​     



### 2. 如何使用CompositionAPI解决问题

最佳的解决方法是将逻辑聚合就可以很好的代码可读性。

![options](https://gitee.com/josephxia/picgo/raw/master/juejin/options.gif)   			

   

这就是我们的CompositionAPI语法能够实现的功能。CompositionAPI是一个完全可选的语法与原来的OptionAPI并没有冲突之处。他可以让我们将相同功能的代码组织在一起，而不需要散落到optionsAPI的各个角落。



当然可以使用符合API并不是代表我们整个页面只需要使用一个组件完全用复合API进行组装。

![image-20201111100007382](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201111100007382.png)

我们还是需要通过组件将页面进行合理的分拆。

![image-20201111100019079](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201111100019079.png)





### 3. 代码重用方法PK

Vue2中的跨组件重用代码，我们大概会有三个选择。

#### 3.1 Mixin - 混入

![Kapture 2020-11-11 at 10.09.29](https://gitee.com/josephxia/picgo/raw/master/juejin/Kapture%202020-11-11%20at%2010.09.29.gif)

代码混入其实就是设计模式中的混合模式，缺点也非常明显。

可以理解为多重继承，简单的说就是一个人如何有两个父亲

​	

​	❌无法避免属性名冲突 - 长鼻子随谁

​	❌继承关系不清晰 

#### 3.2 Mixin Factory - 混入工厂

返回一个

![image-20201111163512254](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201111163512254.png)

✅代码重用方便

✅继承关系清洗

#### 3.3 ScopeSlots - 作用域插槽

- ❌可读性不高
- ❌配置复杂 - 需要再模板中进行配置
- ❌性能低 - 每个插槽相当于一个实例

#### 3.4 CompositionApi - 复合API

![image-20201111165818397](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201111165818397.png)

- ✅代码量少
- ✅没有引入新的语法，只是单纯函数
- ✅异常灵活
- ✅工具语法提示友好 - 因为是单纯函数所以 很容易实现语法提示、自动补偿



## 二、 setup & ref

1. When

### 三、Methods

### 四、 Computed - 计算属性

### 五、Reactive - 响应式语法

### 六、 Modularizing

### 七、 LifecycleHooks - 生命周期钩子

### 八、Watch

### 九、Sharing State - 共享状态

### 十、Suspense - 悬念

### 十一、Teleport



## 附录、

### 环境搭建

```
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```







