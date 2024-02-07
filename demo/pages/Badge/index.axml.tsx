import { Page, View } from 'tsxml';
import AntBadge from '../../../src/Badge/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default () => (
  <Page>
    <AntContainer title="基本用法">
      <View class="badge-list">
        <AntBadge type="dot" position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="text" text="新" position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="number" text={2} position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="number" text={100} position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="bubble" text="new" position="top-right">
          <View class="box" />
        </AntBadge>
      </View>
    </AntContainer>

    <AntContainer title="带边框">
      <View class="badge-list">
        <AntBadge type="dot" stroke position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="text" text="新" stroke position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="number" text={1} stroke position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="number" text={100} stroke position="top-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="bubble" text="new" stroke position="top-right">
          <View class="box" />
        </AntBadge>
      </View>
    </AntContainer>

    <AntContainer title="自定义背景和位置">
      <View class="badge-list">
        <AntBadge type="number" text={1} position="top-left">
          <View class="box" />
        </AntBadge>
        <AntBadge type="bubble" text="1" position="bottom-right">
          <View class="box" />
        </AntBadge>
        <AntBadge type="number" text={100} stroke bgColor="#1677FF">
          <View class="box" />
        </AntBadge>
        <AntBadge
          type="text"
          text="new"
          bgColor="#FF9F18"
          position="top-center"
        >
          <View class="box" />
        </AntBadge>
        <AntBadge type="bubble" text="new" stroke bgColor="#34B368">
          <View class="box" />
        </AntBadge>
      </View>
    </AntContainer>

    <AntContainer title="设置偏移">
      <View class="badge-list">
        <AntBadge type="text" text="1" offsetX="-20px" offsetY="0px">
          <View class="box" />
        </AntBadge>
        <AntBadge
          type="text"
          text="1"
          position="bottom-right"
          offsetX="-20px"
          offsetY="-14px"
        >
          <View class="box" />
        </AntBadge>
        <AntBadge
          type="bubble"
          text="new"
          position="top-right"
          offsetX="2px"
          offsetY="-8px"
        >
          <View class="box" />
        </AntBadge>
      </View>
    </AntContainer>

    <AntContainer title="自定义内容">
      <View class="badge-list">
        <AntBadge type="text" position="top-right">
          <AntIcon type="GlobalOutline" slot="text" />
          <View class="box" />
        </AntBadge>
      </View>
    </AntContainer>
  </Page>
);
