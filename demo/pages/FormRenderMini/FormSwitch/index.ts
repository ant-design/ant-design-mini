Page({
  data: {
    schema: {
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
          title: '内置组件 switch 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicSwitch: {
              title: '基础开关',
              type: 'boolean',
              widget: 'switch',
              props: {}
            },
            defaultSwitch: {
              title: '默认开启',
              type: 'boolean',
              widget: 'switch',
              value: true,
              props: {}
            },
            textSwitch: {
              title: '带文字开关',
              type: 'boolean',
              widget: 'switch',
              props: {
                checkedText: '开',
                uncheckedText: '关'
              }
            },
            customColorSwitch: {
              title: '自定义颜色',
              type: 'boolean',
              widget: 'switch',
              value: true,
              props: {
                color: '#00b578'
              }
            },
            disabledSwitch: {
              title: '禁用状态',
              type: 'boolean',
              widget: 'switch',
              value: true,
              props: {
                disabled: true
              }
            },
            mediumSwitch: {
              title: '中等尺寸',
              type: 'boolean',
              widget: 'switch',
              props: {
                size: 'medium'
              }
            },
            smallSwitch: {
              title: '小尺寸',
              type: 'boolean',
              widget: 'switch',
              props: {
                size: 'small'
              }
            },
            xsmallSwitch: {
              title: '超小尺寸',
              type: 'boolean',
              widget: 'switch',
              props: {
                size: 'x-small'
              }
            }
          }
        },
      },
    }
  },
  
  onTapOperation(e) {
    my.alert({ content: `点击了按钮「${e.text}」` });
  }
}); 