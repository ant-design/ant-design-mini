interface FormRenderMappingProps {
  /**
   * @description 每组form-group的表单项数据
   * @default {}
   */
  formItemArr: STORE.IFormItem[];
  displayType?: 'row' | 'column';
  onDisabledTap?: (item?: any) => void;
}

export declare const FormRenderMappingDefaultProps: Partial<FormRenderMappingProps>;
