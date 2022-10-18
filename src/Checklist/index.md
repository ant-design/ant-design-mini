---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Checklist 可勾选列表
列表的勾选操作
## 何时使用
- 在一组列表项中选择一个或多个
- 可勾选列表的使用需要默认至少勾选一项，方便用户了解列表是可以勾选的

## 代码示例
### 基本使用
<code src='../../demo/pages/Checklist'></code>

## 属性
```typescript 
interface IChecklistItem {
  /** 标题 */
  title: string;
  /** 值 */
  value: string;
  /** 图片 */
  image?: string;
  /** 描述 */
  description?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readonly?: boolean;
}
```

| 属性 |  类型  | 必填 | 默认值|说明 |
| -----|-----|-----|-----|-----|
| value | (string\|number)[] |  否 | - | 选中数据 |
| options | IChecklistItem[] |否| [] | 配置每一列的选项 |
| multiple |  boolean | 否 | false | 是否支持多选 |
| className |  string  | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |



## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中项发生变化，触发回调 | (value: string&#124; number&#124; [], column: IChecklistItem, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |

## 插槽
| 名称 | 说明 | 作用域参数 |
| -----|-----|-----|
| content | CheckListItem自定义内容区 | item |
| icon | 自定义选中Icon |  - |
