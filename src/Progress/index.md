---
nav:
  path: /components
group:
  title: 信息展示
  order: 12
toc: false
---

# Progress 进度条
用于展示用户操作、任务的进度

## 代码示例
### line
<code src='pages/ProgressLine/index'></code>

### circle
<code src='pages/ProgressCircle/index'></code>


## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| percent | 百分比  | `number` | 0 | 
| status | 状态，仅限 line 模式 | 'success' \| 'fail' | - | 
| strokeColor | 进度条颜色 | `string` | - |
| strokeWidth | 进度条宽度，单位px | `number` | 8 |
| style | 样式| `string` | - |
| trailColor | 轨道颜色 | `string` | - |
| type | 类型，可选 line circle  | 'line' \| 'circle' | 'line' | 
| width | 圆形进度条画布宽度，单位 px | `number` | 100 |

