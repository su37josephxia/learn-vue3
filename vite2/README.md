## 安装

```js
npm i vite -s
```

![image-20210223101629575](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210223101629575.png)



选择类型

![image-20210223101814638](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210223101814638.png)



![image-20210223102033017](https://gitee.com/josephxia/picgo/raw/master/juejin/image-20210223102033017.png)



```bash
# 指定文件名和模板
npm init @vitejs/app vite-element-admin --template vue
```







Vscode插件支持

Vue3 support All in One





## 配置别名

vite.config.js

```javascript
import path from 'path'
export default {
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
    },
  },
}
```





## 配置文件vite.config.js

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]  // 插件形式支持vue
})
```





## Jsx支持

```
npm i @vitejs/plugin-vue-jsx -D
```



vite.config.js

```
import vueJsx from "@vitejs/plugin-vue-jsx";

export default {
  plugins: [vue(), vueJsx()],
}
```



