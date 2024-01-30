import { InternalData, Page, View } from 'tsxml';
import Badge from '../../../src/Badge/index.axml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, items2, current, item }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <Tabs items={items} />
    </Container>
    {/* #if ALIPAY */}
    <Container title="带有content">
      <Tabs items={items}>
        <View class="content" slot-scope="item">
          {item.value.content}
        </View>
      </Tabs>
    </Container>
    {/* #endif */}
    <Container title="胶囊">
      <Tabs type="capsule" items={items} defaultCurrent={1} />
    </Container>
    <Container title="带副标题">
      <Tabs type="mixin" items={items} />
    </Container>
    {/* #if ALIPAY */}
    <Container title="带徽标">
      <Tabs items={items}>
        <View slot="title" slot-scope="item">
          {item.value.badge ? (
            <View>
              <Badge>{item.value.title}</Badge>
            </View>
          ) : (
            <View>{item.value.title}</View>
          )}
        </View>
      </Tabs>
    </Container>
    {/* #endif */}
    <Container title="禁用状态">
      <Tabs items={items2} />
    </Container>
    <Container title="onChange">
      <Tabs items={items} onChange="onChange" />
    </Container>
    <Container title="plus按钮">
      <Tabs items={items}>
        <View slot="plus">
          <Icon type="AddOutline" onTap="onPlus" />
        </View>
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
