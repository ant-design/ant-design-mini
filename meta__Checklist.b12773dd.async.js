"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5328],{87752:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(96069),I={"src-checklist-demo-checklist":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,58156))})),asset:{type:"BLOCK",id:"src-checklist-demo-checklist",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},75823:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(96069);const d=[{value:"\u5217\u8868\u7684\u52FE\u9009\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u5728\u4E00\u7EC4\u5217\u8868\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u6216\u591A\u4E2A\u3002",paraId:1,tocIndex:0},{value:"\u53EF\u52FE\u9009\u5217\u8868\u7684\u4F7F\u7528\u9700\u8981\u9ED8\u8BA4\u81F3\u5C11\u52FE\u9009\u4E00\u9879\uFF0C\u65B9\u4FBF\u7528\u6237\u4E86\u89E3\u5217\u8868\u662F\u53EF\u4EE5\u52FE\u9009\u7684\u3002",paraId:1,tocIndex:0},{value:"\u5728 ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-checklist": "antd-mini/es/Checklist/index",
#endif
#if WECHAT
  "ant-checklist": "antd-mini/Checklist/index",
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-checklist
  defaultValue="{{ [1] }}"
  options="{{ options }}"
  data-options="{{ options }}"
  onChange="onChange" />
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    options: [
      {
        value: 1,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98791',
      },
      {
        value: 2,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98792',
      },
      {
        value: 3,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98793',
      },
    ],
  },
  onChange(v, items, e) {
    console.log('\u5F53\u524D\u9009\u4E2D\u7684\u503C\u4E3A\uFF1A', v, items, e);
  },
});
`,paraId:5,tocIndex:3},{value:"\u4F20\u5165 ",paraId:6,tocIndex:4},{value:"multiple",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\u652F\u6301\u591A\u9009\u6A21\u5F0F\u3002 ",paraId:6,tocIndex:4},{value:"value",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\u548C ",paraId:6,tocIndex:4},{value:"onChange",paraId:6,tocIndex:4},{value:" \u4E8B\u4EF6\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u72B6\u6001\u53D7\u63A7\u3002",paraId:6,tocIndex:4},{value:`<ant-checklist
  value="{{ value }}"
  options="{{ options }}"
  multiple
  onChange="onChangeControlled" />
`,paraId:7,tocIndex:4},{value:`Page({
  data: {
    value: [1, 2],
    options: [
      {
        value: 1,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98791',
      },
      {
        value: 2,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98792',
      },
      {
        value: 3,
        title: '\u53EF\u52FE\u9009\u5217\u8868\u98793',
      },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ value });
#endif
#if WECHAT
    this.setData({ value: value.detail[0] });
#endif
  },
});
`,paraId:8,tocIndex:4},{value:"\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u52FE\u9009\u56FE\u6807\u4EE5\u53CA\u6837\u5F0F",paraId:9,tocIndex:5},{value:`<ant-checklist
  defaultValue="{{ [2] }}"
  options="{{ options }}"
  multiple
  onChange="onChange">
  <view slot="icon">
    <ant-icon
      style="color: red"
      type="LikeOutline"
      className="demo-checklist-checked-icon" />
  </view>
  <view
    slot="content"
    slot-scope="props">
    title: {{ props.item.title }}
  </view>
</ant-checklist>
`,paraId:10,tocIndex:5},{value:"\u5C5E\u6027",paraId:11,tocIndex:7},{value:"\u8BF4\u660E",paraId:11,tocIndex:7},{value:"\u7C7B\u578B",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:7},{value:"className",paraId:11,tocIndex:7},{value:"\u7C7B\u540D",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"content",paraId:11,tocIndex:7},{value:"CheckListItem \u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u63A5\u6536 item \u53C2\u6570",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"defaultValue",paraId:11,tocIndex:7},{value:"\u9ED8\u8BA4\u9009\u4E2D\u6570\u636E",paraId:11,tocIndex:7},{value:"string | number | (string | number)[]",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"icon",paraId:11,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u9009\u4E2D Icon \u63D2\u69FD",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"multiple",paraId:11,tocIndex:7},{value:"\u662F\u5426\u652F\u6301\u591A\u9009",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"false",paraId:11,tocIndex:7},{value:"options",paraId:11,tocIndex:7},{value:"\u914D\u7F6E\u6BCF\u4E00\u5217\u7684\u9009\u9879",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:12,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"style",paraId:11,tocIndex:7},{value:"\u6837\u5F0F",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"value",paraId:11,tocIndex:7},{value:"\u9009\u4E2D\u6570\u636E",paraId:11,tocIndex:7},{value:"string | number | (string | number)[]",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"#if ALIPAY onChange",paraId:11,tocIndex:7},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(value: string | number | (string | number)[], column: ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:13,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:14,tocIndex:7},{value:"[], event: ",paraId:11,tocIndex:7},{value:"Event",paraId:11,tocIndex:7},{value:") => void",paraId:11,tocIndex:7},{value:"#if WECHAT bind:change",paraId:11,tocIndex:7},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:11,tocIndex:7},{value:"(value: string | number | (string | number)[], column: ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:15,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:16,tocIndex:7},{value:"[], event: ",paraId:11,tocIndex:7},{value:"Event",paraId:11,tocIndex:7},{value:") => void",paraId:11,tocIndex:7},{value:"\u53C2\u6570",paraId:17,tocIndex:8},{value:"\u8BF4\u660E",paraId:17,tocIndex:8},{value:"\u7C7B\u578B",paraId:17,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:8},{value:"description",paraId:17,tocIndex:8},{value:"\u63CF\u8FF0",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"disabled",paraId:17,tocIndex:8},{value:"\u662F\u5426\u7981\u7528",paraId:17,tocIndex:8},{value:"boolean",paraId:17,tocIndex:8},{value:"false",paraId:17,tocIndex:8},{value:"image",paraId:17,tocIndex:8},{value:"\u56FE\u7247",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"readonly",paraId:17,tocIndex:8},{value:"\u662F\u5426\u53EA\u8BFB",paraId:17,tocIndex:8},{value:"boolean",paraId:17,tocIndex:8},{value:"false",paraId:17,tocIndex:8},{value:"title",paraId:17,tocIndex:8},{value:"\u6807\u9898",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"value",paraId:17,tocIndex:8},{value:"\u503C",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:18,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:19,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:19,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:19,tocIndex:10},{value:"\u5907\u6CE8",paraId:19,tocIndex:10},{value:"--checklist-background-color",paraId:19,tocIndex:10},{value:"#1677ff",paraId:19,tocIndex:10},{value:"#3086ff",paraId:19,tocIndex:10},{value:"\u6E05\u5355\u80CC\u666F\u989C\u8272",paraId:19,tocIndex:10},{value:"--check-list-item-background-color",paraId:19,tocIndex:10},{value:"#ffffff",paraId:19,tocIndex:10},{value:"#1a1a1a",paraId:19,tocIndex:10},{value:"\u6E05\u5355\u9879\u80CC\u666F\u989C\u8272",paraId:19,tocIndex:10},{value:"--check-list-item-hover-background-color",paraId:19,tocIndex:10},{value:"#eeeeee",paraId:19,tocIndex:10},{value:"#2b2b2b",paraId:19,tocIndex:10},{value:"\u6E05\u5355\u9879\u60AC\u505C\u80CC\u666F\u989C\u8272",paraId:19,tocIndex:10},{value:"--check-list-item-content-color",paraId:19,tocIndex:10},{value:"#333333",paraId:19,tocIndex:10},{value:"#c5cad1",paraId:19,tocIndex:10},{value:"\u6E05\u5355\u9879\u5185\u5BB9\u989C\u8272",paraId:19,tocIndex:10},{value:"--check-list-item-description-color",paraId:19,tocIndex:10},{value:"#999999",paraId:19,tocIndex:10},{value:"#616161",paraId:19,tocIndex:10},{value:"\u6E05\u5355\u9879\u63CF\u8FF0\u989C\u8272",paraId:19,tocIndex:10}]}}]);
