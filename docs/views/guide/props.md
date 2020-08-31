---
title: props参数
---

## 参数总览

```js
    // 表单数据
   formData: {
     type: Object,
     default() {
       return {}
     }
   },
   // 表单整体禁用
   disabled: {
     type: Boolean,
     default: false
   },
   // 表单描述
   formDesc: {
     type: Array,
     required: true
   },
   // 表单自身属性
   formAttrs: {
     type: Object,
     default() {
       return {}
     }
   },
   // 表单自定义验证器集合
   formValidator: {
     type: Object,
     default() {
       return {}
     }
   },
   // 响应式自动调整
   responsive: {
     type: Boolean,
     default: true
   },
   // 获取表单内选项，支持对象 函数 promise
   formOptions: {
     type: [Boolean, Object, Function],
     default: false
   }
```

## 参数具体说明

### formData

**含义**：是表单存放数据的地方

如果需要更新表单数据，只需将直接赋值给 formData 即可，只更新里面某个字段时，需要使用 vue 的[\$set](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E5%AF%B9%E8%B1%A1)进行更新

```vue
<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        {
          type: 'input',
          model: 'title',
          label: '标题'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      // 模拟从服务端获取数据
      this.formData = {
        title: '前端基础学习'
      }

      // !!! 如果是单个赋值，需要使用 $set 触发响应式
      this.formData.title = '前端基础学习' // ❌
      this.$set(this.formData, 'title', '前端基础学习') // ✅
    }, 1000)
  }
}
</script>
```

### disabled

**含义**：为 true 时，整个表单是禁用状态

### formDesc

**含义**：控制表单内出现的组件

**参考**：[formDesc 说明](/formDesc/)

### formAttrs

**含义**：form 表单自身属性，支持将 element-ui 原本的[Form Attributes](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)放入 form 中

```vue
<template>
  <el-custom-form
    ref="form"
    :form-desc="formDesc"
    :form-data="formData"
    :form-attrs="{
      labelWidth: '100px',
      labelPosition: 'left',
      hideRequiredAsterisk: false
    }"
  />
</template>
```

### formValidator

**含义**：表单自定义验证器，formDesc 中有组件定义了验证器时用到

```vue
<template>
  <el-custom-form
    ref="form"
    :form-desc="formDesc"
    :form-data="formData"
    :form-validator="formValidator"
  />
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        {
          type: 'input',
          model: 'title',
          label: '标题',
          rule: [{ required: true, validator: 'titleValidator' }]
        }
      ],
      formValidator: {
        titleValidator: (data) => {
          const { callback, rule, value } = data
          const { required } = rule

          const valueNotExist =
            !value || (typeof value === 'string' && !value.trim())

          if (!required && valueNotExist) {
            callback()
          } else if (valueNotExist) {
            callback(new Error('必填项'))
          } else if (value.length <= 3) {
            callback(new Error('标题三位以上'))
          } else {
            callback()
          }
        }
      }
    }
  }
}
</script>
```

### responsive

**含义**：是否响应式，是的时候当表单整体宽度小于 768px 时，所有布局都变为一行展示且 label 为顶部对齐，否的时候不变化。

<HorizontalLayout>

<template v-slot:left>

原本布局 和 不开启响应式布局

![](/guide/responsive1.png =400x)

</template>

<template v-slot:right>

响应式布局

![](/guide/responsive2.png =400x)

</template>

</HorizontalLayout>

### formOptions

**含义**：获取表单内选项，支持对象 函数 promise

::: warning

以下三种方法都可以获取到选项，但最终返回都必须为一个对象，且 promise 必须 resolve 接收一个对象。

如果是函数或 promise，可接收到一个可能含有选项的 formDesc 扁平化数组。

formDesc 中如果没有写入 optionsKey 作为指定选项映射字段，则默认选取自身 model 作为取选项的字段依据。

:::

```vue
<template>
  <el-custom-form
    ref="form"
    :form-desc="formDesc"
    :form-data="formData"
    :form-options="formOptions"
  />
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        {
          type: 'select',
          model: 'sex',
          label: '性别',
          optionsKey: 'sexOption'
        },
        {
          type: 'input',
          model: 'name',
          label: '姓名'
        },
        {
          type: 'select',
          model: 'over18',
          label: '是否满18岁'
        }
      ],
      // 以对象方式
      // formOptions: {
      //   sexOption: [
      //     { value: '1', label: '男' },
      //     { value: '2', label: '女' }
      //   ],
      //   over18: [
      //     { value: '1', label: '是' },
      //     { value: '0', label: '否' }
      //   ]
      // }

      // 以函数方式
      // formOptions: (data) => {
      //     // 此时data为 ⏬⏬⏬
      //     // [
      //     //   {
      //     //     type: 'select',
      //     //     model: 'sex',
      //     //     label: '性别',
      //     //     optionsKey: 'sexOption'
      //     //   },
      //     //   {
      //     //     type: 'select',
      //     //     model: 'over18',
      //     //     label: '是否满18岁'
      //     //   }
      //     // ]

      //   return {
      //     sexOption: [
      //       { value: '1', label: '男' },
      //       { value: '2', label: '女' }
      //     ],
      //     over18: [
      //       { value: '1', label: '是' },
      //       { value: '0', label: '否' }
      //     ]
      //   }
      // }

      // 以promise方式
      formOptions: (data) => {
        // 此时data为 ⏬⏬⏬
        // [
        //   {
        //     type: 'select',
        //     model: 'sex',
        //     label: '性别',
        //     optionsKey: 'sexOption'
        //   },
        //   {
        //     type: 'select',
        //     model: 'over18',
        //     label: '是否满18岁'
        //   }
        // ]

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              sexOption: [
                { value: '1', label: '男' },
                { value: '2', label: '女' }
              ],
              over18: [
                { value: '1', label: '是' },
                { value: '0', label: '否' }
              ]
            })
          }, 2000)
        })
      }
    }
  }
}
</script>
```
