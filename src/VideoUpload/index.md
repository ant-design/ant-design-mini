---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# VideoUpload 视频上传

用于将视频上传到服务器，并简略展示上传文件的信息以及提供预览功能。

## 何时使用

需要将本地视频或拍摄视频后上传到服务器时使用

## 代码示例
### 基本使用

<code src='pages/VideoUpload/index'></code>

## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| action | 上传视频的服务器地址，只支持https地址 | `string` | - |
| camera | 默认拉起的是前置或者后置摄像头，可选值'back'或'front' | `string`  | `'back'` | 
| className | 类名 | `string` | - | 
| fileName | 上传视频的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到视频二进制内容 | `string` | - |
| formData | 上传时其他额外的 form 数据对象 | `Record<any, string>` | `{}` |
| height | 自定义容器高度，单位px | `number \| string` | `80` | 
| maxCount | 上传视频的最大数量 | `number` | `1` | 
| maxDuration | 拍摄视频最长拍摄时间，单位秒 | `number` | `60` | 
| sourceType | 视频选择的来源 | `['album'] \| ['camera'] \| ['album', 'camera']` | `['album', 'camera']` | 
| style | 样式 | `string` | - | 
| value | 已上传的图片列表 | `Array<File \| string> \| string` | `[]` | 
| width | 自定义容器宽度，单位 px | `number \| string` |  `80` | 


## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onBeforeUpload | 视频上传前的回调函数，返回 false 可终止视频上传，支持返回 Promise | `(v: File, u: File[]) => boolean \| Promise<boolean> \| void` |
| onChange | 已上传的文件列表变化时触发 | `(v: File[]) => void` |
| onDelete | 删除当前列表中的视频时触发，包括上传成功和上传失败的视频，如果返回 false 表示阻止删除，支持返回 Promise | `(v: File) => boolean \| Promise<boolean> \| void` |
| onUpload | 视频上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效 | `(v: File) => Promise<File>` |
| onAfterUpload | 使用action时，视频上传后的回调函数，当上传接口不为默认的{success: true, data: {url: 'xx'}}时使用，返回void则表示上传失败，返回的string代表的是视频File里的url | `(res) => string` |

## File

| 字段名 | 说明 | 类型 |
| -----|-----|----- |
| url | 视频的资源地址 | `string` |
| status | 上传状态 | `'pending' \| 'done' \| 'error'` |