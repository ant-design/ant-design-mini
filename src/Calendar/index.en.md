---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Calendar

日历组件

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-calendar": "antd-mini/es/Calendar/index"
#endif
#if WECHAT
  "ant-calendar": "antd-mini/Calendar/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<!-- 默认多选 -->
<ant-calendar defaultValue="{{defaultValue}}"></ant-calendar>
<!-- 单选 -->
<ant-calendar selectionMode="single" defaultValue="{{defaultValue}}" changedScrollIntoView />
```

### 自定义顶部

```xml
<ant-calendar monthRange="{{demo3.monthRange}}">
  <view slot="calendarTitle">自定义顶部</view>
</ant-calendar>
```

### 自定义日期单元格

```xml
<ant-calendar
  monthRange="{{monthRange}}"
  showSelectableDatesOnly
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
  onMonthFormatter="{{demoMonthFormatter ? demoMonthFormatter : 'demoMonthFormatter'}}"
></ant-calendar>
```

```js
import dayjs from 'dayjs';
function demoFormatter(cell) {
  const isOdd = dayjs(cell.time).date() % 2 === 1;
  const isNotBeginEnd = !cell.isSelectedBegin && !cell.isSelectedEnd;
  const isWeekend = dayjs(cell.time).day() > 4;
  let topClassName;
  if (isNotBeginEnd) {
    topClassName = isOdd ? 'odd' : 'even';
  }
  return {
    top: {
      className: topClassName,
      label: isOdd ? '奇数' : '偶数',
    },
    bottom: {
      label: isWeekend ? '周末' : '',
    },
  };
}
function demoMonthFormatter(month) {
  return {
    ...month,
  };
}
```

### 动态控制，只允许选择前后三天

```xml
<ant-calendar
  monthRange="{{monthRange}}"
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
></ant-calendar>
```

```js
import dayjs from 'dayjs';
function demoFormatter(cell, value) {
  if (Array.isArray(value) && value.length == 1) {
    const current = value[0];
    return {
      disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
      bottom:
        dayjs(cell.time).diff(dayjs(current), 'days') > 3
          ? {
              label: '不可选',
            }
          : undefined,
    };
  }
  return {};
}
```

### 受控模式

```xml
<ant-calendar
  ref="handleRef"
  value="{{demo9.value}}"
  onChange="demo9HandleChange"
  selectionMode="single"
  changedScrollIntoView
></ant-calendar>
 <ant-button
      type="primary"
      onTap="demo9HandlePreviousDay"
    >
      上一天
    </ant-button>
    <ant-button
      type="primary"
      onTap="demo9HandleNextDay"
    >
      下一天
    </ant-button>
    <ant-button
      type="primary"
      onTap="demo9HandleScrollIntoView"
    >
      滚动到指定日期
    </ant-button>
```

```js
Page({
  data: {
    demo9: {
      visible: true,
      value: nowDate,
    },
    demo9HandleChange(value) {
      this.setData({
        'demo9.value': value,
      });
    },
    demo9HandlePreviousDay() {
      this.setData({
        'demo9.value': this.data.demo9.value - 1000 * 24 * 3600,
      });
    },
    demo9HandleNextDay() {
      this.setData({
        'demo9.value': this.data.demo9.value + 1000 * 24 * 3600,
      });
    },
    demo9HandleScrollIntoView() {
      this.ref.scrollIntoView(nowDate);
    },
  },
});
```

### Demo 代码

<code src='../../demo/pages/Calendar/index' ></code>

## API

以下为日历组件的属性及描述：

| 属性                    | 说明                                           | 类型                                                        | 默认值      |
| ----------------------- | ---------------------------------------------- | ----------------------------------------------------------- | ----------- |
| defaultValue            | 初始值                                         | CalendarValue                                               | 无          |
| value                   | 日历选择的日期，传入后即为受控模式             | CalendarValue                                               | 无          |
| selectionMode           | 设置选择模式，单选或者连续区间，默认为 `range` | `single` \| `range`                                         | `range`     |
| monthRange              | 月份范围，默认为最近 3 个月                    | `[number, number]`                                          | 最近 3 个月 |
| weekStartsOn            | 星期栏，以周几作为第一天显示。默认为 `Sunday`  | `Sunday` \| `Monday`                                        | `Sunday`    |
| onChange                | 日期变化回调                                   | (date: CalendarValue) => void                               | 无          |
| onFormatter             | 用于Set custom data for cells                     | (cell: CellState, currentValue: CalendarValue) => CellState | 无          |
| onMonthFormatter        | 用于设置月份的自定义数据                       | (month: any) => CellState                                   | 无          |
| localeText              | 国际化文案                                     | Partial`<LocaleText>`                                       | 无          |
| changedScrollIntoView   | 选中值改变后是否滚动视图                       | boolean                                                     | 无          |
| showSelectableDatesOnly | 只展示在可选范围内的日期                       | boolean                                                     | false       |

### 类型

**CalendarValue** : 日历的值类型，为数字或数字元组 `number | [number,number]`，表示单选或连续日期区间。单位为毫秒的时间戳。

**CellState** : 定义了日历单元格的各种状态。

```typescript
interface CellState {
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 日历单元格的顶部内容
   */
  top?: { label: string; className?: string };
  /**
   * 日历单元格的底部内容
   */
  bottom?: { label: string; className?: string };
  /**
   * 时间戳
   */
  time: number;
  /**
   * 日期
   */
  date: number;
  /**
   * 是否选中
   */
  isSelected: boolean;
}
```

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                           | 默认值                                                                                                                           | 深色模式默认值                                                                                                                   | 备注                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --calendar-cell-disabled-opacity | 0.4                                                                                                                              | 0.4                                                                                                                              | 日历单元格禁用透明度 |
| --calendar-weekday-names-bg      | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                | 日历星期名称背景颜色 |
| --calendar-default-color         | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div>                                | 日历默认颜色         |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #666666">rgba(22, 119, 255, 0.1)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #666666">rgba(22, 119, 255, 0.1)</div> | 日历选中颜色         |
| --calendar-assist-color          | <div style="width: 150px; height: 40px; background-color: #999999; color: #FFFFFF;">#999999</div>                                | <div style="width: 150px; height: 40px; background-color: #616161; color: #FFFFFF;">#616161</div>                                | Calendar Auxiliary Color         |
| --calendar-selected-end-color    | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                | Calendar selected end color     |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div>                                | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div>                                | 日历选中颜色         |

## FAQ

### How do I set the default start and end times?

By `defaultValue` You can set a default time.`defaultValue` The type of is `CalendarValue`。

`CalendarValue` The type of is `number | [number, number]`, representing the date of a single choice or continuous interval. It is a timestamp in milliseconds.

For example, if we want to set the default start time to today and end time to seven days later, we can `defaultValue` Pass in the following code:

```ts
[dayjs().startOf('date'), dayjs().add(7, 'days').startOf('date')];
```

### By `onFormatter` Set custom data for cells

We can pass `onFormatter` method to set the custom data for the cell,`onFormatter` The format of is `(cell: CellState, currentValue: CalendarValue) => CellState`。

This function gets the state of each cell and the current value. By returning new cell data, we can customize the state of the cell.

Here are some common usage scenarios:

#### How to make the time before the day not optional?

In the Alipay applet, we can set it through the method on the page, and we need to pass in a method name string in the axml file.

The axml file:

```xml
<calendar onFormatter="handleFormat" />
```

ts file:

```ts
import dayjs from 'dayjs';

Page({
  handleFormat(cell: CellState) {
    // 如果单元格代表的时间早于今天的开始时间，则禁止选择
    return {
      disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
    };
  },
});
```

In the WeChat applet, we can also set it through the function in data. At this time, we need to pass in a variable name in the wxml file.

wxml file:

```xml
<calendar onFormatter="{{ handleFormat }}" />
```

ts file:

```ts
import dayjs from 'dayjs';

Page({
  data: {
    handleFormat: (cell: CellState) => {
      // 如果单元格代表的时间早于今天的开始时间，则禁止选择
      return {
        disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
      };
    },
  },
});
```
