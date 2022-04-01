---
nav:
  path: /components
group:
  title: 其他
toc: false
---

# Mask
加载，用于提示局部或页面在加载中。
## API 


### 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| maskZindex | string | - | - |  |
| type | 'product' &verbar; 'market' | - | - |  |
| show | boolean | - | - |  |
| fixMaskFull | false | - | - |  |
| className | string | - | - | 类名 |

### 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onMaskTap |  | (v: Record<string, any>) => void |

### CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
| --am-mask-backgroundColor | - |
| --am-mask-market-backgroundColor | - |
### 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-mask | - |
| amd-mask__m | - |
| amd-mask__fix | - |


