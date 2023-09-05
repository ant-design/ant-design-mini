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
  startAndEnd: '开始/结束'
}

export interface LocaleText {
  weekdayNames: string[],
  title: string,
  today: string,
  start: string,
  end: string
}