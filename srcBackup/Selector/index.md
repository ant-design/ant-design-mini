---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---


# Selector 选择器组件

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

在一组选项中选择一个或多个。
## 何时使用
提供多个选项供用户选择，一般在筛选和表单中使用。

## 代码示例
### 基本使用
<code src="pages/Selector/index"></code>

### 使用 Selector 自定义 Filter
<code src="pages/SelectorFilter/index"></code>

## API
| 属性                 | 说明                  | 类型                   | 默认值 |
| -------------------- | --------------------- | ---------------------- | ------ |
| activeItemClassName  | 选中选项的类名        | string                 | -      |
| activeItemStyle      | 选中选项的样式        | string                 | -      |
| className            | 类名                  | string                 | -      |
| defaultValue         | 默认选择项，多选时类型为数组 | string \| number \| string[] \| number[] | - |
| disabled             | 是否整体禁用          | boolean                | false  |
| maxSelectedCount     | 最大可选中项的数量    | number                 | -      |
| minSelectedCount     | 最小可选中项的数量    | number                 | -      |
| multiple             | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态 | boolean                | false  |
| options              | 选项数据源            | [SelectorItem](#selectoritem)[] | []     |
| style                | 样式                  | string                 | -      |
| value                | 当前选择项，多选时类型为数组 | string \| number \| string[] \| number[] | - |
| onChange             | 选中值发生变化，触发回调 | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onSelectMax          | 触发最大限制          | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onSelectMin          | 触发最小限制          | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### SelectorItem
| 属性      | 说明          | 类型        | 默认值 |
| --------- | ------------- | ----------- | ------ |
| disabled  | 是否禁用      | boolean     | -      |
| subText   | 副文案        | string      | -      |
| text      | 文案          | string      | -      |
| value     | 当前项 value | string \| number | -      |
