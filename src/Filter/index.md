---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# Filter

用作标签卡筛选，内部结合 `Selector` 组件实现。
## 注意事项

- 目前仅支持一个页面中使用`一次` Filter 组件；
- 需要配合 `FilterItem` 组件使用;

## 代码示例

<code src='../../demo/pages/Filter'></code>

## API
### 属性
#### Filter
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |

#### FilterItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | `'default'` &verbar; `'multiple'` | 否 | "default" | 类型 default=单选 multiple=多选  |
| value | any | 否 | - | 每一项的值，该组件仅支持受控模式 |
| items | {value: string; text: string; subText: string}[] | 否 | - | type=default type=multiple 有效|
| placeholder | string | 否 | - | 当该项值为空的时候显示文案 |
| className | string | 否 | - | 类名 |

### 事件
#### FilterItem

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中的选项变更后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onOpen | 打开选择面板时，触发此回调 | () => void |
| onFormat | 组件标题格式，`必须要有返回值` | (v: any) => any |

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

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
}
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2)  {
    width: 210px
} 
</style> 