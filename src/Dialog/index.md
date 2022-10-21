---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
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
| disableScroll | boolean | 否 | true | 弹窗展示时，是否禁止页面滚动 |
| animation | boolean | 否 | true | 是否开启过渡动画 |
| zIndex | number | 否 | 998 | 弹窗层级 |
| className | string | 否 | - | 组件根节点类名 |
| style | string | 否 | - | 组件根节点 style |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击 Modal 组件内部按钮，触发回调 | (index: number ) => void |
| onClose | 组件关闭回调 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| title | 标题内容 |
| content | 内容内容 |
