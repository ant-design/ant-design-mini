---
nav:
  path: /components
group:
  title: 信息输入
toc: false
---

# Rate 评分

## 何时使用
作为用户评分、打分时使用


## 代码示例
### 基本使用
<code src='../../demo/pages/Rate'></code>


## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | number | 否 | 0 | 当前值 |
| iconType | IconType | 否 | HeartOutline | icon类型 |
| activeColor | string | 否 | #ffd21e | 激活颜色 |
| inlineSize | 'x-small' &verbar; 'small' &verbar; 'medium' &verbar; 'large' &verbar; 'x-large' | 否 | "medium" | 内联尺寸 |
| count | number | 否 | 5 | 最大值 |
| allowClear | boolean | 否 | true | 是否允许再次点击后清除 |
| allowHalf | boolean | 否 | false | 是否允许半选 |
| readOnly | boolean | 否 | false | 只读 |
| className | string | 否 | - | 类名 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange |  改变事件，触发回调 | (e: number) => void |


## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-rate | 整体样式 |
| amd-rate-box | 循环盒子样式 |
| amd-rate-star | 星样式 |
| amd-rate-star-half | 半选样式 |
| amd-rate-star-readonly | 只读样式 |


