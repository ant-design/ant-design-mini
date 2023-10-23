import { IListProps } from './props';
import { View, TSXMLProps } from 'tsxml';
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
        <slot name="header" />
      </View>
    )}
    <View class="ant-list-body">
      <slot />
    </View>
    {footer ? (
      <View class="ant-list-footer">{footer}</View>
    ) : (
      <View class="ant-list-footer">
        <slot name="footer" />
      </View>
    )}
  </View>
);
