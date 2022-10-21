---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---
# Modal 弹窗
## 何时使用
当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。

## 代码示例
### 基本使用
<code src='../../demo/pages/Modal'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| title | string | 否 | - | 标题 |
| content | string | 是 | - | 内容 |
| image | string | 否 | - | 缩略图 |
| imageSize | 'medium' &verbar; 'large' &verbar; 'x-large' | 否 | 'medium' | 缩略图尺寸 |
| visible | boolean | 是 | false | 是否可见，受控模式 |
| duration | number | 否 | - | 过渡动画时长，单位毫秒 |
| mainButtonText | string | 否 | '主操作' | 主按钮 |
| addonButtonText | string | 否 | '辅助操作' | 辅助按钮，第二个按钮 |
| maskClosable | boolean | 否 | true | 点击蒙层关闭 |
| disableScroll | boolean | 否 | true | 弹窗展示时，是否禁止页面滚动 |
| animation | boolean | 否 | true | 是否开启过渡动画 |
| zIndex | number | 否 | 998 | 弹窗层级 |
| className | string | 否 | - | 组件根节点类名 |
| style | string | 否 | - | 组件根节点style |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击 Modal 组件内部按钮，触发回调 | (type: 'main' \| 'addon' ) => void |
| onClose | 点击 close 图标触发回调 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| image | 弹窗图片 |
| title | 弹窗标题 |
| content | 弹窗内容 |

