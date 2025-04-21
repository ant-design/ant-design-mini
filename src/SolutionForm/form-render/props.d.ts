import type { Schema } from '../Interface/schema';
import type { Error } from '../Interface/store';
import type { ObjectType } from '../Interface/index';

export interface IComponentProps {
  /**
   * @description 传入的表单 schema ，引擎会根据其渲染出对应表单内容
   */
  schema: Partial<Schema>;
  /**
   * 表单初始值
   */
  initialValues: ObjectType;

  /**
   * @description 顶层 className
   */
  className: string;

  /**
   * 置灰提交按钮
   */
  disableSubmit?: false,

  /**
   * @description 点击默认提交按钮后的回调
   */
  onSubmit: (data: ObjectType, errors: Error[]) => void;

  /**
   * @description 表单项变化时返回对应的key-value
   */
  onValueChange: (changedValues: ObjectType, formData: ObjectType) => void;
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

