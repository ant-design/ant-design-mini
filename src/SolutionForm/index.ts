import { findFieldInfoByField } from './store/helper';
import { getStore } from './store';

// 设置表单内容
export const setFieldsValue = async (
  values,
  triggerValidate?: boolean,
): Promise<void | never> => {
  getStore().commit('setFieldsValue', values);
  if (triggerValidate) {
    await getStore().dispatch('validate');
  }
};

// 重置表单内容
export const resetFieldsValue = async (
  values = {},
  triggerValidate?: boolean,
) => {
  await getStore().commit('resetFieldsValue', values);
  if (triggerValidate) {
    await getStore().dispatch('validate');
  }
};

// 设置表单错误信息
export const setFieldsError = async (
  errorInfo,
  option: Record<string, any> = {},
) => {
  getStore().commit('setFieldsError', {
    errorInfo,
    option,
  });
};

// 设置表单错误信息
export const removeFieldsError = async (fields) => {
  getStore().commit('removeFieldsError', fields);
};

// 表单提交 校验 返回错误信息和表单值
export const onSubmit = async () => {
  const { errors: validateErrors = {} } = await getStore().dispatch('validate');
  const { formData } = getStore().state;
  const errors = Object.keys(validateErrors).map((key) => validateErrors[key]);
  return { errors, values: formData };
};

/**
 * 露出表单校验的勾子
 * @param payload
 * validateFields 校验的表单项的key
 * useSingleKey是否校验单个表单
 * @returns
 */
export const validate = async (payload?: {
  validateFields: string[];
  useSingleKey?: boolean;
}) => {
  const { errors: validateErrors = {} } = await getStore().dispatch(
    'validate',
    payload,
  );
  const errors = Object.keys(validateErrors).map((key) => validateErrors[key]);
  const { formData } = getStore().state;
  return { errors, values: formData };
};

// 获取表单内容
export const getValues = async () => {
  return getStore().state.formData;
};

// 获取表单的错误信息
export const getErrorInfo = async () => {
  return getStore().state.errorInfo;
};

/**
 * 获取表单的subSchemaArr信息
 * @param fields 需要获取schema信息的field列表
 * @returns 对应subSchemaArr的列表
 */
export const getSubSchemaList = (fields?: string[]) => {
  const { subSchemaArr = [] } = getStore().state || {};
  if (fields?.length > 0) {
    return fields.map((field) => findFieldInfoByField(field, subSchemaArr));
  }
  return subSchemaArr;
};
