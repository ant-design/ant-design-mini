import { Page, Slot, InternalData } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Grid from '../../../src/Grid/index.axml';
import Badge from '../../../src/Badge/index.axml';

export default ({
  items2,
  items3,
  items4,
  items5,
  items2withDesc,
  items3withDesc,
  itemsCustom,
  props,
}: InternalData) => (
  <Page>
    <Container title="2列">
      <Grid items={items2} onTap="handleTapItem" columns={2} />
    </Container>
    <Container title="3列">
      <Grid items={items3} onTap="handleTapItem" columns={3} />
    </Container>
    <Container title="4列">
      <Grid items={items4} onTap="handleTapItem" columns={4} />
    </Container>
    <Container title="5列">
      <Grid items={items5} onTap="handleTapItem" columns={5} showDivider />
    </Container>
    <Container title="2列-带描述">
      <Grid items={items2withDesc} onTap="handleTapItem" columns={2} />
    </Container>
    <Container title="3列-带描述">
      <Grid items={items3withDesc} onTap="handleTapItem" columns={3} />
    </Container>
    <Container title="2列-元素横向布局">
      <Grid
        items={items2}
        onTap="handleTapItem"
        columns={2}
        gridItemLayout="horizontal"
      />
    </Container>
    <Container title="3列-元素横向布局">
      <Grid
        items={items3}
        onTap="handleTapItem"
        columns={3}
        gridItemLayout="horizontal"
      />
    </Container>
    <Container title="可滑动">
      <Grid items={items4.concat(items4)} onTap="handleTapItem" mode="scroll" />
    </Container>
    <Container title="自定义图标大小">
      <Grid
        items={itemsCustom}
        onTap="handleTapItem"
        columns={5}
        iconSize={44}
      />
    </Container>
    <Container title="自定义">
      <Grid items={itemsCustom} onTap="handleTapItem" columns={5}>
        <Slot name="icon" slot-scope="props">
          {props.value.tag && (
            <Badge offsetX="-10px" type="text" text={props.value.tag}>
              <image src={props.value.icon} style="width: 44px; height: 44px" />
            </Badge>
          )}
          {!props.value.tag && (
            <image src={props.value.icon} style="width: 44px; height: 44px" />
          )}
        </Slot>
        <Slot name="title" slot-scope="props">
          第{props.index + 1}项
        </Slot>
        <Slot name="description" slot-scope="props">
          描述{props.index + 1}
        </Slot>
      </Grid>
    </Container>
  </Page>
);
