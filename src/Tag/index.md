---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---
# Tag 标签
进行标记和分类的小标签
## 何时使用
- 用于标记事物的属性和维度
- 进行分类

## 代码示例
### 基本使用
<code src='../../demo/pages/Tag'></code>



## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'outline' &verbar; 'fill' &verbar; 'fill-light' | 否 | 'fill' | 类型 |
| color | 'primary' &verbar; 'success' &verbar; 'warn' &verbar; 'danger' | 否 | 'primary' | 标签颜色, 内建 primary(蓝), success(绿), warn(黄), danger(红) |
| icon | string| 否 | - | 图标 |
| className | string | 否 | - | 类名 |

## 插槽
| 名称 | 说明 |
| ----|----|
| icon | 图标插槽 |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-tag | 整体样式 |
| amd-tag-outline | 整体样式 |
| amd-tag-fill | 整体样式 |
| amd-tag-fill-light | 整体样式 |
| amd-tag-primary | 整体样式 |
| amd-tag-success | 整体样式 |
| amd-tag-warn | 整体样式 |
| amd-tag-danger | 整体样式 |
| amd-tag-icon-container | 图标区域样式 |
| amd-tag-content | 默认插槽内容样式 |



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
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(2)  {
    width: 300px
} 
.__dumi-default-layout-content article table:nth-of-type(5) th:nth-of-type(2)  {
    width: 300px
} 
</style> 