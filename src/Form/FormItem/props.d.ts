export interface IComponentProps {
  rules?: any [];
  name: string;
  position?: 'vertical' | 'horizontal';
  required?: boolean;
  label?: string;
  form?: string;
  initialValue?: any;
}

export interface IComponentData {
  errorInfo: Record<string, any>
}

export interface IComponentMethods {
  setFieldRules(): void;
  onErrorInfoChange(formErrorInfo, options): void;
  updateErrorInfo(payload): void
}

export interface IComponentExtraThis {
  store: Record<string, any>;
  onBindErrorInfoChange(): void;
}