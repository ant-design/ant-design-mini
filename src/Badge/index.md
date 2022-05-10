---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: false
---

# Badge 徽标
徽标，红点、数字或文字。用于告诉用户待处理的事物或更新数。
## 何时使用
在右上角展示数字、文字、小红点	适用于产品化的新消息、新功能、新服务等内容的提醒，通过醒目视觉形式吸引用户处理

## 代码示例
### 基本使用
<code src='../../demo/pages/Badge'></code>



## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| type | badge 类型<br/>'dot':红点<br>'number':数字类型，会自动做>99转换<br>'text':文字气泡<br>'bubble':气泡形态(带箭头) | 'dot' &verbar; 'text' &verbar; 'bubble' &verbar; 'number' | 'dot' |
| text | 红点内容，为空时表示只显示红点；可以是数字，也可以是文字；如果是数字，超过 99 会自动变成 ... | string &verbar; number| - |
| placement | 相对于 children 所在方位，left-top(左上角) top-right(右上角)  | 'top-left' &verbar; 'top-right' | 'top-right' |
| stroke |  是否有描边 | boolean | false |
| iconType | 自定义图标  | string | - |
| bgColor |  自定义背景色，css色值 | string | - |
| className |  类名 | string | - |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-badge | 整体样式 |
| amd-badge-inner-text | 内部文本样式 |
| amd-badge-text | 文本样式 |
| amd-badge-dot | 红点样式 |
| amd-badge-icon | 图标样式 |
