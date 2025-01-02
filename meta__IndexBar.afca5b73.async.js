"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4616],{17123:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(20934),I={"src-index-bar-demo-indexbar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,11049))})),asset:{type:"BLOCK",id:"src-index-bar-demo-indexbar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},80510:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(20934);const d=[{value:"\u4FA7\u8FB9\u7D22\u5F15\u7EC4\u4EF6\u3002\u7528\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u5217\u8868\u7D22\u5F15\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
  "ant-index-bar": "antd-mini/es/IndexBar/index"
}
`,paraId:2,tocIndex:1},{value:`<view class="base">
  <ant-list header="\u57FA\u672C\u4F7F\u7528"></ant-list>
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
#endif #if WECHAT \u56E0\u5FAE\u4FE1\u4E0D\u652F\u6301\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u6682\u4E0D\u652F\u6301\u6B64\u7528\u6CD5 #endif;
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
`,paraId:8,tocIndex:4},{value:"\u53C2\u8003\u4E0B\u9762 ",paraId:9,tocIndex:5},{value:"Demo \u4EE3\u7801",paraId:10,tocIndex:5},{value:" \u4E2D\u7684\u5B9E\u73B0\u3002",paraId:9,tocIndex:5},{value:"\u5C5E\u6027",paraId:11,tocIndex:7},{value:"\u8BF4\u660E",paraId:11,tocIndex:7},{value:"\u7C7B\u578B",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:7},{value:"activeClassName",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u6FC0\u6D3B\u65F6\u7684\u6837\u5F0F",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"className",paraId:11,tocIndex:7},{value:"\u7C7B\u540D",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"current",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u503C",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"defaultCurrent",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u7D22\u5F15",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"labelPreview",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u9884\u89C8\u5185\u5BB9\uFF0C\u63A5\u6536 value \u548C index",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"items",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u6570\u7EC4",paraId:11,tocIndex:7},{value:"Item",paraId:12,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"style",paraId:11,tocIndex:7},{value:"\u6837\u5F0F",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"size",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u7684\u5C3A\u5BF8\uFF08\u5BBD\u9AD8\uFF0C\u5355\u4F4D px\uFF09",paraId:11,tocIndex:7},{value:"number",paraId:11,tocIndex:7},{value:"16",paraId:11,tocIndex:7},{value:"vibrate",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u6539\u53D8\u65F6\u662F\u5426\u9707\u52A8",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"true",paraId:11,tocIndex:7},{value:"#if ALIPAY onChange",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(value: ",paraId:11,tocIndex:7},{value:"Item",paraId:13,tocIndex:7},{value:", index: number) => void",paraId:11,tocIndex:7},{value:"#if WECHAT bindchange",paraId:11,tocIndex:7},{value:"\u7D22\u5F15\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(value: ",paraId:11,tocIndex:7},{value:"Item",paraId:14,tocIndex:7},{value:", index: number) => void",paraId:11,tocIndex:7},{value:"\u5C5E\u6027",paraId:15,tocIndex:8},{value:"\u8BF4\u660E",paraId:15,tocIndex:8},{value:"\u7C7B\u578B",paraId:15,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:8},{value:"label",paraId:15,tocIndex:8},{value:"\u7D22\u5F15\u6807\u8BC6",paraId:15,tocIndex:8},{value:"string",paraId:15,tocIndex:8},{value:"-",paraId:15,tocIndex:8},{value:"disablePreview",paraId:15,tocIndex:8},{value:"\u7981\u7528\u7D22\u5F15\u89E6\u53D1\u65F6\u7684\u9884\u89C8\u6548\u679C",paraId:15,tocIndex:8},{value:"boolean",paraId:15,tocIndex:8},{value:"-",paraId:15,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:16,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:17,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:17,tocIndex:10},{value:"\u5907\u6CE8",paraId:17,tocIndex:10},{value:"--index-bar-tip-background-color",paraId:17,tocIndex:10},{value:"#cccccc",paraId:17,tocIndex:10},{value:"#474747",paraId:17,tocIndex:10},{value:"\u7D22\u5F15\u680F\u63D0\u793A\u80CC\u666F\u989C\u8272",paraId:17,tocIndex:10},{value:"--index-bar-text-color",paraId:17,tocIndex:10},{value:"#ffffff",paraId:17,tocIndex:10},{value:"#ffffff",paraId:17,tocIndex:10},{value:"\u7D22\u5F15\u680F\u6587\u672C\u989C\u8272",paraId:17,tocIndex:10},{value:"--index-bar-assist-color",paraId:17,tocIndex:10},{value:"#999999",paraId:17,tocIndex:10},{value:"#616161",paraId:17,tocIndex:10},{value:"\u7D22\u5F15\u680F\u8F85\u52A9\u6587\u672C\u989C\u8272",paraId:17,tocIndex:10},{value:"--index-bar-active-color",paraId:17,tocIndex:10},{value:"#1677ff",paraId:17,tocIndex:10},{value:"#3086ff",paraId:17,tocIndex:10},{value:"\u7D22\u5F15\u680F\u6FC0\u6D3B\u989C\u8272",paraId:17,tocIndex:10}]}}]);
