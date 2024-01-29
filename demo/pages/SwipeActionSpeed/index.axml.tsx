import { View, Page, InternalData, $toArray } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">滑动速度变慢</View>
        {/* 提示：需要给t-swipe-item-con设置固定的高宽 */}
        {$toArray(10).map((_, index) => (
          <View key={index} class="t-swipe-item-con">
            {/* 提示：右侧只有一个按钮的情况下建议把elasticity设为false */}
            <AntSwipeAction
              data-item={index}
              rightButtons={rightBtns}
              elasticity={false}
              damping="25"
              swiped={swipeIndex === index}
              onSwipeEnd="onSwipeEnd"
              onSwipeStart="onSwipeStart"
              onButtonTap="onButtonTap"
            >
              <View class="t-swipe-item-con-view">右侧-三个按钮</View>
            </AntSwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
