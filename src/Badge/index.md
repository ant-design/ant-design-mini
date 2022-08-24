---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---

# Badge 徽标
徽标，红点、数字或文字。用于告诉用户待处理的事物或更新数。
## 何时使用
在右上角展示数字、文字、小红点	适用于产品化的新消息、新功能、新服务等内容的提醒，通过醒目视觉形式吸引用户处理

## 代码示例
### 基本使用
<code src='../../demo/pages/Badge'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'dot' &verbar; 'text' &verbar; 'bubble' &verbar; 'number' | 否 | 'dot' | badge 类型<br/>'dot':红点<br>'number':数字类型，会自动做>99转换<br>'text':文字气泡<br>'bubble':气泡形态(带箭头) |
| text | string &verbar; number | 否 | - | 红点内容，为空时表示只显示红点；可以是数字，也可以是文字；如果是数字，超过 99 会自动变成 ... |
| position | 'top-left' &verbar; 'top-right' | 否 | 'top-right' | 相对于 children 所在方位，left-top(左上角) top-right(右上角) |
| offsetX | string | 否 | '-50%' | 水平方向偏移量 |
| offsetY | string | 否 | '-50%' | 垂直方向偏移量 |
| stroke | boolean | 否 | false | 是否有描边 |
| iconType | string | 否 | - | 自定义图标 |
| bgColor | string | 否 | - | 自定义背景色，css色值 |
| className | string | 否 | - | 类名 |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-badge | 整体样式 |
| amd-badge-inner-text | 内部文本样式 |
| amd-badge-text | 文本样式 |
| amd-badge-dot | 红点样式 |
| amd-badge-icon | 图标样式 |
