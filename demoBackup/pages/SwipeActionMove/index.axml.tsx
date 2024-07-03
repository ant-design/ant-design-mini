import { $toArray, InternalData, Page, View } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">
          删除按钮滑动到最大距离触发二次确认
        </View>
        {$toArray(10).map((_, index) => (
          <View key={index} class="t-swipe-item-con">
            <AntSwipeAction
              data-item={index}
              rightButtons={rightBtns}
              elasticity={true}
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
