export interface Props {
  text?: string;
  type?: 'copy' | 'delete' | 'edit' | 'link' | 'location' | 'share';
  iconPosition?: 'left' | 'right';
  icon?: string;
  className?: string;
  activeClassName?: string;
  style?: string;
  disabled?: boolean;
  fontWeight?: 'normal' | 'medium' | 'bold' | '';
  lineThrough?: boolean;
  underline?: boolean;
  ellipsisRow?: number;
  onTap?: (event: any) => void;
  catchTap?: (event: any) => void;
  onDisabledTap?: (event: any) => void;
}

export const TypographyDefaultProps: Props = {
  text: '',
  type: null,
  iconPosition: 'right',
  icon: null,
  className: '',
  activeClassName: '',
  style: '',
  disabled: false,
  fontWeight: 'normal',
  lineThrough: false,
  underline: false,
  ellipsisRow: null,
};
