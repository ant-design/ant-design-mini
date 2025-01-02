"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5990],{2150:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),o=a(71139),d={"src-notice-bar-demo-noticebar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,68981))})),asset:{type:"BLOCK",id:"src-notice-bar-demo-noticebar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},96298:function(t,e,a){a.r(e),a.d(e,{texts:function(){return o}});var n=a(71139);const o=[{value:"Shows a set of message notifications. Usually used for the notification of information in the current page, is a more eye-catching in-page notification.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-notice": "antd-mini/es/NoticeBar/index"
#endif
#if WECHAT
  "ant-notice": "antd-mini/NoticeBar/index"
#endif
}
`,paraId:2,tocIndex:1},{value:` <ant-notice type="default">default</ant-notice>
 <ant-notice type="info">info</ant-notice>
 <ant-notice type="error">error</ant-notice>
`,paraId:3,tocIndex:3},{value:`<ant-notice mode="closeable">
  This notification can be turned off
</ant-notice>
`,paraId:4,tocIndex:4},{value:`<ant-notice type="default"  ellipsisRow="{{2}}">
  Turn on line feed when text overflows. Not enough text to continue adding text to make up. Not enough text to continue adding text to make up.
</ant-notice>
`,paraId:5,tocIndex:5},{value:`<ant-notice
  type="default"
  enableMarquee="{{true}}"
  loop="{{true}}"
  onTap="handleTapLink"
  mode="link">
  Turn on circular scrolling when text overflows. Not enough text to continue adding text to make up.
</ant-notice>
`,paraId:6,tocIndex:6},{value:`<ant-notice type="primary" icon="GlobalOutline" mode="link">
  Customize Left Icon
</ant-notice>

<ant-notice type="primary" mode="link"
  icon="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
>Customize the left icon image</ant-notice>

<ant-notice mode="link" onTap="handleTapLink">
  Customize right button
  <view slot="extra" class="extra">
    <view onTap="handleTapAction">No more prompting</view>
    <view onTap="handleTapAction">View Details</view>
  </view>
</ant-notice>
`,paraId:7,tocIndex:7},{value:"Property",paraId:8,tocIndex:9},{value:"Description",paraId:8,tocIndex:9},{value:"Type",paraId:8,tocIndex:9},{value:"Default Value",paraId:8,tocIndex:9},{value:"className",paraId:8,tocIndex:9},{value:"Class Name",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"enableMarquee",paraId:8,tocIndex:9},{value:"Whether to turn on scroll animation",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"ellipsisRow",paraId:8,tocIndex:9},{value:"The copy multi-line shows the maximum number of rows, and",paraId:8,tocIndex:9},{value:"enableMarquee",paraId:8,tocIndex:9},{value:"Cannot be configured simultaneously",paraId:8,tocIndex:9},{value:"number|boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"extra",paraId:8,tocIndex:9},{value:"Customize right content",paraId:8,tocIndex:9},{value:"slot",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"icon",paraId:8,tocIndex:9},{value:"The icon on the left supports all built-in iconType and custom links, as well as custom slots (WeChat version requires slotIcon settings)",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"loop",paraId:8,tocIndex:9},{value:"Whether to cycle scrolling,",paraId:8,tocIndex:9},{value:"enableMarquee",paraId:8,tocIndex:9},{value:" Valid when true",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"mode",paraId:8,tocIndex:9},{value:"the type of announcement,",paraId:8,tocIndex:9},{value:"link",paraId:8,tocIndex:9},{value:" Indicates connection, the whole line can be pointed;",paraId:8,tocIndex:9},{value:"closeable",paraId:8,tocIndex:9},{value:" Indicates that clicking x can be closed; If you do not fill in, there is no icon on the right.",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"style",paraId:8,tocIndex:9},{value:"Style",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"title",paraId:8,tocIndex:9},{value:"Title",paraId:8,tocIndex:9},{value:"string|slot",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"type",paraId:8,tocIndex:9},{value:"type, optional ",paraId:8,tocIndex:9},{value:"default",paraId:8,tocIndex:9},{value:", ",paraId:8,tocIndex:9},{value:"error",paraId:8,tocIndex:9},{value:", ",paraId:8,tocIndex:9},{value:"primary",paraId:8,tocIndex:9},{value:", ",paraId:8,tocIndex:9},{value:"info",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"default",paraId:8,tocIndex:9},{value:"slotIcon",paraId:8,tocIndex:9},{value:"WeChat version needs to enable the slot of icon position through this field",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"onTap",paraId:8,tocIndex:9},{value:"Click the icon (arrow or cross) on the right side of the notification bar to trigger the callback",paraId:8,tocIndex:9},{value:"() => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:9,tocIndex:11},{value:"Variable name",paraId:10,tocIndex:11},{value:"Default Value",paraId:10,tocIndex:11},{value:"Dark Mode Default",paraId:10,tocIndex:11},{value:"Remarks",paraId:10,tocIndex:11},{value:"--notice-background-color",paraId:10,tocIndex:11},{value:"#fff9ed",paraId:10,tocIndex:11},{value:"#fff9ed",paraId:10,tocIndex:11},{value:"Notification background color",paraId:10,tocIndex:11},{value:"--notice-border-color",paraId:10,tocIndex:11},{value:"#fff3d9",paraId:10,tocIndex:11},{value:"#fff3d9",paraId:10,tocIndex:11},{value:"Notification border color",paraId:10,tocIndex:11},{value:"--notice-color",paraId:10,tocIndex:11},{value:"#ff6010",paraId:10,tocIndex:11},{value:"#ff6010",paraId:10,tocIndex:11},{value:"Notification Color",paraId:10,tocIndex:11},{value:"--notice-error-border-color",paraId:10,tocIndex:11},{value:"#fff3d9",paraId:10,tocIndex:11},{value:"#fff3d9",paraId:10,tocIndex:11},{value:"Error notification border color",paraId:10,tocIndex:11},{value:"--notice-error-color",paraId:10,tocIndex:11},{value:"#ffffff",paraId:10,tocIndex:11},{value:"#ffffff",paraId:10,tocIndex:11},{value:"Error notification color",paraId:10,tocIndex:11},{value:"--notice-error-background-color",paraId:10,tocIndex:11},{value:"#ff3141",paraId:10,tocIndex:11},{value:"#ff4a58",paraId:10,tocIndex:11},{value:"Error notification background color",paraId:10,tocIndex:11},{value:"--notice-primary-border-color",paraId:10,tocIndex:11},{value:"rgba(22, 119, 255, 0.72)",paraId:10,tocIndex:11},{value:"rgba(22, 119, 255, 0.72)",paraId:10,tocIndex:11},{value:"Primary notification border color",paraId:10,tocIndex:11},{value:"--notice-primary-color",paraId:10,tocIndex:11},{value:"#1677ff",paraId:10,tocIndex:11},{value:"#3086ff",paraId:10,tocIndex:11},{value:"Primary notification color",paraId:10,tocIndex:11},{value:"--notice-primary-background-color",paraId:10,tocIndex:11},{value:"rgba(208, 228, 255, 1)",paraId:10,tocIndex:11},{value:"rgba(208, 228, 255, 1)",paraId:10,tocIndex:11},{value:"Primary notification background color",paraId:10,tocIndex:11},{value:"--notice-info-text-color",paraId:10,tocIndex:11},{value:"#ffffff",paraId:10,tocIndex:11},{value:"#ffffff",paraId:10,tocIndex:11},{value:"Information notification text color",paraId:10,tocIndex:11},{value:"--notice-info-background-color",paraId:10,tocIndex:11},{value:"#666666",paraId:10,tocIndex:11},{value:"#808080",paraId:10,tocIndex:11},{value:"Information notification background color",paraId:10,tocIndex:11}]}}]);
