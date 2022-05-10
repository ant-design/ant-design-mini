---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Stepper 步进器
一种两段式控制，增加、减少或修改数值
## 何时使用
用于在一定范围内输入、调整当前数值
## 注意事项
- 输入最大（最小）值无提示，失去焦点后，超过最大（最小）值时系统会自动回显数值为最大值；

## 代码示例
### 基本使用
<code src='../../demo/pages/Stepper'></code>

## 属性

| 属性 | 说明 |  类型 | 默认值 |
| -----|-----|-----|-----|
| value | 输入框的值, 表单提交的时候有效  | number| - |
| min |  最小值 | number | - |
| max |  最大值 | number | - |
| step | 每次加减的值 | number| 1 | 
| disabled |  是否禁用 | boolean | false | 
| inputReadOnly |  输入框是否只读 | boolean | false |
| type |  input唤起的键盘类型 | 'number' &verbar; 'digit' | - |
| inputWidth | 输入框宽度| string | - |
| precision | 计算精度，保留几位小数<br/>https://github.com/ant-design/ant-design/issues/5998  | number| - |
| autoFocus |  自动聚焦，ios 可能会失效  | boolean | false |
| id | 表单元素 id| string | - |
| name | 表单元素 name | string | - | 
| className | 类名 | string | - |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 数据变化后，触发此回调 | ( e: number, dataSet: Record<string, any> ) => void  |
| onFocus | 聚焦时，触发此回调 | ( e: number ) => void  |
| onBlur | 失去焦点时，触发此回调 | ( e: number ) => void  |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-stepper | 整体样式 |
| amd-stepper-disabled | 禁用状态下的整体样式 |
| amd-stepper-handler | +/- 图标区域样式 |
| amd-stepper-handler-up | + 区域样式 |
| amd-stepper-handler-up | - 区域样式 |
| amd-stepper-handler-disabled | 禁用状态下+/- 图标区域样式 |
| amd-stepper-handler-up-inner | +/- 图标样式 |
| amd-stepper-input-wrap | 输入框区域样式 |
| amd-stepper-input | 输入框样式 |
