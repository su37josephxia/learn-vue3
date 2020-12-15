# 然叔的Vue3学习笔记





### 🏠欢迎一起交流

![image-20201215173229353](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201215173229353.png)



## 目录结构

```
.
├── mini-vite							 // 简写版Vite
├── mini-vue               // 简写版Vue
├── vue-mastery            // Vue-Mastery 内容demo
├── template-explorer      // Vue3模板编译调试工具
├── demo									 // Vue基础APIDemo
├── source								 // vue3源码 submodule
└── vue-next-cli-demo			 // Vue3 CLI工具Demo
```





## 掘金和语雀精华

![image-20201215174235942](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20201215174235942.png)
		
[📖语雀  -  VueMastery学习笔记](https://www.yuque.com/nxtt7g/kompdt)



- [Vue3.0全球发布会干货总结](https://juejin.cn/post/6875236411349008398)
- [如何参加开源项目-如何给Vue3.0提PR](https://juejin.cn/post/6844904191744278542)














## 参考资料

### 试用Vue3
> 参考资料 https://blog.csdn.net/guotianqing/article/details/82391665

### 初始化子模块
```bash
git submodule add https://github.com/vuejs/vue-next source/vue-next
```

子模块内容记录在.gitmodules文件中
```bash
# 初始化子模块
git submodule init
# 更新模块
git submodule update --init --recursive
```

### 安装依赖
``` bash
## 修改镜像
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

## 去除pupteer
# 忽略下载Chromium
cd source/vue-next
## 去除pupteer
yarn --ignore-scripts

```
### 编译Build
``` bash
cd source/vue-next
yarn build
```

### 调试Vue代码
``` bash
cd source/vue-next
yarn build
```

### 测试API
