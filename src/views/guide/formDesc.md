---
title: formDesc表单描述
---

## 参数总览

```js
formDesc: [
  {
    // 类型
    type: String | Component,
    // Form-Item 标签文本
    label: String,
    // 默认值（只有该组件渲染时才会触发，隐藏等不渲染的情况不会触发）
    default: Mix,
    // 绑定的字段
    model: String,
    // 组件属性, 与`v-bind` 的 API 相同
    attrs: Object,
    // 组件事件, 与`v-on` 的 API 相同
    on: Object,
    // 组件外层属性, 与`v-bind` 的 API 相同
    itemAttrs: Object,
    // 组件的提示
    tip: String,
    // 是否隐藏该组件（隐藏时不会渲染组件）
    hidden: Boolean,
    // 是否隐藏该组件（隐藏时会渲染组件，会被校验）
    show: Boolean,
    // 联动显示（每次隐藏时会用表单resetField方法重置绑定的值）
    vIf: Function | Array,
    // 是否禁用组件
    disabled: Boolean,
    // 执行表单resetFields时禁止重置该组件的值
    disabledReset: Boolean,
    // 占位提示语
    placeholder: String,
    // 有选项组件的 options 部分, 如radio、select
    options: Array,
    //  使用formOptions时，options对应的映射字段
    optionsKey: String,
    // options中value对应的字段（默认value）
    optionsValueKey: String,
    // options中label对应的字段（默认label）
    optionsLabelKey: String,
    // 校验规则（会直接覆盖全局校验规则）
    rule: Array | Object,
    // 单独指定标签宽度（会覆盖表单labelWidth）
    labelWidth: String,
    // 组件的插槽, 使用渲染函数 https://cn.vuejs.org/v2/guide/render-function.html
    slots: Object,
    // 组件的作用域插槽, 使用渲染函数 https://cn.vuejs.org/v2/guide/render-function.html
    scopedSlots: Object
  }
]
```

## 参数具体说明

### type

**参考**:[组件 type 类型](/views/guide/formDesc-type/)

### label

**含义**:生成的表单中 Form-Item 标签文本

![png](../images/guide/formDescLabel.png =600x)

### default

**含义**:默认值（只有该组件渲染时才会触发，隐藏等不渲染的情况不会触发）

### model

**含义**:组件绑定的字段，会在 formData 里根据这个字段绑定组件的值

```js
formDesc: [
    {
        type: 'input',
        model: 'title',
        label: '标题'
    }
],
formData: {}

⏬⏬⏬
在生成的表单上的标题input输入`我是标题`后
⏬⏬⏬
console.log(formData)
// {
//    title: '我是标题'
// }

```

### attrs

**含义**:组件属性, 与`v-bind` 的 API 相同

:::tip

- 组件的 class 和 style 可在此放入
- [组件 type 类型](/views/guide/formDesc-type.html#内置-type-类型) 对应的 element-ui Attributes 也可在此放入

```js
formDesc: [
  {
    type: 'input',
    model: 'title',
    label: '标题',
    attrs: {
      class: 'el-title-input',
      style: 'font-size: 17px;',
      // [element-ui input Attributes]https://element.eleme.cn/#/zh-CN/component/input#input-attributes
      clearable: true,
      maxlength: 10
    }
  }
]
```

:::

### on

**含义**:组件事件, 与`v-on` 的 API 相同

:::tip

- [组件 type 类型](/views/guide/formDesc-type.html#内置-type-类型) 对应的 element-ui Events 也可在此放入

```js
formDesc: [
  {
    type: 'input',
    model: 'title',
    label: '标题',
    on: {
      // [element-ui input Events]https://element.eleme.cn/#/zh-CN/component/input#input-events
      change: (val) => {
        console.log(val, 'change')
      },
      input: (val) => {
        console.log(val, 'input')
      }
    }
  }
]
```

:::

### itemAttrs

**含义**:组件外层属性, 与`v-bind` 的 API 相同

:::tip

- 组件外层一般是`el-form-item`，此时可以放入[Form-Item Attributes](https://element.eleme.cn/#/zh-CN/component/form#form-item-attributes)
- `divider`、`layout`组件的外层是`div`，此时可以放入 class 与 style 等 Attributes

:::

```js
formDesc: [
  {
    type: 'input',
    model: 'title',
    label: '标题',
    itemAttrs: {
      class: 'el-title-input',
      style: 'font-size: 17px;',
      labelWidth: 120
    }
  }
]
```

### tip

**含义**:组件的提示

:::tip

tip 默认用[v-html](https://cn.vuejs.org/v2/guide/syntax.html#%E5%8E%9F%E5%A7%8B-HTML)渲染

:::

![png](../images/guide/formDescTip.png =600x)

```js
formDesc: [
  {
    model: 'sex',
    type: 'select',
    label: '性别',
    tip:
      '请下拉选择性别，<a target="_blank" href="http://www.baidu.com">不知道选什么点这里</a>',
    options: [
      {
        value: 's',
        label: '男'
      },
      {
        value: 's2',
        label: '女'
      }
    ]
  }
]
```

### hidden

**含义**:是否隐藏该组件（隐藏时不会渲染组件）

### show

**含义**:是否隐藏该组件（隐藏时会渲染组件，会被校验）

### vIf

**含义**:联动显示（每次隐藏时会用表单 resetField 方法重置绑定的值）

:::tip

表单有[内置联动方法](/views/guide/formDesc-linkages.html#内置联动函数)

:::

![png](../images/guide/formDescVIf.gif =600x)

```vue
<template>
  <el-custom-form :form-desc="formDesc" :form-data="formData" />
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        {
          type: 'select',
          model: 'type',
          label: '类型',
          options: [
            { value: '1', label: '输入框' },
            { value: '2', label: '文本框' },
            { value: '3', label: '开关' }
          ]
        },
        {
          type: 'input',
          model: 'value',
          label: '输入框',
          // 该equal为内置联动方法
          vIf: ['equal', { value: '1', model: 'type' }]
        },
        {
          type: 'textarea',
          model: 'value',
          label: '文本框',
          // 该equal为内置联动方法
          vIf: ['equal', [{ value: '2', model: 'type' }]]
        },
        {
          type: 'switch',
          model: 'value',
          label: '开关',
          // 接收一个函数，可接收formData作为入参,函数返回true时显示
          vIf: (formData) => formData.type === '3'
        }
      ]
    }
  }
}
</script>
```

### disabled

**含义**:是否禁用组件

### disabledReset

**含义**:执行表单 resetFields 时禁止重置该组件的值

:::tip

常用于只展示但不可修改的值，搭配[disabled](/views/guide/formDesc.html#disabled)使用

:::

![png](../images/guide/formDescDisabledReset.gif =600x)

```vue
<template>
  <el-custom-form
    ref="customForm"
    :form-desc="formDesc"
    :form-data="formData"
  />
</template>

<script>
export default {
  data() {
    return {
      formData: {
        value1: 'kkk',
        value2: 'xxx'
      },
      formDesc: [
        {
          type: 'input',
          model: 'value1',
          label: '输入框1'
        },
        {
          type: 'input',
          model: 'value2',
          label: '输入框2',
          disabledReset: true
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs['customForm'].resetFields()
    }, 2000)
  }
}
</script>
```

### placeholder

**含义**:组件占位提示语

![png](../images/guide/formDescPlaceholder.png =600x)

### options

**含义**:有选项组件的 options 部分, 如 radio、select

:::warning

不同于 formOptions，options 只接收数组形式

:::

:::tip

优先级:此 options 最高 > formOptions > 全局 formOptions

:::

### optionsKey

**含义**:使用 [formOptions](/views/guide/form-props.html#formoptions) 时，options 对应的映射字段

### optionsValueKey

### optionsLabelKey

**含义**:

- optionsValueKey:options 中 value 对应的字段（默认 value）
- optionsLabelKey:options 中 label 对应的字段（默认 label）

```js
formDesc: [
  {
    type: 'select',
    model: 'value1',
    label: '默认',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' }
    ]
  },
  {
    type: 'select',
    model: 'value2',
    label: '自定义',
    optionsValueKey: 'id',
    optionsLabelKey: 'name',
    options: [
      { id: '1', name: '1' },
      { id: '2', name: '2' }
    ]
  }
]
```

### rule

**含义**:校验规则（会直接覆盖全局校验规则）
**参考**:[rule](/views/guide/formDesc-rule/)

:::tip

优先级:此 rule 最高 > 全局 rule

:::

### labelWidth

**含义**:单独指定标签宽度（会覆盖表单 labelWidth）

:::tip

优先级:此 labelWidth 最高 > 表单 labelWidth

:::

### slots

### scopedSlots

**含义**:

- slots: 组件的插槽
- scopedSlots:组件的作用域插槽

**参考** [render function](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1)

::: tip

具体开放插槽可查看 [组件开放的插槽](/views/guide/formDesc-type.html#开放的插槽)

:::

```js
formDesc: [
  {
    type: 'input',
    model: 'title',
    label: '标题',
    slots: {
      prefix(h) {
        // 第一个参数是渲染函数，第二个参数是作用域插槽的数据
        return h('strong', {
          domProps: {
            innerHTML: 'H1'
          }
        })
      }
    }
  }
]
```
