export interface CalendarDate {
  year: number;
  month: number;
  date: number;
}

export const defaultLocaleText = {
  weekdayNames: ['一', '二', '三', '四', '五', '六', '日'],
  title: 'YYYY年MM月',
  today: '今日',
  start: '开始',
  end: '结束',
  startAndEnd: '开始/结束',
};

export interface LocaleText {
  weekdayNames: string[];
  title: string;
  today: string;
  start: string;
  startAndEnd: string;
  end: string;
}

export type ValueType = number | number[];
export type SelectionMode = 'single' | 'range';

export interface ComponentProps {
  defaultValue?: ValueType;
  value?: ValueType;
  selectionMode?: SelectionMode;
  monthrange: [number, number];
  weekStartsOn?: 'Sunday' | 'Monday';
  onChange?: (date: ValueType) => void;
  localeText?: Partial<LocaleText>;
  onFilterDate?: (date: number, value: ValueType) => boolean;
}

export interface CellState {
  topLabel?: string;
  time: number;
  date: number;
  isSelect: boolean;
  isBegin: boolean;
  isEnd: boolean;
  isSelectRowBegin: boolean;
  isSelectRowEnd: boolean;
  inThisMonth: boolean;
}
