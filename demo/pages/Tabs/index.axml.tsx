import { Page, View, InternalData, Slot } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Tabs from '../../../src/Tabs/index.axml';
import Badge from '../../../src/Badge/index.axml';
import Icon from '../../../src/Icon/index.axml';

export default ({ items, items2, current }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <Tabs items={items} />
    </Container>

    <Container title="带有content">
      <Tabs items={items}>
        <Slot name="content">
          {({ value: { content } }) => <View class="content">{content}</View>}
        </Slot>
      </Tabs>
    </Container>

    <Container title="胶囊">
      <Tabs type="capsule" items={items} defaultCurrent={1} />
    </Container>

    <Container title="带副标题">
      <Tabs type="mixin" items={items} />
    </Container>

    <Container title="带徽标">
      <Tabs items={items}>
        {/* #if ALIPAY */}
        <Slot name="title">
          {/* #endif */}
          {({ value: { badge, title } }) =>
            badge ? <Badge>{title}</Badge> : <View>{title}</View>
          }
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </Tabs>
    </Container>

    <Container title="禁用状态">
      <Tabs items={items2} />
    </Container>

    <Container title="onChange">
      <Tabs items={items} onChange="onChange" />
    </Container>

    <Container title="plus按钮">
      <Tabs items={items}>
        <Slot name="plus">
          <Icon type="AddOutline" onTap="onPlus" />
        </Slot>
      </Tabs>
    </Container>

    <Container title="控制模式">
      <Tabs items={items} current={current} onChange="handleChange" />
    </Container>

    <Container title="content在外层自定义">
      <Tabs items={items} current={current} onChange="handleChange" />
      <View class="content">{items[current].content}</View>
    </Container>
  </Page>
);
