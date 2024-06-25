export interface Props {
  text?: string;
  type?: 'copy' | 'delete' | 'edit' | 'link';
  iconPosition?: 'left' | 'right';
  ellipsisRow?: number;
  icon?: string;
  className?: string;
  disabled?: boolean;
  lineThrough?: boolean;
  onTap?: (e: any, props: Props) => void;
  catchTap?: (e: any, props: Props) => void;
}

export const LinkDefaultProps: Props = {
  text: '链接文案',
  type: null,
  iconPosition: 'right',
  icon: 'RightOutline',
  className: '',
};
