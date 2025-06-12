---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Calendar

Calendar Component

## Introduction

In `index.json` Introducing Components in

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

## Code Sample

### Basic use

```xml
<!-- 默认多选 -->
<ant-calendar defaultValue="{{defaultValue}}"></ant-calendar>
<!-- 单选 -->
<ant-calendar selectionMode="single" defaultValue="{{defaultValue}}" changedScrollIntoView />
```

### Custom Top

```xml
<ant-calendar monthRange="{{demo3.monthRange}}">
  <view slot="calendarTitle">Custom Top</view>
</ant-calendar>
```

### Custom Date Cell

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

### Dynamic control, only three days before and after the selection are allowed

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

### Controlled Mode

```xml
<ant-calendar
  ref="handleRef"
  value="{{demo9.value}}"
  selectionMode="single"
  changedScrollIntoView
#if ALIPAY
  onChange="demo9HandleChange"
#endif
#if WECHAT
  bindchange="demo9HandleChange"
#endif
></ant-calendar>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandlePreviousDay"
#endif
#if WECHAT
  bindtap="demo9HandlePreviousDay"
#endif
>
  Last day
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleNextDay"
#endif
#if WECHAT
  bindtap="demo9HandleNextDay"
#endif
>
  Next day
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleScrollIntoView"
#endif
#if WECHAT
  bindtap="demo9HandleScrollIntoView"
#endif
>
  Scroll to specified date
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

### Demo Code

<code src='../../demo/pages/Calendar/index' ></code>

## API

The following are the properties and descriptions of the Calendar component:

| Property                    | Description                                           | Type                                                        | Default Value      |
| ----------------------- | ---------------------------------------------- | ----------------------------------------------------------- | ----------- |
| defaultValue            | Initial value                                         | CalendarValue                                               | None          |
| value                   | The date selected by the calendar, which is the controlled mode when passed in.             | CalendarValue                                               | None          |
| selectionMode           | Set the selection mode, single selection or continuous interval, the default is `range` | `single` \| `range`                                         | `range`     |
| monthRange              | Month range, default to the last 3 months                    | `[number, number]`                                          | Last 3 months |
| weekStartsOn            | The week column displays the day of the week as the first day. The default is `Sunday`  | `Sunday` \| `Monday`                                        | `Sunday`    |
| onFormatter             | Use to set custom data for cells                     | (cell: CellState, currentValue: CalendarValue) => CellState | None          |
| onMonthFormatter        | Custom data for setting the month                       | (month: any) => CellState                                   | None          |
| localeText              | International copywriting                                     | Partial`<LocaleText>`                                       | None          |
| changedScrollIntoView   | Whether to scroll view after selected value changes                       | boolean                                                     | None          |
| showSelectableDatesOnly | Show only dates in the selectable range                       | boolean                                                     | false       |
| #if ALIPAY onChange     | Date Change Callback                                   | (date: CalendarValue) => void                               | None          |
| #if WECHAT bindchange  | Date Change Callback                                   | (date: CalendarValue) => void                               | None          |

### Type

**CalendarValue** The value type of the calendar, which is a number or a tuple of numbers `number | [number,number]`, which represents a single selection or continuous date interval. The timestamp in milliseconds.

**CellState** Defines the various states of the calendar cell.

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

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                           | Default Value                                                                                                                            | Dark Mode Default                                                                                                                    | Remarks                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --calendar-cell-disabled-opacity | 0.4                                                                                                                               | 0.4                                                                                                                               | Calendar cell transparency disabled |
| --calendar-weekday-names-bg      | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                 | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                 | Calendar Week Name Background Color |
| --calendar-default-color         | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                 | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #000000;">#c5cad1</div>                                 | Calendar default color         |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #ffffff;">rgba(22, 119, 255, 0.1)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #ffffff;">rgba(22, 119, 255, 0.1)</div> | Calendar Selected Color         |
| --calendar-assist-color          | <div style="width: 150px; height: 40px; background-color: #999999; color: #FFFFFF;">#999999</div>                                 | <div style="width: 150px; height: 40px; background-color: #616161; color: #FFFFFF;">#616161</div>                                 | Calendar Auxiliary Color         |
| --calendar-selected-end-color    | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                 | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                 | Calendar selected end color     |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div>                                 | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div>                                 | Calendar Selected Color         |

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
<calendar onFormatter="{{handleFormat}}" />
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
