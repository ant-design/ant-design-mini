"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[8418],{21903:function(t,e,a){a.r(e),a.d(e,{demos:function(){return l}});var n=a(67294),d=a(5709),l={"src-calendar-demo-calendar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,90892))})),asset:{type:"BLOCK",id:"src-calendar-demo-calendar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},38708:function(t,e,a){a.r(e),a.d(e,{demos:function(){return l}});var n=a(67294),d=a(58833),l={"src-calendar-demo-calendar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,90892))})),asset:{type:"BLOCK",id:"src-calendar-demo-calendar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},99440:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(5709);const d=[{value:"Calendar Component",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-calendar": "antd-mini/es/Calendar/index"
#endif
#if WECHAT
  "ant-calendar": "antd-mini/Calendar/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<!-- \u9ED8\u8BA4\u591A\u9009 -->
<ant-calendar defaultValue="{{defaultValue}}"></ant-calendar>
<!-- \u5355\u9009 -->
<ant-calendar selectionMode="single" defaultValue="{{defaultValue}}" changedScrollIntoView />
`,paraId:3,tocIndex:3},{value:`<ant-calendar monthRange="{{demo3.monthRange}}">
  <view slot="calendarTitle">Custom Top</view>
</ant-calendar>
`,paraId:4,tocIndex:4},{value:`<ant-calendar
  monthRange="{{monthRange}}"
  showSelectableDatesOnly
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
  onMonthFormatter="{{demoMonthFormatter ? demoMonthFormatter : 'demoMonthFormatter'}}"
></ant-calendar>
`,paraId:5,tocIndex:5},{value:`import dayjs from 'dayjs';
function demoFormatter(cell) {
  const isOdd = dayjs(cell.time).date() % 2 === 1;
  const isNotBeginEnd = !cell.isSelectedBegin && !cell.isSelectedEnd;
  const isWeekend = dayjs(cell.time).day() > 4;
  let topClassName;
  if (isNotBeginEnd) {
    topClassName = isOdd ? 'odd' : 'even';
  }
  return {
    top: {
      className: topClassName,
      label: isOdd ? '\u5947\u6570' : '\u5076\u6570',
    },
    bottom: {
      label: isWeekend ? '\u5468\u672B' : '',
    },
  };
}
function demoMonthFormatter(month) {
  return {
    ...month,
  };
}
`,paraId:6,tocIndex:5},{value:`<ant-calendar
  monthRange="{{monthRange}}"
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
></ant-calendar>
`,paraId:7,tocIndex:6},{value:`import dayjs from 'dayjs';
function demoFormatter(cell, value) {
  if (Array.isArray(value) && value.length == 1) {
    const current = value[0];
    return {
      disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
      bottom:
        dayjs(cell.time).diff(dayjs(current), 'days') > 3
          ? {
              label: '\u4E0D\u53EF\u9009',
            }
          : undefined,
    };
  }
  return {};
}
`,paraId:8,tocIndex:6},{value:`<ant-calendar
  ref="handleRef"
  value="{{demo9.value}}"
  selectionMode="single"
  changedScrollIntoView
#if ALIPAY
  onChange="demo9HandleChange"
#endif
#if WECHAT
  bind:change="demo9HandleChange"
#endif
></ant-calendar>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandlePreviousDay"
#endif
#if WECHAT
  bind:tap="demo9HandlePreviousDay"
#endif
>
  Last day
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleNextDay"
#endif
#if WECHAT
  bind:tap="demo9HandleNextDay"
#endif
>
  Next day
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleScrollIntoView"
#endif
#if WECHAT
  bind:tap="demo9HandleScrollIntoView"
#endif
>
  Scroll to specified date
</ant-button>
`,paraId:9,tocIndex:7},{value:`Page({
  data: {
    demo9: {
      visible: true,
      value: nowDate,
    },
    demo9HandleChange(value) {
      this.setData({
        'demo9.value': value,
      });
    },
    demo9HandlePreviousDay() {
      this.setData({
        'demo9.value': this.data.demo9.value - 1000 * 24 * 3600,
      });
    },
    demo9HandleNextDay() {
      this.setData({
        'demo9.value': this.data.demo9.value + 1000 * 24 * 3600,
      });
    },
    demo9HandleScrollIntoView() {
      this.ref.scrollIntoView(nowDate);
    },
  },
});
`,paraId:10,tocIndex:7},{value:"The following are the properties and descriptions of the Calendar component:",paraId:11,tocIndex:9},{value:"Property",paraId:12,tocIndex:9},{value:"Description",paraId:12,tocIndex:9},{value:"Type",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"defaultValue",paraId:12,tocIndex:9},{value:"Initial value",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"value",paraId:12,tocIndex:9},{value:"The date selected by the calendar, which is the controlled mode when passed in.",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"selectionMode",paraId:12,tocIndex:9},{value:"Set the selection mode, single selection or continuous interval, the default is ",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"single",paraId:12,tocIndex:9},{value:" | ",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"monthRange",paraId:12,tocIndex:9},{value:"Month range, default to the last 3 months",paraId:12,tocIndex:9},{value:"[number, number]",paraId:12,tocIndex:9},{value:"Last 3 Months",paraId:12,tocIndex:9},{value:"weekStartsOn",paraId:12,tocIndex:9},{value:"The week column displays the day of the week as the first day. The default is ",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:" | ",paraId:12,tocIndex:9},{value:"Monday",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:"onFormatter",paraId:12,tocIndex:9},{value:"Use to set custom data for cells",paraId:12,tocIndex:9},{value:"(cell: CellState, currentValue: CalendarValue) => CellState",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"onMonthFormatter",paraId:12,tocIndex:9},{value:"Custom data for setting the month",paraId:12,tocIndex:9},{value:"(month: any) => CellState",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"localeText",paraId:12,tocIndex:9},{value:"International copywriting",paraId:12,tocIndex:9},{value:"Partial",paraId:12,tocIndex:9},{value:"<LocaleText>",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"changedScrollIntoView",paraId:12,tocIndex:9},{value:"Whether to scroll the view after the selected value is changed",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"showSelectableDatesOnly",paraId:12,tocIndex:9},{value:"Show only dates in the selectable range",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"#if ALIPAY onChange",paraId:12,tocIndex:9},{value:"Date Change Callback",paraId:12,tocIndex:9},{value:"(date: CalendarValue) => void",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"#if WECHAT bind:change",paraId:12,tocIndex:9},{value:"Date Change Callback",paraId:12,tocIndex:9},{value:"(date: CalendarValue) => void",paraId:12,tocIndex:9},{value:"None",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:13,tocIndex:10},{value:" The value type of the calendar, which is a number or a tuple of numbers ",paraId:13,tocIndex:10},{value:"number | [number,number]",paraId:13,tocIndex:10},{value:", which represents a single selection or continuous date interval. The timestamp in milliseconds.",paraId:13,tocIndex:10},{value:"CellState",paraId:14,tocIndex:10},{value:" Defines the various states of the calendar cell.",paraId:14,tocIndex:10},{value:`interface CellState {
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled: boolean;
  /**
   * \u65E5\u5386\u5355\u5143\u683C\u7684\u9876\u90E8\u5185\u5BB9
   */
  top?: { label: string; className?: string };
  /**
   * \u65E5\u5386\u5355\u5143\u683C\u7684\u5E95\u90E8\u5185\u5BB9
   */
  bottom?: { label: string; className?: string };
  /**
   * \u65F6\u95F4\u6233
   */
  time: number;
  /**
   * \u65E5\u671F
   */
  date: number;
  /**
   * \u662F\u5426\u9009\u4E2D
   */
  isSelected: boolean;
}
`,paraId:15,tocIndex:10},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:16,tocIndex:12},{value:"Variable name",paraId:17,tocIndex:12},{value:"Default Value",paraId:17,tocIndex:12},{value:"Dark Mode Default",paraId:17,tocIndex:12},{value:"Remarks",paraId:17,tocIndex:12},{value:"--calendar-cell-disabled-opacity",paraId:17,tocIndex:12},{value:"0.4",paraId:17,tocIndex:12},{value:"0.4",paraId:17,tocIndex:12},{value:"Calendar cell transparency disabled",paraId:17,tocIndex:12},{value:"--calendar-weekday-names-bg",paraId:17,tocIndex:12},{value:"#f8f8f8",paraId:17,tocIndex:12},{value:"#f8f8f8",paraId:17,tocIndex:12},{value:"Calendar Week Name Background Color",paraId:17,tocIndex:12},{value:"--calendar-default-color",paraId:17,tocIndex:12},{value:"#333333",paraId:17,tocIndex:12},{value:"#c5cad1",paraId:17,tocIndex:12},{value:"Calendar default color",paraId:17,tocIndex:12},{value:"--calendar-selected-color",paraId:17,tocIndex:12},{value:"rgba(22, 119, 255, 0.1)",paraId:17,tocIndex:12},{value:"rgba(22, 119, 255, 0.1)",paraId:17,tocIndex:12},{value:"Calendar selected color",paraId:17,tocIndex:12},{value:"--calendar-assist-color",paraId:17,tocIndex:12},{value:"#999999",paraId:17,tocIndex:12},{value:"#616161",paraId:17,tocIndex:12},{value:"Calendar Auxiliary Color",paraId:17,tocIndex:12},{value:"--calendar-selected-end-color",paraId:17,tocIndex:12},{value:"#ffffff",paraId:17,tocIndex:12},{value:"#ffffff",paraId:17,tocIndex:12},{value:"Calendar selected end color",paraId:17,tocIndex:12},{value:"--calendar-selected-color",paraId:17,tocIndex:12},{value:"#1677ff",paraId:17,tocIndex:12},{value:"#3086ff",paraId:17,tocIndex:12},{value:"Calendar selected color",paraId:17,tocIndex:12},{value:"By ",paraId:18,tocIndex:14},{value:"defaultValue",paraId:18,tocIndex:14},{value:" You can set a default time.",paraId:18,tocIndex:14},{value:"defaultValue",paraId:18,tocIndex:14},{value:" The type of is ",paraId:18,tocIndex:14},{value:"CalendarValue",paraId:18,tocIndex:14},{value:"\u3002",paraId:18,tocIndex:14},{value:"CalendarValue",paraId:19,tocIndex:14},{value:" The type of is ",paraId:19,tocIndex:14},{value:"number | [number, number]",paraId:19,tocIndex:14},{value:", representing the date of a single choice or continuous interval. It is a timestamp in milliseconds.",paraId:19,tocIndex:14},{value:"For example, if we want to set the default start time to today and end time to seven days later, we can ",paraId:20,tocIndex:14},{value:"defaultValue",paraId:20,tocIndex:14},{value:" Pass in the following code:",paraId:20,tocIndex:14},{value:`[dayjs().startOf('date'), dayjs().add(7, 'days').startOf('date')];
`,paraId:21,tocIndex:14},{value:"onFormatter",paraId:22},{value:"We can pass ",paraId:23,tocIndex:15},{value:"onFormatter",paraId:23,tocIndex:15},{value:" method to set the custom data for the cell,",paraId:23,tocIndex:15},{value:"onFormatter",paraId:23,tocIndex:15},{value:" The format of is ",paraId:23,tocIndex:15},{value:"(cell: CellState, currentValue: CalendarValue) => CellState",paraId:23,tocIndex:15},{value:"\u3002",paraId:23,tocIndex:15},{value:"This function gets the state of each cell and the current value. By returning new cell data, we can customize the state of the cell.",paraId:24,tocIndex:15},{value:"Here are some common usage scenarios:",paraId:25,tocIndex:15},{value:"In the Alipay applet, we can set it through the method on the page, and we need to pass in a method name string in the axml file.",paraId:26,tocIndex:16},{value:"The axml file:",paraId:27,tocIndex:16},{value:`<calendar onFormatter="handleFormat" />
`,paraId:28,tocIndex:16},{value:"ts file:",paraId:29,tocIndex:16},{value:`import dayjs from 'dayjs';

Page({
  handleFormat(cell: CellState) {
    // \u5982\u679C\u5355\u5143\u683C\u4EE3\u8868\u7684\u65F6\u95F4\u65E9\u4E8E\u4ECA\u5929\u7684\u5F00\u59CB\u65F6\u95F4\uFF0C\u5219\u7981\u6B62\u9009\u62E9
    return {
      disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
    };
  },
});
`,paraId:30,tocIndex:16},{value:"In the WeChat applet, we can also set it through the function in data. At this time, we need to pass in a variable name in the wxml file.",paraId:31,tocIndex:16},{value:"wxml file:",paraId:32,tocIndex:16},{value:`<calendar onFormatter="{{ handleFormat }}" />
`,paraId:33,tocIndex:16},{value:"ts file:",paraId:34,tocIndex:16},{value:`import dayjs from 'dayjs';

Page({
  data: {
    handleFormat: (cell: CellState) => {
      // \u5982\u679C\u5355\u5143\u683C\u4EE3\u8868\u7684\u65F6\u95F4\u65E9\u4E8E\u4ECA\u5929\u7684\u5F00\u59CB\u65F6\u95F4\uFF0C\u5219\u7981\u6B62\u9009\u62E9
      return {
        disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
      };
    },
  },
});
`,paraId:35,tocIndex:16}]},33806:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(58833);const d=[{value:"\u65E5\u5386\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-calendar": "antd-mini/es/Calendar/index"
#endif
#if WECHAT
  "ant-calendar": "antd-mini/Calendar/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<!-- \u9ED8\u8BA4\u591A\u9009 -->
<ant-calendar defaultValue="{{defaultValue}}"></ant-calendar>
<!-- \u5355\u9009 -->
<ant-calendar selectionMode="single" defaultValue="{{defaultValue}}" changedScrollIntoView />
`,paraId:3,tocIndex:3},{value:`<ant-calendar monthRange="{{demo3.monthRange}}">
  <view slot="calendarTitle">\u81EA\u5B9A\u4E49\u9876\u90E8</view>
</ant-calendar>
`,paraId:4,tocIndex:4},{value:`<ant-calendar
  monthRange="{{monthRange}}"
  showSelectableDatesOnly
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
  onMonthFormatter="{{demoMonthFormatter ? demoMonthFormatter : 'demoMonthFormatter'}}"
></ant-calendar>
`,paraId:5,tocIndex:5},{value:`import dayjs from 'dayjs';
function demoFormatter(cell) {
  const isOdd = dayjs(cell.time).date() % 2 === 1;
  const isNotBeginEnd = !cell.isSelectedBegin && !cell.isSelectedEnd;
  const isWeekend = dayjs(cell.time).day() > 4;
  let topClassName;
  if (isNotBeginEnd) {
    topClassName = isOdd ? 'odd' : 'even';
  }
  return {
    top: {
      className: topClassName,
      label: isOdd ? '\u5947\u6570' : '\u5076\u6570',
    },
    bottom: {
      label: isWeekend ? '\u5468\u672B' : '',
    },
  };
}
function demoMonthFormatter(month) {
  return {
    ...month,
  };
}
`,paraId:6,tocIndex:5},{value:`<ant-calendar
  monthRange="{{monthRange}}"
  onFormatter="{{demoFormatter ? demoFormatter : 'demoFormatter'}}"
></ant-calendar>
`,paraId:7,tocIndex:6},{value:`import dayjs from 'dayjs';
function demoFormatter(cell, value) {
  if (Array.isArray(value) && value.length == 1) {
    const current = value[0];
    return {
      disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
      bottom:
        dayjs(cell.time).diff(dayjs(current), 'days') > 3
          ? {
              label: '\u4E0D\u53EF\u9009',
            }
          : undefined,
    };
  }
  return {};
}
`,paraId:8,tocIndex:6},{value:`<ant-calendar
  ref="handleRef"
  value="{{demo9.value}}"
  selectionMode="single"
  changedScrollIntoView
#if ALIPAY
  onChange="demo9HandleChange"
#endif
#if WECHAT
  bind:change="demo9HandleChange"
#endif
></ant-calendar>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandlePreviousDay"
#endif
#if WECHAT
  bind:tap="demo9HandlePreviousDay"
#endif
>
  \u4E0A\u4E00\u5929
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleNextDay"
#endif
#if WECHAT
  bind:tap="demo9HandleNextDay"
#endif
>
  \u4E0B\u4E00\u5929
</ant-button>
<ant-button
  type="primary"
#if ALIPAY
  onTap="demo9HandleScrollIntoView"
#endif
#if WECHAT
  bind:tap="demo9HandleScrollIntoView"
#endif
>
  \u6EDA\u52A8\u5230\u6307\u5B9A\u65E5\u671F
</ant-button>
`,paraId:9,tocIndex:7},{value:`Page({
  data: {
    demo9: {
      visible: true,
      value: nowDate,
    },
    demo9HandleChange(value) {
      this.setData({
        'demo9.value': value,
      });
    },
    demo9HandlePreviousDay() {
      this.setData({
        'demo9.value': this.data.demo9.value - 1000 * 24 * 3600,
      });
    },
    demo9HandleNextDay() {
      this.setData({
        'demo9.value': this.data.demo9.value + 1000 * 24 * 3600,
      });
    },
    demo9HandleScrollIntoView() {
      this.ref.scrollIntoView(nowDate);
    },
  },
});
`,paraId:10,tocIndex:7},{value:"\u4EE5\u4E0B\u4E3A\u65E5\u5386\u7EC4\u4EF6\u7684\u5C5E\u6027\u53CA\u63CF\u8FF0\uFF1A",paraId:11,tocIndex:9},{value:"\u5C5E\u6027",paraId:12,tocIndex:9},{value:"\u8BF4\u660E",paraId:12,tocIndex:9},{value:"\u7C7B\u578B",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"defaultValue",paraId:12,tocIndex:9},{value:"\u521D\u59CB\u503C",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"value",paraId:12,tocIndex:9},{value:"\u65E5\u5386\u9009\u62E9\u7684\u65E5\u671F\uFF0C\u4F20\u5165\u540E\u5373\u4E3A\u53D7\u63A7\u6A21\u5F0F",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"selectionMode",paraId:12,tocIndex:9},{value:"\u8BBE\u7F6E\u9009\u62E9\u6A21\u5F0F\uFF0C\u5355\u9009\u6216\u8005\u8FDE\u7EED\u533A\u95F4\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"single",paraId:12,tocIndex:9},{value:" | ",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"range",paraId:12,tocIndex:9},{value:"monthRange",paraId:12,tocIndex:9},{value:"\u6708\u4EFD\u8303\u56F4\uFF0C\u9ED8\u8BA4\u4E3A\u6700\u8FD1 3 \u4E2A\u6708",paraId:12,tocIndex:9},{value:"[number, number]",paraId:12,tocIndex:9},{value:"\u6700\u8FD1 3 \u4E2A\u6708",paraId:12,tocIndex:9},{value:"weekStartsOn",paraId:12,tocIndex:9},{value:"\u661F\u671F\u680F\uFF0C\u4EE5\u5468\u51E0\u4F5C\u4E3A\u7B2C\u4E00\u5929\u663E\u793A\u3002\u9ED8\u8BA4\u4E3A ",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:" | ",paraId:12,tocIndex:9},{value:"Monday",paraId:12,tocIndex:9},{value:"Sunday",paraId:12,tocIndex:9},{value:"onFormatter",paraId:12,tocIndex:9},{value:"\u7528\u4E8E\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u81EA\u5B9A\u4E49\u6570\u636E",paraId:12,tocIndex:9},{value:"(cell: CellState, currentValue: CalendarValue) => CellState",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"onMonthFormatter",paraId:12,tocIndex:9},{value:"\u7528\u4E8E\u8BBE\u7F6E\u6708\u4EFD\u7684\u81EA\u5B9A\u4E49\u6570\u636E",paraId:12,tocIndex:9},{value:"(month: any) => CellState",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"localeText",paraId:12,tocIndex:9},{value:"\u56FD\u9645\u5316\u6587\u6848",paraId:12,tocIndex:9},{value:"Partial",paraId:12,tocIndex:9},{value:"<LocaleText>",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"changedScrollIntoView",paraId:12,tocIndex:9},{value:"\u9009\u4E2D\u503C\u6539\u53D8\u540E\u662F\u5426\u6EDA\u52A8\u89C6\u56FE",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"showSelectableDatesOnly",paraId:12,tocIndex:9},{value:"\u53EA\u5C55\u793A\u5728\u53EF\u9009\u8303\u56F4\u5185\u7684\u65E5\u671F",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"#if ALIPAY onChange",paraId:12,tocIndex:9},{value:"\u65E5\u671F\u53D8\u5316\u56DE\u8C03",paraId:12,tocIndex:9},{value:"(date: CalendarValue) => void",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"#if WECHAT bind:change",paraId:12,tocIndex:9},{value:"\u65E5\u671F\u53D8\u5316\u56DE\u8C03",paraId:12,tocIndex:9},{value:"(date: CalendarValue) => void",paraId:12,tocIndex:9},{value:"\u65E0",paraId:12,tocIndex:9},{value:"CalendarValue",paraId:13,tocIndex:10},{value:" : \u65E5\u5386\u7684\u503C\u7C7B\u578B\uFF0C\u4E3A\u6570\u5B57\u6216\u6570\u5B57\u5143\u7EC4 ",paraId:13,tocIndex:10},{value:"number | [number,number]",paraId:13,tocIndex:10},{value:"\uFF0C\u8868\u793A\u5355\u9009\u6216\u8FDE\u7EED\u65E5\u671F\u533A\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u7684\u65F6\u95F4\u6233\u3002",paraId:13,tocIndex:10},{value:"CellState",paraId:14,tocIndex:10},{value:" : \u5B9A\u4E49\u4E86\u65E5\u5386\u5355\u5143\u683C\u7684\u5404\u79CD\u72B6\u6001\u3002",paraId:14,tocIndex:10},{value:`interface CellState {
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled: boolean;
  /**
   * \u65E5\u5386\u5355\u5143\u683C\u7684\u9876\u90E8\u5185\u5BB9
   */
  top?: { label: string; className?: string };
  /**
   * \u65E5\u5386\u5355\u5143\u683C\u7684\u5E95\u90E8\u5185\u5BB9
   */
  bottom?: { label: string; className?: string };
  /**
   * \u65F6\u95F4\u6233
   */
  time: number;
  /**
   * \u65E5\u671F
   */
  date: number;
  /**
   * \u662F\u5426\u9009\u4E2D
   */
  isSelected: boolean;
}
`,paraId:15,tocIndex:10},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:16,tocIndex:12},{value:"\u53D8\u91CF\u540D",paraId:17,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:12},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:17,tocIndex:12},{value:"\u5907\u6CE8",paraId:17,tocIndex:12},{value:"--calendar-cell-disabled-opacity",paraId:17,tocIndex:12},{value:"0.4",paraId:17,tocIndex:12},{value:"0.4",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u5355\u5143\u683C\u7981\u7528\u900F\u660E\u5EA6",paraId:17,tocIndex:12},{value:"--calendar-weekday-names-bg",paraId:17,tocIndex:12},{value:"#f8f8f8",paraId:17,tocIndex:12},{value:"#f8f8f8",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u661F\u671F\u540D\u79F0\u80CC\u666F\u989C\u8272",paraId:17,tocIndex:12},{value:"--calendar-default-color",paraId:17,tocIndex:12},{value:"#333333",paraId:17,tocIndex:12},{value:"#c5cad1",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u9ED8\u8BA4\u989C\u8272",paraId:17,tocIndex:12},{value:"--calendar-selected-color",paraId:17,tocIndex:12},{value:"rgba(22, 119, 255, 0.1)",paraId:17,tocIndex:12},{value:"rgba(22, 119, 255, 0.1)",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u9009\u4E2D\u989C\u8272",paraId:17,tocIndex:12},{value:"--calendar-assist-color",paraId:17,tocIndex:12},{value:"#999999",paraId:17,tocIndex:12},{value:"#616161",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u8F85\u52A9\u989C\u8272",paraId:17,tocIndex:12},{value:"--calendar-selected-end-color",paraId:17,tocIndex:12},{value:"#ffffff",paraId:17,tocIndex:12},{value:"#ffffff",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u9009\u4E2D\u7ED3\u675F\u989C\u8272",paraId:17,tocIndex:12},{value:"--calendar-selected-color",paraId:17,tocIndex:12},{value:"#1677ff",paraId:17,tocIndex:12},{value:"#3086ff",paraId:17,tocIndex:12},{value:"\u65E5\u5386\u9009\u4E2D\u989C\u8272",paraId:17,tocIndex:12},{value:"\u901A\u8FC7 ",paraId:18,tocIndex:14},{value:"defaultValue",paraId:18,tocIndex:14},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u65F6\u95F4\u3002",paraId:18,tocIndex:14},{value:"defaultValue",paraId:18,tocIndex:14},{value:" \u7684\u7C7B\u578B\u662F ",paraId:18,tocIndex:14},{value:"CalendarValue",paraId:18,tocIndex:14},{value:"\u3002",paraId:18,tocIndex:14},{value:"CalendarValue",paraId:19,tocIndex:14},{value:" \u7684\u7C7B\u578B\u662F ",paraId:19,tocIndex:14},{value:"number | [number, number]",paraId:19,tocIndex:14},{value:"\uFF0C\u4EE3\u8868\u5355\u9009\u6216\u8005\u8FDE\u7EED\u533A\u95F4\u7684\u65E5\u671F\u3002\u5B83\u662F\u4E00\u4E2A\u65F6\u95F4\u6233\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2\u3002",paraId:19,tocIndex:14},{value:"\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u5F00\u59CB\u65F6\u95F4\u4E3A\u4ECA\u5929\uFF0C\u7ED3\u675F\u65F6\u95F4\u4E3A\u4E03\u5929\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 ",paraId:20,tocIndex:14},{value:"defaultValue",paraId:20,tocIndex:14},{value:" \u4E2D\u4F20\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A",paraId:20,tocIndex:14},{value:`[dayjs().startOf('date'), dayjs().add(7, 'days').startOf('date')];
`,paraId:21,tocIndex:14},{value:"onFormatter",paraId:22},{value:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",paraId:23,tocIndex:15},{value:"onFormatter",paraId:23,tocIndex:15},{value:" \u65B9\u6CD5\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u81EA\u5B9A\u4E49\u6570\u636E\uFF0C",paraId:23,tocIndex:15},{value:"onFormatter",paraId:23,tocIndex:15},{value:" \u7684\u683C\u5F0F\u662F ",paraId:23,tocIndex:15},{value:"(cell: CellState, currentValue: CalendarValue) => CellState",paraId:23,tocIndex:15},{value:"\u3002",paraId:23,tocIndex:15},{value:"\u8FD9\u4E2A\u51FD\u6570\u4F1A\u83B7\u53D6\u6BCF\u4E2A\u5355\u5143\u683C\u7684\u72B6\u6001\u4EE5\u53CA\u5F53\u524D\u7684\u503C\u3002\u901A\u8FC7\u8FD4\u56DE\u65B0\u7684\u5355\u5143\u683C\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u72B6\u6001\u3002",paraId:24,tocIndex:15},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\uFF1A",paraId:25,tocIndex:15},{value:"\u5728\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9875\u9762\u4E0A\u7684\u65B9\u6CD5\u8BBE\u7F6E\uFF0C\u9700\u8981\u5728 axml \u6587\u4EF6\u4E2D\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\u540D\u5B57\u7B26\u4E32\u3002",paraId:26,tocIndex:16},{value:"axml \u6587\u4EF6\uFF1A",paraId:27,tocIndex:16},{value:`<calendar onFormatter="handleFormat" />
`,paraId:28,tocIndex:16},{value:"ts \u6587\u4EF6\uFF1A",paraId:29,tocIndex:16},{value:`import dayjs from 'dayjs';

Page({
  handleFormat(cell: CellState) {
    // \u5982\u679C\u5355\u5143\u683C\u4EE3\u8868\u7684\u65F6\u95F4\u65E9\u4E8E\u4ECA\u5929\u7684\u5F00\u59CB\u65F6\u95F4\uFF0C\u5219\u7981\u6B62\u9009\u62E9
    return {
      disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
    };
  },
});
`,paraId:30,tocIndex:16},{value:"\u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7 data \u4E2D\u7684\u51FD\u6570\u6765\u8BBE\u7F6E\uFF0C\u6B64\u65F6\u5728 wxml \u6587\u4EF6\u4E2D\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u53D8\u91CF\u540D\u3002",paraId:31,tocIndex:16},{value:"wxml \u6587\u4EF6\uFF1A",paraId:32,tocIndex:16},{value:`<calendar onFormatter="{{ handleFormat }}" />
`,paraId:33,tocIndex:16},{value:"ts \u6587\u4EF6\uFF1A",paraId:34,tocIndex:16},{value:`import dayjs from 'dayjs';

Page({
  data: {
    handleFormat: (cell: CellState) => {
      // \u5982\u679C\u5355\u5143\u683C\u4EE3\u8868\u7684\u65F6\u95F4\u65E9\u4E8E\u4ECA\u5929\u7684\u5F00\u59CB\u65F6\u95F4\uFF0C\u5219\u7981\u6B62\u9009\u62E9
      return {
        disabled: dayjs(cell.time).isBefore(dayjs().startOf('date')),
      };
    },
  },
});
`,paraId:35,tocIndex:16}]}}]);
