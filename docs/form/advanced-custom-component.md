---
nav:
  path: /form
group:
  title: 进阶使用
  order: 1
---

# 自定义组件

当我们的内置组件无法满足你的需求时，同时你的组件又无法作为标准的内置组件时，你可以采用添加自定义组件的方式，具体方式如下：

## 模板匹配

通过具名插槽 `mapping` 来新增自定义组件，具体使用方式如下，其中 `my-image-upload` 是你自己的自定义组件，同时你可以通过用于用插槽 `slot-scope` 拿到对应的表单项配置。

```xml
<template name="myImageUpload">
  <my-image-upload 
    field="{{ field }}" 
    value="{{value}}" 
    config="{{config}}" />
</template>


<form-render-mini 
  schema="{{schema}}"
>
  <view slot="mapping" slot-scope="props">
     <template 
      is="{{ props.widget }}" 
      data="{{
        field: props.field,
        config: props.config, 
        value: props.value,
      }}"
    />
  </view>
</form-render-mini>
```

## 条件匹配

同样也是通过具名插槽 mapping 来新增自定义组件，具体使用方式如下

```xml
<form-render-mini 
  schema="{{schema}}"
>
  <view slot="mapping" slot-scope="props">
    <my-image-upload 
      a:if="{{props.widget === 'myImageUpload'}}"
      value="{{props.value}}"
      field="{{ props.field }}" 
      config="{{props.config}}"
    />
  </view>
</form-render-mini>
```

##  slot-scope 

`slot` 的 `slot-scope` 包含如下四个信息：

| 字段             |    类型             |  字段描述                                              |
| :--------       | :--------           | :---                                                 |
| widget          | string              |  schema 配置中的 widget 字段，即组件名                   | 
| value           | any                 |  schema 配置中的 value 字段，即表单项默认值             | 
| field           | string              |  表单项的标识，在表单数据中的key          | 
| config          | Record<string, any> |  schema 配置中的 props 字段，即表单项拓展属性配置          | 



## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormCustomFormItem/index'></code>
