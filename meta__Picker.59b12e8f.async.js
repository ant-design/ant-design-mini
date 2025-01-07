"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9710],{62882:function(I,e,a){a.r(e),a.d(e,{demos:function(){return t}});var d=a(67294),n=a(40568),t={"src-picker-demo-picker":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,66976))})),asset:{type:"BLOCK",id:"src-picker-demo-picker",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},94551:function(I,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(40568);const n=[{value:"Picker \u9009\u62E9\u5668\u663E\u793A\u4E00\u4E2A\u6216\u591A\u4E2A\u9009\u9879\u96C6\u5408\u7684\u53EF\u6EDA\u52A8\u5217\u8868\uFF0C\u76F8\u6BD4\u4E8E\u539F\u751F picker\uFF0C\u5B9E\u73B0\u4E86 iOS \u4E0E Android \u7AEF\u4F53\u9A8C\u7684\u4E00\u81F4\u6027\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u4E00\u7EC4\u6216\u591A\u7EC4\u5173\u8054\u9009\u9879\u4F9B\u7528\u6237\u9009\u62E9\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u5C11\u4E8E 5 \u4E2A\u9009\u9879\u65F6\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 Radio \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002",paraId:1,tocIndex:0},{value:"\u5728 ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-picker": "antd-mini/es/Picker/index",
  "ant-cascader-picker": "antd-mini/es/Picker/CascaderPicker/index"
#endif
#if WECHAT
  "ant-picker": "antd-mini/Picker/index",
  "ant-cascader-picker": "antd-mini/Picker/CascaderPicker/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-picker
  placeholder="\u8BF7\u9009\u62E9"
  title="\u8BF7\u9009\u62E9"
  emptyText="\u6682\u65E0\u6570\u636E"
  defaultValue="{{defaultValue}}"
  options="{{list}}"
#if ALIPAY
  onCancel="handleDismiss"
  onVisibleChange="handleTriggerPicker"
  onOk="handleOk"
  onChange="handleChange"
#endif
#if WECHAT
  bindcancel="handleDismiss"
  bindvisiblechange="handleTriggerPicker"
  bindok="handleOk"
  bindchange="handleChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    defaultValue: '\u4E0A\u6D77',
    list: ['\u5317\u4EAC', '\u4E0A\u6D77', '\u6DF1\u5733', '\u5E7F\u5DDE', '\u5357\u4EAC', '\u6B66\u6C49', '\u65E0\u9521', '\u82CF\u5DDE'],
  },
  handleDismiss(e) {
    console.log('onCancel', e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleOk(value, column, e) {
    console.log('onOk value', value, 'onOk  column', column, e);
  },
  handleChange(value, column, e) {
    console.log('onChange value', value, 'onChange  column', column, e);
  },
});
`,paraId:5,tocIndex:3},{value:"onFormat",paraId:6,tocIndex:4},{value:" \u51FD\u6570\u8FD4\u56DE\u503C\u5219\u662F\u5DF2\u9009\u533A\u57DF\u9700\u8981\u6E32\u67D3\u7684\u503C\u3002",paraId:6,tocIndex:4},{value:`<ant-picker
#if ALIPAY
  onFormat="onFormat"
#endif
#if WECHAT
  onFormat="{{onFormat}}"
#endif
  />
`,paraId:7,tocIndex:4},{value:`Page({
  data: {
#if WECHAT
    onFormat: (value) => {
      return \`\u5DF2\u9009\u62E9\uFF1A\${value}\`;
    },
#endif
  },
#if ALIPAY
  onFormat: (value) => {
    return \`\u5DF2\u9009\u62E9\uFF1A\${value}\`;
  },
#endif
})
`,paraId:8,tocIndex:4},{value:"\u5F53\u51FA\u73B0\u590D\u6742\u9009\u9879\u65F6\uFF0C\u4F46\u53C8\u4E0D\u9700\u8981\u9009\u9879\u4E4B\u95F4\u8054\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E0B\u65B9\u5F0F\u5B9E\u73B0\u591A\u5217\u9009\u62E9\uFF1A",paraId:9,tocIndex:5},{value:`<ant-picker
  defaultValue="{{['Tues', 'pm']}}"
  options="{{columns}}"
#if ALIPAY
  onFormat="formatTime"
#endif
#if WECHAT
  onFormat="{{formatTime}}"
  bindok="handleOk"
#endif
/>
`,paraId:10,tocIndex:5},{value:`Page({
  data: {
    columns: [
      [
        {
          label: '\u5468\u4E00',
          value: 'Mon',
        },
        {
          label: '\u5468\u4E8C',
          value: 'Tues',
        },
        {
          label: '\u5468\u4E09',
          value: 'Wed',
        },
        {
          label: '\u5468\u56DB',
          value: 'Thur',
        },
        {
          label: '\u5468\u4E94',
          value: 'Fri',
        },
      ],
      [
        {
          label: '\u4E0A\u5348',
          value: 'am',
        },
        {
          label: '\u4E0B\u5348',
          value: 'pm',
        },
      ],
    ],
#if WECHAT
    formatTime: (value) => {
      return column.map((c) => c && c.label).join('\uFF0C');
    },
#endif
  },
#if ALIPAY
  formatTime: (value) => {
    return column.map((c) => c && c.label).join('\uFF0C');
  }
#endif
})
`,paraId:11,tocIndex:5},{value:"value",paraId:12,tocIndex:6},{value:" \u5C5E\u6027\u548C ",paraId:12,tocIndex:6},{value:"ok",paraId:12,tocIndex:6},{value:" \u4E8B\u4EF6\uFF0C\u914D\u5408\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:12,tocIndex:6},{value:` <ant-picker
  value="{{value}}"
  options="{{list}}"
#if ALIPAY
  onOk="handleControlledOk"
#endif
#if WECHAT
  bindok="handleControlledOk"
#endif
/>
<ant-button onTap="handleChangeControlled">\u9009\u62E9\u6DF1\u5733</ant-button>
<ant-button onTap="handleClearControlled">\u6E05\u7A7A</ant-button>
`,paraId:13,tocIndex:6},{value:`Page({
  data:{
    value: '\u4E0A\u6D77',
    list: ['\u5317\u4EAC', '\u4E0A\u6D77', '\u6DF1\u5733', '\u5E7F\u5DDE', '\u5357\u4EAC', '\u6B66\u6C49', '\u65E0\u9521', '\u82CF\u5DDE'],
  },
  handleControlledOk(value) {
#if ALIPAY
    this.setData({
      value,
    });
#endif
#if WECHAT
    this.setData({
      value: value.detail[0],
    });
#endif
  },
  handleClearControlled() {
    this.setData({
      value: '',
    });
  },
  handleChangeControlled() {
    this.setData({
      value: '\u6DF1\u5733',
    });
  },
})
`,paraId:14,tocIndex:6},{value:"\u5F53\u51FA\u73B0\u66F4\u590D\u6742\u9009\u9879\u65F6\uFF0C\u9700\u8981\u9009\u9879\u4E4B\u95F4\u8054\u52A8\uFF0C\u5C31\u9700\u8981\u5F15\u5165 ",paraId:15,tocIndex:7},{value:"ant-cascader-picker",paraId:15,tocIndex:7},{value:" \u7EA7\u8054\u9009\u62E9\u7EC4\u4EF6\u6765\u5B9E\u73B0\u3002\u8BE5\u7EC4\u4EF6\u901A\u8FC7\u4F20\u5165\u4EE5\u4E0B\u7684\u6811\u72B6\u7ED3\u6784\u6765\u5B9E\u73B0\u7EA7\u8054\u529F\u80FD\uFF1A",paraId:15,tocIndex:7},{value:`<ant-cascader-picker
  options="{{cityList}}"
/>
`,paraId:16,tocIndex:7},{value:`Page({
  data: {
    cityList: [
      {
        label: '\u5317\u4EAC',
        value: '11',
        children: [
          {
            label: '\u5317\u4EAC',
            value: '110',
          },
        ],
      },
      {
        label: '\u6CB3\u5317',
        value: '18',
        children: [
          {
            label: '\u77F3\u5BB6\u5E84',
            value: '188',
          },
          {
            label: '\u5510\u5C71',
            value: '181',
          },
        ],
      },
    ],
  },
});
`,paraId:17,tocIndex:7},{value:"\u5C5E\u6027",paraId:18,tocIndex:10},{value:"\u8BF4\u660E",paraId:18,tocIndex:10},{value:"\u7C7B\u578B",paraId:18,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:10},{value:"animationType",paraId:18,tocIndex:10},{value:"\u52A8\u753B\u7C7B\u578B\uFF0C\u53EF\u9009",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:" ",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:"\uFF0C\u9ED8\u8BA4\u4F7F\u7528",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:"\u52A8\u753B\u6027\u80FD\u66F4\u597D\u3002\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93 bug\uFF0C\u5F39\u7A97\u5185 picker-view \u9634\u5F71\u6837\u5F0F\u5728 iOS \u4E0B\u53EF\u80FD\u5B58\u5728\u6837\u5F0F\u95EE\u9898\uFF0C\u53EF\u6682\u5207\u6362\u4E3A",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:"\u89E3\u51B3",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:"className",paraId:18,tocIndex:10},{value:"\u7C7B\u540D",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"defaultValue",paraId:18,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:10},{value:"string | number | Array<string | number>",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"disabled",paraId:18,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"cancelText",paraId:18,tocIndex:10},{value:"\u53D6\u6D88\u6587\u6848",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'\u53D6\u6D88'",paraId:18,tocIndex:10},{value:"content",paraId:18,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"indicatorStyle",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u6846\u6837\u5F0F",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"indicatorClassName",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u6846\u7684\u7C7B\u540D",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"maskClassName",paraId:18,tocIndex:10},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"maskClosable",paraId:18,tocIndex:10},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"true",paraId:18,tocIndex:10},{value:"maskStyle",paraId:18,tocIndex:10},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"okText",paraId:18,tocIndex:10},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u6848",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'\u786E\u5B9A'",paraId:18,tocIndex:10},{value:"emptyText",paraId:18,tocIndex:10},{value:"\u7A7A\u72B6\u6001\u6309\u94AE\u6587\u6848",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'\u6682\u65E0\u6570\u636E'",paraId:18,tocIndex:10},{value:"options",paraId:18,tocIndex:10},{value:"picker \u6570\u636E\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u7684\u9009\u9879",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:19,tocIndex:10},{value:"[]",paraId:18,tocIndex:10},{value:"[]",paraId:18,tocIndex:10},{value:"placeholder",paraId:18,tocIndex:10},{value:"\u63D0\u793A\u6587\u6848",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'\u8BF7\u9009\u62E9'",paraId:18,tocIndex:10},{value:"popClassName",paraId:18,tocIndex:10},{value:"\u5F39\u51FA\u6846\u7C7B\u540D",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"popStyle",paraId:18,tocIndex:10},{value:"\u5F39\u51FA\u6846\u6837\u5F0F",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"prefix",paraId:18,tocIndex:10},{value:"\u524D\u7F00",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"style",paraId:18,tocIndex:10},{value:"\u6837\u5F0F",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"suffix",paraId:18,tocIndex:10},{value:"\u540E\u7F00",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"title",paraId:18,tocIndex:10},{value:"\u5F39\u51FA\u6846\u6807\u9898",paraId:18,tocIndex:10},{value:"string | slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"value",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u7684\u503C",paraId:18,tocIndex:10},{value:"string | number | Array<string | number>",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"visible",paraId:18,tocIndex:10},{value:"\u662F\u5426\u663E\u793A",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"defaultVisible",paraId:18,tocIndex:10},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"onFormat",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u503C\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:20,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:21,tocIndex:10},{value:") => string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onOk",paraId:18,tocIndex:10},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:22,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:23,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onCancel",paraId:18,tocIndex:10},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onChange",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:24,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:25,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onVisibleChange",paraId:18,tocIndex:10},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:18,tocIndex:10},{value:"(visible: boolean, event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindok",paraId:18,tocIndex:10},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:26,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:27,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindcancel",paraId:18,tocIndex:10},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindchange",paraId:18,tocIndex:10},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:28,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:29,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindvisiblechange",paraId:18,tocIndex:10},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:18,tocIndex:10},{value:"(visible: boolean, event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"\u5C5E\u6027",paraId:30,tocIndex:11},{value:"\u8BF4\u660E",paraId:30,tocIndex:11},{value:"\u7C7B\u578B",paraId:30,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:30,tocIndex:11},{value:"animationType",paraId:30,tocIndex:11},{value:"\u52A8\u753B\u7C7B\u578B\uFF0C\u53EF\u9009",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:" ",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:"\uFF0C\u9ED8\u8BA4\u4F7F\u7528",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:"\u52A8\u753B\u6027\u80FD\u66F4\u597D\u3002\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93 bug\uFF0C\u5F39\u7A97\u5185 picker-view \u9634\u5F71\u6837\u5F0F\u5728 iOS \u4E0B\u53EF\u80FD\u5B58\u5728\u6837\u5F0F\u95EE\u9898\uFF0C\u53EF\u6682\u5207\u6362\u4E3A",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:"\u89E3\u51B3",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:"className",paraId:30,tocIndex:11},{value:"\u7C7B\u540D",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"defaultValue",paraId:30,tocIndex:11},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C",paraId:30,tocIndex:11},{value:"string[]",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"disabled",paraId:30,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"cancelText",paraId:30,tocIndex:11},{value:"\u53D6\u6D88\u6587\u6848",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'\u53D6\u6D88'",paraId:30,tocIndex:11},{value:"content",paraId:30,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"format",paraId:30,tocIndex:11},{value:"\u65F6\u95F4\u683C\u5F0F\u5316\u663E\u793A\uFF0C\u683C\u5F0F\u540C",paraId:30,tocIndex:11},{value:"dayjs",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'YYYY/MM/DD'",paraId:30,tocIndex:11},{value:"indicatorStyle",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u6846\u6837\u5F0F",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"indicatorClassName",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u6846\u7684\u7C7B\u540D",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"maskClassName",paraId:30,tocIndex:11},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"maskClosable",paraId:30,tocIndex:11},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"true",paraId:30,tocIndex:11},{value:"maskStyle",paraId:30,tocIndex:11},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"okText",paraId:30,tocIndex:11},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u6848",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'\u786E\u5B9A'",paraId:30,tocIndex:11},{value:"options",paraId:30,tocIndex:11},{value:"\u53EF\u9009\u6570\u636E",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:31,tocIndex:11},{value:"[]",paraId:30,tocIndex:11},{value:"[]",paraId:30,tocIndex:11},{value:"placeholder",paraId:30,tocIndex:11},{value:"\u63D0\u793A\u6587\u6848",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'\u8BF7\u9009\u62E9'",paraId:30,tocIndex:11},{value:"popClassName",paraId:30,tocIndex:11},{value:"\u5F39\u51FA\u6846\u7C7B\u540D",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"popStyle",paraId:30,tocIndex:11},{value:"\u5F39\u51FA\u6846\u6837\u5F0F",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"prefix",paraId:30,tocIndex:11},{value:"\u524D\u7F00",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"style",paraId:30,tocIndex:11},{value:"\u6837\u5F0F",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"suffix",paraId:30,tocIndex:11},{value:"\u540E\u7F00",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"title",paraId:30,tocIndex:11},{value:"\u5F39\u51FA\u6846\u6807\u9898",paraId:30,tocIndex:11},{value:"string | slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"value",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u7684\u503C",paraId:30,tocIndex:11},{value:"string[]",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"visible",paraId:30,tocIndex:11},{value:"\u662F\u5426\u663E\u793A",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"defaultVisible",paraId:30,tocIndex:11},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"onFormat",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u503C\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u5C55\u793A labels.join('')",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:32,tocIndex:11},{value:"[]) => string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onOk",paraId:30,tocIndex:11},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:33,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onCancel",paraId:30,tocIndex:11},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onChange",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:34,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:30,tocIndex:11},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:30,tocIndex:11},{value:"(visible: boolean, event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindok",paraId:30,tocIndex:11},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:35,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindcancel",paraId:30,tocIndex:11},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindchange",paraId:30,tocIndex:11},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:36,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindvisibleChange",paraId:30,tocIndex:11},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:30,tocIndex:11},{value:"(visible: boolean, event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"\u53C2\u6570",paraId:37,tocIndex:12},{value:"\u8BF4\u660E",paraId:37,tocIndex:12},{value:"\u7C7B\u578B",paraId:37,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:37,tocIndex:12},{value:"label",paraId:37,tocIndex:12},{value:"\u6587\u5B57",paraId:37,tocIndex:12},{value:"string",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"value",paraId:37,tocIndex:12},{value:"\u503C",paraId:37,tocIndex:12},{value:"string | number",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"\u53C2\u6570",paraId:38,tocIndex:13},{value:"\u8BF4\u660E",paraId:38,tocIndex:13},{value:"\u7C7B\u578B",paraId:38,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:38,tocIndex:13},{value:"label",paraId:38,tocIndex:13},{value:"\u6587\u5B57",paraId:38,tocIndex:13},{value:"string",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"value",paraId:38,tocIndex:13},{value:"\u503C",paraId:38,tocIndex:13},{value:"string | number",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"children",paraId:38,tocIndex:13},{value:"\u5B50\u7EA7",paraId:38,tocIndex:13},{value:"CascaderOption[]",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:39,tocIndex:15},{value:"\u53D8\u91CF\u540D",paraId:40,tocIndex:15},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:40,tocIndex:15},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:40,tocIndex:15},{value:"\u5907\u6CE8",paraId:40,tocIndex:15},{value:"--picker-item-color",paraId:40,tocIndex:15},{value:"#333333",paraId:40,tocIndex:15},{value:"#c5cad1",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u9879\u989C\u8272",paraId:40,tocIndex:15},{value:"--picker-header-action-color",paraId:40,tocIndex:15},{value:"#1677ff",paraId:40,tocIndex:15},{value:"#3086ff",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u5934\u90E8\u64CD\u4F5C\u989C\u8272",paraId:40,tocIndex:15},{value:"--picker-placeholder-color",paraId:40,tocIndex:15},{value:"#cccccc",paraId:40,tocIndex:15},{value:"#474747",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u5360\u4F4D\u7B26\u989C\u8272",paraId:40,tocIndex:15},{value:"--picker-header-color",paraId:40,tocIndex:15},{value:"#eeeeee",paraId:40,tocIndex:15},{value:"#2b2b2b",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u5934\u90E8\u989C\u8272",paraId:40,tocIndex:15},{value:"--picker-content-background-color",paraId:40,tocIndex:15},{value:"#ffffff",paraId:40,tocIndex:15},{value:"#1a1a1a",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u5185\u5BB9\u80CC\u666F\u989C\u8272",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-95",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.05)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.02)",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u906E\u7F69\u80CC\u666F\u8272\uFF0895%\u900F\u660E\u5EA6\uFF09",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-60",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.4)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.01)",paraId:40,tocIndex:15},{value:"\u9009\u62E9\u5668\u906E\u7F69\u80CC\u666F\u8272\uFF0860%\u900F\u660E\u5EA6\uFF09",paraId:40,tocIndex:15},{value:"\u7531\u4E8E\u539F\u751F picker-view \u7684\u9650\u5236\uFF0C\u6682\u4E0D\u652F\u6301\u52A8\u6001\u6539\u53D8\u5217\u6570",paraId:41,tocIndex:17}]}}]);
