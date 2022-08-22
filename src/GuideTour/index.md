---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: false
---

# GuideTour 新手引导

蒙层与自定义卡片的引导组件

## 何时使用

适用于页面上关键功能的介绍。

## 代码示例

### 基本使用

<code src='../../demo/pages/GuideTour'></code>

## 属性

### GuideTour

| 属性       | 类型                    | 必填 | 默认值 | 说明               |
| ---------- | ----------------------- | ---- | ------ | ------------------ |
| steps      | IStep[]                 | 否   | []     | 步骤信息           |
| visible    | boolean                 | 否   | false  | 引导是否可见, 受控 |
| index      | number                  | 否   | 0      | 当前步骤, 受控     |
| swiperable | boolean                 | 否   | false  | 是否开启滑动模式   |
| onCancel   | () => void              | 否   | -      | 关闭回调           |
| onChange   | (index: number) => void | 否   | -      | 步骤改变回调       |
| className  | string                  | 否   | -      | 类名               |

### IStep

| 属性     | 类型   | 必填 | 默认值 | 说明     |
| -------- | ------ | ---- | ------ | -------- |
| imageUrl | string | 否   | -      | 图片地址 |
| top      | number | 否   | -      | 距离顶部 |
| left     | number | 否   | -      | 距离左边 |

## 插槽

| 名称           | 说明           |
| -------------- | -------------- |
| step-{{index}} | 自定义内容插槽 |

## 样式类

#### GuideTour

| 类名                     | 说明             |
| ------------------------ | ---------------- |
| amd-guide-tour           | 整体样式         |
| amd-guide-tour-clear     | 关闭按钮样式     |
| amd-guide-tour-indicator | 进度标志整体样式 |
| amd-guide-tour-button    | 按钮组整体样式   |
| amd-guide-tour-item      | 步骤整体样式     |
| amd-guide-tour-item-img  | 图片样式         |
