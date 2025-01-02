"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6093],{43011:function(o,a,e){e.r(a),e.d(a,{demos:function(){return l}});var n=e(67294),d=e(23170),l={"src-image-upload-demo-imageupload":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,93518))})),asset:{type:"BLOCK",id:"src-image-upload-demo-imageupload",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},1438:function(o,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(23170);const d=[{value:"It is used to upload pictures to the server, and briefly display the information of the uploaded files and provide preview function. Use when you need to upload local pictures or photos to the server.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-uploader": "antd-mini/es/ImageUpload/index"
#endif
#if WECHAT
  "ant-uploader": "antd-mini/ImageUpload/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"onBeforeUpload",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"onUpload",paraId:3,tocIndex:3},{value:" Function Receive ",paraId:3,tocIndex:3},{value:"LocalFile",paraId:3,tocIndex:3},{value:", you can customize the upload-related business logic.",paraId:3,tocIndex:3},{value:"preview",paraId:3,tocIndex:3},{value:" The event is triggered by clicking on the uploaded picture and can be coordinated ",paraId:3,tocIndex:3},{value:"my.previewimage",paraId:3,tocIndex:3},{value:" Realize the picture preview.",paraId:3,tocIndex:3},{value:"change",paraId:3,tocIndex:3},{value:" event will be triggered when the list of uploaded files changes.",paraId:3,tocIndex:3},{value:`<ant-uploader
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
`,paraId:5,tocIndex:3},{value:"fileList",paraId:6,tocIndex:4},{value:"and ",paraId:6,tocIndex:4},{value:"change",paraId:6,tocIndex:4},{value:" Events cooperate to achieve controlled mode. If you want the component to trigger the upload logic externally, pass ",paraId:6,tocIndex:4},{value:"ref",paraId:6,tocIndex:4},{value:" way to get the component instance and call the component. ",paraId:6,tocIndex:4},{value:"chooseImage",paraId:6,tocIndex:4},{value:" method can be.",paraId:6,tocIndex:4},{value:`<ant-uploader
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
  Component External Trigger Upload Logic
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
`,paraId:8,tocIndex:4},{value:"Property",paraId:9,tocIndex:6},{value:"Description",paraId:9,tocIndex:6},{value:"Type",paraId:9,tocIndex:6},{value:"Default Value",paraId:9,tocIndex:6},{value:"className",paraId:9,tocIndex:6},{value:"Class Name",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"maxCount",paraId:9,tocIndex:6},{value:"Maximum number of uploaded images. See details in ",paraId:9,tocIndex:6},{value:"maxCount",paraId:10,tocIndex:6},{value:"number",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"defaultFileList",paraId:9,tocIndex:6},{value:"File List Initial Value",paraId:9,tocIndex:6},{value:"File",paraId:11,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"sourceType",paraId:9,tocIndex:6},{value:"Upload the selected source. Optional ",paraId:9,tocIndex:6},{value:"['album']",paraId:9,tocIndex:6},{value:"\u3001",paraId:9,tocIndex:6},{value:"['camera']",paraId:9,tocIndex:6},{value:" or ",paraId:9,tocIndex:6},{value:"['album', 'camera']",paraId:9,tocIndex:6},{value:"string[]",paraId:9,tocIndex:6},{value:"['album', 'camera']",paraId:9,tocIndex:6},{value:"style",paraId:9,tocIndex:6},{value:"Style",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"uploadingText",paraId:9,tocIndex:6},{value:"Prompt copy in upload",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"'Uploading......'",paraId:9,tocIndex:6},{value:"uploadfailedText",paraId:9,tocIndex:6},{value:"Prompt copy for upload failure",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"'Upload failed'",paraId:9,tocIndex:6},{value:"fileList",paraId:9,tocIndex:6},{value:"File List (Controlled)",paraId:9,tocIndex:6},{value:"File",paraId:12,tocIndex:6},{value:"[]",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"imageMode",paraId:9,tocIndex:6},{value:"Picture zoom mode and crop mode. See details in ",paraId:9,tocIndex:6},{value:"Image Mode Description",paraId:9,tocIndex:6},{value:"string",paraId:9,tocIndex:6},{value:"scaleToFill",paraId:9,tocIndex:6},{value:"onBeforeUpload",paraId:9,tocIndex:6},{value:"The hook before uploading the file. The parameter is the list of files to be uploaded. If false is returned, the upload is stopped. You can return a Promise object. When you Promise an object to reject, the upload is stopped and the upload is started when it is resolve (resolve the modified localFileList is passed in).",paraId:9,tocIndex:6},{value:"(localFileList: ",paraId:9,tocIndex:6},{value:"localFile",paraId:13,tocIndex:6},{value:"[]) => boolean | Promise<",paraId:9,tocIndex:6},{value:"localFile",paraId:14,tocIndex:6},{value:"[]>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onChooseImageError",paraId:9,tocIndex:6},{value:"Select the picture failure callback. See details in ",paraId:9,tocIndex:6},{value:"onChooseImageError",paraId:15,tocIndex:6},{value:"(err) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onUpload",paraId:9,tocIndex:6},{value:"Image upload method. See details in ",paraId:9,tocIndex:6},{value:"onUpload",paraId:16,tocIndex:6},{value:"(localFile: ",paraId:9,tocIndex:6},{value:"LocalFile",paraId:17,tocIndex:6},{value:") => Promise<string>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"onRemove",paraId:9,tocIndex:6},{value:"Click the callback when removing files. Does not remove if the return value is false. Support to return a Promise object, Promise object resolve(false) or reject does not remove",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:18,tocIndex:6},{value:") => boolean | Promise<boolean>",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if ALIPAY onChange",paraId:9,tocIndex:6},{value:"Triggered when the list of uploaded files changes",paraId:9,tocIndex:6},{value:"(fileList: ",paraId:9,tocIndex:6},{value:"File",paraId:19,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if ALIPAY onPreview",paraId:9,tocIndex:6},{value:"Triggered when an image is clicked",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:20,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if WECHAT bindchange",paraId:9,tocIndex:6},{value:"Triggered when the list of uploaded files changes",paraId:9,tocIndex:6},{value:"(fileList: ",paraId:9,tocIndex:6},{value:"File",paraId:21,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"#if WECHAT bindpreview",paraId:9,tocIndex:6},{value:"Triggered when an image is clicked",paraId:9,tocIndex:6},{value:"(file: ",paraId:9,tocIndex:6},{value:"File",paraId:22,tocIndex:6},{value:"[]) => void",paraId:9,tocIndex:6},{value:"-",paraId:9,tocIndex:6},{value:"Parameters",paraId:23,tocIndex:7},{value:"Description",paraId:23,tocIndex:7},{value:"Type",paraId:23,tocIndex:7},{value:"Default Value",paraId:23,tocIndex:7},{value:"url",paraId:23,tocIndex:7},{value:"image url",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"status",paraId:23,tocIndex:7},{value:"Upload status. Optional ",paraId:23,tocIndex:7},{value:"uploading",paraId:23,tocIndex:7},{value:"(Uploading),",paraId:23,tocIndex:7},{value:"done",paraId:23,tocIndex:7},{value:"(upload complete) or ",paraId:23,tocIndex:7},{value:"error",paraId:23,tocIndex:7},{value:"(Upload failed)",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"uid",paraId:23,tocIndex:7},{value:"The unique identifier. Automatically generated when not set",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"path",paraId:23,tocIndex:7},{value:"Local Image Path",paraId:23,tocIndex:7},{value:"string",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"size",paraId:23,tocIndex:7},{value:"Local image size. Some models may not return this attribute",paraId:23,tocIndex:7},{value:"number",paraId:23,tocIndex:7},{value:"-",paraId:23,tocIndex:7},{value:"Parameters",paraId:24,tocIndex:8},{value:"Description",paraId:24,tocIndex:8},{value:"Type",paraId:24,tocIndex:8},{value:"Default Value",paraId:24,tocIndex:8},{value:"path",paraId:24,tocIndex:8},{value:"Local Image Path",paraId:24,tocIndex:8},{value:"string",paraId:24,tocIndex:8},{value:"-",paraId:24,tocIndex:8},{value:"size",paraId:24,tocIndex:8},{value:"Local image size. Some models may not return this attribute",paraId:24,tocIndex:8},{value:"number",paraId:24,tocIndex:8},{value:"-",paraId:24,tocIndex:8},{value:"onUpload",paraId:25,tocIndex:9},{value:" Method Receive ",paraId:25,tocIndex:9},{value:"LocalFile",paraId:25,tocIndex:9},{value:"Return in the Promise. ",paraId:25,tocIndex:9},{value:"File",paraId:25,tocIndex:9},{value:". The following is the call ",paraId:25,tocIndex:9},{value:"my.uploadFile",paraId:25,tocIndex:9},{value:" Sample code for uploading:",paraId:25,tocIndex:9},{value:`onUpload(localFile) {
  return new Promise((resolve, reject) => {
    my.uploadFile({
      url: 'https://...', // \u8BF7\u66FF\u6362\u6210\u6709\u6548\u7684\u670D\u52A1\u7AEF url
      fileType: 'image',
      name: 'userfile', // \u6839\u636E\u540E\u53F0\u670D\u52A1\u9700\u6C42\u66FF\u6362
      filePath: localFile.path, // \u4F20\u5165 localFile.path
      formData: { extra: '\u5176\u4ED6\u4FE1\u606F' }, // \u6839\u636E\u540E\u53F0\u670D\u52A1\u9700\u6C42\u66FF\u6362
      success: res => {
        // \u6839\u636E\u540E\u53F0\u8FD4\u56DE\uFF0C\u5F97\u5230\u4E0A\u4F20\u6210\u529F\u7684image url
        const { url } = JSON.parse(res.data);
        resolve(url); // \u8C03\u7528 resolve \u4F20\u5165image url
      },
      fail: err => {
        reject(); // \u4E0A\u4F20\u9519\u8BEF\u8C03\u7528 reject
      },
    });
  });
}
`,paraId:26,tocIndex:9},{value:"Selecting a picture may fail,",paraId:27,tocIndex:10},{value:"onChooseImageError",paraId:27,tocIndex:10},{value:" can get errors, you can view ",paraId:27,tocIndex:10},{value:"my.chooseImage Error Code",paraId:27,tocIndex:10},{value:"\u3002",paraId:27,tocIndex:10},{value:`onChooseImageError(err) {
  console.log(err);
}
`,paraId:28,tocIndex:10},{value:"maxCount",paraId:29,tocIndex:11},{value:" Indicates the maximum number of pictures that can be uploaded, and does not transmit means unlimited. Since the small program selection picture interface has an upper limit of one-time selection of pictures, if ",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" More than this limit, multiple uploads are required. For example,",paraId:29,tocIndex:11},{value:'maxCount="{{10}}"',paraId:29,tocIndex:11},{value:", 10 pictures are allowed to be uploaded. Users need to upload 9 pictures first and then 1 picture.",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" No restrictions ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" and ",paraId:29,tocIndex:11},{value:"fileList",paraId:29,tocIndex:11},{value:". For example,",paraId:29,tocIndex:11},{value:"maxCount",paraId:29,tocIndex:11},{value:" 1, and ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" Contains 2 images, will not reduce ",paraId:29,tocIndex:11},{value:"defaultFileList",paraId:29,tocIndex:11},{value:" in the picture. The upload button is hidden.",paraId:29,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:30,tocIndex:13},{value:"Variable name",paraId:31,tocIndex:13},{value:"Default Value",paraId:31,tocIndex:13},{value:"Dark Mode Default",paraId:31,tocIndex:13},{value:"Remarks",paraId:31,tocIndex:13},{value:"--image-upload-cover-background",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"Image upload cover background color (overlay)",paraId:31,tocIndex:13},{value:"--image-upload-wrapper-background",paraId:31,tocIndex:13},{value:"#f5f5f5",paraId:31,tocIndex:13},{value:"#121212",paraId:31,tocIndex:13},{value:"Picture upload package background color",paraId:31,tocIndex:13},{value:"--image-upload-text-color",paraId:31,tocIndex:13},{value:"#ffffff",paraId:31,tocIndex:13},{value:"#ffffff",paraId:31,tocIndex:13},{value:"Image upload text color",paraId:31,tocIndex:13},{value:"--image-upload-background-color",paraId:31,tocIndex:13},{value:"rgba(0, 0, 0, 0.4)",paraId:31,tocIndex:13},{value:"#1a1a1a",paraId:31,tocIndex:13},{value:"Image upload background color",paraId:31,tocIndex:13}]}}]);
