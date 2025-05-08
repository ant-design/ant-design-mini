---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Badge

徽标，显示红点、数字或文字。用于提醒用户，有待处理的事项或者新的更新数量。当需要在右上角展示数字、文字或小红点时使用。适合于提示产品化的新消息、功能或服务等内容，通过显眼的视觉形式吸引用户注意，并促使其进行相关操作。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-badge": "antd-mini/es/Badge/index"
#endif
#if WECHAT
  "ant-badge": "antd-mini/Badge/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-badge type="dot" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="text" text="new" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="number" text="{{2}}" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="bubble" text="new" position="top-right"><view class="box" /></ant-badge>
```

### 带边框

```xml
<ant-badge stroke type="dot" position="top-right"><view class="box" /></ant-badge>
```

### 自定义背景和位置

```xml
<ant-badge type="dot" position="bottom-right"><view class="box" /></ant-badge>
<ant-badge type="dot" position="top-center" bgColor="#1677FF"><view class="box" /></ant-badge>
```

### 设置偏移

```xml
<ant-badge type="dot" position="bottom-right" offsetX="-20px" offsetY="-14px">
  <view class="box" />
</ant-badge>
```

### 自定义内容

```xml
<ant-badge type="text" position="top-right">
  <ant-icon type="GlobalOutline" slot="text" />
  <view class="box" />
</ant-badge>
```

### Demo 代码

<code src="../../demo/pages/Badge/index"></code>

## API

| 属性      | 说明                                                                                                                                     | 类型                     | 默认值      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| bgColor   | 自定义背景色，CSS 色值                                                                                                                   | string                   | -           |
| className | 组件根节点的类名                                                                                                                         | string                   | -           |
| offsetX   | 水平方向偏移量                                                                                                                           | string                   | '-50%'      |
| offsetY   | 垂直方向的偏移量                                                                                                                         | string                   | '-50%'      |
| position  | 徽标相对于容器的位置，选项包括：`top-left`、`top-right`、`top-center`、`left`、`right`、`bottom-left`、`bottom-center` 和 `bottom-right` | string                   | `top-right` |
| stroke    | 徽标是否带有描边                                                                                                                         | boolean                  | false       |
| style     | 自定义样式                                                                                                                               | object                   | -           |
| text      | 徽标内容，为空代表仅展示红点；可以是数字或文字；若是数字且超过 99，则显示为 `...`                                                        | string \| number \| slot | -           |
| type      | 徽标类型，选项包括：`dot`（红点）、`number`（数字类型，超过 99 会自动转换）、`text`（文字气泡）和 `bubble`（气泡形态，带有箭头）         | string                   | `dot`       |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                   | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注           |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| --badge-text-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Badge 文字颜色 |
| --badge-background-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | Badge 背景颜色 |
