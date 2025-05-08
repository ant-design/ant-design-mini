import { set } from 'lodash';
import { setFieldsError, getErrorInfo } from '../../../../src/SolutionForm/index';

Page({
  data: {
    schema: {
      type: 'object',
      displayType: 'row',
      properties: {
        trustInfo: {
          type: 'object',
          properties: {
            name: {
              title: '店铺名称',
              type: 'string',
              required: true,
              widget: 'input',
              props: {
                maxLength: 20,
                placeholder: '避免输入宽泛名称，如餐馆',
                placeholderClass: 'input-placeholder',
              },
            },
          },
        },
      },
    },
  },
  async setFormError() {
    const res = await getErrorInfo();
    console.log('<<<res', res);
    const errorInfo = {};
    set(errorInfo, `trustInfo.name`, {
      message: '自定义错误信息，输入会消失',
      actionText: '查看详情',
    });
    setFieldsError(errorInfo);
  },
  onDetailTap(event) {
    const { errorInfo } = event.currentTarget.dataset;
    console.log('<<<errorInfo', errorInfo);
    my.alert({
      content: `点击了 ${errorInfo.field} 的详情按钮`,
    });
  },
  saveRef(ref) {
    this.formRef = ref;
  },
});
