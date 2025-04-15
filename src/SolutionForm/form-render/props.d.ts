import type { Schema } from '../Interface/schema';

export interface IComponentProps {
  /**
   * @description 传入的表单 schema ，引擎会根据其渲染出对应表单内容
   */
  schema: Partial<Schema>;
  /**
   * 表单初始值
   */
  initialValues: Record<string, any>;

  /**
   * @description 顶层 className
   */
  className: string;

  /**
   * @description 是否开启debug模式
   * @default false
   */
  debug?: boolean;

  /**
   * 置灰提交按钮
   */
  disableSubmit?: false,

  /**
   * @description 是否展示内部的错误信息
   * @default true
   *
   * 是否展示默认的错误信息，一般不需要启用，用在二次封装透传 slot 时默认插槽不被替换的场景
   * https://yuque.antfin.com/marshall.lhy/nr1kze/gbggb1
   */
  showInternalErrorMessage: boolean;

  /**
   * @description 点击默认提交按钮后的回调
   */
  onSubmit: (data, errors: STORE.IError[]) => void;

  /**
   * @description 表单项变化时返回对应的key-value
   */
  onValueChange: (changedValues: Record<string, any>, formData: Record<string, any>, option: {
    // 是否填写所有的表单项
    fillAllFields: boolean;
  }) => void;
}

export interface IComponentMethods {
  /**
   * 获取表单项在原始schema的路径
   */
  getFullPathByPath(path: string): void;
  /**
   * 表单提交
   */
  handleSubmit(): void;
}

