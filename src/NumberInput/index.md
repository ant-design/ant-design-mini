---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# NumberInput 金额输入

## 何时使用

需要输入金额并提供快捷金额选择时使用。支持单位自动转换、最大值限制等功能。

## 代码示例

### 基本使用

<code src='../../demo/pages/NumberInput/index'></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 类名 | string | - |
| style | 样式 | string | - |
| value | 输入框的值 | string | - |
| title | 标题 | string | - |
| linkText | 右上角链接文案 | string | - |
| quickAmounts | 快捷金额选项 | number[] | - |
| placeholder | 占位符文本 | string | '请输入金额' |
| prefix | 金额前缀 | string | '¥' |
| maxValue | 最大可输入金额 | number | - |
| onChange | 内容变化时的回调 | (value: string) => void | - |
| onLinkTap | 点击右上角链接的回调 | () => void | - |

### Slot

目前只提供一个 footer 插槽,用于在输入框下方插入自定义内容。后续根据需求可能会开放更多内容。

使用示例：

```xml
<ant-number-input>
  <view slot="footer">
    <text>这是一条自定义内容</text>
  </view>
</ant-number-input>
```
