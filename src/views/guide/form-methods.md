---
title: 表单methods方法
---

## 方法总览

> model 为 formDesc 中对应的 model 字段

```js
// 重置特定字段
resetField((model: String | Array))

// 重置所有字段
resetFields()

// 移除表单项的校验结果
clearValidate((model: String | Array | Nil))

// 对部分表单字段进行校验的方法
validateField((model: String | Array))

// 对整个表单进行校验的方法
validate()
```

## 方法具体说明

### resetField

**含义**:可重置特定字段并移除特定字段的校验结果

> 方法为一个 Promise，then 返回重置字段数组形式表示成功，catch 接收失败原因

```js
// 假如当前formDesc含有[title]和[name]两个model

// 重置单个model
resetField('title')
// 重置多个model
resetField(['title', 'name'])
```

### resetFields

**含义**:重置所有字段并移除所有字段的校验结果

> 方法为一个 Promise，then 返回表示成功，catch 返回捕获错误

```js
resetField()
```

### clearValidate

**含义**:移除表单项的校验结果，可传入特定字段

> 方法为一个 Promise，then 返回清除字段数组形式表示成功，catch 返回捕获错误

```js
// 假如当前formDesc含有[title]和[name]两个model

// 清除所有表单项校验结果
clearValidate()
// 清除单个model校验结果
clearValidate('title')
// 清除多个model校验结果
clearValidate(['title', 'name'])
```

### validateField

**含义**:对部分表单字段进行校验的方法

> 方法为一个 Promise，then 返回校验字段数组形式表示成功，catch 返回校验失败字段数组形式`[{model: '失败字段', msg: '失败消息'}]`或返回捕获错误

```js
// 假如当前formDesc含有[title]和[name]两个model

// 校验单个model校验结果
validateField('title')
// 校验多个model校验结果
validateField(['title', 'name'])
```

### validate

**含义**:对整个表单进行校验的方法

> 方法为一个 Promise，then 返回表单 formData 表示成功，catch 表示失败或返回捕获错误

```js
validate()
```
