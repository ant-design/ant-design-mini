---
nav:
  path: /components
group:
  title: 反馈
  order: 2
toc: false
---
# Toast 轻提示
## 代码示例
<code src='../../demo/pages/Toast'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| content | string | 是 | - | Toast 文本内容 |
| icon | string | 否 | - | Toast 图标 |
| duration | number | 否 | 2000 | Toast 持续时间 |
| className | string | 否 | - | 类名 |
| visible | boolean | 是 | false | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| afterClose | Toast 关闭后的回调 | () => void |

### 样式类
| 类名 | 说明 |
| ----|----|
| amd-toast-wrapper | 整理样式 |
| amd-toastWithIcon-wrapper | 带有 icon 时整体样式 |
| amd-toast-icon | icon 样式 |
