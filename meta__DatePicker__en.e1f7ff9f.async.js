"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3693],{98620:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),n=a(73099),I={"src-date-picker-demo-datepicker":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,51430))})),asset:{type:"BLOCK",id:"src-date-picker-demo-datepicker",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},65166:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(73099);const n=[{value:"Compared to native ",paraId:0,tocIndex:0},{value:"my.datePicker",paraId:0,tocIndex:0},{value:", to achieve the same iOS and Android experience.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-date-picker": "antd-mini/es/DatePicker/index",
  "ant-range-picker": "antd-mini/es/DatePicker/RangePicker/index"
#endif
#if WECHAT
  "ant-date-picker": "antd-mini/DatePicker/index",
  "ant-range-picker": "antd-mini/DatePicker/RangePicker/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"defaultValue",paraId:3,tocIndex:3},{value:" property is",paraId:3,tocIndex:3},{value:"dayjs",paraId:3,tocIndex:3},{value:" A timestamp or object that can be parsed.",paraId:3,tocIndex:3},{value:`<ant-date-picker
  min="{{min}}"
  max="{{max}}"
  defaultValue="{{defaultDate}}"
  placeholder="Please select"
#if ALIPAY
  onPickerChange="handlePickerChange"
  onVisibleChange="handleTriggerPicker"
  onCancel="handleDismiss"
  onOk="handleOk"
#endif
#if WECHAT
  bindpickerchange="handlePickerChange"
  bindvisiblechange="handleTriggerPicker"
  bindcancel="handleDismiss"
  bindok="handleOk"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    min: new Date('2019/01/15').getTime(),
    max: new Date('2023/08/20').getTime(),
    defaultDate: new Date('2019/02/02').getTime(),
  },
  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleDismiss(e) {
    console.log('e', e);
  },
  handleOk(date, format, e) {
    console.log('onOk', date, format, e);
  },
});
`,paraId:5,tocIndex:3},{value:"precision",paraId:6,tocIndex:4},{value:" Property to control the time precision of the selection.",paraId:6,tocIndex:4},{value:"format",paraId:6,tocIndex:4},{value:" property is used to format the displayed ",paraId:6,tocIndex:4},{value:"value",paraId:6,tocIndex:4},{value:" Value.",paraId:6,tocIndex:4},{value:`<ant-date-picker precision="year" format="YYYY"/>
<ant-date-picker precision="month" format="YYYY-MM"/>
<ant-date-picker precision="minute" format="YYYY-MM-DD HH:mm"/>
`,paraId:7,tocIndex:4},{value:"disabled",paraId:8,tocIndex:5},{value:" Property is used to control the disabled state.",paraId:8,tocIndex:5},{value:`<ant-date-picker defaultValue="{{defaultDate}}" disabled />
`,paraId:9,tocIndex:5},{value:"Incoming Function ",paraId:10,tocIndex:6},{value:"onFormatLabel",paraId:10,tocIndex:6},{value:" , the return value is the data you want to render for each column in the selection panel.",paraId:10,tocIndex:6},{value:`<ant-date-picker onFormatLabel="{{handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'}}" />
`,paraId:11,tocIndex:6},{value:`Page({
  data: {
#if WECHAT
    handleFormatLabel(type, value) {
      return String(value);
    },
#endif
  },
  handleFormatLabel(type, value) {
    return String(value);
  },
});
`,paraId:12,tocIndex:6},{value:"control the selected value, which requires ",paraId:13,tocIndex:7},{value:"value",paraId:13,tocIndex:7},{value:" property and ",paraId:13,tocIndex:7},{value:"onOk",paraId:13,tocIndex:7},{value:" Events are used together. The control panel displays the closed state, which requires ",paraId:13,tocIndex:7},{value:"visible",paraId:13,tocIndex:7},{value:" property and ",paraId:13,tocIndex:7},{value:"onVisibleChange",paraId:13,tocIndex:7},{value:" Events are used together.",paraId:13,tocIndex:7},{value:` <ant-date-picker
  visible="{{pickerVisible}}"
  value="{{pickerValue}}"
#if ALIPAY
  onVisibleChange="handleTriggerControlledPicker"
  onOk="handleControlledOk"
#endif
#if WECHAT
  bindvisiblechange="handleTriggerControlledPicker"
  bindok="handleControlledOk"
#endif
  />
`,paraId:14,tocIndex:7},{value:`Page({
  data: {
    pickerVisible: false,
    pickerValue: new Date('2019/02/02').getTime(),
  },

  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleControlledOk(value) {
#if WECHAT
    this.setData({
      // \u5FAE\u4FE1\u53EA\u652F\u6301\u4F20\u9012\u65F6\u95F4\u6233
      pickerValue: value.detail.getTime(),
    });
#endif
#if ALIPAY
    this.setData({
      pickerValue: value,
    });
#endif
  },
  handleTriggerControlledPicker(visible, e) {
#if WECHAT
    console.log('handleTriggerControlledPicker', visible);
    this.setData({
      pickerVisible: visible.detail,
    });
#endif
#if ALIPAY
    console.log('handleTriggerControlledPicker', visible, e);
    this.setData({
      pickerVisible: visible,
    });
#endif
  },
});
`,paraId:15,tocIndex:7},{value:"Introduction ",paraId:16,tocIndex:8},{value:"ant-range-picker",paraId:16,tocIndex:8},{value:" component, you can have the ability to select a time range.",paraId:16,tocIndex:8},{value:`<ant-range-picker
  placeholder="Please select"
  defaultValue="{{defaultDateRange}}"
#if ALIPAY
  onPickerChange="handlePickerRangeChange"
  onVisibleChange="handleTriggerPicker"
  onOk="handleRangeOk"
#endif
#if WECHAT
  bindpickerchange="handlePickerRangeChange"
  bindvisiblechange="handleTriggerPicker"
  bindok="handleRangeOk"
#endif
/>
`,paraId:17,tocIndex:8},{value:`Page({
  data: {
    defaultDateRange: [
      new Date('2022/03/21').getTime(),
      new Date('2022/05/20').getTime(),
    ],
  },
  handlePickerRangeChange(type, date, dateStr, e) {
    console.log('onPickerRangeChange', type, date, dateStr, e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleRangeOk(date, format, e) {
    console.log('onRangeOk', date, format, e);
  },
});
`,paraId:18,tocIndex:8},{value:"Property",paraId:19,tocIndex:11},{value:"Description",paraId:19,tocIndex:11},{value:"Type",paraId:19,tocIndex:11},{value:"Default Value",paraId:19,tocIndex:11},{value:"animationType",paraId:19,tocIndex:11},{value:"Animation type, optional ",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"position",paraId:19,tocIndex:11},{value:", the default is used ",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:" Animation performance is better. Due to bug in the basic library of small programs, the pop-up window ",paraId:19,tocIndex:11},{value:"picker-view",paraId:19,tocIndex:11},{value:" Shadow style may have style problems under iOS and can be temporarily switched ",paraId:19,tocIndex:11},{value:"position",paraId:19,tocIndex:11},{value:" Resolve.",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:"className",paraId:19,tocIndex:11},{value:"Class Name",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"defaultValue",paraId:19,tocIndex:11},{value:"Time selected by default",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"defaultPickerValue",paraId:19,tocIndex:11},{value:"Set the default time when the user selects a date",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"disabled",paraId:19,tocIndex:11},{value:"Disable",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"readonly",paraId:19,tocIndex:11},{value:"Read-only",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"cancelText",paraId:19,tocIndex:11},{value:"Cancel Copy",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"Cancel"',paraId:19,tocIndex:11},{value:"content",paraId:19,tocIndex:11},{value:"Custom Content Slots",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"format",paraId:19,tocIndex:11},{value:"Time format display, the format is the same ",paraId:19,tocIndex:11},{value:"dayjs",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"'YYYY/MM/DD'",paraId:19,tocIndex:11},{value:"indicatorStyle",paraId:19,tocIndex:11},{value:"Check Box Style",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"indicatorClassName",paraId:19,tocIndex:11},{value:"Class name of the check box",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"maskClassName",paraId:19,tocIndex:11},{value:"Class name of the layer",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"maskClosable",paraId:19,tocIndex:11},{value:"Click whether the layer can be closed",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"true",paraId:19,tocIndex:11},{value:"maskStyle",paraId:19,tocIndex:11},{value:"Mating Style",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"max",paraId:19,tocIndex:11},{value:"Maximum",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"Ten years later",paraId:19,tocIndex:11},{value:"min",paraId:19,tocIndex:11},{value:"Minimum",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"Ten years ago",paraId:19,tocIndex:11},{value:"okText",paraId:19,tocIndex:11},{value:"Confirm Button Copy",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"OK"',paraId:19,tocIndex:11},{value:"placeholder",paraId:19,tocIndex:11},{value:"Prompt Copy",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"Please select"',paraId:19,tocIndex:11},{value:"popClassName",paraId:19,tocIndex:11},{value:"Popup box class name",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"popStyle",paraId:19,tocIndex:11},{value:"Pop-up Style",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"precision",paraId:19,tocIndex:11},{value:"Select precision, optional ",paraId:19,tocIndex:11},{value:"year",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"month",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"hour",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"minute",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"second",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:"prefix",paraId:19,tocIndex:11},{value:"Prefix",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"style",paraId:19,tocIndex:11},{value:"Style",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"suffix",paraId:19,tocIndex:11},{value:"Suffix",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"title",paraId:19,tocIndex:11},{value:"Pop-up Title",paraId:19,tocIndex:11},{value:"string | slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"value",paraId:19,tocIndex:11},{value:"Selected time",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"visible",paraId:19,tocIndex:11},{value:"Whether to display",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"defaultVisible",paraId:19,tocIndex:11},{value:"Display by default",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"onFormat",paraId:19,tocIndex:11},{value:"Text display format of the selected value",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string) => string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"onFormatLabel",paraId:19,tocIndex:11},{value:"Customize the content displayed in each column, and add the year, month, day, hour, minute, and second units by default.",paraId:19,tocIndex:11},{value:"(type: ",paraId:19,tocIndex:11},{value:"year",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"month",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"hour",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"minute",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"second",paraId:19,tocIndex:11},{value:", value: number) => string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onOk",paraId:19,tocIndex:11},{value:"Click the OK button to trigger the callback",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onCancel",paraId:19,tocIndex:11},{value:"Click the cancel button/layer to trigger the callback",paraId:19,tocIndex:11},{value:"(event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onPickerChange",paraId:19,tocIndex:11},{value:"The selected item changes, triggering a callback",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:19,tocIndex:11},{value:"Pop-up display/hide status change trigger",paraId:19,tocIndex:11},{value:"(visible: boolean, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindok",paraId:19,tocIndex:11},{value:"Click the OK button to trigger the callback",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindcancel",paraId:19,tocIndex:11},{value:"Click the cancel button/layer to trigger the callback",paraId:19,tocIndex:11},{value:"(event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindpickerchange",paraId:19,tocIndex:11},{value:"The selected item changes, triggering a callback",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindvisiblechange",paraId:19,tocIndex:11},{value:"Pop-up display/hide status change trigger",paraId:19,tocIndex:11},{value:"(visible: boolean, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"Property",paraId:20,tocIndex:12},{value:"Description",paraId:20,tocIndex:12},{value:"Type",paraId:20,tocIndex:12},{value:"Default Value",paraId:20,tocIndex:12},{value:"animationType",paraId:20,tocIndex:12},{value:"Animation type, optional ",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"position",paraId:20,tocIndex:12},{value:", the default is used ",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:" Animation performance is better. Due to bug in the basic library of small programs, the pop-up window ",paraId:20,tocIndex:12},{value:"picker-view",paraId:20,tocIndex:12},{value:" Shadow style may have style problems under iOS and can be temporarily switched ",paraId:20,tocIndex:12},{value:"position",paraId:20,tocIndex:12},{value:" Resolve.",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:"className",paraId:20,tocIndex:12},{value:"Class Name",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"defaultValue",paraId:20,tocIndex:12},{value:"Time range selected by default",paraId:20,tocIndex:12},{value:"[Date, Date]",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"disabled",paraId:20,tocIndex:12},{value:"Disable",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"readonly",paraId:20,tocIndex:12},{value:"Read-only",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"cancelText",paraId:20,tocIndex:12},{value:"Cancel Copy",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"Cancel"',paraId:20,tocIndex:12},{value:"content",paraId:20,tocIndex:12},{value:"Custom Content Slots",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"endPlaceholder",paraId:20,tocIndex:12},{value:"End Time Prompt Copy",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"Not selected"',paraId:20,tocIndex:12},{value:"format",paraId:20,tocIndex:12},{value:"Time format display, the format is the same ",paraId:20,tocIndex:12},{value:"dayjs",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"'YYYY/MM/DD'",paraId:20,tocIndex:12},{value:"indicatorStyle",paraId:20,tocIndex:12},{value:"Check Box Style",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"indicatorClassName",paraId:20,tocIndex:12},{value:"Class name of the check box",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"maskClassName",paraId:20,tocIndex:12},{value:"Class name of the layer",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"maskClosable",paraId:20,tocIndex:12},{value:"Click whether the layer can be closed",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"true",paraId:20,tocIndex:12},{value:"maskStyle",paraId:20,tocIndex:12},{value:"Mating Style",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"max",paraId:20,tocIndex:12},{value:"Maximum",paraId:20,tocIndex:12},{value:"Date",paraId:20,tocIndex:12},{value:"Ten years later",paraId:20,tocIndex:12},{value:"min",paraId:20,tocIndex:12},{value:"Minimum",paraId:20,tocIndex:12},{value:"Date",paraId:20,tocIndex:12},{value:"Ten years ago",paraId:20,tocIndex:12},{value:"okText",paraId:20,tocIndex:12},{value:"Confirm Button Copy",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"OK"',paraId:20,tocIndex:12},{value:"placeholder",paraId:20,tocIndex:12},{value:"Prompt Copy",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"Please select"',paraId:20,tocIndex:12},{value:"popClassName",paraId:20,tocIndex:12},{value:"Popup box class name",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"popStyle",paraId:20,tocIndex:12},{value:"Pop-up Style",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"precision",paraId:20,tocIndex:12},{value:"Select precision, optional ",paraId:20,tocIndex:12},{value:"year",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"month",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"hour",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"minute",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:"splitCharacter",paraId:20,tocIndex:12},{value:"Display Connector",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"startPlaceholder",paraId:20,tocIndex:12},{value:"Start Time Prompt Copy",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"Not selected"',paraId:20,tocIndex:12},{value:"prefix",paraId:20,tocIndex:12},{value:"Prefix",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"style",paraId:20,tocIndex:12},{value:"Style",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"suffix",paraId:20,tocIndex:12},{value:"Suffix",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"title",paraId:20,tocIndex:12},{value:"Pop-up Title",paraId:20,tocIndex:12},{value:"string | slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"value",paraId:20,tocIndex:12},{value:"Selected time range",paraId:20,tocIndex:12},{value:"[Date, Date]",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"visible",paraId:20,tocIndex:12},{value:"Whether to display",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"defaultVisible",paraId:20,tocIndex:12},{value:"Display by default",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"onFormat",paraId:20,tocIndex:12},{value:"Text display format of the selected value",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string]) => string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"onFormatLabel",paraId:20,tocIndex:12},{value:"Customize the content displayed in each column, and add the year, month, day, hour, minute, and second units by default.",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"year",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"month",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"hour",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"minute",paraId:20,tocIndex:12},{value:", value: number) => string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onOk",paraId:20,tocIndex:12},{value:"Click the OK button to trigger the callback",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string], event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onCancel",paraId:20,tocIndex:12},{value:"Click the cancel button/layer to trigger the callback",paraId:20,tocIndex:12},{value:"(event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onPickerChange",paraId:20,tocIndex:12},{value:"The selected item changes, triggering a callback",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"start",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"end",paraId:20,tocIndex:12},{value:", date: Date, dateStr: string, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onVisibleChange",paraId:20,tocIndex:12},{value:"Pop-up display/hide status change trigger",paraId:20,tocIndex:12},{value:"(visible: boolean, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindok",paraId:20,tocIndex:12},{value:"Click the OK button to trigger the callback",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string], event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindcancel",paraId:20,tocIndex:12},{value:"Click the cancel button/layer to trigger the callback",paraId:20,tocIndex:12},{value:"(event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindpickerchange",paraId:20,tocIndex:12},{value:"The selected item changes, triggering a callback",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"start",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"end",paraId:20,tocIndex:12},{value:", date: Date, dateStr: string, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindvisiblechange",paraId:20,tocIndex:12},{value:"Pop-up display/hide status change trigger",paraId:20,tocIndex:12},{value:"(visible: boolean, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"YYYY-MM-DD",paraId:21},{value:"The time returned by the DatePicker component is in the format ",paraId:22,tocIndex:13},{value:"Date",paraId:22,tocIndex:13},{value:" type, if you need to convert ",paraId:22,tocIndex:13},{value:"YYYY-MM-DD",paraId:22,tocIndex:13},{value:" format, you can use ",paraId:22,tocIndex:13},{value:"dayjs",paraId:22,tocIndex:13},{value:" Make the conversion.",paraId:22,tocIndex:13},{value:`<date-picker
#if ALIPAY
  onOk="handleOk"
#endif
#if WECHAT
  bindok="handleOk"
#endif
/>
`,paraId:23,tocIndex:13},{value:`Page({
  handleOk(date) {
    const dateStr = dayjs(date).format('YYYY-MM-DD');
    console.log(dateStr);
  },
});
`,paraId:24,tocIndex:13},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:25,tocIndex:15},{value:"Variable name",paraId:26,tocIndex:15},{value:"Default Value",paraId:26,tocIndex:15},{value:"Dark Mode Default",paraId:26,tocIndex:15},{value:"Remarks",paraId:26,tocIndex:15},{value:"--range-picker-shadow-color",paraId:26,tocIndex:15},{value:"#000000",paraId:26,tocIndex:15},{value:"#000000",paraId:26,tocIndex:15},{value:"Range Selector Shadow Color",paraId:26,tocIndex:15},{value:"--range-picker-item-color",paraId:26,tocIndex:15},{value:"#333333",paraId:26,tocIndex:15},{value:"#c5cad1",paraId:26,tocIndex:15},{value:"Range Selector Item Color",paraId:26,tocIndex:15},{value:"--range-picker-active-color",paraId:26,tocIndex:15},{value:"#1677ff",paraId:26,tocIndex:15},{value:"#3086ff",paraId:26,tocIndex:15},{value:"Range Selector Activity Color",paraId:26,tocIndex:15},{value:"--range-picker-placeholder-color",paraId:26,tocIndex:15},{value:"#cccccc",paraId:26,tocIndex:15},{value:"#474747",paraId:26,tocIndex:15},{value:"Range selector placeholder color",paraId:26,tocIndex:15},{value:"--range-picker-shadow-color-faded",paraId:26,tocIndex:15},{value:"rgba(0, 0, 0, 0.9)",paraId:26,tocIndex:15},{value:"rgba(0, 0, 0, 0.9)",paraId:26,tocIndex:15},{value:"Range Selector Shadow Color (Faded)",paraId:26,tocIndex:15}]}}]);
