
const idCardReg = '^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$';

const getAge = (formData) => {
  return {
    value: new RegExp(idCardReg).test(formData?.idCardInfo?.number)
      ? new Date().getFullYear() - formData.idCardInfo.number.slice(6, 10)
      : ''
  }
};

const getGender = (formData) => ({
  value: new RegExp(idCardReg).test(formData?.idCardInfo?.number)
    ? (formData.idCardInfo.number)[16] % 2 === 1 ? '男性' : '女性'
    : ''
});

Page({
  data: {
    schema: {
      // 当前表单的标识用于数据收集
      formId: 'demo-id-card',
      type: 'object',
      radius: false,
      displayType: 'row',
      operation: {
        flex: true,
        fixedFooter: true,
        protocolPrefix: '同意协议',
        showProtocolCheck: true,
        footer: [
          {
            text: '返回',
            type: 'default',
          },
          {
            text: '确认签约',
            type: 'primary',
          },
        ],
        protocols: [
          {
            name: '《用户协议》',
            url: '/pages/sdk/result/scene/material/index',
          },
        ],
      },
      properties: {
        idCardInfo: {
          title: '身份证信息',
          type: 'object',
          // widget: 'card-overall',
          properties: {
            number: {
              title: '身份证',
              type: 'string',
              widget: 'input',
              props: {
                placeholder: '请选输入身份证号码'
              },
              rules: {
                pattern: idCardReg,
                message: '请输入正确的身份证号',
              }
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              relation: getAge,
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
              relation: getGender
            }
          },
        },
        idCardInfo2: {
          title: '身份证信息',
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
              rules: {
                pattern: idCardReg,
                message: '请输入正确的身份证号',
              }
            },
            age: {
              title: '年龄',
              type: 'string',
              widget: 'input',
              relation: getAge,
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
              relation: getGender
            }
          },
        }
      },
    }
  },
  
});
