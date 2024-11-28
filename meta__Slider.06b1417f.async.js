"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5996],{96821:function(I,e,a){a.r(e),a.d(e,{demos:function(){return l}});var n=a(67294),d=a(70773),l={"src-slider-demo-slider":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,31084))})),asset:{type:"BLOCK",id:"src-slider-demo-slider",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},73770:function(I,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(70773);const d=[{value:"\u53EF\u4EE5\u901A\u8FC7\u79FB\u52A8\u6ED1\u5757\u5728\u67D0\u4E00\u8303\u56F4\u5185\u53D6\u503C\u3002\u7528\u4E8E\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u79FB\u52A8\u6ED1\u5757\u83B7\u53D6\u5355\u4E2A\u6216\u8005\u533A\u95F4\u6570\u503C\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-slider": "antd-mini/es/Slider/index"
#endif
#if WECHAT
  "ant-slider": "antd-mini/Slider/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E00\u4E2A\u6ED1\u5757\uFF0C",paraId:3,tocIndex:3},{value:"change",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u5728 slider \u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF0C ",paraId:3,tocIndex:3},{value:"afterChange",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u4E0E ",paraId:3,tocIndex:3},{value:"touchend",paraId:3,tocIndex:3},{value:" \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\u3002",paraId:3,tocIndex:3},{value:`<ant-slider
  defaultValue="{{80}}"
#if ALIPAY
  onChange="onChange"
  onAfterChange="onAfterChange"
#endif
#if WECHAT
  bind:change="onChange"
  bind:afterchange="onAfterChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  onChange(value, e) {
    console.log('slider changed:', value, e);
  },
  onAfterChange(value, e) {
    console.log('\u5F53\u524D\u503C:', value, e);
#if ALIPAY
    my.showToast({ content: 'value: ' + value });
#endif
#if WECHAT
    wx.showToast({ title: \`value: \${value.detail}\` });
#endif
  },
});
`,paraId:5,tocIndex:3},{value:`  <ant-slider defaultValue="{{80}}" disabled />
`,paraId:6,tocIndex:4},{value:"\u4F20\u5165 ",paraId:7,tocIndex:5},{value:"range",paraId:7,tocIndex:5},{value:" \u5C5E\u6027\u4E4B\u540E\uFF0C\u5C06\u652F\u6301\u53CC\u6ED1\u5757\u6A21\u5F0F\uFF0C",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" \u72B6\u6001\u503C\u7C7B\u578B\u4E5F\u5C06\u53D8\u6210\u6570\u7EC4\u3002",paraId:7,tocIndex:5},{value:`<ant-slider defaultValue="{{[20, 60]}}" range />
`,paraId:8,tocIndex:5},{value:"\u4F20\u5165 ",paraId:9,tocIndex:6},{value:"showTicks",paraId:9,tocIndex:6},{value:" \u5C5E\u6027\u663E\u793A\u523B\u5EA6\uFF0C\u4F20\u5165 ",paraId:9,tocIndex:6},{value:"showNumber",paraId:9,tocIndex:6},{value:" \u5C55\u793A\u523B\u5EA6\u4E0A\u7684\u6570\u636E\u3002",paraId:9,tocIndex:6},{value:`<ant-slider defaultValue="{{80}}" step="{{20}}" showTicks showNumber />
`,paraId:10,tocIndex:6},{value:"\u4F20\u5165 ",paraId:11,tocIndex:7},{value:"showTooltip",paraId:11,tocIndex:7},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5728\u62D6\u52A8\u65F6\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u3002",paraId:11,tocIndex:7},{value:`<ant-slider defaultValue="{{80}}" showTooltip />
#if ALIPAY
<!-- \u652F\u6301\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u81EA\u5B9A\u4E49 -->
<ant-slider defaultValue="{{80}}" showTooltip>
  <view slot="tooltip" slot-scope="prop">\u63D2\u69FD\u81EA\u5B9A\u4E49:{{prop.value}}</view>
</ant-slider>
#endif
`,paraId:12,tocIndex:7},{value:"value",paraId:13,tocIndex:8},{value:" \u5C5E\u6027\u548C ",paraId:13,tocIndex:8},{value:"change",paraId:13,tocIndex:8},{value:" \u4E8B\u4EF6\uFF0C\u914D\u5408\u53EF\u4EE5\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002\u8FD9\u91CC\u7684\u4F8B\u5B50\u4E2D\u901A\u8FC7 ",paraId:13,tocIndex:8},{value:"ant-stepper",paraId:13,tocIndex:8},{value:" \u7EC4\u4EF6\u6539\u53D8 ",paraId:13,tocIndex:8},{value:"value",paraId:13,tocIndex:8},{value:" \u72B6\u6001\uFF0C",paraId:13,tocIndex:8},{value:"ant-slider",paraId:13,tocIndex:8},{value:" \u7EC4\u4EF6 ",paraId:13,tocIndex:8},{value:"value",paraId:13,tocIndex:8},{value:" \u72B6\u6001\u4E5F\u80FD\u4E00\u8D77\u53D8\u5316\u3002",paraId:13,tocIndex:8},{value:`<ant-slider
  min="{{0}}"
  max="{{100}}"
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
<ant-stepper
  min="{{0}}"
  max="{{100}}"
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
`,paraId:14,tocIndex:8},{value:`Page({
  data: {
    value: 80,
  },
  handleChange(value, e) {
    console.log('slider changed:', value, e);
#if ALIPAY
    this.setData({
      value,
    });
#endif
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
  },
});
`,paraId:15,tocIndex:8},{value:"activeLineStyle",paraId:16,tocIndex:9},{value:"\u3001",paraId:16,tocIndex:9},{value:"activeDotStyle",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002",paraId:16,tocIndex:9},{value:`<ant-slider
  defaultValue="{{80}}"
  step="{{20}}"
  showTooltip
  showTicks
  showNumber
  activeLineStyle="background-color: #ff8f1f"
  activeDotStyle="background-color: red"
>
#if WECHAT
  <!-- \u5FAE\u4FE1\u6682\u65F6\u4E0D\u652F\u6301 slot -->
#endif
#if ALIPAY
  <text
    slot="tick"
    slot-scope="props"
    >{{props.value}}\xB0C</text
  >
  <text
    slot="tooltip"
    slot-scope="props"
    >{{props.value}}\xB0C</text
  >

  <view slot="slider">
    <view class="custom-slider-handler">
      <ant-icon
        type="SmileOutline"
        style="color: #ff8f1f" />
    </view>
  </view>
#endif
</ant-slider>
`,paraId:17,tocIndex:9},{value:"\u5C5E\u6027",paraId:18,tocIndex:11},{value:"\u8BF4\u660E",paraId:18,tocIndex:11},{value:"\u7C7B\u578B",paraId:18,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:11},{value:"activeDotClassName",paraId:18,tocIndex:11},{value:"\u9009\u4E2D\u5C0F\u5706\u70B9\u7684\u7C7B\u540D",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeLineClassName",paraId:18,tocIndex:11},{value:"\u9009\u4E2D\u7EBF\u6761\u7684\u6837\u5F0F",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeDotStyle",paraId:18,tocIndex:11},{value:"\u9009\u4E2D\u5C0F\u5706\u70B9\u7684\u7C7B\u578B",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeLineStyle",paraId:18,tocIndex:11},{value:"\u9009\u4E2D\u7EBF\u6761\u7684\u6837\u5F0F",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"className",paraId:18,tocIndex:11},{value:"\u7C7B\u540D",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"defaultValue",paraId:18,tocIndex:11},{value:"\u521D\u59CB\u503C",paraId:18,tocIndex:11},{value:"number | [number, number]",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"disabled",paraId:18,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"max",paraId:18,tocIndex:11},{value:"\u6700\u5927\u503C",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"100",paraId:18,tocIndex:11},{value:"min",paraId:18,tocIndex:11},{value:"\u6700\u5C0F\u503C",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"0",paraId:18,tocIndex:11},{value:"range",paraId:18,tocIndex:11},{value:"\u662F\u5426\u662F\u53CC\u6ED1\u5757",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"showNumber",paraId:18,tocIndex:11},{value:"\u662F\u5426\u5C55\u793A\u523B\u5EA6\u4E0A\u7684\u6570\u636E",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"step",paraId:18,tocIndex:11},{value:"\u6B65\u8DDD\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"1",paraId:18,tocIndex:11},{value:"style",paraId:18,tocIndex:11},{value:"\u6837\u5F0F",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"showTicks",paraId:18,tocIndex:11},{value:"\u662F\u5426\u663E\u793A\u523B\u5EA6",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"showTooltip",paraId:18,tocIndex:11},{value:"\u662F\u5426\u5728\u62D6\u52A8\u65F6\u663E\u793A\u60AC\u6D6E\u63D0\u793A\uFF0C\u652F\u6301\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u81EA\u5B9A\u4E49",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"slider",paraId:18,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6ED1\u5757",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"tick",paraId:18,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u523B\u5EA6",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"tooltip",paraId:18,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u62D6\u52A8\u65F6\u663E\u793A\u60AC\u6D6E\u63D0\u793A",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"value",paraId:18,tocIndex:11},{value:"\u5F53\u524D\u503C",paraId:18,tocIndex:11},{value:"number | [number, number]",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if ALIPAY onChange",paraId:18,tocIndex:11},{value:"slider \u503C\u6539\u53D8\u65F6\u89E6\u53D1",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if ALIPAY onAfterChange",paraId:18,tocIndex:11},{value:"\u4E0E touchend \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if WECHAT bind:change",paraId:18,tocIndex:11},{value:"slider \u503C\u6539\u53D8\u65F6\u89E6\u53D1",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if WECHAT bind:afterchange",paraId:18,tocIndex:11},{value:"\u4E0E touchend \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:19,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:20,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:20,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:20,tocIndex:13},{value:"\u5907\u6CE8",paraId:20,tocIndex:13},{value:"--slide-block-shadow",paraId:20,tocIndex:13},{value:"rgba(0, 0, 0, 0.12)",paraId:20,tocIndex:13},{value:"rgba(0, 0, 0, 0.12)",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u5757\u9634\u5F71",paraId:20,tocIndex:13},{value:"--slider-default-primary-color",paraId:20,tocIndex:13},{value:"#1677ff",paraId:20,tocIndex:13},{value:"#3086ff",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u9ED8\u8BA4\u4E3B\u8272",paraId:20,tocIndex:13},{value:"--slider-track-bg",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"#1a1a1a",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u8F68\u9053\u80CC\u666F\u989C\u8272",paraId:20,tocIndex:13},{value:"--slider-fill-bg",paraId:20,tocIndex:13},{value:"#f5f5f5",paraId:20,tocIndex:13},{value:"#121212",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u586B\u5145\u80CC\u666F\u989C\u8272",paraId:20,tocIndex:13},{value:"--slider-number-color",paraId:20,tocIndex:13},{value:"#333333",paraId:20,tocIndex:13},{value:"#c5cad1",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u6570\u5B57\u989C\u8272",paraId:20,tocIndex:13},{value:"--slide-block-bg",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u5757\u80CC\u666F\u989C\u8272",paraId:20,tocIndex:13},{value:"--slide-back-bg",paraId:20,tocIndex:13},{value:"#f5f5f5",paraId:20,tocIndex:13},{value:"#121212",paraId:20,tocIndex:13},{value:"\u6ED1\u5757\u80CC\u666F\u989C\u8272",paraId:20,tocIndex:13}]}}]);
