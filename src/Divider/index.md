---
nav:
  path: /components
group:
  title: 信息展示
toc: false
---

# Divider 分割线

区隔内容的分割线

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码示例

### 基本使用

<code src='../../demo/pages/Divider'></code>


## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| borderColor | string | 否 | '#eee' | 分割线颜色 |
| borderStyle | string | 否 | 'solid' | 分割线类型，支持css内置的值 |
| color | string | 否 | '#999' | 分割线文字颜色 |
| direction | 'horizontal' &verbar; 'vertical' | 否 | 'horizontal' | 分割线方向 |
| height | string | 否 | '30rpx' | 分割线高度，direction为'vertical'时生效 |
| margin | string | 否 | '16rpx' | 分割线间距， direction为'horizontal'表示垂直间距，direction为'vertical'表示水平间距 |
| textPosition | 'left' &verbar; 'center' &verbar; 'right' | 否 | 'center' | 分割线 |
| className | string | 否 | - | 类名 |

## 事件 

## CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-divider | 整体样式 |
| amd-divider-horizontal | 水平分割线样式 |
| amd-divider-horizontal-left | 左侧水平分割线样式 |
| amd-divider-horizontal-text | 水平分割线文案样式 |
| amd-divider-horizontal-right | 右侧水平分割线样式 |
| amd-divider-vertical | 垂直分割线样式 |


