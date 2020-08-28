---
title: 介绍
---

## 主要功能 👊

- 内置 20 多种表单组件, 包括常用的`单选`、`多选`、`输入框`、`下拉选择`等
- 内置易上手的表单校检，支持添加全局校验规则，支持自定义验证器
- 支持自定义`格栅布局`
- 支持表单组件联动，内置常用联动方法，可全局配置联动方法
- 可自行引入组件使用或通过插槽自定义组件
- model 绑定支持多层级

## 使用对比

需达到以下效果

![](/guide/form.png =400x)

<VerticalLayout>

<template v-slot:top>

### 使用前 😑

```vue
<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%;"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
```

</template>

<template v-slot:bottom>

### 使用后 😀

```vue
<template>
  <el-custom-form ref="form" :form-desc="formDesc" :form-data="formData" />
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      formDesc: [
        {
          type: 'input',
          label: '活动名称',
          model: 'name'
        },
        {
          type: 'select',
          label: '活动区域',
          options: [
            {
              label: '区域一',
              value: 'shanghai'
            },
            {
              label: '区域二',
              value: 'beijing'
            }
          ],
          model: 'region'
        },
        {
          type: 'date',
          label: '活动时间',
          model: 'date'
        },
        {
          type: 'switch',
          label: '即时配送',
          model: 'delivery'
        },
        {
          type: 'checkbox',
          label: '活动性质',
          options: [
            {
              label: '美食/餐厅线上活动',
              value: '1'
            },
            {
              label: '地推活动',
              value: '2'
            },
            {
              label: '线下主题活动',
              value: '3'
            },
            {
              label: '单纯品牌曝光',
              value: '4'
            }
          ],
          model: 'type'
        },
        {
          type: 'radio',
          label: '特殊资源',
          options: [
            {
              label: '线上品牌商赞助',
              value: '1'
            },
            {
              label: '线下场地免费',
              value: '2'
            }
          ],
          model: 'resource'
        },
        {
          type: 'textarea',
          label: '活动形式',
          model: 'desc'
        }
      ]
    }
  }
}
</script>
```

</template>

</VerticalLayout>
