import { View, Image, Block, Text, Page, InternalData } from 'tsxml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntTag from '../../../src/Tag/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntInput from '../../../src/Input/index.axml';

export default ({ finding, searchResult, componentList }: InternalData) => (
  <Page>
    <View class="demo-header">
      <View>
        <View class="demo-header-title">
          <Text>Ant Design Mini</Text>
        </View>
        <View>
          <Text>探索移动端小程序的极致体验2</Text>
        </View>
      </View>
      <Image
        class="side-image"
        mode="heightFix"
        src="https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kQ_zRK8YuGoAAAAAAAAAAAAAARQnAQ"
      />
      <View class="input-container">
        <AntInput
          placeholder="输入组件名称"
          onChange="onSearch"
          focusClassName="border"
          className="input"
          allowClear
        >
          <AntIcon slot="prefix" type="SearchOutline" />
        </AntInput>
      </View>
    </View>
    {finding ? (
      <AntList className="list" header="搜索结果列表" radius>
        {searchResult.map((item, index) => (
          <AntListItem
            key={`item-${index}`}
            arrow="right"
            onTap="listPress"
            data-url={item.path}
          >
            {item.name}
            <View slot="brief">{item.nameZN}</View>
          </AntListItem>
        ))}
      </AntList>
    ) : (
      componentList.map((item, index) => (
        <Block key={`componentList-${index}`}>
          <AntList className="list" radius>
            <View slot="header">{item.type}</View>
            {item.list.map((itemList, listIndex) => (
              <AntListItem
                key={`itemList-${listIndex}`}
                arrow="right"
                onTap="listPress"
                data-url={itemList.path}
              >
                <View class="content-title">
                  {itemList.name}
                  {itemList.update && (
                    <View style="margin-left: 16rpx;">
                      <AntTag>Update</AntTag>
                    </View>
                  )}
                </View>
                <View slot="brief">{itemList.nameZN}</View>
              </AntListItem>
            ))}
          </AntList>
        </Block>
      ))
    )}
  </Page>
);
