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
| startDate | string | 否 | - | 日历开始时间 |
| endDate | string | 否 | - | 日历结束时间 |
| selectDate | string | 否 | - | 默认选择日期 |
| selectRange | [string, string] | 否 | - | 默认选择范围 |
| selectionMode | 'single' &verbar; 'range' | 否 | single | 单选或范围选择 |
| disableDates | string[] | 否 | - | 禁选日期 |
| customDateList | {color: string; text: string; date: string}[] | 否 | - | 日期自定义文案，展示于日期的下面，农历节假日会被自动挤到日期上面 |
| holidayList | {name: string; range: [string, string]; type: 'holiday' | 'work'; day: string}[] | 否 | - | 节假日信息 |
| showConfirmButton | boolean | 否 | true | 是否展示确认按钮 |
| showResetButton | boolean | 否 | false | 是否展示重置按钮 |
| showlunar | boolean | 否 | false | 是否展示农历 |
| titleShow | boolean | 否 | - | 是否展示标题 |
| onClose | function | 否 | - | 点击关闭按钮回调 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onClose | 点击关闭按钮回调 | (void) => void  |

## 插槽
| 名称 | 说明 |
| ----|----|
| icon | 图标插槽 |

## 样式类

| 类名 | 说明 |
| -----|-----|
| amd-button | 整体样式 |
| amd-button-content | 按钮内容样式 |
| amd-button-loading-container | 加载区域样式 |
| amd-button-loading-text | 加载区域文字样式 |
| amd-button-loading | 加载动画样式 |
| amd-button-wrap | 加载区域右侧样式 |
| amd-button-icon | 图标样式 |
| amd-button-text | 按钮文字样式 |
| amd-button-subtext | 副标题样式 |

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
.__dumi-default-mobile-previewer:nth-of-type(2)::after,.__dumi-default-mobile-previewer:nth-of-type(4)::after,.__dumi-default-mobile-previewer:nth-of-type(6)::after {
    border-bottom: none!important;
}
</style> 