import { View, InternalData } from 'tsxml';
import SwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">左右两侧都有按钮</View>
        {/* 提示：需要给t-swipe-item-con设置固定的高宽 */}
        {/* 提示：左右两侧都需要滑动按钮时，两侧设置的宽度总和需一致。 */}
        {[...Array(10).keys()].map((_, index) => (
          <View class="t-swipe-item-con" key={index}>
            {/* 提示：右侧只有一个按钮的情况下建议把elasticity设为false */}
            <SwipeAction
              data-item={index}
              leftButtons={rightBtns}
              rightButtons={rightBtns}
              elasticity={true}
              swiped={swipeIndex === index}
              onSwipeEnd="onSwipeEnd"
              onSwipeStart="onSwipeStart"
              onButtonTap="onButtonTap"
            >
              <View class="t-swipe-item-con-view">三个按钮</View>
            </SwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
