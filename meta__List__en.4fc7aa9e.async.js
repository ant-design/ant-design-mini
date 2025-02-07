"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3674],{94848:function(d,e,a){a.r(e),a.d(e,{demos:function(){return o}});var t=a(67294),n=a(54079),o={"src-list-demo-list":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,34271))})),asset:{type:"BLOCK",id:"src-list-demo-list",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},28665:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(54079);const n=[{value:"Generic lists can be clean and efficient to carry text, lists, pictures, paragraphs and other elements.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
    Total assets
  </ant-list-item>
  <ant-list-item
    style=""
    image="SetOutline"
    arrow="right"
    extraBrief="Detail infos"
  >
    Setup
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
    Total assets
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
    Setup
  </ant-list-item>
</ant-list>
`,paraId:5,tocIndex:5},{value:"Property",paraId:6,tocIndex:8},{value:"Description",paraId:6,tocIndex:8},{value:"Type",paraId:6,tocIndex:8},{value:"Default Value",paraId:6,tocIndex:8},{value:"className",paraId:6,tocIndex:8},{value:"Class Name",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"footer",paraId:6,tocIndex:8},{value:"Bottom Description",paraId:6,tocIndex:8},{value:"string | slot",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"header",paraId:6,tocIndex:8},{value:"Head Description",paraId:6,tocIndex:8},{value:"string | slot",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"radius",paraId:6,tocIndex:8},{value:"Whether with rounded corners",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"style",paraId:6,tocIndex:8},{value:"Style",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"Property",paraId:7,tocIndex:9},{value:"Description",paraId:7,tocIndex:9},{value:"Type",paraId:7,tocIndex:9},{value:"Default Value",paraId:7,tocIndex:9},{value:"arrow",paraId:7,tocIndex:9},{value:"right arrow, optional ",paraId:7,tocIndex:9},{value:"right",paraId:7,tocIndex:9},{value:"\u3001",paraId:7,tocIndex:9},{value:"up",paraId:7,tocIndex:9},{value:"\u3001",paraId:7,tocIndex:9},{value:"down",paraId:7,tocIndex:9},{value:", pass true ",paraId:7,tocIndex:9},{value:"right",paraId:7,tocIndex:9},{value:"string | boolean",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"brief",paraId:7,tocIndex:9},{value:"Second line of information",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"className",paraId:7,tocIndex:9},{value:"Class Name",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"disabled",paraId:7,tocIndex:9},{value:"Disable",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"extra",paraId:7,tocIndex:9},{value:"Extra right",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"extraBrief",paraId:7,tocIndex:9},{value:"Auxiliary information on the right side",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"image",paraId:7,tocIndex:9},{value:"Picture on the left",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"radius",paraId:7,tocIndex:9},{value:"Whether with rounded corners",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"showDivider",paraId:7,tocIndex:9},{value:"Show underline or not",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"true",paraId:7,tocIndex:9},{value:"style",paraId:7,tocIndex:9},{value:"Style",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"title",paraId:7,tocIndex:9},{value:"Header Information",paraId:7,tocIndex:9},{value:"string | slot",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"#if ALIPAY catchTap",paraId:7,tocIndex:9},{value:"Callback triggered when clicked",paraId:7,tocIndex:9},{value:"(e: Event) => void",paraId:7,tocIndex:9},{value:"#if ALIPAY onTap",paraId:7,tocIndex:9},{value:"Callback triggered when clicked",paraId:7,tocIndex:9},{value:"(e: Event) => void",paraId:7,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:8,tocIndex:11},{value:"Variable name",paraId:9,tocIndex:11},{value:"Default Value",paraId:9,tocIndex:11},{value:"Dark Mode Default",paraId:9,tocIndex:11},{value:"Remarks",paraId:9,tocIndex:11},{value:"--list-header-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"List head color",paraId:9,tocIndex:11},{value:"--list-footer-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"List bottom color",paraId:9,tocIndex:11},{value:"--list-background-color",paraId:9,tocIndex:11},{value:"#ffffff",paraId:9,tocIndex:11},{value:"#1a1a1a",paraId:9,tocIndex:11},{value:"List background color",paraId:9,tocIndex:11},{value:"--list-content-color",paraId:9,tocIndex:11},{value:"#333333",paraId:9,tocIndex:11},{value:"#c5cad1",paraId:9,tocIndex:11},{value:"List Content Text Color",paraId:9,tocIndex:11},{value:"--list-extra-brief-color",paraId:9,tocIndex:11},{value:"#999999",paraId:9,tocIndex:11},{value:"#616161",paraId:9,tocIndex:11},{value:"List Extra Brief Color",paraId:9,tocIndex:11},{value:"--list-item-border-color",paraId:9,tocIndex:11},{value:"#eeeeee",paraId:9,tocIndex:11},{value:"#2b2b2b",paraId:9,tocIndex:11},{value:"List Item Border Color",paraId:9,tocIndex:11},{value:"--list-item-text-color",paraId:9,tocIndex:11},{value:"#cccccc",paraId:9,tocIndex:11},{value:"#474747",paraId:9,tocIndex:11},{value:"List Item Text Color",paraId:9,tocIndex:11}]}}]);
