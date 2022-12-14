---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Selector 选择组
在一组选项中选择一个或多个
## 何时使用
提供多个选项供用户选择，一般在筛选和表单中使用
## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='pages/Selector/index'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| activeItemClassName | 选中选项的类名 | string | - |
| activeItemStyle | 选中选项的样式 | string | - |
| className | 类名 | string | - |
| disabled | 是否整体禁用 | boolean | false |
| items |  选项数据源 | `SelectorItem[]` | `[]` |
| maxSelectedCount | 最大可选中项的数量 | number | - | 
| minSelectedCount | 最小可选中项的数量 | number | - | 
| multiple | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态 | boolean | false | 
| style | 样式 | string | - |
| value | 已选择项, 取 items 每一项的 value | `string \| number \| string[] \| number[]`  | - | 


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中值发生变化，触发回调 | `(v: string \| string[], selectedItem: SelectorItem \| SelectorItem[], event: `[Event](https://opendocs.alipay.com/mini/framework/event-object)`) => void` |
| onSelectMax | 触发最大限制 | `(v: string, item: SelectorItem, event: `[Event](https://opendocs.alipay.com/mini/framework/event-object)`) => void` |
| onSelectMin | 触发最小限制 | `(v: string, item: SelectorItem, event: `[Event](https://opendocs.alipay.com/mini/framework/event-object)`) => void` |

## 类型


```typescript
type SelectorItem = {
  text: string;
  value: string|number;
  subText?: srting;
  disabled?: boolean;
}
```
<hr />

