import { FormItem, Rule } from "./schema";

export interface Error {
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

interface StoreFormItem extends FormItem {
  path: string;
}

type DisplayType = 'row' | 'column';


export interface SubSchemaItem {
  title: string;
  path: string;
  displayType: DisplayType;
  formItemArr: StoreFormItem[];
}

export interface State {
  hasGroup: boolean;
  formRenderPropsConfig: Partial<{
    displayType: string;
    formId: string;
  }>;
  subSchemaArr: SubSchemaItem[];
  schemaData: Record<string, any>;
  changeFormData: Record<string, any>;
  formData: Record<string, any>;
  errorInfo: Record<string, Error[]>;
  rules: Record<string, Rule | Rule[]>;
  fields: string[];
}