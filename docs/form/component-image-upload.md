---
order: 6
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 图片上传 imageUpload

上传组件 imageUpload 直接使用的 `antd-mini` 的 `ImageUpload` 组件，支持以下属性透传


## 属性

| 属性                 |    类型      | 是否必须      | 默认值                  |  功能描述                            |
| :--------           | :--------    | :---         | :----                 |  :---                               |
| uploadingText       | string       |  否          | --                    |  上传中提示案                         |
| uploadfailedText    | string       |  否          |  --                   |  上传失败提示文案                      |
| maxCount            | number       |  否          |  --                   |  上传图片限制的最大量                   |
| className           | string       |  否          |  --                   |  类名                                |
| sourceType          | string[]     |  否          | `['album', 'camera']` |  上传选择的来源                        |
| style               | string       |  否          |  --                   |  样式                                |
| imageMode           | string       |  否          |  `scaleToFill`        |  图片缩放模式和裁剪模式                 |


## 方法

| 属性                 |    类型                                     |  功能描述                                           |
| :--------           | :--------                                   |  :---                                              |
| onBeforeUpload      | (list: localFile[]) => Promise<localFile[]> | 上传文件之前的钩子。参数为上传的文件列表，若返回 false 则停止上传 |
| onUpload            | (localFile: LocalFile) => Promise<string>   |  图片上传方法                                        |
| onRemove            | (file: File) => Promise<boolean>            |  点击移除文件时的回调。返回值为 false 时不移除            |
| onChooseImageError  | (err) => void                               |  选择图片失败回调                                     |
| onPreview    | (file: File[]) => void                             |  点击移除文件时的回调。返回值为 false 时不移除            |


## schema 示例

```js
const formItemSchema = {
  title: '上传图片',
  type: 'array',
  widget: 'image-upload',
  value: [
    {
      url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
    }],
  props: {
    maxCount: 2,
    uploadText: '上传图片',
    onUpload: (file) => onUpload(file),
    onPreview: (file) => {
      my.previewImage({
        urls: [file.url]
      });
    }
  }
}
```

