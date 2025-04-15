export interface IComponentProps {
  rules?: STORE.IRule[];
  name: string;
  required?: boolean;
  label?: string;
  item: Record<string, any>;
  visible: boolean;
  /** 这里要重新调整成当前组件item的interface */
  relation: (formData?: Record<string, any>) => Record<string, any>;
  extra:
  | string
  | {
    widget: string;
  };
  /** 类型 */
  type: string;
  className?: string;
}

export interface IComponentData {}

export interface IComponentMethods {
  /**
   * 初始化表单的值 ｜ 表单值变化的时候根据relation更新schema信息
   */
  initFormData(): void;
  /**
   * 根据schema初始化当前表单项的值
   * @param props 组件传入的props的信息
   */
  initValue(props: IComponentProps): void;
  /**
   * 将当前表单的规则传入store
   * @param props 组件传入的props的信息
   */
  setFieldRules(props: IComponentProps): void;
}

