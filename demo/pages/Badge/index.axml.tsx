import { Page, View } from 'tsxml';
import Badge from '../../../src/Badge/index.axml';
import Container from '../../../src/Container/index.axml';
import AmIcon from '../../../src/Icon/index.axml';

export default () => (
  <Page>
    <Container title="基本用法">
      <View class="badge-list">
        <Badge type="dot" position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="text" text="新" position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="number" text={2} position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="number" text={100} position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="bubble" text="new" position="top-right">
          <View class="box" />
        </Badge>
      </View>
    </Container>

    <Container title="带边框">
      <View class="badge-list">
        <Badge type="dot" stroke position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="text" text="新" stroke position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="number" text={1} stroke position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="number" text={100} stroke position="top-right">
          <View class="box" />
        </Badge>
        <Badge type="bubble" text="new" stroke position="top-right">
          <View class="box" />
        </Badge>
      </View>
    </Container>

    <Container title="自定义背景和位置">
      <View class="badge-list">
        <Badge type="number" text={1} position="top-left">
          <View class="box" />
        </Badge>
        <Badge type="bubble" text="1" position="bottom-right">
          <View class="box" />
        </Badge>
        <Badge type="number" text={100} stroke bgColor="#1677FF">
          <View class="box" />
        </Badge>
        <Badge type="text" text="new" bgColor="#FF9F18" position="top-center">
          <View class="box" />
        </Badge>
        <Badge type="bubble" text="new" stroke bgColor="#34B368">
          <View class="box" />
        </Badge>
      </View>
    </Container>

    <Container title="设置偏移">
      <View class="badge-list">
        <Badge type="text" text="1" offsetX="-20px" offsetY="0px">
          <View class="box" />
        </Badge>
        <Badge
          type="text"
          text="1"
          position="bottom-right"
          offsetX="-20px"
          offsetY="-14px"
        >
          <View class="box" />
        </Badge>
        <Badge
          type="bubble"
          text="new"
          position="top-right"
          offsetX="2px"
          offsetY="-8px"
        >
          <View class="box" />
        </Badge>
      </View>
    </Container>

    <Container title="自定义内容">
      <View class="badge-list">
        <Badge type="text" position="top-right">
          <AmIcon type="GlobalOutline" slot="text" />
          <View class="box" />
        </Badge>
      </View>
    </Container>
  </Page>
);
