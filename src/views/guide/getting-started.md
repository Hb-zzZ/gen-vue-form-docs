---
title: 快速开始
---

::: warning

项目依赖于[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)，需要先自行引入

:::

## 安装

`项目目前还在频繁改进中，所以只开放作为第三方库放入项目中的方式，在项目的根目录下运行`

> git subtree add --prefix=lib/gen-vue-form git@github.com:Hb-zzZ/gen-vue-form.git master --squash

## 更新

`项目变更时，需要更新项目时`

> git subtree pull --prefix=lib/gen-vue-form git@github.com:Hb-zzZ/gen-vue-form.git master --squash

## 使用

```js
import Vue from 'vue'
import App from './App.vue'
// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 gen-vue-form
import ElCustomForm from '/lib/gen-vue-form/packages/index'

Vue.config.productionTip = false

// 注册 element-ui
Vue.use(ElementUI)

// 注册 gen-vue-form
Vue.use(ElCustomForm, {
  // 全局配置
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

`详细全局配置可查看`[gen-vue-form 全局配置](/views/config#global/)
