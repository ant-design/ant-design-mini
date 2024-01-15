import { TSXMLProps, Slot, InternalData, View, Component } from 'tsxml';
import { FormItemProps } from './props';
import Popover from '../../Popover/index.axml';
import AntIcon from '../../Icon/index.axml';

export default (
  {
    className,
    label,
    labelWidth,
    position,
    validateStatus,
    help,
    requiredMark,
    status,
    errors,
    required,
    disabled,
    tooltip,
  }: TSXMLProps<FormItemProps>,
  { errorInfo }: InternalData
) => (
  <Component>
    <View
      class={`ant-form-item ${
        className ? className : ''
      } ant-form-item-${requiredMark}`}
    >
      <Slot name="header" errors={errors} status={status} />
      <View
        class={`ant-form-item-line ant-form-item-line-${position} ${
          errorInfo ? 'noLine' : ''
        }`}
      >
        <View class={`ant-form-item-content ant-form-item-content-${position}`}>
          {label && (
            <View
              style={labelWidth ? 'width: ' + labelWidth : ''}
              class={`ant-form-item-label ${
                disabled ? 'ant-form-item-label-disabled' : ''
              } ant-form-item-label-${position} ${
                required ? 'ant-form-item-label-required' : ''
              }`}
            >
              <View class="ant-form-item-label-text">{label}</View>
              {tooltip && (
                <Popover>
                  <View slot="content" class="ant-form-item-label-help-content">
                    {tooltip}
                  </View>
                  <AntIcon type="QuestionCircleOutline" />
                </Popover>
              )}
            </View>
          )}
          <View class={`ant-form-item-field ant-form-item-field-${position}`}>
            <Slot />
            {(help ||
              ((validateStatus === 'error' || !validateStatus) &&
                status === 'error')) && (
              <View
                class={`${
                  validateStatus === 'error' ||
                  (!validateStatus && status === 'error')
                    ? 'ant-form-item-error-info'
                    : 'ant-form-item-help-info'
                } ant-form-item-error-info-${position}`}
              >
                <View>{help || errors[0]}</View>
              </View>
            )}
          </View>
        </View>
        <View class="ant-form-item-extra">
          <Slot name="extra" />
        </View>
      </View>
      <Slot name="footer" errors={errors} status={status} />
    </View>
  </Component>
);
