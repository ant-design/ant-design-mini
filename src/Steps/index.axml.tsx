import { TSXMLProps, Component } from 'tsxml';
import { IStepsProps } from './props';
import utils from './index.sjs';
import { View, Slot } from 'tsxml';

export default ({
  className,
  style,
  direction,
  current,
  status,
  items,
}: TSXMLProps<IStepsProps>) => (
  <Component>
    <View
      class={`ant-steps ant-steps-${direction} ${className || ''}`}
      style={style}
    >
      {items.map((item, index) => (
        <View
          class={`ant-steps-item ant-steps-item-${direction} ${
            index < current ? 'ant-steps-item-finish' : ''
          } ${index === current ? 'ant-steps-item-active' : ''} ${
            index > current ? 'ant-steps-item-non-active' : ''
          }`}
        >
          <View
            class={`ant-steps-item-indicator ant-steps-item-indicator-${direction}`}
          >
            <View
              class={`ant-steps-item-indicator-icon ant-steps-item-${utils.getClassName(
                current,
                index,
                status
              )}-icon`}
            >
              {/* #if ALIPAY */}
              <Slot
                name="icon"
                value={item}
                index={index}
                current={current}
                status={status}
              >
                {/* #endif */}
                <View
                  class={`ant-steps-item-${utils.getClassName(
                    current,
                    index,
                    status
                  )}-icon-default`}
                />
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </View>
          <View class="ant-steps-item-text">
            <View
              class={`ant-steps-item-title ant-steps-item-title-${utils.getClassName(
                current,
                index,
                status
              )}`}
            >
              {/* #if ALIPAY */}
              <Slot name="title" value={item} index={index}>
                {/* #endif */}
                {item.title}
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
            <View class="ant-steps-item-desc">
              {/* #if ALIPAY */}
              <Slot name="description" value={item} index={index}>
                {/* #endif */}
                {item.description}
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </View>
        </View>
      ))}
    </View>
  </Component>
);
