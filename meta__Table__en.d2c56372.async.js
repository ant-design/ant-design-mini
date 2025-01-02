"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[350],{95907:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(48699),o={"src-table-demo-table":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,48863))})),asset:{type:"BLOCK",id:"src-table-demo-table",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},46765:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(48699);const d=[{value:"Displays row and column data.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-table": "antd-mini/es/Table/index"
#endif
#if WECHAT
  "ant-table": "antd-mini/Table/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-table
  className='ant-table'
  dataSource="{{dataSource}}"
  columns="{{columns}}"
/>
`,paraId:3,tocIndex:3},{value:`const nameArr = [
  '\u5C0F\u660E',
  '\u5C0F\u4F55',
  '\u5C0F\u82B1',
  '\u5C0F\u7F8E',
  '\u5C0F\u767D',
  '\u5C0F\u9ED1',
  '\u5C0F\u5E05',
  '\u963F\u4F1F',
];
const sexArr = ['\u7537', '\u5973'];
const ageArr = ['40', '18', '32', '20', '33', '48', '28', '38'];
const favoriteArr = ['\u7FBD\u6BDB\u7403', '\u4E52\u4E53\u7403', '\u7BEE\u7403', '\u684C\u7403'];
const addressArr = ['\u5317\u4EAC', '\u4E0A\u6D77', '\u6D59\u6C5F', '\u5E7F\u5DDE'];

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

Page({
  data: {
    dataSource: Array.from({ length: 7 }).map((v, i) => ({
      key: i,
      name: nameArr[i],
      sex: sexArr[getRandomNumber(sexArr.length)],
      age: ageArr[i],
      extra: '\u6D4B\u8BD5',
      favorite: favoriteArr[getRandomNumber(favoriteArr.length)],
      address: addressArr[getRandomNumber(addressArr.length)],
    })),
    columns: [
      {
        title: '\u59D3\u540D',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        fixed: true,
      },
      {
        title: '\u5E74\u9F84',
        dataIndex: 'age',
        key: 'age',
        textAlignRight: true,
        width: 150,
        sorter: true,
      },
      {
        title: '\u6027\u522B',
        dataIndex: 'sex',
        key: 'sex',
        width: 150,
      },
      {
        title: '\u7231\u597D',
        dataIndex: 'favorite',
        key: 'favorite',
        width: 250,
      },
      {
        title: '\u5730\u5740',
        dataIndex: 'address',
        key: 'address',
        width: 250,
      },
    ],
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-table
  dataSource="{{dataSource}}"
  columns="{{columns}}"
  scrollHeight="300rpx"
/>
`,paraId:5,tocIndex:4},{value:`<ant-table
  dataSource="{{dataSource}}"
  columns="{{fullColumns}}"
  displayType="FULL"
/>
`,paraId:6,tocIndex:5},{value:`<ant-table
  dataSource="{{[]}}"
  columns="{{columns}}"
>
  <image src="https://mdn.alipayobjects.com/huamei_9iifqq/afts/img/A*AWeXQYuIODwAAAAAAAAAAAAADjWYAQ/original" />
</ant-table>
`,paraId:7,tocIndex:6},{value:"Property",paraId:8,tocIndex:8},{value:"Description",paraId:8,tocIndex:8},{value:"Type",paraId:8,tocIndex:8},{value:"Default Value",paraId:8,tocIndex:8},{value:"className",paraId:8,tocIndex:8},{value:"Container className",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"dataSource",paraId:8,tocIndex:8},{value:"Data Source",paraId:8,tocIndex:8},{value:"any[]",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"columns",paraId:8,tocIndex:8},{value:"Configuration description of table columns",paraId:8,tocIndex:8},{value:"Column",paraId:9,tocIndex:8},{value:"[]",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"displayType",paraId:8,tocIndex:8},{value:"Table style type. The default style is displayed based on the configured width. Optional ",paraId:8,tocIndex:8},{value:"FULL",paraId:8,tocIndex:8},{value:"\u3001",paraId:8,tocIndex:8},{value:"DEFAULT",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"DEFAULT",paraId:8,tocIndex:8},{value:"scrollHeight",paraId:8,tocIndex:8},{value:"Specify scrollable area height",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"Property",paraId:10,tocIndex:9},{value:"Description",paraId:10,tocIndex:9},{value:"Type",paraId:10,tocIndex:9},{value:"Default Value",paraId:10,tocIndex:9},{value:"title",paraId:10,tocIndex:9},{value:"Column Header",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"dataIndex",paraId:10,tocIndex:9},{value:"Column Value Field",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"key",paraId:10,tocIndex:9},{value:"Column Unique Identifier",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"width",paraId:10,tocIndex:9},{value:"Column Width",paraId:10,tocIndex:9},{value:"number",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"fixed",paraId:10,tocIndex:9},{value:"Fixed column",paraId:10,tocIndex:9},{value:"boolean",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"textAlignRight",paraId:10,tocIndex:9},{value:"Whether column text is right-justified",paraId:10,tocIndex:9},{value:"boolean",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"Name",paraId:11,tocIndex:10},{value:"Description",paraId:11,tocIndex:10},{value:"Default Slot",paraId:11,tocIndex:10},{value:"Data source is empty slot",paraId:11,tocIndex:10},{value:"item",paraId:11,tocIndex:10},{value:"Cell Slot (Scope Slot, Exposed Properties ",paraId:11,tocIndex:10},{value:"item",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"index",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"row",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"rowIndex",paraId:11,tocIndex:10},{value:". WeChat is not supported)",paraId:11,tocIndex:10},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:12,tocIndex:12},{value:"Variable name",paraId:13,tocIndex:12},{value:"Default Value",paraId:13,tocIndex:12},{value:"Dark Mode Default",paraId:13,tocIndex:12},{value:"Remarks",paraId:13,tocIndex:12},{value:"--table-item-color",paraId:13,tocIndex:12},{value:"#333333",paraId:13,tocIndex:12},{value:"#c5cad1",paraId:13,tocIndex:12},{value:"Table Item Color",paraId:13,tocIndex:12},{value:"--table-item-bg",paraId:13,tocIndex:12},{value:"#ffffff",paraId:13,tocIndex:12},{value:"#1a1a1a",paraId:13,tocIndex:12},{value:"Table Item Background Color",paraId:13,tocIndex:12},{value:"--table-shadow-color",paraId:13,tocIndex:12},{value:"rgba(5, 5, 5, 0.06)",paraId:13,tocIndex:12},{value:"rgba(5, 5, 5, 0.06)",paraId:13,tocIndex:12},{value:"Table Shadow Color",paraId:13,tocIndex:12},{value:"--table-empty-bg",paraId:13,tocIndex:12},{value:"#fff",paraId:13,tocIndex:12},{value:"#c5cad1",paraId:13,tocIndex:12},{value:"Table empty state background color",paraId:13,tocIndex:12}]}}]);
