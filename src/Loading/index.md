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
### 基本使用
<code src='../../demo/pages/Loading'></code>
## API 


### 属性 


| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| color | 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码，如'#fff'  | string | '#999' |
| delay | 延时显示加载状态，单位 ms, 注意，delay 的变更不能实时生效，当 type 为 'spin' 时生效  | number | - |
| height | 加载图标高度，不传则默认与 size 大小一致，当 type 为 'mini' 时生效  | string | '200rpx' |
| loading | 是否加载中，当 type 为 'spin' 时生效   | boolean | true | 
| miniSize | 加载图标宽度，当 type 为 'mini' 时生效 | string | '200rpx' |
| size | 加载图标尺寸，当 type 为 'spin' 时生效  | 'x-large' &verbar; 'large' &verbar; 'medium' &verbar; 'small' | "medium" |
| text |  加载中文案，当 type 为 'spin' 时生效 | string | - |
| theme |   颜色，dark/深色, light/浅色，当 type 为 'spin' 时生效  | 'dark' &verbar; 'light' | "dark" |
| type |  加载样式类型 |  'spin' &verbar; 'mini' | 'spin' |
| className | 类名 | string | - |


### 事件 

### 插槽
| 名称 | 说明 |
| ----|----|
| indicator | 自定义加载中的指示器，type 为 'spin' 时生效 |
| text | 自定义text，type 为 'spin' 时生效 |


### 样式类 
以下样式类只在对应type下才会被使用

| 类名 | 说明 |
| -----|----- |
| amd-loading | 整体样式 |
| amd-loading-spin-container | 外层容器样式 |
| amd-loading-spin | 内层容器样式 |
| amd-loading-spin-dark | 深色模式样式 |
| amd-loading-spin-light | 浅色模式样式 |
| amd-loading-spin-icon | 加载图标外层样式 |
| amd-loading-spin-icon-indicator | 自定义加载图标外层样式 |
| amd-loading-spin-icon-small | 加载图标样式 |
| amd-loading-spin-icon-medium | 加载图标样式 |
| amd-loading-spin-icon-large | 加载图标样式 |
| amd-loading-spin-icon-x-large | 加载图标样式 |
| amd-loading-spin-text | 加载文案样式 |
| amd-loading-spin-text-dark | 深色模式下加载文案样式 |
| amd-loading-spin-text-light | 浅色模式下加载文案样式 |
| amd-loading-mini-container | 外层容器样式 |
| amd-loading-mini | 外层容器样式 |
| amd-loading-mini-item | 所有加载点的样式 |


