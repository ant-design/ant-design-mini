import { 
  onSubmit,
  setFieldsValue,
  setFieldsError,
  getErrorInfo,
  getValues,
  removeFieldsError,
  resetFieldsValue,
  validate,
} from '../../../../src/SolutionForm/index';
import get from 'lodash.get';

Page({
  data: {
    schema: {
      type: 'object',
      radius: true,
      displayType: 'row',
      operation: {
        flex: true,
        fixedFooter: true,
        footer: [
          {
            text: '提交',
            type: 'primary',
          },
        ],
      },
      properties: {
        group1: {
          title: '分组设置必填标识',
          requiredMarkStyle: 'text-required',
          properties: {
            input1: {
              title: '输入框一',
              type: 'string',
              widget: 'input',
              required: true,
              props: {
                placeholder: '请输入',
              },
            },
          },
        },
        group2: {
          title: '表单项设置非必填标识',
          properties: {
            input2: {
              title: '输入框二',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入',
              },
              required: true,
              extra: '',
            },
            input3: {
              title: '输入框三',
              type: 'string',
              widget: 'input',
              requiredMarkStyle: 'text-not-required',
              props: {
                placeholder: '请输入',
              },
              extra: '',
            },
          },
        },
        group3: {
          title: '设置红点必填标识',
          requiredMarkStyle: 'asterisk',
          properties: {
            input4: {
              title: '输入框四',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入',
              },
              required: true,
              extra: '',
            },
          },
        },
        group4: {
          title: '不展示必填标识',
          requiredMarkStyle: 'empty',
          properties: {
            input5: {
              title: '输入框五',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入',
              },
              required: true,
              extra: '',
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
    await removeFieldsError(['info.input1']);
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
  async onTapOperation(e) {
    const { errors } = await onSubmit();
    if (errors.length > 0) {
      return;
    }
    my.alert({ content: `点击了按钮「${e.text}」` });
  },
});
