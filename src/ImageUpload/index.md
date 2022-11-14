---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# ImageUpload 图片上传

用于将图片上传到服务器，并简略展示上传文件的信息以及提供预览功能。

## 何时使用

需要将本地图片或拍照后上传到服务器时使用

## 代码示例
### 基本使用

<code src='../../demo/pages/ImageUpload'></code>

## 属性 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | Array\<File \| string\> \| string | 否 | [] | 已上传的图片列表 |
| action | string | 否 | - | 上传图片的服务器地址，只支持https地址 |
| enableShowPhotoDownload | boolean | 否 | false | 预览图片时是否展示下载按钮，只有在不存在onPreview字段时生效 |
| enableSavePhoto | boolean | 否 | false | 照片支持长按下载 |
| fileName | string | 否 | 'image' | 上传图片的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到图片二进制内容 |
| formData | any | 否 | {} | 上传时其他额外的 form 数据对象。 |
| height | number &verbar; string | 否 | 80 | 自定义容器高度 |
| maxCount | number | 否 | 1 | 上传图片的最大数量 |
| mode | 'scaleToFill' &verbar; 'aspectFit' &verbar; 'aspectFill' &verbar; 'widthFix' &verbar; 'heightFix' &verbar; 'top' &verbar; 'bottom' &verbar; 'center' &verbar; 'left' &verbar; 'right' &verbar; 'top left' &verbar; 'top right' &verbar; 'bottom left' &verbar; 'bottom right' | 否 | 'scaleToFill' | 图片缩放模式和裁剪模式 |
| preview | boolean | 否 | true | 是否支持预览 |
| sourceType | ['album'] &verbar; ['camera'] &verbar; ['album', 'camera'] | 否 | ['album', 'camera'] | 视频选择的来源 |
| width | number &verbar; string | 否 | 80 | 自定义容器宽度 |
| className | string | 否 | - | 类名 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onBeforeUpload | 图片上传前的回调函数，返回 false 可终止图片上传，支持返回 Promise | (v: File, u: File[]) => boolean &verbar; Promise\<boolean\> &verbar; void |
| onChange | 已上传的文件列表变化时触发 | (v: File[]) => void |
| onDelete | 删除当前列表中的图片时触发，包括上传成功和上传失败的图片，如果返回 false 表示阻止删除，支持返回 Promise | (v: File) => boolean &verbar; Promise\<boolean\> &verbar; void |
| onPreview | 点击图片进行预览时触发，会覆盖默认的预览功能 | (v:File[]) => void |
| onUpload | 图片上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效 | (v: File) => Promise\<File\> |
| onAfterUpload | 使用action时，图片上传后的回调函数，当上传接口不为默认的{success: true, data: {url: 'xx'}}时使用，返回void则表示上传失败，返回的string代表图片File中的url | (res) => string |

## File

| 字段名 | 说明 | 类型 |
| -----|-----|----- |
| url | 图片的资源地址 | string |
| status | 上传状态 | 'pending' \| 'done' \| 'error' |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-image-upload | 整体样式 |
| amd-image-upload-show | 已上传图片整体展示区域样式 |
| amd-image-upload-close | 已上传图片右上角关闭按钮样式 |
| amd-image-upload-loading | 上传中加载中样式 |
| amd-image-upload-loading-icon | 上传中加载中图标 |
| amd-image-upload-image | 已上传图片区域样式 |
| amd-image-upload-add-image-wrapper | 点击上传图片区域整体样式 |