import {
  View,
  Slot,
  Page,
  InternalData,
  Text,
  PickerView,
  PickerViewColumn,
  Block,
  TSXMLProps,
} from 'tsxml';
import { IPickerProps } from './props';
import AntPopup from '../Popup/index.axml';
import _sjs from './index.sjs';

export default (
  {
    cancelText,
    okText,
    title,
    placeholder,
    className,
    disabled,
    style,
    popClassName,
    animationType,
    popStyle,
    maskStyle,
    maskClassName,
    indicatorStyle,
    indicatorClassName,
    options,
  }: TSXMLProps<IPickerProps>,
  { state, formatValue, selectedIndex, columns }: InternalData
) => (
  <Page>
    <View
      class={`ant-picker ${disabled ? 'ant-picker-disabled' : ''} ${
        className || ''
      }`}
      style={style || ''}
      onTap="onOpen"
    >
      {/* #if ALIPAY */}
      <Slot name="prefix" />
      {/* #endif */}
      <View class="ant-picker-value">
        {/* #if ALIPAY */}
        <Slot name="content" />
        {/* #endif */}
        {formatValue ? (
          <View class="ant-picker-value-text">{formatValue}</View>
        ) : (
          <Block>
            {placeholder && (
              <View class="ant-picker-value-placeholder">{placeholder}</View>
            )}
          </Block>
        )}
      </View>
      {/* #if ALIPAY */}
      <Slot name="suffix" />
      {/* #endif */}
    </View>
    <AntPopup
      className={`ant-picker-popup ${popClassName || ''}`}
      style={popStyle || ''}
      position="bottom"
      animationType={animationType}
      destroyOnClose
      onClose="onMaskDismiss"
      visible={state.visible}
    >
      <View class="ant-picker-header">
        <View
          class="ant-picker-header-item ant-picker-header-cancel"
          hover-class="ant-picker-header-item-hover"
          hover-start-time="20"
          hover-stay-time="50"
          onTap="onCancel"
        >
          {cancelText}
        </View>
        <View class="ant-picker-header-item ant-picker-header-title">
          {/* #if ALIPAY */}
          <Slot name="title">{title}</Slot>
          {/* #endif */}
        </View>
        <View
          class="ant-picker-header-item ant-picker-header-confirm"
          hover-class="ant-picker-header-item-hover"
          hover-start-time="20"
          hover-stay-time="50"
          onTap="onOk"
        >
          {okText}
        </View>
      </View>
      <View class="ant-picker-content">
        <Slot name="content-header" />
        {columns ? (
          <Block>
            <PickerView
              class="ant-picker-picker-view"
              mask-style={maskStyle || ''}
              mask-class={maskClassName || ''}
              indicator-style={indicatorStyle || ''}
              indicator-class={indicatorClassName || ''}
              value={selectedIndex}
              onChange="onChange"
            >
              {columns.map(
                (dataRoot, dataIndex) =>
                  dataIndex < options.length && (
                    <PickerViewColumn class="ant-picker-picker-view-column">
                      {dataRoot.map((item) => (
                        <View class="ant-picker-content-item">
                          {_sjs.getPickerViewLabel(item)}
                        </View>
                      ))}
                    </PickerViewColumn>
                  )
              )}
            </PickerView>
          </Block>
        ) : (
          <Block>
            <PickerView>
              <PickerViewColumn>
                <Text style="color: #ccc">暂无数据</Text>
              </PickerViewColumn>
            </PickerView>
          </Block>
        )}
      </View>
    </AntPopup>
  </Page>
);
