"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6904],{4983:function(I,e,a){a.r(e),a.d(e,{demos:function(){return t}});var d=a(67294),n=a(59280),t={"src-date-picker-demo-datepicker":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,51430))})),asset:{type:"BLOCK",id:"src-date-picker-demo-datepicker",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},48568:function(I,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(59280);const n=[{value:"\u76F8\u6BD4\u4E8E\u539F\u751F ",paraId:0,tocIndex:0},{value:"my.datePicker",paraId:0,tocIndex:0},{value:"\uFF0C\u5B9E\u73B0\u4E86 iOS \u4E0E Android \u7AEF\u4F53\u9A8C\u4E00\u81F4\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-date-picker": "antd-mini/es/DatePicker/index",
  "ant-range-picker": "antd-mini/es/DatePicker/RangePicker/index"
#endif
#if WECHAT
  "ant-date-picker": "antd-mini/DatePicker/index",
  "ant-range-picker": "antd-mini/DatePicker/RangePicker/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"defaultValue",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u4E3A",paraId:3,tocIndex:3},{value:"dayjs",paraId:3,tocIndex:3},{value:" \u80FD\u591F\u89E3\u6790\u7684\u65F6\u95F4\u6233\u6216\u5BF9\u8C61\u3002",paraId:3,tocIndex:3},{value:`<ant-date-picker
  min="{{min}}"
  max="{{max}}"
  defaultValue="{{defaultDate}}"
  placeholder="\u8BF7\u9009\u62E9"
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
`,paraId:5,tocIndex:3},{value:"precision",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u9009\u62E9\u7684\u65F6\u95F4\u7CBE\u5EA6\u3002",paraId:6,tocIndex:4},{value:"format",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\u7528\u6765\u683C\u5F0F\u5316\u5C55\u793A\u7684 ",paraId:6,tocIndex:4},{value:"value",paraId:6,tocIndex:4},{value:" \u503C\u3002",paraId:6,tocIndex:4},{value:`<ant-date-picker precision="year" format="YYYY"/>
<ant-date-picker precision="month" format="YYYY-MM"/>
<ant-date-picker precision="minute" format="YYYY-MM-DD HH:mm"/>
`,paraId:7,tocIndex:4},{value:"disabled",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\u7528\u6765\u63A7\u5236\u7981\u7528\u72B6\u6001\u3002",paraId:8,tocIndex:5},{value:`<ant-date-picker defaultValue="{{defaultDate}}" disabled />
`,paraId:9,tocIndex:5},{value:"\u4F20\u5165\u51FD\u6570 ",paraId:10,tocIndex:6},{value:"onFormatLabel",paraId:10,tocIndex:6},{value:" \uFF0C\u8FD4\u56DE\u503C\u5219\u662F\u9009\u62E9\u9762\u677F\u4E2D\u6BCF\u5217\u60F3\u8981\u6E32\u67D3\u7684\u6570\u636E",paraId:10,tocIndex:6},{value:`<ant-date-picker onFormatLabel="{{handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'}}" />
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
`,paraId:12,tocIndex:6},{value:"\u63A7\u5236\u9009\u62E9\u7684\u503C\uFF0C\u9700\u8981 ",paraId:13,tocIndex:7},{value:"value",paraId:13,tocIndex:7},{value:" \u5C5E\u6027\u548C ",paraId:13,tocIndex:7},{value:"onOk",paraId:13,tocIndex:7},{value:" \u4E8B\u4EF6\u914D\u5408\u4F7F\u7528\u3002\u63A7\u5236\u9762\u677F\u663E\u793A\u5173\u95ED\u72B6\u6001\uFF0C\u9700\u8981 ",paraId:13,tocIndex:7},{value:"visible",paraId:13,tocIndex:7},{value:" \u5C5E\u6027\u548C ",paraId:13,tocIndex:7},{value:"onVisibleChange",paraId:13,tocIndex:7},{value:" \u4E8B\u4EF6\u914D\u5408\u4F7F\u7528\u3002",paraId:13,tocIndex:7},{value:` <ant-date-picker
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
`,paraId:15,tocIndex:7},{value:"\u5F15\u5165 ",paraId:16,tocIndex:8},{value:"ant-range-picker",paraId:16,tocIndex:8},{value:" \u7EC4\u4EF6\uFF0C\u5373\u53EF\u62E5\u6709\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u80FD\u529B\u3002",paraId:16,tocIndex:8},{value:`<ant-range-picker
  placeholder="\u8BF7\u9009\u62E9"
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
`,paraId:18,tocIndex:8},{value:"\u5C5E\u6027",paraId:19,tocIndex:11},{value:"\u8BF4\u660E",paraId:19,tocIndex:11},{value:"\u7C7B\u578B",paraId:19,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:19,tocIndex:11},{value:"animationType",paraId:19,tocIndex:11},{value:"\u52A8\u753B\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"position",paraId:19,tocIndex:11},{value:"\uFF0C\u9ED8\u8BA4\u4F7F\u7528 ",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:" \u52A8\u753B\u6027\u80FD\u66F4\u597D\u3002\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93 bug\uFF0C\u5F39\u7A97\u5185 ",paraId:19,tocIndex:11},{value:"picker-view",paraId:19,tocIndex:11},{value:" \u9634\u5F71\u6837\u5F0F\u5728 iOS \u4E0B\u53EF\u80FD\u5B58\u5728\u6837\u5F0F\u95EE\u9898\uFF0C\u53EF\u6682\u5207\u6362\u4E3A ",paraId:19,tocIndex:11},{value:"position",paraId:19,tocIndex:11},{value:" \u89E3\u51B3\u3002",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"transform",paraId:19,tocIndex:11},{value:"className",paraId:19,tocIndex:11},{value:"\u7C7B\u540D",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"defaultValue",paraId:19,tocIndex:11},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u65F6\u95F4",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"defaultPickerValue",paraId:19,tocIndex:11},{value:"\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u95F4",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"disabled",paraId:19,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"readonly",paraId:19,tocIndex:11},{value:"\u662F\u5426\u53EA\u8BFB",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"cancelText",paraId:19,tocIndex:11},{value:"\u53D6\u6D88\u6587\u6848",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"\u53D6\u6D88"',paraId:19,tocIndex:11},{value:"content",paraId:19,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"format",paraId:19,tocIndex:11},{value:"\u65F6\u95F4\u683C\u5F0F\u5316\u663E\u793A\uFF0C\u683C\u5F0F\u540C ",paraId:19,tocIndex:11},{value:"dayjs",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"'YYYY/MM/DD'",paraId:19,tocIndex:11},{value:"indicatorStyle",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u6846\u6837\u5F0F",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"indicatorClassName",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u6846\u7684\u7C7B\u540D",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"maskClassName",paraId:19,tocIndex:11},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"maskClosable",paraId:19,tocIndex:11},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"true",paraId:19,tocIndex:11},{value:"maskStyle",paraId:19,tocIndex:11},{value:"\u8499\u5C42\u6837\u5F0F",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"max",paraId:19,tocIndex:11},{value:"\u6700\u5927\u503C",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"\u5341\u5E74\u540E",paraId:19,tocIndex:11},{value:"min",paraId:19,tocIndex:11},{value:"\u6700\u5C0F\u503C",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"\u5341\u5E74\u524D",paraId:19,tocIndex:11},{value:"okText",paraId:19,tocIndex:11},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u6848",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"\u786E\u5B9A"',paraId:19,tocIndex:11},{value:"placeholder",paraId:19,tocIndex:11},{value:"\u63D0\u793A\u6587\u6848",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:'"\u8BF7\u9009\u62E9"',paraId:19,tocIndex:11},{value:"popClassName",paraId:19,tocIndex:11},{value:"\u5F39\u51FA\u6846\u7C7B\u540D",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"popStyle",paraId:19,tocIndex:11},{value:"\u5F39\u51FA\u6846\u6837\u5F0F",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"precision",paraId:19,tocIndex:11},{value:"\u9009\u62E9\u7CBE\u5EA6\uFF0C\u53EF\u9009 ",paraId:19,tocIndex:11},{value:"year",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"month",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"hour",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"minute",paraId:19,tocIndex:11},{value:" ",paraId:19,tocIndex:11},{value:"second",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:"content-header",paraId:19,tocIndex:11},{value:"\u5F39\u7A97\u5185\u5BB9\u9876\u90E8",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"style",paraId:19,tocIndex:11},{value:"\u6837\u5F0F",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"prefix",paraId:19,tocIndex:11},{value:"\u524D\u7F00",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"style",paraId:19,tocIndex:11},{value:"\u6837\u5F0F",paraId:19,tocIndex:11},{value:"string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"suffix",paraId:19,tocIndex:11},{value:"\u540E\u7F00",paraId:19,tocIndex:11},{value:"slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"title",paraId:19,tocIndex:11},{value:"\u5F39\u51FA\u6846\u6807\u9898",paraId:19,tocIndex:11},{value:"string | slot",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"value",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u7684\u65F6\u95F4",paraId:19,tocIndex:11},{value:"Date",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"visible",paraId:19,tocIndex:11},{value:"\u662F\u5426\u663E\u793A",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"defaultVisible",paraId:19,tocIndex:11},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:19,tocIndex:11},{value:"boolean",paraId:19,tocIndex:11},{value:"false",paraId:19,tocIndex:11},{value:"onFormat",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u503C\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string) => string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"onFormatLabel",paraId:19,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6BCF\u5217\u5C55\u793A\u7684\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u6DFB\u52A0\u5E74\u3001\u6708\u3001\u65E5\u3001\u65F6\u3001\u5206\u3001\u79D2\u5355\u4F4D",paraId:19,tocIndex:11},{value:"(type: ",paraId:19,tocIndex:11},{value:"year",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"month",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"day",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"hour",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"minute",paraId:19,tocIndex:11},{value:" | ",paraId:19,tocIndex:11},{value:"second",paraId:19,tocIndex:11},{value:", value: number) => string",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onOk",paraId:19,tocIndex:11},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onCancel",paraId:19,tocIndex:11},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onPickerChange",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:19,tocIndex:11},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:19,tocIndex:11},{value:"(visible: boolean, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindok",paraId:19,tocIndex:11},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindcancel",paraId:19,tocIndex:11},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindpickerchange",paraId:19,tocIndex:11},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:19,tocIndex:11},{value:"(date: Date, dateStr: string, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"#if WECHAT bindvisiblechange",paraId:19,tocIndex:11},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:19,tocIndex:11},{value:"(visible: boolean, event: ",paraId:19,tocIndex:11},{value:"Event",paraId:19,tocIndex:11},{value:") => void",paraId:19,tocIndex:11},{value:"-",paraId:19,tocIndex:11},{value:"\u5C5E\u6027",paraId:20,tocIndex:12},{value:"\u8BF4\u660E",paraId:20,tocIndex:12},{value:"\u7C7B\u578B",paraId:20,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:20,tocIndex:12},{value:"animationType",paraId:20,tocIndex:12},{value:"\u52A8\u753B\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"position",paraId:20,tocIndex:12},{value:"\uFF0C\u9ED8\u8BA4\u4F7F\u7528 ",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:" \u52A8\u753B\u6027\u80FD\u66F4\u597D\u3002\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93 bug\uFF0C\u5F39\u7A97\u5185 ",paraId:20,tocIndex:12},{value:"picker-view",paraId:20,tocIndex:12},{value:" \u9634\u5F71\u6837\u5F0F\u5728 iOS \u4E0B\u53EF\u80FD\u5B58\u5728\u6837\u5F0F\u95EE\u9898\uFF0C\u53EF\u6682\u5207\u6362\u4E3A ",paraId:20,tocIndex:12},{value:"position",paraId:20,tocIndex:12},{value:" \u89E3\u51B3\u3002",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"transform",paraId:20,tocIndex:12},{value:"className",paraId:20,tocIndex:12},{value:"\u7C7B\u540D",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"defaultValue",paraId:20,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u65F6\u95F4\u8303\u56F4",paraId:20,tocIndex:12},{value:"[Date, Date]",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"disabled",paraId:20,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"readonly",paraId:20,tocIndex:12},{value:"\u662F\u5426\u53EA\u8BFB",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"cancelText",paraId:20,tocIndex:12},{value:"\u53D6\u6D88\u6587\u6848",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"\u53D6\u6D88"',paraId:20,tocIndex:12},{value:"content",paraId:20,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"endPlaceholder",paraId:20,tocIndex:12},{value:"\u7ED3\u675F\u65F6\u95F4\u63D0\u793A\u6587\u6848",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"\u672A\u9009\u62E9"',paraId:20,tocIndex:12},{value:"format",paraId:20,tocIndex:12},{value:"\u65F6\u95F4\u683C\u5F0F\u5316\u663E\u793A\uFF0C\u683C\u5F0F\u540C ",paraId:20,tocIndex:12},{value:"dayjs",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"'YYYY/MM/DD'",paraId:20,tocIndex:12},{value:"indicatorStyle",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u6846\u6837\u5F0F",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"indicatorClassName",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u6846\u7684\u7C7B\u540D",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"maskClassName",paraId:20,tocIndex:12},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"maskClosable",paraId:20,tocIndex:12},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"true",paraId:20,tocIndex:12},{value:"maskStyle",paraId:20,tocIndex:12},{value:"\u8499\u5C42\u6837\u5F0F",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"max",paraId:20,tocIndex:12},{value:"\u6700\u5927\u503C",paraId:20,tocIndex:12},{value:"Date",paraId:20,tocIndex:12},{value:"\u5341\u5E74\u540E",paraId:20,tocIndex:12},{value:"min",paraId:20,tocIndex:12},{value:"\u6700\u5C0F\u503C",paraId:20,tocIndex:12},{value:"Date",paraId:20,tocIndex:12},{value:"\u5341\u5E74\u524D",paraId:20,tocIndex:12},{value:"okText",paraId:20,tocIndex:12},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u6848",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"\u786E\u5B9A"',paraId:20,tocIndex:12},{value:"placeholder",paraId:20,tocIndex:12},{value:"\u63D0\u793A\u6587\u6848",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"\u8BF7\u9009\u62E9"',paraId:20,tocIndex:12},{value:"popClassName",paraId:20,tocIndex:12},{value:"\u5F39\u51FA\u6846\u7C7B\u540D",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"popStyle",paraId:20,tocIndex:12},{value:"\u5F39\u51FA\u6846\u6837\u5F0F",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"precision",paraId:20,tocIndex:12},{value:"\u9009\u62E9\u7CBE\u5EA6\uFF0C\u53EF\u9009 ",paraId:20,tocIndex:12},{value:"year",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"month",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"hour",paraId:20,tocIndex:12},{value:" ",paraId:20,tocIndex:12},{value:"minute",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:"splitCharacter",paraId:20,tocIndex:12},{value:"\u663E\u793A\u8FDE\u63A5\u7B26",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"startPlaceholder",paraId:20,tocIndex:12},{value:"\u5F00\u59CB\u65F6\u95F4\u63D0\u793A\u6587\u6848",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:'"\u672A\u9009\u62E9"',paraId:20,tocIndex:12},{value:"content-header",paraId:20,tocIndex:12},{value:"\u5F39\u7A97\u5185\u5BB9\u9876\u90E8",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"style",paraId:20,tocIndex:12},{value:"\u6837\u5F0F",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"prefix",paraId:20,tocIndex:12},{value:"\u524D\u7F00",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"style",paraId:20,tocIndex:12},{value:"\u6837\u5F0F",paraId:20,tocIndex:12},{value:"string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"suffix",paraId:20,tocIndex:12},{value:"\u540E\u7F00",paraId:20,tocIndex:12},{value:"slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"title",paraId:20,tocIndex:12},{value:"\u5F39\u51FA\u6846\u6807\u9898",paraId:20,tocIndex:12},{value:"string | slot",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"value",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u7684\u65F6\u95F4\u8303\u56F4",paraId:20,tocIndex:12},{value:"[Date, Date]",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"visible",paraId:20,tocIndex:12},{value:"\u662F\u5426\u663E\u793A",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"defaultVisible",paraId:20,tocIndex:12},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:20,tocIndex:12},{value:"boolean",paraId:20,tocIndex:12},{value:"false",paraId:20,tocIndex:12},{value:"onFormat",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u503C\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string]) => string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"onFormatLabel",paraId:20,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6BCF\u5217\u5C55\u793A\u7684\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u6DFB\u52A0\u5E74\u3001\u6708\u3001\u65E5\u3001\u65F6\u3001\u5206\u3001\u79D2\u5355\u4F4D",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"year",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"month",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"day",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"hour",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"minute",paraId:20,tocIndex:12},{value:", value: number) => string",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onOk",paraId:20,tocIndex:12},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string], event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onCancel",paraId:20,tocIndex:12},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onPickerChange",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"start",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"end",paraId:20,tocIndex:12},{value:", date: Date, dateStr: string, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if ALIPAY onVisibleChange",paraId:20,tocIndex:12},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:20,tocIndex:12},{value:"(visible: boolean, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindok",paraId:20,tocIndex:12},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(date: [Date, Date], dateStr: [string, string], event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindcancel",paraId:20,tocIndex:12},{value:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindpickerchange",paraId:20,tocIndex:12},{value:"\u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:20,tocIndex:12},{value:"(type: ",paraId:20,tocIndex:12},{value:"start",paraId:20,tocIndex:12},{value:" | ",paraId:20,tocIndex:12},{value:"end",paraId:20,tocIndex:12},{value:", date: Date, dateStr: string, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"#if WECHAT bindvisiblechange",paraId:20,tocIndex:12},{value:"\u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1",paraId:20,tocIndex:12},{value:"(visible: boolean, event: ",paraId:20,tocIndex:12},{value:"Event",paraId:20,tocIndex:12},{value:") => void",paraId:20,tocIndex:12},{value:"-",paraId:20,tocIndex:12},{value:"YYYY-MM-DD",paraId:21},{value:"DatePicker \u7EC4\u4EF6\u8FD4\u56DE\u7684\u65F6\u95F4\u683C\u5F0F\u4E3A ",paraId:22,tocIndex:13},{value:"Date",paraId:22,tocIndex:13},{value:" \u7C7B\u578B\uFF0C\u5982\u679C\u9700\u8981\u8F6C\u6362\u4E3A ",paraId:22,tocIndex:13},{value:"YYYY-MM-DD",paraId:22,tocIndex:13},{value:" \u683C\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:22,tocIndex:13},{value:"dayjs",paraId:22,tocIndex:13},{value:" \u8FDB\u884C\u8F6C\u6362\u3002",paraId:22,tocIndex:13},{value:`<date-picker
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
`,paraId:24,tocIndex:13},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:25,tocIndex:15},{value:"\u53D8\u91CF\u540D",paraId:26,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:26,tocIndex:15},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:26,tocIndex:15},{value:"\u5907\u6CE8",paraId:26,tocIndex:15},{value:"--range-picker-shadow-color",paraId:26,tocIndex:15},{value:"#000000",paraId:26,tocIndex:15},{value:"#000000",paraId:26,tocIndex:15},{value:"\u8303\u56F4\u9009\u62E9\u5668\u9634\u5F71\u989C\u8272",paraId:26,tocIndex:15},{value:"--range-picker-item-color",paraId:26,tocIndex:15},{value:"#333333",paraId:26,tocIndex:15},{value:"#c5cad1",paraId:26,tocIndex:15},{value:"\u8303\u56F4\u9009\u62E9\u5668\u9879\u989C\u8272",paraId:26,tocIndex:15},{value:"--range-picker-active-color",paraId:26,tocIndex:15},{value:"#1677ff",paraId:26,tocIndex:15},{value:"#3086ff",paraId:26,tocIndex:15},{value:"\u8303\u56F4\u9009\u62E9\u5668\u6D3B\u52A8\u9879\u989C\u8272",paraId:26,tocIndex:15},{value:"--range-picker-placeholder-color",paraId:26,tocIndex:15},{value:"#cccccc",paraId:26,tocIndex:15},{value:"#474747",paraId:26,tocIndex:15},{value:"\u8303\u56F4\u9009\u62E9\u5668\u5360\u4F4D\u7B26\u989C\u8272",paraId:26,tocIndex:15},{value:"--range-picker-shadow-color-faded",paraId:26,tocIndex:15},{value:"rgba(0, 0, 0, 0.9)",paraId:26,tocIndex:15},{value:"rgba(0, 0, 0, 0.9)",paraId:26,tocIndex:15},{value:"\u8303\u56F4\u9009\u62E9\u5668\u9634\u5F71\u989C\u8272\uFF08\u892A\u8272\uFF09",paraId:26,tocIndex:15}]}}]);
