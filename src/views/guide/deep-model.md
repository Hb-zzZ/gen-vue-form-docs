---
title: 多层级model
---

::: warning

type 为 tableForm 时，tableForm 本身支持多层级，其下的子组件不支持多层级

:::

::: tip

建议重置时使用[内置重置方法](/views/guide/form-methods.html#resetfields)

如果直接把 formData 重置设为{}，element-ui 会抛出错误但不会影响正常运行，数据依然可以正常绑定（会自动创建外层对象）

:::

开发中经常会遇到后台需要的数据基本信息可能为一个对象，其他信息为另一个对象，只需如下即可：

```js
formData: {},
formDesc: [
  {
    label: '姓名',
    model: 'base.name',
    type: 'input'
  },
  {
    label: '年龄',
    model: 'base.age',
    type: 'input'
  },
  {
    label: '姓名',
    model: 'base.sex',
    type: 'input'
  },
  {
    label: '婚姻状况',
    model: 'other.marital',
    type: 'input'
  },
  {
    label: '住址',
    model: 'other.address',
    type: 'input'
  },
  {
    label: '秘密住址',
    model: 'other.secret.address',
    type: 'input'
  }
]

// 最终获取到的数据为
// {
//     base: {
//         name: 'xxx',
//         age: 'xxx',
//         sex: 'xxx'
//     },
//     other: {
//         marital: 'xxx',
//         address: 'xxx',
//         secret: {
//             address: 'xxx'
//         }
//     }
// }
```
