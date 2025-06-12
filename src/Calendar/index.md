---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Calendar 日历

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
  上一天
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
  下一天
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
| onFormatter             | 用于设置单元格的自定义数据                     | (cell: CellState, currentValue: CalendarValue) => CellState | 无          |
| onMonthFormatter        | 用于设置月份的自定义数据                       | (month: any) => CellState                                   | 无          |
| localeText              | 国际化文案                                     | Partial`<LocaleText>`                                       | 无          |
| changedScrollIntoView   | 选中值改变后是否滚动视图                       | boolean                                                     | 无          |
| showSelectableDatesOnly | 只展示在可选范围内的日期                       | boolean                                                     | false       |
| #if ALIPAY onChange     | 日期变化回调                                   | (date: CalendarValue) => void                               | 无          |
| #if WECHAT bindchange  | 日期变化回调                                   | (date: CalendarValue) => void                               | 无          |

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

| 变量名                           | 默认值                                                                                                                            | 深色模式默认值                                                                                                                    | 备注                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --calendar-cell-disabled-opacity | 0.4                                                                                                                               | 0.4                                                                                                                               | 日历单元格禁用透明度 |
| --calendar-weekday-names-bg      | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                 | <div style="width: 150px; height: 40px; background-color: #f8f8f8; color: #333333;">#f8f8f8</div>                                 | 日历星期名称背景颜色 |
| --calendar-default-color         | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                 | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #000000;">#c5cad1</div>                                 | 日历默认颜色         |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #ffffff;">rgba(22, 119, 255, 0.1)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.1); color: #ffffff;">rgba(22, 119, 255, 0.1)</div> | 日历选中颜色         |
| --calendar-assist-color          | <div style="width: 150px; height: 40px; background-color: #999999; color: #FFFFFF;">#999999</div>                                 | <div style="width: 150px; height: 40px; background-color: #616161; color: #FFFFFF;">#616161</div>                                 | 日历辅助颜色         |
| --calendar-selected-end-color    | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                 | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                 | 日历选中结束颜色     |
| --calendar-selected-color        | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div>                                 | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div>                                 | 日历选中颜色         |

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
<calendar onFormatter="{{handleFormat}}" />
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
