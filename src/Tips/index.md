---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---
# Tips 向导提示
弹出式气泡
## 何时使用
强化界面中的某个元素对用户的提示信息
## 代码示例
### 基本使用
<code src='pages/Tips/index'></code>

### 插槽
<code src='pages/TipsSlot/index'></code>

### 关闭组件
<code src='pages/TipsClose/index'></code>


## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| image | string | 否 | - | 需要使用的图片 url |
| title | string | 是 | - | 提示文字 |
| arrowPosition | 'top-left' &verbar; 'top-center' &verbar; 'top-right' &verbar; 'left' &verbar; 'right' &verbar; 'bottom-left' &verbar; 'bottom-center' &verbar; 'bottom-right' | 否 | - | 箭头位置，不传时表示没有箭头 |
| buttonText | string | 否 | - | 按钮文字 |
| showClose | boolean | 否 | false | 是否有关闭按钮 |
| buttonPosition | 'right' &verbar; 'bottom' | 否 | 'right' | 文字按钮的位置，默认为右边 |
| className | string | 否 | - | 类名 |

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
