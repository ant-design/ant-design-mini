import { IBaseProps } from '../_base';

export interface File {
  /**
   * @description 唯一标识
   */
  key: string;

  /**
   * @description 文件的资源地址
   */
  url: string;

  /**
   * @description 上传状态
   */
  status?: 'pending' | 'done' | 'error';

  /**
   * @description 文件在本地的缓存地址
   */
  tempFilePath: string;

  /**
   * @description 文件标签描述（md5）
   */
  description: string;

  /**
   * @description 附带一些额外信息，可以业务中自己随意定义
   */
  extra?: any;

  /**
   * @description 
   */
  size: number
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
   * @description 默认已上传的文件列表
   * @default []
   */
  defaultValue?: Array<File>;

  /**
   * @description 上传的文件名，即对应的 key，开发者在服务器端通过这个 key 可以获取到文件二进制内容
   */
  fileName?: string;

  /**
   * @description 上传时其他额外的 form 数据对象。
   * @default {}
   */
  formData?: any;

  /**
   * @description 文件上传前的回调函数，返回 false 可终止文件上传，支持返回 Promise
   */
  onBeforeUpload?: (v: File, u: Array<File>) => boolean | Promise<boolean> | void;

  /**
   * @description 已上传的文件列表变化时触发
   */
  onChange?: (v: Array<File>) => {};

  /**
   * @description 删除当前列表中的文件时触发，包括上传成功和上传失败的文件，如果返回 false 表示阻止删除，支持返回 Promise
   */
  onDelete?: (v: File) => boolean | Promise<boolean> | void;

  /**
   * @description 预览不支持的文件格式时触发（目前只支持预览pdf）
   */
  onPreviewFail?: (v: string) => void;

  /** 
   * @description 文件上传方法，当不存在https服务器时，支持自定义上传方式，只在不存在action字段时生效
   */
  onUpload?: (v: File) => Promise<File>;
}

export declare const UploaderDefaultProps: Partial<IUploaderProps>;