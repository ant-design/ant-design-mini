declare namespace STORE {
  interface IFormItem {
    visible: boolean;
    order: number;
    path: string;
    title: string;
    required?: boolean;
    type: string;
    widget: string;
    value?: any;
  }

  interface ISubSchemaItem {
    title: string;
    path: string;
    radius: boolean;
    displayType: string;
    formItemArr: IFormItem[];
  }

  interface IError {
    field: string;
    fieldValue: any;
    message: string;
  }

  interface IRule {
    pattern?: string;
    message: string;
    type?: string;
    required?: boolean;
    fields?: Record<string, IRule>;
  }
  interface IState {
    hasGroup: boolean;
    formRenderPropsConfig: Partial<{
      displayType: string;
      radius: boolean;
      formId: string;
    }>;
    subSchemaArr: ISubSchemaItem[];
    schemaData: Record<string, any>;
    changeFormData: Record<string, any>;
    formData: Record<string, any>;
    errorInfo: Record<string, IError[]>;
    rules: Record<string, IRule | IRule[]>;
    fields: string[];
  }
}

