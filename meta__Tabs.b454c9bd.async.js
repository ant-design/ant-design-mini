"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[8541],{15521:function(d,n,a){a.r(n),a.d(n,{demos:function(){return I}});var e=a(67294),t=a(81198),I={"src-tabs-demo-tabselevator":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,84526))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabselevator",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-tabs-demo-tabsverticalelevator":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,39501))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabsverticalelevator",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-tabs-demo-tabs":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,50544))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabs",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},99974:function(d,n,a){a.r(n),a.d(n,{texts:function(){return t}});var e=a(81198);const t=[{value:"\u5185\u5BB9\u7EC4\u4E4B\u95F4\u8FDB\u884C\u5BFC\u822A\u5207\u6362\u3002",paraId:0,tocIndex:0},{value:"\u5185\u5BB9\u7EC4\u4E4B\u95F4\u8FDB\u884C\u5BFC\u822A\u5207\u6362\u3002",paraId:1,tocIndex:0},{value:"\u5F53\u524D\u5185\u5BB9\u9700\u8981\u5206\u6210\u540C\u5C42\u7EA7\u7ED3\u6784\u7684\u7EC4\uFF0C\u8FDB\u884C\u5185\u5BB9\u5207\u6362\u5C55\u793A\uFF0C\u7528\u5728\u8868\u5355\u6216\u8005\u6807\u51C6\u5217\u8868\u754C\u9762\u7684\u9876\u90E8\u3002",paraId:1,tocIndex:0},{value:"\u5728 ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-tabs": "antd-mini/es/Tabs/index"
#endif
#if WECHAT
  "ant-tabs": "antd-mini/Tabs/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<tabs items="{{items}}" />
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    current: 0,
    items: [
      {
        title: 'fruits',
        subTitle: 'desc',
        content: 'watermelon',
      },
      {
        title: 'vegetables',
        subTitle: 'desc',
        badge: true,
        content: 'tomato',
      },
      {
        title: 'animals',
        subTitle: 'desc',
        content: 'monkey',
      },
    ],
  },
});
`,paraId:5,tocIndex:3},{value:`<tabs items="{{items}}">
  <view class="content" slot-scope="item">
    {{item.value.content}}
  </view>
</tabs>
`,paraId:6,tocIndex:4},{value:`<tabs type="capsule" items="{{items}}" defaultCurrent="{{1}}"></tabs>
`,paraId:7,tocIndex:5},{value:`<tabs type="mixin" items="{{items}}"></tabs>
`,paraId:8,tocIndex:6},{value:`<tabs items="{{items}}">
 <view
    slot="title"
    slot-scope="item">
    <view a:if="{{item.value.badge}}">
      <badge>{{item.value.title}}</badge>
    </view>
    <view a:else>{{item.value.title}}</view>
  </view>
</tabs>
`,paraId:9,tocIndex:7},{value:`<tabs items="{{items}}" />
`,paraId:10,tocIndex:8},{value:`Page({
  data: {
    current: 0,
    items: [
      {
        title: 'fruits',
        subTitle: 'desc',
        content: 'watermelon',
      },
      {
        title: 'vegetables',
        subTitle: 'desc',
        disabled: true,
        content: 'tomato',
      },
      {
        title: 'animals',
        subTitle: 'desc',
        content: 'monkey',
      },
    ],
  },
});
`,paraId:11,tocIndex:8},{value:`<tabs items="{{items}}">
  <view slot="plus">
    <icon type="AddOutline" onTap="onPlus" />
  </view>
</tabs>
`,paraId:12,tocIndex:9},{value:`<tabs
  items="{{items}}"
  current="{{current}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
`,paraId:13,tocIndex:10},{value:`<tabs items="{{items}}" scrollMode="center" />
`,paraId:14,tocIndex:11},{value:`<ant-tabs
  items="{{items}}"
  current="{{current}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
    <swiper
      current="{{current}}"
      autoplay="{{false}}"
      vertical="{{false}}"
      circular="{{false}}"
#if ALIPAY
      onChange="onSwipeChange"
#endif
#if WECHAT
      bindchange="onSwipeChange"
#endif
    >
      <block a:for="{{items}}" a:for-index="index" a:for-item="item" a:key="{{index}}">
        <swiper-item>
          <view class="content">{{item.content}}</view>
        </swiper-item>
      </block>
    </swiper>
</ant-tabs>
`,paraId:15,tocIndex:12},{value:"\u6EDA\u52A8\u4F1A\u5BF9\u5E94\u5230 tab\u3002",paraId:16,tocIndex:13},{value:"\u70B9\u51FB tab \u53EF\u6EDA\u52A8\u5230\u5BF9\u5E94 tab title\u3002",paraId:16,tocIndex:13},{value:"onChange \u53EA\u4F1A\u5728 tab \u5207\u6362\u89E6\u53D1\uFF0C\u793A\u4F8B\u91CC\u81EA\u5B9A\u4E49 title onTap \u53EF\u6EDA\u52A8 current tab\u3002",paraId:16,tocIndex:13},{value:"\u6ED1\u52A8\u5230\u6700\u9876\u90E8\u4F1A\u5438\u9876\u3002",paraId:17,tocIndex:14},{value:"\u5207\u6362 tab content \u4F1A\u6EDA\u52A8\u5230\u6700\u9876\u90E8\u3002",paraId:17,tocIndex:14},{value:` <tabs items="{{items}}" current="{{current}}" onChange="onChange" className="sticky-tabs" />
`,paraId:18,tocIndex:14},{value:`.sticky-tabs {
  position: sticky;
  top: -1px;
  z-index: 999;
}
`,paraId:19,tocIndex:14},{value:` <tabs
    items="{{items}}"
    current="{{current}}"
    onChange="onChange"
    className="tabs"
    direction="vertical"
  >
    <scroll-view
      scroll-top="{{scrollTop}}"
      scroll-y="{{true}}"
      onScroll="onScroll"
      scroll-with-animation="{{true}}"
      scroll-animation-duration="{{300}}"
      class="content"
    >
      {{items[current].content}}
    </scroll-view>
  </tabs>
`,paraId:20,tocIndex:15},{value:"\u5C5E\u6027",paraId:21,tocIndex:18},{value:"\u8BF4\u660E",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:21,tocIndex:18},{value:"className",paraId:21,tocIndex:18},{value:"\u7C7B\u540D",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"current",paraId:21,tocIndex:18},{value:"\u9009\u4E2D\u7D22\u5F15",paraId:21,tocIndex:18},{value:"number",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"defaultCurrent",paraId:21,tocIndex:18},{value:"\u9009\u4E2D\u7D22\u5F15\u521D\u59CB\u503C",paraId:21,tocIndex:18},{value:"number",paraId:21,tocIndex:18},{value:"0",paraId:21,tocIndex:18},{value:"direction",paraId:21,tocIndex:18},{value:"tabs \u65B9\u5411\uFF0C",paraId:21,tocIndex:18},{value:"horizontal",paraId:21,tocIndex:18},{value:"(\u6C34\u5E73) ",paraId:21,tocIndex:18},{value:"vertical",paraId:21,tocIndex:18},{value:"(\u5782\u76F4)",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"horizontal",paraId:21,tocIndex:18},{value:"items",paraId:21,tocIndex:18},{value:"\u9009\u9879\uFF0C\u6570\u91CF\u5FC5\u987B\u5927\u4E8E 0",paraId:21,tocIndex:18},{value:"Item[]",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"plus",paraId:21,tocIndex:18},{value:"\u53F3\u4E0A\u89D2\u64CD\u4F5C\u6309\u94AE\u63D2\u69FD\uFF1B",paraId:21,tocIndex:18},{value:" ",paraId:21,tocIndex:18},{value:"slot-scope",paraId:21,tocIndex:18},{value:" \u5305\u62EC ",paraId:21,tocIndex:18},{value:"value",paraId:21,tocIndex:18},{value:"(\u5BF9\u5E94 ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:") ",paraId:21,tocIndex:18},{value:"index",paraId:21,tocIndex:18},{value:"(\u5BF9\u5E94 ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:" \u7684\u7D22\u5F15)",paraId:21,tocIndex:18},{value:"slot",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"scrollMode",paraId:21,tocIndex:18},{value:"\u6EDA\u52A8\u65B9\u5F0F\uFF0C\u53EF\u9009 'edge', 'center'",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"edge",paraId:21,tocIndex:18},{value:"style",paraId:21,tocIndex:18},{value:"\u6837\u5F0F",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabsBarClassName",paraId:21,tocIndex:18},{value:"tabs bar \u7C7B\u540D",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabClassName",paraId:21,tocIndex:18},{value:"tab \u7C7B\u540D",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabActiveClassName",paraId:21,tocIndex:18},{value:"tab active \u7C7B\u540D",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"title",paraId:21,tocIndex:18},{value:"\u81EA\u5B9A\u4E49 ",paraId:21,tocIndex:18},{value:"Items",paraId:21,tocIndex:18},{value:" \u6807\u9898\uFF1B",paraId:21,tocIndex:18},{value:" ",paraId:21,tocIndex:18},{value:"slot-scope",paraId:21,tocIndex:18},{value:" \u5305\u62EC ",paraId:21,tocIndex:18},{value:"value",paraId:21,tocIndex:18},{value:"(\u5BF9\u5E94 ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:") ",paraId:21,tocIndex:18},{value:"index",paraId:21,tocIndex:18},{value:"(\u5BF9\u5E94 ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:" \u7684\u7D22\u5F15)",paraId:21,tocIndex:18},{value:"slot",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"type",paraId:21,tocIndex:18},{value:"\u7C7B\u578B\uFF0C",paraId:21,tocIndex:18},{value:"basic",paraId:21,tocIndex:18},{value:"(\u57FA\u7840)\uFF0C",paraId:21,tocIndex:18},{value:"capsule",paraId:21,tocIndex:18},{value:"(\u80F6\u56CA)\uFF0C",paraId:21,tocIndex:18},{value:"mixin",paraId:21,tocIndex:18},{value:"(\u6DF7\u5408)",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"basic",paraId:21,tocIndex:18},{value:"#if ALIPAY onChange",paraId:21,tocIndex:18},{value:"\u9762\u677F\u5207\u6362\u65F6\u5019\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:21,tocIndex:18},{value:"(index: number, e: ",paraId:21,tocIndex:18},{value:"Event",paraId:21,tocIndex:18},{value:") => void",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"#if WECHAT bindchange",paraId:21,tocIndex:18},{value:"\u9762\u677F\u5207\u6362\u65F6\u5019\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:21,tocIndex:18},{value:"(index: number, e: ",paraId:21,tocIndex:18},{value:"Event",paraId:21,tocIndex:18},{value:") => void",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"\u5C5E\u6027",paraId:22,tocIndex:19},{value:"\u8BF4\u660E",paraId:22,tocIndex:19},{value:"\u7C7B\u578B",paraId:22,tocIndex:19},{value:"\u9ED8\u8BA4\u503C",paraId:22,tocIndex:19},{value:"title",paraId:22,tocIndex:19},{value:"\u6807\u9898",paraId:22,tocIndex:19},{value:"string",paraId:22,tocIndex:19},{value:"-",paraId:22,tocIndex:19},{value:"\u5728 Item \u91CC\u9664\u4E86\u53EF\u4EE5\u6709 ",paraId:23,tocIndex:19},{value:"title",paraId:23,tocIndex:19},{value:"\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982 ",paraId:23,tocIndex:19},{value:"content",paraId:23,tocIndex:19},{value:", ",paraId:23,tocIndex:19},{value:"badge",paraId:23,tocIndex:19},{value:" \u7B49\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4F7F\u7528 ",paraId:23,tocIndex:19},{value:"slot-scope",paraId:23,tocIndex:19},{value:" \u8BBF\u95EE\uFF1A",paraId:23,tocIndex:19},{value:`Page({
  data: {
    items: [
      {
        title: 'tab 1',
        content: 'tab 1 content',
      },
      {
        title: 'tab 2',
        content: 'tab 2 content',
      },
      {
        title: 'tab 3',
        content: 'tab 3 content',
      },
    ],
  },
});
`,paraId:24,tocIndex:19},{value:`<tabs items="{{items}}">
  <view slot="title" slot-scope="tab">
    {{tab.index}}\uFF1A{{tab.value.title}}\uFF0C{{tab.value.content}}
  </view>
</tabs>
`,paraId:25,tocIndex:19},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:26,tocIndex:21},{value:"\u53D8\u91CF\u540D",paraId:27,tocIndex:21},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:27,tocIndex:21},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:27,tocIndex:21},{value:"\u5907\u6CE8",paraId:27,tocIndex:21},{value:"--tabs-basic-color",paraId:27,tocIndex:21},{value:"#333333",paraId:27,tocIndex:21},{value:"#c5cad1",paraId:27,tocIndex:21},{value:"Tabs \u57FA\u672C\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-weaken-color",paraId:27,tocIndex:21},{value:"#999999",paraId:27,tocIndex:21},{value:"#616161",paraId:27,tocIndex:21},{value:"Tabs \u5F31\u5316\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-inverse-color",paraId:27,tocIndex:21},{value:"#ffffff",paraId:27,tocIndex:21},{value:"#1a1a1a",paraId:27,tocIndex:21},{value:"Tabs \u53CD\u8F6C\u8272",paraId:27,tocIndex:21},{value:"--tabs-active-color",paraId:27,tocIndex:21},{value:"#1677ff",paraId:27,tocIndex:21},{value:"#3086ff",paraId:27,tocIndex:21},{value:"Tabs \u6FC0\u6D3B\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-active-decorate-color",paraId:27,tocIndex:21},{value:"#1677ff",paraId:27,tocIndex:21},{value:"#3086ff",paraId:27,tocIndex:21},{value:"Tabs \u6FC0\u6D3B\u88C5\u9970\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-underline-border-color",paraId:27,tocIndex:21},{value:"#eeeeee",paraId:27,tocIndex:21},{value:"#2b2b2b",paraId:27,tocIndex:21},{value:"Tabs \u4E0B\u5212\u7EBF\u8FB9\u6846\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-plus-color",paraId:27,tocIndex:21},{value:"#000000",paraId:27,tocIndex:21},{value:"#000000",paraId:27,tocIndex:21},{value:"Tabs \u52A0\u53F7\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-capsule-title-bg",paraId:27,tocIndex:21},{value:"#f5f5f5",paraId:27,tocIndex:21},{value:"#121212",paraId:27,tocIndex:21},{value:"Tabs \u80F6\u56CA\u6807\u9898\u80CC\u666F\u8272",paraId:27,tocIndex:21},{value:"--tabs-subtitle-color",paraId:27,tocIndex:21},{value:"#ffffff",paraId:27,tocIndex:21},{value:"#1a1a1a",paraId:27,tocIndex:21},{value:"Tabs \u526F\u6807\u9898\u989C\u8272",paraId:27,tocIndex:21},{value:"--tabs-count-color",paraId:27,tocIndex:21},{value:"#cccccc",paraId:27,tocIndex:21},{value:"#474747",paraId:27,tocIndex:21},{value:"Tabs \u8BA1\u6570\u989C\u8272",paraId:27,tocIndex:21},{value:"\u53EF\u4EE5\u4F7F\u7528 ",paraId:28,tocIndex:23},{value:"slot",paraId:28,tocIndex:23},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:28,tocIndex:23},{value:`<tabs
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
  <view
    slot="title"
    slot-scope="tab"
    data-index="{{tab.index}}"
#if ALIPAY
    onTap="onTap"
#endif
#if WECHAT
    bindtap="onTap"
#endif
  >
    {{tab.value.title}}
  </view>
</tabs>
`,paraId:29,tocIndex:23},{value:`Page({
  onChange(index) {
    console.log(index);
  },
  onTap(e) {
    const { index } = e.currentTarget.dataset;
  },
});
`,paraId:30,tocIndex:23}]}}]);
