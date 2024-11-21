"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5267],{9953:function(t,a,e){e.r(a),e.d(a,{demos:function(){return c}});var n=e(67294),d=e(34228),c={"src-switch-demo-switch":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,50233))})),asset:{type:"BLOCK",id:"src-switch-demo-switch",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},94827:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(34228);const d=[{value:"Switch selector, compared to the native Switch, it achieves a consistent experience on iOS and Android.",paraId:0,tocIndex:0},{value:"Used when it is necessary to indicate the state of a switch or to switch between two states.",paraId:1,tocIndex:0},{value:"The difference with Checkbox is that switching Switch will directly trigger a state change, while Checkbox is usually used for state markers and needs to be used in conjunction with commit operations.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-switch": "antd-mini/es/Switch/index"
#endif
#if WECHAT
  "ant-switch": "antd-mini/Switch/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-switch
  defaultChecked="{{ true }}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bind:change="onChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  onChange(checked, e) {
    console.log(checked);
  },
});
`,paraId:5,tocIndex:3},{value:"Incoming ",paraId:6,tocIndex:4},{value:"disabled",paraId:6,tocIndex:4},{value:" property, disable the collocated gray switch button.",paraId:6,tocIndex:4},{value:`<ant-switch defaultChecked="{{ true }}" disabled="{{ true }}" />
`,paraId:7,tocIndex:4},{value:"checkedText",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"uncheckedText",paraId:8,tocIndex:5},{value:" Property, you can modify the contents when checked/unchecked.",paraId:8,tocIndex:5},{value:"color",paraId:8,tocIndex:5},{value:" property, you can color the overall button atmosphere.",paraId:8,tocIndex:5},{value:" size",paraId:8,tocIndex:5},{value:" property, the switch can be resized, support ",paraId:8,tocIndex:5},{value:"medium",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"small",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"x-small",paraId:8,tocIndex:5},{value:" Three options.",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" Property to set the loading state.",paraId:8,tocIndex:5},{value:`<ant-switch checkedText="\u5F00" uncheckedText="\u5173" />
#if ALIPAY
<!-- \u652F\u4ED8\u5B9D\u6A21\u5F0F\u4E0B\uFF0C\u652F\u6301\u63D2\u69FD\u5B9A\u5236\u9009\u4E2D/\u672AContent when selected -->
<ant-switch>
  <ant-icon type="CheckOutline" slot="checkedText" />
  <ant-icon type="CloseOutline" slot="uncheckedText" />
</ant-switch>
#endif

<ant-switch defaultChecked="{{ true }}" color="#00b578" />

<ant-switch size="medium" />

<ant-switch size="small" />

<ant-switch size="x-small" />

<ant-switch loading />
`,paraId:9,tocIndex:5},{value:"checked",paraId:10,tocIndex:6},{value:" property and ",paraId:10,tocIndex:6},{value:"change",paraId:10,tocIndex:6},{value:" Events, used in conjunction with the implementation of controlled mode.",paraId:10,tocIndex:6},{value:`<ant-switch
  checked="{{ checked }}"
  defaultChecked="{{ true }}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
<ant-button
#if ALIPAY
  onTap="handleChangeByButton"
#endif
#if WECHAT
  bind:tap="handleChangeByButton"
#endif
>
  Switch
</ant-button>
`,paraId:11,tocIndex:6},{value:`Page({
  data: {
    checked: true,
  },
  handleChange(checked, e) {
#if ALIPAY
    this.setData({
      checked,
    });
#endif
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
  },
  handleChangeByButton() {
    console.log(this.data.checked);
    this.setData({
      checked: !this.data.checked,
    });
  },
});
`,paraId:12,tocIndex:6},{value:"Property",paraId:13,tocIndex:8},{value:"Description",paraId:13,tocIndex:8},{value:"Type",paraId:13,tocIndex:8},{value:"Default Value",paraId:13,tocIndex:8},{value:"className",paraId:13,tocIndex:8},{value:"Class Name",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"checkedText",paraId:13,tocIndex:8},{value:"Content when selected",paraId:13,tocIndex:8},{value:"string | slot",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"checked",paraId:13,tocIndex:8},{value:"Check",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"color",paraId:13,tocIndex:8},{value:"Selected background color",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"defaultChecked",paraId:13,tocIndex:8},{value:"Checked by default",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"disabled",paraId:13,tocIndex:8},{value:"Disable",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"loading",paraId:13,tocIndex:8},{value:"Load status",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"uncheckedText",paraId:13,tocIndex:8},{value:"Content when not selected",paraId:13,tocIndex:8},{value:"string | slot",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"size",paraId:13,tocIndex:8},{value:"Component size, optional value is ",paraId:13,tocIndex:8},{value:"medium",paraId:13,tocIndex:8},{value:"\u3001",paraId:13,tocIndex:8},{value:"small",paraId:13,tocIndex:8},{value:"\u3001",paraId:13,tocIndex:8},{value:"x-small",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"medium",paraId:13,tocIndex:8},{value:"style",paraId:13,tocIndex:8},{value:"Style",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"#if ALIPAY onChange",paraId:13,tocIndex:8},{value:"Callback triggered when Switch is clicked",paraId:13,tocIndex:8},{value:"(checked: boolean, event: ",paraId:13,tocIndex:8},{value:"Event",paraId:13,tocIndex:8},{value:") => void",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"#if WECHAT bind:change",paraId:13,tocIndex:8},{value:"Callback triggered when Switch is clicked",paraId:13,tocIndex:8},{value:"(checked: boolean, event: ",paraId:13,tocIndex:8},{value:"Event",paraId:13,tocIndex:8},{value:") => void",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:14,tocIndex:10},{value:"Variable name",paraId:15,tocIndex:10},{value:"Light Mode Default",paraId:15,tocIndex:10},{value:"Dark Mode Default",paraId:15,tocIndex:10},{value:"Remarks",paraId:15,tocIndex:10},{value:"--switch-fill",paraId:15,tocIndex:10},{value:"#1677ff",paraId:15,tocIndex:10},{value:"#3086ff",paraId:15,tocIndex:10},{value:"Switch Fill Color",paraId:15,tocIndex:10},{value:"--switch-border-color",paraId:15,tocIndex:10},{value:"#eeeeee",paraId:15,tocIndex:10},{value:"#2b2b2b",paraId:15,tocIndex:10},{value:"Switch border color",paraId:15,tocIndex:10},{value:"--switch-loading-color",paraId:15,tocIndex:10},{value:"#1677ff",paraId:15,tocIndex:10},{value:"#3086ff",paraId:15,tocIndex:10},{value:"Switch loading color",paraId:15,tocIndex:10},{value:"--switch-handle-bg",paraId:15,tocIndex:10},{value:"#ffffff",paraId:15,tocIndex:10},{value:"#ffffff",paraId:15,tocIndex:10},{value:"Switch handle background color",paraId:15,tocIndex:10},{value:"--switch-inner-color",paraId:15,tocIndex:10},{value:"#999999",paraId:15,tocIndex:10},{value:"#616161",paraId:15,tocIndex:10},{value:"Switch internal color",paraId:15,tocIndex:10}]}}]);
