---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Progress 进度条

用于展示用户操作、任务的进度。

## 引入

在 `index.json` 中引入组件

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
<ant-progress percent="{{50}}" />
<ant-progress type="line" percent="{{50}}" />
<ant-progress type="circle" percent="{{50}}" />
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
<ant-progress percent="{{50}}" strokeWidth="{{12}}" />
<ant-progress percent="{{50}}" strokeColor="#00B578" />
<ant-progress percent="{{50}}" trailColor="#FFCF9F" />
<ant-progress percent="{{50}}" style="width: 70%" />
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

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。


| 变量名                     | 浅色模式默认值                                                                                           | 深色模式默认值                                                                                           | 备注             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------- |
| --progress-stroke-color    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>       | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>       | 进度条主颜色     |
| --progress-trail-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>       | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>       | 进度条轨道颜色   |
| --progress-success-color   | <div style="width: 150px; height: 30px; background-color: #22b35e; color: #ffffff;">#22b35e</div>       | <div style="width: 150px; height: 30px; background-color: #34b368; color: #ffffff;">#34b368</div>       | 进度条成功颜色   |
| --progress-indicator-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>       | 进度条指示器颜色 |
| --progress-exception-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>       | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>       | 进度条异常颜色   |
| --progress-assist-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div>       | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div>       | 进度条辅助颜色   |
