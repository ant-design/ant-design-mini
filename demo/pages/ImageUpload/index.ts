function onRemove(file) {
  return new Promise((resolve) => {
    console.log('即将移除的图片为：', file);

    /// #if WECHAT
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    wx.showModal({
      title: '是否确认移除图片',
      success: function (e) {
        resolve(e.confirm);
      },
    });
    /// #endif

    /// #if ALIPAY || ALIPAYNATIVE
    my.confirm({
      title: '是否确认移除图片',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (e) => {
        resolve(e.confirm);
      },
    });
    /// #endif
  });
}

Page({
  data: {
    defaultFileList: [
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
        status: 'done',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kStORbDQxwMAAAAAAAAAAAAAARQnAQ',
        status: 'done',
      },
      {
        url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*K4Z-RLHuliYAAAAAAAAAAAAAARQnAQ',
        status: 'done',
      },
    ],
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
    /// #if WECHAT
    onRemove,
    onUpload(file) {
      return new Promise((resolve) => {
        console.log('上传的图片为：', file);
        setTimeout(() => {
          resolve(
            'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
          );
        }, 2000);
      });
    },
    onBeforeUpload(localFileList) {
      console.log('即将上传的图片列表为：', localFileList);
      localFileList = localFileList.filter((item) => item.size < 10000);
      console.log('修改上传的图片列表为：', localFileList);
      return localFileList;
    },
    /// #endif
  },
  onChange(fileList) {
    // 这里的数据包括上传失败和成功的图片列表，如果需要筛选出上传成功的图片需要在此处理
    console.log('图片列表：', fileList);
  },
  onPreview(file) {
    console.log('preview', file);
  },
  /// #if ALIPAY || ALIPAYNATIVE
  onRemove,
  onUpload(file) {
    return new Promise((resolve) => {
      console.log('上传的图片为：', file);
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
        );
      }, 2000);
    });
  },
  onBeforeUpload(localFileList) {
    console.log('即将上传的图片列表为：', localFileList);
    localFileList = localFileList.filter((item) => item.size < 10000);
    console.log('修改上传的图片列表为：', localFileList);
    return localFileList;
  },
  /// #endif

  handleControlledChange(fileList) {
    /// #if WECHAT
    this.setData({
      fileList: fileList.detail,
    });
    /// #endif
    /// #if ALIPAY || ALIPAYNATIVE
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
    /// #if ALIPAY || ALIPAYNATIVE
    this.handleUploaderRef = ref;
    /// #endif
  },
  upload() {
    this.handleUploaderRef.chooseImage();
  },
});
