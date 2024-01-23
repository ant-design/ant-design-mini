import {
  InternalData,
  MovableArea,
  MovableView,
  Slot,
  TSXMLProps,
  View,
} from 'tsxml';
import util from './index.sjs';
import { ISwipeActionProps } from './props';

export default (
  { damping, disabled }: TSXMLProps<ISwipeActionProps>,
  {
    tapTypeR,
    tapTypeL,
    inTouch,
    $id,
    myStyle,
    swipedR,
    swipedL,
    _leftButtons,
    _rightButtons,
    rightWidth,
    leftWidth,
    inertiaWidth,
    swipeX,
    moveX,
    animation,
    onItemTap,
    onChange,
    onChangeEnd,
  }: InternalData
) => (
  <View class="ant-swipe">
    <View
      class="ant-swipe-action"
      style={util.getWidth(rightWidth, leftWidth, inertiaWidth)}
    >
      <MovableArea
        class="ant-swipe-action-movable"
        style={util.getMarginLeft(rightWidth, leftWidth, inertiaWidth)}
      >
        <MovableView
          class="ant-swipe-action-movable-content"
          style={`width: `{
            width: util.getWidth2(rightWidth, leftWidth, inertiaWidth),
            marginLeft: util.getMarginLeft2(
              rightWidth,
              leftWidth,
              inertiaWidth
            ),
          }}
          x={swipeX}
          data-type="content"
          animation={animation}
          damping={damping}
          direction="horizontal"
          out-of-bounds={false}
          disabled={disabled}
          onTap="onSwipeTap"
          onChange={onChange}
          onChangeEnd={onChangeEnd}
          catchTouchEnd="onTouchEnd"
          onTouchCancel="onTouchCancel"
          catchTouchStart="onTouchStart"
        >
          <View
            class="ant-swipe-action-movable-content-view"
            style={util.getSlotWidthStyle(
              rightWidth,
              leftWidth,
              _leftButtons,
              _rightButtons,
              inertiaWidth
            )}
            onTap="onClick"
          >
            {/* display: inline */}
            {swipedR || swipedL ? (
              <View class="ant-swipe-action-movable-content-view-modal"></View>
            ) : null}
            <Slot />
          </View>
        </MovableView>
        {_rightButtons.map((item, idx) => (
          <MovableView
            key={idx}
            class={`ant-swipe-action-movable-content ant-swipe-action-movable-right-${$id}`}
            style={{
              zIndex: tapTypeR === `R-${idx}` ? 1 : 0,
              marginLeft: util.getMarginLeft3(
                rightWidth,
                leftWidth,
                inertiaWidth
              ),
              width: `${(rightWidth - 0.1) / 2}px`,
            }}
            data-type="content"
            animation={false}
            disabled={true}
            direction="horizontal"
            x={moveX * (util.getMoveX(_rightButtons, idx) / rightWidth)}
          >
            <View
              class="ant-swipe-action-movable-content-right"
              style={{
                background: item.bgColor,
                width: `${(item.width + inertiaWidth + 1) / 2}px`,
              }}
            >
              <View
                class="ant-swipe-action-movable-content-right-text"
                onTap={onItemTap}
                data-item={{ item, idx }}
                aria-hidden={!swipedR}
                style={{
                  fontSize: `${(item.fontSize || 28) / 2}px`,
                  color: item.color,
                  background: item.bgColor,
                  width:
                    tapTypeR && tapTypeR === `R-${idx}`
                      ? `${
                          (rightWidth +
                            1 +
                            (item.confirmType === 'move' && inTouch
                              ? inertiaWidth
                              : 0)) /
                          2
                        }px`
                      : `${item.width / 2}px`,
                  ...(tapTypeR && tapTypeR === `R-${idx}` ? myStyle : {}),
                }}
              >
                <Text
                  class={`right-text ${util.getLeft(
                    tapTypeR,
                    idx,
                    _rightButtons,
                    true
                  )}`}
                >
                  {tapTypeR && tapTypeR === `R-${idx}`
                    ? item.confirmText || item.text
                    : item.text}
                </Text>
              </View>
            </View>
          </MovableView>
        ))}
        {_leftButtons.map((itemL, idx) => (
          <MovableView
            key={`left-${idx}`}
            class={`ant-swipe-action-movable-content ant-swipe-action-is-right-swipe ant-swipe-action-movable-left-${$id}`}
            style={{
              zIndex: tapTypeL === `L-${idx}` ? 1 : 0,
              marginLeft: `${inertiaWidth / 2}px`,
              width: `${(leftWidth - 1) / 2}px`,
            }}
            data-type="content"
            animation={false}
            disabled={true}
            direction="horizontal"
            x={moveX * (util.getMoveX(_leftButtons, idx) / leftWidth)}
          >
            <View
              class="ant-swipe-action-movable-content-left"
              style={{
                background:
                  tapTypeL &&
                  tapTypeL === `L-${idx}` &&
                  _leftButtons.length === 3 &&
                  idx === 1
                    ? 'none'
                    : itemL.bgColor,
                width: `${(leftWidth + inertiaWidth) / 2}px`,
              }}
            >
              <View
                class="ant-swipe-action-movable-content-left-text1 ant-swipe-action-left"
                onTap={onItemTap}
                data-item={{ itemL, idx }}
                aria-hidden={!swipedL}
                style={{
                  background: itemL.bgColor,
                  height: `calc(100% + 2px)`,
                  fontSize: `${(itemL.fontSize || 28) / 2}px`,
                  color: itemL.color,
                  ...(tapTypeL && tapTypeL === `L-${idx}` ? myStyle : {}),
                  width:
                    tapTypeL && tapTypeL === `L-${idx}`
                      ? `${
                          (leftWidth +
                            1 +
                            (itemL.confirmType === 'move' && inTouch
                              ? inertiaWidth
                              : 0)) /
                          2
                        }px`
                      : `${itemL.width / 2}px`,
                }}
              >
                <Text class="right-text" style={{ width: `100%` }}>
                  <Text
                    class={`right-text ${util.getLeft(
                      tapTypeL,
                      idx,
                      _leftButtons,
                      false
                    )}`}
                  >
                    {tapTypeL && tapTypeL === `L-${idx}`
                      ? itemL.confirmText || itemL.text
                      : itemL.text}
                  </Text>
                </Text>
              </View>
            </View>
          </MovableView>
        ))}
      </MovableArea>
    </View>
  </View>
);
