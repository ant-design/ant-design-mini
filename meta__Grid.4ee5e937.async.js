"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9606],{56369:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),n=a(21178),I={"src-grid-demo-grid":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,7538))})),asset:{type:"BLOCK",id:"src-grid-demo-grid",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},45310:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(21178);const n=[{value:"\u5BAB\u683C\u7528\u4E8E\u4E1A\u52A1\u4E2D\u591A\u4E2A\u5B50\u529F\u80FD\u7684\u5BFC\u822A\uFF0C\u76F8\u6BD4\u4E8E\u5217\u8868\u7684\u5F62\u5F0F\uFF0C\u5177\u6709\u66F4\u9AD8\u7684\u5C4F\u6548\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-grid": "antd-mini/es/Grid/index"
#endif
#if WECHAT
  "ant-grid": "antd-mini/Grid/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-grid
  items="{{items}}"
  iconSize="{{36}}"
  columns="{{3}}"
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-grid
  items="{{items3withDesc}}"
  iconSize="{{36}}"
  columns="{{3}}" />
`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
    ],
  },
});
`,paraId:6,tocIndex:4},{value:`<ant-grid
  items="{{items}}"
  columns="{{3}}"
  gridItemLayout="horizontal"
/>
`,paraId:7,tocIndex:5},{value:`#if ALIPAY
<ant-grid
  items="{{items}}"
  columns="{{5}}">
  <view
    slot="icon"
    slot-scope="props">
    <ant-badge
      a:if="{{props.value.tag}}"
      offsetX="-10px"
      type="text"
      text="{{props.value.tag}}">
      <image
        src="{{props.value.icon}}"
        style="width: 44px; height: 44px" />
    </ant-badge>
    <image
      a:else
      src="{{props.value.icon}}"
      style="width: 44px; height: 44px" />
  </view>
  <view
    slot="title"
    slot-scope="props">
    \u7B2C{{props.index + 1}}\u9879
  </view>
  <view
    slot="description"
    slot-scope="props">
    \u63CF\u8FF0{{props.index + 1}}
  </view>
</ant-grid>

#endif
#if WECHAT
\u7531\u4E8E\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u7684\u9650\u5236, Grid \u5728\u5FAE\u4FE1\u6682\u65F6\u4E0D\u652F\u6301 Slot
#endif
`,paraId:8,tocIndex:6},{value:"\u5C5E\u6027",paraId:9,tocIndex:8},{value:"\u8BF4\u660E",paraId:9,tocIndex:8},{value:"\u7C7B\u578B",paraId:9,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:8},{value:"className",paraId:9,tocIndex:8},{value:"\u7C7B\u540D",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"columns",paraId:9,tocIndex:8},{value:"\u6BCF\u884C\u5C55\u793A\u7684\u5143\u7D20\u4E2A\u6570\uFF0C",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:" \u6A21\u5F0F\u751F\u6548",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"5",paraId:9,tocIndex:8},{value:"description",paraId:9,tocIndex:8},{value:"\u63CF\u8FF0\u63D2\u69FD\uFF0C\u63A5\u6536 value\u3001index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"gridItemLayout",paraId:9,tocIndex:8},{value:"item \u5E03\u5C40\uFF0C\u53EF\u9009 ",paraId:9,tocIndex:8},{value:"vertical",paraId:9,tocIndex:8},{value:"\uFF08\u5782\u76F4\uFF09",paraId:9,tocIndex:8},{value:"horizontal",paraId:9,tocIndex:8},{value:"\uFF08\u6C34\u5E73\uFF09",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"vertical",paraId:9,tocIndex:8},{value:"icon",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u63D2\u69FD\uFF0C\u63A5\u6536 value\u3001index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"iconSize",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u5C3A\u5BF8\uFF0C\u5355\u4F4D px",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"iconStyle",paraId:9,tocIndex:8},{value:"\u56FE\u6807\u6837\u5F0F\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:9,tocIndex:8},{value:"normal",paraId:9,tocIndex:8},{value:" ",paraId:9,tocIndex:8},{value:"circle",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"normal",paraId:9,tocIndex:8},{value:"items",paraId:9,tocIndex:8},{value:"\u5185\u5BB9\u6587\u5B57",paraId:9,tocIndex:8},{value:"GridItem",paraId:10,tocIndex:8},{value:"[]",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"mode",paraId:9,tocIndex:8},{value:"\u6837\u5F0F\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:"\uFF08\u5E73\u94FA\uFF09",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:"\uFF08\u6ED1\u52A8\uFF09",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"default",paraId:9,tocIndex:8},{value:"paginationFillColor",paraId:9,tocIndex:8},{value:"\u5206\u9875\u7B26\u80CC\u666F\u8272\uFF0C",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:" \u6A21\u5F0F\u751F\u6548",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"paginationFrontColor",paraId:9,tocIndex:8},{value:"\u5206\u9875\u7B26\u989C\u8272\uFF0C",paraId:9,tocIndex:8},{value:"scroll",paraId:9,tocIndex:8},{value:" \u6A21\u5F0F\u751F\u6548",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"showDivider",paraId:9,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A\u5206\u5272\u7EBF",paraId:9,tocIndex:8},{value:"boolean",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"style",paraId:9,tocIndex:8},{value:"\u6837\u5F0F",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"title",paraId:9,tocIndex:8},{value:"\u6807\u9898\u63D2\u69FD\uFF0C\u63A5\u6536 value\u3001index",paraId:9,tocIndex:8},{value:"slot",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onTap",paraId:9,tocIndex:8},{value:"\u70B9\u51FB\u6BCF\u4E2A\u5143\u7D20\u89E6\u53D1",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:11,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"#if ALIPAY onFirstAppear",paraId:9,tocIndex:8},{value:"\u5F53\u524D\u5143\u7D20\u9996\u6B21\u53EF\u89C1\u9762\u79EF\u8FBE\u5230 50% \u65F6\u89E6\u53D1",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:12,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"#if WECHAT bind:tap",paraId:9,tocIndex:8},{value:"\u70B9\u51FB\u6BCF\u4E2A\u5143\u7D20\u89E6\u53D1",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:13,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bind:firstappear",paraId:9,tocIndex:8},{value:"\u5F53\u524D\u5143\u7D20\u9996\u6B21\u53EF\u89C1\u9762\u79EF\u8FBE\u5230 50% \u65F6\u89E6\u53D1",paraId:9,tocIndex:8},{value:"(item: ",paraId:9,tocIndex:8},{value:"GridItem",paraId:14,tocIndex:8},{value:") => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u8BF4\u660E",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:9},{value:"description",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"icon",paraId:15,tocIndex:9},{value:"\u56FE\u6807\uFF0C\u652F\u6301\u56FE\u7247\u548C ",paraId:15,tocIndex:9},{value:"Icon",paraId:16,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"iconStyle",paraId:15,tocIndex:9},{value:"\u56FE\u6807\u6837\u5F0F\u7C7B\u578B\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E grid\uFF0C\u53EF\u9009 ",paraId:15,tocIndex:9},{value:"normal",paraId:15,tocIndex:9},{value:" ",paraId:15,tocIndex:9},{value:"circle",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"title",paraId:15,tocIndex:9},{value:"\u6807\u9898",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"-",paraId:15,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:17,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:18,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:18,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:18,tocIndex:11},{value:"\u5907\u6CE8",paraId:18,tocIndex:11},{value:"--ant-grid-title-color",paraId:18,tocIndex:11},{value:"#333333",paraId:18,tocIndex:11},{value:"#c5cad1",paraId:18,tocIndex:11},{value:"\u7F51\u683C\u6807\u9898\u989C\u8272",paraId:18,tocIndex:11},{value:"--ant-grid-description-color",paraId:18,tocIndex:11},{value:"#999999",paraId:18,tocIndex:11},{value:"#616161",paraId:18,tocIndex:11},{value:"\u7F51\u683C\u63CF\u8FF0\u989C\u8272",paraId:18,tocIndex:11},{value:"--ant-grid-border-color",paraId:18,tocIndex:11},{value:"#eeeeee",paraId:18,tocIndex:11},{value:"#2b2b2b",paraId:18,tocIndex:11},{value:"\u7F51\u683C\u8FB9\u6846\u989C\u8272",paraId:18,tocIndex:11}]}}]);
