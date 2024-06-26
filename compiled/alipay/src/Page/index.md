---
nav:
  path: /components
group:
  title: 页面
  order: 12
toc: 'content'
---

# Page 页面

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

页面级容器组件，提供加载状态、页面异常处理、顶部/底部安全边距等常用能力，开箱即用。

## 代码示例

<code src='pages/Page/index'></code>

## API

| 属性                   | 说明                                            | 类型                | 默认值      |
|----------------------|-----------------------------------------------|-------------------|----------|
| className            | 类名                                            | string            | -        |
| style                | 样式                                            | string            | -        |
| safeArea             | 安全区内边距位置，`top`、`bottom`、`both`                | string            | `both`   |
| loading              | 加载中                                           | boolean \| slot   | false    |
| loadingType          | 加载样式类型，`spin`、`mini`                          | string            | `spin`   |
| loadingSize          | 加载样式大小，`small`、`medium`、`large`、`x-large`     | string            | `medium` |
| loadingColor         | 加载样式颜色                                        | string            | '#ccc'   |
| status               | 页面异常状态，`failed`、`busy`、`disconnected`、`empty` | string \| slot    | -        |
| image                | 页面异常状态自定义图片                                   | string            | -        |
| title                | 页面异常状态自定义标题                                   | string            | -        |
| message              | 页面异常状态自定义描述                                   | string            | -        |
| actionText           | 页面异常状态按钮文案                                    | string            | -        |
| secondaryActionText  | 页面异常状态次要按钮文案                                  | string            | -        |
| extra                | 页面异常状态自定义按钮                                   | slot              | -        |
| onActionTap          | 页面异常状态按钮点击事件                                  | (e: any) => void; | -        |
| onSecondaryActionTap | 页面异常状态次要按钮点击事件                                | (e: any) => void  | -        |
