import { View, Page, InternalData, $toArray } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">去除松开手之后的滑动回弹效果</View>
        {$toArray(10).map((_, index) => (
          <View class="t-swipe-item-con" key={index}>
            <AntSwipeAction
              data-item={index}
              rightButtons={rightBtns}
              elasticity={false}
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
