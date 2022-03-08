---
nav:
  path: /components
group:
  title: 数据展示
  order: 1
toc: false
---

# Icon

## 代码示例

<code src='../../demo/pages/Icon'></code>

## API
### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|:-----:|:-----:|:-----:|----- |
| type | string | 是 | "" | icon 图标的类型 |
| size | `'x-small'` &verbar; `'small'` &verbar; `'medium'` &verbar; `'large'` &verbar; `'x-large'` | 否 | "medium" | icon 的大小，x-small(16)、small(32)、medium(48)、large(64)、x-large(128)， |
| color | string | 否 | - | icon 的颜色，即 CSS 中 color 属性的值 |
| className | string | 否 | - | 类名 |

### 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击图标，触发此回调 | ( e: [`Event`](https://opendocs.alipay.com/mini/framework/event-object) ) => void |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-icon | 整体样式 |

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 

</style> 