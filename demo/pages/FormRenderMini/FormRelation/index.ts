const idReg = '^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$';

const handleAge = (formData) => {
  return {
    value: new RegExp(idReg).test(formData?.group2?.number)
      ? new Date().getFullYear() - formData.group2.number.slice(6, 10)
      : ''
  }  
};

const handleGender = (formData) => ({
  value: new RegExp(idReg).test(formData?.group2?.number)
    ? (formData.group2.number)[16] % 2 === 1 ? '男性' : '女性'
    : ''
});

Page({
  data: {
    schema: {
      type: 'object',
      displayType: 'row',
      properties: {
        group1: {
          title: '分组一: 表单项显示隐藏',
          type: 'object',
          relation: (formData) => {
            return {
              visible: formData.group3?.groupName !== 'group1',
            }
          },
          properties: {
            qual: {
              title: '联动测试',
              type: 'string',
              widget: 'selector',
              props: {
                options: [
                  { text: '姓名隐藏', value: 'a' },
                  { text: '电话隐藏', value: 'b' },
                  { text: '邮箱隐藏', value: 'c' },
                ],
              },
            },
            name: {
              title: '姓名',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请填写联系人姓名',
              },
              relation: (formData) => {
                return {
                  visible: formData.group1?.qual !== 'a',
                }
              },
            },
            phone: {
              title: '电话',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请填写联系人电话',
                type: 'number',
                maxLength: 11,
              },
              relation: (formData) => ({
                visible: formData.group1?.qual !== 'b',
              }),
            },
            email: {
              title: '邮箱',
              type: 'string',
              widget: 'input',
              rules: [
                {
                  pattern: '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
                  message: '请输入正确的邮箱地址',
                },
              ],
              props: {
                placeholder: '请填写联系人邮箱',
              },
              relation: (formData) => ({
                visible: formData.group1?.qual !== 'c',
              }),
            },
          },
        },
        group2: {
          title: '分组二: 表单项的值关联',
          type: 'object',
          relation: (formData) => {
            return {
              visible: formData.group3?.groupName !== 'group2',
            }
          },
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
              rules: {
                pattern: idReg,
                message: '请输入正确的身份证号',
              }
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              relation: handleAge,
              props: {
                disabled: true,
                placeholder: '请选输入年龄'
              }
            },
            gender: {
              title: '性别',
              type: 'string',
              widget: 'input',
              props: {
                disabled: true,
                placeholder: '请选输入性别'
              },
              relation: handleGender
            }
          },
        },
        group3: {
          title: '分组三: 分组隐藏',
          type: 'object',
          properties: {
            groupName: {
              title: '隐藏的分组',
              type: 'string',
              widget: 'selector',
              props: {
                className: 'selector',
                options: [
                  { text: '分组一', value: 'group1' },
                  { text: '分组二', value: 'group2' },
                ],
              },
            },
          },
        },
      }
    },
  },
});
