import { IBaseProps } from '../_util/base';
/**
 * @description 选人组件。
 */

/**
 * 用户来源
 *
 * - 推荐联系人
 * - 全部联系人
 * - 搜索联系人
 *  */
type TPersonSource = 'recommend' | 'all' | 'search';

/** onSelect 回调入参 */
export interface IOnSelectParams {
  /** 选中的用户信息 */
  userInfo: IContactInfo;

  /** 用户来源 */
  personSource: TPersonSource;
}

/** 获取推荐联系人和全部联系人接口返回数据 */
export interface IGetRecommendContactsListInfo {
  success: boolean;

  data: {
    /** 当前登录人uid */
    currentUserId: string;

    /** 推荐联系人 */
    recommendUserInfos: IContactInfo[];

    /** 全部联系人 */
    contacts: IContactInfo[];

    /** 模糊搜索 */
    fuzzyConsult?: {
      /** 是否开启 */
      enable: boolean;

      /** 搜索框占位符 */
      placeholder: string;
    };

    /** 当前请求会话ID */
    sessionId?: string;
  };
}

/** 联系人信息 */
export interface IContactInfo {
  /** 用户 uid */
  userId: string;

  /** 展示名称 */
  displayName: string;

  /** 搜索时 - 高亮展示匹配内容（前端生成） */
  nodes: Array<{
    text: string;
    className: string;
  }>;

  /** 脱敏登录id */
  loginId: string;

  /** 用户头像 */
  avatar: string;

  /** 联系人标签 */
  tag?: string;

  /** 推荐联系人标签（转为 tag 对外透出） */
  recommendTypeDesc?: string;

  /** 推荐联系人特有，取消推荐使用 */
  archiveId?: string;
}

/** 组件展示联系人列表 */
export interface IContactUserInfo {
  name: string;
  value: IContactInfo[];
  className?: string;
  personSource: TPersonSource;
}

export interface ISelectContactProps extends IBaseProps {
  /** 自定义 class */
  className: string;

  /** 组件高度 */
  height: string;

  /** 选人组件初始化接口额外扩展参数 */
  extParams?: Record<string, any>;

  /** 推荐人列表 */
  recommendContactsList?: IContactUserInfo;

  /** 全部联系人列表 */
  allContactsList?: IContactInfo[];

  /** 选中联系人 */
  onSelect: (_params: IOnSelectParams) => void;

  /** 获取数据接口报错 */
  onError: (_e: any) => void;

  /** 推荐列表为空时 */
  onContactListEmpty: () => void;

  /** 删除指定推荐联系人失败 */
  onDeleteRecommendUserError: (_e: any) => void;

  /** 删除好友成功 */
  onDeleteRecommendUser: (_e: IContactInfo) => void;

  /** 搜索用户 */
  onSearchUser: (keyword: string) => void;
}

export const SelectContactDefaultProps: Partial<ISelectContactProps> = {
  className: '',
  height: '100%',
  /** 其他扩展参数 */
  extParams: {},
  onSelect: (e) => {},
  onError: (e) => {},
  onContactListEmpty: () => {},
  onDeleteRecommendUserError: (e) => {},
  onDeleteRecommendUser: (keyword) => {},
};
