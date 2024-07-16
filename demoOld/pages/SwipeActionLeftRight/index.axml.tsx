import { View, InternalData, $toArray, Page } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">左右两侧都有按钮</View>
        {$toArray(10).map((_, index) => (
          <View class="t-swipe-item-con" key={index}>
            <AntSwipeAction
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
            </AntSwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
