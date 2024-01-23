import {
  Block,
  Component,
  InternalData,
  Slot,
  Text,
  TSXMLProps,
  View,
} from 'tsxml';
import AntBadge from '../Badge/index.axml';
import ImageIcon from '../ImageIcon/index.axml';
import { ITabBarProps } from './props';

export default (
  {
    className,
    style,
    items,
    activeClassName,
    activeStyle,
  }: TSXMLProps<ITabBarProps>,
  { mixin }: InternalData
) => (
  <Component>
    <View class={`ant-tab-bar ${className || ''}`} style={style || ''}>
      <View class="ant-tab-bar-wrap">
        {items.map((item, index) => (
          <View
            class={`ant-tab-bar-item ${
              index === mixin.value
                ? 'ant-tab-bar-item-active ' + (activeClassName || '')
                : ''
            }`}
            style={index === mixin.value ? activeStyle || '' : ''}
            onTap="onChange"
            data-index={index}
          >
            {item.badge ? (
              <AntBadge
                type={item.badge.type || 'dot'}
                text={item.badge.text}
                stroke={item.badge.stroke}
                bgColor={item.badge.bgColor}
                position={item.badge.position || 'top-right'}
                offsetX={item.badge.offsetX || '-9px'}
                offsetY={item.badge.offsetY || '0px'}
              >
                {/* #if ALIPAY */}

                <Slot
                  name="icon"
                  active={mixin.value == index}
                  item={item}
                  index={index}
                >
                  {/* #endif */}

                  <ImageIcon
                    className="ant-tab-bar"
                    image={mixin.value === index ? item.activeIcon : item.icon}
                  />
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </AntBadge>
            ) : (
              <Block>
                {/* #if ALIPAY */}
                <Slot
                  name="icon"
                  active={mixin.value == index}
                  item={item}
                  index={index}
                >
                  {/* #endif */}

                  <ImageIcon
                    className="ant-tab-bar"
                    image={mixin.value === index ? item.activeIcon : item.icon}
                  />
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </Block>
            )}
            <View class="ant-tab-bar-text-wrap">
              {/* #if ALIPAY */}
              <Slot
                name="text"
                active={mixin.value === index}
                item={item}
                index={index}
              >
                {/* #endif */}

                <Text class="ant-tab-bar-text">{item.text}</Text>

                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </View>
        ))}
      </View>
    </View>
  </Component>
);
