---
nav:
  path: /components
group:
  title: 反馈
toc: false
---

# Loading
加载，用于提示局部或页面在加载中。

## 代码示例
<code src='../../demo/pages/Loading'></code>
## API 


### 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| color | string | - | '#999' | 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码，如'#fff' |
| delay | number | - | - | 延时显示加载状态，单位 ms, 注意，delay 的变更不能实时生效，当 type 为 'spin' 时生效 |
| height | string | - | '200rpx' | 加载图标高度，不传则默认与 size 大小一致，当 type 为 'mini' 时生效 |
| loading | boolean | - | true | 是否加载中，当 type 为 'spin' 时生效 |
| miniSize | string | - | '200rpx' | 加载图标宽度，当 type 为 'mini' 时生效 |
| size | 'x-large' &verbar; 'large' &verbar; 'medium' &verbar; 'small' | - | "medium" | 加载图标尺寸，当 type 为 'spin' 时生效 |
| text | string | - | - | 加载中文案，当 type 为 'spin' 时生效 |
| theme | 'dark' &verbar; 'light' | - | "dark" | 颜色，dark/深色, light/浅色，当 type 为 'spin' 时生效 |
| type | 'spin' &verbar; 'mini' | - | 'spin' | 加载样式类型 |
| className | string | - | - | 类名 |

### 事件 

### 插槽
| 名称 | 说明 |
| ----|----|
| indicator | 自定义加载中的指示器，type 为 'spin' 时生效 |
| text | 自定义text，type 为 'spin' 时生效 |

### CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
### 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-loading | 整体样式 |
| amd-loading-spin-container | type 为 'spin' 时外层容器的样式 |
| amd-loading-mini-container | type 为 'mini' 时外层容器的样式 |
| amd-loading-spin | type 为 'spin' 时内层容器的样式 |
| amd-loading-spin-dark | type 为 'spin' 时深色模式的样式 |
| amd-loading-spin-light | type 为 'spin' 时浅色模式的样式 |
| amd-loading-spin-icon | type 为 'spin' 时加载图标外层样式 |
| amd-loading-spin-icon-indicator | type 为 'spin' 时自定义加载图标外层样式 |
| amd-loading-spin-icon-{{size}} | type 为 'spin' 时不同尺寸加载图标的样式 |
| amd-loading-spin-text | type 为 'spin' 时的加载文案样式 |
| amd-loading-spin-text-dark | type 为 'spin' 时深色模式下的加载文案样式 |
| amd-loading-spin-text-light | type 为 'spin' 时浅色模式下的加载文案样式 |
| amd-loading-mini | type 为 'mini' 时外层容器的样式 |
| amd-loading-mini-item | type 为 'mini' 时所有加载点的样式 |


