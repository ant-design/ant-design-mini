Page({
  data: {
    action: 'https://www.fastmock.site/mock/b3a1128da69d22edd307be51154c913d/upload/image',
    value_1: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
      status: 'done'
    }],
    value_2: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
      status: 'done'
    }, {
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
      status: 'pending'
    }, {
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ',
      status: 'error'
    }],
    value_3: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
      status: 'done',
      description: '标签1'
    }, {
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kStORbDQxwMAAAAAAAAAAAAAARQnAQ',
      status: 'done',
      description: '标签2'
    }, {
      key: '111',
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*K4Z-RLHuliYAAAAAAAAAAAAAARQnAQ',
      status: 'done',
      description: '标签3'
    }],
    demoImage: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*8cMtRYFpz88AAAAAAAAAAAAAARQnAQ'
  },
  onChange(v) {
    // 这里的数据包括上传失败和成功的图片列表，如果需要筛选出上传成功的图片需要在此处理
    console.log('当前已上传的图片列表：', v);
  },
  onDelete(v) {
    console.log('即将删除的图片为：', v);
    return new Promise((resolve) => {
      my.confirm({
        title: '是否确认删除图片',
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
      if (size / 1024 / 1024 > 5) {
        my.showToast({
          content: '上传图片不超过5M！'
        })
        resolve(false);
      } else {
        resolve(true);
      }
    })
  },
  onUpload(file) {
    console.log('当前上传的图片为：', file);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...file,
          status: 'done', // 或者 'error'
          url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ', // 'error'时应为''
        });
      }, 3000)
    })
  }
})
