---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# Slider 滑块

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

可以通过移动滑块在某一范围内取值。

## 何时使用

用于在一定范围内移动滑块获取单个或者区间数值。

## 代码示例

<code src='pages/Slider/index'></code>

## API

| 属性                | 说明                                         | 类型                                 | 默认值 |
|---------------------|--------------------------------------------|--------------------------------------|--------|
| activeDotClassName  | 选中小圆点的类名                               | string                               | -      |
| activeLineClassName | 选中线条的样式                                 | string                               | -      |
| activeDotStyle      | 选中小圆点的类型                               | string                               | -      |
| activeLineStyle     | 选中线条的样式                                 | string                               | -      |
| className           | 类名                                          | string                               | -      |
| defaultValue        | 初始值                                        | number \| [number, number]           | -      |
| disabled            | 是否禁用                                       | boolean                              | false  |
| max                 | 最大值                                        | number                               | 100    |
| min                 | 最小值                                        | number                               | 0      |
| range               | 是否是双滑块                                   | boolean                              | false  |
| showNumber          | 是否展示刻度上的数据                             | boolean                              | false  |
| step                | 步距，取值必须大于 0，并且可被 (max - min) 整除 | number                               | 1      |
| style               | 样式                                          | string                               | -      |
| showTicks           | 是否显示刻度                                     | boolean                              | false  |
| showTooltip         | 是否在拖动时显示悬浮提示，支持使用作用域插槽自定义    | boolean                              | false  |
| slider              | 自定义滑块                                      | slot                                 | -      |
| tick                | 自定义刻度                                      | slot                                 | -      |
| tooltip             | 自定义拖动时显示悬浮提示                          | slot                                 | -      |
| value               | 当前值                                        | number \| [number, number]           | -      |
| onChange            | slider 值改变时触发                            | (value: number &verbar; [number, number]) => void | -      |
| onAfterChange       | 与 touchend 触发时机一致，把当前值作为参数传入 | (value: number &verbar; [number, number]) => void | -      |
