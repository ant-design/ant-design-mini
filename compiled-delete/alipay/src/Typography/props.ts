import { IBaseProps, IconType } from '../_util/base';

export interface ITypographyProps extends IBaseProps {
  text?: string;
  iconPosition?: 'left' | 'right';
  icon?: IconType | string;
  activeClassName?: string;
  disabled?: boolean;
  selectable?: boolean;
  fontWeight?: 'normal' | 'medium' | 'bold' | '';
  lineThrough?: boolean;
  underline?: boolean;
  ellipsisRow?: number;
  onTap?: (event: any) => void;
  catchTap?: (event: any) => void;
  onDisabledTap?: (event: any) => void;
}

export const TypographyDefaultProps: ITypographyProps = {
  text: '',
  iconPosition: 'right',
  icon: '',
  className: '',
  activeClassName: '',
  style: '',
  disabled: false,
  selectable: false,
  fontWeight: 'normal',
  lineThrough: false,
  underline: false,
  ellipsisRow: null,
  onTap: null,
  catchTap: null,
  onDisabledTap: null,
};
