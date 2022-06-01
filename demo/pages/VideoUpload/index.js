Page({
  data: {
    action: 'https://www.fastmock.site/mock/b3a1128da69d22edd307be51154c913d/upload/video',
    value_1: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/v/rms_226d75/afts/video/A*lg2qQJsuBF0AAAAAAAAAAAAAARQnAQ/720P',
      status: 'done'
    }],
    value_2: [{
      key: '111',
      url: 'XNDM0OTQzMDc2OA==',
      status: 'done'
    }, {
      key: '111',
      url: 'XMzg2Mzc5MzMwMA==',
      status: 'pending'
    }, {
      key: '111',
      url: 'XMzg2Mzc5MzMwMA==',
      status: 'error'
    }],
    demoVideo: 'XNTg1Njg5NzkwMA=='
  },
  onChange(v) {
    console.log('当前已上传的图片列表：', v);
  },
  onDelete(v) {
    console.log('即将删除的视频为：', v);
    return new Promise((resolve) => {
      my.confirm({
        title: '是否确认删除视频',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success: (e) => {
          resolve(e.confirm);
        }
      });
    })
  },
  onBeforeUpload(file, fileList) {
    console.log('当前上传的文件和已上传的文件分别是：', file, fileList);
    return new Promise((resolve) => {
      const { size } = file;
      if (size / 1024 / 1024 > 10) {
        my.showToast({
          content: '上传视频不超过10M！'
        })
        resolve(false);
      } else {
        resolve(true);
      }
    })
  },
  onUpload(file) {
    console.log('当前上传的视频为：', file);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...file,
          status: 'done', // 或者 'error',
          url: 'https://gw.alipayobjects.com/v/rms_226d75/afts/video/A*lg2qQJsuBF0AAAAAAAAAAAAAARQnAQ/720P', //error为''
        })
      }, 3000)
    })
  }
});
