---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
---

# Bubble 对话气泡

## 何时使用

需要展示对话内容时使用,支持多种气泡样式、打字动画等效果。

## 代码示例

### 基础用法

<code src='../../copilot-demo/pages/Bubble/index'></code>

## API

### 属性

| 属性             | 说明               | 类型                                               | 默认值    |
| ---------------- | ------------------ | -------------------------------------------------- | --------- |
| className        | 类名               | string                                             | -         |
| style            | 样式               | string                                             | -         |
| content          | 气泡内容           | string                                             | -         |
| placement        | 气泡位置           | 'start' \| 'end'                                   | 'end'     |
| shape            | 气泡形状           | 'round' \| 'corner' \| 'default'                   | 'default' |
| variant          | 气泡样式           | 'filled' \| 'borderless' \| 'outlined' \| 'shadow' | 'filled'  |
| avatar           | 头像地址           | string                                             | -         |
| loading          | 是否加载中         | boolean                                            | false     |
| typing           | 打字动画配置       | boolean \| { step?: number, interval?: number }    | false     |
| onTypingComplete | 打字动画完成时触发 | () => void                                         | -         |

### Slots

| 名称           | 说明                           |
| -------------- | ------------------------------ |
| default        | 自定义气泡内容                 |
| header         | 自定义头部内容(如用户名)       |
| footer         | 自定义底部内容(如自定义操作等) |
| content-header | 内容部分的头部                 |
| content-footer | 内容部分的尾部                 |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                         | 默认值           | 说明               |
| ------------------------------ | ---------------- | ------------------ |
| --bubble-background-color      | #F7F7F7          | 气泡背景色         |
| --bubble-user-background-color | #1677FF          | 用户消息气泡背景色 |
| --bubble-outlined-color        | #EBEBEB          | 描边样式的边框颜色 |
| --bubble-text-color            | rgba(0,0,0,0.88) | 文本颜色           |
| --bubble-text-color-user       | #ffffff          | 用户消息文本颜色   |

## FAQ

### 1. 如何实现打字机效果?

可以通过 typing 属性配置打字动画:

- 设置 `typing="{{true}}"` 使用默认配置
- 设置 `typing="{{{ step: 1, interval: 50 }}}"` 自定义每次打印字符数和间隔时间
- 通过 `onTypingComplete` 监听打字动画完成

### 2. 支持哪些气泡样式?

通过 shape 和 variant 属性组合可以实现多种气泡样式:

- shape: 控制气泡形状,支持 default/round/corner
- variant: 控制气泡外观,支持 filled/borderless/outlined/shadow
