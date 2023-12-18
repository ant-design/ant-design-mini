import { View, ScrollView, Slot, TSXMLProps, InternalData } from 'tsxml';
import { ITabsProps } from './props';

export default (
  {
    className,
    style,
    type,
    direction,
    items,
    current,
    tabsBarClassName,
    tabClassName,
    tabActiveClassName,
  }: TSXMLProps<ITabsProps>,
  { scrollLeft, scrollTop, leftFade, rightFade }: InternalData
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
            {/* #if ALIPAY */}
            <Slot name="plus" />
            {/* #endif */}
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
            id={`ant-tabs-bar-scroll-view-${'$id'}`}
            onScroll="onScroll"
            scrollLeft={scrollLeft}
            scrollX={true}
            scrollWithAnimation={true}
            scrollAnimationDuration={300}
          >
            <View />
            {items.map((item, index) => (
              <View
                class={`ant-tabs-bar-wrap ant-tabs-bar-wrap-${type} ${
                  tabsBarClassName ? tabsBarClassName : ''
                }`}
              >
                {type === 'basic' && (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-basic ${
                      tabClassName ? tabClassName : ''
                    } ${
                      current === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      current === index && !item.disabled && tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-basic-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {item.title}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                )}
                {type === 'capsule' && (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-capsule ${
                      tabClassName ? tabClassName : ''
                    } ${
                      current === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      current === index && !item.disabled && tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-capsule-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {item.title}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                )}
                {type === 'mixin' && (
                  <View
                    class={`ant-tabs-bar-item ant-tabs-bar-mixin ${
                      tabClassName ? tabClassName : ''
                    } ${
                      current === index && !item.disabled
                        ? 'ant-tabs-bar-active'
                        : ''
                    } ${item.disabled ? 'ant-tabs-bar-disabled' : ''} ${
                      current === index && !item.disabled && tabActiveClassName
                        ? tabActiveClassName
                        : ''
                    }`}
                    onTap="onChange"
                    data-index={index}
                  >
                    <View class="ant-tabs-bar-mixin-title">
                      {/* #if ALIPAY */}
                      <Slot name="title" value={item} index={index}>
                        {item.title}
                      </Slot>
                      {/* #endif */}
                    </View>
                    <View class="ant-tabs-bar-mixin-subtitle">
                      {/* #if ALIPAY */}
                      <Slot name="subTitle" value={item} index={index}>
                        {item.subTitle}
                      </Slot>
                      {/* #endif */}
                    </View>
                  </View>
                )}
              </View>
            ))}
            <View />
          </ScrollView>
        </View>
        <View class="ant-tabs-content">
          {/* #if ALIPAY */}
          <Slot value={items[current]} index={current} />
          {/* #endif */}
        </View>
      </View>
    ) : (
      <View class={`ant-vtabs ${className ? className : ''}`} style={style}>
        <View
          class={`ant-vtabs-bar ${tabsBarClassName ? tabsBarClassName : ''}`}
        >
          <ScrollView
            class="ant-vtabs-bar-scroll-view"
            id={`ant-tabs-bar-scroll-view-${'$id'}`}
            onScroll="onScroll"
            scrollTop={scrollTop}
            scrollY={true}
            scrollWithAnimation={true}
            scrollAnimationDuration={300}
          >
            <View class="ant-vtabs-bar-item-wrap">
              {items.map((item, index) => (
                <View
                  class={`ant-vtabs-bar-item ${
                    tabClassName ? tabClassName : ''
                  } ${
                    current === index && !item.disabled
                      ? 'ant-vtabs-bar-item-active'
                      : ''
                  } ${item.disabled ? 'ant-vtabs-bar-item-disabled' : ''} ${
                    current === index && !item.disabled && tabActiveClassName
                      ? tabActiveClassName
                      : ''
                  }`}
                  style={`${
                    current + 1 === index ? 'border-radius: 0 16rpx 0 0' : ''
                  };${
                    current - 1 === index ? 'border-radius: 0 0 16rpx 0' : ''
                  }`}
                  onTap="onChange"
                  data-index={index}
                >
                  <text class="ant-vtabs-bar-item-title">
                    {/* #if ALIPAY */}
                    <Slot name="title" value={item} index={index}>
                      {item.title}
                    </Slot>
                    {/* #endif */}
                  </text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View class="ant-vtabs-content">
          {/* #if ALIPAY */}
          <Slot value={items[current]} index={current}>
            {items[current].content}
          </Slot>
          {/* #endif */}
        </View>
      </View>
    )}
  </Component>
);
