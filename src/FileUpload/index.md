---
nav:
  path: /components
group:
  title: 信息输入
toc: false
---

# FileUpload 文件上传

用于将文件上传到服务器，并简略展示上传文件的信息以及提供预览功能。

## 何时使用

需要将本地文件上传到服务器时使用

## 代码示例
### 基本使用

<code src='../../demo/pages/FileUpload'></code>


## 属性 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| action | string | - | - | 上传图片的服务器地址，只支持https地址 |
| defaultValue | File[] | - | [] | 默认已上传的文件列表 |
| fileName | string | - | - | 上传的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容 |
| formData | any | - | {} | 上传时其他额外的 form 数据对象。 |
| maxCount | number | - | 1 | 上传文件的最大数量 |
| className | string | - | - | 类名 |

## 事件 

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onBeforeUpload | 文件上传前的回调函数，返回 false 可终止文件上传，支持返回 Promise | (v: File, u: File[]) => boolean &verbar; Promise\<boolean\> &verbar; void |
| onChange | 已上传的文件列表变化时触发 | (v: File[]) => void |
| onDelete | 删除当前列表中的文件时触发，包括上传成功和上传失败的文件，如果返回 false 表示阻止删除，支持返回 Promise | (v: File) => boolean &verbar; Promise\<boolean\> &verbar; void |
| onPreviewFail | 预览不支持的文件格式时触发（目前只支持预览pdf） | (v: string) => void |
| onUpload | 文件上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效 | (v: File) => Promise\<File\> |

## File

| 字段名 | 说明 | 类型 |
| -----|-----|----- |
| key | 唯一标识 | string |
| url | 文件的资源地址 | string |
| localPath | 上传文件的本地地址 | string |
| status | 上传状态 | 'pending' | 'done' | 'error' |
| size | 当前文件的大小 | number |
| description | 当前文件标签描述（md5） | string |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-file-upload | 整体样式 |
| amd-file-upload-button | 点击上传文件按钮样式 |
| amd-file-upload-list-wrapper | 已上传文件列表整体样式 |
| amd-file-upload-brief-pending | 上传中进度条外层样式 |
| amd-file-upload-error-status | 上传失败文件错误样式 |
| amd-file-upload-close-icon | 已上传视频右上角关闭按钮样式 |


