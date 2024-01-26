import { Component, InternalData, TSXMLProps, View, Slot } from 'tsxml';
import AntIcon from '../Icon/index.axml';
import { INumberKeyboardProps } from './props';

export default (
  {
    className,
    style,
    visible,
    closeable,
    random,

    confirmText,
    point,
    confirmDisabled,
  }: TSXMLProps<INumberKeyboardProps>,
  { numArr, randomArr, $id }: InternalData
) => (
  <Component>
    <View
      key={`ant-number-input-${$id}`}
      style={style}
      class={`ant-number-keyboard ${className || ''}`}
    >
      {visible && (
        <View
          class="ant-number-keyboard-modal"
          onTap="handleHide"
          onAppear="catchAppearModal"
        />
      )}

      <View
        class={`ant-number-keyboard-kb ${
          visible ? '' : 'ant-number-keyboard-kb_hide'
        }`}
      >
        {/* #if ALIPAY */}
        <Slot name="header">
          {/* #endif */}
          {closeable && (
            <View onTap="handleHide" class="ant-number-keyboard-kb_none">
              <AntIcon
                type="DownOutline"
                className="ant-number-keyboard-down"
              />
            </View>
          )}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
        <View class="ant-number-keyboard-kb_bd">
          <View class="ant-number-keyboard-kb_keys">
            {(random ? randomArr : numArr).map((item) => (
              <View class="ant-number-keyboard-kb_row">
                {item.map((itemKey) => (
                  <View
                    data-key={itemKey}
                    class="ant-number-keyboard-kb_number"
                    onTap="tapButton"
                  >
                    {itemKey}
                  </View>
                ))}
              </View>
            ))}
            {!confirmText && (
              <View class="ant-number-keyboard-kb_row">
                {!point && (
                  <View class="ant-number-keyboard-kb_number ant-number-keyboard-kb_point ant-number-keyboard-kb_flex ant-number-keyboard-kb_e" />
                )}
                {point && (
                  <View
                    class="ant-number-keyboard-kb_number ant-number-keyboard-kb_point ant-number-keyboard-kb_flex"
                    data-key="."
                    onTap="tapButton"
                  >
                    .
                  </View>
                )}
                <View
                  class="ant-number-keyboard-kb_number ant-number-keyboard-kb_zero ant-number-keyboard-kb_flex"
                  data-key="0"
                  onTap="tapButton"
                >
                  0
                </View>
                <View
                  class={`ant-number-keyboard-kb_number ant-number-keyboard-kb_point ant-number-keyboard-kb_flex ${
                    point ? '' : 'ant-number-keyboard-kb_e'
                  }`}
                  data-key="del"
                  onTap="tapButton"
                >
                  <AntIcon
                    type="TextDeletionOutline"
                    className="ant-number-keyboard-del"
                  />
                </View>
              </View>
            )}
            {confirmText && (
              <View class="ant-number-keyboard-kb_row">
                <View
                  class="ant-number-keyboard-kb_number ant-number-keyboard-kb_zero"
                  data-key="0"
                  onTap="tapButton"
                >
                  0
                </View>
                {point && (
                  <View
                    class="ant-number-keyboard-kb_number ant-number-keyboard-kb_point"
                    data-key="."
                    onTap="tapButton"
                  >
                    .
                  </View>
                )}
              </View>
            )}
          </View>
          {confirmText && (
            <View class="ant-number-keyboard-kb_function">
              <View
                class="ant-number-keyboard-kb_number ant-number-keyboard-kb_del"
                data-key="del"
                onTap="tapButton"
              >
                <AntIcon
                  type="TextDeletionOutline"
                  className="ant-number-keyboard-del"
                />
              </View>
              <View
                style={`opacity: ${confirmDisabled ? '0.5' : '1'}`}
                onTap="tapButton"
                class="ant-number-keyboard-kb_transfer"
                data-key="enter"
              >
                {/* #if ALIPAY */}
                <Slot name="confirm">
                  {/* #endif */}
                  <View class="amount-input-kb_transfer-btn">
                    {confirmText}
                  </View>
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </View>
            </View>
          )}
        </View>
        <View class="ant-number-keyboard-kb_iphonex-safe" />
      </View>
    </View>
  </Component>
);
