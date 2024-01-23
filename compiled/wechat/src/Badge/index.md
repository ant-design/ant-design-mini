---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---

# Badge 徽标

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

徽标，红点、数字或文字。用于告诉用户待处理的事物或更新数。
## 何时使用
在右上角展示数字、文字、小红点	适用于产品化的新消息、新功能、新服务等内容的提醒，通过醒目视觉形式吸引用户处理

## 代码示例
<code src='pages/Badge/index'></code>



## API

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| bgColor | 自定义背景色，css色值 | string | - | 
| className | 组件根节点类名 | string | - | 
| offsetX | 水平方向偏移量 | string | -50% | 
| offsetY | 垂直方向偏移量 | string | -50% | 
| position | 相对于容器徽标的位置，可选`top-left` `top-right` `top-center` `left` `right` `bottom-left` `bottom-center` `bottom-right` | string | `top-right` | 
| stroke | 是否有描边 | boolean | false | 
| style | 样式 | string | - | 
| text | 红点内容，为空时表示只显示红点；可以是数字，也可以是文字；如果是数字，超过 99 会自动变成 ... | string \| number \| slot | - |
| type | badge 类型，可选`dot`(红点) `number`(数字类型，会自动做>99转换) `text`(文字气泡) `bubble`(气泡形态，带箭头) |  string | `dot` | 