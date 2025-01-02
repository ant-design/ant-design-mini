"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2211],{10864:function(n,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),t=a(84253),I={"src-list-demo-list":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,34271))})),asset:{type:"BLOCK",id:"src-list-demo-list",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},44952:function(n,e,a){a.r(e),a.d(e,{texts:function(){return t}});var d=a(84253);const t=[{value:"\u901A\u7528\u5217\u8868\u53EF\u4EE5\u5E72\u51C0\u9AD8\u6548\u5730\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\u7B49\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-list": "antd-mini/es/List/index"
#endif
#if WECHAT
  "ant-list": "antd-mini/List/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-list
  header="basic use"
  radius="{{true}}"
>
  <ant-list-item>1</ant-list-item>
  <ant-list-item>2</ant-list-item>
  <ant-list-item>3</ant-list-item>
</ant-list>
`,paraId:3,tocIndex:3},{value:`<ant-list header="List Item Configuration">
  <ant-list-item
    className="ant-list-item"
    disabled="{{true}}"
    image="PayCircleOutline"
    brief="Total assets"
    extra="Detail infos"
    showDivider="{{true}}"
  >
    \u603B\u8D44\u4EA7
  </ant-list-item>
  <ant-list-item
    style=""
    image="SetOutline"
    arrow="right"
    extraBrief="Detail infos"
  >
    \u8BBE\u7F6E
  </ant-list-item>
</ant-list>
`,paraId:4,tocIndex:4},{value:`<ant-list
  header="List item clickable"
  radius="{{radius}}"
>
  <ant-list-item
    image="PayCircleOutline"
#if ALIPAY
    onTap="handleTap"
#endif
    brief="Total assets"
    extra="Detail infos"
    data-info="Total assets"
  >
    \u603B\u8D44\u4EA7
  </ant-list-item>
  <ant-list-item
    image="SetOutline"
    arrow="right"
    extraBrief="Detail infos"
#if ALIPAY
    catchTap="handleTap"
#endif
    data-info="config"
  >
    \u8BBE\u7F6E
  </ant-list-item>
</ant-list>
`,paraId:5,tocIndex:5},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"className",paraId:6,tocIndex:8},{value:"\u7C7B\u540D",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"footer",paraId:6,tocIndex:8},{value:"\u5E95\u90E8\u8BF4\u660E",paraId:6,tocIndex:8},{value:"string | slot",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"header",paraId:6,tocIndex:8},{value:"\u5934\u90E8\u8BF4\u660E",paraId:6,tocIndex:8},{value:"string | slot",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"radius",paraId:6,tocIndex:8},{value:"\u662F\u5426\u5E26\u5706\u89D2",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"style",paraId:6,tocIndex:8},{value:"\u6837\u5F0F",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u7C7B\u578B",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"arrow",paraId:7,tocIndex:9},{value:"\u53F3\u4FA7\u7BAD\u5934\uFF0C\u53EF\u9009 ",paraId:7,tocIndex:9},{value:"right",paraId:7,tocIndex:9},{value:"\u3001",paraId:7,tocIndex:9},{value:"up",paraId:7,tocIndex:9},{value:"\u3001",paraId:7,tocIndex:9},{value:"down",paraId:7,tocIndex:9},{value:"\uFF0C\u4F20 true \u4E3A ",paraId:7,tocIndex:9},{value:"right",paraId:7,tocIndex:9},{value:"string | boolean",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"brief",paraId:7,tocIndex:9},{value:"\u7B2C\u4E8C\u884C\u4FE1\u606F",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"className",paraId:7,tocIndex:9},{value:"\u7C7B\u540D",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"disabled",paraId:7,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"extra",paraId:7,tocIndex:9},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"extraBrief",paraId:7,tocIndex:9},{value:"\u53F3\u4FA7\u8F85\u52A9\u4FE1\u606F",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"image",paraId:7,tocIndex:9},{value:"\u5DE6\u4FA7\u56FE\u7247",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"radius",paraId:7,tocIndex:9},{value:"\u662F\u5426\u5E26\u5706\u89D2",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"showDivider",paraId:7,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u4E0B\u5212\u7EBF",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"true",paraId:7,tocIndex:9},{value:"style",paraId:7,tocIndex:9},{value:"\u6837\u5F0F",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"title",paraId:7,tocIndex:9},{value:"\u6807\u9898\u4FE1\u606F",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"#if ALIPAY catchTap",paraId:7,tocIndex:9},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03",paraId:7,tocIndex:9},{value:"(e: Event) => void",paraId:7,tocIndex:9},{value:"#if ALIPAY onTap",paraId:7,tocIndex:9},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1\u7684\u56DE\u8C03",paraId:7,tocIndex:9},{value:"(e: Event) => void",paraId:7,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:8,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"\u5907\u6CE8",paraId:9,tocIndex:11},{value:"--list-header-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"\u5217\u8868\u5934\u90E8\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-footer-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"\u5217\u8868\u5E95\u90E8\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-background-color",paraId:9,tocIndex:11},{value:"#ffffff",paraId:9,tocIndex:11},{value:"#1a1a1a",paraId:9,tocIndex:11},{value:"\u5217\u8868\u80CC\u666F\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-content-color",paraId:9,tocIndex:11},{value:"#333333",paraId:9,tocIndex:11},{value:"#c5cad1",paraId:9,tocIndex:11},{value:"\u5217\u8868\u5185\u5BB9\u6587\u672C\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-extra-brief-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"\u5217\u8868\u989D\u5916\u7B80\u8FF0\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-item-border-color",paraId:9,tocIndex:11},{value:"#eeeeee",paraId:9,tocIndex:11},{value:"#2b2b2b",paraId:9,tocIndex:11},{value:"\u5217\u8868\u9879\u8FB9\u6846\u989C\u8272",paraId:9,tocIndex:11},{value:"--list-item-text-color",paraId:9,tocIndex:11},{value:"#cccccc",paraId:9,tocIndex:11},{value:"#474747",paraId:9,tocIndex:11},{value:"\u5217\u8868\u9879\u6587\u672C\u989C\u8272",paraId:9,tocIndex:11}]}}]);
