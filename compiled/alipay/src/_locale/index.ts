export interface Locale {
  /**
   * 默认的语种标识
   */
  locale: string;
  /**
   * 全局通用多语言文案
   */
  global?: Record<string, any>;
  /**
   * Input组件使用的多语言文案
   */
  input?: Record<string, any>;
  /**
   * Calender组件使用的多语言文案
   */
  calendar?: Record<string, any>;
  /**
   * RangePicker组件独立出来，使用的多语言文案
   */
  rangePicker?: Record<string, any>;
  /**
   * GuideTour组件使用的多语言文案
   */
  guideTour?: Record<string, any>;
  /**
   * ImageUpload组件使用的多语言文案
   */
  imageUpload?: Record<string, any>;
  /**
   * NumberKeyboard组件使用的多语言文案
   */
  pageContainer?: Record<string, any>;
}
