---
nav:
  path: /components
group:
  title: Information Entry
toc: 'content'
---

# ImageUpload

It is used to upload pictures to the server, and briefly display the information of the uploaded files and provide preview function. Use when you need to upload local pictures or photos to the server.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-uploader": "antd-mini/es/ImageUpload/index"
#endif
#if WECHAT
  "ant-uploader": "antd-mini/ImageUpload/index"
#endif
}
```

## Code Sample

### Basic use

> `onBeforeUpload`、`onUpload` Function Receive `LocalFile`, you can customize the upload-related business logic.`preview` The event is triggered by clicking on the uploaded picture and can be coordinated [my.previewimage](https://opendocs.alipay.com/mini/api/media/image/my.previewimage) Realize the picture preview.`change` event will be triggered when the list of uploaded files changes.

```xml
<ant-uploader
  defaultFileList="{{defaultFileList}}"
  uploadingText="上传中……"
  uploadfailedText="上传失败"
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
```

```js
Page({
  data: {
    defaultFileList: [{ url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ', status: 'done' }],
#if WECHAT
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
#endif
  },
  onChange(fileList) {
    console.log('图片列表：', fileList);
  },
  onPreview(file) {
    console.log('preview', file);
  },
#if ALIPAY
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
#endif
});
```

### Controlled Mode

> `fileList`and `change` Events cooperate to achieve controlled mode. If you want the component to trigger the upload logic externally, pass `ref` way to get the component instance and call the component. `chooseImage` method can be.

```xml
<ant-uploader
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
```

```js
Page({
  data: {
    fileList: [{ url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ', status: 'done' }],
#if WECHAT
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
#endif
  },
#if ALIPAY
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
```

### Demo Code

<code src='../../demo/pages/ImageUpload/index'></code>

## API

| Property                    | Description                                                                                                                                                                                     | Type                                                                                        | Default Value              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| className               | Class Name                                                                                                                                                                                     | string                                                                                      | -                   |
| maxCount                | Maximum number of uploaded images. See details in [maxCount](#maxcount)                                                                                                                                       | number                                                                                      | -                   |
| defaultFileList         | File List Initial Value                                                                                                                                                                           | [File](#file)[]                                                                             | []                  |
| sourceType              | Upload the selected source. Optional `['album']`、`['camera']` or `['album', 'camera']`                                                                                                                  | string[]                                                                                    | ['album', 'camera'] |
| style                   | Style                                                                                                                                                                                     | string                                                                                      | -                   |
| uploadingText           | Prompt copy in upload                                                                                                                                                                           | string                                                                                      | 'Uploading......'          |
| uploadfailedText        | Prompt copy for upload failure                                                                                                                                                                         | string                                                                                      | 'Upload failed'          |
| fileList                | File List (Controlled)                                                                                                                                                                         | [File](#file)[]                                                                             | -                   |
| imageMode               | Picture zoom mode and crop mode. See details in [Image Mode Description](https://opendocs.alipay.com/mini/component/image#mode)                                                                                     | string                                                                                      | scaleToFill         |
| onBeforeUpload          | The hook before uploading the file. The parameter is the list of uploaded files. If false is returned, the upload is stopped. You can return a Promise object. When you Promise an object to reject, the upload is stopped and the upload is started when it is resolve (resolve the modified localFileList is passed in). | (localFileList: [localFile](#localfile)[]) => boolean \| Promise<[localFile](#localfile)[]> | -                   |
| onChooseImageError      | Select picture failure callback. See details in [onChooseImageError](###onChooseImageError)                                                                                                                       | (err) => void                                                                               | -                   |
| onUpload                | Image upload method. See details in [onUpload](#onupload)                                                                                                                                                 | (localFile: [LocalFile](#localfile)) => Promise\<string\>                                   | -                   |
| onRemove                | Click the callback when removing files. Do not remove if the return value is false. Support to return a Promise object, Promise object resolve(false) or reject does not remove                                                                 | (file: [File](#file)) => boolean \| Promise\<boolean\>                                      | -                   |
| #if ALIPAY onChange     | Triggered when the list of uploaded files changes                                                                                                                                                               | (fileList: [File](#file)[]) => void                                                         | -                   |
| #if ALIPAY onPreview    | Triggered when an image is clicked                                                                                                                                                                           | (file: [File](#file)[]) => void                                                             | -                   |
| #if WECHAT bindchange  | Triggered when the list of uploaded files changes                                                                                                                                                               | (fileList: [File](#file)[]) => void                                                         | -                   |
| #if WECHAT bindpreview | Triggered when an image is clicked                                                                                                                                                                           | (file: [File](#file)[]) => void                                                             | -                   |

### File

| Parameters   | Description                                                                           | Type   | Default Value |
| ------ | ------------------------------------------------------------------------------ | ------ | ------ |
| url    | image url                                                                       | string | -      |
| status | Upload status. Optional `uploading`(Uploading),`done`(upload complete) or `error`(Upload failed) | string | -      |
| uid    | The unique identifier. Automatically generated when not set                                                 | string | -      |
| path   | Local Image Path                                                                   | string | -      |
| size   | Local image size. Some models may not return this attribute                                     | number | -      |

### LocalFile

| Parameters | Description                                       | Type   | Default Value |
| ---- | ------------------------------------------ | ------ | ------ |
| path | Local Image Path                               | string | -      |
| size | Local image size. Some models may not return this attribute | number | -      |

### onUpload

`onUpload` Method Receive `LocalFile`Return in the Promise. `File`. The following is the call [my.uploadFile](https://opendocs.alipay.com/mini/api/kmq4hc) Sample code for uploading:

```js
onUpload(localFile) {
  return new Promise((resolve, reject) => {
    my.uploadFile({
      url: 'https://...', // 请替换成有效的服务端 url
      fileType: 'image',
      name: 'userfile', // 根据后台服务需求替换
      filePath: localFile.path, // 传入 localFile.path
      formData: { extra: '其他信息' }, // 根据后台服务需求替换
      success: res => {
        // 根据后台返回，得到上传成功的image url
        const { url } = JSON.parse(res.data);
        resolve(url); // 调用 resolve 传入image url
      },
      fail: err => {
        reject(); // 上传错误调用 reject
      },
    });
  });
}
```

### onChooseImageError

Selecting a picture may fail,`onChooseImageError` can get errors, you can view [my.chooseImage Error Code](https://opendocs.alipay.com/mini/api/media/image/my.chooseimage#%E9%94%99%E8%AF%AF%E7%A0%81)。

```js
onChooseImageError(err) {
  console.log(err);
}
```

### maxCount

1. `maxCount` Indicates the maximum number of pictures that can be uploaded, and does not transmit means unlimited. Since the small program selection picture interface has an upper limit of one-time selection of pictures, if `maxCount` More than this limit, multiple uploads are required. For example,`maxCount="{{10}}"`, 10 pictures are allowed to be uploaded. Users need to upload 9 pictures first and then 1 picture.
2. `maxCount` No restrictions `defaultFileList` and `fileList`. For example,`maxCount` 1, and `defaultFileList` Contains 2 images, will not reduce `defaultFileList` in the picture. The upload button is hidden.

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Default Value                                                                                                                  | Dark Mode Default                                                                                                          | Remarks                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| --image-upload-cover-background   | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.4); color: #ffffff;">rgba(0, 0, 0, 0.4)</div> | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.4); color: #ffffff;">rgba(0, 0, 0, 0.4)</div> | Image upload cover background color (overlay) |
| --image-upload-wrapper-background | <div style="width: 150px; height: 40px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                       | <div style="width: 150px; height: 40px; background-color: #121212; color: #ffffff;">#121212</div>                       | Picture upload package background color         |
| --image-upload-text-color         | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                       | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                       | Image upload text color             |
| --image-upload-background-color   |  <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.4); color: #ffffff;">rgba(0, 0, 0, 0.4)</div>                                                                                                               | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                       | Image upload background color             |
