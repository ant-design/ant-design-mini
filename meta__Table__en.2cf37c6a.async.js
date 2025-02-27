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
`,paraId:7,tocIndex:6},{value:"You can use the column configuration parameters.",paraId:8,tocIndex:7},{value:"ellipsisRow",paraId:8,tocIndex:7},{value:"Controls whether to wrap lines and how many lines are eventually displayed, beyond the ellipsis",paraId:8,tocIndex:7},{value:`<ant-table 
  dataSource="{{[{key: '0', name: '\u8FD9\u662F\u4E00\u884C\u5F88\u957F\u7684\u6570\u636E\uFF0C\u9700\u8981\u6362\u884C\u5C55\u793Ablablablabla', age: 18, sex: '\u7537', address: '\u6210\u90FD'}]}}" 
  columns="{{fullColumns}}"
/>
`,paraId:9,tocIndex:7},{value:"Property",paraId:10,tocIndex:9},{value:"Description",paraId:10,tocIndex:9},{value:"Type",paraId:10,tocIndex:9},{value:"Default Value",paraId:10,tocIndex:9},{value:"className",paraId:10,tocIndex:9},{value:"Container className",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"dataSource",paraId:10,tocIndex:9},{value:"Data Source",paraId:10,tocIndex:9},{value:"any[]",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"columns",paraId:10,tocIndex:9},{value:"Configuration description of table columns",paraId:10,tocIndex:9},{value:"Column",paraId:11,tocIndex:9},{value:"[]",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"displayType",paraId:10,tocIndex:9},{value:"Table style type. The default style is displayed based on the configured width. Optional ",paraId:10,tocIndex:9},{value:"FULL",paraId:10,tocIndex:9},{value:"\u3001",paraId:10,tocIndex:9},{value:"DEFAULT",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"DEFAULT",paraId:10,tocIndex:9},{value:"scrollHeight",paraId:10,tocIndex:9},{value:"Specify scrollable area height",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"Property",paraId:12,tocIndex:10},{value:"Description",paraId:12,tocIndex:10},{value:"Type",paraId:12,tocIndex:10},{value:"Default Value",paraId:12,tocIndex:10},{value:"title",paraId:12,tocIndex:10},{value:"Column Header",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"dataIndex",paraId:12,tocIndex:10},{value:"Column Value Field",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"key",paraId:12,tocIndex:10},{value:"Column Unique Identifier",paraId:12,tocIndex:10},{value:"string",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"width",paraId:12,tocIndex:10},{value:"Column Width",paraId:12,tocIndex:10},{value:"number",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"fixed",paraId:12,tocIndex:10},{value:"Fixed column",paraId:12,tocIndex:10},{value:"boolean",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"textAlignRight",paraId:12,tocIndex:10},{value:"Whether column text is right-justified",paraId:12,tocIndex:10},{value:"boolean",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"ellipsisRow",paraId:12,tocIndex:10},{value:"The maximum number of rows displayed in a cell, which exceeds omission.",paraId:12,tocIndex:10},{value:"number",paraId:12,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"Name",paraId:13,tocIndex:11},{value:"Description",paraId:13,tocIndex:11},{value:"Default Slot",paraId:13,tocIndex:11},{value:"Data source is empty slot",paraId:13,tocIndex:11},{value:"item",paraId:13,tocIndex:11},{value:"Cell Slot (Scope Slot, Exposed Properties ",paraId:13,tocIndex:11},{value:"item",paraId:13,tocIndex:11},{value:"\u3001",paraId:13,tocIndex:11},{value:"index",paraId:13,tocIndex:11},{value:"\u3001",paraId:13,tocIndex:11},{value:"row",paraId:13,tocIndex:11},{value:"\u3001",paraId:13,tocIndex:11},{value:"rowIndex",paraId:13,tocIndex:11},{value:". WeChat is not supported)",paraId:13,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:14,tocIndex:13},{value:"Variable name",paraId:15,tocIndex:13},{value:"Default Value",paraId:15,tocIndex:13},{value:"Dark Mode Default",paraId:15,tocIndex:13},{value:"Remarks",paraId:15,tocIndex:13},{value:"--table-item-color",paraId:15,tocIndex:13},{value:"#333333",paraId:15,tocIndex:13},{value:"#c5cad1",paraId:15,tocIndex:13},{value:"Table Item Color",paraId:15,tocIndex:13},{value:"--table-item-bg",paraId:15,tocIndex:13},{value:"#ffffff",paraId:15,tocIndex:13},{value:"#1a1a1a",paraId:15,tocIndex:13},{value:"Table Item Background Color",paraId:15,tocIndex:13},{value:"--table-shadow-color",paraId:15,tocIndex:13},{value:"rgba(5, 5, 5, 0.06)",paraId:15,tocIndex:13},{value:"rgba(5, 5, 5, 0.06)",paraId:15,tocIndex:13},{value:"Table Shadow Color",paraId:15,tocIndex:13},{value:"--table-empty-bg",paraId:15,tocIndex:13},{value:"#fff",paraId:15,tocIndex:13},{value:"#c5cad1",paraId:15,tocIndex:13},{value:"Table empty state background color",paraId:15,tocIndex:13}]}}]);
