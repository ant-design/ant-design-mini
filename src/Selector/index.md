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
<code src='../../demo/pages/Selector'></code>
## 属性

```typescript
type SelectorItem = {
  text: string;
  value: string|number;
  subText?: srting;
  disabled?: boolean;
}
```
<hr />

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string &#124; number &#124; string[] &#124; number[]  | 否 | - | 已选择项, 取 items 每一项的 value |
| items | SelectorItem[] | 是 | - | 可选项 |
| activeItemClassName | string | 否 | - | 每一项激活时新加类名 |
| multiple | boolean | 否 | false | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态 |
| title | string | 否 | '' | 标签栏标题 |
| desc | string | 否 | '' | 标签栏说明|
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| maxSelectedCount | number | 否 | - | 最大选择数量 |
| minSelectedCount | number | 否 | - | 最小选择数量 |
| mode | 'noraml' &verbar; 'form' | 否 | 'normal' | 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | - | 类名 |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中值发生变化，触发回调 | (v: string &#124; string[], selectedItem: SelectItem &#124; SelectItem[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onSelectMax | 触发最大限制 | (v: string, item: SelectItem, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onSelectMin | 触发最小限制 | (v: string, item: SelectItem, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object) ) => void |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-selector | 整体样式 |
| amd-selector-disabled | 禁用状态下的整体样式 |
| amd-selector-content | 单个选项样式 |
| amd-selector-item | 单个选项样式 |
| amd-selector-item-active | 激活状态下单个样式 |
| amd-selector-item-disabled | 禁用状态下单个选项样式 |
| amd-selector-item-text | 文本样式 |
| amd-selector-item-subtext | 副文本样式 |
| amd-selector-item-badge-active | 激活状态下徽标样式 |
