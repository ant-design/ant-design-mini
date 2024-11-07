---
nav:
  path: /components
group:
  title: 信息展示
  order: 12
toc: 'content'
---

# Progress 进度条

用于展示用户操作、任务的进度。

## 引入

在 index.json 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Progress/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Progress/index"
#endif
}
```

## 代码示例

### 基本使用

> 进度条默认为蓝色条形，`percent` 属性来设置当前进度。使用 `type`属性来设置形状，目前支持条形和环形两种形式。

```xml
<ant-progress percent="{{ 50 }}" />
<ant-progress type="line" percent="{{ 50 }}" />
<ant-progress type="circle" percent="{{ 50 }}" />
```

### 语义化进度条

> line 模式下，支持成功、失败状态的语义化状态条，通过设置 `status`属性实现。

```xml
<ant-progress status="success" percent="100" />
<ant-progress status="exception" percent="50" />
```

### 样式定制

> `strokeWidth` 可以设置进度条的粗细，`strokeColor` 可以设置进度条的颜色，`trailColor` 可以设置轨道颜色，`style` 可以高度定制样式。

```xml
<ant-progress percent="{{ 50 }}" strokeWidth="{{12}}" />
<ant-progress percent="{{ 50 }}" strokeColor="#00B578" />
<ant-progress percent="{{ 50 }}" trailColor="#FFCF9F" />
<ant-progress percent="{{ 50 }}" style="width: 70%" />
```

### Demo 代码

<code src='../../demo/pages/Progress/index'></code>

## API

| 属性        | 说明                                                 | 类型    | 默认值 |
| ----------- | ---------------------------------------------------- | ------- | ------ |
| className   | 类名                                                 | string  | -      |
| percent     | 百分比                                               | number  | 0      |
| status      | 状态，仅限 line 模式可用，可选 `success` `exception` | string  | -      |
| strokeColor | 进度条颜色                                           | string  | -      |
| strokeWidth | 进度条宽度，单位 px                                  | number  | 8      |
| style       | 样式                                                 | string  | -      |
| trailColor  | 轨道颜色                                             | string  | -      |
| type        | 类型，可选 `line` `circle`                           | string  | `line` |
| width       | 圆形进度条画布宽度，单位 px                          | number  | 100    |
| animation   | 是否开启过渡动画                                     | boolean | true   |
