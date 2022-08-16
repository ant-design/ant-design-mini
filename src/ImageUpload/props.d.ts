import { IBaseProps } from '../_base';

export interface File {
  /**
   * @description 唯一标识
   */
  key: string;

  /**
   * @description 图片的资源地址
   */
  url: string;

  /**
   * @description 图片的本地地址
   */
  localPath?: string;

  /**
   * @description 上传状态
   */
  status?: 'pending' | 'done' | 'error';
}

export interface IUploaderData {
  /**
   * @description 图片数据
   */
  fileList: Array<File>
}

export interface IUploaderProps extends IBaseProps {
  /**
   * @description 上传图片的服务器地址，只支持https地址
   */
  action?: string;

  /**
   * @description 已上传的图片列表
   * @default []
   */
  value?: Array<File | string> | string;

  /**
   * @description 预览图片时是否暂时下载按钮，只有在不存在onPreview字段时生效
   * @default false
   */
  enableShowPhotoDownload: boolean;

  /**
   * @description 照片支持长按下载
   * @default false
   */
  enableSavePhoto: boolean;

  /**
   * @description 上传图片的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到图片二进制内容
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
   * @description 上传图片的最大数量
   * @default 1
   */
  maxCount?: number;

  /**
   * @description 图片缩放模式和裁剪模式
   * @default 'scaleToFill'
   */
  mode: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'

  /**
   * @description 是否支持预览
   * @default true
   */
  preview?: boolean;

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
   * @description 使用action时，图片上传后的回调函数，当上传接口不为默认的{success: true, data: {url: 'xx'}}时使用，返回void则表示上传失败
   */
  onAfterUpload?: (res) => string | void | Promise<string | void>;

  /**
   * @description 图片上传前的回调函数，返回 false 可终止图片上传，支持返回 Promise
   */
  onBeforeUpload?: (v: File, u: Array<File>) => boolean | Promise<boolean> | void;

  /**
   * @description 已上传的文件列表变化时触发
   */
  onChange?: (v: Array<File>) => void;

  /**
   * @description 删除当前列表中的图片时触发，包括上传成功和上传失败的图片，如果返回 false 表示阻止删除，支持返回 Promise
   */
  onDelete?: (v: File) => boolean | Promise<boolean> | void;

  /**
   * @description 点击图片进行预览时触发，会覆盖默认的预览功能
   */
  onPreview?: (v: Array<File>) => void;

  /** 
   * @description 图片上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效
   */
  onUpload?: (v: File) => Promise<File>;
}

export declare const UploaderDefaultProps: Partial<IUploaderProps>;