"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6870],{64650:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(22067),o={"src-checklist-demo-checklist":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,58156))})),asset:{type:"BLOCK",id:"src-checklist-demo-checklist",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},37798:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(22067);const t=[{value:"The check operation of the list.",paraId:0,tocIndex:0},{value:"Select one or more in a group of list items.",paraId:1,tocIndex:0},{value:"To use a checkable list, you need to check at least one item by default to make it easier for users to understand that the list can be checked.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-checklist": "antd-mini/es/Checklist/index",
#endif
#if WECHAT
  "ant-checklist": "antd-mini/Checklist/index",
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-checklist
  defaultValue="{{[1]}}"
  options="{{options}}"
  data-options="{{options}}"
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
    console.log('\u5F53\u524D\u9009\u4E2D\u7684Value\u4E3A\uFF1A', v, items, e);
  },
});
`,paraId:5,tocIndex:3},{value:"Incoming ",paraId:6,tocIndex:4},{value:"multiple",paraId:6,tocIndex:4},{value:" Property supports multiple selection mode. ",paraId:6,tocIndex:4},{value:"value",paraId:6,tocIndex:4},{value:" property and ",paraId:6,tocIndex:4},{value:"onChange",paraId:6,tocIndex:4},{value:" Events are used together to achieve state control.",paraId:6,tocIndex:4},{value:`<ant-checklist
  value="{{value}}"
  options="{{options}}"
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
`,paraId:8,tocIndex:4},{value:"You can customize the check icon and style through the slot.",paraId:9,tocIndex:5},{value:`<ant-checklist
  defaultValue="{{[2]}}"
  options="{{options}}"
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
    title: {{props.item.title}}
  </view>
</ant-checklist>
`,paraId:10,tocIndex:5},{value:"Property",paraId:11,tocIndex:7},{value:"Description",paraId:11,tocIndex:7},{value:"Type",paraId:11,tocIndex:7},{value:"Default Value",paraId:11,tocIndex:7},{value:"className",paraId:11,tocIndex:7},{value:"Class Name",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"content",paraId:11,tocIndex:7},{value:"CheckListItem a custom content area scope slot that receives the item parameter",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"defaultValue",paraId:11,tocIndex:7},{value:"Data selected by default",paraId:11,tocIndex:7},{value:"string | number | (string | number)[]",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"icon",paraId:11,tocIndex:7},{value:"Customize the selected Icon slot",paraId:11,tocIndex:7},{value:"slot",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"multiple",paraId:11,tocIndex:7},{value:"Whether multiple selection is supported",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"false",paraId:11,tocIndex:7},{value:"options",paraId:11,tocIndex:7},{value:"Configure options for each column",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:12,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"[]",paraId:11,tocIndex:7},{value:"style",paraId:11,tocIndex:7},{value:"Style",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"value",paraId:11,tocIndex:7},{value:"Selected data",paraId:11,tocIndex:7},{value:"string | number | (string | number)[]",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"#if ALIPAY onChange",paraId:11,tocIndex:7},{value:"Trigger a callback when the selected item changes",paraId:11,tocIndex:7},{value:"(value: string | number | (string | number)[], column: ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:13,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:14,tocIndex:7},{value:"[], event: ",paraId:11,tocIndex:7},{value:"Event",paraId:11,tocIndex:7},{value:") => void",paraId:11,tocIndex:7},{value:"#if WECHAT bindchange",paraId:11,tocIndex:7},{value:"Trigger a callback when the selected item changes",paraId:11,tocIndex:7},{value:"(value: string | number | (string | number)[], column: ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:15,tocIndex:7},{value:" | ",paraId:11,tocIndex:7},{value:"ChecklistItem",paraId:16,tocIndex:7},{value:"[], event: ",paraId:11,tocIndex:7},{value:"Event",paraId:11,tocIndex:7},{value:") => void",paraId:11,tocIndex:7},{value:"Parameters",paraId:17,tocIndex:8},{value:"Description",paraId:17,tocIndex:8},{value:"Type",paraId:17,tocIndex:8},{value:"Default Value",paraId:17,tocIndex:8},{value:"description",paraId:17,tocIndex:8},{value:"Description",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"disabled",paraId:17,tocIndex:8},{value:"Disable",paraId:17,tocIndex:8},{value:"boolean",paraId:17,tocIndex:8},{value:"false",paraId:17,tocIndex:8},{value:"image",paraId:17,tocIndex:8},{value:"Picture",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"readonly",paraId:17,tocIndex:8},{value:"Read-only",paraId:17,tocIndex:8},{value:"boolean",paraId:17,tocIndex:8},{value:"false",paraId:17,tocIndex:8},{value:"title",paraId:17,tocIndex:8},{value:"Title",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"value",paraId:17,tocIndex:8},{value:"Value",paraId:17,tocIndex:8},{value:"string",paraId:17,tocIndex:8},{value:"-",paraId:17,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:18,tocIndex:10},{value:"Variable name",paraId:19,tocIndex:10},{value:"Default Value",paraId:19,tocIndex:10},{value:"Dark Mode Default",paraId:19,tocIndex:10},{value:"Remarks",paraId:19,tocIndex:10},{value:"--checklist-background-color",paraId:19,tocIndex:10},{value:"#1677ff",paraId:19,tocIndex:10},{value:"#3086ff",paraId:19,tocIndex:10},{value:"List background color",paraId:19,tocIndex:10},{value:"--check-list-item-background-color",paraId:19,tocIndex:10},{value:"#ffffff",paraId:19,tocIndex:10},{value:"#1a1a1a",paraId:19,tocIndex:10},{value:"List Item Background Color",paraId:19,tocIndex:10},{value:"--check-list-item-hover-background-color",paraId:19,tocIndex:10},{value:"#eeeeee",paraId:19,tocIndex:10},{value:"#2b2b2b",paraId:19,tocIndex:10},{value:"List item hover background color",paraId:19,tocIndex:10},{value:"--check-list-item-content-color",paraId:19,tocIndex:10},{value:"#333333",paraId:19,tocIndex:10},{value:"#c5cad1",paraId:19,tocIndex:10},{value:"List Item Content Color",paraId:19,tocIndex:10},{value:"--check-list-item-description-color",paraId:19,tocIndex:10},{value:"#999999",paraId:19,tocIndex:10},{value:"#616161",paraId:19,tocIndex:10},{value:"List Item Description Color",paraId:19,tocIndex:10}]}}]);
