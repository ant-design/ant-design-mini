"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2400],{965:function(d,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),t=a(88554),o={"src-page-container-demo-pagecontainer":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,98756))})),asset:{type:"BLOCK",id:"src-page-container-demo-pagecontainer",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},39427:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(88554);const t=[{value:"The page-level container component provides common capabilities such as loading status, page exception handling, top/bottom safe margins, and so on, out of the box.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
  "ant-page": "antd-mini/es/PageContainer/index"
}
`,paraId:2,tocIndex:1},{value:`<ant-page
  loading="{{loading}}"
  status="{{status}}"
  title="{{title}}"
  message="{{message}}"
  image="{{image}}"
  safeArea="{{safeArea}}"
  loadingColor="#ccc"
  loadingSize="medium"
  loadingType="spin"
  actionText="refresh"
  secondaryActionText="internet error"
  onActionTap="handleRefresh"
  onSecondaryActionTap="handleSwitchToDisconnected"
>
  <view class="content">
   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </view>
</ant-page>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    loading: true,
    status: 'failed',
    safeArea: 'both',
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        loading: false,
      });
    }, 1000);
  },
  handleRefresh() {
    my.reLaunch({
      url: 'index',
      fail(e) {
        console.log(e);
      },
    });
  },
  handleSwitchToDisconnected() {
    this.setData({
      status: 'disconnected',
      title: undefined,
      message: undefined,
      image: '',
    });
  },
});
`,paraId:4,tocIndex:3},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"Default Value",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"Class Name",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"Style",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"safeArea",paraId:5,tocIndex:5},{value:"Location of margin inside the safety zone,",paraId:5,tocIndex:5},{value:"top",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"bottom",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"both",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"both",paraId:5,tocIndex:5},{value:"loading",paraId:5,tocIndex:5},{value:"Loading",paraId:5,tocIndex:5},{value:"boolean | slot",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"loadingType",paraId:5,tocIndex:5},{value:"Load style type,",paraId:5,tocIndex:5},{value:"spin",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"mini",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"spin",paraId:5,tocIndex:5},{value:"loadingSize",paraId:5,tocIndex:5},{value:"Load Style Size,",paraId:5,tocIndex:5},{value:"small",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"medium",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"large",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"x-large",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"medium",paraId:5,tocIndex:5},{value:"loadingColor",paraId:5,tocIndex:5},{value:"Load Style Color",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"'#ccc'",paraId:5,tocIndex:5},{value:"status",paraId:5,tocIndex:5},{value:"Page exception status,",paraId:5,tocIndex:5},{value:"failed",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"busy",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"disconnected",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"empty",paraId:5,tocIndex:5},{value:"string | slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"image",paraId:5,tocIndex:5},{value:"Page Exception State Custom Image",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"title",paraId:5,tocIndex:5},{value:"Page Exception Status Custom Title",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"message",paraId:5,tocIndex:5},{value:"Page Exception Status Custom Description",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"actionText",paraId:5,tocIndex:5},{value:"Page Exception Status Button Copy",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"secondaryActionText",paraId:5,tocIndex:5},{value:"Page Exception Secondary Button Copy",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"extra",paraId:5,tocIndex:5},{value:"Page Exception Custom Button",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onActionTap",paraId:5,tocIndex:5},{value:"Page abnormal state button click event",paraId:5,tocIndex:5},{value:"(e: any) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onSecondaryActionTap",paraId:5,tocIndex:5},{value:"Page Exception Status Secondary Button Click Event",paraId:5,tocIndex:5},{value:"(e: any) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:6,tocIndex:7},{value:"Variable name",paraId:7,tocIndex:7},{value:"Default Value",paraId:7,tocIndex:7},{value:"Dark Mode Default",paraId:7,tocIndex:7},{value:"Remarks",paraId:7,tocIndex:7},{value:"--page-container-background-color",paraId:7,tocIndex:7},{value:"#f5f5f5",paraId:7,tocIndex:7},{value:"#121212",paraId:7,tocIndex:7},{value:"Page Container Background Color",paraId:7,tocIndex:7}]}}]);
