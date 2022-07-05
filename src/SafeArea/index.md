---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 16
toc: 'content'
---

# SafeArea 安全区
刘海屏安全区域组件

## 代码示例
### 基本使用
<code src='../../demo/pages/SafeArea'></code>


## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| position | 'bottom' &verbar; 'top' &verbar; 'both' | 否 | 'both' | 安全区位置 |
| className | string | 否 | '' | 类名 |


## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-safe-area | 整体样式 |
| amd-safe-area-top | 顶部安全区域 |
| amd-safe-area-bottom | 底部安全区域 |

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