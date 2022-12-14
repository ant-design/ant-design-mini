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
<code src='pages/Rate/index'></code>
    
## API
| 属性 | 说明 | 类型 | 默认值  |
| -----|-----|-----|-----|
| value | 当前星级 | number | - |
| allowHalf | 是否允许半星 | boolean | true |
| allowClear | 是否允许再次点击后清除 | boolean | false |
| readOnly | 只读，无法进行交互 | boolean | false |
| maxRate | 最大星级 | number | 5 |
| activeColor | 填充色 | string | - |
| inactiveColor | 原始填充色 | string | - |
| disabled | 是否禁用 | boolean | - |
| image | 自定义图片，格式 svg | string | - |
| className | 类名| string | - |
| style | 样式 | string | - |
| onChange | 打分结束时，触发回调 | (idx: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

