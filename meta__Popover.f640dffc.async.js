"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7503],{99789:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),t=a(89035),d={"src-popover-demo-popover":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,53184))})),asset:{type:"BLOCK",id:"src-popover-demo-popover",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},63492:function(o,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(89035);const t=[{value:"\u70B9\u51FB\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u83DC\u5355\u3002\u7528\u4E8E\u5BFC\u822A\u529F\u80FD\u7684\u6C14\u6CE1\u83DC\u5355\u5524\u8D77\uFF0C\u901A\u5E38\u7528\u4E8E\u6536\u7EB3\u4F4E\u9891\u4F7F\u7528\u7684\u529F\u80FD\u3002\u8BE5\u529F\u80FD\u53EA\u80FD\u901A\u8FC7\u5BFC\u822A\u680F\u4E0A\u7684\u56FE\u6807\u6FC0\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-popover": "antd-mini/es/Popover/index"
#endif
#if WECHAT
  "ant-popover": "antd-mini/Popover/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<popover
  content="simple tips"
  placement="top-left"
  showCloseIcon="{{ true }}"
  style="display: inline-block">
  <ant-button
    size="small"
    inline>
    \u70B9\u6211
  </ant-button>
</popover>
`,paraId:3,tocIndex:3},{value:`<popover
  content="\u8FD9\u91CC\u662F\u4E00\u4E2A\u63D0\u793A\u6587\u6848\u5F88\u957F\u7684Tips\uFF0C\u914C\u60C5\u4F7F\u7528\u6587\u6848\u3002\u5355\u4E00Tips\u6700\u591A\u53EF\u5BB9\u7EB32\u884C\u6587\u6848\u8FD9\u91CC\u662F\u4E00\u4E2A\u63D0\u793A\u6587\u6848\u5F88\u957F\u7684Tips\uFF0C\u914C\u60C5\u4F7F\u7528\u6587\u6848\u3002\u5355\u4E00Tips\u6700\u591A\u53EF\u5BB9\u7EB32\u884C\u6587\u6848\u2026"
  placement="top"
  actionText="operation"
  imageUrl="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*tLCBTqxataIAAAAAAAAAAAAADkqGAQ/original"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapAction="onTapAction"
#endif
#if WECHAT
  bind:visiblechange="onVisibleChange"
  bind:tapaction="onTapAction"
#endif
  >
  <ant-button>\u70B9\u6211</ant-button>
</popover>
`,paraId:4,tocIndex:4},{value:`<popover
  content="red"
  color="red">
  <ant-button style="margin-right: 24rpx;" inline type="primary">\u81EA\u5B9A\u4E49\u989C\u8272</ant-button>
</popover>
`,paraId:5,tocIndex:6},{value:`<popover content="left & right slots">
  <ant-button inline style="margin-right: 24rpx;">\u63D2\u69FD</ant-button>
  <icon slot="leftContent" style="font-size: 48rpx; margin-right: 24rpx;" type="FaceRecognitionOutline" />
  <icon slot="rightContent" style="font-size: 48rpx; margin-left: 24rpx;" type="FaceRecognitionOutline" />
</popover>
`,paraId:6,tocIndex:7},{value:"\u53EF\u9009 ",paraId:7,tocIndex:8},{value:"top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"top-right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"top-left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom-left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom-right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left-top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left-bottom",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right-top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right-bottom",paraId:7,tocIndex:8},{value:`<popover placement="top-right">
  <ant-button size="small" inline>\u70B9\u6211</ant-button>
  <view slot="content" />
</popover>
`,paraId:8,tocIndex:8},{value:`<view>
  <popover
    content="prompt"
    placement="right"
    showMask="{{ false }}"
    visible="{{ visible }}"
    style="display: inline-block">
    <text>\u70B9\u51FB\u6309\u94AE\u4FEE\u6539visible</text>
  </popover>
</view>
<ant-button
  size="small"
  inline
  style="margin-top: 8px"
#if ALIPAY
  onTap="handleVisibleChange"
#endif
#if WECHAT
  bind:tap="handleVisibleChange"
#endif
>
  \u66F4\u6539visible
</ant-button>
`,paraId:9,tocIndex:9},{value:`Page({
  data: { visible: false },
  handleVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
`,paraId:10,tocIndex:9},{value:"\u5C5E\u6027",paraId:11,tocIndex:11},{value:"\u8BF4\u660E",paraId:11,tocIndex:11},{value:"\u7C7B\u578B",paraId:11,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:11},{value:"autoAdjustOverflow",paraId:11,tocIndex:11},{value:"\u6C14\u6CE1\u88AB\u906E\u6321\u65F6\u7684\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"true",paraId:11,tocIndex:11},{value:"className",paraId:11,tocIndex:11},{value:"\u7C7B\u540D",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"color",paraId:11,tocIndex:11},{value:"\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"contentClassName",paraId:11,tocIndex:11},{value:"content \u7C7B\u540D",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"contentStyle",paraId:11,tocIndex:11},{value:"content \u6837\u5F0F",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"content",paraId:11,tocIndex:11},{value:"\u5185\u5BB9",paraId:11,tocIndex:11},{value:"string | slot",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"defaultVisible",paraId:11,tocIndex:11},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"false",paraId:11,tocIndex:11},{value:"destroyOnClose",paraId:11,tocIndex:11},{value:"\u4E0D\u53EF\u89C1\u65F6\u662F\u5426\u5378\u8F7D\u5185\u5BB9",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"false",paraId:11,tocIndex:11},{value:"maskClassName",paraId:11,tocIndex:11},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"maskStyle",paraId:11,tocIndex:11},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"placement",paraId:11,tocIndex:11},{value:"\u6C14\u6CE1\u6846\u4F4D\u7F6E\uFF0C\u53EF\u9009 ",paraId:11,tocIndex:11},{value:"top",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"top-right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"top-left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom-left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom-right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left-top",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left-bottom",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"right-top",paraId:11,tocIndex:11},{value:" \u6216 ",paraId:11,tocIndex:11},{value:"right-bottom",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"top",paraId:11,tocIndex:11},{value:"showMask",paraId:11,tocIndex:11},{value:"\u662F\u5426\u5C55\u793A\u8499\u5C42\uFF0C\u4E3A true \u65F6\u70B9\u51FB\u7A7A\u767D\u5904\u53EF\u5173\u95ED Popover",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"true",paraId:11,tocIndex:11},{value:"style",paraId:11,tocIndex:11},{value:"\u6837\u5F0F",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"visible",paraId:11,tocIndex:11},{value:"\u662F\u5426\u663E\u793A",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:11,tocIndex:11},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:11},{value:"(visible: boolean, event: ",paraId:11,tocIndex:11},{value:"Event",paraId:11,tocIndex:11},{value:") => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if ALIPAY onTapAction",paraId:11,tocIndex:11},{value:"\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:11,tocIndex:11},{value:"() => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if WECHAT bind:visiblechange",paraId:11,tocIndex:11},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:11},{value:"(visible: boolean, event: ",paraId:11,tocIndex:11},{value:"Event",paraId:11,tocIndex:11},{value:") => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if WECHAT bind:tapaction",paraId:11,tocIndex:11},{value:"\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:11,tocIndex:11},{value:"() => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:12,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u5907\u6CE8",paraId:13,tocIndex:13},{value:"--popover-color-background",paraId:13,tocIndex:13},{value:"#404040",paraId:13,tocIndex:13},{value:"#404040",paraId:13,tocIndex:13},{value:"Popover \u9ED8\u8BA4\u5E95\u8272",paraId:13,tocIndex:13},{value:"--popover-bg",paraId:13,tocIndex:13},{value:"#ffffff",paraId:13,tocIndex:13},{value:"#1a1a1a",paraId:13,tocIndex:13},{value:"Popover \u80CC\u666F\u989C\u8272",paraId:13,tocIndex:13},{value:"--popover-text-color",paraId:13,tocIndex:13},{value:"#000000",paraId:13,tocIndex:13},{value:"#000000",paraId:13,tocIndex:13},{value:"Popover \u6587\u5B57\u989C\u8272",paraId:13,tocIndex:13},{value:"--popover-inner-color",paraId:13,tocIndex:13},{value:"#ff3141",paraId:13,tocIndex:13},{value:"#ff4a58",paraId:13,tocIndex:13},{value:"Popover \u5185\u90E8\u989C\u8272",paraId:13,tocIndex:13}]}}]);
