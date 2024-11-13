---
nav:
  path: /components
group:
  title: 实验性
  order: 15
toc: 'content'
---

# AutoResize 文本自适应

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

徽标，显示红点、数字或文字。用于提醒用户，有待处理的事项或者新的更新数量。

## 何时使用

当需要对现有组件做多语言适配时，可以在原布局中使用本组件，以完成不同长度的文本在组件中的适配；

## 代码示例

<code src="../../demo/pages/AutoResize/index"></code>

## API

| 属性        | 说明                                                                                                                    | 类型    | 默认值 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| text        | 要传入的文本，用来计算宽度                                                                                              | string  | -      |
| minFontSize | 最小字号限制，可以根据业务自行设置                                                                                      | number  | 30     |
| maxFontSize | 该区域的原设计字号，最大不能超过该字号                                                                                  | number  | 36     |
| wrap        | 是否支持换行                                                                                                            | boolean | false  |
| ratio       | 文案宽度比，计算方式为 `maxFontSize / ratio * 文案长度`，有场景英文字符长但容器宽度足够显示，却缩小了字体，此时可以增大 |