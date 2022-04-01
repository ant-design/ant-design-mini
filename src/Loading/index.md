---
nav:
  path: /components
group:
  title: 反馈
  order: 2
toc: false
---
# Loading
加载动画

## 代码示例
<code src='../../demo/pages/Loading'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'spin' &verbar; 'mini' | 否 | "spin" | 组件类型 |
| delay | number | 否 | - | 延时显示加载状态，单位 ms |
| loading | boolean | 否 | true | 是否加载中 |
| color | string | 否 | "#999" | 点的颜色，仅限 mini loading |
| size | `'x-large'` &verbar; `'large'` &verbar; `'medium'` &verbar; `'small'` | 否 | "medium" | type 为 spin 时，组件的尺寸 |
| miniSize | string | 否 | "200rpx" | type 为 mini 时，组件的尺寸 |
| text | string | 否 | - | 加载中文案，仅限 spin loading |
| indicator | `string` | 否 | - | 自定义加载中的指示器，仅限 spin loading |
| theme | `'dark'` &verbar; `'light'` | 否 | "dark" | 颜色，dark/深色、 light/浅色，仅限 spin loading |
| className | string | 否 | - | 类名 |
    
### 插槽
| 名称 | 说明 |
| ----|----|
| indicator | 自定义加载中的指示器 |
| text | 自定义text |

### 样式类
| 类名 | 说明 |
| ----|----|
| amd-loading | 整体样式 |
| amd-loading-spin | 内容区域样式 |
| amd-loading-spin-dark | 内容区域样式 |
| amd-loading-spin-light | 内容区域样式 |
| amd-loading-spin-icon | 加载图标样式 |
| amd-loading-spin-icon-small | 加载图标样式 |
| amd-loading-spin-icon-medium | 加载图标样式 |
| amd-loading-spin-icon-large | 加载图标样式 |
| amd-loading-spin-icon-x-large | 加载图标样式 |
| amd-loading-text | 加载文字样式 |
| amd-loading-text-dark | 加载文字样式 |
| amd-loading-text-light | 加载文字样式 |

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
.__dumi-default-layout-content article table:nth-of-type(3) th:first-of-type  {
    width: 300px
} 

</style> 