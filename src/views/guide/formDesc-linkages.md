---
title: 组件联动
---

**示例**: [vIf 属性](/views/guide/formDesc.html#vif)

::: tip

组件的出现依托于其他组件的值时使用，隐藏后不会校验规则

可以根据自己的想象使用，例：

    可以搭配optionKeys切换不同的options

    可以搭配rule切换完全不同的校验规则

    可以搭配default切换不同的初始化默认值等

:::

### 函数联动

传入一个函数时，可以获取 formData 作为一个入参，返回 Boolean 告知是否出现此组件即可，返回 true 时为显示组件

```js
formDesc: [
  {
    type: 'input',
    model: 'isWorking',
    label: '是否工作'
  },
  {
    type: 'input',
    model: 'workingAge',
    label: '工龄',
    vIf: (formData) => formData.isWorking === '是'
  }
]
```

### 内置联动函数

项目内置了四种常用的联动函数判断，可以更方便的联动

> vIf 传入一个数组，第一项为联动函数名称，第二项为传递给函数的参数（参数为一个对象或是多个对象的数组）

- equal 联动函数

```js
// 当formData里[isWorking]字段的值为[是]时出现
vIf: ['equal', { model: 'isWorking', value: '是' }]
// 当formData里[isWorking]字段的值为[是]或[有]时出现
vIf: [
  'equal',
  [
    { model: 'isWorking', value: '是' },
    { model: 'isWorking', value: '有' }
  ]
]
```

- unequal 联动函数

```js
// 当formData里[isWorking]字段的值为[否]时不出现
vIf: ['unequal', { model: 'isWorking', value: '否' }]
// 当formData里[isWorking]字段的值为[否]或[无]时不出现
vIf: [
  'unequal',
  [
    { model: 'isWorking', value: '否' },
    { model: 'isWorking', value: '无' }
  ]
]
```

- everyEqual 联动函数

```js
// 当formData里[isWorking]字段的值为[是]时出现
vIf: ['everyEqual', { model: 'isWorking', value: '是' }]
// 当formData里[isWorking]字段的值为[是]且[over18]字段的值为[是]时出现
vIf: [
  'everyEqual',
  [
    { model: 'isWorking', value: '是' },
    { model: 'over18', value: '是' }
  ]
]
```

- everyUnequal 联动函数

```js
// 当formData里[isWorking]字段的值为[否]时不出现
vIf: ['everyUnequal', { model: 'isWorking', value: '否' }]
// 当formData里[isWorking]字段的值为[否]且[over18]字段的值为[否]时不出现
vIf: [
  'everyUnequal',
  [
    { model: 'isWorking', value: '否' },
    { model: 'over18', value: '否' }
  ]
]
```

### 自定义全局联动函数

可以[全局配置](/views/guide/global-config/)自定义联动函数使用

```js
// 自定义全局配置
Vue.use(genVueForm, {
  formVIfFn: {
    // formData会固定输出在第一个，后面参数根据vIf从第二项开始依次输出
    authentication: (formData, nameKey, ageKey) => {
      // 当符合判断为true时显示组件
      return formData[nameKey] === '人' && formData[ageKey] < 18
    }
  }
})

// 使用自定义全局联动函数
// 第一项填写已放入全局配置的联动函数名，后面可任意放入要传递给函数的参数
vIf: ['authentication', 'name', 'age']
```
