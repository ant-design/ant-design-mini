"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[1808],{56482:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(32465),I={"src-input-demo-input":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,99563))})),asset:{type:"BLOCK",id:"src-input-demo-input",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},54047:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(32465);const d=[{value:"\u901A\u8FC7\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u662F\u6700\u57FA\u7840\u7684\u8868\u5355\u57DF\u5305\u88C5\u3002\u4E00\u822C\u7528\u5728\u8868\u5355\u9875\u8FDB\u884C\u4FE1\u606F\u7684\u6536\u96C6\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
    <view class="cancel">\u53D6\u6D88</view>
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
`,paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:16},{value:"\u8BF4\u660E",paraId:15,tocIndex:16},{value:"\u7C7B\u578B",paraId:15,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:16},{value:"className",paraId:15,tocIndex:16},{value:"\u7C7B\u540D",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"controlled",paraId:15,tocIndex:16},{value:"\u6709\u952E\u76D8\u8F93\u5165\u95EE\u9898\uFF0C\u53EF\u4F7F\u7528 ",paraId:15,tocIndex:16},{value:'controlled="{{false}}"',paraId:15,tocIndex:16},{value:"boolean",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"defaultValue",paraId:15,tocIndex:16},{value:"\u521D\u59CB\u503C",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"disabled",paraId:15,tocIndex:16},{value:"\u662F\u5426\u7981\u7528",paraId:15,tocIndex:16},{value:"boolean",paraId:15,tocIndex:16},{value:"false",paraId:15,tocIndex:16},{value:"maxLength",paraId:15,tocIndex:16},{value:"\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:16},{value:"number",paraId:15,tocIndex:16},{value:"140",paraId:15,tocIndex:16},{value:"placeholder",paraId:15,tocIndex:16},{value:"\u5360\u4F4D\u7B26",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"style",paraId:15,tocIndex:16},{value:"\u6837\u5F0F",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"value",paraId:15,tocIndex:16},{value:"\u8F93\u5165\u6846\u7684\u503C\u3002\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onConfirm",paraId:15,tocIndex:16},{value:"\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onFocus",paraId:15,tocIndex:16},{value:"\u805A\u7126\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onBlur",paraId:15,tocIndex:16},{value:"\u5931\u7126\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if ALIPAY onChange",paraId:15,tocIndex:16},{value:"\u8F93\u5165\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindconfirm",paraId:15,tocIndex:16},{value:"\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindfocus",paraId:15,tocIndex:16},{value:"\u805A\u7126\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindblur",paraId:15,tocIndex:16},{value:"\u5931\u7126\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"#if WECHAT bindchange",paraId:15,tocIndex:16},{value:"\u8F93\u5165\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:15,tocIndex:16},{value:"(value: string, event: Event) => void",paraId:15,tocIndex:16},{value:"-",paraId:15,tocIndex:16},{value:"\u5C5E\u6027",paraId:16,tocIndex:17},{value:"\u8BF4\u660E",paraId:16,tocIndex:17},{value:"\u7C7B\u578B",paraId:16,tocIndex:17},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:17},{value:"allowClear",paraId:16,tocIndex:17},{value:"\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"false",paraId:16,tocIndex:17},{value:"enableNative",paraId:16,tocIndex:17},{value:"\u662F\u5426\u4F7F\u7528 native",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"focus",paraId:16,tocIndex:17},{value:"\u805A\u7126\uFF0C\u67E5\u770B",paraId:16,tocIndex:17},{value:"\u8BE6\u7EC6\u8BF4\u660E",paraId:17,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"password",paraId:16,tocIndex:17},{value:"\u662F\u5426\u662F\u5BC6\u7801\u7C7B\u578B",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"false",paraId:16,tocIndex:17},{value:"prefix",paraId:16,tocIndex:17},{value:"input \u524D\u7F00",paraId:16,tocIndex:17},{value:"slot",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"suffix",paraId:16,tocIndex:17},{value:"input \u540E\u7F00",paraId:16,tocIndex:17},{value:"slot",paraId:16,tocIndex:17},{value:"-",paraId:16,tocIndex:17},{value:"\u5C5E\u6027",paraId:18,tocIndex:18},{value:"\u8BF4\u660E",paraId:18,tocIndex:18},{value:"\u7C7B\u578B",paraId:18,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:18},{value:"autoHeight",paraId:18,tocIndex:18},{value:"\u662F\u5426\u81EA\u52A8\u589E\u9AD8\u3002",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"false",paraId:18,tocIndex:18},{value:"enableNative",paraId:18,tocIndex:18},{value:"\u662F\u5426\u4F7F\u7528 native",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"-",paraId:18,tocIndex:18},{value:"showCount",paraId:18,tocIndex:18},{value:"\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",paraId:18,tocIndex:18},{value:"boolean",paraId:18,tocIndex:18},{value:"true",paraId:18,tocIndex:18},{value:"confirm-type",paraId:19,tocIndex:19},{value:"name",paraId:19,tocIndex:19},{value:"placeholder-class",paraId:19,tocIndex:19},{value:"placeholder-style",paraId:19,tocIndex:19},{value:"type",paraId:19,tocIndex:19},{value:"Input",paraId:20,tocIndex:19},{value:"Textarea",paraId:20,tocIndex:19},{value:"\u4F7F\u7528 focus \u5C5E\u6027\u9700\u8981\u5728 app.json window \u91CC\u52A0\u4E0A ",paraId:21,tocIndex:20},{value:'"enableInPageRenderInput": "YES"',paraId:21,tocIndex:20},{value:"\uFF0C\u5426\u5219\u65E0\u6CD5\u5728 iOS \u91CC\u6253\u5F00\u952E\u76D8\u3002",paraId:21,tocIndex:20},{value:"\u5B9E\u4F8B\u65B9\u6CD5\u9700\u8981\u5C0F\u7A0B\u5E8F ",paraId:22,tocIndex:21},{value:"component2",paraId:22,tocIndex:21},{value:" \u53EF\u4F7F\u7528\u3002",paraId:22,tocIndex:21},{value:"\u5C5E\u6027",paraId:23,tocIndex:21},{value:"\u8BF4\u660E",paraId:23,tocIndex:21},{value:"\u7C7B\u578B",paraId:23,tocIndex:21},{value:"update",paraId:23,tocIndex:21},{value:"\u66F4\u65B0\u503C",paraId:23,tocIndex:21},{value:"(value: string) => void",paraId:23,tocIndex:21},{value:"getValue",paraId:23,tocIndex:21},{value:"\u5F97\u5230\u503C",paraId:23,tocIndex:21},{value:"() => string",paraId:23,tocIndex:21},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:24,tocIndex:23},{value:"\u53D8\u91CF\u540D",paraId:25,tocIndex:23},{value:"\u9ED8\u8BA4\u503C",paraId:25,tocIndex:23},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:25,tocIndex:23},{value:"\u5907\u6CE8",paraId:25,tocIndex:23},{value:"--input-item-color",paraId:25,tocIndex:23},{value:"#333333",paraId:25,tocIndex:23},{value:"#c5cad1",paraId:25,tocIndex:23},{value:"\u8F93\u5165\u9879\u6587\u672C\u989C\u8272",paraId:25,tocIndex:23},{value:"--input-item-placeholder-color",paraId:25,tocIndex:23},{value:"#cccccc",paraId:25,tocIndex:23},{value:"#474747",paraId:25,tocIndex:23},{value:"\u8F93\u5165\u9879\u5360\u4F4D\u7B26\u989C\u8272",paraId:25,tocIndex:23},{value:"--input-item-clear-color",paraId:25,tocIndex:23},{value:"#999999",paraId:25,tocIndex:23},{value:"#616161",paraId:25,tocIndex:23},{value:"\u8F93\u5165\u9879\u6E05\u9664\u6309\u94AE\u989C\u8272",paraId:25,tocIndex:23},{value:"--input-background-color",paraId:25,tocIndex:23},{value:"#ffffff",paraId:25,tocIndex:23},{value:"#1a1a1a",paraId:25,tocIndex:23},{value:"\u8F93\u5165\u9879\u80CC\u666F\u989C\u8272",paraId:25,tocIndex:23},{value:"\u9700\u8981\u5728 app.json window \u91CC\u52A0\u4E0A ",paraId:26,tocIndex:25},{value:'"enableInPageRenderInput": "YES"',paraId:26,tocIndex:25},{value:"\u3002",paraId:26,tocIndex:25},{value:"\u53EF\u67E5\u770B ",paraId:27,tocIndex:26},{value:"\u6B64\u6587\u6863",paraId:27,tocIndex:26},{value:" \u4F7F\u7528 ",paraId:27,tocIndex:26},{value:"enableNative",paraId:27,tocIndex:26},{value:" \u5C5E\u6027\u89E3\u51B3\u3002",paraId:27,tocIndex:26},{value:"\u8FD9\u4E2A\u662F\u7531\u4E8E ",paraId:28,tocIndex:27},{value:"\u8F93\u5165\u6846\u7684\u4E00\u4E2A\u5DF2\u77E5\u95EE\u9898",paraId:28,tocIndex:27},{value:"\u3002",paraId:28,tocIndex:27},{value:"\u89E3\u51B3\u65B9\u5F0F\u4E3A\uFF1A\u4E0D\u4F7F\u7528 value \u53D7\u63A7\u6A21\u5F0F\uFF0C\u91C7\u7528 ref \u65B9\u5F0F\u8C03\u7528 input \u66F4\u65B0\u65B9\u6CD5\u3002",paraId:29,tocIndex:27},{value:`<input defaultValue="{{defaultValue}}" ref="handleRef" />
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
`,paraId:31,tocIndex:27},{value:"\u4ECE v2.15.0 \u5F00\u59CB\uFF0C\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u652F\u6301\u901A\u8FC7 update \u65B9\u6CD5\u66F4\u65B0\u503C\u3002",paraId:32,tocIndex:27},{value:"\u9700\u8981\u4F7F\u7528 ",paraId:33,tocIndex:28},{value:"component2",paraId:33,tocIndex:28},{value:"\uFF0C\u8BE6\u60C5\u53C2\u89C1",paraId:33,tocIndex:28},{value:"ref \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B",paraId:33,tocIndex:28},{value:"\u3002",paraId:33,tocIndex:28}]}}]);
