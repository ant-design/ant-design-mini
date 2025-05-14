export default {
  type: 'object',
  properties: {
    group1: {
      title: '出行信息',
      type: 'object',
      properties: {
        basicSwitch: {
          title: '无出行计划',
          type: 'boolean',
          widget: 'switch',
          props: {}
        },
        basicInput: {
          title: '出行人',
          type: 'string',
          widget: 'input',
          props: {
            placeholder: '请输入出行人姓名'
          },
          relation: (formData) => ({
            visible: !formData.group1?.basicSwitch,
          }),
        },
        basicPicker: {
          title: '出行城市',
          type: 'string',
          widget: 'picker',
          props: {
            placeholder: '请选择',
            title: '请选择',
            options: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
          },
          relation: (formData) => ({
            visible: !formData.group1?.basicSwitch,
          }),
        },
        basicDatePicker: {
          title: '出行时间',
          type: 'string',
          widget: 'date-picker',
          props: {
            format: 'YYYY-MM-DD',
            placeholder: '请选择日期',
            min: new Date('2019/01/15').getTime(),
            max: new Date('2023/08/20').getTime()
          },
          relation: (formData) => ({
            visible: !formData.group1?.basicSwitch,
          }),
        },
      },
    },
    group2: {
      title: '自定义表单项',
      type: 'object',
      properties: {
        customItem: {
          title: '出行信息概览',
          type: 'object',
          widget: 'my-text',
          displayType: 'column',
          props: {
            formData: {},
          },
          extra: '绿色方块内的内容是自定义组件，将为你演示如何获取表单项的值以及 schema 配置的信息',
          relation: (formData) => {
            return {
              title: formData.group1?.basicSwitch ? '无出行信息' : '出行信息概览',
              props: {
                formData,
              },
            };
          }
        },
      },
    },
  },
};
