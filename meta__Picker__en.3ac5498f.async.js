"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2977],{1488:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(31573),o={"src-picker-demo-picker":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,66976))})),asset:{type:"BLOCK",id:"src-picker-demo-picker",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},33571:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(31573);const d=[{value:"The Picker selector displays a scrollable list of one or more collections of options, providing consistency between the iOS and Android-side experiences compared to native pickers.",paraId:0,tocIndex:0},{value:"One or more sets of association options are provided for selection by the user.",paraId:1,tocIndex:0},{value:"When there are less than 5 options, it is recommended to tile the options directly. Using Radio is a better choice.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-picker": "antd-mini/es/Picker/index",
  "ant-cascader-picker": "antd-mini/es/CascaderPicker/index"
#endif
#if WECHAT
  "ant-picker": "antd-mini/Picker/index",
  "ant-cascader-picker": "antd-mini/CascaderPicker/index"
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
`,paraId:5,tocIndex:3},{value:"onFormat",paraId:6,tocIndex:4},{value:" The function return value is the value of the selected area to be rendered.",paraId:6,tocIndex:4},{value:`<ant-picker
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
`,paraId:8,tocIndex:4},{value:"When complex options appear, but do not need to link between options, you can achieve multi-column selection in the following ways:",paraId:9,tocIndex:5},{value:`<ant-picker
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
`,paraId:11,tocIndex:5},{value:"value",paraId:12,tocIndex:6},{value:" property and ",paraId:12,tocIndex:6},{value:"ok",paraId:12,tocIndex:6},{value:" Events, with the implementation of controlled mode.",paraId:12,tocIndex:6},{value:` <ant-picker
  value="{{value}}"
  options="{{list}}"
#if ALIPAY
  onOk="handleControlledOk"
#endif
#if WECHAT
  bindok="handleControlledOk"
#endif
/>
<ant-button onTap="handleChangeControlled">Select Shenzhen</ant-button>
<ant-button onTap="handleClearControlled">Empty</ant-button>
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
`,paraId:14,tocIndex:6},{value:"When more complex options appear, there is a need for linkage between options, which requires the introduction ",paraId:15,tocIndex:7},{value:"ant-cascader-picker",paraId:15,tocIndex:7},{value:" Cascade selection components to achieve. The component implements the cascading function by passing in the following tree structure:",paraId:15,tocIndex:7},{value:`<ant-cascader-picker
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
`,paraId:17,tocIndex:7},{value:"Property",paraId:18,tocIndex:10},{value:"Description",paraId:18,tocIndex:10},{value:"Type",paraId:18,tocIndex:10},{value:"Default Value",paraId:18,tocIndex:10},{value:"animationType",paraId:18,tocIndex:10},{value:"Animation type, optional",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:" ",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:", the default is used",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:"Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:"Solve",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:"className",paraId:18,tocIndex:10},{value:"Class Name",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"defaultValue",paraId:18,tocIndex:10},{value:"Default Value",paraId:18,tocIndex:10},{value:"string | number | Array<string | number>",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"disabled",paraId:18,tocIndex:10},{value:"Disable",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"cancelText",paraId:18,tocIndex:10},{value:"Cancel Copy",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'Cancel'",paraId:18,tocIndex:10},{value:"content",paraId:18,tocIndex:10},{value:"Custom Content Slots",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"indicatorStyle",paraId:18,tocIndex:10},{value:"Check Box Style",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"indicatorClassName",paraId:18,tocIndex:10},{value:"Class name of the checked box",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"maskClassName",paraId:18,tocIndex:10},{value:"Class name of the layer",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"maskClosable",paraId:18,tocIndex:10},{value:"Click whether the mask can be closed",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"true",paraId:18,tocIndex:10},{value:"maskStyle",paraId:18,tocIndex:10},{value:"Mask Style",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"okText",paraId:18,tocIndex:10},{value:"Confirm Button Copy",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'OK'",paraId:18,tocIndex:10},{value:"emptyText",paraId:18,tocIndex:10},{value:"Empty status button copy",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'No data'",paraId:18,tocIndex:10},{value:"options",paraId:18,tocIndex:10},{value:"picker data, configure options for each column",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:19,tocIndex:10},{value:"[]",paraId:18,tocIndex:10},{value:"[]",paraId:18,tocIndex:10},{value:"placeholder",paraId:18,tocIndex:10},{value:"Prompt Copy",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"'Please Select'",paraId:18,tocIndex:10},{value:"popClassName",paraId:18,tocIndex:10},{value:"Pop-up Box Class Name",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"popStyle",paraId:18,tocIndex:10},{value:"Pop-up Style",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"prefix",paraId:18,tocIndex:10},{value:"Prefix",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"style",paraId:18,tocIndex:10},{value:"Style",paraId:18,tocIndex:10},{value:"string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"suffix",paraId:18,tocIndex:10},{value:"Suffix",paraId:18,tocIndex:10},{value:"slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"title",paraId:18,tocIndex:10},{value:"Pop-up Title",paraId:18,tocIndex:10},{value:"string | slot",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"value",paraId:18,tocIndex:10},{value:"Selected Value",paraId:18,tocIndex:10},{value:"string | number | Array<string | number>",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"visible",paraId:18,tocIndex:10},{value:"Whether to display",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"defaultVisible",paraId:18,tocIndex:10},{value:"Display by default",paraId:18,tocIndex:10},{value:"boolean",paraId:18,tocIndex:10},{value:"false",paraId:18,tocIndex:10},{value:"onFormat",paraId:18,tocIndex:10},{value:"Text display format of the selected value",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:20,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:21,tocIndex:10},{value:") => string",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onOk",paraId:18,tocIndex:10},{value:"Click the OK button to trigger the callback",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:22,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:23,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onCancel",paraId:18,tocIndex:10},{value:"Click the cancel button/layer to trigger the callback",paraId:18,tocIndex:10},{value:"(event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onChange",paraId:18,tocIndex:10},{value:"The selected item changes, triggering a callback",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:24,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:25,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if ALIPAY onVisibleChange",paraId:18,tocIndex:10},{value:"Pop-up display/hide status change trigger",paraId:18,tocIndex:10},{value:"(visible: boolean, event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindok",paraId:18,tocIndex:10},{value:"Click the OK button to trigger the callback",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:26,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:27,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindcancel",paraId:18,tocIndex:10},{value:"Click the cancel button/layer to trigger the callback",paraId:18,tocIndex:10},{value:"(event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindchange",paraId:18,tocIndex:10},{value:"The selected item changes, triggering a callback",paraId:18,tocIndex:10},{value:"(value: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:28,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:29,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"#if WECHAT bindvisiblechange",paraId:18,tocIndex:10},{value:"Pop-up display/hide status change trigger",paraId:18,tocIndex:10},{value:"(visible: boolean, event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void",paraId:18,tocIndex:10},{value:"-",paraId:18,tocIndex:10},{value:"Property",paraId:30,tocIndex:11},{value:"Description",paraId:30,tocIndex:11},{value:"Type",paraId:30,tocIndex:11},{value:"Default Value",paraId:30,tocIndex:11},{value:"animationType",paraId:30,tocIndex:11},{value:"Animation type, optional",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:" ",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:", the default is used",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:"Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:"Solve",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:"className",paraId:30,tocIndex:11},{value:"Class Name",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"defaultValue",paraId:30,tocIndex:11},{value:"Default selected value",paraId:30,tocIndex:11},{value:"string[]",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"disabled",paraId:30,tocIndex:11},{value:"Disable",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"cancelText",paraId:30,tocIndex:11},{value:"Cancel Copy",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'Cancel'",paraId:30,tocIndex:11},{value:"content",paraId:30,tocIndex:11},{value:"Custom Content Slots",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"format",paraId:30,tocIndex:11},{value:"Time format display, the format is the same",paraId:30,tocIndex:11},{value:"dayjs",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'YYYY/MM/DD'",paraId:30,tocIndex:11},{value:"indicatorStyle",paraId:30,tocIndex:11},{value:"Check Box Style",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"indicatorClassName",paraId:30,tocIndex:11},{value:"Class name of the checked box",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"maskClassName",paraId:30,tocIndex:11},{value:"Class name of the layer",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"maskClosable",paraId:30,tocIndex:11},{value:"Click whether the mask can be closed",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"true",paraId:30,tocIndex:11},{value:"maskStyle",paraId:30,tocIndex:11},{value:"Mask Style",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"okText",paraId:30,tocIndex:11},{value:"Confirm Button Copy",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'OK'",paraId:30,tocIndex:11},{value:"options",paraId:30,tocIndex:11},{value:"Optional data",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:31,tocIndex:11},{value:"[]",paraId:30,tocIndex:11},{value:"[]",paraId:30,tocIndex:11},{value:"placeholder",paraId:30,tocIndex:11},{value:"Prompt Copy",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"'Please Select'",paraId:30,tocIndex:11},{value:"popClassName",paraId:30,tocIndex:11},{value:"Pop-up Box Class Name",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"popStyle",paraId:30,tocIndex:11},{value:"Pop-up Style",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"prefix",paraId:30,tocIndex:11},{value:"Prefix",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"style",paraId:30,tocIndex:11},{value:"Style",paraId:30,tocIndex:11},{value:"string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"suffix",paraId:30,tocIndex:11},{value:"Suffix",paraId:30,tocIndex:11},{value:"slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"title",paraId:30,tocIndex:11},{value:"Pop-up Title",paraId:30,tocIndex:11},{value:"string | slot",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"value",paraId:30,tocIndex:11},{value:"Selected Value",paraId:30,tocIndex:11},{value:"string[]",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"visible",paraId:30,tocIndex:11},{value:"Whether to display",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"defaultVisible",paraId:30,tocIndex:11},{value:"Display by default",paraId:30,tocIndex:11},{value:"boolean",paraId:30,tocIndex:11},{value:"false",paraId:30,tocIndex:11},{value:"onFormat",paraId:30,tocIndex:11},{value:"The text display format of the selected value. The default display is labels.join('').",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:32,tocIndex:11},{value:"[]) => string",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onOk",paraId:30,tocIndex:11},{value:"Click the OK button to trigger the callback",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:33,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onCancel",paraId:30,tocIndex:11},{value:"Click the cancel button/layer to trigger the callback",paraId:30,tocIndex:11},{value:"(event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onChange",paraId:30,tocIndex:11},{value:"The selected item changes, triggering a callback",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:34,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:30,tocIndex:11},{value:"Pop-up display/hide status change trigger",paraId:30,tocIndex:11},{value:"(visible: boolean, event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindok",paraId:30,tocIndex:11},{value:"Click the OK button to trigger the callback",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:35,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindcancel",paraId:30,tocIndex:11},{value:"Click the cancel button/layer to trigger the callback",paraId:30,tocIndex:11},{value:"(event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindchange",paraId:30,tocIndex:11},{value:"The selected item changes, triggering a callback",paraId:30,tocIndex:11},{value:"(value: string[], selectedOptions: ",paraId:30,tocIndex:11},{value:"CascaderOption",paraId:36,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"#if WECHAT bindvisibleChange",paraId:30,tocIndex:11},{value:"Pop-up display/hide status change trigger",paraId:30,tocIndex:11},{value:"(visible: boolean, event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void",paraId:30,tocIndex:11},{value:"-",paraId:30,tocIndex:11},{value:"Parameters",paraId:37,tocIndex:12},{value:"Description",paraId:37,tocIndex:12},{value:"Type",paraId:37,tocIndex:12},{value:"Default Value",paraId:37,tocIndex:12},{value:"label",paraId:37,tocIndex:12},{value:"Text",paraId:37,tocIndex:12},{value:"string",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"value",paraId:37,tocIndex:12},{value:"Value",paraId:37,tocIndex:12},{value:"string | number",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"Parameters",paraId:38,tocIndex:13},{value:"Description",paraId:38,tocIndex:13},{value:"Type",paraId:38,tocIndex:13},{value:"Default Value",paraId:38,tocIndex:13},{value:"label",paraId:38,tocIndex:13},{value:"Text",paraId:38,tocIndex:13},{value:"string",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"value",paraId:38,tocIndex:13},{value:"Value",paraId:38,tocIndex:13},{value:"string | number",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"children",paraId:38,tocIndex:13},{value:"Sub-level",paraId:38,tocIndex:13},{value:"CascaderOption[]",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:39,tocIndex:15},{value:"Variable name",paraId:40,tocIndex:15},{value:"Light Mode Default",paraId:40,tocIndex:15},{value:"Dark Mode Default",paraId:40,tocIndex:15},{value:"Remarks",paraId:40,tocIndex:15},{value:"--picker-item-color",paraId:40,tocIndex:15},{value:"#333333",paraId:40,tocIndex:15},{value:"#c5cad1",paraId:40,tocIndex:15},{value:"Selector item color",paraId:40,tocIndex:15},{value:"--picker-header-action-color",paraId:40,tocIndex:15},{value:"#1677ff",paraId:40,tocIndex:15},{value:"#3086ff",paraId:40,tocIndex:15},{value:"Selector Head Operation Color",paraId:40,tocIndex:15},{value:"--picker-placeholder-color",paraId:40,tocIndex:15},{value:"#cccccc",paraId:40,tocIndex:15},{value:"#474747",paraId:40,tocIndex:15},{value:"Selector Placeholder Color",paraId:40,tocIndex:15},{value:"--picker-header-color",paraId:40,tocIndex:15},{value:"#eeeeee",paraId:40,tocIndex:15},{value:"#2b2b2b",paraId:40,tocIndex:15},{value:"Selector head color",paraId:40,tocIndex:15},{value:"--picker-content-background-color",paraId:40,tocIndex:15},{value:"#ffffff",paraId:40,tocIndex:15},{value:"#1a1a1a",paraId:40,tocIndex:15},{value:"Selector Content Background Color",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-95",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.05)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.02)",paraId:40,tocIndex:15},{value:"Selector mask background color (95% transparency)",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-60",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.4)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.01)",paraId:40,tocIndex:15},{value:"Selector mask background color (60% transparency)",paraId:40,tocIndex:15},{value:"Due to the limitation of native picker-view, dynamic change of the number of columns is not supported for the time being.",paraId:41,tocIndex:17}]}}]);
