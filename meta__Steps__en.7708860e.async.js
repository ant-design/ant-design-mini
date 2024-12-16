"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2275],{52578:function(d,a,e){e.r(a),e.d(a,{demos:function(){return r}});var n=e(67294),t=e(45864),r={"src-steps-demo-steps":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,57737))})),asset:{type:"BLOCK",id:"src-steps-demo-steps",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},87677:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(45864);const t=[{value:"A navigation bar that guides the user through the process. When the task is complex or there is a sequential relationship, it is broken down into a series of steps to simplify the task.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-steps": "antd-mini/es/Steps/index"
#endif
#if WECHAT
  "ant-steps": "antd-mini/Steps/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"items",paraId:3,tocIndex:3},{value:" Data-driven step bar rendering.",paraId:4,tocIndex:3},{value:"current",paraId:4,tocIndex:3},{value:" Specifies the current step,",paraId:4,tocIndex:3},{value:"status",paraId:4,tocIndex:3},{value:" Specifies the status of the current step, optional ",paraId:4,tocIndex:3},{value:"finish",paraId:4,tocIndex:3},{value:" or ",paraId:4,tocIndex:3},{value:"error",paraId:4,tocIndex:3},{value:"\u3002",paraId:4,tocIndex:3},{value:`<ant-steps
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
  bindtap="onNextTap"
#endif
>
  <view a:if="{{current < items.length - 1}}">Next step</view>
  <view a:else>Complete</view>
</ant-button>
<ant-button
  a:if="{{current > 0}}"
#if ALIPAY
  onTap="onPrevTap"
#endif
#if WECHAT
  bindtap="onPrevTap"
#endif
  >
  Previous Step
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
`,paraId:9,tocIndex:5},{value:"Property",paraId:10,tocIndex:7},{value:"Description",paraId:10,tocIndex:7},{value:"Type",paraId:10,tocIndex:7},{value:"Default Value",paraId:10,tocIndex:7},{value:"className",paraId:10,tocIndex:7},{value:"Class Name",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"current",paraId:10,tocIndex:7},{value:"Current step",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"description",paraId:10,tocIndex:7},{value:"Custom description content rendering, receiving index and value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"direction",paraId:10,tocIndex:7},{value:"direction, optional ",paraId:10,tocIndex:7},{value:"horizontal",paraId:10,tocIndex:7},{value:" or ",paraId:10,tocIndex:7},{value:"vertical",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"horizontal",paraId:10,tocIndex:7},{value:"icon",paraId:10,tocIndex:7},{value:"Custom icon rendering, receiving index and value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"items",paraId:10,tocIndex:7},{value:"Show Item",paraId:10,tocIndex:7},{value:"Item",paraId:11,tocIndex:7},{value:"[]",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"status",paraId:10,tocIndex:7},{value:"Specifies the status of the current step, optional ",paraId:10,tocIndex:7},{value:"finish",paraId:10,tocIndex:7},{value:" or ",paraId:10,tocIndex:7},{value:"error",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"finish",paraId:10,tocIndex:7},{value:"style",paraId:10,tocIndex:7},{value:"Style",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"title",paraId:10,tocIndex:7},{value:"Custom title rendering, receiving index and value",paraId:10,tocIndex:7},{value:"slot",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"Property",paraId:12,tocIndex:8},{value:"Description",paraId:12,tocIndex:8},{value:"Type",paraId:12,tocIndex:8},{value:"Default Value",paraId:12,tocIndex:8},{value:"description",paraId:12,tocIndex:8},{value:"Content",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"title",paraId:12,tocIndex:8},{value:"Title",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:13,tocIndex:10},{value:"Variable name",paraId:14,tocIndex:10},{value:"Default Value",paraId:14,tocIndex:10},{value:"Dark Mode Default",paraId:14,tocIndex:10},{value:"Remarks",paraId:14,tocIndex:10},{value:"--steps-non-active-bg",paraId:14,tocIndex:10},{value:"#e5e5e5",paraId:14,tocIndex:10},{value:"#444444",paraId:14,tocIndex:10},{value:"Inactive Step Background Color",paraId:14,tocIndex:10},{value:"--steps-title-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"Step Title Color",paraId:14,tocIndex:10},{value:"--steps-desc-color",paraId:14,tocIndex:10},{value:"#999999",paraId:14,tocIndex:10},{value:"#616161",paraId:14,tocIndex:10},{value:"Step Description Color",paraId:14,tocIndex:10},{value:"--steps-default-bg",paraId:14,tocIndex:10},{value:"#1677ff",paraId:14,tocIndex:10},{value:"#3086ff",paraId:14,tocIndex:10},{value:"Default Step Background Color",paraId:14,tocIndex:10},{value:"--steps-finish-bg",paraId:14,tocIndex:10},{value:"#ff3141",paraId:14,tocIndex:10},{value:"#ff4a58",paraId:14,tocIndex:10},{value:"Complete Steps Background Color",paraId:14,tocIndex:10}]}}]);
