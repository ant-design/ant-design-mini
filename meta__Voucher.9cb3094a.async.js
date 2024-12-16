"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6177],{92328:function(I,e,a){a.r(e),a.d(e,{demos:function(){return t}});var d=a(67294),n=a(47695),t={"src-voucher-demo-voucher":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,74281))})),asset:{type:"BLOCK",id:"src-voucher-demo-voucher",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},2798:function(I,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(47695);const n=[{value:"\u901A\u7528\u4F18\u60E0\u5238\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-voucher": "antd-mini/es/Voucher/index"
#endif
#if WECHAT
  "ant-voucher": "antd-mini/Voucher/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-voucher
#if ALIPAY
  onTap="onTap"
#endif
#if WECHAT
  bindtap="onTap"
#endif
  dataSource="{{dataSource}}"
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    dataSource: [
      {
        title: 'title',
        desc: 'subTitle',
        money: '50',
        threshold: '500 to use',
        actionAreaInfo: {
          disabled: false,
          text: 'to exchange',
        },
      },
    ],
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-voucher
  size="small"
  dataSource="{{dataSource}}"
/>
`,paraId:5,tocIndex:4},{value:`<ant-voucher
  direction="horizontal"
  dataSource="{{dataSource}}"
/>
`,paraId:6,tocIndex:5},{value:`<ant-voucher
  direction="vertical"
  dataSource="{{dataSource}}"
/>
`,paraId:7,tocIndex:6},{value:`<ant-voucher
  direction="multipleColumn"
  dataSource="{{dataSource}}"
/>
`,paraId:8,tocIndex:7},{value:`<voucher
  size="small"
  dataSource="{{dataSource}}"
>
  <view
    slot="voucher-action-area"
    class="ant-voucher-slot-demo"
  >
    \u5DF2\u8FC7\u671F
  </view>
</voucher>
`,paraId:9,tocIndex:8},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u5FC5\u586B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"\u8BF4\u660E",paraId:10,tocIndex:10},{value:"className",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"\u5426",paraId:10,tocIndex:10},{value:'""',paraId:10,tocIndex:10},{value:"\u5BB9\u5668 className",paraId:10,tocIndex:10},{value:"size",paraId:10,tocIndex:10},{value:"small",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"\u5426",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"\u5238\u6837\u5F0F",paraId:10,tocIndex:10},{value:"direction",paraId:10,tocIndex:10},{value:"horizontal",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"vertical",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"multipleColumn",paraId:10,tocIndex:10},{value:"\u5426",paraId:10,tocIndex:10},{value:"horizontal",paraId:10,tocIndex:10},{value:"\u591A\u5F20\u5238\u65F6\u5019\u7684\u6392\u5217\u65B9\u5F0F",paraId:10,tocIndex:10},{value:"dataSource",paraId:10,tocIndex:10},{value:"Item",paraId:11,tocIndex:10},{value:"[]",paraId:10,tocIndex:10},{value:"\u662F",paraId:10,tocIndex:10},{value:"[]",paraId:10,tocIndex:10},{value:"\u6570\u636E\u6E90",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:12,tocIndex:11},{value:"\u7C7B\u578B",paraId:12,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:11},{value:"\u8BF4\u660E",paraId:12,tocIndex:11},{value:"title",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"\u65E0",paraId:12,tocIndex:11},{value:"\u5238\u7684\u6807\u9898",paraId:12,tocIndex:11},{value:"desc",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"\u65E0",paraId:12,tocIndex:11},{value:"\u5238\u7684\u63CF\u8FF0",paraId:12,tocIndex:11},{value:"money",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"\u65E0",paraId:12,tocIndex:11},{value:"\u5238\u7684\u91D1\u989D\u6587\u6848",paraId:12,tocIndex:11},{value:"moneyUnit",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"'\u5143'",paraId:12,tocIndex:11},{value:"\u5238\u7684\u5355\u4F4D\u6587\u6848\uFF0C\u4F8B\u5982\uFF1Axx \u5143\u3001xx \u6298",paraId:12,tocIndex:11},{value:"threshold",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"\u65E0",paraId:12,tocIndex:11},{value:"\u5238\u7684\u9650\u5236\u6587\u6848",paraId:12,tocIndex:11},{value:"disabled",paraId:12,tocIndex:11},{value:"bool",paraId:12,tocIndex:11},{value:"false",paraId:12,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:12,tocIndex:11},{value:"actionAreaInfo",paraId:12,tocIndex:11},{value:"[ActionAreaInfo]",paraId:12,tocIndex:11},{value:"\u65E0",paraId:12,tocIndex:11},{value:"\u884C\u52A8\u533A\u57DF",paraId:12,tocIndex:11},{value:"\u5C5E\u6027",paraId:13,tocIndex:12},{value:"\u7C7B\u578B",paraId:13,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:12},{value:"\u8BF4\u660E",paraId:13,tocIndex:12},{value:"disabled",paraId:13,tocIndex:12},{value:"bool",paraId:13,tocIndex:12},{value:"false",paraId:13,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:13,tocIndex:12},{value:"text",paraId:13,tocIndex:12},{value:"string",paraId:13,tocIndex:12},{value:"\u65E0",paraId:13,tocIndex:12},{value:"\u6309\u94AE\u6587\u6848",paraId:13,tocIndex:12},{value:"imageUrl",paraId:13,tocIndex:12},{value:"string",paraId:13,tocIndex:12},{value:"\u65E0",paraId:13,tocIndex:12},{value:"\u5B8C\u6210\u6001\u7684\u56FE\u7247\uFF0C\u6709\u56FE\u7247\u65F6\u4E0D\u5C55\u793A\u6309\u94AE",paraId:13,tocIndex:12},{value:"\u4E8B\u4EF6\u540D",paraId:14,tocIndex:13},{value:"\u8BF4\u660E",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"#if ALIPAY onBtnTap",paraId:14,tocIndex:13},{value:"\u70B9\u51FB\u6309\u94AE\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if ALIPAY onVoucherTap",paraId:14,tocIndex:13},{value:"\u70B9\u51FB\u5361\u7247\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if WECHAT bindbtntap",paraId:14,tocIndex:13},{value:"\u70B9\u51FB\u6309\u94AE\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if WECHAT bindvouchertap",paraId:14,tocIndex:13},{value:"\u70B9\u51FB\u5361\u7247\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"\u540D\u79F0",paraId:15,tocIndex:14},{value:"\u8BF4\u660E",paraId:15,tocIndex:14},{value:"voucher-action-area",paraId:15,tocIndex:14},{value:"\u884C\u52A8\u533A\u57DF",paraId:15,tocIndex:14},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:16,tocIndex:16},{value:"\u53D8\u91CF\u540D",paraId:17,tocIndex:16},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:17,tocIndex:16},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:17,tocIndex:16},{value:"\u5907\u6CE8",paraId:17,tocIndex:16},{value:"--voucher-background-image-start",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0)",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0)",paraId:17,tocIndex:16},{value:"\u5238\u80CC\u666F\u56FE\u5F00\u59CB\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-background-image-end",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"\u5238\u80CC\u666F\u56FE\u7ED3\u675F\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-multi-money-color",paraId:17,tocIndex:16},{value:"#ff3b30",paraId:17,tocIndex:16},{value:"#ff3b30",paraId:17,tocIndex:16},{value:"\u591A\u4E2A\u91D1\u989D\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-threshold-color",paraId:17,tocIndex:16},{value:"#666",paraId:17,tocIndex:16},{value:"#808080",paraId:17,tocIndex:16},{value:"\u9608\u503C\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-btn-color",paraId:17,tocIndex:16},{value:"#ff3141",paraId:17,tocIndex:16},{value:"#ff4a58",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u6309\u94AE\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u80CC\u666F\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-left-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u5DE6\u4FA7\u80CC\u666F\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-left-threshold-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u5DE6\u4FA7\u9608\u503C\u80CC\u666F\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-right-color",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#fffffff",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u53F3\u4FA7\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-right-title-color",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u53F3\u4FA7\u6807\u9898\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-action-right-desc-color",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0.8)",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0.8)",paraId:17,tocIndex:16},{value:"\u64CD\u4F5C\u53F3\u4FA7\u63CF\u8FF0\u989C\u8272",paraId:17,tocIndex:16},{value:"--voucher-item-right-title-color",paraId:17,tocIndex:16},{value:"#383939",paraId:17,tocIndex:16},{value:"#383939",paraId:17,tocIndex:16},{value:"\u5238\u53F3\u4FA7\u6807\u9898\u989C\u8272 1",paraId:17,tocIndex:16},{value:"--voucher-item-right-title-color",paraId:17,tocIndex:16},{value:"#666",paraId:17,tocIndex:16},{value:"#808080",paraId:17,tocIndex:16},{value:"\u5238\u53F3\u4FA7\u6807\u9898\u989C\u8272 2",paraId:17,tocIndex:16}]}}]);
