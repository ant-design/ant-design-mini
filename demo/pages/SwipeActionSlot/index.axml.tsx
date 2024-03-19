import { View, InternalData, Page, $toArray, Text } from 'tsxml';
import AntSwipeAction from '../../../src/SwipeAction/index.axml';
import Icon from "../../../src/Icon/index.axml"

export default ({ rightBtns, swipeIndex }: InternalData) => (
  <Page>
    <View class="t-swipe">
      <View class="t-swipe-item">
        <View class="t-swipe-item-title">自定义按钮</View>
        {$toArray(10).map((_, index) => (
          <View key={index} class="t-swipe-item-con">
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
              <View class="t-swipe-item-con-view">左右自定义按钮</View>
              <View slot='delete' class="t-swipe-item-con-btn">
                <Icon type="DeleteOutline" className='t-swipe-item-con-btn-icon' />
                <Text class='t-swipe-item-con-btn-del'>删除</Text>
              </View>
              <View slot='delete-confirm' class="t-swipe-item-con-btn">
                <Icon type="DeleteOutline" className='t-swipe-item-con-btn-icon' />
                <View class='t-swipe-item-con-btn-del'>确认删除吗？</View>
              </View>
              <View slot='reName' class="t-swipe-item-con-btn">
                <Icon type="EditFill" className='t-swipe-item-con-btn-icon' />
                <View class='t-swipe-item-con-btn-del'>重命名</View>
              </View>
              <View slot='reName-confirm' class="t-swipe-item-con-btn">
                <Icon type="EditFill" className='t-swipe-item-con-btn-icon' />
                <View class='t-swipe-item-con-btn-del'>确认修改吗?</View>
              </View>
            </AntSwipeAction>
          </View>
        ))}
      </View>
    </View>
  </Page>
);
