---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# ImageUpload 图片上传

<code src="../../docs/components/compatibility.tsx" inline="true"></code>


用于将图片上传到服务器，并简略展示上传文件的信息以及提供预览功能。

## 何时使用

需要将本地图片或拍照后上传到服务器时使用

## 代码示例
### 基本使用

<code src='pages/ImageUpload/index'></code>

### 受控模式

<code src='pages/ImageUploadControl/index'></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - | 
| maxCount | 上传图片限制的最大数量，默认不限制上传数量。详见[maxCount](#maxcount) | number | - |
| defaultFileList | 文件列表初始值 | [File](#file)[] | [] |  
| sourceType | 上传选择的来源，可选 `[album]` `[camera]` `['album', 'camera']` | string[] | ['album', 'camera'] | 
| style | 样式| string | - |
| fileList | 文件列表（受控） | [File](#file)[] | - |
| imageMode | 图片缩放模式和裁剪模式，详见[图片mode说明](https://opendocs.alipay.com/mini/component/image#mode) | string | scaleToFill |
| onBeforeUpload | 上传文件之前的钩子，参数为上传的文件列表，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入修改后的 localFileList ） | (localFileList: [localFile](#localfile)[]) => boolean \| Promise<[localFile](#localfile)[]> | - | 
| onChooseImageError | 选择图片失败回调，详见[onChooseImageError](###onChooseImageError) | (err) => void | - | 
| onUpload | 图片上传方法，详见[onUpload](#onupload) | (localFile: [LocalFile](#localfile)) => Promise\<string\> | - | 
| onChange | 已上传的文件列表变化时触发 | (fileList: [File](#file)[]) => void | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | (file: [File](#file)) => boolean \| Promise\<boolean\> | - | 
| onPreview | 点击图片时触发 | (file: [File](#file)[]) => void | - | 


### File
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| url | 图片url | string | - |
| status | 上传状态，可选 `uploading`(上传中) `done`(上传完成) `error`(上传失败) | string | - |
| uid? | 唯一标识符，不设置时会自动生成 | string | - |
| path? | 本地图片路径 | string | - |
| size? | 本地图片大小，有的机型可能没有返回这个属性 | number | - |

### LocalFile
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| path | 本地图片路径 | string | - |
| size? | 本地图片大小，有的机型可能没有返回这个属性 | number | - |

### onUpload
onUpload方法接收LocalFile，在Promise里返回File。这里调用 [my.uploadFile](https://opendocs.alipay.com/mini/api/kmq4hc) 进行上传：
```js
onUpload(localFile) {
  return new Promise((resolve, reject) => {
    my.uploadFile({
      url: 'https://...', // 请替换成有效的服务端 url
      fileType: 'image',
      name: 'userfile', // 这里根据后台服务需求来替换
      filePath: localFile.path, // 这里传入 localFile.path
      formData: { extra: '其他信息' }, // 这里根据后台服务需求来替换
      success: res => {
        // 这里根据后台返回，得到上传成功的图片url
        const { url } = JSON.parse(res.data);
        // 调用resolve传入图片url
        resolve(url);
      },
      fail: err => {
        // 上传错误调用reject
        reject();
      },
    });
  });
}
```

### onChooseImageError
选择图片可能会失败，使用onChooseImageError得到错误，可查看[my.chooseimage错误码](https://opendocs.alipay.com/mini/api/media/image/my.chooseimage#%E9%94%99%E8%AF%AF%E7%A0%81)
```js
onChooseImageError(err) {
  console.log(err);
}
```

### maxCount
1. `maxCount` 意思是最多可以上传图片的数量，不传表示没有限制。但由于小程序选择图片界面一次性有选择图片上限，比如是9个图片，如果`maxCount`比这个上限大，则会需要多上传几次。比如maxCount="{{10}}"，可以上传10个图片，那么用户需要先选择9个图片上传，之后再点上传按钮上传1个图片。
2. `maxCount` 不会限制`defaultFileList`及`fileList`，比如`maxCount`为1，但是传的`defaultFileList`里有2个图片，则不会减少`defaultFileList`里的图片，只是上传按钮会隐藏。