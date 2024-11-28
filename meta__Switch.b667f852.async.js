"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2802],{53689:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(28887),I={"src-switch-demo-switch":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,50233))})),asset:{type:"BLOCK",id:"src-switch-demo-switch",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},71169:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(28887);const d=[{value:"Switch \u5F00\u5173\u9009\u62E9\u5668\uFF0C\u6BD4\u8D77\u539F\u751F Switch\uFF0C\u5B83\u5B9E\u73B0\u4E86\u5728 iOS \u548C Android \u7AEF\u4E00\u81F4\u7684\u4F53\u9A8C\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001\u6216\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u5207\u6362\u65F6\u4F7F\u7528\u3002",paraId:1,tocIndex:0},{value:"\u4E0E Checkbox \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5207\u6362 Switch \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C Checkbox \u901A\u5E38\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u4E0E\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u4F7F\u7528\u3002",paraId:1,tocIndex:0},{value:"\u5728 ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-switch": "antd-mini/es/Switch/index"
#endif
#if WECHAT
  "ant-switch": "antd-mini/Switch/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-switch
  defaultChecked="{{true}}"
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
`,paraId:5,tocIndex:3},{value:"\u4F20\u5165 ",paraId:6,tocIndex:4},{value:"disabled",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u7981\u7528\u5E76\u7F6E\u7070\u5F00\u5173\u6309\u94AE\u3002",paraId:6,tocIndex:4},{value:`<ant-switch defaultChecked="{{true}}" disabled="{{true}}" />
`,paraId:7,tocIndex:4},{value:"checkedText",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"uncheckedText",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4FEE\u6539\u9009\u4E2D/\u672A\u9009\u4E2D\u65F6\u7684\u5185\u5BB9\u3002",paraId:8,tocIndex:5},{value:"color",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u6574\u4F53\u6309\u94AE\u7684\u989C\u8272\u6C1B\u56F4\u3002",paraId:8,tocIndex:5},{value:" size",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8C03\u6574\u5F00\u5173\u5927\u5C0F\uFF0C\u652F\u6301 ",paraId:8,tocIndex:5},{value:"medium",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"small",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"x-small",paraId:8,tocIndex:5},{value:" \u4E09\u79CD\u9009\u9879\u3002",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u52A0\u8F7D\u6001\u3002",paraId:8,tocIndex:5},{value:`<ant-switch checkedText="\u5F00" uncheckedText="\u5173" />
#if ALIPAY
<!-- \u652F\u4ED8\u5B9D\u6A21\u5F0F\u4E0B\uFF0C\u652F\u6301\u63D2\u69FD\u5B9A\u5236\u9009\u4E2D/\u672A\u9009\u4E2D\u65F6\u7684\u5185\u5BB9 -->
<ant-switch>
  <ant-icon type="CheckOutline" slot="checkedText" />
  <ant-icon type="CloseOutline" slot="uncheckedText" />
</ant-switch>
#endif

<ant-switch defaultChecked="{{true}}" color="#00b578" />

<ant-switch size="medium" />

<ant-switch size="small" />

<ant-switch size="x-small" />

<ant-switch loading />
`,paraId:9,tocIndex:5},{value:"checked",paraId:10,tocIndex:6},{value:" \u5C5E\u6027\u548C ",paraId:10,tocIndex:6},{value:"change",paraId:10,tocIndex:6},{value:" \u4E8B\u4EF6\uFF0C\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:10,tocIndex:6},{value:`<ant-switch
  checked="{{checked}}"
  defaultChecked="{{true}}"
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
  \u5207\u6362
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
`,paraId:12,tocIndex:6},{value:"\u5C5E\u6027",paraId:13,tocIndex:8},{value:"\u8BF4\u660E",paraId:13,tocIndex:8},{value:"\u7C7B\u578B",paraId:13,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:8},{value:"className",paraId:13,tocIndex:8},{value:"\u7C7B\u540D",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"checkedText",paraId:13,tocIndex:8},{value:"\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:13,tocIndex:8},{value:"string | slot",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"checked",paraId:13,tocIndex:8},{value:"\u662F\u5426\u52FE\u9009",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"color",paraId:13,tocIndex:8},{value:"\u9009\u4E2D\u80CC\u666F\u8272",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"defaultChecked",paraId:13,tocIndex:8},{value:"\u9ED8\u8BA4\u662F\u5426\u52FE\u9009",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"disabled",paraId:13,tocIndex:8},{value:"\u662F\u5426\u7981\u7528",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"loading",paraId:13,tocIndex:8},{value:"\u662F\u5426\u52A0\u8F7D\u72B6\u6001",paraId:13,tocIndex:8},{value:"boolean",paraId:13,tocIndex:8},{value:"false",paraId:13,tocIndex:8},{value:"uncheckedText",paraId:13,tocIndex:8},{value:"\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9",paraId:13,tocIndex:8},{value:"string | slot",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"size",paraId:13,tocIndex:8},{value:"\u7EC4\u4EF6\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A ",paraId:13,tocIndex:8},{value:"medium",paraId:13,tocIndex:8},{value:"\u3001",paraId:13,tocIndex:8},{value:"small",paraId:13,tocIndex:8},{value:"\u3001",paraId:13,tocIndex:8},{value:"x-small",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"medium",paraId:13,tocIndex:8},{value:"style",paraId:13,tocIndex:8},{value:"\u6837\u5F0F",paraId:13,tocIndex:8},{value:"string",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"#if ALIPAY onChange",paraId:13,tocIndex:8},{value:"\u70B9\u51FB Switch \u65F6\u89E6\u53D1\u7684\u56DE\u8C03",paraId:13,tocIndex:8},{value:"(checked: boolean, event: ",paraId:13,tocIndex:8},{value:"Event",paraId:13,tocIndex:8},{value:") => void",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"#if WECHAT bind:change",paraId:13,tocIndex:8},{value:"\u70B9\u51FB Switch \u65F6\u89E6\u53D1\u7684\u56DE\u8C03",paraId:13,tocIndex:8},{value:"(checked: boolean, event: ",paraId:13,tocIndex:8},{value:"Event",paraId:13,tocIndex:8},{value:") => void",paraId:13,tocIndex:8},{value:"-",paraId:13,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:14,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:15,tocIndex:10},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:15,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:15,tocIndex:10},{value:"\u5907\u6CE8",paraId:15,tocIndex:10},{value:"--switch-fill",paraId:15,tocIndex:10},{value:"#1677ff",paraId:15,tocIndex:10},{value:"#3086ff",paraId:15,tocIndex:10},{value:"\u5F00\u5173\u586B\u5145\u989C\u8272",paraId:15,tocIndex:10},{value:"--switch-border-color",paraId:15,tocIndex:10},{value:"#eeeeee",paraId:15,tocIndex:10},{value:"#2b2b2b",paraId:15,tocIndex:10},{value:"\u5F00\u5173\u8FB9\u6846\u989C\u8272",paraId:15,tocIndex:10},{value:"--switch-loading-color",paraId:15,tocIndex:10},{value:"#1677ff",paraId:15,tocIndex:10},{value:"#3086ff",paraId:15,tocIndex:10},{value:"\u5F00\u5173\u52A0\u8F7D\u989C\u8272",paraId:15,tocIndex:10},{value:"--switch-handle-bg",paraId:15,tocIndex:10},{value:"#ffffff",paraId:15,tocIndex:10},{value:"#ffffff",paraId:15,tocIndex:10},{value:"\u5F00\u5173\u624B\u67C4\u80CC\u666F\u989C\u8272",paraId:15,tocIndex:10},{value:"--switch-inner-color",paraId:15,tocIndex:10},{value:"#999999",paraId:15,tocIndex:10},{value:"#616161",paraId:15,tocIndex:10},{value:"\u5F00\u5173\u5185\u90E8\u989C\u8272",paraId:15,tocIndex:10}]}}]);
