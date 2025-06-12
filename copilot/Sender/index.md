<!--
 * @Author: rayhomie 1572801584@qq.com
 * @Date: 2025-03-14 19:33:50
 * @LastEditors: rayhomie 1572801584@qq.com
 * @LastEditTime: 2025-05-29 16:34:42
 * @FilePath: /ant-design-mini/copilot/Sender/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
---
nav:
  path: /copilot
group:
  title: 表达
  order: 3
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Sender 消息发送

## 何时使用

需要用户输入并发送消息时使用。支持自适应高度、发送状态、自定义插槽等功能。

## 代码示例

### 基础用法

<code src='../../copilot-demo/pages/Sender/index'></code>

## API

### 属性

| 属性        | 说明         | 类型    | 默认值              |
| ----------- | ------------ | ------- | ------------------- |
| className   | 类名         | string  | -                   |
| style       | 样式         | string  | -                   |
| value       | 输入框的值   | string  | -                   |
| placeholder | 输入框占位符 | string  | '可以问我任何问题~' |
| disabled    | 是否禁用     | boolean | false               |
| loading     | 是否发送中   | boolean | false               |

### 事件

| 事件名    | 说明                               | 类型                    |
| --------- | ---------------------------------- | ----------------------- |
| onChange  | 输入框内容变化时触发               | (value: string) => void |
| onSubmit  | 点击发送按钮时触发                 | (value: string) => void |
| onCancel  | 点击取消按钮时触发(loading 状态下) | () => void              |
| onConfirm | 点击输入法中的确认按钮时触发       | (value: string) => void |
| onFocus   | 输入框聚焦时触发                   | () => void              |
| onBlur    | 输入框失焦时触发                   | () => void              |

### Slots

| 名称           | 说明                                                 |
| -------------- | ---------------------------------------------------- |
| header         | 自定义头部内容，一般可用来放置输入建议和快捷功能     |
| input-header   | 自定义输入框上方内容，一般可用来放置图片、引用文案等 |
| prefix         | 自定义输入框前缀内容                                 |
| suffix         | 自定义输入框后缀内容                                 |
| wrapper-prefix | 输入框整体左侧，一般可用来放语音输入切换按钮         |
| wrapper-suffix | 输入框整体右侧，一般可用来自定义发送按钮在输入框外部 |
| footer         | 自定义底部内容，可用于承载一些快捷功能               |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                      | 默认值              | 说明                   |
| --------------------------- | ------------------- | ---------------------- |
| --sender-background-color   | #ffffff             | 输入框背景色           |
| --sender-text-color         | #333333             | 输入框文本颜色         |
| --sender-placeholder-color  | rgba(0, 0, 0, 0.25) | 输入框占位文字颜色     |
| --sender-send-color         | #1677ff             | 发送按钮颜色           |
| --sender-input-text-color   | #000000             | 输入框内容文本颜色     |
| --sender-input-caret-color  | #1677ff             | 输入框光标颜色         |
| --sender-focus-border-color | #1677ff             | 输入框聚焦时的边框颜色 |
| --sender-max-height         | 192rpx              | 输入框最大高度         |

## FAQ

### 1. 如何处理发送状态?

组件提供了 loading 属性和 onCancel 事件用于处理发送状态:

- loading=true 时发送按钮会显示为加载状态
- 点击加载状态的按钮会触发 onCancel 事件
- 建议在发送完成后将 loading 设为 false
