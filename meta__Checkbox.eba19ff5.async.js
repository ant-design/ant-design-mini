"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4059],{93175:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(97987),o={"src-checkbox-demo-checkbox":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,18608))})),asset:{type:"BLOCK",id:"src-checkbox-demo-checkbox",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},30074:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(97987);const d=[{value:"\u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u3002\u5355\u72EC\u4F7F\u7528\u65F6\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u4E0E ",paraId:0,tocIndex:0},{value:"switch",paraId:0,tocIndex:0},{value:" \u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\uFF0C\u5207\u6362 ",paraId:0,tocIndex:0},{value:"switch",paraId:0,tocIndex:0},{value:" \u4F1A\u76F4\u63A5\u89E6\u53D1\u72B6\u6001\u6539\u53D8\uFF0C\u800C ",paraId:0,tocIndex:0},{value:"checkbox",paraId:0,tocIndex:0},{value:" \u4E00\u822C\u7528\u4E8E\u72B6\u6001\u6807\u8BB0\uFF0C\u9700\u8981\u4E0E\u63D0\u4EA4\u64CD\u4F5C\u914D\u5408\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-checkbox": "antd-mini/es/Checkbox/index",
  "ant-checkbox-group": "antd-mini/es/CheckboxGroup/index"
#endif
#if WECHAT
  "ant-checkbox": "antd-mini/Checkbox/index",
  "ant-checkbox-group": "antd-mini/CheckboxGroup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"checked",paraId:3,tocIndex:3},{value:" \u7ED1\u5B9A\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002",paraId:3,tocIndex:3},{value:`#if ALIPAY
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
`,paraId:7,tocIndex:4},{value:"van-checkbox",paraId:8,tocIndex:5},{value:" \u914D\u5408 ",paraId:8,tocIndex:5},{value:"list",paraId:8,tocIndex:5},{value:" \u4E00\u8D77\u4F7F\u7528\uFF0C\u5373\u53EF\u652F\u6301\u81EA\u5B9A\u4E49\u5206\u7EC4\u9009\u62E9",paraId:8,tocIndex:5},{value:`#if ALIPAY
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
`,paraId:10,tocIndex:5},{value:"\u5C5E\u6027",paraId:11,tocIndex:8},{value:"\u8BF4\u660E",paraId:11,tocIndex:8},{value:"\u7C7B\u578B",paraId:11,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:8},{value:"checked",paraId:11,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"className",paraId:11,tocIndex:8},{value:"\u7C7B\u540D",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"color",paraId:11,tocIndex:8},{value:"\u9009\u4E2D\u7684\u989C\u8272\uFF0C\u540C CSS \u8272\u503C",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"defaultChecked",paraId:11,tocIndex:8},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"disabled",paraId:11,tocIndex:8},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:8},{value:"boolean",paraId:11,tocIndex:8},{value:"false",paraId:11,tocIndex:8},{value:"style",paraId:11,tocIndex:8},{value:"\u6837\u5F0F",paraId:11,tocIndex:8},{value:"string",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"#if ALIPAY onChange",paraId:11,tocIndex:8},{value:"\u9009\u4E2D\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u56DE\u8C03",paraId:11,tocIndex:8},{value:"(checked: boolean, event: ",paraId:11,tocIndex:8},{value:"Event",paraId:11,tocIndex:8},{value:"(",paraId:11,tocIndex:8},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:11,tocIndex:8},{value:")) => void",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"#if WECHAT bind:change",paraId:11,tocIndex:8},{value:"\u9009\u4E2D\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u56DE\u8C03",paraId:11,tocIndex:8},{value:"(checked: boolean, event: ",paraId:11,tocIndex:8},{value:"Event",paraId:11,tocIndex:8},{value:"(",paraId:11,tocIndex:8},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:11,tocIndex:8},{value:")) => void",paraId:11,tocIndex:8},{value:"-",paraId:11,tocIndex:8},{value:"\u5C5E\u6027",paraId:12,tocIndex:9},{value:"\u8BF4\u660E",paraId:12,tocIndex:9},{value:"\u7C7B\u578B",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"className",paraId:12,tocIndex:9},{value:"\u7C7B\u540D",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"color",paraId:12,tocIndex:9},{value:"\u9009\u4E2D\u7684\u989C\u8272\uFF0C\u540C CSS \u8272\u503C",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"defaultValue",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"disabled",paraId:12,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"label",paraId:12,tocIndex:9},{value:"label \u533A\u63D2\u69FD\uFF0C\u63A5\u6536 value\uFF08\u5F53\u524D\u9879\u53EF\u9009\u9879 item\uFF09\u3001index\uFF08\u7D22\u5F15\uFF09",paraId:12,tocIndex:9},{value:"slot",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"options",paraId:12,tocIndex:9},{value:"\u6307\u5B9A\u53EF\u9009\u9879",paraId:12,tocIndex:9},{value:"{label: string; value: string; disabled: boolean}[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"position",paraId:12,tocIndex:9},{value:"\u5E03\u5C40\uFF0C\u53EF\u9009 ",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:"\u3001",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"style",paraId:12,tocIndex:9},{value:"\u6837\u5F0F",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"value",paraId:12,tocIndex:9},{value:"CheckboxGroup \u7684\u503C\uFF0C\u51B3\u5B9A\u5B50\u5143\u7D20\u662F\u5426\u52FE\u9009",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"#if ALIPAY onChange",paraId:12,tocIndex:9},{value:"\u52FE\u9009\u72B6\u6001\u53D8\u5316\u65F6\u89E6\u53D1\u6B64\u51FD\u6570",paraId:12,tocIndex:9},{value:"(value: ",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:", event: ",paraId:12,tocIndex:9},{value:"Event",paraId:12,tocIndex:9},{value:"(",paraId:12,tocIndex:9},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:12,tocIndex:9},{value:")) => void",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"#if WECHAT bind:change",paraId:12,tocIndex:9},{value:"\u52FE\u9009\u72B6\u6001\u53D8\u5316\u65F6\u89E6\u53D1\u6B64\u51FD\u6570",paraId:12,tocIndex:9},{value:"(value: ",paraId:12,tocIndex:9},{value:"string[]",paraId:12,tocIndex:9},{value:", event: ",paraId:12,tocIndex:9},{value:"Event",paraId:12,tocIndex:9},{value:"(",paraId:12,tocIndex:9},{value:"https://opendocs.alipay.com/mini/framework/event-object",paraId:12,tocIndex:9},{value:")) => void",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:13,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:14,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:14,tocIndex:11},{value:"\u5907\u6CE8",paraId:14,tocIndex:11},{value:"--checkbox-header-color",paraId:14,tocIndex:11},{value:"#999999",paraId:14,tocIndex:11},{value:"#616161",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u6807\u9898\u989C\u8272",paraId:14,tocIndex:11},{value:"--checkbox-border-color",paraId:14,tocIndex:11},{value:"#cccccc",paraId:14,tocIndex:11},{value:"#474747",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u8FB9\u6846\u989C\u8272",paraId:14,tocIndex:11},{value:"--checkbox-background-color",paraId:14,tocIndex:11},{value:"#1677ff",paraId:14,tocIndex:11},{value:"#3086ff",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11},{value:"--checkbox-disabled-background",paraId:14,tocIndex:11},{value:"#f5f5f5",paraId:14,tocIndex:11},{value:"#121212",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u7981\u7528\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11},{value:"--checkbox-text-color",paraId:14,tocIndex:11},{value:"#333333",paraId:14,tocIndex:11},{value:"#c5cad1",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u6587\u672C\u989C\u8272",paraId:14,tocIndex:11},{value:"--checkbox-fake-icon-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"\u590D\u9009\u6846\u5047\u56FE\u6807\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11}]}}]);
