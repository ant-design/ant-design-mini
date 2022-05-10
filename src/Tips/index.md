---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: false
---
# Tips 向导提示
弹出式气泡
## 何时使用
强化界面中的某个元素对用户的提示信息
## 代码示例
### 基本使用
<code src='../../demo/pages/Tips'></code>

### 插槽
<code src='../../demo/pages/TipsSlot'></code>

### 关闭组件
<code src='../../demo/pages/TipsClose'></code>


## 属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| image | 需要使用的图片 url | string | - |
| title | 提示文字  | string | - |
| arrowPosition |箭头位置，不传时表示没有箭头  |  'top-left' &verbar; 'top-center' &verbar; 'top-right' &verbar; 'left' &verbar; 'right' &verbar; 'bottom-left' &verbar; 'bottom-center' &verbar; 'bottom-right' | - |
| buttonText |  按钮文字 | string | -  |
| showClose | 是否有关闭按钮 | boolean | false |
| buttonPosition | 文字按钮的位置，默认为右边 | 'right' &verbar; 'bottom' | 'right' |
| className |  类名 | string | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击按钮，触发回调 | () => void |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-tips | 整体样式 |
| amd-tips-wrap | 内部样式 |
| amd-tips-wrap-pseudo | 表面内容区域样式 |
| amd-tips-wrap-pseudo-content | 表面内容区域样式 |
| amd-tips-arrow | 箭头样式 |
| amd-tips-wrap-real | 真实内容区域样式 |

<style> 
.__dumi-default-mobile-previewer:nth-of-type(2)::after,
.__dumi-default-mobile-previewer:nth-of-type(4)::after,
.__dumi-default-mobile-previewer:nth-of-type(6)::after {
    border-bottom: none!important;
}
</style>
