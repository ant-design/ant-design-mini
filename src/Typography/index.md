---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 15
toc: content
---

# Typography 排版

## 何时使用

- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。
-

## 注意事项

- `icon` 属性可以支持 `Antd Icon` 组件的 `type` 属性，也可以直接传入图片链接；
- 图标在文案左侧时，会有 `8rpx` 的间距

## 代码示例

### 基础用法

<code src='pages/InputCustom/index'></code>

## 属性

| 属性         | 类型                        | 必填 | 默认值         | 说明                              |
| ------------ | --------------------------- | ---- | -------------- | --------------------------------- |
| text         | string                      | 否   | `""`           | 链接文案                          |
| color        | string                      | 否   | `#1677ff`      | 链接字体颜色（十六进制）          |
| fontSize     | string                      | 否   | `28rpx`        | 链接字体大小                      |
| icon         | string                      | 否   | `RightOutline` | 图标链接 或 `Antd Icon` 的 `type` |
| iconPosition | `left` 或 `right`           | 否   | `right`        | 图标位置                          |
| className    | string                      | 否   | `""`           | 自定义类名                        |
| traceParams  | [TraceParams](#traceparams) | 否   | `{}`           | 埋点                              |

### TraceParams

| 键名     | 说明     | 类型     |
| -------- | -------- | -------- |
| click    | 点击点位 | `string` |
| extParam | 扩展参数 | `string` |

## 事件

| 事件名   | 说明         | 类型                            |
| -------- | ------------ | ------------------------------- |
| onTap    | 数据变化触发 | `(e: Event, props:Props)=>void` |
| catchTap | 数据变化触发 | `(e: Event, props:Props)=>void` |

## 插槽

| 名称     | 说明         |
| -------- | ------------ |
| 默认插槽 | 链接文案插槽 |
