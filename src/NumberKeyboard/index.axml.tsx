import { Component, InternalData, TSXMLProps, View } from 'tsxml';
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
  { numArr, randomArr }: InternalData
) => (
  <Component>
    <View
      key={`ant-number-input-${Math.random()}`}
      style={style}
      class={`ant-number-keyboard ${className || ''}`}
    >
      {visible && (
        <View
          class="ant-number-keyboard-modal"
          onTap="onHide"
          onAppear="catchAppearModal"
        />
      )}

      <View
        class={`ant-number-keyboard-kb ${
          visible ? '' : 'ant-number-keyboard-kb_hide'
        }`}
      >
        <slot name="header">
          {closeable && (
            <View onTap="onHide" class="ant-number-keyboard-kb_none">
              <AntIcon
                type="DownOutline"
                className="ant-number-keyboard-down"
              />
            </View>
          )}
        </slot>
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
                <slot name="confirm">
                  <View class="amount-input-kb_transfer-btn">
                    {confirmText}
                  </View>
                </slot>
              </View>
            </View>
          )}
        </View>
        <View class="ant-number-keyboard-kb_iphonex-safe" />
      </View>
    </View>
  </Component>
);
