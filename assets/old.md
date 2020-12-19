




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

