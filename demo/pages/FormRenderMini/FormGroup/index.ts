

Page({
  data: {
    schema: {
      // 当前表单的标识用于数据收集
      formId: 'demo-id-card',
      type: 'object',
      displayType: 'row',
      properties: {
        idCardInfo1: {
          title: '分组类型：card ',
          type: 'object',
          widget: 'card',
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入年龄'
              }
            },
            gender: {
              title: '性别',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入性别'
              },
            }
          },
        },
        idCardInfo2: {
          title: '分组类型：card-radius',
          type: 'object',
          widget: 'card-radius',
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入年龄'
              }
            },
            gender: {
              title: '性别',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入性别'
              },
            }
          },
        },
        idCardInfo3: {
          title: '分组类型：card-overall',
          type: 'object',
          widget: 'card-overall',
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入年龄'
              }
            },
            gender: {
              title: '性别',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入性别'
              },
            }
          },
        },
        idCardInfo4: {
          title: '分组类型：card-overall-radius ',
          type: 'object',
          widget: 'card-overall-radius',
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入年龄'
              }
            },
            gender: {
              title: '性别',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入性别'
              },
            }
          },
        },
      },
    }
  },
  
});
