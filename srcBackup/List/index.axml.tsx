import { IListProps } from './props';
import { View, TSXMLProps, Slot } from 'tsxml';
import './index.css';

export default ({
  className,
  radius,
  header,
  footer,
}: TSXMLProps<IListProps>) => (
  <View
    class={`ant-list ${className ? className : ''} ${
      radius ? 'ant-list-radius' : ''
    }`}
  >
    {header ? (
      <View class="ant-list-header">{header}</View>
    ) : (
      <View class="ant-list-header">
        <Slot name="header" />
      </View>
    )}
    <View class="ant-list-body">
      <Slot />
    </View>
    {footer ? (
      <View class="ant-list-footer">{footer}</View>
    ) : (
      <View class="ant-list-footer">
        <Slot name="footer" />
      </View>
    )}
  </View>
);
