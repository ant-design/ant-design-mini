import { 
  onSubmit,
  setFieldsValue,
  setFieldsError,
  getErrorInfo,
  getValues,
  removeFieldsError,
  resetFieldsValue,
  validate,
} from '../../../src/SolutionForm/index';
import get from 'lodash.get';

Page({
  data: {
    schema: {
      type: 'object',
      radius: true,
      // requiredMarkStyle: 'text-not-required',
      displayType: 'row',
      properties: {
        info: {
          properties: {
            input1: {
              title: '输入框一',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入',
              },
            },
            input2: {
              title: '输入框二',
              type: 'string',
              required: true,
              widget: 'input',
              props: {
                placeholder: '请输入',
              },
            },
          },
        },
      },
    },
  },
  async handleSetFieldsValue() {
    await setFieldsValue({
      info: {
        input1: '输入框一的内容',
        input2: '输入框二的内容'
      },
    });
  },
  async handleResetFieldsValue() {
    await resetFieldsValue();
  },
  async handleSetFieldsError() {
    await setFieldsError({
      info: {
        input1: {
          message: '自定义输入框一的错误信息',
        },
      },
    });
  },
  async handleGetErrorInfo() {
    const errorInfo = await getErrorInfo();
    my.alert({ content: `表单提交校验结果：${JSON.stringify(errorInfo)}` });
  },
  async handleRemoveFieldsError() {
    await removeFieldsError(['info.input1', 'info.input2']);
  },
  async handleOnSubmit() {
    const { errors, values } = await onSubmit();
    if (errors?.length > 0) {
      my.alert({ content: `表单提交校验不通过，表单值如下：${JSON.stringify(values)}` });
    } else {
      my.alert({ content: `表单提交校验通过，表单值如下：${JSON.stringify(values)}` });
    }
  },
  async handleValidate() {
    const { errors, values } = await validate({
      validateFields: ['info.input2'],
      useSingleKey: true,
    });
    if (errors?.length > 0) {
      my.alert({ content: `输入框二校验不通过，值如下：${get(values, 'info.input2')}` });
    } else {
      my.alert({ content: `输入框二校验通过，值如下：${get(values, 'info.input2')}` });
    }
  },

  async handleValidateAll() {
    const { errors, values } = await validate();
    if (errors?.length > 0) {
      my.alert({ content: `表单校验不通过，表单值如下：${JSON.stringify(values)}` });
    } else {
      my.alert({ content: `表单校验通过，表单值如下：${JSON.stringify(values)}` });
    }
  },
  async handleGetValues() {
    const formData = await getValues();
    my.alert({ content: `表单值如下：${JSON.stringify(formData)}` });
  },
});
