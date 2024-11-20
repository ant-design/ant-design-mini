import { IBaseProps } from '../_util/base';
import { defaultMonthRange } from './utils';

export interface CalendarDate {
  year: number;
  month: number;
  date: number;
}

export interface LocaleText {
  /**
   * 星期的名称。从周一到周日
   * 默认为 ['一', '二', '三', '四', '五', '六', '日']
   */
  weekdayNames: string[];
  /**
   * 月份标题的格式。 除中文/英文外默认为'MM/YYYY',
   */
  format: string;
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

export interface CellState {
  /**
   * 类名
   */
  className?: string;
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
  /**
   * 是否是选择区间的开始
   */
  isSelectedBegin: boolean;
  /**
   * 是否是选择区间的结束
   */
  isSelectedEnd: boolean;
  /**
   * 是否是每一行的第一个
   */
  isRowBegin: boolean;
  isRowEnd: boolean;
  inThisMonth: boolean;
  /**
   * 是否在传入范围内
   */
  isRange: boolean;
  index: number;
}

export type CalendarValue = number | number[];
export type SelectionMode = 'single' | 'range';

export interface ICalendarProps extends IBaseProps {
  /**
   * 初始值
   */
  defaultValue?: CalendarValue;
  /**
   * 日历选择的日期，受控模式
   */
  value?: CalendarValue;
  /**
   * 设置选择模式，单选或者连续区间, 默认为 'range'
   */
  selectionMode?: SelectionMode;
  /**
   * 月份范围，默认为最近 3 个月
   * 格式为时间戳
   * @default [本月第一天的时间戳, 3个月后第一天的时间戳]
   */
  monthRange?: [number, number];
  /**
   * 星期栏，以周几作为第一天显示，默认为 'Sunday'
   */
  weekStartsOn?: 'Sunday' | 'Monday';
  /**
   * 选中值改变后滚动视图
   */
  changedScrollIntoView?: boolean;
  /**
   * 只展示在可选范围内的日期
   */
  showSelectableDatesOnly?: boolean;
  /**
   * 日期变化回调
   */
  onChange?: (date: CalendarValue) => void;
  /**
   * onFormatter 用于设置单元格的自定义数据
   * @param cell 原始数据
   * @param currentValue 当前的 value
   * @returns 返回新的数据
   */
  onFormatter?: (
    cell: Pick<
      CellState,
      | 'className'
      | 'disabled'
      | 'top'
      | 'bottom'
      | 'time'
      | 'isSelectedBegin'
      | 'isSelectedEnd'
      | 'isSelected'
    >,
    currentValue: CalendarValue
  ) => Pick<CellState, 'disabled' | 'top' | 'bottom'>;
  /**
   * onMonthFormatter 用于设置月份的自定义数据
   * @param month 原始数据
   * @returns 返回新的数据
   */
  onMonthFormatter?: (month) => { title?: string; className?: string };
}

export const CalendarDefaultProps = {
  defaultValue: null,
  value: null,
  selectionMode: 'range',
  monthRange: defaultMonthRange(),
  weekStartsOn: 'Sunday',
  onFormatter: null,
  onMonthFormatter: null,
  changedScrollIntoView: null,
  showSelectableDatesOnly: false,
  onChange() {},
};
