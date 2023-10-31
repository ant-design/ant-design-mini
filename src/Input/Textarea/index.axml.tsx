import { Textarea, View, TSXMLProps, InternalData } from 'tsxml';
import { TextareaProps } from './props';
import Icon from '../../Icon/index.axml';

export default (
  {
    disabled,
    className,
    focusClassName,
    style,
    focusStyle,
    enableNative,
    name,
    placeholder,
    placeholderClassName,
    maxLength,
    focus,
    placeholderStyle,
    confirmType,
    confirmHold,
    autoHeight,
    showCount,
    allowClear,
  }: TSXMLProps<TextareaProps>,
  { mixin, selfFocus }: InternalData
) => (
  <View
    class={`ant-textarea ${disabled ? 'ant-textarea-disabled' : ''} ${
      className ? className : ''
    } ${selfFocus ? (focusClassName ? focusClassName : '') : ''}`}
    style={`${style || ''};${focusStyle || ''}`}
  >
    <View class="ant-textarea-line">
      <Textarea
        enableNative={enableNative}
        name={name}
        class="ant-textarea-content"
        disabled={disabled}
        value={typeof mixin.value === 'undefined' ? '' : mixin.value}
        placeholder={placeholder}
        placeholder-class={`ant-textarea-placeholder ${
          placeholderClassName ? placeholderClassName : ''
        }`}
        placeholder-style={placeholderStyle ? placeholderStyle : ''}
        maxlength={maxLength}
        focus={focus}
        confirm-type={confirmType}
        confirm-hold={confirmHold}
        auto-height={autoHeight}
        show-count={showCount}
        controlled={mixin.controlled}
        onInput="onChange"
        onConfirm="onConfirm"
        onFocus="onFocus"
        onBlur="onBlur"
      />
      {allowClear && (
        <View
          class={`ant-textarea-clear ${
            mixin.value && mixin.value.length > 0
              ? 'ant-textarea-clear-show'
              : 'ant-textarea-clear-hidden'
          }`}
          onTap="onClear"
        >
          <Icon
            className="ant-textarea-clear-icon"
            type="CloseCircleFill"
          ></Icon>
        </View>
      )}
    </View>
  </View>
);
