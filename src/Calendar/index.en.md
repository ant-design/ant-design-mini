---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Calendar

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Calendar Component

## Code Sample

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
| onChange                | Date Change Callback                                   | (date: CalendarValue) => void                               | None          |
| onFormatter             | Use to set custom data for cells                     | (cell: CellState, currentValue: CalendarValue) => CellState | None          |
| onMonthFormatter        | Custom data for setting the month                       | (month: any) => CellState                                   | None          |
| localeText              | International copywriting                                     | Partial`<LocaleText>`                                       | None          |
| changedScrollIntoView   | Whether to scroll view after selected value changes                       | boolean                                                     | None          |
| showSelectableDatesOnly | Show only dates in the selectable range                       | boolean                                                     | false       |

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

**LocaleText** A copywriting structure that provides internationalization support.

```typescript
interface LocaleText {
  /**
   * 星期的名称，从周一至周日
   * 默认为 ['一', '二', '三', '四', '五', '六', '日']
   */
  weekdayNames: string[];
  /**
   * 月份标题的格式，默认为 'YYYY年MM月'
   */
  title: string;
  /**
   * 今天的文案，默认为 '今日'
   */
  today: string;
  /**
   * 开始的文案，默认为 '开始'
   */
  start: string;
  /**
   * 结束的文案，默认为 '结束'
   */
  end: string;
  /**
   * 开始与结束的文案，默认为 '开始/结束'
   */
  startAndEnd: string;
}
```

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
