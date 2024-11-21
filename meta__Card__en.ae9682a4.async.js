"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4947],{74824:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var t=a(67294),d=a(41957),o={"src-card-demo-card":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,21738))})),asset:{type:"BLOCK",id:"src-card-demo-card",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},90261:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});var t=a(41957);const d=[{value:"Base card container. When you need to carry text, lists, pictures, paragraphs and other content, use Card card containers to facilitate users to browse.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-card": "antd-mini/es/Card/index"
#endif
#if WECHAT
  "ant-card": "antd-mini/Card/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-card
#if ALIPAY
  onOperateClick="handleLinkClick"
#endif
#if WECHAT
  bind:operateClick="handleLinkClick"
#endif
  title="title"
  operateText="operate"
>
  <view>
    I am the card content
  </view>
</ant-card>
`,paraId:3,tocIndex:3},{value:`<ant-card
  divider="{{true}}"
  title="title"
  operateText="operate"
>
  <view>
    Title Content with Split Line
  </view>
</ant-card>
`,paraId:4,tocIndex:4},{value:`<ant-card
  title="title"
  headSticky="{{true}}"
#if ALIPAY
  onTitleSticky="handleTitleSticky"
#endif
#if WECHAT
  bind:titleSticky="handleLinkClick"
#endif
>
  <view style="height: 400px">
    Simulate a long card content
  </view>
</ant-card>
`,paraId:5,tocIndex:5},{value:`<ant-card
  title="title"
  needFold="{{true}}"
>
  <view>
    Content area can be expanded/collapsed
  </view>
</ant-card>
`,paraId:6,tocIndex:6},{value:`<ant-card
  title="title"
  operateText="operateText"
>
  <view slot="headerRight">
    Custom
  </view>
  <view>
    I am the card content
  </view>
</ant-card>
`,paraId:7,tocIndex:7},{value:"Property",paraId:8,tocIndex:9},{value:"Description",paraId:8,tocIndex:9},{value:"Type",paraId:8,tocIndex:9},{value:"Default Value",paraId:8,tocIndex:9},{value:"className",paraId:8,tocIndex:9},{value:"Container className",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"config",paraId:8,tocIndex:9},{value:"Card Configuration",paraId:8,tocIndex:9},{value:"ICardConfig",paraId:9,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"title",paraId:8,tocIndex:9},{value:"Card Title",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"divider",paraId:8,tocIndex:9},{value:"Whether there is a dividing line",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"needFold",paraId:8,tocIndex:9},{value:"Whether a foldable card is required, the operateText needs to be empty, otherwise it needs to be manually unfolded and stowed.",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"foldStatus",paraId:8,tocIndex:9},{value:"Whether it is collapsed or not, passing true will cause it to be collapsed, regardless of whether the needFold is true or not.",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"headSticky",paraId:8,tocIndex:9},{value:"Does the title need ceiling",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"stickyTransparentTitle",paraId:8,tocIndex:9},{value:"Whether the ceiling is on the transparent head page, if so, the height of the transparent head will be calculated automatically.",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"stickyTop",paraId:8,tocIndex:9},{value:"How much distance should the title be from the top when it is sucked",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"operateText",paraId:8,tocIndex:9},{value:"Default title bar right action button text",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onOperateClick",paraId:8,tocIndex:9},{value:"Default title bar right operation button click callback",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onFoldChange",paraId:8,tocIndex:9},{value:"Default title bar right collapse expand button click callback",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onTitleSticky",paraId:8,tocIndex:9},{value:"Whether the title area is the callback when the ceiling changes.",paraId:8,tocIndex:9},{value:"(status) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bind:operateclick",paraId:8,tocIndex:9},{value:"Default title bar right operation button click callback",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bind:foldchange",paraId:8,tocIndex:9},{value:"Default title bar right collapse expand button click callback",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bind:titlesticky",paraId:8,tocIndex:9},{value:"Whether the title area is the callback when the ceiling changes.",paraId:8,tocIndex:9},{value:"(status) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"Configuration Item",paraId:10,tocIndex:10},{value:"Description",paraId:10,tocIndex:10},{value:"Type",paraId:10,tocIndex:10},{value:"Default Value",paraId:10,tocIndex:10},{value:"foldTapArea",paraId:10,tocIndex:10},{value:"Collapse behavior trigger area, optional",paraId:10,tocIndex:10},{value:"btn",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"header",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"'btn'",paraId:10,tocIndex:10},{value:"Name",paraId:11,tocIndex:11},{value:"Description",paraId:11,tocIndex:11},{value:"Default Slot",paraId:11,tocIndex:11},{value:"Card Content",paraId:11,tocIndex:11},{value:"headerTitle",paraId:11,tocIndex:11},{value:"Custom Title Bar Left Header",paraId:11,tocIndex:11},{value:"headerRight",paraId:11,tocIndex:11},{value:"Customize the right content of the title bar",paraId:11,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:12,tocIndex:13},{value:"Variable name",paraId:13,tocIndex:13},{value:"Light Mode Default",paraId:13,tocIndex:13},{value:"Dark Mode Default",paraId:13,tocIndex:13},{value:"Remarks",paraId:13,tocIndex:13},{value:"--ant-card-bg",paraId:13,tocIndex:13},{value:"#ffffff",paraId:13,tocIndex:13},{value:"#1a1a1a",paraId:13,tocIndex:13},{value:"Card background color",paraId:13,tocIndex:13},{value:"--ant-card-header-title-color",paraId:13,tocIndex:13},{value:"#333333",paraId:13,tocIndex:13},{value:"#c5cad1",paraId:13,tocIndex:13},{value:"Card head title color",paraId:13,tocIndex:13},{value:"--ant-card-header-link-color",paraId:13,tocIndex:13},{value:"#999999",paraId:13,tocIndex:13},{value:"#616161",paraId:13,tocIndex:13},{value:"Card Head Link Color",paraId:13,tocIndex:13},{value:"--ant-card-fold-btn-color",paraId:13,tocIndex:13},{value:"#1677ff",paraId:13,tocIndex:13},{value:"#3086ff",paraId:13,tocIndex:13},{value:"Card Fold Button Color",paraId:13,tocIndex:13}]}}]);
