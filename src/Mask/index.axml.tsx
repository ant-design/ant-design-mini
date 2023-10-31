import { TSXMLProps, View } from 'tsxml';
import { IMaskProps } from './props';

export default ({ className, style, show }: TSXMLProps<IMaskProps>) => (
  <View
    class={`ant-mask ${className || ''}`}
    style={`${show ? '' : 'display: none;'} ${style || ''}`}
    onTap="onMaskClick"
  />
);
