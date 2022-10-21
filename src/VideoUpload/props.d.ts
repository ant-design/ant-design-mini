import { IBaseProps } from '../_base';

export interface File {
  /**
   * @description 唯一标识
   */
  key: string;

  /**
   * @description 视频的资源地址
   */
  url: string;

  /**
   * @description 视频的本地地址
   */
  localPath?: string;

  /**
   * @description 上传状态
   */
  status?: 'pending' | 'done' | 'error';
}

export interface IVideoUploadData {
  /**
   * @description 视频数据
   */
  fileList: Array<File>
}

export interface IVideoUploadProps extends IBaseProps {
  /**
   * @description 默认已上传的视频列表
   * @default []
   */
  value?: Array<File | string> | string;

  /**
   * @description 上传视频的服务器地址，只支持https地址
   */
  action?: string;

  /**
   * @description 默认拉起的是前置或者后置摄像头，可选值'back'或'front'
   * @default 'back'
   */
  camera: string;

  /**
   * @description 上传视频的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到视频二进制内容
   */
  fileName?: string;

  /**
   * @description 上传时其他额外的 form 数据对象。
   * @default {}
   */
  formData?: any;

  /**
   * @description 自定义容器高度
   * @default 80
   */
  height?: number | string;

  /**
   * @description 上传视频的最大数量
   * @default 1
   */
  maxCount?: number;

  /**
   * @description 拍摄视频最长拍摄时间，单位秒。
   * @default 60
   */
  maxDuration?: number;

  /**
   * @description 视频选择的来源
   * @default ['album', 'camera']
   */
  sourceType?: ['album'] | ['camera'] | ['album', 'camera'];

  /**
   * @description 自定义容器宽度
   * @default 80
   */
  width?: number | string;

  /**
   * @description 使用action时，视频上传后的回调函数，当上传接口不为默认的{success: true, data: {url: 'xx'}}时使用，返回void则表示上传失败
   */
  onAfterUpload?: (res) => string | void | Promise<string | void>;

  /**
   * @description 视频上传前的回调函数，返回 false 可终止视频上传，支持返回 Promise
   */
  onBeforeUpload?: (v: File, u: Array<File>) => boolean | Promise<boolean> | void;

  /**
   * @description 已上传的文件列表变化时触发
   */
  onChange?: (v: Array<File>) => void;

  /**
   * @description 删除当前列表中的视频时触发，包括上传成功和上传失败的视频，如果返回 false 表示阻止删除，支持返回 Promise
   */
  onDelete?: (v: File) => boolean | Promise<boolean> | void;

  /** 
   * @description 视频上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效
   */
  onUpload?: (v: File) => Promise<File>;
}

export declare const VideoUploadDefaultProps: Partial<IVideoUploadProps>;