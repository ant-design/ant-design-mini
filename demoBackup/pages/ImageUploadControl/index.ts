function onUpload(file) {
  console.log('当前上传的图片为：', file);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
      );
    }, 2000);
  });
}

Page({
  data: {
    /// #if WECHAT
    onUpload,
    /// #endif

    fileList: [
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
        status: 'done',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kStORbDQxwMAAAAAAAAAAAAAARQnAQ',
        status: 'pending',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*K4Z-RLHuliYAAAAAAAAAAAAAARQnAQ',
        status: 'error',
      },
    ],
  },
  onChange(fileList) {
    /// #if WECHAT
    this.setData({
      fileList: fileList.detail,
    });
    /// #endif
    /// #if ALIPAY
    this.setData({
      fileList,
    });
    /// #endif
  },
  handleUploaderRef(ref) {
    console.log('handleUploaderRef', ref);
    /// #if WECHAT
    this.handleUploaderRef = ref.detail;
    /// #endif
    /// #if ALIPAY
    this.handleUploaderRef = ref;
    /// #endif
  },
  upload() {
    this.handleUploaderRef.chooseImage();
  },
  /// #if ALIPAY
  onUpload,
  /// #endif
});
