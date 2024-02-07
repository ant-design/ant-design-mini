import { InternalData, Page, View } from 'tsxml';
import AntBadge from '../../../src/Badge/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntGrid from '../../../src/Grid/index.axml';

export default ({
  items2,
  items3,
  items4,
  items5,
  items2withDesc,
  items3withDesc,
  itemsCustom,
  props,
  scrollItems,
}: InternalData) => (
  <Page>
    <AntContainer title="2列">
      <AntGrid items={items2} onTap="handleTapItem" columns={2} />
    </AntContainer>
    <AntContainer title="3列">
      <AntGrid items={items3} onTap="handleTapItem" columns={3} />
    </AntContainer>
    <AntContainer title="4列">
      <AntGrid items={items4} onTap="handleTapItem" columns={4} />
    </AntContainer>
    <AntContainer title="5列">
      <AntGrid items={items5} onTap="handleTapItem" columns={5} />
    </AntContainer>
    <AntContainer title="5列-展示分割线">
      <AntGrid items={items5} onTap="handleTapItem" columns={5} showDivider />
    </AntContainer>
    <AntContainer title="2列-带描述">
      <AntGrid items={items2withDesc} onTap="handleTapItem" columns={2} />
    </AntContainer>
    <AntContainer title="3列-带描述">
      <AntGrid items={items3withDesc} onTap="handleTapItem" columns={3} />
    </AntContainer>
    <AntContainer title="2列-元素横向布局">
      <AntGrid
        items={items2}
        onTap="handleTapItem"
        columns={2}
        gridItemLayout="horizontal"
      />
    </AntContainer>
    <AntContainer title="3列-元素横向布局">
      <AntGrid
        items={items3}
        onTap="handleTapItem"
        columns={3}
        gridItemLayout="horizontal"
      />
    </AntContainer>
    <AntContainer title="可滑动">
      <AntGrid items={scrollItems} onTap="handleTapItem" mode="scroll" />
    </AntContainer>
    <AntContainer title="自定义图标大小">
      <AntGrid
        items={itemsCustom}
        onTap="handleTapItem"
        columns={5}
        iconSize={44}
      />
    </AntContainer>
    {/* #if ALIPAY */}
    <AntContainer title="自定义">
      <AntGrid items={itemsCustom} onTap="handleTapItem" columns={5}>
        <View slot="icon" slot-scope="props">
          {props.value.tag ? (
            <AntBadge offsetX="-10px" type="text" text={props.value.tag}>
              <image src={props.value.icon} style="width: 44px; height: 44px" />
            </AntBadge>
          ) : (
            <image src={props.value.icon} style="width: 44px; height: 44px" />
          )}
        </View>
        <View slot="title" slot-scope="props">
          第{props.index + 1}项
        </View>
        <View slot="description" slot-scope="props">
          描述{props.index + 1}
        </View>
      </AntGrid>
    </AntContainer>
    {/* #endif */}
  </Page>
);
