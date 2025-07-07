import { onSubmit } from '../../../../src/SolutionForm/index';

Page({
  data: {
    schema: {
      formId: 'demo-input',
      type: 'object',
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
        card: {
          title: '内置组件 input 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicInput: {
              title: '基础输入框',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入内容'
              }
            },
            defaultValueInput: {
              title: '默认值输入框',
              type: 'string',
              widget: 'input',
              value: '12345',
              props: {
                placeholder: '请输入内容',
                defaultValue: '这是默认值'
              }
            },
            maxLengthInput: {
              title: '长度限制输入框',
              type: 'string',
              widget: 'input',
              props: {
                maxLength: '10',
                placeholder: '最大长度10'
              }
            },
            clearableInput: {
              title: '可清除输入框',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入内容',
                allowClear: true
              }
            },
            placeholderInput: {
              title: '占位符',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '自定义占位符文案',
                allowClear: true,
              }
            },
            disabledInput: {
              title: '禁用状态',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '被禁用的输入框',
                disabled: true
              }
            },
            numberInput: {
              title: '数字输入框',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请输入数字',
                type: 'digit',
                max: 100,
                min: -10,
              }
            },
            styleInput: {
              title: '自定义样式',
              type: 'string',
              widget: 'input',
              required: true,
              props: {
                className: 'custom-className',
                style: 'opacity: 0.5',
                placeholder: 'style以及className自定义',
                allowClear: true,
              },
              extra: '输入框左侧间距40px, 输入框透明度0.5',
            },
            passwordInput: {
              title: '密码',
              type: 'string',
              widget: 'input',
              required: true,
              props: {
                placeholder: '请填写密码',
                password: true,
                allowClear: true,
              },
            },
            textarea: {
              title: '文本域',
              type: 'string',
              widget: 'textarea',
              props: {
                placeholder: '请输入多行文本',
                autoHeight: true,
                allowClear: true
              }
            }
          }
        },
      },
    }
  },
  
  async onTapOperation(e) {
    const { errors } = await onSubmit();
    if (errors.length > 0) {
      return;
    }
    my.alert({ content: `点击了按钮「${e.text}」` });
  },
}); 