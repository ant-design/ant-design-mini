---
nav:
  path: /components
group:
  title: 信息展示
  order: 12
toc: false
---

# ProgressBar 进度条
用于展示用户操作、任务的进度

## 代码示例
### 基本使用
<code src='../../demo/pages/ProgressBar'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| progress | number | 是 | 0 | 当前进度百分比，范围 0-100 |
| progressColor | string | 否 | 1677FF | 轨道颜色 |
| orbitColor | string | 否 | e5e5e5 | 进度条颜色 |
| showDefaultIndicator | boolean | 否 | true | 是否展示进度条右侧的默认指示器 |
| type | string | 否 | success &verbar; fail | 语意进度条类型 |
| width | string | 否 | 100% | 进度条宽度 |
| height | string | 否 | 16rpx | 进度条高度 |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-progressbar-wrapper  | 整体样式 |
| amd-progress-outer | 进度条轨道样式 |
| amd-progress-inner | 进度条样式 |
| amd-progress-indicator | 右侧指示器样式 |
