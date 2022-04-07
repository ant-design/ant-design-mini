Page({
  data: {
    action: 'https://httpbin.org/post',
    value_1: [{
      key: '111',
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2230c411-2bc6-4124-b61e-38091dbf038d.pdf',
      description: 'XXXXXX资料.pdf',
      status: 'done',
      size: '100.9KB'
    }],
    value_2: [{
      key: '111',
      url: 'https://resource/apml625acb84fbb5ec58eea65137838df523.pdf',
      description: 'XXXXXX资料.pdf',
      status: 'done',
      size: '100.9KB'
    }, {
      key: '111',
      url: 'https://resource/apml625acb84fbb5ec58eea65137838df523.zip',
      description: 'XXXXXX资料.zip',
      status: 'pending',
      size: '100.9KB',
      progress: 50
    }, {
      key: '111',
      url: 'https://resource/apml625acb84fbb5ec58eea65137838df523.doc',
      description: 'XXXXXX资料.doc',
      status: 'error',
      size: '100.9KB'
    }],
    value_3: [{
      key: '111',
      url: 'https://resource/apml625acb84fbb5ec58eea65137838df523.xls',
      description: 'XXXXXX资料.xls',
      status: 'done',
      size: '100.9KB'
    }, {
      key: '111',
      url: 'https://resource/apml625acb84fbb5ec58eea65137838df523.txt',
      description: '通用文件.apk',
      status: 'done',
      size: '20.9MB'
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
          status: 'done' // 或者 'error'
        })
      }, 3000)
    })
  }
});
