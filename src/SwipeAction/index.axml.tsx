import { ISwipeActionProps } from './props';
import util from './index.sjs';
import {
  View,
  Slot,
  MovableView,
  MovableArea,
  InternalData,
  Text,
  TSXMLProps,
} from 'tsxml';

export default (
  { damping, disabled }: TSXMLProps<ISwipeActionProps>,
  {
    leftWidth,
    rightWidth,
    inertiaWidth,
    swipeX,
    animation,
    _leftButtons,
    _rightButtons,
    swipedR,
    swipedL,
    moveX,
    tapTypeR,
    inTouch,
    myStyle,
    $id,
    tapTypeL,
    itemL,
    idx,
    item,
    ready,
  }: InternalData
) => (
  <View class="ant-swipe">
    <View
      class="ant-swipe-action"
      style={`width: ${util.getWidth(rightWidth, leftWidth, inertiaWidth)};`}
    >
      <MovableArea
        tsxml-if={ready}
        class="ant-swipe-action-movable"
        style={`margin-left: ${util.getMarginLeft(
          rightWidth,
          leftWidth,
          inertiaWidth
        )}`}
      >
        <MovableView
          class="ant-swipe-action-movable-content"
          style={`width:${util.getWidth2(
            rightWidth,
            leftWidth,
            inertiaWidth
          )}; margin-left: ${util.getMarginLeft2(
            rightWidth,
            leftWidth,
            inertiaWidth
          )};`}
          x={swipeX}
          data-type="content"
          animation={animation}
          damping={damping}
          direction="horizontal"
          out-of-bounds={false}
          disabled={disabled}
          onTap="onSwipeTap"
          onChange="onChange"
          onChangeEnd="onChangeEnd"
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
            {(swipedR || swipedL) && (
              <View class="ant-swipe-action-movable-content-view-modal" />
            )}
            <Slot />
          </View>
        </MovableView>
        <MovableView
          class={`ant-swipe-action-movable-content ant-swipe-action-movable-right${
            $id ? '-' + $id : ''
          }`}
          tsxml-for={_rightButtons}
          tsxml-for-item="item"
          tsxml-for-index="idx"
          damping={damping}
          key={idx}
          style={util.getRightMovableContentStyle(
            tapTypeR,
            idx,
            rightWidth,
            leftWidth,
            inertiaWidth
          )}
          data-type="content"
          animation={false}
          disabled={true}
          direction="horizontal"
          x={moveX * (util.getMoveX(_rightButtons, idx) / rightWidth)}
        >
          <View
            class="ant-swipe-action-movable-content-right"
            style={`background: ${item.bgColor};width: ${
              (item.width + inertiaWidth + 1) / 2
            }px;`}
          >
            <View
              class="ant-swipe-action-movable-content-right-text"
              onTap="onItemTap"
              data-item={util.axmlObj({ item, idx })}
              aria-hidden={!swipedR}
              style={util.getMovableContentRightStyle(
                item,
                tapTypeR,
                idx,
                rightWidth,
                inTouch,
                inertiaWidth,
                myStyle
              )}
            >
              <Text
                class={`right-text ${util.getLeft(
                  tapTypeR,
                  idx,
                  _rightButtons,
                  true
                )}`}
              >
                {util.getRightText(tapTypeR, idx, item)}
              </Text>
            </View>
          </View>
        </MovableView>
        <MovableView
          class={`ant-swipe-action-movable-content ant-swipe-action-is-right-swipe ant-swipe-action-movable-left${
            $id ? '-' + $id : ''
          }`}
          tsxml-for={_leftButtons}
          tsxml-for-item="itemL"
          tsxml-for-index="idx"
          tsxml-for-key={`left-${idx}`}
          damping={damping}
          style={util.getLeftMovableContentStyle(
            tapTypeL,
            idx,
            leftWidth,
            inertiaWidth
          )}
          data-type="content"
          animation={false}
          disabled={true}
          direction="horizontal"
          x={moveX * (util.getMoveX(_leftButtons, idx) / leftWidth)}
        >
          <View
            class="ant-swipe-action-movable-content-left"
            style={`background: ${
              tapTypeL &&
              tapTypeL === 'L-' + idx &&
              _leftButtons.length === 3 &&
              idx === 1
                ? 'none'
                : itemL.bgColor
            };width: ${(leftWidth + inertiaWidth) / 2}px`}
          >
            <View
              class="ant-swipe-action-movable-content-left-text1 ant-swipe-action-left"
              onTap="onItemTap"
              data-item={util.axmlObj({ itemL, idx })}
              aria-hidden={!swipedL}
              style={util.getMovableContentLeftStyle(
                itemL,
                tapTypeL,
                idx,
                leftWidth,
                inTouch,
                inertiaWidth,
                myStyle
              )}
            >
              <Text class="right-text" style="width:100%;">
                <Text
                  class={`right-text ${util.getLeft(
                    tapTypeL,
                    idx,
                    _leftButtons,
                    false
                  )}`}
                >
                  {util.getLeftText(tapTypeL, idx, itemL)}
                </Text>
              </Text>
            </View>
          </View>
        </MovableView>
      </MovableArea>
    </View>
  </View>
);
