---
nav:
  path: /components
group:
  title: 其他
toc: false
---

# VideoUpload

<code src='../../demo/pages/VideoUpload'></code>

## API 


### 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| action | string | - | - | 上传视频的服务器地址，只支持https地址 |
| camera | string | - | 'back' | 默认拉起的是前置或者后置摄像头，可选值'back'或'front' |
| defaultValue | Array<File> | - | [] | 默认已上传的视频列表 |
| demoVideo | string | - | [] | 上传视频时的示例 |
| filename | string | - | - | 上传视频的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到视频二进制内容 |
| formData | any | - | {} | 上传时其他额外的 form 数据对象。 |
| height | number &verbar; string | - | 80 | 自定义容器高度 |
| id | string | - | - | video播放器标识 |
| maxCount | number | - | 1 | 上传视频的最大数量 |
| maxDuration | number | - | 60 | 拍摄视频最长拍摄时间，单位秒。 |
| sourceType | ['album'] &verbar; ['camera'] &verbar; ['album', 'camera'] | - | ['album', 'camera'] | 视频选择的来源 |
| width | number &verbar; string | - | 80 | 自定义容器宽度 |
| className | string | - | - | 类名 |

### 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onBeforeUpload | 视频上传前的回调函数，返回 false 可终止视频上传，支持返回 Promise | (v: File, u: Array<File>) => boolean &verbar; Promise<boolean> &verbar; void |
| onChange | 已上传的文件列表变化时触发 | (v: Array<File>) => void |
| onDelete | 删除当前列表中的视频时触发，包括上传成功和上传失败的视频，如果返回 false 表示阻止删除，支持返回 Promise | (v: File) => boolean &verbar; Promise<boolean> &verbar; void |
| onUpload | 视频上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效 | (v: File) => Promise<File> |

### CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
### 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-video-upload | 整体样式 |
| amd-video-upload-show | 已上传视频整体展示区域样式 |
| amd-video-upload-demo-video | 示例视频展示区域样式 |
| amd-video-upload-demo-video-tip | 示例视频左上角标记样式 |
| amd-video-upload-click-area | 点击上传视频区域样式 |
| amd-video-upload-play-icon | 已上传视频播放按钮样式 |
| amd-video-upload-video | 已上传视频区域样式 |
| amd-video-upload-close | 已上传视频右上角关闭按钮样式 |
| amd-video-upload-loading | 上传中加载中样式 |
| amd-video-upload-loading-icon | 上传中加载中图标 |
| amd-video-upload-add-video-wrapper | 点击上传视频区域整体样式 |


