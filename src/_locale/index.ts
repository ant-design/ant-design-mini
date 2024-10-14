export interface Locale {
  /**
   * 全局通用多语言文案
   */
  global?: Record<string, any>;
  /**
   * Calender组件使用的多语言文案
   */
  Calendar?: Record<string, any>;
  /**
   * RangePicker组件独立出来，使用的多语言文案
   */
  RangePicker?: Record<string, any>;
  /**
   * GuideTour组件使用的多语言文案
   */
  GuideTour?: Record<string, any>;
  /**
   * ImageUpload组件使用的多语言文案
   */
  ImageUpload?: Record<string, any>;
  /**
   * NumberKeyboard组件使用的多语言文案
   */
  PageContainer?: Record<string, any>;
}
