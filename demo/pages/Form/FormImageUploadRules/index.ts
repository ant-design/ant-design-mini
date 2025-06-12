import { Form } from '../../../../src/Form/form';

Page({
  data: {
    /// #if WECHAT
    onUpload(localFile) {
      return new Promise((resolve) => {
        console.log('上传的图片为：', localFile);
        setTimeout(() => {
          resolve(
            'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
          );
        }, 2000);
      });
    },
    /// #endif
  },
  onLoad() {
    this.form = new Form({
      rules: {
        imageList: [
          {
            required: true,
            message: '需要上传图片',
          },
          () => ({
            async validator(_, fileList = []) {
              if (fileList.length !== 3) {
                throw new Error('需要上传3张图片');
              }
              if (fileList.find((file) => file.status !== 'done')) {
                throw new Error('图片需要上传完成');
              }
            },
          }),
        ],
      },
    });
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.form.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    console.log(values);
    /// #if ALIPAY || ALIPAYNATIVE
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
    /// #endif
  },
  /// #if ALIPAY || ALIPAYNATIVE
  onUpload(localFile) {
    return new Promise((resolve) => {
      console.log('上传的图片为：', localFile);
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
        );
      }, 2000);
    });
  },
  /// #endif
});
