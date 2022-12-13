import { IBaseProps } from '../_base';

export type Status = 'uploading' | 'done' | 'error'
export interface File {

  /**
   *  @description 唯一标识符，不设置时会自动生成
   */
  uid?: string;

  /**
   * @description 图片的资源地址
   */
  url: string;

  /**
   * @description 上传状态
   */
  status?: Status;
}

export interface LocalFile {
  path: string;
  size?: number;
}

export interface IUploaderProps extends IBaseProps {
  /**
   * @description 默认已经上传的文件列表
   * @default []
   */
  defaultFileList?: File[];

  /**
   * @description 已经上传的文件列表（受控）
   */
  fileList?: File[];

  /**
   * @description 上传图片的最大数量
   */
  maxCount?: number;

  /**
   * @description 图片缩放模式和裁剪模式
   * @default 'scaleToFill'
   */
  imageMode: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'

  /**
   * @description 视频选择的来源
   * @default ['album', 'camera']
   */
  sourceType?: ['album'] | ['camera'] | ['album', 'camera'];

  /**
   * @description 图片上传前的回调函数，返回 false 可终止图片上传，支持返回 Promise
   */
  onBeforeUpload?: (localFileList: LocalFile[]) => boolean | Promise<LocalFile[]>;

  /**
   * @description 选择图片失败回调
   */
  onChooseImageError: (err: any) => void;

  /**
   * @description 已上传的文件列表变化时触发
   */
  onChange?: (v: Array<File>) => void;

  /**
   * @description 删除当前列表中的图片时触发，包括上传成功和上传失败的图片，如果返回 false 表示阻止删除，支持返回 Promise
   */
  onRemove?: (v: File) => boolean | Promise<boolean>;

  /**
   * @description 点击图片进行预览时触发，会覆盖默认的预览功能
   */
  onPreview?: (v: Array<File>) => void;

  /** 
   * @description 自定义上传方式，只在不存在action字段时生效
   */
  onUpload?: (localFile: LocalFile) => Promise<string>;
}

export declare const UploaderDefaultProps: Partial<IUploaderProps>;
