import { View, TSXMLProps, Slot, Component } from 'tsxml';
import { IChecklistItemProps } from './props';

export default ({ item, checked }: TSXMLProps<IChecklistItemProps>) => (
  <Component>
    <View
      class="ant-checklist-item"
      onTap={item.disabled || item.readonly ? '' : 'onChecklistItemClick'}
      hover-class={
        item.disabled || item.readonly ? '' : 'ant-checklist-item-hover'
      }
      hover-start-time={20}
      hover-stay-time={40}
    >
      <View
        class={`ant-checklist-item-content ${
          item.disabled ? 'ant-checklist-item-content-disabled' : ''
        }`}
      >
        <View class="ant-checklist-item-content-box">
          <Slot name="content" item={item} />
        </View>
        {checked && (
          <View class="ant-checklist-item-content-icon">
            <Slot name="icon" />
          </View>
        )}
      </View>
      <View class="ant-checklist-item-line"></View>
    </View>
  </Component>
);
