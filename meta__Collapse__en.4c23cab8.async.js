"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[1069],{23799:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(42267),o={"src-collapse-demo-collapse":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,97927))})),asset:{type:"BLOCK",id:"src-collapse-demo-collapse",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},66629:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(42267);const t=[{value:"A content area that can be collapsed/expanded.",paraId:0,tocIndex:0},{value:"Group and hide complex areas to keep the page tidy.",paraId:1,tocIndex:0},{value:"An accordion is a special type of folding panel that allows only a single content area to expand.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
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
  Add items
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
\u7531\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7684\u9650\u5236, Collapse In\u5FAE\u4FE1\u6682\u65F6\u4E0D\u652F\u6301 Slot
#endif
`,paraId:9,tocIndex:6},{value:"Property",paraId:10,tocIndex:8},{value:"Description",paraId:10,tocIndex:8},{value:"Type",paraId:10,tocIndex:8},{value:"Default Value",paraId:10,tocIndex:8},{value:"accordion",paraId:10,tocIndex:8},{value:"Accordion mode, only one content is expanded",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"className",paraId:10,tocIndex:8},{value:"Class Name",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"content",paraId:10,tocIndex:8},{value:"Content area slot, receiving value, index",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"current",paraId:10,tocIndex:8},{value:"Current expanded index",paraId:10,tocIndex:8},{value:"number[]",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"defaultCurrent",paraId:10,tocIndex:8},{value:"Default index for current expansion",paraId:10,tocIndex:8},{value:"number[]",paraId:10,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"items",paraId:10,tocIndex:8},{value:"Collapse Panel List",paraId:10,tocIndex:8},{value:"CollapseItem",paraId:11,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"[]",paraId:10,tocIndex:8},{value:"style",paraId:10,tocIndex:8},{value:"Style",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"title",paraId:10,tocIndex:8},{value:"Header slot, receiving value, index",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChange",paraId:10,tocIndex:8},{value:"Toggle Panel Callback",paraId:10,tocIndex:8},{value:"(current: number[], e: ",paraId:10,tocIndex:8},{value:"Event",paraId:10,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"#if WECHAT bindchange",paraId:10,tocIndex:8},{value:"Toggle Panel Callback",paraId:10,tocIndex:8},{value:"(current: number[], e: ",paraId:10,tocIndex:8},{value:"Event",paraId:10,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"Property",paraId:12,tocIndex:9},{value:"Description",paraId:12,tocIndex:9},{value:"Type",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"content",paraId:12,tocIndex:9},{value:"Content",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"disabled",paraId:12,tocIndex:9},{value:"Disable",paraId:12,tocIndex:9},{value:"boolean",paraId:12,tocIndex:9},{value:"false",paraId:12,tocIndex:9},{value:"title",paraId:12,tocIndex:9},{value:"Title",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"className",paraId:12,tocIndex:9},{value:"Class Name",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:13,tocIndex:11},{value:"Variable name",paraId:14,tocIndex:11},{value:"Default Value",paraId:14,tocIndex:11},{value:"Dark Mode Default",paraId:14,tocIndex:11},{value:"Remarks",paraId:14,tocIndex:11},{value:"--collapse-title-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"Collapse Panel Title Background Color",paraId:14,tocIndex:11},{value:"--collapse-title-color",paraId:14,tocIndex:11},{value:"#333333",paraId:14,tocIndex:11},{value:"#c5cad1",paraId:14,tocIndex:11},{value:"Collapse Panel Title Color",paraId:14,tocIndex:11},{value:"--collapse-title-icon-color",paraId:14,tocIndex:11},{value:"#cccccc",paraId:14,tocIndex:11},{value:"#474747",paraId:14,tocIndex:11},{value:"Collapse Panel Title Icon Color",paraId:14,tocIndex:11},{value:"--collapse-content-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"Collapse Panel Content Background Color",paraId:14,tocIndex:11},{value:"--collapse-border-color",paraId:14,tocIndex:11},{value:"#eeeeee",paraId:14,tocIndex:11},{value:"#2b2b2b",paraId:14,tocIndex:11},{value:"Collapse Panel Border Color",paraId:14,tocIndex:11},{value:"--collapse-node-text-color",paraId:14,tocIndex:11},{value:"#999999",paraId:14,tocIndex:11},{value:"#616161",paraId:14,tocIndex:11},{value:"Collapse Panel Node Text Color",paraId:14,tocIndex:11},{value:"--collapse-container-background-color",paraId:14,tocIndex:11},{value:"#ffffff",paraId:14,tocIndex:11},{value:"#1a1a1a",paraId:14,tocIndex:11},{value:"Folding panel container background color",paraId:14,tocIndex:11}]}}]);
