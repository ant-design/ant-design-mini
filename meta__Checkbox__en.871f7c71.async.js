"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4565],{76105:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(24094),o={"src-checkbox-demo-checkbox":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,18608))})),asset:{type:"BLOCK",id:"src-checkbox-demo-checkbox",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},21488:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(24094);const t=[{value:"Multiple selection in a set of options. When used alone, it can represent a switch between two states, and ",paraId:0,tocIndex:0},{value:"switch",paraId:0,tocIndex:0},{value:" Similar. The difference is that switching ",paraId:0,tocIndex:0},{value:"switch",paraId:0,tocIndex:0},{value:" will directly trigger a state change, while ",paraId:0,tocIndex:0},{value:"checkbox",paraId:0,tocIndex:0},{value:" Generally used for status markers and needs to be coordinated with the submit operation.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-checkbox": "antd-mini/es/Checkbox/index",
  "ant-checkbox-group": "antd-mini/es/CheckboxGroup/index"
#endif
#if WECHAT
  "ant-checkbox": "antd-mini/Checkbox/index",
  "ant-checkbox-group": "antd-mini/CheckboxGroup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"By ",paraId:3,tocIndex:3},{value:"checked",paraId:3,tocIndex:3},{value:" Checked state of the binding check box.",paraId:3,tocIndex:3},{value:`#if ALIPAY
<ant-checkbox checked="{{checked}}" onChange="handleCheckedChange">Basic usage</ant-checkbox>
#endif
#if WECHAT
<ant-checkbox checked="{{checked}}" bind:change="handleCheckedChange">Basic usage</ant-checkbox>
#endif
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    checked: false,
  },
  handleCheckedChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
`,paraId:5,tocIndex:3},{value:`#if ALIPAY
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  onChange="handleValueChange"
/>
#endif
#if WECHAT
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  bind:change="handleValueChange"
/>
#endif
`,paraId:6,tocIndex:4},{value:`Page({
  data:{
    value: ['banana'],
     options: [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  handleValueChange(value) {
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
`,paraId:7,tocIndex:4},{value:"van-checkbox",paraId:8,tocIndex:5},{value:" Cooperation ",paraId:8,tocIndex:5},{value:"list",paraId:8,tocIndex:5},{value:" Use together to support custom grouping selection",paraId:8,tocIndex:5},{value:`#if ALIPAY
<block
  a:for="{{customOptions}}"
  a:for-index="index"
  a:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      a:for="{{option.list}}"
      a:for-index="index"
      a:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          onChange="handleCustomChange"
        >
          {{item.title}}
        </ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
#if WECHAT
<block
  wx:for="{{customOptions}}"
  wx:for-index="index"
  wx:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      wx:for="{{option.list}}"
      wx:for-index="index"
      wx:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          bind:change="handleCustomChange"
        >{{item.title}}</ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
`,paraId:9,tocIndex:5},{value:`Page({
  data: {
    customOptions: [
      {
        title: 'Group one',
        list: [
          {
            title: 'Option one',
            value: '1',
          },
        ],
      },
      {
        title: 'Group two',
        list: [
          {
            title: 'Option two',
            value: '2',
          },
        ],
      },
    ],
    customValue: [],
  },
  handleCustomChange(checked, e) {
    let value = this.data.customValue;

#if WECHAT
    const event = checked;
    if (event.detail) {
      value = value.concat(event.target.dataset.value);
    } else {
      value = value.filter((v) => v !== event.target.dataset.value);
    }
#endif

#if ALIPAY
    if (checked) {
      value = value.concat(e.target.dataset.value);
    } else {
      value = value.filter((v) => v !== e.target.dataset.value);
    }
#endif

    this.setData({ customValue: value });
    console.log(value);
  },
});
`,paraId:10,tocIndex:5},{value:"Property",paraId:11,tocIndex:8},{value:"Description",paraId:11,tocIndex:8},{value:"Type",paraId:11,tocIndex:8},{value:"Default Value",paraId:11,tocIndex:8},{value:"checked",paraId:11,tocIndex:8},{value:"Whether selected",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"className",paraId:11,tocIndex:8},{value:"Class Name",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"color",paraId:11,tocIndex:8},{value:"Selected color, same as CSS color value",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"defaultChecked",paraId:11,tocIndex:8},{value:"Is selected by default",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"disabled",paraId:11,tocIndex:8},{value:"Disable",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"false",paraId:11,tocIndex:8},{value:"style",paraId:11,tocIndex:8},{value:"Style",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"#if ALIPAY onChange",paraId:11,tocIndex:8},{value:"Trigger callback when selection status changes",paraId:11,tocIndex:8},{value:"(checked: boolean, event: ",paraId:11,tocIndex:8},{value:"Event",paraId:11,tocIndex:8},{value:"(",paraId:11,tocIndex:8},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:11,tocIndex:8},{value:")) => void",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"#if WECHAT bind:change",paraId:11,tocIndex:8},{value:"Trigger callback when selection status changes",paraId:11,tocIndex:8},{value:"(checked: boolean, event: ",paraId:11,tocIndex:8},{value:"Event",paraId:11,tocIndex:8},{value:"(",paraId:11,tocIndex:8},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:11,tocIndex:8},{value:")) => void",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"Property",paraId:12,tocIndex:9},{value:"Description",paraId:12,tocIndex:9},{value:"Type",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"className",paraId:12,tocIndex:9},{value:"Class Name",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"color",paraId:12,tocIndex:9},{value:"Selected color, same as CSS color value",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"defaultValue",paraId:12,tocIndex:9},{value:"Default selected value",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"disabled",paraId:12,tocIndex:9},{value:"Disable",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"label",paraId:12,tocIndex:9},{value:"Label area slot, receiving value (current item optional item), index (index)",paraId:12,tocIndex:9},{value:"slot",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"options",paraId:12,tocIndex:9},{value:"Specify options",paraId:12,tocIndex:9},{value:"{label: string; value: string; disabled: boolean}[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"position",paraId:12,tocIndex:9},{value:"layout, optional ",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:"\u3001",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"style",paraId:12,tocIndex:9},{value:"Style",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"value",paraId:12,tocIndex:9},{value:"The value of the CheckboxGroup to determine whether the child element is checked.",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"#if ALIPAY onChange",paraId:12,tocIndex:9},{value:"Check to trigger this function when status changes",paraId:12,tocIndex:9},{value:"(value: ",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:", event: ",paraId:12,tocIndex:9},{value:"Event",paraId:12,tocIndex:9},{value:"(",paraId:12,tocIndex:9},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:12,tocIndex:9},{value:")) => void",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"#if WECHAT bind:change",paraId:12,tocIndex:9},{value:"Check to trigger this function when status changes",paraId:12,tocIndex:9},{value:"(value: ",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:", event: ",paraId:12,tocIndex:9},{value:"Event",paraId:12,tocIndex:9},{value:"(",paraId:12,tocIndex:9},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:12,tocIndex:9},{value:")) => void",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:13,tocIndex:11},{value:"Variable name",paraId:14,tocIndex:11},{value:"Default Value",paraId:14,tocIndex:11},{value:"Dark Mode Default",paraId:14,tocIndex:11},{value:"Remarks",paraId:14,tocIndex:11},{value:"--checkbox-header-color",paraId:14,tocIndex:11},{value:"#999999",paraId:14,tocIndex:11},{value:"#616161",paraId:14,tocIndex:11},{value:"Check Box Title Color",paraId:14,tocIndex:11},{value:"--checkbox-border-color",paraId:14,tocIndex:11},{value:"#cccccc",paraId:14,tocIndex:11},{value:"#474747",paraId:14,tocIndex:11},{value:"Check Box Border Color",paraId:14,tocIndex:11},{value:"--checkbox-background-color",paraId:14,tocIndex:11},{value:"#1677ff",paraId:14,tocIndex:11},{value:"#3086ff",paraId:14,tocIndex:11},{value:"Checkbox Background Color",paraId:14,tocIndex:11},{value:"--checkbox-disabled-background",paraId:14,tocIndex:11},{value:"#f5f5f5",paraId:14,tocIndex:11},{value:"#121212",paraId:14,tocIndex:11},{value:"Check box Disable background color",paraId:14,tocIndex:11},{value:"--checkbox-text-color",paraId:14,tocIndex:11},{value:"#333333",paraId:14,tocIndex:11},{value:"#c5cad1",paraId:14,tocIndex:11},{value:"Check Box Text Color",paraId:14,tocIndex:11},{value:"--checkbox-fake-icon-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"Check Box Fake Icon Background Color",paraId:14,tocIndex:11}]}}]);
