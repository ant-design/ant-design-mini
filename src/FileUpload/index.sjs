const fileTypeIconMap = {
  'pdf': 'https://gw.alipayobjects.com/zos/bmw-prod/3c149400-0afe-4142-9a7b-1dab2262737d.svg',
  'zip': 'https://gw.alipayobjects.com/zos/bmw-prod/d11bc013-d918-43ba-b80d-079c0a788e88.svg',
  'xls': 'https://gw.alipayobjects.com/zos/bmw-prod/6e9873df-394d-45cc-a035-b2cddbe47690.svg',
  'doc': 'https://gw.alipayobjects.com/zos/bmw-prod/9cc078d9-fb35-43a9-bbb7-fac70cbd1ca4.svg',
  'ppt': 'https://gw.alipayobjects.com/zos/bmw-prod/f8f7baf8-79c0-49f7-b526-bdc698a14c68.svg',
  'other': 'https://gw.alipayobjects.com/zos/bmw-prod/59905544-4d90-4f74-806a-a7ce36528399.svg'
}

const getFileUploadFileIcon = (url) => {
  const fileType = url.split('.').pop();
  if (fileTypeIconMap[fileType] && fileType !== 'other') {
    return fileTypeIconMap[fileType];
  }
  return fileTypeIconMap['other'];
};

export default {
  getFileUploadFileIcon,
};
