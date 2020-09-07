---
title: 组件 type 类型
---

## type 具体说明

- 当 type 为 `Component` 时，会直接加载该组件，定义组件可查看[自定义组件](/views/guide/custom-component)
- 当 type 为 `String` 时，加载顺序为 `内置组件` ⏩ [全局组件](/views/guide/custom-component) ⏩ `报错`

<br/>
<br/>

## 内置 type 类型

| type           | 含义           | element-ui Attributes                                                                       | element-ui Events                                                                   |
| -------------- | -------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| autocomplete   | 带建议输入框   | [Attributes](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-attributes)      | [Events](https://element.eleme.cn/#/zh-CN/component/input#autocomplete-events)      |
| cascader       | 级联选择器     | [Attributes](https://element.eleme.cn/#/zh-CN/component/cascader#cascader-attributes)       | [Events](https://element.eleme.cn/#/zh-CN/component/cascader#cascader-events)       |
| checkbox       | 复选框         | [Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-attributes) | [Events](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-events) |
| checkboxButton | 复选框按钮样式 | [Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-attributes) | [Events](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-group-events) |
| date           | 日期           | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |
| daterange      | 日期范围       | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |
| dates          | 单个或多个日期 | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |
| divider        | 分割线         | [Attributes](https://element.eleme.cn/#/zh-CN/component/divider#divider-attributes)         | -                                                                                   |
| input          | 输入框         | [Attributes](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)             | [Events](https://element.eleme.cn/#/zh-CN/component/input#input-events)             |
| layout         | 栅格布局       | -                                                                                           | -                                                                                   |
| month          | 月             | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |
| multipleSelect | 多选下拉选择器 | [Attributes](https://element.eleme.cn/#/zh-CN/component/select#select-attributes)           | [Events](https://element.eleme.cn/#/zh-CN/component/select#select-events)           |
| number         | 数字           | [Attributes](https://element.eleme.cn/#/zh-CN/component/input-number#attributes)            | [Events](https://element.eleme.cn/#/zh-CN/component/input-number#events)            |
| password       | 密码输入框     | [Attributes](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)             | [Events](https://element.eleme.cn/#/zh-CN/component/input#input-events)             |
| radio          | 单选           | [Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes)       | [Events](https://element.eleme.cn/#/zh-CN/component/radio#radio-group-events)       |
| select         | 下拉选择器     | [Attributes](https://element.eleme.cn/#/zh-CN/component/select#select-attributes)           | [Events](https://element.eleme.cn/#/zh-CN/component/select#select-events)           |
| slider         | 滑块           | [Attributes](https://element.eleme.cn/#/zh-CN/component/slider#attributes)                  | [Events](https://element.eleme.cn/#/zh-CN/component/slider#events)                  |
| slot           | 自定义插槽     | -                                                                                           | -                                                                                   |
| switch         | 开关           | [Attributes](https://element.eleme.cn/#/zh-CN/component/switch#attributes)                  | [Events](https://element.eleme.cn/#/zh-CN/component/switch#events)                  |
| tableForm      | 表格表单       | -                                                                                           | -                                                                                   |
| text           | 静态文本       | -                                                                                           | -                                                                                   |
| textarea       | 多行文本输入框 | [Attributes](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)             | [Events](https://element.eleme.cn/#/zh-CN/component/input#input-events)             |
| upload         | 上传按钮       | [Attributes](https://element.eleme.cn/#/zh-CN/component/upload#attribute)                   | -                                                                                   |
| week           | 周             | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |
| year           | 年             | [Attributes](https://element.eleme.cn/#/zh-CN/component/datetime-picker#attributes)         | [Events](https://element.eleme.cn/#/zh-CN/component/datetime-picker#events)         |

## 特殊说明

### divider

### text

`divider`和`text`都是静态文本，一般用于单纯显示，所以绑定的 model 不会在 formData 中生成，且用 default 控制文字内容

`divider`中 label 字段无效

![png](../images/guide/formDesc-typeText.png =600x)

```js
formDesc: [
  {
    type: 'divider',
    label: '分割线',
    model: 'divider',
    default: '我是分割线'
  },
  {
    type: 'text',
    label: '静态文本',
    model: 'text',
    default: '我是静态文本'
  }
]
```

### checkbox

### checkboxButton

### multipleSelect

### select

### radio

`checkbox`、`checkboxButton`、`multipleSelect`、`select`、`radio`都是带选项的组件，选项中字段`attrs:Object`可以带入 element-ui Attributes

| type           | options Attributes                                                                           |
| -------------- | -------------------------------------------------------------------------------------------- |
| checkbox       | [Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-attributes)        |
| checkboxButton | [Attributes](https://element.eleme.cn/#/zh-CN/component/checkbox#checkbox-button-attributes) |
| multipleSelect | [Attributes](https://element.eleme.cn/#/zh-CN/component/select#option-attributes)            |
| select         | [Attributes](https://element.eleme.cn/#/zh-CN/component/select#option-attributes)            |
| radio          | [Attributes](https://element.eleme.cn/#/zh-CN/component/radio#radio-attributes)              |

![png](../images/guide/formDesc-typeOptions.png =300x)

```js
formDesc: [
  {
    type: 'radio',
    label: '单选',
    model: 'radio',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2', attrs: { disabled: true } },
      { value: '3', label: '3' }
    ]
  }
]
```

### layout

该组件为布局组件，可参考[Layout](https://element.eleme.cn/#/zh-CN/component/layout)

![png](../images/guide/formDesc-typeLayout.png =600x)

```js
formDesc: [
  {
    type: 'layout',
    // 此可以放入 https://element.eleme.cn/#/zh-CN/component/layout#row-attributes 属性
    rowAttrs: {
      gutter: 20
    },
    cols: [
      {
        // 可控制这一列组件的显示
        hidden: false,
        // 通过span控制这一列的宽度
        span: 12,
        // 此可以放入 https://element.eleme.cn/#/zh-CN/component/layout#col-attributes 属性
        colAttrs: {
          offset: 1
        },
        // 此为当前列里的所有组件desc
        items: [
          {
            type: 'text',
            label: '文字',
            model: 'text',
            default: '我是静态文字'
          },
          {
            type: 'input',
            label: '姓名',
            model: 'name'
          }
        ]
      },
      {
        span: 5,
        items: [
          {
            type: 'select',
            label: '性别',
            model: 'sex',
            options: [
              { value: '1', label: '男' },
              { value: '0', label: '女' }
            ]
          }
        ]
      },
      {
        span: 6,
        items: [
          {
            type: 'date',
            label: '出生日期',
            model: 'birthdate'
          },
          {
            type: 'input',
            label: '注册人',
            model: 'registrant'
          }
        ]
      }
    ]
  }
]
```

### slot

该组件为插槽组件，组件过大时建议使用[组件作为 type 方式 或 全局组件](#type-具体说明)

![png](../images/guide/formDesc-typeSlot.png =600x)

```vue
<template>
  <el-custom-form :form-desc="formDesc" :form-data="formData">
    <!-- 有两个相同的作用域插槽，会以最后一个为准 -->
    <h2 slot="title" slot-scope="{ desc }" :class="desc.class">
      {{ desc.class }}
    </h2>
    <h2 slot="title" slot-scope="{ desc }" :class="desc.class">
      {{ desc.text }}
    </h2>
    <!-- 有两个相同的插槽，两个都会出现 -->
    <h2 slot="fixedTitle">
      我是固定的标题
    </h2>
    <h2 slot="fixedTitle">
      我是固定的标题2
    </h2>
    <!-- 可以通过获取value和onInput进行绑定值的更新 -->
    <input
      type="text"
      slot="nameSlot"
      slot-scope="{ value, onInput }"
      :value="value"
      @input="(ev) => onInput(ev.target.value)"
    />
  </el-custom-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        // 不需要更新值到formData的不写入model字段（防止生成校验规则和影响formData）
        {
          type: 'slot',
          slotName: 'title',
          class: 'title-h2',
          text: '我是标题'
        },
        {
          type: 'slot',
          slotName: 'fixedTitle'
        },
        // 绑定了model字段后默认会生成校验规则，可正常和其他组件一样写入rule
        {
          type: 'slot',
          label: '插槽input',
          slotName: 'nameSlot',
          model: 'name',
          rule: { required: true }
        }
      ]
    }
  }
}
</script>
```

### tableForm

该组件为表格表单组件

![png](../images/guide/formDesc-typeTableForm.gif =600x)

```js
formDesc: [
  {
    model: 'tableForm',
    type: 'tableForm',
    label: '表格表单',
    // 是否禁用整个tableForm
    disabled: false,
    hidden: false,
    show: true,
    itemAttrs: {
      class: 'custom-tableForm'
    },
    // 表格属性  https://element.eleme.cn/#/zh-CN/component/table#table-attributes
    attrs: {
      stripe: true,
      border: true
    },
    // 整个tableForm的默认值（必须为一个数组，填入默认值时会深拷贝数组）
    default: [
      {
        name: '第一个人',
        sex: '0',
        remark: '我是第一个人'
      }
    ],
    // 校验整个tableForm数据
    rule: {
      required: true,
      message: '至少录入一条数据'
    },
    // tableForm每行填写的组件
    cols: [
      {
        // 表格Table-column Attributes属性 https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes
        attrs: {
          fixed: 'left'
        },
        // 最小宽度，一般填写此属性（可以缩放自适应，想用width时可以在attrs写入，该值不填写即可）
        minWidth: 120,
        // 在此放入组件信息，对应一列
        section: {
          hidden: false,
          show: true,
          // 是否禁用该组件
          disabled: false,
          model: 'name',
          type: 'input',
          label: '名字',
          // 该校验会在每行该组件使用
          rule: {
            required: true,
            message: '缺少名字'
          },
          // 该默认值会在每行新增时放入，不会覆盖表格表单的默认值
          default: '我是一个人'
        }
      },
      {
        attrs: {
          width: 90
        },
        section: {
          model: 'sex',
          type: 'select',
          label: '性别',
          options: [
            { value: '0', label: '男' },
            { value: '1', label: '女' }
          ],
          rule: {
            required: true,
            message: '缺少性别'
          }
        }
      },
      {
        minWidth: 200,
        section: {
          model: 'remark',
          type: 'textarea',
          label: '备注'
        }
      }
    ]
  }
]
```
