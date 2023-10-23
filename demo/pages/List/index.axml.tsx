import { InternalData, View } from 'tsxml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Switch from '../../../src/Switch/index.axml';

export default (_, { item, radius }: InternalData) => (
  <View>
    <List header="基础用法" radius={radius}>
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
    </List>
    <List header="可点击列表" radius={radius}>
      <ListItem
        image="PayCircleOutline"
        arrow="right"
        onTap="handleTap"
        data-info="总资产"
      >
        总资产
      </ListItem>
      <ListItem
        image="SetOutline"
        arrow="right"
        onTap="handleTap"
        data-info="设置"
      >
        设置
      </ListItem>
      <ListItem
        image="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
        arrow="right"
        onTap="handleTap"
        data-info="图片"
      >
        图片
      </ListItem>
    </List>
    <List radius={radius} header="复杂布局">
      {/* #if ALIPAY */}
      <ListItem>
        圆角
        <Switch slot="extra" checked={radius} onChange="handleSetRadius" />
      </ListItem>
      {/* #endif */}
      <ListItem extraBrief="未开启" arrow="right">
        大字号模式
      </ListItem>
      <ListItem brief="管理已授权的产品和设备" arrow={item.arrow}>
        授权管理
      </ListItem>
      {/* #if ALIPAY */}
      <ListItem
        title="标题"
        brief="描述信息"
        extra="次要信息"
        extraBrief="次要辅助信息"
        onTap="handleTap"
        data-info="三行列表"
        arrow="right"
      >
        三行列表
        <Icon slot="image" type="AlipaySquareFill" style="font-size: 64px" />
      </ListItem>
      {/* #endif */}
    </List>
    <List radius={radius} header="禁用状态">
      <ListItem
        disabled
        image="UnorderedListOutline"
        arrow="right"
        data-info="账单"
      >
        账单
      </ListItem>
      <ListItem
        disabled
        image="PayCircleOutline"
        arrow="right"
        data-info="总资产"
      >
        总资产
      </ListItem>
    </List>
  </View>
);
