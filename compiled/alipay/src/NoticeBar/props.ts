import { IBaseProps } from '../_util/base';

/**
 * @description 通告栏，
 * 当应用有重要公告或者由于用户的刷新操作产生提示反馈时可以使用通告栏系统。
 * 通告栏不会对用户浏览当前页面内容产生影响，但又能明显的引起用户的注意。公告内容不超过一行。
 */

export interface INoticeBarProps extends IBaseProps {
  /**
   * @description 消息的展示
   */
  icon?: string;
  /**
   * @description 提示类型
   * default 橙色，error 红色，primary 蓝色，info 灰色
   * @default "default"
   */
  type?: 'default' | 'error' | 'primary' | 'info';
  /**
   * @description 通告类型，link 表示连接，整行可点；closeable 表示点击 x 可以关闭；不填时表示你右侧没有图标
   */
  mode?: 'link' | 'closeable';
  /**
   * @description 是否开启滚动动画
   * @default false
   */

  enableMarquee: boolean;
  /**
   * @description 是否循环滚动，enableMarquee 为 true 时有效
   * @default false
   */

  loop: boolean;

  /**
   * @description 点击图标（箭头或者叉，由mode属性决定）的事件回调
   */
  onTap: () => void;
  /**
   * @description 行动点点击回调
   * @param 当前点击的行动点序号
   */

  onActionTap: (index: number) => void;
}

export const NoticeBarDefaultProps: Partial<INoticeBarProps> = {
  enableMarquee: false,
  loop: false,
  type: 'default',
};

export const NoticeBarFunctionalProps: Partial<INoticeBarProps> = {
  icon: '',
  type: 'default',
  mode: null,
  enableMarquee: false,
  loop: false,
};
