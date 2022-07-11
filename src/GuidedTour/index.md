---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: false
---

# GuidedTour 新手引导

蒙层与自定义卡片的引导组件

## 何时使用

适用于页面上关键功能的介绍。

## 代码示例

### 基本使用

<code src='../../demo/pages/GuidedTour'></code>

## 属性

#### GuidedTour

| 属性         | 类型                    | 必填 | 默认值 | 说明                                                                                |
| ------------ | ----------------------- | ---- | ------ | ----------------------------------------------------------------------------------- |
| defaultIndex | number                  | 是   | -      | 指定初始步骤序号                                                                    |
| visible      | boolean                 | 否   | ture   | 引导是否可见, 受控                                                                  |
| uid          | string                  | 否   | -      | 当页面有多个 GuidedTour 时需传入，`必须页面唯一`，与内部的 TourItem 组件的 uid 一致 |
| className    | string                  | 否   | -      | 类名                                                                                |
| onCancel     | () => void              | 否   | -      | 关闭回调                                                                            |
| onChange     | (index: number) => void | 否   | -      | 步骤改变回调                                                                        |

#### TourItem

| 属性      | 类型                 | 必填 | 默认值 | 说明                                                                                  |
| --------- | -------------------- | ---- | ------ | ------------------------------------------------------------------------------------- |
| index     | number               | 否   | -      | 必填，用于标记当前是第几步，建议按顺序递增                                            |
| title     | string &verbar; slot | 否   | -      | 标题                                                                                  |
| desc      | string &verbar; slot | 否   | -      | 补充信息                                                                              |
| uid       | string               | 否   | -      | 当页面有多个 GuidedTour 时需传入，`必须页面唯一`，与外部的 GuidedTour 组件的 uid 一致 |
| className | string               | 否   | -      | 类名                                                                                  |
