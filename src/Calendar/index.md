---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Calendar 日历

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

日历组件

## 代码示例

<code src='pages/Calendar/index' ></code>

## API

以下为日历组件的属性及描述：

| 属性                  | 说明                                           | 类型                                                        | 默认值      |
| --------------------- | ---------------------------------------------- | ----------------------------------------------------------- | ----------- |
| defaultValue          | 初始值                                         | CalendarValue                                               | 无          |
| value                 | 日历选择的日期，传入后即为受控模式             | CalendarValue                                               | 无          |
| selectionMode         | 设置选择模式，单选或者连续区间，默认为 `range` | `single` \| `range`                                         | `range`     |
| monthRange            | 月份范围，默认为最近 3 个月                    | `[number, number]`                                          | 最近 3 个月 |
| weekStartsOn          | 星期栏，以周几作为第一天显示。默认为 `Sunday`  | `Sunday` \| `Monday`                                        | `Sunday`    |
| onChange              | 日期变化回调                                   | (date: CalendarValue) => void                               | 无          |
| onFormatter           | 用于设置单元格的自定义数据                     | (cell: CellState, currentValue: CalendarValue) => CellState | 无          |
| localeText            | 国际化文案                                     | Partial`<LocaleText>`                                       | 无          |
| changedScrollIntoView | 选中值改变后是否滚动视图                       | boolean                                                     | 无          |

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

**LocaleText** : 提供国际化支持的文案结构。

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

### 如何设置默认的开始与结束时间？

通过 `defaultValue` 可以设置默认的时间。`defaultValue` 的类型是 `CalendarValue`。

`CalendarValue` 的类型是 `number | [number, number]`，代表单选或者连续区间的日期。它是一个时间戳，单位是毫秒。

例如，如果我们想设置默认的开始时间为今天，结束时间为七天后，我们可以在 `defaultValue` 中传入以下代码：

```ts
[dayjs().startOf('date'), dayjs().add(7, 'days').startOf('date')];
```

### 通过 `onFormatter` 设置单元格的自定义数据

我们可以通过 `onFormatter` 方法设置单元格的自定义数据，`onFormatter` 的格式是 `(cell: CellState, currentValue: CalendarValue) => CellState`。

这个函数会获取每个单元格的状态以及当前的值。通过返回新的单元格数据，我们可以自定义单元格的状态。

以下是一些常见的使用场景：

#### 如何让当天之前的时间不可选？

在支付宝小程序中，我们可以通过页面上的方法设置，需要在 axml 文件中传入一个方法名字符串。

axml 文件：

```xml
<calendar onFormatter="handleFormat" />
```

ts 文件：

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

在微信小程序，我们也可以通过 data 中的函数来设置，此时在 wxml 文件中需要传入一个变量名。

wxml 文件：

```xml
<calendar onFormatter="{{ handleFormat }}" />
```

ts 文件：

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
