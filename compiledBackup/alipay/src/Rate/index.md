---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Rate 评分

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

用于展示事物评级以及快速打分的组件。

## 代码示例

<code src='pages/Rate/index'></code>

### 自定义

<code src='pages/RateCustom/index'></code>

## 属性


| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| allowHalf | 是否允许半星 | `boolean` | `false` |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| className | 类名 | `string` | - |
| character | 自定义字符 | `slot` | `<icon type="StarFill" />` |
| characterActiveClassName | 自定义字符选中状态类名 | `string` | - |
| characterClassName | 自定义字符类名 | `string` | - |
| count | star 总数 | `number` | `5` |
| defaultValue | 初始值 | `number` | `0` |
| gutter | 间距，单位 `px` | `number` | `4` |
| readonly | 只读，无法进行交互 | `boolean` | `false` |
| style | 样式 | `string` | - |
| value | 星级（受控） | `number` | - |
| onChange | 打分回调函数 | `(rate: number) => void` | - |
