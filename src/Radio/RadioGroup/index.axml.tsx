import { IRadioGroupProps } from './props';
import List from '../../List/index.axml';
import ListItem from '../../List/ListItem/index.axml';
import Radio from '../index.axml';
import componentUtils from '../index.sjs';
import { InternalData, TSXMLProps, Slot, View, Block } from 'tsxml';

export default (
  {
    name,
    disabled,
    color,
    position,
    onChange,
    options,
    className,
    style,
  }: TSXMLProps<IRadioGroupProps>,
  { mixin }: InternalData
) => (
  <Component>
    <List
      className={`ant-radio-group ${
        className ? className : ''
      } ant-radio-group-${position}`}
      style={style}
    >
      <radio-group name={name} value={mixin.value}>
        <View class="ant-radio-group-body">
          {position === 'vertical' ? (
            <Block>
              {options.map((item, index) => (
                <ListItem key={item.value}>
                  <Radio
                    checked={componentUtils.getChecked(
                      index,
                      options,
                      mixin.value
                    )}
                    data-index={index}
                    value={item.value}
                    disabled={disabled || item.disabled}
                    color={color}
                    onChange={onChange}
                  >
                    {/* #if ALIPAY */}
                    <Slot name="label" value={item} index={index}>
                      {/* #endif */}
                      <View class="ant-radio-group-item-label-default">
                        {item.label}
                      </View>
                      {/* #if ALIPAY */}
                    </Slot>
                    {/* #endif */}
                  </Radio>
                </ListItem>
              ))}
            </Block>
          ) : (
            <Block>
              {options.map((item, index) => (
                <Radio
                  key={item.value}
                  checked={componentUtils.getChecked(
                    index,
                    options,
                    mixin.value
                  )}
                  data-index={index}
                  value={item.value}
                  disabled={disabled || item.disabled}
                  color={item.color}
                  onChange={onChange}
                >
                  {/* #if ALIPAY */}
                  <Slot name="label" value={item} index={index}>
                    {/* #endif */}
                    <View class="ant-radio-group-item-label-default">
                      {item.label}
                    </View>
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </Radio>
              ))}
            </Block>
          )}
        </View>
      </radio-group>
    </List>
  </Component>
);
