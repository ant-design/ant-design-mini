"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[145],{71602:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(10047),I={"src-page-container-demo-pagecontainer":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,98756))})),asset:{type:"BLOCK",id:"src-page-container-demo-pagecontainer",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},40686:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(10047);const d=[{value:"\u9875\u9762\u7EA7\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u52A0\u8F7D\u72B6\u6001\u3001\u9875\u9762\u5F02\u5E38\u5904\u7406\u3001\u9876\u90E8/\u5E95\u90E8\u5B89\u5168\u8FB9\u8DDD\u7B49\u5E38\u7528\u80FD\u529B\uFF0C\u5F00\u7BB1\u5373\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u7C7B\u540D",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"\u6837\u5F0F",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"safeArea",paraId:5,tocIndex:5},{value:"\u5B89\u5168\u533A\u5185\u8FB9\u8DDD\u4F4D\u7F6E\uFF0C",paraId:5,tocIndex:5},{value:"top",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"bottom",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"both",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"both",paraId:5,tocIndex:5},{value:"loading",paraId:5,tocIndex:5},{value:"\u52A0\u8F7D\u4E2D",paraId:5,tocIndex:5},{value:"boolean | slot",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5},{value:"loadingType",paraId:5,tocIndex:5},{value:"\u52A0\u8F7D\u6837\u5F0F\u7C7B\u578B\uFF0C",paraId:5,tocIndex:5},{value:"spin",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"mini",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"spin",paraId:5,tocIndex:5},{value:"loadingSize",paraId:5,tocIndex:5},{value:"\u52A0\u8F7D\u6837\u5F0F\u5927\u5C0F\uFF0C",paraId:5,tocIndex:5},{value:"small",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"medium",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"large",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"x-large",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"medium",paraId:5,tocIndex:5},{value:"loadingColor",paraId:5,tocIndex:5},{value:"\u52A0\u8F7D\u6837\u5F0F\u989C\u8272",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"'#ccc'",paraId:5,tocIndex:5},{value:"status",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\uFF0C",paraId:5,tocIndex:5},{value:"failed",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"busy",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"disconnected",paraId:5,tocIndex:5},{value:"\u3001",paraId:5,tocIndex:5},{value:"empty",paraId:5,tocIndex:5},{value:"string | slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"image",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u81EA\u5B9A\u4E49\u56FE\u7247",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"title",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u81EA\u5B9A\u4E49\u6807\u9898",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"message",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u81EA\u5B9A\u4E49\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"actionText",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u6309\u94AE\u6587\u6848",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"secondaryActionText",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u6B21\u8981\u6309\u94AE\u6587\u6848",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"extra",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u81EA\u5B9A\u4E49\u6309\u94AE",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onActionTap",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:5,tocIndex:5},{value:"(e: any) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onSecondaryActionTap",paraId:5,tocIndex:5},{value:"\u9875\u9762\u5F02\u5E38\u72B6\u6001\u6B21\u8981\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:5,tocIndex:5},{value:"(e: any) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:6,tocIndex:7},{value:"\u53D8\u91CF\u540D",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u5907\u6CE8",paraId:7,tocIndex:7},{value:"--page-container-background-color",paraId:7,tocIndex:7},{value:"#f5f5f5",paraId:7,tocIndex:7},{value:"#121212",paraId:7,tocIndex:7},{value:"\u9875\u9762\u5BB9\u5668\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7}]}}]);
