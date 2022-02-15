---
title: Badge
group:
  path: /guide
  title: 导航
---

# Badge
徽标，红点、数字或文字。用于告诉用户待处理的事物或更新数。
## 代码示例
<code src='../../demo/pages/Badge'></code>

## API

### 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| text | string &verbar; number | 否 | - | 红点内容，为空时表示只显示红点；可以是数字，也可以是文字；如果是数字，超过 99 会自动变成 ... |
| bubble | boolean | 否 | false | 是否为气泡形态(带箭头) |
| placement | 'top-left' &verbar; 'top-right' | 否 | "top-right" | 相对于 children 所在访问，left-top(左上角) top-right(右上角) |
| stroke | boolean | 否 | false | 是否有描边 |
| className | string | 否 | - | 类名 |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-badge | 整体样式 |
| amd-badge-inner-text | 内部文本样式 |
| amd-badge-text | 文本样式 |
| amd-badge-dot | 红点样式 |
| amd-badge-icon | 图标样式 |

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