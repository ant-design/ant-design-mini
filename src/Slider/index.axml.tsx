import { View, Template, TSXMLProps, Slot, Component } from 'tsxml';
import sliderSjs from './index.sjs';
import { ISliderProps } from './props';
import Popover from '../Popover/index.axml';

export default (
  {
    className,
    disabled,
    showNumber,
    activeLineClassName,
    showTooltip,
    activeDotClassName,
    range,
    value,
    activeLineStyle,
    activeDotStyle,
  }: TSXMLProps<ISliderProps>,
  {
    tickList,
    changingStart,
    changingEnd,
    mixin,
    icon,
    position,
    $id,
    sliderWidth,
    sliderLeft,
  }
) => (
  <Component>
    <Template name="slider-handler">
      <View class="ant-slider-handler" style={`left: ${position}%`}>
        <Popover placement="top" visible={showTooltip} showMask={false}>
          {/* #if ALIPAY */}
          <Slot name="slider">
            {/* #endif */}
            <View class="ant-slider-handler-block">
              <View class="ant-slider-handler-icon-default">
                <View class="ant-slider-handler-icon-default-line1" />
                <View class="ant-slider-handler-icon-default-line2" />
                <View class="ant-slider-handler-icon-default-line3" />
              </View>
            </View>
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
          <View slot="content" class="ant-slider-tooltip-content">
            {/* #if ALIPAY */}
            <Slot name="tooltip" value={value}>
              {/* #endif */}
              {value}
              {/* #if ALIPAY */}
            </Slot>
            {/* #endif */}
          </View>
        </Popover>
      </View>
    </Template>

    <View
      class={`ant-slider ${className ? className : ''}`}
      style={`opacity: ${disabled ? '0.4' : '1'};`}
    >
      <View
        class={`ant-slider-track ${
          showNumber ? 'ant-slider-track-number' : ''
        }`}
      >
        <View
          class="ant-slider-track-touch-area"
          id={`ant-slider-id-${$id}`}
          onTouchStart="handleTrackTouchStart"
          onTouchEnd="handleTrackTouchEnd"
          onTouchMove="handleTrackTouchMove"
        >
          <View class="ant-slider-track-fill">
            <View class="ant-slider-track-fill-background" />
            <View
              class={`ant-slider-track-fill-front ${activeLineClassName || ''}`}
              style={`width: ${sliderWidth}%; left: ${sliderLeft}%; ${
                activeLineStyle || ''
              }`}
            />
            <View class="ant-slider-showTicks">
              {tickList.map((item) => (
                <View
                  class={`ant-slider-tick ant-slider-tick-${
                    sliderSjs.isFrontTick(item, sliderLeft, sliderWidth)
                      ? 'front'
                      : 'back'
                  } ${
                    sliderSjs.isFrontTick(item, sliderLeft, sliderWidth) &&
                    activeDotClassName
                      ? activeDotClassName
                      : ''
                  }`}
                  style={`left: ${item.left}%;${
                    sliderSjs.isFrontTick(item, sliderLeft, sliderWidth) &&
                    activeDotStyle
                      ? activeDotStyle
                      : ''
                  }`}
                >
                  {showNumber && (
                    <View class="ant-slider-tick-number">
                      {/* #if ALIPAY */}
                      <Slot name="tick" value={item.value}>
                        {/* #endif */}

                        {item.value}
                        {/* #if ALIPAY */}
                      </Slot>
                      {/* #endif */}
                    </View>
                  )}
                </View>
              ))}
            </View>
            {range && (
              <Template
                is="slider-handler"
                data={{
                  position: sliderLeft,
                  icon: icon,
                  value: mixin.value[0],
                  showTooltip: changingStart && showTooltip,
                }}
              />
            )}
            <Template
              is="slider-handler"
              data={{
                position: sliderLeft + sliderWidth,
                icon: icon,
                value: range ? mixin.value[1] : mixin.value,
                showTooltip: changingEnd && showTooltip,
              }}
            />
          </View>
        </View>
      </View>
      <View></View>
    </View>
  </Component>
);
