import { IGuideTour } from './props';
import { Component, View, Slot, InternalData, TSXMLProps, Block } from 'tsxml';
import Mask from '../Mask/index.axml';
import AntButton from '../Button/index.axml';
import AntIcon from '../Icon/index.axml';
import utils from './index.sjs';

export default (
  {
    className,
    style,
    maskStyle,
    maskClassName,
    items,
    visible,
    swiperable,
  }: TSXMLProps<IGuideTour>,
  { value }: InternalData
) => (
  <Component>
    {visible && (
      <View class={`ant-guide-tour ${className || ''}`} style={style || ''}>
        <Mask
          show
          className={maskClassName}
          style={`z-index:9999;${maskStyle || ''}`}
        />
        <AntIcon
          type="CloseOutline"
          className="ant-guide-tour-clear"
          onTap="onCancel"
        />
        <View class="ant-guide-tour-button">
          {utils.checkShowJump(value, items) && (
            <AntButton inline size="small" onTap="onCancel">
              跳过
            </AntButton>
          )}
          {utils.checkShowPrev(value, items) && (
            <AntButton
              inline
              size="small"
              onTap="onPrev"
              data-currentValue={value}
            >
              上一步
            </AntButton>
          )}
          {utils.checkShowNext(value, items) && (
            <AntButton
              inline
              size="small"
              onTap="onNext"
              data-currentValue={value}
            >
              下一步
            </AntButton>
          )}
          {utils.checkShowKnow(value, items) && (
            <AntButton inline size="small" onTap="onCancel">
              知道了
            </AntButton>
          )}
        </View>
        {swiperable ? (
          <Block>
            <View class="ant-guide-tour-indicator">
              {items.map((_, index) => (
                <View
                  key={index}
                  class={`ant-guide-tour-indicator-dot ${
                    index === value ? 'ant-guide-tour-indicator-dot-active' : ''
                  }`}
                ></View>
              ))}
            </View>
            <swiper
              class="ant-guide-tour-swiper"
              current={value}
              adjust-height="none"
              style="height: 100vh"
              disable-touch="true"
              onChange="onSwiperChange"
            >
              {items.map((item, index) => (
                <swiper-item key={index}>
                  {value === index && (
                    <View
                      class={`ant-guide-tour-item ${item.className || ''}`}
                      style={`top:${item.top}px; left:${item.left}px`}
                    >
                      {/* #if ALIPAY */}
                      <Slot name="step" index={value}>
                        {/* #endif */}
                        {item.imageUrl && (
                          <image
                            class="ant-guide-tour-item-img"
                            src={item.imageUrl}
                            style={item.imageStyle}
                            mode={item.imageMode}
                          />
                        )}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  )}
                </swiper-item>
              ))}
            </swiper>
          </Block>
        ) : (
          items.map(
            (item, index) =>
              value === index && (
                <View
                  key={index}
                  class={`ant-guide-tour-item ${item.className || ''}`}
                  style={`top:${item.top}px; left:${item.left}px`}
                >
                  {/* #if ALIPAY */}
                  <Slot name="step" index={index}>
                    {/* #endif */}
                    {item.imageUrl && (
                      <image
                        class="ant-guide-tour-item-img"
                        src={item.imageUrl}
                        style={item.imageStyle}
                        mode={item.imageMode}
                      />
                    )}
                    {/* #if ALIPAY */}
                  </Slot>
                  {/* #endif */}
                </View>
              )
          )
        )}
      </View>
    )}
  </Component>
);
