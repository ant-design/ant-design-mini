"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7151],{94073:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(64073),I={"src-table-demo-table":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,48863))})),asset:{type:"BLOCK",id:"src-table-demo-table",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},80982:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(64073);const d=[{value:"\u5C55\u793A\u884C\u5217\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
`,paraId:7,tocIndex:6},{value:"\u5C5E\u6027",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:8},{value:"className",paraId:8,tocIndex:8},{value:"\u5BB9\u5668 className",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"dataSource",paraId:8,tocIndex:8},{value:"\u6570\u636E\u6E90",paraId:8,tocIndex:8},{value:"any[]",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"columns",paraId:8,tocIndex:8},{value:"\u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0",paraId:8,tocIndex:8},{value:"Column",paraId:9,tocIndex:8},{value:"[]",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"displayType",paraId:8,tocIndex:8},{value:"\u8868\u683C\u6837\u5F0F\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u6837\u5F0F\u4F1A\u6839\u636E\u914D\u7F6E\u7684\u5BBD\u5EA6\u8FDB\u884C\u5C55\u793A\uFF0C\u53EF\u9009 ",paraId:8,tocIndex:8},{value:"FULL",paraId:8,tocIndex:8},{value:"\u3001",paraId:8,tocIndex:8},{value:"DEFAULT",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"DEFAULT",paraId:8,tocIndex:8},{value:"scrollHeight",paraId:8,tocIndex:8},{value:"\u6307\u5B9A\u53EF\u6EDA\u52A8\u533A\u57DF\u9AD8\u5EA6",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:10,tocIndex:9},{value:"\u8BF4\u660E",paraId:10,tocIndex:9},{value:"\u7C7B\u578B",paraId:10,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:9},{value:"title",paraId:10,tocIndex:9},{value:"\u5217\u6807\u9898",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"dataIndex",paraId:10,tocIndex:9},{value:"\u5217\u53D6\u503C\u5B57\u6BB5",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"key",paraId:10,tocIndex:9},{value:"\u5217\u552F\u4E00\u6807\u8BC6",paraId:10,tocIndex:9},{value:"string",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"width",paraId:10,tocIndex:9},{value:"\u5217\u5BBD\u5EA6",paraId:10,tocIndex:9},{value:"number",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"fixed",paraId:10,tocIndex:9},{value:"\u662F\u5426\u56FA\u5B9A\u5217",paraId:10,tocIndex:9},{value:"boolean",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"textAlignRight",paraId:10,tocIndex:9},{value:"\u5217\u6587\u672C\u662F\u5426\u53F3\u5BF9\u9F50",paraId:10,tocIndex:9},{value:"boolean",paraId:10,tocIndex:9},{value:"-",paraId:10,tocIndex:9},{value:"\u540D\u79F0",paraId:11,tocIndex:10},{value:"\u8BF4\u660E",paraId:11,tocIndex:10},{value:"\u9ED8\u8BA4\u63D2\u69FD",paraId:11,tocIndex:10},{value:"\u6570\u636E\u6E90\u4E3A\u7A7A\u63D2\u69FD",paraId:11,tocIndex:10},{value:"item",paraId:11,tocIndex:10},{value:"\u5355\u5143\u683C\u63D2\u69FD\uFF08\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u5C5E\u6027 ",paraId:11,tocIndex:10},{value:"item",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"index",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"row",paraId:11,tocIndex:10},{value:"\u3001",paraId:11,tocIndex:10},{value:"rowIndex",paraId:11,tocIndex:10},{value:"\u3002\u5FAE\u4FE1\u4E0D\u652F\u6301\uFF09",paraId:11,tocIndex:10},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:12,tocIndex:12},{value:"\u53D8\u91CF\u540D",paraId:13,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:12},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:13,tocIndex:12},{value:"\u5907\u6CE8",paraId:13,tocIndex:12},{value:"--table-item-color",paraId:13,tocIndex:12},{value:"#333333",paraId:13,tocIndex:12},{value:"#c5cad1",paraId:13,tocIndex:12},{value:"\u8868\u9879\u989C\u8272",paraId:13,tocIndex:12},{value:"--table-item-bg",paraId:13,tocIndex:12},{value:"#ffffff",paraId:13,tocIndex:12},{value:"#1a1a1a",paraId:13,tocIndex:12},{value:"\u8868\u9879\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:12},{value:"--table-shadow-color",paraId:13,tocIndex:12},{value:"rgba(5, 5, 5, 0.06)",paraId:13,tocIndex:12},{value:"rgba(5, 5, 5, 0.06)",paraId:13,tocIndex:12},{value:"\u8868\u683C\u9634\u5F71\u989C\u8272",paraId:13,tocIndex:12},{value:"--table-empty-bg",paraId:13,tocIndex:12},{value:"#fff",paraId:13,tocIndex:12},{value:"#c5cad1",paraId:13,tocIndex:12},{value:"\u8868\u683C\u7A7A\u72B6\u6001\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:12}]}}]);
