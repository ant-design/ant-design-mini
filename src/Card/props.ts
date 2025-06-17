export interface ICardProps {
  className?: string; // 容器的 class
  config?: ICardConfig; // 卡片的配置项
  title?: string; // 卡片标题
  operateText?: string; // 默认头部右侧操作按钮文本
  needFold?: boolean; // 卡片是否可以折叠，如果为 true，还需要不传 operateText 才可以出折叠按钮，或者通过配置让折叠操作区为整个 titlebar
  foldStatus?: boolean; // true展开 false收起态。不传就是非受控组件，传了就是受控组件
  headSticky?: boolean; // 标题是否需要吸顶
  stickyTransparentTitle?: boolean; // 吸顶是否在透明头页面，是的话会自动算透明头高度
  stickyTop?: string; // 透传给sticky组件用于决定title区域的吸顶位置
  divider?: boolean; // 是否显示分割线
  onOperateClick?: (e) => void; // 默认头部右侧操作按钮点击回调
  onFoldChange?: () => void; // 展开收起态发生变化时的回调
  onTitleSticky?: (status) => void; // title区域是否吸顶变化时的回调
}

export interface ICardConfig {
  foldTapArea?: 'btn' | 'header'; // 折叠操作点击范围
}

export const CardDefaultProps: ICardProps = {
  className: '',
  config: {
    foldTapArea: 'btn',
  },
  title: '',
  operateText:'',
  needFold: false,
  foldStatus: false,
  headSticky: false,
  stickyTransparentTitle: false,
  stickyTop: '',
  divider: false,
  onOperateClick: () => {},
  onFoldChange: () => {},
  onTitleSticky: (status: boolean) => status,
};
