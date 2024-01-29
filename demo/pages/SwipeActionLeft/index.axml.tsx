import { View, Page, InternalData, $toArray } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ swipeIndex, leftBtns }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">按钮在左侧</View>
        {$toArray(10).map((_, index) => (
          <View key={index} class="t-swipe-item-con">
            <AntSwipeAction
              data-item={index}
              leftButtons={leftBtns}
              elasticity={true}
              swiped={swipeIndex === index}
              onSwipeEnd="onSwipeEnd"
              onSwipeStart="onSwipeStart"
              onButtonTap="onButtonTap"
            >
              <View class="t-swipe-item-con-view">左侧-三个按钮</View>
            </AntSwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
