---
nav:
  path: /components
group:
  title: 反馈
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
| progress | number | 是 | 0 | 当前进度，范围 0-1 |
| showDefaultIndicator | boolean | 否 | true | 是否展示进度条右侧的默认指示器 |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-progressbar-wrapper  | 整体样式 |
| amd-progress-outer | 进度条轨道样式 |
| amd-progress-inner | 进度条样式 |
| amd-progress-indicator | 右侧指示器样式 |

<style>
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 110px
}
</style>
