import { View, InternalData, $toArray, Page } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">调整按钮数量，最多为3个</View>
        {/* 提示：需要给t-swipe-item-con设置固定的高宽 */}
        {$toArray(5).map((_, index) => (
          <View key={index} class="t-swipe-item-con">
            <AntSwipeAction
              data-item={index}
              rightButtons={rightBtns.slice(0, index + 1)}
              elasticity={index !== 0}
              swiped={swipeIndex === index}
              onSwipeEnd="onSwipeEnd"
              onSwipeStart="onSwipeStart"
              onButtonTap="onButtonTap"
            >
              <View class="t-swipe-item-con-view">
                右侧-{index + 1 > 3 ? 3 : index + 1}个按钮
              </View>
            </AntSwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
