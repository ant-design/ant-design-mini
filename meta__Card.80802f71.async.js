"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9477],{21772:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),n=a(40445),I={"src-card-demo-card":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,21738))})),asset:{type:"BLOCK",id:"src-card-demo-card",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},48990:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(40445);const n=[{value:"\u57FA\u7840\u7684\u5361\u7247\u5BB9\u5668\u3002\u5F53\u9700\u8981\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\u7B49\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528 Card \u5361\u7247\u5BB9\u5668\u4EE5\u65B9\u4FBF\u7528\u6237\u6D4F\u89C8\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
  bindoperateclick="handleLinkClick"
#endif
  title="title"
  operateText="operate"
>
  <view>
    \u6211\u662F\u5361\u7247\u5185\u5BB9
  </view>
</ant-card>
`,paraId:3,tocIndex:3},{value:`<ant-card
  divider="{{true}}"
  title="title"
  operateText="operate"
>
  <view>
    \u6807\u9898\u5185\u5BB9\u95F4\u5E26\u5206\u5272\u7EBF
  </view>
</ant-card>
`,paraId:4,tocIndex:4},{value:`<ant-card
  title="title"
  headSticky="{{true}}"
#if ALIPAY
  onTitleSticky="handleTitleSticky"
#endif
#if WECHAT
  bindtitlesticky="handleLinkClick"
#endif
>
  <view style="height: 400px">
    \u6A21\u62DF\u4E00\u4E2A\u957F\u5361\u7247\u5185\u5BB9
  </view>
</ant-card>
`,paraId:5,tocIndex:5},{value:`<ant-card
  title="title"
  needFold="{{true}}"
>
  <view>
    \u5185\u5BB9\u533A\u57DF\u53EF\u5C55\u5F00/\u6536\u8D77
  </view>
</ant-card>
`,paraId:6,tocIndex:6},{value:`<ant-card
  title="title"
  operateText="operateText"
>
  <view slot="headerRight">
    \u81EA\u5B9A\u4E49
  </view>
  <view>
    \u6211\u662F\u5361\u7247\u5185\u5BB9
  </view>
</ant-card>
`,paraId:7,tocIndex:7},{value:"\u5C5E\u6027",paraId:8,tocIndex:9},{value:"\u8BF4\u660E",paraId:8,tocIndex:9},{value:"\u7C7B\u578B",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:9},{value:"className",paraId:8,tocIndex:9},{value:"\u5BB9\u5668 className",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"config",paraId:8,tocIndex:9},{value:"\u5361\u7247\u914D\u7F6E",paraId:8,tocIndex:9},{value:"ICardConfig",paraId:9,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"title",paraId:8,tocIndex:9},{value:"\u5361\u7247\u6807\u9898",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"divider",paraId:8,tocIndex:9},{value:"\u662F\u5426\u6709\u5206\u5272\u7EBF",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"needFold",paraId:8,tocIndex:9},{value:"\u662F\u5426\u9700\u8981\u53EF\u6298\u53E0\u5361\u7247\uFF0C\u9700\u8981 operateText \u4E3A\u7A7A\uFF0C\u5426\u5219\u9700\u8981\u624B\u52A8\u8FDB\u884C\u5C55\u5F00\u6536\u8D77",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"foldStatus",paraId:8,tocIndex:9},{value:"\u662F\u5426\u6298\u53E0\uFF0C\u4F20 true \u4F1A\u5BFC\u81F4\u6536\u8D77\uFF0C\u4E0D\u7BA1 needFold \u662F\u5426\u4E3A true",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"headSticky",paraId:8,tocIndex:9},{value:"\u6807\u9898\u662F\u5426\u9700\u8981\u5438\u9876",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"stickyTransparentTitle",paraId:8,tocIndex:9},{value:"\u5438\u9876\u662F\u5426\u5728\u900F\u660E\u5934\u9875\u9762\uFF0C\u662F\u7684\u8BDD\u4F1A\u81EA\u52A8\u7B97\u900F\u660E\u5934\u9AD8\u5EA6",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"stickyTop",paraId:8,tocIndex:9},{value:"\u6807\u9898\u5438\u9876\u65F6\u8981\u5438\u5728\u8DDD\u79BB\u9876\u90E8\u591A\u5C11\u7684\u4F4D\u7F6E",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"operateText",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u6807\u9898\u680F\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE\u6587\u672C",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onOperateClick",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u6807\u9898\u680F\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onFoldChange",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u6807\u9898\u680F\u53F3\u4FA7\u6298\u53E0\u5C55\u5F00\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if ALIPAY onTitleSticky",paraId:8,tocIndex:9},{value:"title \u533A\u57DF\u662F\u5426\u5438\u9876\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:8,tocIndex:9},{value:"(status) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bindoperateclick",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u6807\u9898\u680F\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bindfoldchange",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u6807\u9898\u680F\u53F3\u4FA7\u6298\u53E0\u5C55\u5F00\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"#if WECHAT bindtitlesticky",paraId:8,tocIndex:9},{value:"title \u533A\u57DF\u662F\u5426\u5438\u9876\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:8,tocIndex:9},{value:"(status) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"\u914D\u7F6E\u9879",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"foldTapArea",paraId:10,tocIndex:10},{value:"\u6298\u53E0\u884C\u4E3A\u89E6\u53D1\u533A\u57DF\uFF0C\u53EF\u9009",paraId:10,tocIndex:10},{value:"btn",paraId:10,tocIndex:10},{value:"\u3001",paraId:10,tocIndex:10},{value:"header",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"'btn'",paraId:10,tocIndex:10},{value:"\u540D\u79F0",paraId:11,tocIndex:11},{value:"\u8BF4\u660E",paraId:11,tocIndex:11},{value:"\u9ED8\u8BA4\u63D2\u69FD",paraId:11,tocIndex:11},{value:"\u5361\u7247\u5185\u5BB9",paraId:11,tocIndex:11},{value:"headerTitle",paraId:11,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u5DE6\u4FA7\u6807\u9898",paraId:11,tocIndex:11},{value:"headerRight",paraId:11,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6807\u9898\u680F\u53F3\u4FA7\u5185\u5BB9",paraId:11,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:12,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:13,tocIndex:13},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u5907\u6CE8",paraId:13,tocIndex:13},{value:"--ant-card-bg",paraId:13,tocIndex:13},{value:"#ffffff",paraId:13,tocIndex:13},{value:"#1a1a1a",paraId:13,tocIndex:13},{value:"\u5361\u7247\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:13},{value:"--ant-card-header-title-color",paraId:13,tocIndex:13},{value:"#333333",paraId:13,tocIndex:13},{value:"#c5cad1",paraId:13,tocIndex:13},{value:"\u5361\u7247\u5934\u90E8\u6807\u9898\u989C\u8272",paraId:13,tocIndex:13},{value:"--ant-card-header-link-color",paraId:13,tocIndex:13},{value:"#999999",paraId:13,tocIndex:13},{value:"#616161",paraId:13,tocIndex:13},{value:"\u5361\u7247\u5934\u90E8\u94FE\u63A5\u989C\u8272",paraId:13,tocIndex:13},{value:"--ant-card-fold-btn-color",paraId:13,tocIndex:13},{value:"#1677ff",paraId:13,tocIndex:13},{value:"#3086ff",paraId:13,tocIndex:13},{value:"\u5361\u7247\u6298\u53E0\u6309\u94AE\u989C\u8272",paraId:13,tocIndex:13}]}}]);
