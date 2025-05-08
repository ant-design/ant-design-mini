Page({
  data: {
    schema: {
      formId: 'demo-radio',
      type: 'object',
      radius: false,
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
          title: '内置组件 radio 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicRadio: {
              title: '基础单选',
              type: 'string',
              widget: 'radio',
              props: {
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            },
            defaultRadio: {
              title: '默认选中',
              type: 'string',
              widget: 'radio',
              value: 'banana',
              props: {
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            },
            horizontalRadio: {
              title: '竖向布局',
              type: 'string',
              widget: 'radio',
              props: {
                position: 'vertical',
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            },
            disabledRadio: {
              title: '禁用选项',
              type: 'string',
              widget: 'radio',
              props: {
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'watermelon', label: '西瓜', disabled: true },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            },
            allDisabledRadio: {
              title: '全部禁用',
              type: 'string',
              widget: 'radio',
              props: {
                disabled: true,
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            },
            customColorRadio: {
              title: '自定义颜色',
              type: 'string',
              value: 'banana',
              widget: 'radio',
              props: {
                color: 'red',
                options: [
                  { value: 'apple', label: '苹果' },
                  { value: 'orange', label: '橘子' },
                  { value: 'banana', label: '香蕉' }
                ]
              }
            }
          }
        },
      },
    }
  },
  
  onTapOperation(e) {
    console.log('操作按钮点击', e);
  }
}); 