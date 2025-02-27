"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5505],{82478:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),t=a(30021),I={"src-tab-bar-demo-tabbar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,69291))})),asset:{type:"BLOCK",id:"src-tab-bar-demo-tabbar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},48429:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(30021);const t=[{value:"Used to switch between different pages.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-tab-bar": "antd-mini/es/TabBar/index"
#endif
#if WECHAT
  "ant-tab-bar": "antd-mini/TabBar/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-tab-bar items="{{tabs}}" />
<ant-tab-bar items="{{tabs}}" activeStyle="color:red;" />
#if ALIPAY
<ant-tab-bar items="{{tabs}}" current="{{current}}" onChange="handleChange" />
#endif
#if WECHAT
<ant-tab-bar items="{{tabs}}" current="{{current}}" bindchange="handleChange" />
#endif
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: 'homr',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: 'favor',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: 'like',
      },
    ],
    current: 0,
  },
  handleChange(index) {
    console.log(index);
  },
});
`,paraId:4,tocIndex:3},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"Default Value",paraId:5,tocIndex:5},{value:"activeClassName",paraId:5,tocIndex:5},{value:"Tab activation class name",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"activeStyle",paraId:5,tocIndex:5},{value:"Tab Activation Style",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"Class Name",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"current",paraId:5,tocIndex:5},{value:"Selected Items",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"defaultCurrent",paraId:5,tocIndex:5},{value:"Initial Checked",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"0",paraId:5,tocIndex:5},{value:"icon",paraId:5,tocIndex:5},{value:"Tab icon scope slot, receiving item, index, active parameters",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"items",paraId:5,tocIndex:5},{value:"Bottom Icon Configuration",paraId:5,tocIndex:5},{value:"TabItem",paraId:6,tocIndex:5},{value:"[]",paraId:5,tocIndex:5},{value:"[]",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"Style",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"text",paraId:5,tocIndex:5},{value:"Tab bottom text scope slot, receiving item, index, active parameters",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onChange",paraId:5,tocIndex:5},{value:"Trigger callback on Tab switch",paraId:5,tocIndex:5},{value:"(index: number) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bindchange",paraId:5,tocIndex:5},{value:"Trigger callback on Tab switch",paraId:5,tocIndex:5},{value:"(index: number) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"Parameters",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"Type",paraId:7,tocIndex:6},{value:"Default Value",paraId:7,tocIndex:6},{value:"icon",paraId:7,tocIndex:6},{value:"bottom icon, support ",paraId:7,tocIndex:6},{value:"Icon",paraId:8,tocIndex:6},{value:" or picture address",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"activeIcon",paraId:7,tocIndex:6},{value:"bottom icon for active state, support ",paraId:7,tocIndex:6},{value:"Icon",paraId:9,tocIndex:6},{value:" or picture address",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"text",paraId:7,tocIndex:6},{value:"Bottom Text",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"badge",paraId:7,tocIndex:6},{value:"Logo type, see ",paraId:7,tocIndex:6},{value:"Badge",paraId:10,tocIndex:6},{value:" Components",paraId:7,tocIndex:6},{value:"object",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:11,tocIndex:8},{value:"Variable name",paraId:12,tocIndex:8},{value:"Light Mode Default",paraId:12,tocIndex:8},{value:"Dark Mode Default",paraId:12,tocIndex:8},{value:"Remarks",paraId:12,tocIndex:8},{value:"--tabbar-bg",paraId:12,tocIndex:8},{value:"#ffffff",paraId:12,tocIndex:8},{value:"#1a1a1a",paraId:12,tocIndex:8},{value:"TabBar Background Color",paraId:12,tocIndex:8},{value:"--tabbar-item-color",paraId:12,tocIndex:8},{value:"#666666",paraId:12,tocIndex:8},{value:"#808080",paraId:12,tocIndex:8},{value:"TabBar Entry Color",paraId:12,tocIndex:8},{value:"--tabbar-active-color",paraId:12,tocIndex:8},{value:"#1677ff",paraId:12,tocIndex:8},{value:"#3086ff",paraId:12,tocIndex:8},{value:"TabBar Activate Color",paraId:12,tocIndex:8}]}}]);
