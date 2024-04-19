import AntIcon from '../Icon/index.axml';
import { IProgressBarProps } from './props';

import {
  Block,
  Canvas,
  Component,
  InternalData,
  Slot,
  TSXMLProps,
  View,
} from 'tsxml';

export default (
  {
    type,
    className,
    style,
    width,
    $id,
    strokeWidth,
    trailColor,
    status,
    strokeColor,
    percent,
  }: TSXMLProps<IProgressBarProps>,
  { canvasWidth, curProgress }: InternalData
) => (
  <Component>
    <View
      class={`ant-progress ant-progress-${type} ${className || ''}`}
      style={`${style || ''};${
        type === 'circle' ? 'width:' + width + 'px;height:' + width + 'px;' : ''
      }`}
    >
      {type === 'circle' ? (
        <Canvas
          class="ant-progress-canvas"
          /// #if WECHAT
          canvas-id="ant-progress-canvas"
          /// #endif

          /// #if ALIPAY
          id={`ant-progress-canvas-${$id}`}
          width={canvasWidth}
          height={canvasWidth}
          /// #endif
        />
      ) : (
        type === 'line' && (
          <View
            class="ant-progress-outer"
            style={`${strokeWidth ? 'height:' + strokeWidth + 'px;' : ''}${
              trailColor ? 'background-color:' + trailColor : ''
            }`}
          >
            <View
              class={`ant-progress-inner ${
                status === 'success' || status === 'exception'
                  ? 'ant-progress-inner-' + status
                  : ''
              }`}
              style={`width: ${curProgress}%; ${
                strokeColor ? 'background-color:' + strokeColor : ''
              }`}
            ></View>
          </View>
        )
      )}
      <View class="ant-progress-indicator">
        {/* #if ALIPAY */}
        <Slot name="indicator" percent={percent}>
          {/* #endif */}
          {status === 'success' || status === 'exception' ? (
            <AntIcon
              type={
                status === 'success' ? 'CheckCircleFill' : 'CloseCircleFill'
              }
              className={`ant-progress-status-icon ant-progress-status-icon-${status}`}
            />
          ) : (
            <Block>{percent}%</Block>
          )}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
    </View>
  </Component>
);
