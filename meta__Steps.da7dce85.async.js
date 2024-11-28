"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[1844],{8740:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),t=a(42684),I={"src-steps-demo-steps":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,57737))})),asset:{type:"BLOCK",id:"src-steps-demo-steps",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},15319:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(42684);const t=[{value:"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002\u5F53\u4EFB\u52A1\u590D\u6742\u6216\u8005\u5B58\u5728\u5148\u540E\u5173\u7CFB\u65F6\uFF0C\u5C06\u5176\u5206\u89E3\u6210\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u4ECE\u800C\u7B80\u5316\u4EFB\u52A1\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-steps": "antd-mini/es/Steps/index"
#endif
#if WECHAT
  "ant-steps": "antd-mini/Steps/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"items",paraId:3,tocIndex:3},{value:" \u6570\u636E\u9A71\u52A8\u6B65\u9AA4\u6761\u6E32\u67D3\u3002",paraId:4,tocIndex:3},{value:"current",paraId:4,tocIndex:3},{value:" \u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C",paraId:4,tocIndex:3},{value:"status",paraId:4,tocIndex:3},{value:" \u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 ",paraId:4,tocIndex:3},{value:"finish",paraId:4,tocIndex:3},{value:" \u6216 ",paraId:4,tocIndex:3},{value:"error",paraId:4,tocIndex:3},{value:"\u3002",paraId:4,tocIndex:3},{value:`<ant-steps
  items="{{items}}"
  current="{{1}}"
  status="error"
/>
`,paraId:5,tocIndex:3},{value:`Page({
  data: {
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
});
`,paraId:6,tocIndex:3},{value:`<ant-steps
  items="{{items}}"
  direction="vertical"
/>
`,paraId:7,tocIndex:4},{value:`<ant-steps
  items="{{items}}"
  current="{{current}}"
/>
<ant-button
  type="primary"
#if ALIPAY
  onTap="onNextTap"
#endif
#if WECHAT
  bind:tap="onNextTap"
#endif
>
  <view a:if="{{current < items.length - 1}}">\u4E0B\u4E00\u6B65</view>
  <view a:else>\u5B8C\u6210</view>
</ant-button>
<ant-button
  a:if="{{current > 0}}"
#if ALIPAY
  onTap="onPrevTap"
#endif
#if WECHAT
  bind:tap="onPrevTap"
#endif
  >
  \u4E0A\u4E00\u6B65
</ant-button>
`,paraId:8,tocIndex:5},{value:`Page({
  data: {
    current: 0,
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
  onNextTap() {
    if (this.data.current === this.data.items.length - 1) {
#if ALIPAY
      my.showToast({ content: 'Finish' })
#endif
#if WECHAT
      wx.showToast({ title: 'Finish' })
#endif
      return;
    }
    this.setData({
      current: this.data.current + 1,
    });
  },
  onPrevTap() {
    if (this.data.current === 0) {
      return;
    }
    this.setData({
      current: this.data.current - 1,
    });
  },
});
`,paraId:9,tocIndex:5},{value:"\u5C5E\u6027",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"className",paraId:10,tocIndex:7},{value:"\u7C7B\u540D",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"current",paraId:10,tocIndex:7},{value:"\u5F53\u524D\u6B65\u9AA4",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"description",paraId:10,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u5185\u5BB9\u6E32\u67D3\uFF0C\u63A5\u6536 index \u548C value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"direction",paraId:10,tocIndex:7},{value:"\u65B9\u5411\uFF0C\u53EF\u9009 ",paraId:10,tocIndex:7},{value:"horizontal",paraId:10,tocIndex:7},{value:" \u6216 ",paraId:10,tocIndex:7},{value:"vertical",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"horizontal",paraId:10,tocIndex:7},{value:"icon",paraId:10,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807\u6E32\u67D3\uFF0C\u63A5\u6536 index \u548C value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"items",paraId:10,tocIndex:7},{value:"\u5C55\u793A\u9879",paraId:10,tocIndex:7},{value:"Item",paraId:11,tocIndex:7},{value:"[]",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"status",paraId:10,tocIndex:7},{value:"\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 ",paraId:10,tocIndex:7},{value:"finish",paraId:10,tocIndex:7},{value:" \u6216 ",paraId:10,tocIndex:7},{value:"error",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"finish",paraId:10,tocIndex:7},{value:"style",paraId:10,tocIndex:7},{value:"\u6837\u5F0F",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"title",paraId:10,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6807\u9898\u6E32\u67D3\uFF0C\u63A5\u6536 index \u548C value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"\u5C5E\u6027",paraId:12,tocIndex:8},{value:"\u8BF4\u660E",paraId:12,tocIndex:8},{value:"\u7C7B\u578B",paraId:12,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:8},{value:"description",paraId:12,tocIndex:8},{value:"\u5185\u5BB9",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"title",paraId:12,tocIndex:8},{value:"\u6807\u9898",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:13,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:14,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u5907\u6CE8",paraId:14,tocIndex:10},{value:"--steps-non-active-bg",paraId:14,tocIndex:10},{value:"#e5e5e5",paraId:14,tocIndex:10},{value:"#444444",paraId:14,tocIndex:10},{value:"\u672A\u6FC0\u6D3B\u6B65\u9AA4\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10},{value:"--steps-title-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"\u6B65\u9AA4\u6807\u9898\u989C\u8272",paraId:14,tocIndex:10},{value:"--steps-desc-color",paraId:14,tocIndex:10},{value:"#999999",paraId:14,tocIndex:10},{value:"#616161",paraId:14,tocIndex:10},{value:"\u6B65\u9AA4\u63CF\u8FF0\u989C\u8272",paraId:14,tocIndex:10},{value:"--steps-default-bg",paraId:14,tocIndex:10},{value:"#1677ff",paraId:14,tocIndex:10},{value:"#3086ff",paraId:14,tocIndex:10},{value:"\u9ED8\u8BA4\u6B65\u9AA4\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10},{value:"--steps-finish-bg",paraId:14,tocIndex:10},{value:"#ff3141",paraId:14,tocIndex:10},{value:"#ff4a58",paraId:14,tocIndex:10},{value:"\u5B8C\u6210\u6B65\u9AA4\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10}]}}]);
