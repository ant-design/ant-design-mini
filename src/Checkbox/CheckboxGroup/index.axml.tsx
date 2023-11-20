import { View, TSXMLProps, Block, Slot } from 'tsxml';
import { ICheckboxGroupProps } from './props';
import componentUtils from '../index.sjs';
import List from '../../List/index.axml';
import ListItem from '../../List/ListItem/index.axml';
import Checkbox from '../index.axml';

export default (
  {
    options,
    color,
    disabled,
    className,
    position,
    style,
  }: TSXMLProps<ICheckboxGroupProps>,

  { mixin, name }
) => (
  <List
    className={`ant-checkbox-group ${
      className ? className : ''
    } ant-checkbox-group-${position}`}
    style={style}
  >
    <checkbox-group name={name} value={mixin.value}>
      <View class="ant-checkbox-group-body">
        {position === 'vertical' ? (
          <Block>
            {options.map((item, index) => (
              <ListItem>
                <Checkbox
                  color={color}
                  checked={componentUtils.getCheckboxChecked(item, mixin.value)}
                  data-index={index}
                  value={item.value}
                  disabled={disabled || item.disabled}
                  onChange="onChange"
                >
                  {/* #if ALIPAY */}
                  <slot name="label" value={item} index={index}>
                    {/* #endif */}
                    <View class="ant-checkbox-group-item-label-default">
                      {item.label}
                    </View>
                    {/* #if ALIPAY */}
                  </slot>
                  {/* #endif */}
                </Checkbox>
              </ListItem>
            ))}
          </Block>
        ) : (
          <Block>
            {options.map((item, index) => (
              <Checkbox
                color={color}
                checked={componentUtils.getCheckboxChecked(item, mixin.value)}
                data-index={index}
                value={item.value}
                disabled={disabled || item.disabled}
                onChange="onChange"
              >
                {/* #if ALIPAY */}
                <Slot name="label" value={item} index={index}>
                  {/* #endif */}
                  <View class="ant-checkbox-group-item-label-default">
                    {item.label}
                  </View>
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </Checkbox>
            ))}
          </Block>
        )}
      </View>
    </checkbox-group>
  </List>
);
