---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
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
| 属性 | 说明  | 类型  | 默认值 |
| -----|-----|-----|-----|
| type | 类型  | 'outline' &verbar; 'fill' &verbar; 'fill-light' | 'fill' |
| color | 标签颜色, 内建 primary(蓝), success(绿), warn(黄), danger(红) | 'primary' &verbar; 'success' &verbar; 'warn' &verbar; 'danger' | 'primary' |
| icon | 图标 | string | - |
| className | 类名 | string | - |

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