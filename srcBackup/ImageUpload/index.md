---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# ImageUpload 图片上传

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

用于将图片上传到服务器，并简略展示上传文件的信息及提供预览功能。

## 何时使用

需要将本地图片或拍照后上传到服务器时使用。

## 代码示例

### 基本使用

<code src='pages/ImageUpload/index'></code>

### 受控模式

<code src='pages/ImageUploadControl/index'></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| ------ | -------- | ------ | ------- |
| className | 类名 | string | - | 
| maxCount | 上传图片限制的最大数量。详见 [maxCount](#maxcount) | number | - | 
| defaultFileList | 文件列表初始值 | [File](#file)[] | [] | 
| sourceType | 上传选择的来源。可选 `['album']`、`['camera']` 或 `['album', 'camera']` | string[] | ['album', 'camera'] | 
| style | 样式 | string | - | 
| uploadingText | 上传中提示文案 | string | '上传中……' |  
| uploadfailedText | 上传失败提示文案 | string | '上传失败' |  
| fileList | 文件列表（受控） | [File](#file)[] | - | 
| imageMode | 图片缩放模式和裁剪模式。详见 [图片 mode 说明](https://opendocs.alipay.com/mini/component/image#mode) | string | scaleToFill | 
| onBeforeUpload | 上传文件之前的钩子。参数为上传的文件列表，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（resolve 传入修改后的 localFileList） | (localFileList: [localFile](#localfile)[]) => boolean \| Promise<[localFile](#localfile)[]> | - | 
| onChooseImageError | 选择图片失败回调。详见 [onChooseImageError](###onChooseImageError) | (err) => void | - | 
| onUpload | 图片上传方法。详见 [onUpload](#onupload) | (localFile: [LocalFile](#localfile)) => Promise\<string\> | - | 
| onChange | 已上传的文件列表变化时触发 | (fileList: [File](#file)[]) => void | - | 
| onRemove | 点击移除文件时的回调。返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: [File](#file)) => boolean \| Promise\<boolean\> | - | 
| onPreview | 点击图片时触发 | (file: [File](#file)[]) => void | - | 

### File

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------- | ------ | ------- |
| url | 图片 url | string | - | 
| status | 上传状态。可选 `uploading`（上传中）、`done`（上传完成）或 `error`（上传失败） | string | - | 
| uid | 唯一标识符。不设置时会自动生成 | string | - | 
| path | 本地图片路径 | string | - | 
| size | 本地图片大小。有的机型可能没有返回这个属性 | number | - | 

### LocalFile

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| path | 本地图片路径 | string | - | 
| size | 本地图片大小。有的机型可能没有返回这个属性 | number | - | 

### onUpload

`onUpload` 方法接收 `LocalFile`，在 Promise 里返回 `File`。以下是调用 [my.uploadFile](https://opendocs.alipay.com/mini/api/kmq4hc) 进行上传的示例代码：

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
        // 根据后台返回，得到上传成功的图片 url
        const { url } = JSON.parse(res.data);
        resolve(url); // 调用 resolve 传入图片 url
      },
      fail: err => {
        reject(); // 上传错误调用 reject
      },
    });
  });
}
```

### onChooseImageError

选择图片可能会失败，`onChooseImageError` 可获取错误，可以查看 [my.chooseImage 错误码](https://opendocs.alipay.com/mini/api/media/image/my.chooseimage#%E9%94%99%E8%AF%AF%E7%A0%81)。

```js
onChooseImageError(err) {
  console.log(err);
}
```

### maxCount

1. `maxCount` 表示最多可以上传的图片数量，不传表示无限制。由于小程序选择图片界面有一次性选择图片的上限，如果 `maxCount` 大于此上限，则需要多次上传。例如，`maxCount="{{10}}"`，允许上传 10 张图片，用户需先上传 9 张，之后再上传 1 张。
2. `maxCount` 不限制 `defaultFileList` 和 `fileList`。例如，`maxCount` 为 1，而 `defaultFileList` 包含 2 张图片，不会减少 `defaultFileList` 里的图片。上传按钮则会隐藏。
