import { Text } from 'tsxml';
import { IconProps } from './props';

export default ({ type, className, style, onTap, catchTap }: IconProps) => (
  <Text
    class={`ant-icon ant-icon-${type} ${className ? className : ''}`}
    style={style}
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
  ></Text>

);
