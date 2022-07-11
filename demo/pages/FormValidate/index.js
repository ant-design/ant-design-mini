Page({
  data: {
    accountRules: [{
      required: true,
      message: '请填写账号'
    }, {
      pattern: /^[a-z]+$/,
      message: '账号必须是小写字母'
    }, {
      asyncValidator: function(rule, value, callback, source ) {
        return new Promise((resolve, reject) => {
          if (value !== 'abc') {
            reject('用户名不唯一') 
          } else {
            resolve()
          }
        })
     }}],
    checkPasswordRules: [{
      type: 'string',
      min: 5,
      message:  '确认密码不能少于5个字符'
    }, {
      message: '确认密码与密码不一致',
      validator: function(rule, value, callback, source) {
        return value  ===  source.password
      }
    }]
  },
  saveRef(ref) {
    this.formRef = ref
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleFinishFailed(value, error) {
    console.log('error', error)
  },
  handleSubmit(values) {
    my.alert({ title: '提交', content: JSON.stringify(values) });
  },
  handleValidateAccount() {
    this.formRef.validate(['account'])
  },

  handleSetErrorInfo() {
    this.formRef.setErrorInfo({
      email: [{
        message: '邮箱格式非法'
      }]
    })
  }
});
