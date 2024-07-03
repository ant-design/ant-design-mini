import {
  View,
  ScrollView,
  Slot,
  TSXMLProps,
  InternalData,
  Text,
  Component,
} from 'tsxml';
import { ITabsProps } from './props';

export default (
  {
    className,
    style,
    type,
    direction,
    items,
    tabsBarClassName,
    tabClassName,
    tabActiveClassName,
  }: TSXMLProps<ITabsProps>,
  {
    scrollLeft,
    scrollTop,
    leftFade,
    rightFade,
    $id,
    mixin,
    scrollHeight,
  }: InternalData
) => (
  <Component>
    {direction !== 'vertical' ? (
      <View class={`ant-tabs ${className ? className : ''}`} style={style}>
        <View
          class={`ant-tabs-bar ${
            type === 'basic' ? 'ant-tabs-bar-underline' : ''
          } ${tabsBarClassName ? tabsBarClassName : ''}`}
        >
          <View class="ant-tabs-bar-plus">
            <Slot name="plus" />
          </View>
          <View
            class="ant-tabs-bar-fade ant-tabs-bar-fade-left"
            style={`opacity: ${leftFade ? '1' : '0'}`}
          />
          <View
            class="ant-tabs-bar-fade ant-tabs-bar-fade-right"
            style={`opacity: ${rightFade ? '1' : '0'}`}
          />
          <ScrollView
            class="ant-tabs-bar-scroll-view"
            id={`ant-tabs-bar-scroll-view${$id ? '-' + $id : ''}`}
            onScroll="onScroll"
            scroll-left={scrollLeft}
            scroll-x={true}
            scroll-with-animation={true}
            scroll-animation-duration={300}
            /// #if WECHAT
            enable-flex="true"
            style={`${
              scrollHeight > 0 ? 'height: ' + scrollHeight + 'px;' : ''
            }`}
            /// #endif
          >
            {/* 这个不能删，有用 */}
            <View />
            {items.map((item, index) => (
              <View
                id={`ant-tabs-bar-item${$id ? '-' + $id : ''}-${index}`}
                class={`ant-tabs-bar-wrap ant-tabs-bar-wrap-${type} ${
                  tabsBarClassName ? tabsBarClassName : ''
                }`}
              >
                {type === 'basic' ? (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-basic ${
                      tabClassName ? tabClassName : ''
                    } ${
                      mixin.value === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      mixin.value === index &&
                      !item.disabled &&
                      tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-basic-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {/* #endif */}

                        {item.title}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                ) : type === 'capsule' ? (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-capsule ${
                      tabClassName ? tabClassName : ''
                    } ${
                      mixin.value === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      mixin.value === index &&
                      !item.disabled &&
                      tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-capsule-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {/* #endif */}
                        {item.title}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                ) : (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-mixin ${
                      tabClassName ? tabClassName : ''
                    } ${
                      mixin.value === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      mixin.value === index &&
                      !item.disabled &&
                      tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-mixin-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {/* #endif */}
                        {item.title}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                    <View class="ant-tabs-bar-mixin-subtitle">
                      {/* #if ALIPAY */}
                      <Slot name="subTitle" value={item} index={index}>
                        {/* #endif */}
                        {item.subTitle}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                )}
              </View>
            ))}
            {/* 这个不能删，有用 */}
            <View />
          </ScrollView>
        </View>
        <View class="ant-tabs-content">
          <Slot value={items[mixin.value]} index={mixin.value} />
        </View>
      </View>
    ) : (
      <View class={`ant-vtabs ${className ? className : ''}`} style={style}>
        <View
          class={`ant-vtabs-bar ${tabsBarClassName ? tabsBarClassName : ''}`}
        >
          <ScrollView
            class="ant-vtabs-bar-scroll-view"
            id={`ant-tabs-bar-scroll-view${$id ? '-' + $id : ''}`}
            onScroll="onScroll"
            scroll-top={scrollTop}
            scroll-y={true}
            scroll-with-animation={true}
            scroll-animation-duration={300}
            /// #if WECHAT
            enable-flex="true"
            /// #endif
          >
            <View class="ant-vtabs-bar-item-wrap">
              {items.map((item, index) => (
                <View
                  id={`ant-tabs-bar-item${$id ? '-' + $id : ''}-${index}`}
                  class={`ant-vtabs-bar-item ${
                    tabClassName ? tabClassName : ''
                  } ${
                    mixin.value === index && !item.disabled
                      ? 'ant-vtabs-bar-item-active'
                      : ''
                  } ${item.disabled ? 'ant-vtabs-bar-item-disabled' : ''} ${
                    mixin.value === index &&
                    !item.disabled &&
                    tabActiveClassName
                      ? tabActiveClassName
                      : ''
                  }`}
                  style={`${
                    mixin.value + 1 === index
                      ? 'border-radius: 0 16rpx 0 0'
                      : ''
                  };${
                    mixin.value - 1 === index
                      ? 'border-radius: 0 0 16rpx 0'
                      : ''
                  }`}
                  onTap="onChange"
                  data-index={index}
                >
                  <Text class="ant-vtabs-bar-item-title">
                    {/* #if ALIPAY */}
                    <Slot name="title" value={item} index={index}>
                      {/* #endif */}
                      {item.title}
                      {/* #if ALIPAY */}
                    </Slot>
                    {/* #endif */}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View class="ant-vtabs-content">
          <Slot value={items[mixin.value]} index={mixin.value}>
            {items[mixin.value].content}
          </Slot>
        </View>
      </View>
    )}
  </Component>
);
