export interface Props {
  text?: string;
  type?: 'copy' | 'delete' | 'edit' | 'link';
  iconPosition?: 'left' | 'right';
  ellipsisRow?: number;
  icon?: string;
  className?: string;
  disabled?: boolean;
  lineThrough?: boolean;
  style?: string;
  onTap?: (e: any, props: Props) => void;
  catchTap?: (e: any, props: Props) => void;
}

export const TypographyDefaultProps: Props = {
  text: '',
  type: null,
  iconPosition: 'right',
  icon: null,
  className: '',
  style: '',
};
