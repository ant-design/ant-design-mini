---
nav:
  path: /form
group:
  title: 通用
  order: 0
---

# 快速上手


`Form Render Mini` 是一个 `schema` 驱动的表单引擎。只需要传入一个包含各种描述信息的 `schema` ，就能渲染出一个完整的表单，是整个表单引擎的核心。 支持通过 schema 配置表单渲染的所有数据，包括表单分组、表单项、表单项的配置信息以及暴露的钩子等，下面我们详细介绍 schema 的字段细节。 


## **Schema**

通常情况下， `schema` 是一个 js 对象， 支持分组和非分组两种模式，一个最简单的 schema 的结构如下：

```js
// 分组
const schema1 = {
  type: 'object',
  properties: {
    formGroup_1: {
      type: 'object',
      title: '分组1',
      properties: {
        address: {
          title: '地址',
          type: 'string',
          widget: 'input',
          required: true,
          props: {
            placeholder: '请输入您的地址',
          }
        }
      }
    }
  },
};

// 非分组
const schema2 = {
  type: 'object',
  properties: {
    address: {
      title: '地址',
      type: 'string',
      widget: 'input',
      required: true,
      props: {
        placeholder: '请输入您的地址',
      }
    }
  },
};
```


## **使用方法**

当你编写好了 `schema`后，希望能够快速地渲染出对应的表单，你只需要引入我们的 **`form-render-mini`** 组件。

```json
{
  "usingComponents": {
    "form-render-mini": "@alipay/antd-mini/es/SolutionForm/form-render/index"
  }
}
```

然后在代码中像这样使用 **`form-render-mini`** 组件即可。

```xml
<form-render-mini schema="{{ schema }}" />
```

## **props**

对于 **`form-render-mini`** 组件我们提供了很多属性和事件配置，简单介绍下最外层的配置，详细信息请参考 `Props` 章节。


## **全局方法**

为了提高 **`form-render-mini`** 的灵活性，在全局暴露一些获取和修改表单内部数据的方法，具体参考 `全局 API` 章节。

```javascript

import { setFieldsValue } from '@alipay/antd-mini/es/SolutionForm/index';

```

## **内置组件**

为了提高 **`form-render-mini`** 的研发效率和体验，我们内置了一大批组件，这些组件基于 [antd-mini](https://mini.ant.design/) 二次封装，关于内置组件的详情信息你可以前往 `内置组件` 章节。

## **自定义组件**

为了提高 **`form-render-mini`** 的拓展性，我们支持用户自定义组件，通过自定义组件，你可以在 `schema` 新增更多 widget 来匹配你的自定组件，关于自定义组件的使用方式你可以前往 `自定义组件` 章节。






