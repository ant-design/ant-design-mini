import { FormSliderProps } from './props';
import FormItem from '../FormItem/index.axml';
import Slider from '../../Slider/index.axml';
import { View, TSXMLProps, Slot, InternalData, Component } from 'tsxml';

export default (
  {
    className,
    style,
    position,
    label,
    labelWidth,
    tooltip,
    requiredMark,
    validateStatus,
    help,
    sliderClassName,
    sliderStyle,
    activeLineClassName,
    activeLineStyle,
    activeDotClassName,
    activeDotStyle,
    min,
    max,
    range,
    showNumber,
    step,
    showTicks,
    showTooltip,
    disabled,
    extra,
  }: TSXMLProps<FormSliderProps>,
  { formData, item }: InternalData
) => (
  <Component>
    <FormItem
      className={className}
      style={style}
      position={position}
      label={label}
      labelWidth={labelWidth}
      status={formData.status}
      errors={formData.errors}
      tooltip={tooltip}
      required={formData.required}
      requiredMark={requiredMark}
      validateStatus={validateStatus}
      help={help}
    >
      <View>
        <Slider
          value={formData.value}
          className={sliderClassName}
          style={sliderStyle}
          activeLineClassName={activeLineClassName}
          activeLineStyle={activeLineStyle}
          activeDotClassName={activeDotClassName}
          activeDotStyle={activeDotStyle}
          min={min}
          max={max}
          range={range}
          showNumber={showNumber}
          step={step}
          showTicks={showTicks}
          showTooltip={showTooltip}
          disabled={disabled}
          onChange="onChange"
          onAfterChange="onAfterChange"
        />
      </View>
      <View slot="extra">
        {/* #if ALIPAY */}
        <Slot name="extra">
          {/* #endif */}

          {extra}

          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
      <View slot="header" slot-scope="item">
        <Slot name="header" errors={item.errors} status={item.status} />
      </View>
      <View slot="footer" slot-scope="item">
        <Slot name="footer" errors={item.errors} status={item.status} />
      </View>
    </FormItem>
  </Component>
);
