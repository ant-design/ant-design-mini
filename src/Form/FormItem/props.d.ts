export interface IComponentProps {
  rules?: any [];
  name: string;
  position?: '' | 'vertical' | 'horizontal';
  required?: boolean;
  label?: string;
  form?: string;
  initialValue?: any;
  validateFirst?: boolean;
  dependencies?: string[];
  help?: string;
}

export interface IComponentData {
  errorInfo: Record<string, any>;
  helpVisible: boolean;
}

export interface IComponentMethods {
  setFieldRules(): void;
  onErrorInfoChange(formErrorInfo, options): void;
  updateErrorInfo(payload): void;
  setValidateOptions(): void
  onToggleHelpVisible(): void;
  onHelpVisibleChange(visible:boolean, type: string): void;
}

export interface IComponentExtraThis {
  store: Record<string, any>;
  onBindErrorInfoChange(): void;
}