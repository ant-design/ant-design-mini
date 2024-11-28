"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5762],{3819:function(t,a,e){e.r(a),e.d(a,{demos:function(){return I}});var n=e(67294),d=e(19981),I={"src-selector-demo-selector":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,45323))})),asset:{type:"BLOCK",id:"src-selector-demo-selector",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},21773:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(19981);const d=[{value:"\u5728\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u3002\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u4E00\u822C\u5728\u7B5B\u9009\u548C\u8868\u5355\u4E2D\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-selector": "antd-mini/es/Selector/index"
#endif
#if WECHAT
  "ant-selector": "antd-mini/Selector/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"options",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B ",paraId:4,tocIndex:3},{value:"text",paraId:4,tocIndex:3},{value:"\uFF08\u4E3B\u6587\u6848\uFF09\u3001 ",paraId:4,tocIndex:3},{value:"subText",paraId:4,tocIndex:3},{value:"\uFF08\u526F\u6587\u6848\uFF09 \u3001 ",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"\uFF08\u9009\u9879\u503C\uFF09\u3001 ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:"\uFF08\u662F\u5426\u7981\u7528\uFF09\u3002",paraId:4,tocIndex:3},{value:`  <ant-selector defaultValue="2" options="{{options}}" />
`,paraId:5,tocIndex:3},{value:"\u4F20\u5165 ",paraId:6,tocIndex:4},{value:"multiple",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u652F\u6301\u591A\u9009\u3002",paraId:6,tocIndex:4},{value:`  <ant-selector defaultValue="{{['1', '2']}}" options="{{options}}" multiple />
`,paraId:7,tocIndex:4},{value:"maxSelectedCount",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"minSelectedCount",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u9009\u62E9\u4E2A\u6570\uFF0C",paraId:8,tocIndex:5},{value:"selectMax",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"selectMin",paraId:8,tocIndex:5},{value:" \u4E8B\u4EF6\u5728\u8D85\u51FA\u9650\u5236\u7684\u65F6\u5019\u89E6\u53D1\u3002",paraId:8,tocIndex:5},{value:`<ant-selector
  options="{{options}}"
  multiple
  maxSelectedCount="{{4}}"
  minSelectedCount="{{2}}"
#if ALIPAY
  onSelectMax="onSelectMax"
  onSelectMin="onSelectMin"
#endif
#if WECHAT
  bind:selectmax="onSelectMax"
  bind:selectMin="onSelectMin"
#endif
/>
`,paraId:9,tocIndex:5},{value:`Page({
  data: {
    items: [
      { text: '\u9009\u9879\u4E00', value: '1' },
      { text: '\u9009\u9879\u4E8C', value: '2' },
      { text: '\u9009\u9879\u4E09', value: '3' },
    ],
  },
  onSelectMin(value, item) {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: '\u4E0D\u5141\u8BB8\u6E05\u7A7A' });
#endif
#if ALIPAY
    my.alert({ content: '\u4E0D\u5141\u8BB8\u6E05\u7A7A' });
#endif
  },
  onSelectMax() {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: '\u9009\u62E9\u5DF2\u8FBE\u4E0A\u9650' });
#endif
#if ALIPAY
    my.alert({ content: '\u9009\u62E9\u5DF2\u8FBE\u4E0A\u9650' });
#endif
  },
});
`,paraId:10,tocIndex:5},{value:"\u60F3\u8981\u5B9E\u73B0\u4E0D\u5141\u8BB8\u6E05\u7A7A\uFF0C\u4F7F\u7528 ",paraId:11,tocIndex:6},{value:"minSelectedCount",paraId:11,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u6700\u5C0F\u9650\u5236\u4E2A\u6570\u4F4D ",paraId:11,tocIndex:6},{value:"1",paraId:11,tocIndex:6},{value:" \uFF0C\u5373\u53EF\u3002",paraId:11,tocIndex:6},{value:`<ant-selector defaultValue="1" options="{{options}}" minSelectedCount="{{1}}" />
`,paraId:12,tocIndex:6},{value:`<ant-selector
  value="{{value}}"
  options="{{items}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
<ant-button
  size="large"
#if ALIPAY
  onTap="handleChangeValue"
#endif
#if WECHAT
  bind:tap="handleChangeValue"
#endif
>
  \u6539\u53D8\u9009\u4E2D\u503C\u4E3A\u9009\u9879\u4E09
</ant-button>
`,paraId:13,tocIndex:7},{value:`Page({
  data: {
    items: [
      { text: '\u9009\u9879\u4E00', value: '1' },
      { text: '\u9009\u9879\u4E8C', value: '2' },
      { text: '\u9009\u9879\u4E09', value: '3' },
    ],
    value: '1',
  },
  handleChangeValue() {
    this.setData({
      value: '3',
    });
  },
  handleChange(value, items, e) {
#if WECHAT
    this.setData({
      value: value.detail[0],
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
    console.log(value, items, e);
  },
});
`,paraId:14,tocIndex:7},{value:"\u53C2\u8003\u4E0B\u9762 ",paraId:15,tocIndex:8},{value:"Demo \u4EE3\u7801",paraId:16,tocIndex:8},{value:" \u4E2D\u7684\u5B9E\u73B0\u3002",paraId:15,tocIndex:8},{value:"\u5C5E\u6027",paraId:17,tocIndex:10},{value:"\u8BF4\u660E",paraId:17,tocIndex:10},{value:"\u7C7B\u578B",paraId:17,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:10},{value:"activeItemClassName",paraId:17,tocIndex:10},{value:"\u9009\u4E2D\u9009\u9879\u7684\u7C7B\u540D",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"activeItemStyle",paraId:17,tocIndex:10},{value:"\u9009\u4E2D\u9009\u9879\u7684\u6837\u5F0F",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"className",paraId:17,tocIndex:10},{value:"\u7C7B\u540D",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"defaultValue",paraId:17,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u62E9\u9879\uFF0C\u591A\u9009\u65F6\u7C7B\u578B\u4E3A\u6570\u7EC4",paraId:17,tocIndex:10},{value:"string | number | string[] | number[]",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"disabled",paraId:17,tocIndex:10},{value:"\u662F\u5426\u6574\u4F53\u7981\u7528",paraId:17,tocIndex:10},{value:"boolean",paraId:17,tocIndex:10},{value:"false",paraId:17,tocIndex:10},{value:"maxSelectedCount",paraId:17,tocIndex:10},{value:"\u6700\u5927\u53EF\u9009\u4E2D\u9879\u7684\u6570\u91CF",paraId:17,tocIndex:10},{value:"number",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"minSelectedCount",paraId:17,tocIndex:10},{value:"\u6700\u5C0F\u53EF\u9009\u4E2D\u9879\u7684\u6570\u91CF",paraId:17,tocIndex:10},{value:"number",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"multiple",paraId:17,tocIndex:10},{value:"\u662F\u5426\u5141\u8BB8\u591A\u9009\uFF0C\u6807\u7B7E\u680F\u663E\u793A\u7684\u65F6\u5019\u4F1A\u663E\u793A\u5F53\u524D\u5355\u9009/\u591A\u9009\u7684\u72B6\u6001",paraId:17,tocIndex:10},{value:"boolean",paraId:17,tocIndex:10},{value:"false",paraId:17,tocIndex:10},{value:"options",paraId:17,tocIndex:10},{value:"\u9009\u9879\u6570\u636E\u6E90",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:18,tocIndex:10},{value:"[]",paraId:17,tocIndex:10},{value:"[]",paraId:17,tocIndex:10},{value:"style",paraId:17,tocIndex:10},{value:"\u6837\u5F0F",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"value",paraId:17,tocIndex:10},{value:"\u5F53\u524D\u9009\u62E9\u9879\uFF0C\u591A\u9009\u65F6\u7C7B\u578B\u4E3A\u6570\u7EC4",paraId:17,tocIndex:10},{value:"string | number | string[] | number[]",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onChange",paraId:17,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:17,tocIndex:10},{value:"(v: string | number | undefined | string[] | number[], selectedItem: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:19,tocIndex:10},{value:" | undefined | ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:20,tocIndex:10},{value:"[], event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onSelectMax",paraId:17,tocIndex:10},{value:"\u89E6\u53D1\u6700\u5927\u9650\u5236",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:21,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onSelectMin",paraId:17,tocIndex:10},{value:"\u89E6\u53D1\u6700\u5C0F\u9650\u5236",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:22,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bind:change",paraId:17,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:17,tocIndex:10},{value:"(v: string | number | undefined | string[] | number[], selectedItem: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:23,tocIndex:10},{value:" | undefined | ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:24,tocIndex:10},{value:"[], event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bind:selectmax",paraId:17,tocIndex:10},{value:"\u89E6\u53D1\u6700\u5927\u9650\u5236",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:25,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bind:selectmin",paraId:17,tocIndex:10},{value:"\u89E6\u53D1\u6700\u5C0F\u9650\u5236",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:26,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"\u5C5E\u6027",paraId:27,tocIndex:11},{value:"\u8BF4\u660E",paraId:27,tocIndex:11},{value:"\u7C7B\u578B",paraId:27,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:27,tocIndex:11},{value:"disabled",paraId:27,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:27,tocIndex:11},{value:"boolean",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"subText",paraId:27,tocIndex:11},{value:"\u526F\u6587\u6848",paraId:27,tocIndex:11},{value:"string",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"text",paraId:27,tocIndex:11},{value:"\u6587\u6848",paraId:27,tocIndex:11},{value:"string",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"value",paraId:27,tocIndex:11},{value:"\u5F53\u524D\u9879 value",paraId:27,tocIndex:11},{value:"string | number",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:28,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:29,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:29,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:29,tocIndex:13},{value:"\u5907\u6CE8",paraId:29,tocIndex:13},{value:"--selector-background-color",paraId:29,tocIndex:13},{value:"#ffffff",paraId:29,tocIndex:13},{value:"#1a1a1a",paraId:29,tocIndex:13},{value:"\u9009\u62E9\u5668\u80CC\u666F\u989C\u8272",paraId:29,tocIndex:13},{value:"--selector-item-background",paraId:29,tocIndex:13},{value:"#f5f5f5",paraId:29,tocIndex:13},{value:"#121212",paraId:29,tocIndex:13},{value:"\u9009\u62E9\u5668\u9879\u80CC\u666F\u989C\u8272",paraId:29,tocIndex:13},{value:"--selector-item-active-background",paraId:29,tocIndex:13},{value:"#e7f1ff",paraId:29,tocIndex:13},{value:"#0d2543",paraId:29,tocIndex:13},{value:"\u9009\u62E9\u5668\u6FC0\u6D3B\u9879\u80CC\u666F\u989C\u8272",paraId:29,tocIndex:13},{value:"--selector-item-color",paraId:29,tocIndex:13},{value:"#1677ff",paraId:29,tocIndex:13},{value:"#3086ff",paraId:29,tocIndex:13},{value:"\u9009\u62E9\u5668\u9879\u989C\u8272",paraId:29,tocIndex:13},{value:"--selector-item-sub-color",paraId:29,tocIndex:13},{value:"#999999",paraId:29,tocIndex:13},{value:"#616161",paraId:29,tocIndex:13},{value:"\u9009\u62E9\u5668\u9879\u5B50\u989C\u8272",paraId:29,tocIndex:13}]}}]);
