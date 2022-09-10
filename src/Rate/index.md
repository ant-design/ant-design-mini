---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
          
# Rate 评分
用于展示事物评级以及快速打分
## 代码示例
### 基本使用
<code src='../../demo/pages/Rate'></code>
    
## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | number | 否 | - | 当前星级 |
| allowHalf | boolean | 否 | true | 是否允许半星 |
| allowClear | boolean | 否 | false | 是否允许再次点击后清除 |
| readOnly | boolean | 否 | false | 只读，无法进行交互 |
| maxRate | number | 否 | 5 | 最大星级 |
| activeColor | string | 否 | - | 填充色 |
| inactiveColor | string | 否 | - | 原始填充色 |
| disabled | boolean | 否 | - | 是否禁用 |
| image | string | 否 | - | 自定义图片，格式 svg |
| className | string | 否 | - | 类名 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 打分结束时，触发回调 | (idx: number, e: [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-rate-wrapper | 整体样式 |