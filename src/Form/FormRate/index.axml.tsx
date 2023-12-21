import { Component, Slot, View, TSXMLProps, InternalData } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import Rate from '../../Rate/index.axml';
import Icon from '../../Icon/index.axml';
import { FormRateProps } from './props'; // 假设props的导入路径是当前文件夹的props

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
    count,
    gutter,
    readonly,
    allowHalf,
    allowClear,
    characterClassName,
    characterActiveClassName,
    extra,
    rateClassName,
    rateStyle,
  }: TSXMLProps<FormRateProps>,
  { item, formData }: InternalData
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
      <Rate
        value={formData.value}
        count={count}
        gutter={gutter}
        readonly={readonly}
        allowHalf={allowHalf}
        allowClear={allowClear}
        className={rateClassName}
        style={rateStyle}
        characterActiveClassName={characterActiveClassName}
        characterClassName={characterClassName}
        onChange="onChange"
      >
        <View slot="character">
          {/* #if ALIPAY */}
          <Slot name="character">
            {/* #endif */}
            <Icon type="StarFill" />
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      </Rate>
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
