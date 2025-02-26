export interface SchemaBase {
  /**
   * @description 用于在元素下展示更多说明信息，extra 可以是 html string，也可以是纯文案，会展示在元素下面一行紧贴
   */
  extra: string | { widget: string };

  /**
   * @description Label 与 widget 的展示关系，row 表示并排展示，column 表示两排展示，写在 schema 顶层时代表表单整体的排列方式
   * @default 'row'
   */
  displayType: 'row' | 'column';

  /**
   * @description 组件是否隐藏状态
   * @default true
   */
  visible: boolean;

  /**
   * @description 分组是否圆角
   * @default false
   */
  radius: boolean;


  /**
   * @description 用于对 schema 进行排序，值越小越靠前
   */
  order: string | number;

  /**
   * @description 当基础字段不够描述组件的展示时，使用 props 字段作为扩展
   */
  props: Record<string, any>;

  /**
   * @description 用于描述细致的、定制化的校验，支持 async-validator 所有的 api
   */
  rules: STORE.IRule | STORE.IRule[];

  /**
   * @description 表单项的key，优先级比schema key高
   */
  path: string;

  /**
   * @description 一个 item 的 label
   */
  title: string;

  /**
   * @description 表单项是否置灰
   */
  disabled: boolean;

  /**
   * @description 是否必填
   */
  required: boolean;

  /**
   * @description 表单项类型 input、picker等
   */
  widget: string;


  /**
   * @description schema类型
   * @default 'object'
   */
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'range' | 'html';
}

export type Schema = Partial<SchemaBase>;

export as namespace ISchema;
