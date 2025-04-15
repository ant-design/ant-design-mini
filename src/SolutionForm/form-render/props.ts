export const FormRenderDefaultProps = {
  schema: {},
  initialValues: {},
  initialValidate: false,
  debug: false,
  disableSubmit: false,
  /**
   * 是否展示默认的错误信息，一般不需要启用，用在二次封装透传 slot 时默认插槽不被替换的场景
   * https://yuque.antfin.com/marshall.lhy/nr1kze/gbggb1
   */
  showInternalErrorMessage: true,
};
