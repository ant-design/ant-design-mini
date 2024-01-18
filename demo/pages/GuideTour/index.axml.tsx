import { InternalData, Page, View } from 'tsxml';
import AntGuideTour from '../../../src/GuideTour/index.axml';
import AntButton from '../../../src/Button/index.axml';
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
    <AntGuideTour
      items={[list[0]]}
      visible={baseVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <AntGuideTour
      items={list}
      visible={moreVisible}
      onCancel="closeTour"
      onChange="onChange"
    />
    <AntGuideTour
      items={list}
      visible={swiperVisible}
      onCancel="closeTour"
      onChange="onChange"
      swiperable={true}
    />
    <AntGuideTour
      items={list}
      current={current}
      visible={controlledVisible}
      onCancel="closeTour"
      onChange="onChangeControlled"
    />
    {/* #if ALIPAY */}
    <AntGuideTour
      items={list}
      visible={slotVisible}
      onCancel="closeTour"
      onChange="onChange"
    >
      <View class="step-box" slot="step" slot-scope="props">
        step-{props.index}
      </View>
    </AntGuideTour>
    {/* #endif */}

    <Container title="基础用法" className="list">
      <AntButton onTap="openTour" data-field="baseVisible">
        单图模式
      </AntButton>
      <AntButton onTap="openTour" data-field="moreVisible">
        多图模式
      </AntButton>
      <AntButton onTap="openTour" data-field="swiperVisible">
        滑动模式
      </AntButton>
      <AntButton onTap="openTour" data-field="controlledVisible">
        受控模式
      </AntButton>
    </Container>

    {/* #if ALIPAY */}
    <Container title="插槽用法" className="list">
      <AntButton onTap="openTour" data-field="slotVisible">
        开始
      </AntButton>
    </Container>
    {/* #endif */}
  </Page>
);
