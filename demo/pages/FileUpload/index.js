Page({
  data: {
    action: 'https://www.fastmock.site/mock/b3a1128da69d22edd307be51154c913d/upload/file',
    value_1: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/os/bmw-prod/e9f1b9ec-e0a3-46ed-b8e0-7f0ab2e95228.pdf', //网络资源
      description: 'XXXXXX资料.pdf',
      status: 'done',
      size: '100.9KB'
    }],
    value_2: [{
      key: '111',
      url: 'https://resource/xxx.pdf', // 这种是本地暂存文件路径
      description: 'XXXXXX资料.pdf',
      status: 'done',
      size: '100.9KB'
    }, {
      key: '111',
      url: 'https://resource/xxx.zip',
      description: 'XXXXXX资料.zip',
      status: 'pending',
      size: '100.9KB',
      progress: 50
    }, {
      key: '111',
      url: 'https://resource/xxx.doc',
      description: 'XXXXXX资料.doc',
      status: 'error',
      size: '100.9KB'
    }]
  },
  onChange(v) {
    console.log('当前已上传的文件列表：', v);
  },
  onDelete(v) {
    console.log('即将删除的文件为：', v);
    return new Promise((resolve) => {
      my.confirm({
        title: '是否确认删除文件',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success: (e) => {
          resolve(e.confirm);
        }
      });
    })
  },
  onPreviewFail(v) {
    console.log('不支持预览该格式的文件地址为：', v);
  },
  onBeforeUpload(file, fileList) {
    console.log('当前上传的文件和已上传的文件分别是：', file, fileList);
    return new Promise((resolve) => {
      const { size } = file;
      if (size / 1024 / 1024 > 5) {
        my.showToast({
          content: '上传文件不超过5M！'
        })
        resolve(false);
      } else {
        resolve(true);
      }
    })
  },
  onUpload(file) {
    console.log('当前上传的文件为：', file);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...file,
          status: 'done', // 或者 'error',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/e9f1b9ec-e0a3-46ed-b8e0-7f0ab2e95228.pdf', //error为''
        })
      }, 3000)
    })
  }
});
