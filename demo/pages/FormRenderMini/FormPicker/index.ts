import { onSubmit } from '../../../../src/SolutionForm/index';

Page({
  data: {
    schema: {
      formId: 'demo-picker',
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
          title: '内置组件 picker 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicPicker: {
              title: '基础选择器',
              type: 'string',
              widget: 'picker',
              required: true,
              props: {
                placeholder: '请选择',
                title: '请选择',
                options: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
              }
            },
            disabledPicker: {
              title: '禁用选择器',
              type: 'string',
              widget: 'picker',
              value: '上海',
              props: {
                placeholder: '请选择',
                title: '请选择',
                disabled: true,
                options: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
              }
            },
            defaultPicker: {
              title: '默认值选择器',
              type: 'string',
              widget: 'picker',
              value: '上海',
              props: {
                placeholder: '请选择',
                title: '自定义标题',
                cancelText: '自定义取消',
                okText: '自定义确认',
                options: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州']
              },
              extra: '弹框标题和取消确定文案都自定义',
            },
            objectPicker: {
              title: '对象选择器',
              type: 'string',
              value: 'Mon',
              widget: 'picker',
              props: {
                placeholder: '请选择',
                title: '请选择',
                options: [
                  { label: '周一', value: 'Mon' },
                  { label: '周二', value: 'Tues' },
                  { label: '周三', value: 'Wed' },
                  { label: '周四', value: 'Thur' },
                  { label: '周五', value: 'Fri' }
                ]
              }
            },
            multiColumnPicker: {
              title: '多列选择器',
              type: 'array',
              widget: 'picker',
              value: ['Tues', 'pm'],
              props: {
                placeholder: '请选择时间',
                title: '请选择',
                options: [
                  [
                    { label: '周一', value: 'Mon' },
                    { label: '周二', value: 'Tues' },
                    { label: '周三', value: 'Wed' },
                    { label: '周四', value: 'Thur' },
                    { label: '周五', value: 'Fri' }
                  ],
                  [
                    { label: '上午', value: 'am' },
                    { label: '下午', value: 'pm' }
                  ]
                ]
              }
            },
            cascaderPicker: {
              title: '级联选择器',
              type: 'array',
              widget: 'picker',
              props: {
                arrow: true,
                type: 'cascader',
                placeholder: '请选择归属地',
                options: [
                  {
                    label: '浙江',
                    value: '33',
                    children: [
                      {
                        label: '杭州',
                        value: '3301'
                      },
                      {
                        label: '宁波',
                        value: '3302'
                      }
                    ]
                  },
                  {
                    label: '江苏',
                    value: '32',
                    children: [
                      {
                        label: '南京',
                        value: '3201'
                      },
                      {
                        label: '苏州',
                        value: '3205'
                      }
                    ]
                  }
                ]
              }
            },
            defaultCascaderPicker: {
              title: '默认值级联选择',
              type: 'array',
              widget: 'picker',
              value: ['33', '3301'],
              props: {
                type: 'cascader',
                arrow: true,
                placeholder: '请选择城市',
                options: [
                  {
                    label: '浙江',
                    value: '33',
                    children: [
                      {
                        label: '杭州',
                        value: '3301'
                      },
                      {
                        label: '宁波',
                        value: '3302'
                      }
                    ]
                  },
                  {
                    label: '江苏',
                    value: '32',
                    children: [
                      {
                        label: '南京',
                        value: '3201'
                      },
                      {
                        label: '苏州',
                        value: '3205'
                      }
                    ]
                  }
                ]
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
  }
}); 