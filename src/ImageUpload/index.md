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

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| action | 上传图片的服务器地址，只支持https地址 | `string` | - |  
| className | 类名| `string` | - |
| enablePreview | 是否支持预览 | `boolean` | true | 
| enableShowPhotoDownload | 预览图片时是否展示下载按钮，只有在不存在onPreview字段时生效 | `boolean` | false | 
| enableSavePhoto | 照片支持长按下载 | `boolean` | false |  
| fileName | 上传图片的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到图片二进制内容 | `string` | 'image' | 
| formData | 上传时其他额外的 form 数据对象 | `object` | {} |
| height | 自定义容器高度 | `number` \| `string` | 80 |  
| maxCount | 上传图片的最大数量 | `number` | 1 |  |
| mode | 图片缩放模式和裁剪模式 | 'scaleToFill' &verbar; 'aspectFit' &verbar; 'aspectFill' &verbar; 'widthFix' &verbar; 'heightFix' &verbar; 'top' &verbar; 'bottom' &verbar; 'center' &verbar; 'left' &verbar; 'right' &verbar; 'top left' &verbar; 'top right' &verbar; 'bottom left' &verbar; 'bottom right' | 'scaleToFill' |
| sourceType | 视频选择的来源 | ['album'] \| ['camera'] \| ['album', 'camera'] | ['album', 'camera'] | 
| style | 样式| `string` | - |
| value | 已上传的图片列表 | Array\<[File](#file) \| `string`\> \| `string` | [] |  
| width | 自定义容器宽度 | number &verbar; string | 80 | 
| onBeforeUpload | 图片上传前的回调函数，返回 false 可终止图片上传，支持返回 Promise | (v: [File](#file), u: [File](#file)[]) => boolean &verbar; Promise\<boolean\> &verbar; void | - | 
| onChange | 已上传的文件列表变化时触发 | (v: [File](#file)[]) => void | - | 
| onDelete | 删除当前列表中的图片时触发，包括上传成功和上传失败的图片，如果返回 false 表示阻止删除，支持返回 Promise | (v: [File](#file)) => boolean &verbar; Promise\<boolean\> &verbar; void | - | 
| onPreview | 点击图片进行预览时触发，会覆盖默认的预览功能 | (v:[File](#file)[]) => void | - | 
| onUpload | 图片上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效 | (v: [File](#file)) => Promise\<File\> | - | 
| onAfterUpload | 使用action时，图片上传后的回调函数，当上传接口不为默认的{success: true, data: {url: 'xx'}}时使用，返回void则表示上传失败，返回的string代表图片File中的url | (res) => `string` | - | 

#### File 
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| status | 上传状态 | 'pending' \| 'done' \| 'error' | - |
| url | 图片的资源地址 | `string` | - |
