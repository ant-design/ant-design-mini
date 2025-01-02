"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4428],{4065:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(50058),o={"src-input-demo-input":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,99563))})),asset:{type:"BLOCK",id:"src-input-demo-input",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},98448:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(50058);const d=[{value:"Through the keyboard input content, is the most basic form field packaging. Generally used in the form page for information collection.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-input": "antd-mini/es/Input/index",
  "ant-textarea": "antd-mini/es/Input/Textarea/index"
#endif
#if WECHAT
  "ant-input": "antd-mini/Input/index",
  "ant-textarea": "antd-mini/Input/Textarea/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-input placeholder="input here" />
<ant-input placeholder="input here" defaultValue="initial value" />
<ant-input placeholder="input here, with clear button" allowClear />
<ant-input placeholder="disabled input" disabled="{{true}}" />
`,paraId:3,tocIndex:3},{value:`<ant-input placeholder="input here" allowClear>
  <view slot="prefix">\uFFE5</view>
  <view slot="suffix">RMB</view>
</ant-input>
`,paraId:4,tocIndex:4},{value:`<ant-input controlled="{{true}}" value="{{value}}" placeholder="input here" allowClear />
`,paraId:5,tocIndex:5},{value:`<ant-input placeholder="input digit here" type="digit" focusClassName="border" allowClear>
  <view slot="prefix">\uFFE5</view>
  <view slot="suffix">RMB</view>
</ant-input>
`,paraId:6,tocIndex:6},{value:` <view class="search-line">
    <ant-input
      placeholder="input here"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
    >
      <ant-icon slot="prefix" type="SearchOutline" />
      <ant-icon slot="suffix" type="AudioOutline" />
    </ant-input>
    <view class="cancel">Cancel</view>
  </view>
`,paraId:7,tocIndex:7},{value:`.search-line {
  display: flex;
  align-items: center;
  padding: 16px;
}
.search-bar {
  padding: 4px 0 4px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.4s;
  flex: 1;

  &-focus {
    border-color: #1677ff;
  }
}
.cancel {
  color: #fff;
  margin-left: 8px;
}
`,paraId:8,tocIndex:7},{value:` <ant-textarea placeholder="input here" autoHeight />
 <ant-textarea placeholder="input here" defaultValue="initial value" autoHeight />
`,paraId:9,tocIndex:9},{value:` <ant-textarea value="{{value}}" placeholder="input here" allowClear />
`,paraId:10,tocIndex:10},{value:`<ant-input className="custom" placeholder="input here" />
`,paraId:11,tocIndex:12},{value:`.custom {
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
}
`,paraId:12,tocIndex:12},{value:` <ant-input className="custom-color" placeholder="input here" />
`,paraId:13,tocIndex:13},{value:`.custom-color {
  margin-bottom: 12px;
  input,
  textarea {
    padding: 4px;
    background: #f5f5f5;
    border-radius: 4px;
  }
}
`,paraId:14,tocIndex:13},{value:"Property",paraId:15,tocIndex:16},{value:"Description",paraId:15,tocIndex:16},{value:"Type",paraId:15,tocIndex:16},{value:"Default Value",paraId:15,tocIndex:16},{value:"className",paraId:15,tocIndex:16},{value:"Class Name",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"controlled",paraId:15,tocIndex:16},{value:"There are keyboard input problems, you can use ",paraId:15,tocIndex:16},{value:'controlled="{{false}}"',paraId:15,tocIndex:16},{value:"boolean",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"defaultValue",paraId:15,tocIndex:16},{value:"Initial value",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"disabled",paraId:15,tocIndex:16},{value:"Disable",paraId:15,tocIndex:16},{value:"boolean",paraId:15,tocIndex:16},{value:"false",paraId:15,tocIndex:16},{value:"maxLength",paraId:15,tocIndex:16},{value:"Maximum length",paraId:15,tocIndex:16},{value:"number",paraId:15,tocIndex:16},{value:"140",paraId:15,tocIndex:16},{value:"placeholder",paraId:15,tocIndex:16},{value:"Placeholder",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"style",paraId:15,tocIndex:16},{value:"Style",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"value",paraId:15,tocIndex:16},{value:"The value of the input box. Controlled mode.",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onConfirm",paraId:15,tocIndex:16},{value:"This callback is triggered when the keyboard is clicked",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onFocus",paraId:15,tocIndex:16},{value:"Trigger this callback when focused",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onBlur",paraId:15,tocIndex:16},{value:"Trigger this callback when out of focus",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onChange",paraId:15,tocIndex:16},{value:"This callback is triggered when input",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindconfirm",paraId:15,tocIndex:16},{value:"This callback is triggered when the keyboard is clicked",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindfocus",paraId:15,tocIndex:16},{value:"Trigger this callback when focused",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindblur",paraId:15,tocIndex:16},{value:"Trigger this callback when out of focus",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindchange",paraId:15,tocIndex:16},{value:"This callback is triggered when input",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"Property",paraId:16,tocIndex:17},{value:"Description",paraId:16,tocIndex:17},{value:"Type",paraId:16,tocIndex:17},{value:"Default Value",paraId:16,tocIndex:17},{value:"allowClear",paraId:16,tocIndex:17},{value:"You can click the clear icon to delete content",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"false",paraId:16,tocIndex:17},{value:"enableNative",paraId:16,tocIndex:17},{value:"Whether to use native",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"focus",paraId:16,tocIndex:17},{value:"Focus, View",paraId:16,tocIndex:17},{value:"Detailed Description",paraId:17,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"password",paraId:16,tocIndex:17},{value:"Whether it is password type",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"false",paraId:16,tocIndex:17},{value:"prefix",paraId:16,tocIndex:17},{value:"input prefix",paraId:16,tocIndex:17},{value:"slot",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"suffix",paraId:16,tocIndex:17},{value:"input suffix",paraId:16,tocIndex:17},{value:"slot",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"Property",paraId:18,tocIndex:18},{value:"Description",paraId:18,tocIndex:18},{value:"Type",paraId:18,tocIndex:18},{value:"Default Value",paraId:18,tocIndex:18},{value:"autoHeight",paraId:18,tocIndex:18},{value:"Whether to increase automatically.",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"false",paraId:18,tocIndex:18},{value:"enableNative",paraId:18,tocIndex:18},{value:"Whether to use native",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"-",paraId:18,tocIndex:18},{value:"showCount",paraId:18,tocIndex:18},{value:"Show word count",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"true",paraId:18,tocIndex:18},{value:"confirm-type",paraId:19,tocIndex:19},{value:"name",paraId:19,tocIndex:19},{value:"placeholder-class",paraId:19,tocIndex:19},{value:"placeholder-style",paraId:19,tocIndex:19},{value:"type",paraId:19,tocIndex:19},{value:"Input",paraId:20,tocIndex:19},{value:"Textarea",paraId:20,tocIndex:19},{value:"To use the focus attribute, you need to add it to the app.json window. ",paraId:21,tocIndex:20},{value:'"enableInPageRenderInput": "YES"',paraId:21,tocIndex:20},{value:"Otherwise, the keyboard cannot be opened in iOS.",paraId:21,tocIndex:20},{value:"Instance methods require small programs ",paraId:22,tocIndex:21},{value:"component2",paraId:22,tocIndex:21},{value:" Can be used.",paraId:22,tocIndex:21},{value:"Property",paraId:23,tocIndex:21},{value:"Description",paraId:23,tocIndex:21},{value:"Type",paraId:23,tocIndex:21},{value:"update",paraId:23,tocIndex:21},{value:"Update Value",paraId:23,tocIndex:21},{value:"(value: string) => void",paraId:23,tocIndex:21},{value:"getValue",paraId:23,tocIndex:21},{value:"get value",paraId:23,tocIndex:21},{value:"() => string",paraId:23,tocIndex:21},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:24,tocIndex:23},{value:"Variable name",paraId:25,tocIndex:23},{value:"Default Value",paraId:25,tocIndex:23},{value:"Dark Mode Default",paraId:25,tocIndex:23},{value:"Remarks",paraId:25,tocIndex:23},{value:"--input-item-color",paraId:25,tocIndex:23},{value:"#333333",paraId:25,tocIndex:23},{value:"#c5cad1",paraId:25,tocIndex:23},{value:"Input Text Color",paraId:25,tocIndex:23},{value:"--input-item-placeholder-color",paraId:25,tocIndex:23},{value:"#cccccc",paraId:25,tocIndex:23},{value:"#474747",paraId:25,tocIndex:23},{value:"Input item placeholder color",paraId:25,tocIndex:23},{value:"--input-item-clear-color",paraId:25,tocIndex:23},{value:"#999999",paraId:25,tocIndex:23},{value:"#616161",paraId:25,tocIndex:23},{value:"Input Clear Button Color",paraId:25,tocIndex:23},{value:"--input-background-color",paraId:25,tocIndex:23},{value:"#ffffff",paraId:25,tocIndex:23},{value:"#1a1a1a",paraId:25,tocIndex:23},{value:"Input Background Color",paraId:25,tocIndex:23},{value:"You need to add it to the app.json window. ",paraId:26,tocIndex:25},{value:'"enableInPageRenderInput": "YES"',paraId:26,tocIndex:25},{value:"\u3002",paraId:26,tocIndex:25},{value:"Can be viewed ",paraId:27,tocIndex:26},{value:"This document",paraId:27,tocIndex:26},{value:" Use ",paraId:27,tocIndex:26},{value:"enableNative",paraId:27,tocIndex:26},{value:" property to resolve.",paraId:27,tocIndex:26},{value:"This is due ",paraId:28,tocIndex:27},{value:"A known issue with input boxes",paraId:28,tocIndex:27},{value:"\u3002",paraId:28,tocIndex:27},{value:"The solution is to call the input update method in ref mode without using value controlled mode.",paraId:29,tocIndex:27},{value:`<input defaultValue="{{defaultValue}}" ref="handleRef" />
<button
#if ALIPAY
  onTap="clear"
#endif
#if WECHAT
  bindtap="clear"
#endif
>clear</button>
`,paraId:30,tocIndex:27},{value:`Page({
  handleRef(input) {
#if ALIPAY
    this.input = input;
#endif
#if WECHAT
    this.input = input.detail;
#endif
  },
  clear() {
    this.input.update('');
  },
});
`,paraId:31,tocIndex:27},{value:"Starting with v2.15.0, updating values via the update method is not supported in controlled mode.",paraId:32,tocIndex:27},{value:"need to use ",paraId:33,tocIndex:28},{value:"component2",paraId:33,tocIndex:28},{value:", for details see",paraId:33,tocIndex:28},{value:"ref Get Component Instance",paraId:33,tocIndex:28},{value:"\u3002",paraId:33,tocIndex:28}]}}]);
