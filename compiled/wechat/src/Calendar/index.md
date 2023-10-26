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

| 属性          | 说明                                            | 类型                                                        | 默认值      |
| ------------- | ----------------------------------------------- | ----------------------------------------------------------- | ----------- |
| defaultValue  | 初始值                                          | CalendarValue                                               | 无          |
| value         | 日历选择的日期，传入后即为受控模式                        | CalendarValue                                               | 无          |
| selectionMode | 设置选择模式，单选或者连续区间，默认为 'range'  | `single` \| `range`                                         | 'range'     |
| monthRange    | 月份范围，默认为最近 3 个月                     | `[number, number]`                                          | 最近 3 个月 |
| weekStartsOn  | 星期栏，以周几作为第一天显示。默认为 'Sunday'。 | 'Sunday' \| 'Monday'                                        | 'Sunday'    |
| onChange      | 日期变化回调                                    | (date: CalendarValue) => void                               | 无          |
| onFormatter   | 用于设置单元格的自定义数据                      | (cell: CellState, currentValue: CalendarValue) => CellState | 无          |
| localeText    | 国际化文案                                      | Partial`<LocaleText>`                                       | 无          |

### 类型

**CalendarValue** : 日历的 Value 类型为 `number | [number,number]`, 代表单选或者连续区间的日期。 是一个时间戳，单位为毫秒。

**CellState** : 日历单元格的状态

```typescript
interface CellState {
  /**
   * 是否被禁止
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
   * 是否被选择
   */
  isSelected: boolean;
}
```

**LocaleText** : 国际化文案

```typescript
interface LocaleText {
  /**
   * 星期的名称。从周一到周日
   * 默认为 ['一', '二', '三', '四', '五', '六', '日']
   */
  weekdayNames: string[];
  /**
   * 月份标题的格式。 默认为 'YYYY年MM月'
   */
  title: string;
  /**
   * 今日的文案。 默认为 '今日'
   */
  today: string;
  /**
   * 开始的文案。 默认为 '开始'
   */
  start: string;
  /**
   * 结束的文案。 默认为 '结束'
   */
  startAndEnd: string;
  /**
   * 开始/结束的文案。 默认为 '开始/结束'
   */
  end: string;
}
```
