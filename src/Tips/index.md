---
title: Tips
group:
  path: /guide
  title: 导航
---
# Tips
## 代码示例
<code src='../../demo/pages/Tips'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| image | string | 否 | - | 需要使用的图片 url |
| title | string | 是 | - | 提示文字 |
| arrowPosition | 'top-left' &verbar; 'top-center' &verbar; 'top-right' &verbar; 'left' &verbar; 'right' &verbar; 'bottom-left' &verbar; 'bottom-center' &verbar; 'bottom-right' | 否 | - | 箭头位置，不传时表示没有箭头 |
| buttonText | string | 否 | - | 按钮文字 |
| showClose | boolean | 否 | false | 是否有关闭按钮 |
| buttonPosition | 'right' &verbar; 'bottom' | 否 | 'right' | 文字按钮的位置，默认为右边 |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击按钮，触发回调 | () => void |

### 样式类
| 类名 | 说明 |
| ----|----|
| amd-tips | 整体样式 |
| amd-tips-wrap | 内部样式 |
| amd-tips-wrap-pseudo | 表面内容区域样式 |
| amd-tips-wrap-pseudo-content | 表面内容区域样式 |
| amd-tips-arrow | 箭头样式 |
| amd-tips-wrap-real | 真实内容区域样式 |


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
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2)  {
    width: 300px
} 
</style> 