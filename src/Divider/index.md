---
nav:
  path: /components
group:
  title: 布局
  order: 1
toc: 'content'
---

# Divider 分割线

区隔内容的分割线。对不同章节的文本段落进行分割。对行内文字/链接进行分割，例如表格的操作列。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-divider": "antd-mini/es/Divider/index"
#endif
#if WECHAT
  "ant-divider": "antd-mini/Divider/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-divider />
```

### 分割线带文字

```xml
<ant-divider text="center content" />
<ant-divider text="left content" textPosition="left" />
<ant-divider text="right content" textPosition="right" />
```

### 自定义样式

```xml
 <ant-divider
  text="custom styles"
  textStyle="color:#1677ff; fontWeight:600"
  lineHeight="{{2}}"
  lineType="dashed"
  lineColor="#1677ff"
/>
```

### 垂直分割线

```xml
<view class="divider-vertical">
  <view>100m</view>
  <ant-divider direction="vertical" />
  <view>detail address</view>
</view>
```

### Demo 代码

<code src='../../demo/pages/Divider/index'></code>

## API

| 属性          | 说明                                                             | 类型           | 默认值       |
| ------------- | ---------------------------------------------------------------- | -------------- | ------------ |
| className     | 根节点类名                                                       | string         | -            |
| direction     | 分割线方向，可选 `horizontal` `vertical`                         | string         | `horizontal` |
| lineColor     | 分割线颜色                                                       | string         | -            |
| lineHeight    | 分割线高度，仅当 `direction` 为 `horizontal` 时生效，单位为 `px` | number         | -            |
| lineType      | 分割线类型，可选 `solid` `dashed` `dotted`                       | string         | -            |
| lineWidth     | 分割线宽度，仅当 `direction` 为 `vertical` 时生效，单位为 `px`   | number         | -            |
| style         | 样式                                                             | string         | -            |
| textClassName | 分割线文字类名                                                   | string         | -            |
| textPosition  | 分割线文字位置，可选 `left` `center` `right`                     | string         | `center`     |
| textStyle     | 分割线文字样式                                                   | string         | -            |
| text          | 分割线文字                                                       | string \| slot | -            |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                 | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注           |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| --divider-text-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 分割线文本颜色 |
| --divider-border-color | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #fff;">#2b2b2b2</div> | 分割线边框颜色 |
