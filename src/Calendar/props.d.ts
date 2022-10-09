import { IBaseProps } from '../_base';

interface ICustomDateTextResp {
  color: string;
  text: string;
  date: Date;
}
interface IHolidayItem {
  name: string;
  range: [Date, Date];
  day: Date;
}

export interface ICalendarProps extends IBaseProps {
  /**
   * @description 限定选择的范围：起始时间
   * @default null
   */
  min?: Date;
  /**
   * @description 限定选择的范围：结束时间
   * @default null
   */
  max?: Date;
  /**
   * @description 默认选中时间
   * @default null
   */
  defaultValue?: Date;
  /**
   * @description 默认选中范围
   * @default null
   */
  defaultRange?: [Date, Date];
  /**
   * @description 选择模式
   * @default true
   */
  selectionMode?: 'single' | 'range';
  /**
   * @description 禁选日期
   * @default true
   */
  disableDates?: Date[];

  /**
   * @description 日期自定义文案，展示于日期的下面，农历节假日会被自动挤到日期上面
   */
  customDateList: ICustomDateTextResp[];

  /**
   * @description 节假日信息
   */
  holidayList: IHolidayItem[];

  /**
   * @description 是否展示确认按钮
   */
  showConfirmButton: boolean;

  /**
   * @description 是否展示重置按钮
   */
  showResetButton: boolean;

  /**
   * @description 是否展示农历
   */
  showlunar: boolean;

  /**
   * @description 是否展示标题
   */
  showTitle: boolean

  /**
   * @description 是否展示蒙层
   */
  showMask: boolean

  /**
   * @description 点击关闭按钮回调
   */
  onClose: () => void

  /**
   * @description 选择日期回调
   */
  onChange: (v: any) => void
}
export declare const CalendarDefaultProps: Partial<ICalendarProps>;
