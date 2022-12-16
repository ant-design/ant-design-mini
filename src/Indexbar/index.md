---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Indexbar 索引

侧边索引组件

## 何时使用

用于快速定位列表索引

## 代码示例

### 基本使用
<code src='pages/Indexbar/index'></code>

### 结合列表使用
<code src='pages/IndexbarScrollView/index'></code>

## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| activeClassName | 索引激活时的样式 | string | - |
| className | 类名 | string | - |
| current | 索引值 | string | - |
| defaultCurrent | 默认索引 | string | - |
| labelPreview | 索引预览内容，接收value和index | slot | - |
| items | 索引数组 | [Item](#item) | [] |
| style | 样式 | string | - |
| size | 索引的尺寸（宽高，单位px) | number | 16 |
| vibrate | 索引改变时是否震动 | boolean | false |
| onChange | 索引改变时回调 | (value: [Item](#item), index: number) => void |

### Item
| 属性 | 说明 | 类型 | 默认值 |



