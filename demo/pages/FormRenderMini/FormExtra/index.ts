Page({
  data: {
    schema: {
      type: 'object',
      radius: true,
      requiredMarkStyle: 'text-not-required',
      displayType: 'row',
      properties: {
        info: {
          title: 'extra',
          properties: {
            qual: {
              title: '纯文字 extra',
              required: true,
              tips: '这是一个tips气泡',
              type: 'string',
              widget: 'selector',
              value: 'a',
              extra: '我是一个extra，传入string即可',
              props: {
                options: [
                  { text: '选项一', value: 'a' },
                  { text: '选项二', value: 'b' },
                  { text: '选项三', value: 'c' },
                ],
              },
            },
            name: {
              title: '姓名',
              type: 'string',
              required: true,
              widget: 'input',
              props: {
                placeholder: '请填写联系人姓名',
              },
              extra: {
                widget: 'red-text',
                text: '我是自定义的红色extra',
              },
              order: 2,
              relation: (formData) => {
                return {
                  visible: formData?.qual !== 'a',
                }
              },
            },
            phone: {
              title: '电话',
              type: 'string',
              widget: 'input',
              extra: {
                widget: 'thick-text',
                text: '我是加粗 extra 文案',
              },
              required: true,
              props: {
                placeholder: '请填写联系人电话',
                type: 'number',
                maxLength: 11,
              },
              order: 1,
              relation: (formData) => ({
                visible: formData?.qual !== 'b',
              }),
            },
            email: {
              title: '邮箱',
              type: 'string',
              widget: 'input',
              extra: {
                widget: 'padding-text',
                text: '我是有左侧间距的 extra',
              },
              validateOption: {
                immediate: true,
              },
              required: true,
              rules: [
                {
                  pattern: '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
                  message: '请输入正确的邮箱地址',
                },
              ],
              props: {
                placeholder: '请填写联系人邮箱',
              },
              order: 4,
              relation: (formData) => ({
                visible: formData?.qual !== 'c',
              }),
            },
          },
        },
      },
    },
  },
});
