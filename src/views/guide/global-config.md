---
title: 全局配置
---

## 全局配置总览

```js
import Vue from 'vue'
// 根据实际位置引入gen-vue-form
import genVueForm from './lib/gen-vue-form/packages'

Vue.use(packages, {
  // 表单校验规则相关字段
  formRules: {
    // 会作用于每一个组件，请慎用
    whole: [{ required: true, message: '不能为空', trigger: 'blur' }],
    // 会作用于[input]类型下每一个组件，请慎用
    input: { message: '长度不能超过10', max: 10 },
    // 自定义 formDesc中required 的 message
    requiredMsg: '{{ label }}不能为空'
  },
  // 自定义校验器
  formValidator: {
    // 自定义手机号验证器
    phone: (data) => {
      const { callback, rule, value } = data
      const { required } = rule

      if (!required && !value.trim()) {
        callback()
      } else if (!value.trim()) {
        callback(new Error('必填项'))
      } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
        callback(new Error('手机号码错误'))
      } else {
        callback()
      }
    }
  },
  // 表单自定义联动判断函数
  formVIfFn: {
    // 自定义验证是否符合身份
    authentication: (formData, nameKey, ageKey) => {
      // 当符合判断为true时显示组件
      return formData[nameKey] === '人' && formData[ageKey] < 18
    }
  },
  // 可以自定义[date]类型下所有的element-ui Attributes内的属性
  date: {
    valueFormat: 'yyyy-MM-dd'
  },
  // 可以自定义[upload]类型下所有的element-ui Attributes内的属性
  upload: {
    action: `xxx/files/upload`
  }
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

## 全局配置具体说明

### formRules

**含义**: 表单校验规则相关字段，[校验规则可查看](https://github.com/yiminghe/async-validator)

::: tip

相关传送门:

- [全局 wholeRules](/views/guide/form-rules.html#全局-wholerules)
- [全局 typeRules](/views/guide/form-rules.html#全局-typerules)
- [formDesc 中的 required](/views/guide/form-rules.html#formdesc-中的-required)

:::

### formValidator

**含义**: 自定义校验器

::: tip

定义、使用方法和[表单自定义验证器](/views/guide/form-props.html#formvalidator)一致，只是全局 formValidator 可作用于所有组件

:::

### formVIfFn

**含义**: 表单自定义联动判断函数

::: tip

相关传送门:

- [自定义全局联动函数](/views/guide/formDesc-linkages.html#自定义全局联动函数)

:::

### 各类型全局 attrs

**含义**: 可以全局定义组件[各种 type 类型的](/views/guide/formDesc-type.html#内置-type-类型)`element-ui Attributes`

```js
Vue.use(packages, {
  // 可以自定义[date]类型下所有的element-ui Attributes内的属性
  date: {
    valueFormat: 'yyyy-MM-dd'
  },
  // 可以自定义[upload]类型下所有的element-ui Attributes内的属性
  upload: {
    action: `xxx/files/upload`
  }
})
```
