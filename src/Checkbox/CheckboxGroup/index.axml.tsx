import { View, TSXMLProps, Block, Slot, CheckboxGroup } from 'tsxml';
import { ICheckboxGroupProps } from './props';
import componentUtils from '../index.sjs';
import List from '../../List/index.axml';
import ListItem from '../../List/ListItem/index.axml';
import AntCheckbox from '../index.axml';

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
    <CheckboxGroup name={name} value={mixin.value}>
      <View class="ant-checkbox-group-body">
        {position === 'vertical' ? (
          <Block>
            {options.map((item, index) => (
              <ListItem>
                <AntCheckbox
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
                </AntCheckbox>
              </ListItem>
            ))}
          </Block>
        ) : (
          <Block>
            {options.map((item, index) => (
              <AntCheckbox
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
              </AntCheckbox>
            ))}
          </Block>
        )}
      </View>
    </CheckboxGroup>
  </List>
);
