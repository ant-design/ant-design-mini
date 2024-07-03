import { View, TSXMLProps, Slot } from 'tsxml';
import { IActionSheetProps } from './props';
import helper from './index.sjs';
import AntPopup from '../Popup/index.axml';

export default ({
  visible,
  title,
  actions,
  className,
  cancelText,
  style,
}: TSXMLProps<IActionSheetProps>) => (
  <AntPopup
    className="ant-actionsheet-popup"
    visible={visible}
    position="bottom"
    onClose="onClose"
  >
    <View
      style={style}
      class={`ant-actionsheet ${className ? className : ''} ${
        helper.isIconMode(actions) ? 'ant-actionsheet-icon' : ''
      }`}
    >
      {/* #if ALIPAY */}
      <Slot name="title">
        {/* #endif */}
        {title && (
          <View class="ant-actionsheet-title-wrap">
            <View class="ant-actionsheet-title-content">{title}</View>
          </View>
        )}
        {/* #if ALIPAY */}
      </Slot>
      {/* #endif */}

      <View class="ant-actionsheet-list">
        {actions.map((item, index) => (
          <View
            key={index}
            class={`ant-actionsheet-list-item ${
              item.disabled ? 'ant-actionsheet-list-item-disabled' : ''
            }`}
            hover-class={
              item.disabled ? '' : 'ant-actionsheet-list-item-active'
            }
            onTap="onAction"
            data-index={index}
            data-item={item}
          >
            {helper.isIconMode(actions) && (
              <View
                class="ant-actionsheet-list-item-icon"
                style={`background-image: url('${item.icon}')`}
              ></View>
            )}

            <View class="ant-actionsheet-list-item-content">
              <View
                class={`ant-actionsheet-list-item-title ${
                  item.danger ? 'ant-actionsheet-list-item-title-danger' : ''
                }`}
              >
                {item.text}
              </View>
              {item.description && (
                <View class="ant-actionsheet-list-item-description">
                  {item.description}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
      <View class="ant-actionsheet-cancel-gap" />
      {/* #if ALIPAY */}
      <Slot name="cancelText">
        {/* #endif */}

        <View class="ant-actionsheet-cancel" onTap="onClose">
          {cancelText}
        </View>
        {/* #if ALIPAY */}
      </Slot>
      {/* #endif */}
    </View>
  </AntPopup>
);
