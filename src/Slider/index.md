---
nav:
  path: /components
group:
  title: 信息输入
toc: false
---

# Slider 滑块

可以通过移动滑块在某一范围内取值

## 何时使用
用于在一定范围内移动滑块获取单个或者区间数值

## 代码示例
### 基本使用
<code src='../../demo/pages/Slider'></code>

## 属性 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | SliderValue | 否 | - | 当前值 |
| disabled | boolean | 否 | false | 是否禁用 |
| icon | string | 否 | - | 自定义滑块的图标， 需要使用 antd-mini 的 icon 的 type 值 |
| max | number | 否 | 100 | 最大值 |
| min | number | 否 | 0 | 最小值 |
| range | boolean | 否 | false | 是否是双滑块 |
| color | string | 否 | '#1677ff' | 滑块、轨迹和节点的背景色 |
| showNumber | boolean | 否 | false | 是否展示刻度上的数据 |
| step | number | 否 | 1 | 步距，取值必须大于 0，并且可被 (max - min) 整除 |
| ticks | boolean | 否 | false | 是否显示刻度 |
| tooltip | boolean | 否 | false | 是否在拖动时显示悬浮提示，支持使用作用域插槽自定义 |
| className | string | 否 | - | 类名 |


## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | slider 值改变时触发 | (value: number &verbar; [number, number]) => void |
| onAfterChange | 与 touchend 触发时机一致，把当前值作为参数传入 | (value: number &verbar; [number, number]) => void |


## Slot
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| tick | 自定义刻度 | 作用域插槽，接收选中的value参数 |
| tooltip | 自定义拖动时显示悬浮提示 | 作用域插槽，接收选中的value参数 |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-slider | 整体样式 |
| amd-slider-handler | 滑块样式 |
| amd-slider-handler-icon-default | 滑块样式 |
| amd-slider-track | 轨迹样式 |
| amd-slider-track-number | 刻度样式 |
| amd-slider-track-fill | 轨迹样式 |
| amd-slider-track-fill-background | 轨迹样式 |
| amd-slider-track-fill-front | 轨迹样式 |
| amd-slider-ticks | 刻度样式 |
| amd-slider-tick | 刻度样式 |
| amd-slider-tick-number | 刻度样式 |


