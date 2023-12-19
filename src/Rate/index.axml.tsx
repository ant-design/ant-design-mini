import { View, Slot, TSXMLProps, InternalData } from 'tsxml';
import AntIcon from '../Icon/index.axml';
import { IRateProps } from './props';

export default (
  {
    count,
    gutter,
    allowHalf,
    style,
    className,
    characterClassName,
    characterActiveClassName,
  }: TSXMLProps<IRateProps>,
  { mixin, $id }: InternalData
) => (
  <View class={`ant-rate ${className || ''}`} style={style}>
    <View
      id={`ant-rate-container${$id ? '-' + $id : ''}`}
      class="ant-rate-container"
      onTouchMove="handleStarMove"
      onTouchEnd="handleStarMoveEnd"
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        count.map((item, index) => (
          <View
            class="ant-rate-star"
            onTap="handleStarTap"
            data-rate={index}
            style={`margin-right: ${index === count - 1 ? 0 : gutter + 'px'}`}
          >
            {allowHalf && mixin.value === index + 0.5 && (
              <View
                class={`ant-rate-star-icon-active ${characterClassName || ''} ${
                  characterActiveClassName || ''
                } ant-rate-star-icon-half-active`}
              >
                {/* #if ALIPAY */}
                <Slot name="character" index={index} isActive={true}>
                  {/* #endif */}
                  <AntIcon type="StarFill" />
                  {/* #if ALIPAY */}
                </Slot>
                {/* #endif */}
              </View>
            )}
            <View
              class={`ant-rate-star-icon ${
                mixin.value >= index + 1
                  ? 'ant-rate-star-icon-active' +
                    ' ' +
                    (characterClassName || '') +
                    ' ' +
                    (characterActiveClassName || '')
                  : characterClassName
              }`}
            >
              {/* #if ALIPAY */}
              <Slot name="character" index={index}>
                {/* #endif */}
                <AntIcon type="StarFill" />
                {/* #if ALIPAY */}
              </Slot>
              {/* #endif */}
            </View>
          </View>
        ))
      }
    </View>
  </View>
);
