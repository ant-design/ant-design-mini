"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7769],{16878:function(d,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),t=a(3196),o={"src-grid-demo-grid":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,7538))})),asset:{type:"BLOCK",id:"src-grid-demo-grid",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},35199:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(3196);const t=[{value:"The palace is used for navigation of multiple sub-functions in the business and has a higher screen effect than the form of a list.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-grid": "antd-mini/es/Grid/index"
#endif
#if WECHAT
  "ant-grid": "antd-mini/Grid/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-grid
  items="{{items}}"
  iconSize="{{36}}"
  columns="{{3}}"
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-grid
  items="{{items3withDesc}}"
  iconSize="{{36}}"
  columns="{{3}}" />
`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
    ],
  },
});
`,paraId:6,tocIndex:4},{value:`<ant-grid
  items="{{items}}"
  columns="{{3}}"
  gridItemLayout="horizontal"
/>
`,paraId:7,tocIndex:5},{value:`#if ALIPAY
<ant-grid
  items="{{items}}"
  columns="{{5}}">
  <view
    slot="icon"
    slot-scope="props">
    <ant-badge
      a:if="{{props.value.tag}}"
      offsetX="-10px"
      type="text"
      text="{{props.value.tag}}">
      <image
        src="{{props.value.icon}}"
        style="width: 44px; height: 44px" />
    </ant-badge>
    <image
      a:else
      src="{{props.value.icon}}"
      style="width: 44px; height: 44px" />
  </view>
  <view
    slot="title"
    slot-scope="props">
    Item {{props.index 1}}
  </view>
  <view
    slot="description"
    slot-scope="props">
    Description {{props.index 1}}
  </view>
</ant-grid>

#endif
#if WECHAT
\u7531\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7684\u9650\u5236, Grid In\u5FAE\u4FE1\u6682\u65F6\u4E0D\u652F\u6301 Slot
#endif
`,paraId:8,tocIndex:6},{value:"Property",paraId:9,tocIndex:8},{value:"Description",paraId:9,tocIndex:8},{value:"Type",paraId:9,tocIndex:8},{value:"Default Value",paraId:9,tocIndex:8},{value:"className",paraId:9,tocIndex:8},{value:"Class Name",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"columns",paraId:9,tocIndex:8},{value:"The number of elements displayed per row,",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:" Mode effective",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"5",paraId:9,tocIndex:8},{value:"description",paraId:9,tocIndex:8},{value:"Description slot, receiving value, index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"gridItemLayout",paraId:9,tocIndex:8},{value:"item layout, optional ",paraId:9,tocIndex:8},{value:"vertical",paraId:9,tocIndex:8},{value:"(Vertical)",paraId:9,tocIndex:8},{value:"horizontal",paraId:9,tocIndex:8},{value:"(Horizontal)",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"vertical",paraId:9,tocIndex:8},{value:"icon",paraId:9,tocIndex:8},{value:"Icon slot, receiving value, index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"iconSize",paraId:9,tocIndex:8},{value:"Icon size in px",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"iconStyle",paraId:9,tocIndex:8},{value:"Icon style type, optional ",paraId:9,tocIndex:8},{value:"normal",paraId:9,tocIndex:8},{value:" ",paraId:9,tocIndex:8},{value:"circle",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"normal",paraId:9,tocIndex:8},{value:"items",paraId:9,tocIndex:8},{value:"Content Text",paraId:9,tocIndex:8},{value:"GridItem",paraId:10,tocIndex:8},{value:"[]",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"mode",paraId:9,tocIndex:8},{value:"Style type, optional ",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:"(Tile)",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:"(Sliding)",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:"paginationFillColor",paraId:9,tocIndex:8},{value:"Page break background color,",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:" Mode effective",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"paginationFrontColor",paraId:9,tocIndex:8},{value:"Page break color,",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:" Mode effective",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"showDivider",paraId:9,tocIndex:8},{value:"Show split line",paraId:9,tocIndex:8},{value:"boolean",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"style",paraId:9,tocIndex:8},{value:"Style",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"title",paraId:9,tocIndex:8},{value:"Header slot, receiving value, index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onTap",paraId:9,tocIndex:8},{value:"Click on each element to trigger",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:11,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"#if ALIPAY onFirstAppear",paraId:9,tocIndex:8},{value:"Triggered when the first visible area of the current element reaches 50%",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:12,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"#if WECHAT bind:tap",paraId:9,tocIndex:8},{value:"Click on each element to trigger",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:13,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bind:firstappear",paraId:9,tocIndex:8},{value:"Triggered when the first visible area of the current element reaches 50%",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:14,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"Parameters",paraId:15,tocIndex:9},{value:"Description",paraId:15,tocIndex:9},{value:"Type",paraId:15,tocIndex:9},{value:"Default Value",paraId:15,tocIndex:9},{value:"description",paraId:15,tocIndex:9},{value:"Description",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"icon",paraId:15,tocIndex:9},{value:"icons, support images and ",paraId:15,tocIndex:9},{value:"Icon",paraId:16,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"iconStyle",paraId:15,tocIndex:9},{value:"Icon style type, with priority higher than grid, optional ",paraId:15,tocIndex:9},{value:"normal",paraId:15,tocIndex:9},{value:" ",paraId:15,tocIndex:9},{value:"circle",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"title",paraId:15,tocIndex:9},{value:"Title",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:17,tocIndex:11},{value:"Variable name",paraId:18,tocIndex:11},{value:"Default Value",paraId:18,tocIndex:11},{value:"Dark Mode Default",paraId:18,tocIndex:11},{value:"Remarks",paraId:18,tocIndex:11},{value:"--ant-grid-title-color",paraId:18,tocIndex:11},{value:"#333333",paraId:18,tocIndex:11},{value:"#c5cad1",paraId:18,tocIndex:11},{value:"Grid Title Color",paraId:18,tocIndex:11},{value:"--ant-grid-description-color",paraId:18,tocIndex:11},{value:"#999999",paraId:18,tocIndex:11},{value:"#616161",paraId:18,tocIndex:11},{value:"Grid Description Color",paraId:18,tocIndex:11},{value:"--ant-grid-border-color",paraId:18,tocIndex:11},{value:"#eeeeee",paraId:18,tocIndex:11},{value:"#2b2b2b",paraId:18,tocIndex:11},{value:"Grid Border Color",paraId:18,tocIndex:11}]}}]);
