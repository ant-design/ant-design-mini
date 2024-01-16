import { View, TSXMLProps, InternalData, Slot, Image, Component } from 'tsxml';
import { IChecklistProps, ChecklistItem } from './props';
import AntChecklistItem from './ChecklistItem/index.axml';
import AntIcon from '../Icon/index.axml';
import utils from './index.sjs';

export default (
  { className, style, multiple, options }: TSXMLProps<IChecklistProps>,
  { mixin }: InternalData
) => (
  <Component>
    <View class={`ant-checklist ${className || ''}`} style={style || ''}>
      <View class="ant-checklist-body">
        {options.map((item: ChecklistItem) => (
          <AntChecklistItem
            checked={utils.getChecked(item.value, mixin.value, multiple)}
            item={item}
            onChange="onChange"
          >
            <View slot="content" class="ant-checklist-item-content-box-nut">
              {/* #if ALIPAY */}
              <Slot name="content" item={item}>
                {/* #endif */}
                {item.image && (
                  <Image class="ant-checklist-item-image" src={item.image} />
                )}
                <View
                  class={`ant-checklist-item-text ${
                    item.image ? '' : 'ant-checklist-item-text-no-image'
                  }`}
                >
                  <View
                    class={`ant-checklist-item-text-title ${
                      item.disabled ? 'ant-checklist-item-text-disabled' : ''
                    }`}
                  >
                    {item.title}
                  </View>
                  {item.description && (
                    <View
                      class={`ant-checklist-item-text-description ${
                        item.disabled ? 'ant-checklist-item-text-disabled' : ''
                      }`}
                    >
                      {item.description}
                    </View>
                  )}
                </View>
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
            <View slot="icon">
              {/* #if ALIPAY */}
              <Slot name="icon">
                {/* #endif */}
                <AntIcon
                  type="CheckOutline"
                  className="ant-checklist-item-check-icon"
                />
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </AntChecklistItem>
        ))}
      </View>
    </View>
  </Component>
);
