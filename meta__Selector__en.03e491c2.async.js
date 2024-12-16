"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9018],{29172:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(35063),o={"src-selector-demo-selector":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,45323))})),asset:{type:"BLOCK",id:"src-selector-demo-selector",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},33045:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(35063);const t=[{value:"Select one or more in a set of options. Provides multiple options for users to select, typically used in filters and forms.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-selector": "antd-mini/es/Selector/index"
#endif
#if WECHAT
  "ant-selector": "antd-mini/Selector/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"options",paraId:3,tocIndex:3},{value:" property is an object that contains ",paraId:4,tocIndex:3},{value:"text",paraId:4,tocIndex:3},{value:"(main copy), ",paraId:4,tocIndex:3},{value:"subText",paraId:4,tocIndex:3},{value:"(Deputy copywriter), ",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"(option value), ",paraId:4,tocIndex:3},{value:"disabled",paraId:4,tocIndex:3},{value:"(disabled or not).",paraId:4,tocIndex:3},{value:`  <ant-selector defaultValue="2" options="{{options}}" />
`,paraId:5,tocIndex:3},{value:"Incoming ",paraId:6,tocIndex:4},{value:"multiple",paraId:6,tocIndex:4},{value:" Properties can support multiple selection.",paraId:6,tocIndex:4},{value:`  <ant-selector defaultValue="{{['1', '2']}}" options="{{options}}" multiple />
`,paraId:7,tocIndex:4},{value:"maxSelectedCount",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"minSelectedCount",paraId:8,tocIndex:5},{value:" property can limit the number of selections,",paraId:8,tocIndex:5},{value:"selectMax",paraId:8,tocIndex:5},{value:"\u3001",paraId:8,tocIndex:5},{value:"selectMin",paraId:8,tocIndex:5},{value:" Event is triggered when the limit is exceeded.",paraId:8,tocIndex:5},{value:`<ant-selector
  options="{{options}}"
  multiple
  maxSelectedCount="{{4}}"
  minSelectedCount="{{2}}"
#if ALIPAY
  onSelectMax="onSelectMax"
  onSelectMin="onSelectMin"
#endif
#if WECHAT
  bindselectmax="onSelectMax"
  bindselectmin="onSelectMin"
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
    wx.showModal({ content: 'Emptying not allowed' });
#endif
#if ALIPAY
    my.alert({ content: 'Emptying not allowed' });
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
`,paraId:10,tocIndex:5},{value:"To achieve that emptying is not allowed, use ",paraId:11,tocIndex:6},{value:"minSelectedCount",paraId:11,tocIndex:6},{value:" Property Set Minimum Limit Number of Digits ",paraId:11,tocIndex:6},{value:"1",paraId:11,tocIndex:6},{value:" , can.",paraId:11,tocIndex:6},{value:`<ant-selector defaultValue="1" options="{{options}}" minSelectedCount="{{1}}" />
`,paraId:12,tocIndex:6},{value:`<ant-selector
  value="{{value}}"
  options="{{items}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-button
  size="large"
#if ALIPAY
  onTap="handleChangeValue"
#endif
#if WECHAT
  bindtap="handleChangeValue"
#endif
>
  Change the selected value to option three
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
`,paraId:14,tocIndex:7},{value:"Reference below ",paraId:15,tocIndex:8},{value:"Demo Code",paraId:16,tocIndex:8},{value:" implementation in.",paraId:15,tocIndex:8},{value:"Property",paraId:17,tocIndex:10},{value:"Description",paraId:17,tocIndex:10},{value:"Type",paraId:17,tocIndex:10},{value:"Default Value",paraId:17,tocIndex:10},{value:"activeItemClassName",paraId:17,tocIndex:10},{value:"Class name of the selected option",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"activeItemStyle",paraId:17,tocIndex:10},{value:"Styles for selected options",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"className",paraId:17,tocIndex:10},{value:"Class Name",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"defaultValue",paraId:17,tocIndex:10},{value:"The default selection item, when multiple selection type is array",paraId:17,tocIndex:10},{value:"string | number | string[] | number[]",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"disabled",paraId:17,tocIndex:10},{value:"Whether the whole is disabled",paraId:17,tocIndex:10},{value:"boolean",paraId:17,tocIndex:10},{value:"false",paraId:17,tocIndex:10},{value:"maxSelectedCount",paraId:17,tocIndex:10},{value:"Maximum Number of Optional Items",paraId:17,tocIndex:10},{value:"number",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"minSelectedCount",paraId:17,tocIndex:10},{value:"Number of minimum selectable items",paraId:17,tocIndex:10},{value:"number",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"multiple",paraId:17,tocIndex:10},{value:"Whether to allow multi-selection, the current radio/multi-selection status will be displayed when the tab bar is displayed.",paraId:17,tocIndex:10},{value:"boolean",paraId:17,tocIndex:10},{value:"false",paraId:17,tocIndex:10},{value:"options",paraId:17,tocIndex:10},{value:"Option Data Source",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:18,tocIndex:10},{value:"[]",paraId:17,tocIndex:10},{value:"[]",paraId:17,tocIndex:10},{value:"style",paraId:17,tocIndex:10},{value:"Style",paraId:17,tocIndex:10},{value:"string",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"value",paraId:17,tocIndex:10},{value:"Current selection, array type for multiple selection",paraId:17,tocIndex:10},{value:"string | number | string[] | number[]",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onChange",paraId:17,tocIndex:10},{value:"The selected value changes, triggering a callback",paraId:17,tocIndex:10},{value:"(v: string | number | undefined | string[] | number[], selectedItem: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:19,tocIndex:10},{value:" | undefined | ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:20,tocIndex:10},{value:"[], event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onSelectMax",paraId:17,tocIndex:10},{value:"Maximum Trigger Limit",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:21,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if ALIPAY onSelectMin",paraId:17,tocIndex:10},{value:"Trigger Minimum Limit",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:22,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bindchange",paraId:17,tocIndex:10},{value:"The selected value changes, triggering a callback",paraId:17,tocIndex:10},{value:"(v: string | number | undefined | string[] | number[], selectedItem: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:23,tocIndex:10},{value:" | undefined | ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:24,tocIndex:10},{value:"[], event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bindselectmax",paraId:17,tocIndex:10},{value:"Maximum Trigger Limit",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:25,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"#if WECHAT bindselectmin",paraId:17,tocIndex:10},{value:"Trigger Minimum Limit",paraId:17,tocIndex:10},{value:"(value: string | number, item: ",paraId:17,tocIndex:10},{value:"SelectorItem",paraId:26,tocIndex:10},{value:", event: ",paraId:17,tocIndex:10},{value:"Event",paraId:17,tocIndex:10},{value:") => void",paraId:17,tocIndex:10},{value:"-",paraId:17,tocIndex:10},{value:"Property",paraId:27,tocIndex:11},{value:"Description",paraId:27,tocIndex:11},{value:"Type",paraId:27,tocIndex:11},{value:"Default Value",paraId:27,tocIndex:11},{value:"disabled",paraId:27,tocIndex:11},{value:"Disable",paraId:27,tocIndex:11},{value:"boolean",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"subText",paraId:27,tocIndex:11},{value:"Deputy Copywriter",paraId:27,tocIndex:11},{value:"string",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"text",paraId:27,tocIndex:11},{value:"Copy",paraId:27,tocIndex:11},{value:"string",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"value",paraId:27,tocIndex:11},{value:"Current item value",paraId:27,tocIndex:11},{value:"string | number",paraId:27,tocIndex:11},{value:"-",paraId:27,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:28,tocIndex:13},{value:"Variable name",paraId:29,tocIndex:13},{value:"Default Value",paraId:29,tocIndex:13},{value:"Dark Mode Default",paraId:29,tocIndex:13},{value:"Remarks",paraId:29,tocIndex:13},{value:"--selector-background-color",paraId:29,tocIndex:13},{value:"#ffffff",paraId:29,tocIndex:13},{value:"#1a1a1a",paraId:29,tocIndex:13},{value:"Selector Background Color",paraId:29,tocIndex:13},{value:"--selector-item-background",paraId:29,tocIndex:13},{value:"#f5f5f5",paraId:29,tocIndex:13},{value:"#121212",paraId:29,tocIndex:13},{value:"Selector Item Background Color",paraId:29,tocIndex:13},{value:"--selector-item-active-background",paraId:29,tocIndex:13},{value:"#e7f1ff",paraId:29,tocIndex:13},{value:"#0d2543",paraId:29,tocIndex:13},{value:"Selector Activate Item Background Color",paraId:29,tocIndex:13},{value:"--selector-item-color",paraId:29,tocIndex:13},{value:"#1677ff",paraId:29,tocIndex:13},{value:"#3086ff",paraId:29,tocIndex:13},{value:"Selector item color",paraId:29,tocIndex:13},{value:"--selector-item-sub-color",paraId:29,tocIndex:13},{value:"#999999",paraId:29,tocIndex:13},{value:"#616161",paraId:29,tocIndex:13},{value:"Selector item sub-color",paraId:29,tocIndex:13}]}}]);
