---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# ImageUpload image upload

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

It is used to upload pictures to the server, and briefly display the information of the uploaded files and provide preview function.

## When to use

Use when you need to upload local pictures or photos to the server.

## Code Sample

### Basic use

<code src='../../demo/pages/ImageUpload/index'></code>

### Controlled Mode

<!-- <code src='pages/ImageUploadControl/index'></code> -->

## API

| Property | Description | Type | Default Value |
| ------ | -------- | ------ | ------- |
| className | Class Name | string | - | 
| maxCount | Maximum number of uploaded images. See details in [maxCount](#maxcount) | number | - | 
| defaultFileList | File List Initial Value | [File](#file)[] | [] | 
| sourceType | 上传选择的来源。可选 `['album']`、`['camera']` 或 `['album', 'camera']` | string[] | ['album', 'camera'] | 
| style | Style | string | - | 
| uploadingText | Prompt copy in upload | string | 'Uploading......' |  
| uploadfailedText | Prompt copy for upload failure | string | 'Upload failed' |  
| fileList | File List (Controlled) | [File](#file)[] | - | 
| imageMode | Picture zoom mode and crop mode. See details in [Image Mode Description](https://opendocs.alipay.com/mini/component/image#mode) | string | scaleToFill | 
| onBeforeUpload | The hook before uploading the file. The parameter is the list of files to be uploaded. If false is returned, the upload is stopped. You can return a Promise object. When you Promise an object to reject, the upload is stopped and the upload is started when it is resolve (resolve the modified localFileList is passed in). | (localFileList: [localFile](#localfile)[]) => boolean \| Promise<[localFile](#localfile)[]> | - | 
| onChooseImageError | Select picture failure callback. See details in [onChooseImageError](###onChooseImageError) | (err) => void | - | 
| onUpload | Image upload method. See details in [onUpload](#onupload) | (localFile: [LocalFile](#localfile)) => Promise\<string\> | - | 
| onChange | Triggered when the list of uploaded files changes | (fileList: [File](#file)[]) => void | - | 
| onRemove | Click the callback when removing files. Do not remove if the return value is false. Support to return a Promise object, Promise object resolve(false) or reject does not remove | (file: [File](#file)) => boolean \| Promise\<boolean\> | - | 
| onPreview | Triggered when an image is clicked | (file: [File](#file)[]) => void | - | 

### File

| Parameters | Description | Type | Default Value |
| ------ | ------- | ------ | ------- |
| url | image url | string | - | 
| status | 上传状态。可选 `uploading`（上传中）、`done`（上传完成）或 `error`（上传失败） | string | - | 
| uid | The unique identifier. Automatically generated when not set | string | - | 
| path | Local Image Path | string | - | 
| size | Local image size. Some models may not return this attribute | number | - | 

### LocalFile

| Parameters | Description | Type | Default Value |
| ----- | ----- | ----- | ----- |
| path | Local Image Path | string | - | 
| size | Local image size. Some models may not return this attribute | number | - | 

### onUpload

`onUpload` 方法接收 `LocalFile`，在 Promise 里返回 `File`。以下是调用 [my.uploadFile](https://opendocs.alipay.com/mini/api/kmq4hc) Sample code for uploading:

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

选择图片可能会失败，`onChooseImageError` 可获取错误，可以查看 [my.chooseImage Error Code](https://opendocs.alipay.com/mini/api/media/image/my.chooseimage#%E9%94%99%E8%AF%AF%E7%A0%81)。

```js
onChooseImageError(err) {
  console.log(err);
}
```

### maxCount

1. `maxCount` 表示最多可以上传的图片数量，不传表示无限制。由于小程序选择图片界面有一次性选择图片的上限，如果 `maxCount` 大于此上限，则需要多次上传。例如，`maxCount="{{10}}"`，允许上传 10 张图片，用户需先上传 9 张，之后再上传 1 张。
2. `maxCount` 不限制 `defaultFileList` 和 `fileList`。例如，`maxCount` 为 1，而 `defaultFileList` 包含 2 张图片，不会减少 `defaultFileList` 里的图片。上传按钮则会隐藏。
