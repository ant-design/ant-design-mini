---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: false
---
# Calendar 日历
选择日期或日期区间

## 代码示例
### 基本使用
<code src='../../demo/pages/Calendar'></code>

## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| min | Date | 否 | - | 可选择范围的最小值 |
| max | Date | 否 | - | 可选择范围的最大值 |
| defaultValue | Date | 否 | - | 默认选择的日期 |
| defaultRange | [Date, Date] | 否 | - | 默认选择的日期范围 |
| selectionMode | 'single' &verbar; 'range' | 否 | single | 单选或范围选择，不传时日期不可选择 |
| disableDates | Date[] | 否 | - | 禁选日期 |
| customDateList | {color: string; text: string; date: Date}[] | 否 | - | 日期自定义文案，展示于日期的下面 |
| showConfirmButton | boolean | 否 | true | 是否展示确认按钮 |
| showResetButton | boolean | 否 | false | 是否展示重置按钮 |
| showlunar | boolean | 否 | false | 是否展示农历 |
| showTitle | boolean | 否 | true | 是否展示标题 |
| showMask | boolean | 否 | true | 是否展示蒙层 |
| height | string | 否 | 90vh | 组件高度 |
| fullScreen | boolean | 否 | false | 开启全屏模式 |
| className | string | 否 | - | 组件根节点类名 |
| style | string | 否 | - | 组件根节点style |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onClose | 点击关闭按钮回调 | (void) => void  |
| onChange | 点击日期回调 | (Date | [Date, Date]) => void  |

## 插槽
| 名称 | 说明 |
| ----|----|
| header | 头部插槽 |