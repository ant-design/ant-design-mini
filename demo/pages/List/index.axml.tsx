import { InternalData, View } from 'tsxml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntSwitch from '../../../src/Switch/index.axml';

export default (_, { item, radius }: InternalData) => (
  <View>
    <AntList header="基础用法" radius={radius}>
      <AntListItem>1</AntListItem>
      <AntListItem>2</AntListItem>
      <AntListItem>3</AntListItem>
    </AntList>
    <AntList header="可点击列表" radius={radius}>
      <AntListItem
        image="PayCircleOutline"
        arrow="right"
        onTap="handleTap"
        data-info="总资产"
      >
        总资产
      </AntListItem>
      <AntListItem
        image="SetOutline"
        arrow="right"
        onTap="handleTap"
        data-info="设置"
      >
        设置
      </AntListItem>
      <AntListItem
        image="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
        arrow="right"
        onTap="handleTap"
        data-info="图片"
      >
        图片
      </AntListItem>
    </AntList>
    <AntList radius={radius} header="复杂布局">
      {/* #if ALIPAY */}
      <AntListItem>
        圆角
        <AntSwitch slot="extra" checked={radius} onChange="handleSetRadius" />
      </AntListItem>
      {/* #endif */}
      <AntListItem extraBrief="未开启" arrow="right">
        大字号模式
      </AntListItem>
      <AntListItem brief="管理已授权的产品和设备" arrow={item.arrow}>
        授权管理
      </AntListItem>
      {/* #if ALIPAY */}
      <AntListItem
        title="标题"
        brief="描述信息"
        extra="次要信息"
        extraBrief="次要辅助信息"
        onTap="handleTap"
        data-info="三行列表"
        arrow="right"
      >
        三行列表
        <AntIcon slot="image" type="AlipaySquareFill" style="font-size: 64px" />
      </AntListItem>
      {/* #endif */}
    </AntList>
    <AntList radius={radius} header="禁用状态">
      <AntListItem
        disabled
        image="UnorderedListOutline"
        arrow="right"
        data-info="账单"
      >
        账单
      </AntListItem>
      <AntListItem
        disabled
        image="PayCircleOutline"
        arrow="right"
        data-info="总资产"
      >
        总资产
      </AntListItem>
    </AntList>
  </View>
);
