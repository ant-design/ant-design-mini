"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[543],{75519:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),t=a(72123),I={"src-collapse-demo-collapse":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,97927))})),asset:{type:"BLOCK",id:"src-collapse-demo-collapse",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},79363:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(72123);const t=[{value:"\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002",paraId:0,tocIndex:0},{value:"\u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002",paraId:1,tocIndex:0},{value:"\u624B\u98CE\u7434\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002",paraId:1,tocIndex:0},{value:"\u5728 ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-collapse": "antd-mini/es/Collapse/index"
#endif
#if WECHAT
  "ant-collapse": "antd-mini/Collapse/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-collapse
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    items: [
      {
        title: 'item1 title',
        content: 'item1 content',
      },
      {
        title: 'item2 title',
        content: 'item2 content',
      },
      {
        title: 'item3 title',
        content: 'item3 content',
      },
    ],
  },
  onChange(current) {
    console.log(current);
  },
});
`,paraId:5,tocIndex:3},{value:`<ant-collapse
  accordion="{{true}}"
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
`,paraId:6,tocIndex:4},{value:`<ant-button
  inline="{{true}}"
#if ALIPAY
  onTap="addItems"
#endif
#if WECHAT
  bindtap="addItems"
#endif
>
  \u6DFB\u52A0items
</ant-button>

<ant-collapse
  items="{{items}}"
/>
`,paraId:7,tocIndex:5},{value:`Page({
  data: {
    items: [
      {
        title: 'item1 title',
        content: 'item1 content',
      },
      {
        title: 'item2 title',
        content: 'item2 content',
      },
      {
        title: 'item3 title',
        content: 'item3 content',
      },
    ],
  },
  addItems() {
    const items = [
      ...this.data.items,
      {
        title: this.data.items.length,
        content: 'dynamic item content',
      },
    ];
    this.setData({
      items,
      current: [this.data.items.length],
    });
  },
});
`,paraId:8,tocIndex:5},{value:`#if ALIPAY
<ant-collapse items="{{items}}">
  <view
    slot="title"
    slot-scope="item"
    class="title"
  >
    <view>
      <ant-checkbox
        data-index="{{item.index}}"
        onChange="onChange"
      />
    </view>
    <view>{{item.value.title}}</view>
  </view>

  <view
    slot="content"
    slot-scope="item"
    class="content">
    {{item.value.content}}
  </view>
</ant-collapse>

#endif
#if WECHAT
\u7531\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7684\u9650\u5236, Collapse \u5728\u5FAE\u4FE1\u6682\u65F6\u4E0D\u652F\u6301 Slot
#endif
`,paraId:9,tocIndex:6},{value:"\u5C5E\u6027",paraId:10,tocIndex:8},{value:"\u8BF4\u660E",paraId:10,tocIndex:8},{value:"\u7C7B\u578B",paraId:10,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"accordion",paraId:10,tocIndex:8},{value:"\u662F\u5426\u662F\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u4EC5\u4E00\u4E2A\u5185\u5BB9\u88AB\u5C55\u5F00",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"className",paraId:10,tocIndex:8},{value:"\u7C7B\u540D",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"content",paraId:10,tocIndex:8},{value:"\u5185\u5BB9\u533A\u63D2\u69FD\uFF0C\u63A5\u6536 value\u3001index",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"current",paraId:10,tocIndex:8},{value:"\u5F53\u524D\u5C55\u5F00\u7684\u7D22\u5F15",paraId:10,tocIndex:8},{value:"number[]",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"defaultCurrent",paraId:10,tocIndex:8},{value:"\u5F53\u524D\u5C55\u5F00\u7684\u9ED8\u8BA4\u7D22\u5F15",paraId:10,tocIndex:8},{value:"number[]",paraId:10,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"items",paraId:10,tocIndex:8},{value:"\u6298\u53E0\u9762\u677F\u5217\u8868",paraId:10,tocIndex:8},{value:"CollapseItem",paraId:11,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"style",paraId:10,tocIndex:8},{value:"\u6837\u5F0F",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"title",paraId:10,tocIndex:8},{value:"\u6807\u9898\u63D2\u69FD\uFF0C\u63A5\u6536 value\u3001index",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChange",paraId:10,tocIndex:8},{value:"\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(current: number[], e: ",paraId:10,tocIndex:8},{value:"Event",paraId:10,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"#if WECHAT bindchange",paraId:10,tocIndex:8},{value:"\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(current: number[], e: ",paraId:10,tocIndex:8},{value:"Event",paraId:10,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"\u5C5E\u6027",paraId:12,tocIndex:9},{value:"\u8BF4\u660E",paraId:12,tocIndex:9},{value:"\u7C7B\u578B",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"content",paraId:12,tocIndex:9},{value:"\u5185\u5BB9",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"disabled",paraId:12,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"title",paraId:12,tocIndex:9},{value:"\u6807\u9898",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"className",paraId:12,tocIndex:9},{value:"\u7C7B\u540D",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:13,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:14,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:14,tocIndex:11},{value:"\u5907\u6CE8",paraId:14,tocIndex:11},{value:"--collapse-title-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u6807\u9898\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-title-color",paraId:14,tocIndex:11},{value:"#333333",paraId:14,tocIndex:11},{value:"#c5cad1",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u6807\u9898\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-title-icon-color",paraId:14,tocIndex:11},{value:"#cccccc",paraId:14,tocIndex:11},{value:"#474747",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u6807\u9898\u56FE\u6807\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-content-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u5185\u5BB9\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-border-color",paraId:14,tocIndex:11},{value:"#eeeeee",paraId:14,tocIndex:11},{value:"#2b2b2b",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u8FB9\u6846\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-node-text-color",paraId:14,tocIndex:11},{value:"#999999",paraId:14,tocIndex:11},{value:"#616161",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u8282\u70B9\u6587\u672C\u989C\u8272",paraId:14,tocIndex:11},{value:"--collapse-container-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"\u6298\u53E0\u9762\u677F\u5BB9\u5668\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:11}]}}]);
