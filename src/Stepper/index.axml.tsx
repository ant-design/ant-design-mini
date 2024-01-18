import { View, TSXMLProps } from 'tsxml';
import { IStepperProps } from './props';
import AntInput from '../../src/Input/InputBlur/index.axml';
import AntButton from '../../src/Button/index.axml';

export default (
  {
    className,
    style,
    disabled,
    min,
    inputClassName,
    inputStyle,
    type,
    max,
    focus,
    inputReadOnly,
  }: TSXMLProps<IStepperProps>,
  { mixin, enableNative, alwaysSystem, confirmType, confirmHold }
) => (
  <View class={`ant-stepper ${className ? className : ''}`} style={style}>
    <AntButton
      className={`ant-stepper-button ant-stepper-button-down ${
        disabled || (mixin.value !== '' && mixin.value <= min)
          ? 'ant-stepper-button-disabled'
          : ''
      }`}
      activeClassName="ant-stepper-button-hover"
      icon="MinusOutline"
      type="text"
      data-mode="minus"
      disabled={disabled || (mixin.value !== '' && mixin.value <= min)}
      onTap="onTap"
    />
    <View class="ant-stepper-input-wrap">
      {inputReadOnly ? (
        <View class="ant-stepper-input ant-stepper-input-readonly">
          {mixin.value}
        </View>
      ) : (
        <AntInput
          className={`ant-stepper-input ${
            disabled ? 'ant-stepper-input-disabled' : ''
          } ${inputClassName ? inputClassName : ''}`}
          style={inputStyle}
          type={type}
          enableNative={enableNative}
          alwaysSystem={alwaysSystem}
          confirm-type={confirmType}
          confirm-hold={confirmHold}
          disabled={disabled}
          focus={focus}
          onChange="onChange"
          onFocus="onFocus"
          onBlur="onBlur"
          onConfirm="onConfirm"
          value={mixin.value}
        />
      )}
    </View>
    <AntButton
      className={`ant-stepper-button ant-stepper-button-up ${
        disabled || (mixin.value !== '' && mixin.value >= max)
          ? 'ant-stepper-button-disabled'
          : ''
      }`}
      activeClassName="ant-stepper-button-hover"
      icon="AddOutline"
      type="text"
      data-mode="add"
      disabled={disabled || (mixin.value !== '' && mixin.value >= max)}
      onTap="onTap"
    />
  </View>
);
