---
nav:
  path: /components
group:
  title: 反馈
  order: 2
toc: false
---
# Toast 轻提示
## 何时使用
对操作结果的轻量级反馈，无需用户操作即可自行消失

## 注意事项
最长文案不超过2行，最多可以显示24个字符，文案过长会被截断
## 代码示例
### 基本使用
<code src='../../demo/pages/Toast'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| content | string | 是 | - | Toast 文本内容 |
| icon | string | 否 | - | Toast 图标 |
| duration | number | 否 | 2000 | Toast 持续时间 |
| className | string | 否 | - | 类名 |
| visible | boolean | 是 | false | 是否隐藏 |
| showMask | boolean | 否 | false | 是否展示蒙层 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onClose | Toast 关闭后的回调 | () => void |

### 样式类
| 类名 | 说明 |
| ----|----|
| amd-toast-wrapper | 整理样式 |
| amd-toastWithIcon-wrapper | 带有 icon 时整体样式 |
| amd-toast-icon | icon 样式 |
