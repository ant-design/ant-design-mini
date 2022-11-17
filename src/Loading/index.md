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
<code src='../../demo/pages/Loading'></code>

## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 根节点类名 |  `string` | - | 
| color | 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码 | `string` | `'#999'` | 
| delay | 延时显示加载状态，单位 ms, 注意，delay 的变更不能实时生效，当 type 为 'spin' 时生效 | `number` | - | 
| height | 加载图标高度，不传则默认与 size 大小一致，当 type 为 'mini' 时生效, 单位px | `number|string` | `100` | 
| loading | 是否加载中，当 type 为 'spin' 时生效 | `boolean` | `true` | 
| miniSize | 加载图标宽度，当 type 为 'mini' 时生效, 单位px | `string` | `100` | 
| size | 加载图标尺寸，当 type 为 'spin' 时生效 | `number` | 否 | `35` | 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'spin' &verbar; 'mini' | 否 | 'spin' | 加载样式类型 |





| text | string | 否 | - | 加载中文案，当 type 为 'spin' 时生效 |
| theme | 'dark' &verbar; 'light' | 否 | 'dark' | 颜色，dark/深色, light/浅色，当 type 为 'spin' 时生效 |

| style | string | 否 | - | 根节点style |

## 插槽
| 名称 | 说明 |
| ----|----|
| indicator | 自定义加载中的指示器，type 为 'spin' 时生效 |
| text | 自定义text，type 为 'spin' 时生效 |



