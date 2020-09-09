---
title: 表单校验
---

## 介绍

> 校验规则[element-ui from](https://element.eleme.cn/#/zh-CN/component/form#biao-dan-yan-zheng)  表单校检一致，都是使用的  [async-validator](https://github.com/yiminghe/async-validator)

## 校验规则

::: tip

- [formDesc 中的 rule](#formdesc-中的-rule) 、 [全局 typeRules](#全局-typerules) 、 [全局 wholeRules](#全局-wholerules)三者遇见会融合规则，校验规则融合的权重为 `formDesc 中的 rule` > `全局typeRules` > `全局wholeRules`

- [formDesc 中的 rules](#formdesc-中的-rules) 会覆盖所有规则

- [formDesc 中的 required](#formdesc-中的-required) 遇见上面两种情况都会进行融合，但是权重最低

:::

### formDesc 中的 rule

```js
formDesc: [
  {
    model: 'title',
    label: '标题',
    type: 'input',
    // rule 支持对象或是包含多个对象的数组
    // rule: { required: true, message: '不能为空', trigger: 'blur' }
    rule: [
      { required: true, message: '不能为空', trigger: 'blur' },
      { max: 10, message: '长度不能超过10' }
    ]
  }
]
```

### 全局 wholeRules

> [设置全局属性可详见](/views/guide/global-config/)

::: warning

全局 wholeRules 的 rules 会作用于每一个组件，请慎用

:::

```js
// 在全局属性定义
Vue.use(packages, {
  formRules: {
    // whole 支持对象或是包含多个对象的数组
    whole: [{ required: true, message: '不能为空', trigger: 'blur' }]
  }
})

// 组件内formDesc
formDesc: [
  {
    model: 'title',
    label: '标题',
    type: 'input',
    rule: { required: true, message: '标题不能为空', trigger: 'blur' }
  }
]
// 最终rule融合生成以下规则，由于权重问题，最后message为'标题不能为空'
// [{ required: true, message: '标题不能为空', trigger: 'blur' },
// { required: true, message: '不能为空', trigger: 'blur' }]
```

### 全局 typeRules

> [设置全局属性可详见](/views/guide/global-config/) <br/> [可设置的 typeRules 的 type 类型](/views/guide/formDesc-type.html#内置-type-类型)

::: warning

全局 typeRules 的 rules 会作用于该类型下每一个组件，请慎用

:::

```js
// 在全局属性定义
Vue.use(packages, {
  formRules: {
    // 支持对象或是包含多个对象的数组

    // type为input的全局 typeRules
    input: { required: true, message: '不能为空', trigger: 'blur' },
    // type为textarea的全局 typeRules
    textarea: [{ required: true, message: '不能为空', trigger: 'blur' }]
  }
})

// 组件内formDesc
formDesc: [
  {
    model: 'title',
    label: '标题',
    type: 'input',
    rule: { required: true, message: '标题不能为空', trigger: 'blur' }
  }
]
// 最终rule会融合type为input的全局typeRules生成以下规则，由于权重问题，最后message为'标题不能为空'
// [{ required: true, message: '标题不能为空', trigger: 'blur' },
// { required: true, message: '不能为空', trigger: 'blur' }]
```

### formDesc 中的 rules

```js
formDesc: [
  {
    model: 'title',
    label: '标题',
    type: 'input',
    // rules 支持对象或是包含多个对象的数组，使用了rules后会无视其他规则，以rules为最终规则
    // rules: { required: true, message: '不能为空', trigger: 'blur' }
    rules: [
      { required: true, message: '不能为空', trigger: 'blur' },
      { max: 10, message: '长度不能超过10' }
    ]
  }
]
```

### formDesc 中的 required

> 主要便于定义组件的必填

::: warning

如果在其他任意规则里包含了`{ required: Boolean }`这一规则，该规则会因为权重太低问题无效

:::

```js
formDesc: [
  {
    model: 'title',
    label: '标题',
    type: 'input',
    required: true
  }
]
```

为方便自定义 required 的 message，可全局定义 `requiredMsg` 达到效果

> [设置全局属性可详见](/views/guide/global-config/)

```js
// 在全局属性定义
Vue.use(packages, {
  formRules: {
    // 使用{{ xxx }}获取变量，xxx会从formDesc中取对应字段
    requiredMsg: '{{ label }}不能为空'
  }
})
// 定义后以上组件未填写时校验提示语为 '标题不能为空'
```
