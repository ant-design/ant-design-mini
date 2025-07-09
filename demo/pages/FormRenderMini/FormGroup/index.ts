

Page({
  data: {
    schema: {
      type: 'object',
      displayType: 'row',
      properties: {
        idCardInfo2: {
          title: '分组类型：card-radius',
          order: 2,
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
        idCardInfo1: {
          title: '分组类型：card ',
          order: 1,
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
        idCardInfo3: {
          title: '分组类型：card-overall',
          order: 3,
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
          order: 4,
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
