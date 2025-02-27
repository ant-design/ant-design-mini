"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7643],{13612:function(n,e,a){a.r(e),a.d(e,{demos:function(){return t}});var o=a(67294),d=a(25279),t={"src-voucher-demo-voucher":{component:o.memo(o.lazy(function(){return a.e(2433).then(a.bind(a,74281))})),asset:{type:"BLOCK",id:"src-voucher-demo-voucher",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},68664:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});var o=a(25279);const d=[{value:"Generic Coupon Component.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-voucher": "antd-mini/es/Voucher/index"
#endif
#if WECHAT
  "ant-voucher": "antd-mini/Voucher/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-voucher
#if ALIPAY
  onTap="onTap"
#endif
#if WECHAT
  bindtap="onTap"
#endif
  dataSource="{{dataSource}}"
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    dataSource: [
      {
        title: 'title',
        desc: 'subTitle',
        money: '50',
        threshold: '500 to use',
        actionAreaInfo: {
          disabled: false,
          text: 'to exchange',
        },
      },
    ],
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-voucher
  size="small"
  dataSource="{{dataSource}}"
/>
`,paraId:5,tocIndex:4},{value:`<ant-voucher
  direction="horizontal"
  dataSource="{{dataSource}}"
/>
`,paraId:6,tocIndex:5},{value:`<ant-voucher
  direction="vertical"
  dataSource="{{dataSource}}"
/>
`,paraId:7,tocIndex:6},{value:`<ant-voucher
  direction="multipleColumn"
  dataSource="{{dataSource}}"
/>
`,paraId:8,tocIndex:7},{value:`<ant-voucher
  size="small"
  dataSource="{{dataSource}}"
>
  <view
    slot="voucher-action-area"
    class="ant-voucher-slot-demo"
  >
    Expired
  </view>
</ant-voucher>
`,paraId:9,tocIndex:8},{value:"Property",paraId:10,tocIndex:10},{value:"Type",paraId:10,tocIndex:10},{value:"Required",paraId:10,tocIndex:10},{value:"Default Value",paraId:10,tocIndex:10},{value:"Description",paraId:10,tocIndex:10},{value:"className",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"No",paraId:10,tocIndex:10},{value:'""',paraId:10,tocIndex:10},{value:"Container className",paraId:10,tocIndex:10},{value:"size",paraId:10,tocIndex:10},{value:"small",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"No",paraId:10,tocIndex:10},{value:"large",paraId:10,tocIndex:10},{value:"Voucher Style",paraId:10,tocIndex:10},{value:"direction",paraId:10,tocIndex:10},{value:"horizontal",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"vertical",paraId:10,tocIndex:10},{value:" | ",paraId:10,tocIndex:10},{value:"multipleColumn",paraId:10,tocIndex:10},{value:"No",paraId:10,tocIndex:10},{value:"horizontal",paraId:10,tocIndex:10},{value:"Arrangement of multiple coupons",paraId:10,tocIndex:10},{value:"dataSource",paraId:10,tocIndex:10},{value:"Item",paraId:11,tocIndex:10},{value:"[]",paraId:10,tocIndex:10},{value:"Yes",paraId:10,tocIndex:10},{value:"[]",paraId:10,tocIndex:10},{value:"Data Source",paraId:10,tocIndex:10},{value:"Property",paraId:12,tocIndex:11},{value:"Type",paraId:12,tocIndex:11},{value:"Default Value",paraId:12,tocIndex:11},{value:"Description",paraId:12,tocIndex:11},{value:"title",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"None",paraId:12,tocIndex:11},{value:"Title of the coupon",paraId:12,tocIndex:11},{value:"desc",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"None",paraId:12,tocIndex:11},{value:"Description of Voucher",paraId:12,tocIndex:11},{value:"money",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"None",paraId:12,tocIndex:11},{value:"Copy of the amount of the coupon",paraId:12,tocIndex:11},{value:"moneyUnit",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"'Yuan'",paraId:12,tocIndex:11},{value:"The unit copy of the voucher, for example: xx yuan, xx discount",paraId:12,tocIndex:11},{value:"threshold",paraId:12,tocIndex:11},{value:"string",paraId:12,tocIndex:11},{value:"None",paraId:12,tocIndex:11},{value:"Restricted copy of coupons",paraId:12,tocIndex:11},{value:"disabled",paraId:12,tocIndex:11},{value:"bool",paraId:12,tocIndex:11},{value:"false",paraId:12,tocIndex:11},{value:"Disable",paraId:12,tocIndex:11},{value:"actionAreaInfo",paraId:12,tocIndex:11},{value:"[ActionAreaInfo]",paraId:12,tocIndex:11},{value:"None",paraId:12,tocIndex:11},{value:"Area of action",paraId:12,tocIndex:11},{value:"Property",paraId:13,tocIndex:12},{value:"Type",paraId:13,tocIndex:12},{value:"Default Value",paraId:13,tocIndex:12},{value:"Description",paraId:13,tocIndex:12},{value:"disabled",paraId:13,tocIndex:12},{value:"bool",paraId:13,tocIndex:12},{value:"false",paraId:13,tocIndex:12},{value:"Disable",paraId:13,tocIndex:12},{value:"text",paraId:13,tocIndex:12},{value:"string",paraId:13,tocIndex:12},{value:"None",paraId:13,tocIndex:12},{value:"Button Copy",paraId:13,tocIndex:12},{value:"imageUrl",paraId:13,tocIndex:12},{value:"string",paraId:13,tocIndex:12},{value:"None",paraId:13,tocIndex:12},{value:"The picture in the completed state does not show the button when there is a picture.",paraId:13,tocIndex:12},{value:"Event Name",paraId:14,tocIndex:13},{value:"Description",paraId:14,tocIndex:13},{value:"Type",paraId:14,tocIndex:13},{value:"#if ALIPAY onBtnTap",paraId:14,tocIndex:13},{value:"Click the button to trigger this callback",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if ALIPAY onVoucherTap",paraId:14,tocIndex:13},{value:"Click the card to trigger this callback",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if WECHAT bindbtntap",paraId:14,tocIndex:13},{value:"Click the button to trigger this callback",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"#if WECHAT bindvouchertap",paraId:14,tocIndex:13},{value:"Click the card to trigger this callback",paraId:14,tocIndex:13},{value:"(item, event)=>void",paraId:14,tocIndex:13},{value:"Name",paraId:15,tocIndex:14},{value:"Description",paraId:15,tocIndex:14},{value:"voucher-action-area",paraId:15,tocIndex:14},{value:"Action area (not supported by WeChat)",paraId:15,tocIndex:14},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:16,tocIndex:16},{value:"Variable name",paraId:17,tocIndex:16},{value:"Light Mode Default",paraId:17,tocIndex:16},{value:"Dark Mode Default",paraId:17,tocIndex:16},{value:"Remarks",paraId:17,tocIndex:16},{value:"--voucher-background-image-start",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0)",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0)",paraId:17,tocIndex:16},{value:"Voucher background map start color",paraId:17,tocIndex:16},{value:"--voucher-background-image-end",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"Voucher background map end color",paraId:17,tocIndex:16},{value:"--voucher-multi-money-color",paraId:17,tocIndex:16},{value:"#ff3b30",paraId:17,tocIndex:16},{value:"#ff3b30",paraId:17,tocIndex:16},{value:"Multiple Amount Colors",paraId:17,tocIndex:16},{value:"--voucher-threshold-color",paraId:17,tocIndex:16},{value:"#666",paraId:17,tocIndex:16},{value:"#808080",paraId:17,tocIndex:16},{value:"Threshold Color",paraId:17,tocIndex:16},{value:"--voucher-action-btn-color",paraId:17,tocIndex:16},{value:"#ff3141",paraId:17,tocIndex:16},{value:"#ff4a58",paraId:17,tocIndex:16},{value:"Operation button color",paraId:17,tocIndex:16},{value:"--voucher-action-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"Operation background color",paraId:17,tocIndex:16},{value:"--voucher-action-left-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"Operation left background color",paraId:17,tocIndex:16},{value:"--voucher-action-left-threshold-bg",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"Operation Left Threshold Background Color",paraId:17,tocIndex:16},{value:"--voucher-action-right-color",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#fffffff",paraId:17,tocIndex:16},{value:"Operation right color",paraId:17,tocIndex:16},{value:"--voucher-action-right-title-color",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"#ffffff",paraId:17,tocIndex:16},{value:"Manipulation Right Title Color",paraId:17,tocIndex:16},{value:"--voucher-action-right-desc-color",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0.8)",paraId:17,tocIndex:16},{value:"rgba(255, 255, 255, 0.8)",paraId:17,tocIndex:16},{value:"Operation right description color",paraId:17,tocIndex:16},{value:"--voucher-item-right-title-color",paraId:17,tocIndex:16},{value:"#383939",paraId:17,tocIndex:16},{value:"#383939",paraId:17,tocIndex:16},{value:"Right side title color 1",paraId:17,tocIndex:16},{value:"--voucher-item-right-title-color",paraId:17,tocIndex:16},{value:"#666",paraId:17,tocIndex:16},{value:"#808080",paraId:17,tocIndex:16},{value:"Title color on right side of coupon 2",paraId:17,tocIndex:16}]}}]);
