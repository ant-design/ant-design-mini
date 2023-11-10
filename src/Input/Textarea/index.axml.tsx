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
  { state, selfFocus }: InternalData
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
        value={state.value || ''}
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
        controlled={state.controlled}
        onInput="onChange"
        onConfirm="onConfirm"
        onFocus="onFocus"
        onBlur="onBlur"
      />
      {allowClear && (
        <View
          // prettier-ignore
          class={`ant-textarea-clear ${ state.value && state.value.length > 0 ? 'ant-textarea-clear-show' : 'ant-textarea-clear-hidden'}`}
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
