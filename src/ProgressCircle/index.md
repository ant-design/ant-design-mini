---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---

# ProgressCircle 进度圈
用于展示用户操作、任务的进度

## 代码示例
### 基本使用
<code src='../../demo/pages/ProgressCircle'></code>

### 注意事项 
进度条与进度轨道采用 canvas 实现

## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| percent | number | 是 | 0 | 进度百分比 |
| progressWidth | number | 否 | 8 | 进度条宽度 |
| progressColor | string | 否 | #1677FF | 进度条颜色 |
| speed | number | 否 | 6deg | 每次绘制进度条推进的角度 |
| width | number | 是 | 无 | canvas 宽度 |
| height | number | 是 | 无 | canvas 宽度 |
| unit | number | 否 | 无 | 进度单位 |
| progressText | string | 否 | 无 | 自定义进度文案 |
| label | string | 否 | 无 | 自定义进度提示文案 |
| className | string | 否 | 无 | 无 |


## Slot
| 名称 | 说明 |
| -----|-----|
| default | 自定义进度条内部元素展示| 


## 样式类

| 类名 | 说明 |
| ----|----|
| amd-progressBar-wrapper | 整体样式 |
| amd-progressBar-indicator-default | 默认指示器样式 |
| amd-progressBar-indicator-column | 带提示的指示器样式 |
