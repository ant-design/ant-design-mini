"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6822],{2825:function(o,e,a){a.r(e),a.d(e,{demos:function(){return l}});var n=a(67294),d=a(94502),l={"src-image-upload-demo-imageupload":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,93518))})),asset:{type:"BLOCK",id:"src-image-upload-demo-imageupload",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},57076:function(o,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(94502);const d=[{value:"\u7528\u4E8E\u5C06\u56FE\u7247\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u5E76\u7B80\u7565\u5C55\u793A\u4E0A\u4F20\u6587\u4EF6\u7684\u4FE1\u606F\u53CA\u63D0\u4F9B\u9884\u89C8\u529F\u80FD\u3002\u9700\u8981\u5C06\u672C\u5730\u56FE\u7247\u6216\u62CD\u7167\u540E\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u65F6\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-uploader": "antd-mini/es/ImageUpload/index"
#endif
#if WECHAT
  "ant-uploader": "antd-mini/ImageUpload/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"onBeforeUpload",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"onUpload",paraId:3,tocIndex:3},{value:" \u51FD\u6570\u63A5\u6536 ",paraId:3,tocIndex:3},{value:"LocalFile",paraId:3,tocIndex:3},{value:"\uFF0C\u53EF\u4EE5\u5B9A\u5236\u4E0A\u4F20\u76F8\u5173\u4E1A\u52A1\u903B\u8F91\u3002",paraId:3,tocIndex:3},{value:"preview",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u662F\u70B9\u51FB\u5DF2\u4E0A\u4F20\u56FE\u7247\u89E6\u53D1\uFF0C\u53EF\u4EE5\u914D\u5408 ",paraId:3,tocIndex:3},{value:"my.previewimage",paraId:3,tocIndex:3},{value:" \u5B9E\u73B0\u56FE\u7247\u9884\u89C8\u3002",paraId:3,tocIndex:3},{value:"change",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u5219\u5C06\u5728\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\u53D8\u5316\u65F6\u89E6\u53D1\u3002",paraId:3,tocIndex:3},{value:`<ant-uploader
  defaultFileList="{{defaultFileList}}"
  uploadingText="\u4E0A\u4F20\u4E2D\u2026\u2026"
  uploadfailedText="\u4E0A\u4F20\u5931\u8D25"
#if ALIPAY
  onBeforeUpload="onBeforeUpload"
  onUpload="onUpload"
  onPreview="onPreview"
  onChange="onChange"
#endif
#if WECHAT
  onBeforeUpload="{{onBeforeUpload}}"
  onUpload="{{onUpload}}"
  bindchange="onChange"
  bindpreview="onPreview"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    defaultFileList: [{ url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ', status: 'done' }],
#if WECHAT
    onUpload(file) {
      return new Promise((resolve) => {
        console.log('\u4E0A\u4F20\u7684\u56FE\u7247\u4E3A\uFF1A', file);
        setTimeout(() => {
          resolve(
            'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
          );
        }, 2000);
      });
    },
    onBeforeUpload(localFileList) {
      console.log('\u5373\u5C06\u4E0A\u4F20\u7684\u56FE\u7247\u5217\u8868\u4E3A\uFF1A', localFileList);
      localFileList = localFileList.filter((item) => item.size < 10000);
      console.log('\u4FEE\u6539\u4E0A\u4F20\u7684\u56FE\u7247\u5217\u8868\u4E3A\uFF1A', localFileList);
      return localFileList;
    },
#endif
  },
  onChange(fileList) {
    console.log('\u56FE\u7247\u5217\u8868\uFF1A', fileList);
  },
  onPreview(file) {
    console.log('preview', file);
  },
#if ALIPAY
  onUpload(file) {
    return new Promise((resolve) => {
      console.log('\u4E0A\u4F20\u7684\u56FE\u7247\u4E3A\uFF1A', file);
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
        );
      }, 2000);
    });
  },
  onBeforeUpload(localFileList) {
    console.log('\u5373\u5C06\u4E0A\u4F20\u7684\u56FE\u7247\u5217\u8868\u4E3A\uFF1A', localFileList);
    localFileList = localFileList.filter((item) => item.size < 10000);
    console.log('\u4FEE\u6539\u4E0A\u4F20\u7684\u56FE\u7247\u5217\u8868\u4E3A\uFF1A', localFileList);
    return localFileList;
  },
#endif
});
`,paraId:5,tocIndex:3},{value:"fileList",paraId:6,tocIndex:4},{value:"\u548C ",paraId:6,tocIndex:4},{value:"change",paraId:6,tocIndex:4},{value:" \u4E8B\u4EF6\u914D\u5408\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002\u60F3\u8981\u7EC4\u4EF6\u5916\u90E8\u89E6\u53D1\u4E0A\u4F20\u903B\u8F91\uFF0C\u901A\u8FC7 ",paraId:6,tocIndex:4},{value:"ref",paraId:6,tocIndex:4},{value:" \u7684\u65B9\u5F0F\u62FF\u5230\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u8C03\u7528\u7EC4\u4EF6\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"chooseImage",paraId:6,tocIndex:4},{value:" \u65B9\u6CD5\u5373\u53EF\u3002",paraId:6,tocIndex:4},{value:`<ant-uploader
  ref="handleUploaderRef"
  fileList="{{fileList}}"
#if ALIPAY
  onChange="handleControlledChange"
  onUpload="onUpload"
#endif
#if WECHAT
  bindchange="handleControlledChange"
  onUpload="{{onUpload}}"
#endif
/>
<ant-button
  size="medium"
  onTap="upload"
  type="primary">
  \u7EC4\u4EF6\u5916\u90E8\u89E6\u53D1\u4E0A\u4F20\u903B\u8F91
</ant-button>
`,paraId:7,tocIndex:4},{value:`Page({
  data: {
    fileList: [{ url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ', status: 'done' }],
#if WECHAT
    onUpload(file) {
      return new Promise((resolve) => {
        console.log('\u4E0A\u4F20\u7684\u56FE\u7247\u4E3A\uFF1A', file);
        setTimeout(() => {
          resolve(
            'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
          );
        }, 2000);
      });
    },
#endif
  },
#if ALIPAY
  onUpload(file) {
    return new Promise((resolve) => {
      console.log('\u4E0A\u4F20\u7684\u56FE\u7247\u4E3A\uFF1A', file);
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ'
        );
      }, 2000);
    });
  },
#endif
  handleControlledChange(fileList) {
#if WECHAT
    this.setData({
      fileList: fileList.detail,
    });
#endif
#if ALIPAY
    this.setData({
      fileList,
    });
#endif
  },
  handleUploaderRef(ref) {
    console.log('handleUploaderRef', ref);
#if WECHAT
    this.handleUploaderRef = ref.detail;
#endif
#if ALIPAY
    this.handleUploaderRef = ref;
#endif
  },
  upload() {
    this.handleUploaderRef.chooseImage();
  },
});
`,paraId:8,tocIndex:4},{value:"\u5C5E\u6027",paraId:9,tocIndex:6},{value:"\u8BF4\u660E",paraId:9,tocIndex:6},{value:"\u7C7B\u578B",paraId:9,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:6},{value:"className",paraId:9,tocIndex:6},{value:"\u7C7B\u540D",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"maxCount",paraId:9,tocIndex:6},{value:"\u4E0A\u4F20\u56FE\u7247\u9650\u5236\u7684\u6700\u5927\u6570\u91CF\u3002\u8BE6\u89C1 ",paraId:9,tocIndex:6},{value:"maxCount",paraId:10,tocIndex:6},{value:"number",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"defaultFileList",paraId:9,tocIndex:6},{value:"\u6587\u4EF6\u5217\u8868\u521D\u59CB\u503C",paraId:9,tocIndex:6},{value:"File",paraId:11,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"sourceType",paraId:9,tocIndex:6},{value:"\u4E0A\u4F20\u9009\u62E9\u7684\u6765\u6E90\u3002\u53EF\u9009 ",paraId:9,tocIndex:6},{value:"['album']",paraId:9,tocIndex:6},{value:"\u3001",paraId:9,tocIndex:6},{value:"['camera']",paraId:9,tocIndex:6},{value:" \u6216 ",paraId:9,tocIndex:6},{value:"['album', 'camera']",paraId:9,tocIndex:6},{value:"string[]",paraId:9,tocIndex:6},{value:"['album', 'camera']",paraId:9,tocIndex:6},{value:"style",paraId:9,tocIndex:6},{value:"\u6837\u5F0F",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"uploadingText",paraId:9,tocIndex:6},{value:"\u4E0A\u4F20\u4E2D\u63D0\u793A\u6587\u6848",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"'\u4E0A\u4F20\u4E2D\u2026\u2026'",paraId:9,tocIndex:6},{value:"uploadfailedText",paraId:9,tocIndex:6},{value:"\u4E0A\u4F20\u5931\u8D25\u63D0\u793A\u6587\u6848",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"'\u4E0A\u4F20\u5931\u8D25'",paraId:9,tocIndex:6},{value:"fileList",paraId:9,tocIndex:6},{value:"\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09",paraId:9,tocIndex:6},{value:"File",paraId:12,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"imageMode",paraId:9,tocIndex:6},{value:"\u56FE\u7247\u7F29\u653E\u6A21\u5F0F\u548C\u88C1\u526A\u6A21\u5F0F\u3002\u8BE6\u89C1 ",paraId:9,tocIndex:6},{value:"\u56FE\u7247 mode \u8BF4\u660E",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"scaleToFill",paraId:9,tocIndex:6},{value:"onBeforeUpload",paraId:9,tocIndex:6},{value:"\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\u3002\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u82E5\u8FD4\u56DE false \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08resolve \u4F20\u5165\u4FEE\u6539\u540E\u7684 localFileList\uFF09",paraId:9,tocIndex:6},{value:"(localFileList: ",paraId:9,tocIndex:6},{value:"localFile",paraId:13,tocIndex:6},{value:"[]) => boolean | Promise<",paraId:9,tocIndex:6},{value:"localFile",paraId:14,tocIndex:6},{value:"[]>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onChooseImageError",paraId:9,tocIndex:6},{value:"\u9009\u62E9\u56FE\u7247\u5931\u8D25\u56DE\u8C03\u3002\u8BE6\u89C1 ",paraId:9,tocIndex:6},{value:"onChooseImageError",paraId:15,tocIndex:6},{value:"(err) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onUpload",paraId:9,tocIndex:6},{value:"\u56FE\u7247\u4E0A\u4F20\u65B9\u6CD5\u3002\u8BE6\u89C1 ",paraId:9,tocIndex:6},{value:"onUpload",paraId:16,tocIndex:6},{value:"(localFile: ",paraId:9,tocIndex:6},{value:"LocalFile",paraId:17,tocIndex:6},{value:") => Promise<string>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onRemove",paraId:9,tocIndex:6},{value:"\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\u3002\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:18,tocIndex:6},{value:") => boolean | Promise<boolean>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if ALIPAY onChange",paraId:9,tocIndex:6},{value:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\u53D8\u5316\u65F6\u89E6\u53D1",paraId:9,tocIndex:6},{value:"(fileList: ",paraId:9,tocIndex:6},{value:"File",paraId:19,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if ALIPAY onPreview",paraId:9,tocIndex:6},{value:"\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:20,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if WECHAT bindchange",paraId:9,tocIndex:6},{value:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\u53D8\u5316\u65F6\u89E6\u53D1",paraId:9,tocIndex:6},{value:"(fileList: ",paraId:9,tocIndex:6},{value:"File",paraId:21,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if WECHAT bindpreview",paraId:9,tocIndex:6},{value:"\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:22,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"\u53C2\u6570",paraId:23,tocIndex:7},{value:"\u8BF4\u660E",paraId:23,tocIndex:7},{value:"\u7C7B\u578B",paraId:23,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:23,tocIndex:7},{value:"url",paraId:23,tocIndex:7},{value:"\u56FE\u7247 url",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"status",paraId:23,tocIndex:7},{value:"\u4E0A\u4F20\u72B6\u6001\u3002\u53EF\u9009 ",paraId:23,tocIndex:7},{value:"uploading",paraId:23,tocIndex:7},{value:"\uFF08\u4E0A\u4F20\u4E2D\uFF09\u3001",paraId:23,tocIndex:7},{value:"done",paraId:23,tocIndex:7},{value:"\uFF08\u4E0A\u4F20\u5B8C\u6210\uFF09\u6216 ",paraId:23,tocIndex:7},{value:"error",paraId:23,tocIndex:7},{value:"\uFF08\u4E0A\u4F20\u5931\u8D25\uFF09",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"uid",paraId:23,tocIndex:7},{value:"\u552F\u4E00\u6807\u8BC6\u7B26\u3002\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"path",paraId:23,tocIndex:7},{value:"\u672C\u5730\u56FE\u7247\u8DEF\u5F84",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"size",paraId:23,tocIndex:7},{value:"\u672C\u5730\u56FE\u7247\u5927\u5C0F\u3002\u6709\u7684\u673A\u578B\u53EF\u80FD\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E2A\u5C5E\u6027",paraId:23,tocIndex:7},{value:"number",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"\u53C2\u6570",paraId:24,tocIndex:8},{value:"\u8BF4\u660E",paraId:24,tocIndex:8},{value:"\u7C7B\u578B",paraId:24,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:24,tocIndex:8},{value:"path",paraId:24,tocIndex:8},{value:"\u672C\u5730\u56FE\u7247\u8DEF\u5F84",paraId:24,tocIndex:8},{value:"string",paraId:24,tocIndex:8},{value:"-",paraId:24,tocIndex:8},{value:"size",paraId:24,tocIndex:8},{value:"\u672C\u5730\u56FE\u7247\u5927\u5C0F\u3002\u6709\u7684\u673A\u578B\u53EF\u80FD\u6CA1\u6709\u8FD4\u56DE\u8FD9\u4E2A\u5C5E\u6027",paraId:24,tocIndex:8},{value:"number",paraId:24,tocIndex:8},{value:"-",paraId:24,tocIndex:8},{value:"onUpload",paraId:25,tocIndex:9},{value:" \u65B9\u6CD5\u63A5\u6536 ",paraId:25,tocIndex:9},{value:"LocalFile",paraId:25,tocIndex:9},{value:"\uFF0C\u5728 Promise \u91CC\u8FD4\u56DE ",paraId:25,tocIndex:9},{value:"File",paraId:25,tocIndex:9},{value:"\u3002\u4EE5\u4E0B\u662F\u8C03\u7528 ",paraId:25,tocIndex:9},{value:"my.uploadFile",paraId:25,tocIndex:9},{value:" \u8FDB\u884C\u4E0A\u4F20\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A",paraId:25,tocIndex:9},{value:`onUpload(localFile) {
  return new Promise((resolve, reject) => {
    my.uploadFile({
      url: 'https://...', // \u8BF7\u66FF\u6362\u6210\u6709\u6548\u7684\u670D\u52A1\u7AEF url
      fileType: 'image',
      name: 'userfile', // \u6839\u636E\u540E\u53F0\u670D\u52A1\u9700\u6C42\u66FF\u6362
      filePath: localFile.path, // \u4F20\u5165 localFile.path
      formData: { extra: '\u5176\u4ED6\u4FE1\u606F' }, // \u6839\u636E\u540E\u53F0\u670D\u52A1\u9700\u6C42\u66FF\u6362
      success: res => {
        // \u6839\u636E\u540E\u53F0\u8FD4\u56DE\uFF0C\u5F97\u5230\u4E0A\u4F20\u6210\u529F\u7684\u56FE\u7247 url
        const { url } = JSON.parse(res.data);
        resolve(url); // \u8C03\u7528 resolve \u4F20\u5165\u56FE\u7247 url
      },
      fail: err => {
        reject(); // \u4E0A\u4F20\u9519\u8BEF\u8C03\u7528 reject
      },
    });
  });
}
`,paraId:26,tocIndex:9},{value:"\u9009\u62E9\u56FE\u7247\u53EF\u80FD\u4F1A\u5931\u8D25\uFF0C",paraId:27,tocIndex:10},{value:"onChooseImageError",paraId:27,tocIndex:10},{value:" \u53EF\u83B7\u53D6\u9519\u8BEF\uFF0C\u53EF\u4EE5\u67E5\u770B ",paraId:27,tocIndex:10},{value:"my.chooseImage \u9519\u8BEF\u7801",paraId:27,tocIndex:10},{value:"\u3002",paraId:27,tocIndex:10},{value:`onChooseImageError(err) {
  console.log(err);
}
`,paraId:28,tocIndex:10},{value:"maxCount",paraId:29,tocIndex:11},{value:" \u8868\u793A\u6700\u591A\u53EF\u4EE5\u4E0A\u4F20\u7684\u56FE\u7247\u6570\u91CF\uFF0C\u4E0D\u4F20\u8868\u793A\u65E0\u9650\u5236\u3002\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u9009\u62E9\u56FE\u7247\u754C\u9762\u6709\u4E00\u6B21\u6027\u9009\u62E9\u56FE\u7247\u7684\u4E0A\u9650\uFF0C\u5982\u679C ",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" \u5927\u4E8E\u6B64\u4E0A\u9650\uFF0C\u5219\u9700\u8981\u591A\u6B21\u4E0A\u4F20\u3002\u4F8B\u5982\uFF0C",paraId:29,tocIndex:11},{value:'maxCount="{{10}}"',paraId:29,tocIndex:11},{value:"\uFF0C\u5141\u8BB8\u4E0A\u4F20 10 \u5F20\u56FE\u7247\uFF0C\u7528\u6237\u9700\u5148\u4E0A\u4F20 9 \u5F20\uFF0C\u4E4B\u540E\u518D\u4E0A\u4F20 1 \u5F20\u3002",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" \u4E0D\u9650\u5236 ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" \u548C ",paraId:29,tocIndex:11},{value:"fileList",paraId:29,tocIndex:11},{value:"\u3002\u4F8B\u5982\uFF0C",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" \u4E3A 1\uFF0C\u800C ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" \u5305\u542B 2 \u5F20\u56FE\u7247\uFF0C\u4E0D\u4F1A\u51CF\u5C11 ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" \u91CC\u7684\u56FE\u7247\u3002\u4E0A\u4F20\u6309\u94AE\u5219\u4F1A\u9690\u85CF\u3002",paraId:29,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:30,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:31,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:31,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:31,tocIndex:13},{value:"\u5907\u6CE8",paraId:31,tocIndex:13},{value:"--image-upload-cover-background",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"\u56FE\u7247\u4E0A\u4F20\u5C01\u9762\u80CC\u666F\u989C\u8272\uFF08\u8986\u76D6\uFF09",paraId:31,tocIndex:13},{value:"--image-upload-wrapper-background",paraId:31,tocIndex:13},{value:"#f5f5f5",paraId:31,tocIndex:13},{value:"#121212",paraId:31,tocIndex:13},{value:"\u56FE\u7247\u4E0A\u4F20\u5305\u88F9\u80CC\u666F\u989C\u8272",paraId:31,tocIndex:13},{value:"--image-upload-text-color",paraId:31,tocIndex:13},{value:"#ffffff",paraId:31,tocIndex:13},{value:"#ffffff",paraId:31,tocIndex:13},{value:"\u56FE\u7247\u4E0A\u4F20\u6587\u672C\u989C\u8272",paraId:31,tocIndex:13},{value:"--image-upload-background-color",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"#1a1a1a",paraId:31,tocIndex:13},{value:"\u56FE\u7247\u4E0A\u4F20\u80CC\u666F\u989C\u8272",paraId:31,tocIndex:13}]}}]);
