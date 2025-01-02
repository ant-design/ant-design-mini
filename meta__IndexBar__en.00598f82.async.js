"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5900],{65081:function(t,a,e){e.r(a),e.d(a,{demos:function(){return I}});var n=e(67294),d=e(48980),I={"src-index-bar-demo-indexbar":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,11049))})),asset:{type:"BLOCK",id:"src-index-bar-demo-indexbar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},40687:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(48980);const d=[{value:"Side index component. Used to quickly locate a list index.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
  "ant-index-bar": "antd-mini/es/IndexBar/index"
}
`,paraId:2,tocIndex:1},{value:`<view class="base">
  <ant-list header="Basic use"></ant-list>
  <view class="indexbar">
    <ant-index-bar items="{{items}}" />
  </view>
</view>
`,paraId:3,tocIndex:3},{value:`.base {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.indexbar {
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
      return { label: u };
    }),
  },
});
`,paraId:5,tocIndex:3},{value:`#if ALIPAY
<view class="base">
  <ant-index-bar
    className="indexbar"
    items="{{items}}"
    defaultCurrent="H"
    onChange="onChange">
    <view slot-scope="props">
      <ant-list header="{{props.value.label}}">
        <ant-list-item
          a:for="{{4}}"
          a:for-item="itemX">
          {{props.value.label}}-{{itemX}}
        </ant-list-item>
      </ant-list>
    </view>
  </ant-index-bar>
</view>
#endif
#if WECHAT
\u56E0\u5FAE\u4FE1\u4E0D\u652F\u6301\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u6682\u4E0D\u652F\u6301\u6B64\u7528\u6CD5
#endif
`,paraId:6,tocIndex:4},{value:`#if ALIPAY .base {
  width: 100%;
  height: 100vh;
}
.indexbar {
  position: fixed;
  right: 10px;
  top: 20vh;
}
# endif #if WECHAT Because WeChat does not support scope slots, this usage is temporarily not supported# endif;
`,paraId:7,tocIndex:4},{value:`#if ALIPAY
Page({
  data: {
    items: [],
  },
  onLoad() {
    this.setData({
      items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
        return { label: u };
      }),
    });
  },
});
#endif
#if WECHAT
\u56E0\u5FAE\u4FE1\u4E0D\u652F\u6301\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u6682\u4E0D\u652F\u6301\u6B64\u7528\u6CD5
#endif
`,paraId:8,tocIndex:4},{value:"Reference below ",paraId:9,tocIndex:5},{value:"Demo Code",paraId:10,tocIndex:5},{value:" implementation in.",paraId:9,tocIndex:5},{value:"Property",paraId:11,tocIndex:7},{value:"Description",paraId:11,tocIndex:7},{value:"Type",paraId:11,tocIndex:7},{value:"Default Value",paraId:11,tocIndex:7},{value:"activeClassName",paraId:11,tocIndex:7},{value:"Style when index is active",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"className",paraId:11,tocIndex:7},{value:"Class Name",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"current",paraId:11,tocIndex:7},{value:"Index value",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"defaultCurrent",paraId:11,tocIndex:7},{value:"Default Index",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"labelPreview",paraId:11,tocIndex:7},{value:"Index preview content, receiving value and index",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"items",paraId:11,tocIndex:7},{value:"Index Array",paraId:11,tocIndex:7},{value:"Item",paraId:12,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"style",paraId:11,tocIndex:7},{value:"Style",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"size",paraId:11,tocIndex:7},{value:"Dimensions of the index (width and height in px)",paraId:11,tocIndex:7},{value:"number",paraId:11,tocIndex:7},{value:"16",paraId:11,tocIndex:7},{value:"vibrate",paraId:11,tocIndex:7},{value:"Whether it vibrates when the index changes",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"true",paraId:11,tocIndex:7},{value:"#if ALIPAY onChange",paraId:11,tocIndex:7},{value:"Callback when index changes",paraId:11,tocIndex:7},{value:"(value: ",paraId:11,tocIndex:7},{value:"Item",paraId:13,tocIndex:7},{value:", index: number) => void",paraId:11,tocIndex:7},{value:"#if WECHAT bindchange",paraId:11,tocIndex:7},{value:"Callback when index changes",paraId:11,tocIndex:7},{value:"(value: ",paraId:11,tocIndex:7},{value:"Item",paraId:14,tocIndex:7},{value:", index: number) => void",paraId:11,tocIndex:7},{value:"Property",paraId:15,tocIndex:8},{value:"Description",paraId:15,tocIndex:8},{value:"Type",paraId:15,tocIndex:8},{value:"Default Value",paraId:15,tocIndex:8},{value:"label",paraId:15,tocIndex:8},{value:"Index ID",paraId:15,tocIndex:8},{value:"string",paraId:15,tocIndex:8},{value:"-",paraId:15,tocIndex:8},{value:"disablePreview",paraId:15,tocIndex:8},{value:"Disable preview effect when index is triggered",paraId:15,tocIndex:8},{value:"boolean",paraId:15,tocIndex:8},{value:"-",paraId:15,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:16,tocIndex:10},{value:"Variable name",paraId:17,tocIndex:10},{value:"Default Value",paraId:17,tocIndex:10},{value:"Dark Mode Default",paraId:17,tocIndex:10},{value:"Remarks",paraId:17,tocIndex:10},{value:"--index-bar-tip-background-color",paraId:17,tocIndex:10},{value:"#cccccc",paraId:17,tocIndex:10},{value:"#474747",paraId:17,tocIndex:10},{value:"Index bar prompt background color",paraId:17,tocIndex:10},{value:"--index-bar-text-color",paraId:17,tocIndex:10},{value:"#ffffff",paraId:17,tocIndex:10},{value:"#ffffff",paraId:17,tocIndex:10},{value:"Index column text color",paraId:17,tocIndex:10},{value:"--index-bar-assist-color",paraId:17,tocIndex:10},{value:"#999999",paraId:17,tocIndex:10},{value:"#616161",paraId:17,tocIndex:10},{value:"Index Bar Secondary Text Color",paraId:17,tocIndex:10},{value:"--index-bar-active-color",paraId:17,tocIndex:10},{value:"#1677ff",paraId:17,tocIndex:10},{value:"#3086ff",paraId:17,tocIndex:10},{value:"Index Bar Activation Color",paraId:17,tocIndex:10}]}}]);
