export interface ErrorField {
  /** 
   * 校验未通过的表单项路径
   */
  field: string;
  /** 
   * 校验未通过的表单项值
   */
  fieldValue: any;
  /** 
   * 校验未通过的错误信息
   */
  message: string;
  /**
   * 扩展参数
   */
  extendInfo: any;
  /**
   * 其他可能的参数
   */
  [key: string]: any;
}