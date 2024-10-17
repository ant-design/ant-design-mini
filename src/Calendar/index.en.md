---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Calendar Calendar

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

**CalendarValue** : 日历的值Type，为数字或数字元组 `number | [number,number]`，表示单选或连续日期区间。单位为毫秒的时间戳。

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

通过 `defaultValue` 可以设置默认的时间。`defaultValue` 的Type是 `CalendarValue`。

`CalendarValue` 的Type是 `number | [number, number]`，代表单选或者连续区间的日期。它是一个时间戳，单位是毫秒。

例如，如果我们想设置默认的开始时间为今天，结束时间为七天后，我们可以在 `defaultValue` 中传入以下代码：

```ts
[dayjs().startOf('date'), dayjs().add(7, 'days').startOf('date')];
```

### 通过 `onFormatter` 设置单元格的自定义数据

我们可以通过 `onFormatter` 方法设置单元格的自定义数据，`onFormatter` 的格式是 `(cell: CellState, currentValue: CalendarValue) => CellState`。

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
