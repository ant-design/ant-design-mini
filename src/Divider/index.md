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

<code src='pages/Divider/index'></code>


## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 根节点类名 |  `string` | - | 
| direction | 分割线方向 | `'horizontal' \| 'vertical'` | `'horizontal'` | 
| textPosition | 分割线文字位置 | `'left' \| 'center' \| 'right'` | `'center'` | 
| style | 样式 | `string` | - | 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| borderColor | string | 否 | '#eee' | 分割线颜色 |
| borderStyle | string | 否 | 'solid' | 分割线类型，支持css内置的值 |
| color | string | 否 | '#333' | 分割线文字颜色 |

| height | string | 否 | '30rpx' | 分割线高度，direction为'vertical'时生效 |
| margin | string | 否 | '16rpx' | 分割线间距， direction为'horizontal'表示垂直间距，direction为'vertical'表示水平间距 |

| className | string | 否 | - | 类名 |


