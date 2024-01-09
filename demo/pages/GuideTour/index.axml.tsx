import { InternalData, Page } from 'tsxml';
import GuideTour from '../../../src/GuideTour/index.axml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({
  list,
  baseVisible,
  props,
  slotVisible,
  moreVisible,
  controlledVisible,
  current,
  swiperVisible,
}: InternalData) => (
  <Page>
    <GuideTour
      items={[list[0]]}
      visible={baseVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <GuideTour
      items={list}
      visible={moreVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <GuideTour
      items={list}
      visible={swiperVisible}
      onCancel="closeTour"
      onChange="onChange"
      swiperable={true}
    />
    <GuideTour
      items={list}
      current={current}
      visible={controlledVisible}
      onCancel="closeTour"
      onChange="onChangeControlled"
    />
    <GuideTour
      items={list}
      visible={slotVisible}
      onCancel="closeTour"
      onChange="onChange"
    >
      <view class="step-box" slot="step" slot-scope="props">
        step-{props.index}
      </view>
    </GuideTour>

    <Container title="基础用法" className="list">
      <Button onTap="openTour" data-field="baseVisible">
        单图模式
      </Button>
      <Button onTap="openTour" data-field="moreVisible">
        多图模式
      </Button>
      <Button onTap="openTour" data-field="swiperVisible">
        滑动模式
      </Button>
      <Button onTap="openTour" data-field="controlledVisible">
        受控模式
      </Button>
    </Container>

    <Container title="插槽用法" className="list">
      <Button onTap="openTour" data-field="slotVisible">
        开始
      </Button>
    </Container>
  </Page>
);
