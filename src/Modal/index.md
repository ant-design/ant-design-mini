---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
# Modal 弹窗
## 何时使用
当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。

## 代码示例
### 基本使用
<code src='../../demo/pages/Modal'></code>



## 属性

| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| title |  标题 | string | - |
| content | 内容 | string | - | 
| image |  缩略图 | string | - |
| imageSize | 缩略图尺寸 |  'medium' &verbar; 'large' &verbar; 'x-large' | 'medium' |
| visible | 是否可见，受控模式 | boolean  | false |
| duration | 过渡动画时长，单位毫秒 | number | - |
| mainButtonText | 主按钮  | string | '主操作' |
| addonButtonText | 辅助按钮，第二个按钮  | string | '辅助操作' |
| maskClosable | 点击蒙层关闭| boolean  | true |
| className |  类名 | string | - |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 点击 Modal 组件内部按钮，触发回调 | (type: 'main' \| 'addon' ) => void |
| onClose | 点击 close 图标触发回调 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| default | 弹窗内容 |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-modal | 整体样式 |
| amd-modal-content | 弹窗主体内容样式 |
| amd-modal-content-image | 弹窗图片样式 |
| amd-modal-content-image-medium | 弹窗图片样式 |
| amd-modal-content-image-large | 弹窗图片样式 |
| amd-modal-content-title | 弹窗标题样式 |
| amd-modal-content-content | 弹窗内容样式 |
| amd-modal-buttons-container | 弹窗按钮区域整体样式 |
| amd-modal-buttons-addon | 辅助按钮样式 |
| amd-modal-close | close 图标样式 |