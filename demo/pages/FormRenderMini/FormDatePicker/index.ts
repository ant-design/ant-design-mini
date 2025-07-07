import { onSubmit } from '../../../../src/SolutionForm/index';

Page({
  data: {
    schema: {
      formId: 'demo-date-picker',
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
          title: '内置组件 date-picker 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicDatePicker: {
              title: '基础日期选择',
              type: 'string',
              required: true,
              widget: 'date-picker',
              props: {
                placeholder: '请选择日期',
                min: new Date('2019/01/15').getTime(),
                max: new Date('2023/08/20').getTime()
              }
            },
            defaultDatePicker: {
              title: '默认日期选择',
              type: 'string',
              widget: 'date-picker',
              value: new Date('2019/02/02').getTime(),
              props: {
                placeholder: '请选择日期',
                min: new Date('2019/01/15').getTime(),
                max: new Date('2023/08/20').getTime()
              }
            },
            yearDatePicker: {
              title: '年度选择',
              type: 'string',
              widget: 'date-picker',
              props: {
                precision: 'year',
                format: 'YYYY',
                placeholder: '请选择年份'
              }
            },
            monthDatePicker: {
              title: '月份选择',
              type: 'string',
              widget: 'date-picker',
              props: {
                precision: 'month',
                format: 'YYYY-MM',
                placeholder: '请选择月份'
              }
            },
            timeDatePicker: {
              title: '时间选择',
              type: 'string',
              widget: 'date-picker',
              props: {
                precision: 'minute',
                format: 'YYYY-MM-DD HH:mm',
                placeholder: '请选择时间'
              }
            },
            disabledDatePicker: {
              title: '禁用状态',
              type: 'string',
              widget: 'date-picker',
              value: new Date('2019/02/02').getTime(),
              props: {
                placeholder: '请选择日期',
                disabled: true
              }
            },
            customFormatDatePicker: {
              title: '自定义格式',
              type: 'string',
              widget: 'date-picker',
              props: {
                placeholder: '请选择日期',
                format: 'YYYY年MM月DD日',
                onFormatLabel: 'handleFormatLabel'
              }
            },
            dateRangePicker: {
              title: '日期范围选择',
              type: 'array',
              widget: 'date-picker',
              props: {
                type: 'range',
                placeholder: '请选择日期范围',
                defaultValue: [
                  new Date('2022/03/21').getTime(),
                  new Date('2022/05/20').getTime()
                ]
              }
            },
            controlledDateRangePicker: {
              title: '受控日期范围',
              type: 'array',
              widget: 'date-picker',
              value: [
                new Date('2022/03/21').getTime(),
                new Date('2022/05/20').getTime()
              ],
              props: {
                type: 'range',
                placeholder: '请选择日期范围'
              }
            }
          }
        }
      }
    }
  },
  
  async onTapOperation(e) {
    const { errors } = await onSubmit();
    if (errors.length > 0) {
      return;
    }
    my.alert({ content: `点击了按钮「${e.text}」` });
  },

  handleFormatLabel(type, value) {
    return String(value);
  }
}); 