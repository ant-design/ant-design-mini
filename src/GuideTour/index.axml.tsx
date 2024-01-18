import { IGuideTour } from './props';
import {
  Component,
  View,
  Slot,
  InternalData,
  TSXMLProps,
  Block,
  Swiper,
  SwiperItem,
  Image,
} from 'tsxml';
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
  { mixin, current }: InternalData
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
          {utils.checkShowJump(mixin.value, items) && (
            <AntButton inline size="small" onTap="onCancel">
              跳过
            </AntButton>
          )}
          {utils.checkShowPrev(mixin.value, items) && (
            <AntButton
              inline
              size="small"
              onTap="onPrev"
              data-currentValue={mixin.value}
            >
              上一步
            </AntButton>
          )}
          {utils.checkShowNext(mixin.value, items) && (
            <AntButton
              inline
              size="small"
              onTap="onNext"
              data-currentValue={mixin.value}
            >
              下一步
            </AntButton>
          )}
          {utils.checkShowKnow(mixin.value, items) && (
            <AntButton inline size="small" onTap="onCancel">
              知道了
            </AntButton>
          )}
        </View>
        {swiperable ? (
          <Block>
            <View class="ant-guide-tour-indicator">
              {items.map((item, index) => (
                <View
                  class={`ant-guide-tour-indicator-dot ${
                    index === mixin.value
                      ? 'ant-guide-tour-indicator-dot-active'
                      : ''
                  }`}
                ></View>
              ))}
            </View>
            <Swiper
              class="ant-guide-tour-swiper"
              current={mixin.value}
              adjust-height="none"
              style="height: 100vh;"
              onChange="onSwiperChange"
            >
              {items.map((item) => (
                <SwiperItem>
                  <View
                    class={`ant-guide-tour-item ${item.className || ''}`}
                    style={`top:${item.top}px; left:${item.left}px`}
                  >
                    {/* #if WECHAT */}
                    {item.imageUrl ? (
                      <Image
                        class="ant-guide-tour-item-img"
                        src={item.imageUrl}
                        style={item.imageStyle}
                        mode={item.imageMode}
                      />
                    ) : (
                      <Slot name="step" index={current}></Slot>
                    )}
                    {/* #endif */}
                    {/* #if ALIPAY */}
                    <Slot name="step" index={current}>
                      {item.imageUrl && (
                        <Image
                          class="ant-guide-tour-item-img"
                          src={item.imageUrl}
                          style={item.imageStyle}
                          mode={item.imageMode}
                        />
                      )}
                    </Slot>
                    {/* #endif */}
                  </View>
                </SwiperItem>
              ))}
            </Swiper>
          </Block>
        ) : (
          <Block>
            {items.map(
              (item, index) =>
                mixin.value === index && (
                  <View
                    class={`ant-guide-tour-item ${item.className || ''}`}
                    style={`top:${item.top}px; left:${item.left}px`}
                  >
                    {/* #if WECHAT */}
                    {item.imageUrl ? (
                      <Image
                        class="ant-guide-tour-item-img"
                        src={item.imageUrl}
                        style={item.imageStyle}
                        mode={item.imageMode}
                      />
                    ) : (
                      <Slot name="step" index={index}></Slot>
                    )}
                    {/* #endif */}

                    {/* #if ALIPAY */}
                    <Slot name="step" index={index}>
                      {item.imageUrl && (
                        <Image
                          class="ant-guide-tour-item-img"
                          src={item.imageUrl}
                          style={item.imageStyle}
                          mode={item.imageMode}
                        />
                      )}
                    </Slot>
                    {/* #endif */}
                  </View>
                )
            )}
          </Block>
        )}
      </View>
    )}
  </Component>
);
