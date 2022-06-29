---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
          
# Rate 操作结果
用于展示事物评级以及快速打分
## 代码示例
### 基本使用
<code src='../../demo/pages/Rate'></code>
    
## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| defaultValue | number | 否 | 0 | 初始星级 |
| value | number | 否 | - | 当前数，受控值 |
| allowHalf | boolean | 否 | true | 是否允许半星 |
| allowClear | boolean | 否 | false | 是否允许再次点击后清除 |
| readOnly | boolean | 否 | false | 只读，无法进行交互 |
| maxRate | number | 否 | 5 | 最大星级 |
| activeColor | string | 否 | - | 填充色 |
| inactiveColor | string | 否 | - | 原始填充色 |
| image | string | 否 | - | 自定义图片 |
| onRateEnd | function | 否 | - | 打分结束回调 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onRateEnd | 打分结束时，触发回调 | (idx: number) => void |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-rate-wrapper | 整体样式 |