---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Filter 筛选卡
向下弹出的菜单面板
## 何时使用
用于筛选、排序并更改当前页面内容展示范围或顺序
## 注意事项
需要配合 `FilterItem` 组件使用;

## 代码示例
### 基本使用
<code src='../../demo/pages/Filter'></code>


## 属性
#### Filter
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| uid | string | 否 | - | 当页面有多个Filter时需传入，`必须页面唯一`，与内部的 FilterItem 组件的 uid 一致 |
| className | string | 否 | - | 类名 |
| style | string | 否 | 整体样式 |

```typescript
interface IFilterItem {
  /** 选项值 */
  value: string;
  /** 标题 */
  text: string;
  /** 副标题 */
  subText?: string;
}
```
#### FilterItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| multiple | boolean | 否 | false | 是否多选  |
| value | any | 否 | - | 每一项的值，该组件仅支持受控模式 |
| items | IFilterItem[] | 是 | - | 可选项 |
| placeholder | string | 否 | - | 当该项值为空的时候显示文案 |
| uid | string | 否 | - | 当页面有多个Filter时需传入，`必须页面唯一`，与外部的 Filter 组件的 uid 一致 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

## 事件
#### FilterItem

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中的选项变更后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onOpen | 打开选择面板时，触发此回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
