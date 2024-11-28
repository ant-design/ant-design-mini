"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2977],{1488:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var n=e(67294),t=e(31573),d={"src-picker-demo-picker":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,66976))})),asset:{type:"BLOCK",id:"src-picker-demo-picker",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},33571:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(31573);const t=[{value:"The Picker selector displays a scrollable list of one or more collections of options, providing consistency between the iOS and Android-side experiences compared to native pickers.",paraId:0,tocIndex:0},{value:"One or more sets of association options are provided for selection by the user.",paraId:1,tocIndex:0},{value:"When there are less than 5 options, it is recommended to tile the options directly. Using Radio is a better choice.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
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
  bind:cancel="handleDismiss"
  bind:visiblechange="handleTriggerPicker"
  bind:ok="handleOk"
  bind:change="handleChange"
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
  bind:ok="handleOk"
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
  bind:ok="handleControlledOk"
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
`,paraId:17,tocIndex:7},{value:`| \u5C5E\u6027                          | Description                                                                                                                                                                        | Type                                                                                                                                                                           | Default Value      |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | --- |
| animationType                 | \u52A8\u753BType\uFF0C\u53EF\u9009`,paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:" ",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:", the default is used",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:"Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched",paraId:18,tocIndex:10},{value:"position",paraId:18,tocIndex:10},{value:"\u89E3\u51B3 | string                                                                                                                                                                         | ",paraId:18,tocIndex:10},{value:"transform",paraId:18,tocIndex:10},{value:` |
| className                     | \u7C7B\u540D                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| defaultValue                  | Default Value                                                                                                                                                                      | string | number | Array<string | number>                                                                                                                                  | -           |
| disabled                      | \u662F\u5426\u7981\u7528                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| cancelText                    | \u53D6\u6D88\u6587\u6848                                                                                                                                                                    | string                                                                                                                                                                         | '\u53D6\u6D88'      |
| content                       | \u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD                                                                                                                                                              | slot                                                                                                                                                                           | -           |
| indicatorStyle                | \u9009\u4E2D\u6846\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| indicatorClassName            | \u9009\u4E2D\u6846\u7684\u7C7B\u540D                                                                                                                                                                | string                                                                                                                                                                         | -           |
| maskClassName                 | \u8499\u5C42\u7684\u7C7B\u540D                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| maskClosable                  | \u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED                                                                                                                                                        | boolean                                                                                                                                                                        | true        |     |
| maskStyle                     | \u8499\u5C42\u7684\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| okText                        | \u786E\u8BA4\u6309\u94AE\u6587\u6848                                                                                                                                                                | string                                                                                                                                                                         | '\u786E\u5B9A'      |
| emptyText                     | \u7A7A\u72B6\u6001\u6309\u94AE\u6587\u6848                                                                                                                                                              | string                                                                                                                                                                         | '\u6682\u65E0\u6570\u636E'  |
| options                       | picker \u6570\u636E\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u7684\u9009\u9879                                                                                                                                               | `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:19,tocIndex:10},{value:`[]                                                                                                                                        | []          |
| placeholder                   | \u63D0\u793A\u6587\u6848                                                                                                                                                                    | string                                                                                                                                                                         | '\u8BF7\u9009\u62E9'    |
| popClassName                  | \u5F39\u51FA\u6846\u7C7B\u540D                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| popStyle                      | \u5F39\u51FA\u6846\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| prefix                        | \u524D\u7F00                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| style                         | \u6837\u5F0F                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| suffix                        | \u540E\u7F00                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| title                         | \u5F39\u51FA\u6846\u6807\u9898                                                                                                                                                                  | string | slot                                                                                                                                                                 | -           |
| value                         | \u9009\u4E2D\u7684Value                                                                                                                                                                    | string | number | Array<string | number>                                                                                                                                  | -           |
| visible                       | \u662F\u5426\u663E\u793A                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| defaultVisible                | \u9ED8\u8BA4\u662F\u5426\u663E\u793A                                                                                                                                                                | boolean                                                                                                                                                                        | false       |
| onFormat                      | \u9009\u4E2DValue\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F                                                                                                                                                        | (value: `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:20,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:21,tocIndex:10},{value:`) => string                                                                        | -           |
| #if ALIPAY onOk               | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                      | (value: `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:22,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:23,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void | -           |
| #if ALIPAY onCancel           | \u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                 | (event: `,paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void                                                                                              | -           |
| #if ALIPAY onChange           | \u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                    | (value: `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:24,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:25,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void | -           |
| #if ALIPAY onVisibleChange    | \u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1                                                                                                                                                 | (visible: boolean, event: `,paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void                                                                            | -           |
| #if WECHAT bind:ok            | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                      | (value: `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:26,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:27,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void | -           |
| #if WECHAT bind:cancel        | \u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                 | (event: `,paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void                                                                                              | -           |
| #if WECHAT bind:change        | \u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                    | (value: `,paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:28,tocIndex:10},{value:", column: ",paraId:18,tocIndex:10},{value:"PickerColumnItem",paraId:29,tocIndex:10},{value:", event: ",paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:`) => void | -           |
| #if WECHAT bind:visiblechange | \u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1                                                                                                                                                 | (visible: boolean, event: `,paraId:18,tocIndex:10},{value:"Event",paraId:18,tocIndex:10},{value:") => void                                                                            | -           |",paraId:18,tocIndex:10},{value:`| \u5C5E\u6027                          | Description                                                                                                                                                                        | Type                                                                                                                                                     | Default Value       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --- |
| animationType                 | \u52A8\u753BType\uFF0C\u53EF\u9009`,paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:" ",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:", the default is used",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:"Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched",paraId:30,tocIndex:11},{value:"position",paraId:30,tocIndex:11},{value:"\u89E3\u51B3 | string                                                                                                                                                   | ",paraId:30,tocIndex:11},{value:"transform",paraId:30,tocIndex:11},{value:`  |
| className                     | \u7C7B\u540D                                                                                                                                                                        | string                                                                                                                                                   | -            |
| defaultValue                  | \u9ED8\u8BA4\u9009\u4E2D\u7684Value                                                                                                                                                                | string[]                                                                                                                                                 | -            |
| disabled                      | \u662F\u5426\u7981\u7528                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| cancelText                    | \u53D6\u6D88\u6587\u6848                                                                                                                                                                    | string                                                                                                                                                   | '\u53D6\u6D88'       |
| content                       | \u81EA\u5B9A\u4E49\u5185\u5BB9\u63D2\u69FD                                                                                                                                                              | slot                                                                                                                                                     | -            |
| format                        | \u65F6\u95F4\u683C\u5F0F\u5316\u663E\u793A\uFF0C\u683C\u5F0F\u540C`,paraId:30,tocIndex:11},{value:"dayjs",paraId:30,tocIndex:11},{value:`                                                                                                 | string                                                                                                                                                   | 'YYYY/MM/DD' |
| indicatorStyle                | \u9009\u4E2D\u6846\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                   | -            |
| indicatorClassName            | \u9009\u4E2D\u6846\u7684\u7C7B\u540D                                                                                                                                                                | string                                                                                                                                                   | -            |
| maskClassName                 | \u8499\u5C42\u7684\u7C7B\u540D                                                                                                                                                                  | string                                                                                                                                                   | -            |
| maskClosable                  | \u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED                                                                                                                                                        | boolean                                                                                                                                                  | true         |     |
| maskStyle                     | \u8499\u5C42\u7684\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                   | -            |
| okText                        | \u786E\u8BA4\u6309\u94AE\u6587\u6848                                                                                                                                                                | string                                                                                                                                                   | '\u786E\u5B9A'       |
| options                       | \u53EF\u9009\u6570\u636E                                                                                                                                                                    | `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:31,tocIndex:11},{value:`[]                                                                                                                      | []           |
| placeholder                   | \u63D0\u793A\u6587\u6848                                                                                                                                                                    | string                                                                                                                                                   | '\u8BF7\u9009\u62E9'     |
| popClassName                  | \u5F39\u51FA\u6846\u7C7B\u540D                                                                                                                                                                  | string                                                                                                                                                   | -            |
| popStyle                      | \u5F39\u51FA\u6846\u6837\u5F0F                                                                                                                                                                  | string                                                                                                                                                   | -            |
| prefix                        | \u524D\u7F00                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| style                         | \u6837\u5F0F                                                                                                                                                                        | string                                                                                                                                                   | -            |
| suffix                        | \u540E\u7F00                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| title                         | \u5F39\u51FA\u6846\u6807\u9898                                                                                                                                                                  | string | slot                                                                                                                                           | -            |
| value                         | \u9009\u4E2D\u7684Value                                                                                                                                                                    | string[]                                                                                                                                                 | -            |
| visible                       | \u662F\u5426\u663E\u793A                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| defaultVisible                | \u9ED8\u8BA4\u662F\u5426\u663E\u793A                                                                                                                                                                | boolean                                                                                                                                                  | false        |
| onFormat                      | \u9009\u4E2DValue\u7684\u6587\u672C\u663E\u793A\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u5C55\u793A labels.join('')                                                                                                                              | (value: string[], selectedOptions: `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:32,tocIndex:11},{value:`[]) => string                                                                        | -            |
| #if ALIPAY onOk               | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                      | (value: string[], selectedOptions: `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:33,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void | -            |
| #if ALIPAY onCancel           | \u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                 | (event: `,paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void                                                                        |
| #if ALIPAY onChange           | \u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                    | (value: string[], selectedOptions: `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:34,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void | -            |
| #if ALIPAY onVisibleChange    | \u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1                                                                                                                                                 | (visible: boolean, event: `,paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void                                                      | -            |
| #if WECHAT bind:ok            | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                      | (value: string[], selectedOptions: `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:35,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void | -            |
| #if WECHAT bind:cancel        | \u70B9\u51FB\u53D6\u6D88\u6309\u94AE/\u8499\u5C42\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                 | (event: `,paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void                                                                        |
| #if WECHAT bind:change        | \u9009\u4E2D\u9879\u53D1\u751F\u53D8\u5316\uFF0C\u89E6\u53D1\u56DE\u8C03                                                                                                                                                    | (value: string[], selectedOptions: `,paraId:30,tocIndex:11},{value:"CascaderOption",paraId:36,tocIndex:11},{value:"[], event: ",paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:`) => void | -            |
| #if WECHAT bind:visibleChange | \u5F39\u51FA\u6846\u663E\u793A/\u9690\u85CF\u72B6\u6001\u53D8\u5316\u89E6\u53D1                                                                                                                                                 | (visible: boolean, event: `,paraId:30,tocIndex:11},{value:"Event",paraId:30,tocIndex:11},{value:") => void                                                      | -            |",paraId:30,tocIndex:11},{value:"Parameters",paraId:37,tocIndex:12},{value:"Description",paraId:37,tocIndex:12},{value:"Type",paraId:37,tocIndex:12},{value:"Default Value",paraId:37,tocIndex:12},{value:"label",paraId:37,tocIndex:12},{value:"Text",paraId:37,tocIndex:12},{value:"string",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"value",paraId:37,tocIndex:12},{value:"Value",paraId:37,tocIndex:12},{value:"string | number",paraId:37,tocIndex:12},{value:"-",paraId:37,tocIndex:12},{value:"Parameters",paraId:38,tocIndex:13},{value:"Description",paraId:38,tocIndex:13},{value:"Type",paraId:38,tocIndex:13},{value:"Default Value",paraId:38,tocIndex:13},{value:"label",paraId:38,tocIndex:13},{value:"Text",paraId:38,tocIndex:13},{value:"string",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"value",paraId:38,tocIndex:13},{value:"Value",paraId:38,tocIndex:13},{value:"string | number",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"children",paraId:38,tocIndex:13},{value:"Sub Level",paraId:38,tocIndex:13},{value:"CascaderOption[]",paraId:38,tocIndex:13},{value:"-",paraId:38,tocIndex:13},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:39,tocIndex:15},{value:"Variable name",paraId:40,tocIndex:15},{value:"Light Mode Default",paraId:40,tocIndex:15},{value:"Dark Mode Default",paraId:40,tocIndex:15},{value:"Remarks",paraId:40,tocIndex:15},{value:"--picker-item-color",paraId:40,tocIndex:15},{value:"#333333",paraId:40,tocIndex:15},{value:"#c5cad1",paraId:40,tocIndex:15},{value:"Selector item color",paraId:40,tocIndex:15},{value:"--picker-header-action-color",paraId:40,tocIndex:15},{value:"#1677ff",paraId:40,tocIndex:15},{value:"#3086ff",paraId:40,tocIndex:15},{value:"Selector Head Operation Color",paraId:40,tocIndex:15},{value:"--picker-placeholder-color",paraId:40,tocIndex:15},{value:"#cccccc",paraId:40,tocIndex:15},{value:"#474747",paraId:40,tocIndex:15},{value:"Selector Placeholder Color",paraId:40,tocIndex:15},{value:"--picker-header-color",paraId:40,tocIndex:15},{value:"#eeeeee",paraId:40,tocIndex:15},{value:"#2b2b2b",paraId:40,tocIndex:15},{value:"Selector head color",paraId:40,tocIndex:15},{value:"--picker-content-background-color",paraId:40,tocIndex:15},{value:"#ffffff",paraId:40,tocIndex:15},{value:"#1a1a1a",paraId:40,tocIndex:15},{value:"Selector Content Background Color",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-95",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.05)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.02)",paraId:40,tocIndex:15},{value:"Selector mask background color (95% transparency)",paraId:40,tocIndex:15},{value:"--picker-mask-bg-faded-60",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.4)",paraId:40,tocIndex:15},{value:"rgba(255, 255, 255, 0.01)",paraId:40,tocIndex:15},{value:"Selector mask background color (60% transparency)",paraId:40,tocIndex:15},{value:"Due to the limitation of native picker-view, dynamic change of the number of columns is not supported for the time being.",paraId:41,tocIndex:17}]}}]);
