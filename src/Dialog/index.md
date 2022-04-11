---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
# Dialog 对话框
用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作
## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作

## 代码示例
### 基本使用
<code src='../../demo/pages/Dialog'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| direction | 'vertical' &verbar; 'horizontal'  | 否 | 'vertical' | 按钮排列方向 |
| title | string | 否 | - | 标题文字 |
| content | string | 否 | - | 内容文字 |
| visible | boolean | 是 | false | 是否可见，受控模式 |
| duration | number | 否 | 300 | 过渡动画时长，单位毫秒 |
| maskClosable | boolean | 否 | true | 点击蒙层关闭 |
| className | string | 否 | - | 类名 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击 Modal 组件内部按钮，触发回调 | (index: number ) => void |
| onClose | 组件关闭回调 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| default | 弹窗内容 |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-dialog | 整体样式 |
| amd-dialog-vertical | 整体样式 |
| amd-dialog-horizontal | 整体样式 |
| amd-dialog-content | 内容整体样式 |
| amd-dialog-content-title | 标题样式 |
| amd-dialog-content-content | 内容样式 |
| amd-dialog-content-button-container | 按钮区域样式 |
| amd-dialog-content-button-container-vertical | 按钮区域样式 |
| amd-dialog-content-button-container-horizontal | 按钮区域样式 |
| amd-dialog-content-button | 按钮样式 |


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
.__dumi-default-layout-content article table:nth-of-type(4) th:first-of-type  {
    width: 300px
} 
</style> 