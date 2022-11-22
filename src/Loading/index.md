---
nav:
  path: /components
group:
  title: 反馈
toc: 'content'
---

# Loading 加载
用于提示局部或页面在加载中。

## 代码示例
### 基本使用
<code src='pages/Loading/index'></code>

## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 根节点类名 |  `string` | - | 
| color | 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码 | `string` | `'#999'` | 
`100` | 
| size | 加载图标尺寸，当 type 为 `spin` 时生效。传入number表示px。 | `number` \| `string` | `40` | 
| style | 根节点style | `string` |  - | 
| type | 加载样式类型 | `'spin' \| 'mini'` | 'spin' | 



