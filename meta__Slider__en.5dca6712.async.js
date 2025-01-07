"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6665],{46387:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),d=e(78106),o={"src-slider-demo-slider":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,31084))})),asset:{type:"BLOCK",id:"src-slider-demo-slider",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},90925:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(78106);const d=[{value:"You can take values within a range by moving the slider. Used to move the slider within a certain range to obtain a single or interval value.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-slider": "antd-mini/es/Slider/index"
#endif
#if WECHAT
  "ant-slider": "antd-mini/Slider/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"By default a slider,",paraId:3,tocIndex:3},{value:"change",paraId:3,tocIndex:3},{value:" event fires when the slider value changes, ",paraId:3,tocIndex:3},{value:"afterChange",paraId:3,tocIndex:3},{value:" Events and ",paraId:3,tocIndex:3},{value:"touchend",paraId:3,tocIndex:3},{value:" The trigger timing is consistent.",paraId:3,tocIndex:3},{value:`<ant-slider
  defaultValue="{{80}}"
#if ALIPAY
  onChange="onChange"
  onAfterChange="onAfterChange"
#endif
#if WECHAT
  bindchange="onChange"
  bindafterchange="onAfterChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  onChange(value, e) {
    console.log('slider changed:', value, e);
  },
  onAfterChange(value, e) {
    console.log('Current Value:', value, e);
#if ALIPAY
    my.showToast({ content: 'value: ' + value });
#endif
#if WECHAT
    wx.showToast({ title: \`value: \${value.detail}\` });
#endif
  },
});
`,paraId:5,tocIndex:3},{value:`  <ant-slider defaultValue="{{80}}" disabled />
`,paraId:6,tocIndex:4},{value:"Incoming ",paraId:7,tocIndex:5},{value:"range",paraId:7,tocIndex:5},{value:" property, the dual slider mode is supported,",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" The status value type will also become an array.",paraId:7,tocIndex:5},{value:`<ant-slider defaultValue="{{[20, 60]}}" range />
`,paraId:8,tocIndex:5},{value:"Incoming ",paraId:9,tocIndex:6},{value:"showTicks",paraId:9,tocIndex:6},{value:" property display scale, passing in ",paraId:9,tocIndex:6},{value:"showNumber",paraId:9,tocIndex:6},{value:" Shows the data on the scale.",paraId:9,tocIndex:6},{value:`<ant-slider defaultValue="{{80}}" step="{{20}}" showTicks showNumber />
`,paraId:10,tocIndex:6},{value:"Incoming ",paraId:11,tocIndex:7},{value:"showTooltip",paraId:11,tocIndex:7},{value:" Property, you can display a hovering prompt when dragging.",paraId:11,tocIndex:7},{value:`<ant-slider defaultValue="{{80}}" showTooltip />
#if ALIPAY
<!-- \u652F\u6301\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD\u81EA\u5B9A\u4E49 -->
<ant-slider defaultValue="{{80}}" showTooltip>
  <view slot="tooltip" slot-scope="prop">Slot Customization:{{prop.value}}</view>
</ant-slider>
#endif
`,paraId:12,tocIndex:7},{value:"value",paraId:13,tocIndex:8},{value:" property and ",paraId:13,tocIndex:8},{value:"change",paraId:13,tocIndex:8},{value:" event, cooperation can achieve a controlled mode. Here's the example through ",paraId:13,tocIndex:8},{value:"ant-stepper",paraId:13,tocIndex:8},{value:" Component Change ",paraId:13,tocIndex:8},{value:"value",paraId:13,tocIndex:8},{value:" Status,",paraId:13,tocIndex:8},{value:"ant-slider",paraId:13,tocIndex:8},{value:" Components ",paraId:13,tocIndex:8},{value:"value",paraId:13,tocIndex:8},{value:" States can also change together.",paraId:13,tocIndex:8},{value:`<ant-slider
  min="{{0}}"
  max="{{100}}"
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
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
  bindchange="handleChange"
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
`,paraId:15,tocIndex:8},{value:"activeLineStyle",paraId:16,tocIndex:9},{value:"\u3001",paraId:16,tocIndex:9},{value:"activeDotStyle",paraId:16,tocIndex:9},{value:" Property to customize the style.",paraId:16,tocIndex:9},{value:`<ant-slider
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
`,paraId:17,tocIndex:9},{value:"Property",paraId:18,tocIndex:11},{value:"Description",paraId:18,tocIndex:11},{value:"Type",paraId:18,tocIndex:11},{value:"Default Value",paraId:18,tocIndex:11},{value:"activeDotClassName",paraId:18,tocIndex:11},{value:"Class name of selected dot",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeLineClassName",paraId:18,tocIndex:11},{value:"The style of the selected line",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeDotStyle",paraId:18,tocIndex:11},{value:"Select the type of dot",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"activeLineStyle",paraId:18,tocIndex:11},{value:"The style of the selected line",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"className",paraId:18,tocIndex:11},{value:"Class Name",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"defaultValue",paraId:18,tocIndex:11},{value:"Initial value",paraId:18,tocIndex:11},{value:"number | [number, number]",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"disabled",paraId:18,tocIndex:11},{value:"Disable",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"max",paraId:18,tocIndex:11},{value:"Maximum",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"100",paraId:18,tocIndex:11},{value:"min",paraId:18,tocIndex:11},{value:"Minimum",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"0",paraId:18,tocIndex:11},{value:"range",paraId:18,tocIndex:11},{value:"Whether it is a double slider",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"showNumber",paraId:18,tocIndex:11},{value:"Show data on scale",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"step",paraId:18,tocIndex:11},{value:"Step, the value must be greater than 0 and divisible by (max-min)",paraId:18,tocIndex:11},{value:"number",paraId:18,tocIndex:11},{value:"1",paraId:18,tocIndex:11},{value:"style",paraId:18,tocIndex:11},{value:"Style",paraId:18,tocIndex:11},{value:"string",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"showTicks",paraId:18,tocIndex:11},{value:"Show scale",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"showTooltip",paraId:18,tocIndex:11},{value:"Whether to display the floating prompt when dragging, support the use of scope slot customization",paraId:18,tocIndex:11},{value:"boolean",paraId:18,tocIndex:11},{value:"false",paraId:18,tocIndex:11},{value:"slider",paraId:18,tocIndex:11},{value:"Custom Slider",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"tick",paraId:18,tocIndex:11},{value:"Custom Scale",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"tooltip",paraId:18,tocIndex:11},{value:"Show hover prompt when custom drag",paraId:18,tocIndex:11},{value:"slot",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"value",paraId:18,tocIndex:11},{value:"Current Value",paraId:18,tocIndex:11},{value:"number | [number, number]",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if ALIPAY onChange",paraId:18,tocIndex:11},{value:"Triggers when the slider value changes",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if ALIPAY onAfterChange",paraId:18,tocIndex:11},{value:"Consistent with the touchend trigger timing, the current value is passed in as a parameter.",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if WECHAT bindchange",paraId:18,tocIndex:11},{value:"Triggers when the slider value changes",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"#if WECHAT bindafterchange",paraId:18,tocIndex:11},{value:"Consistent with the touchend trigger timing, the current value is passed in as a parameter.",paraId:18,tocIndex:11},{value:"(value: number | [number, number]) => void",paraId:18,tocIndex:11},{value:"-",paraId:18,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:19,tocIndex:13},{value:"Variable name",paraId:20,tocIndex:13},{value:"Default Value",paraId:20,tocIndex:13},{value:"Dark Mode Default",paraId:20,tocIndex:13},{value:"Remarks",paraId:20,tocIndex:13},{value:"--slide-block-shadow",paraId:20,tocIndex:13},{value:"rgba(0, 0, 0, 0.12)",paraId:20,tocIndex:13},{value:"rgba(0, 0, 0, 0.12)",paraId:20,tocIndex:13},{value:"Slider Block Shadow",paraId:20,tocIndex:13},{value:"--slider-default-primary-color",paraId:20,tocIndex:13},{value:"#1677ff",paraId:20,tocIndex:13},{value:"#3086ff",paraId:20,tocIndex:13},{value:"Slider default main color",paraId:20,tocIndex:13},{value:"--slider-track-bg",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"#1a1a1a",paraId:20,tocIndex:13},{value:"Slider track background color",paraId:20,tocIndex:13},{value:"--slider-fill-bg",paraId:20,tocIndex:13},{value:"#f5f5f5",paraId:20,tocIndex:13},{value:"#121212",paraId:20,tocIndex:13},{value:"Slider Fill Background Color",paraId:20,tocIndex:13},{value:"--slider-number-color",paraId:20,tocIndex:13},{value:"#333333",paraId:20,tocIndex:13},{value:"#c5cad1",paraId:20,tocIndex:13},{value:"Slider number color",paraId:20,tocIndex:13},{value:"--slide-block-bg",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"#ffffff",paraId:20,tocIndex:13},{value:"Slider block background color",paraId:20,tocIndex:13},{value:"--slide-back-bg",paraId:20,tocIndex:13},{value:"#f5f5f5",paraId:20,tocIndex:13},{value:"#121212",paraId:20,tocIndex:13},{value:"Slider Background Color",paraId:20,tocIndex:13}]}}]);
