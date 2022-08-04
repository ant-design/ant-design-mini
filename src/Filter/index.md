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
| className | string | 否 | - | 类名 |

#### FilterItem

```typescript
interface IFilterItem {
  value: string;
  text: string;
  subText?: string;
}
```

<hr />

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'default' &verbar; 'multiple' | 否 | 'default' | 类型 default=单选 multiple=多选  |
| value | string &verbar; string[] | 否 | - | 每一项的值 |
| items | IFilterItem[] | 否 | - | 可选项 |
| placeholder | string | 否 | - | 占位文案 |
| className | string | 否 | - | 类名 |

## 事件
#### FilterItem

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中的选项变更后，触发此回调 | ( value: string | string[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onOK | 多选模式下点击确定，触发此回调 | ( value: string[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onOpen | 打开选择面板时，触发此回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 格式化显示文案，单选默认选中的text，多选返回空 | (selected: IFilterItem \| IFilterItem[]) => string |

## 样式类
#### Filter

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-filter             | 整体样式         |
| amd-filter-bar      | 标签栏样式  |
| amd-filter-bar-text | 标题栏标题样式   |
| amd-filter-bar-text-icon  | 标题栏 Icon 样式 |
| amd-filter-items  | 选择面板样式 |

#### FilterItem
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-filter-item              | 整体样式         |
| amd-filter-item-content      | 内容样式  |
| amd-filter-item-content-wrap | 选择面板区域样式   |
| amd-filter-item-btns | 按钮区域样式   |
| amd-filter-item-btns-button  | 重置/确定按钮样式 |
