---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Icon 图标

语义化的矢量图形。当需要使用图形来对基础操作功能进行隐喻呈现，并给予用户正确、友好且清晰的操作指引时，可以使用 Icon 图标。

## 引入

在 index.json 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-icon": "antd-mini/es/Icon/index"
#endif
#if WECHAT
  "ant-icon": "antd-mini/Icon/index"
#endif
}
```

## 图标列表

搜索并查看图标，点击图标可进行复制。

<Icon></Icon>

## 代码示例

### 基本使用

```xml
<ant-icon type="SmileOutline" />
```

### 自定义大小及颜色

```xml
<ant-icon type="SmileOutline" style="font-size: 20px" />
<ant-icon type="SmileOutline" style="color: red" />
```

### Demo 代码

<code src='../../demo/pages/Icon/index'></code>

## API

| 属性                 | 说明                     | 类型               | 默认值 |
| :------------------- | :----------------------- | :----------------- | :----- |
| className            | 类名                     | string             | -      |
| style                | 样式                     | string             | -      |
| type                 | 图标的类型               | string             | -      |
| #if ALIPAY catchTap  | 点击图标时触发的回调函数 | (e: Event) => void | -      |
| #if ALIPAY onTap     | 点击图标时触发的回调函数 | (e: Event) => void | -      |
| #if WECHAT catchtap | 点击图标时触发的回调函数 | (e: Event) => void | -      |
| #if WECHAT bindtap  | 点击图标时触发的回调函数 | (e: Event) => void | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名       | 默认值                                                                                           | 深色模式默认值                                                                                   | 备注     |
| ------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| --icon-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff">#c5cad1</div> | 图标颜色 |
