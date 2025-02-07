"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[689],{78810:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var e=a(67294),t=a(80556),o={"src-tabs-demo-tabselevator":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,84526))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabselevator",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-tabs-demo-tabsverticalelevator":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,39501))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabsverticalelevator",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-tabs-demo-tabs":{component:e.memo(e.lazy(function(){return a.e(2433).then(a.bind(a,50544))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabs",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},47001:function(d,n,a){a.r(n),a.d(n,{texts:function(){return t}});var e=a(80556);const t=[{value:"Navigate between content groups.",paraId:0,tocIndex:0},{value:"Navigate between content groups.",paraId:1,tocIndex:0},{value:"The current content needs to be divided into groups of the same hierarchical structure for content switching and display, which is used at the top of the form or standard list interface.",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-tabs": "antd-mini/es/Tabs/index"
#endif
#if WECHAT
  "ant-tabs": "antd-mini/Tabs/index"
#endif
}
`,paraId:3,tocIndex:1},{value:`<ant-tabs items="{{items}}" />
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
`,paraId:5,tocIndex:3},{value:`<ant-tabs items="{{items}}">
  <view class="content" slot-scope="item">
    {{item.value.content}}
  </view>
</ant-tabs>
`,paraId:6,tocIndex:4},{value:`<ant-tabs type="capsule" items="{{items}}" defaultCurrent="{{1}}"></ant-tabs>
`,paraId:7,tocIndex:5},{value:`<ant-tabs type="mixin" items="{{items}}"></ant-tabs>
`,paraId:8,tocIndex:6},{value:`<ant-tabs items="{{items}}">
 <view
    slot="title"
    slot-scope="item">
    <view a:if="{{item.value.badge}}">
      <ant-badge>{{item.value.title}}</ant-badge>
    </view>
    <view a:else>{{item.value.title}}</view>
  </view>
</ant-tabs>
`,paraId:9,tocIndex:7},{value:`<ant-tabs items="{{items}}" />
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
`,paraId:11,tocIndex:8},{value:`<ant-tabs items="{{items}}">
  <view slot="plus">
    <ant-icon type="AddOutline" onTap="onPlus" />
  </view>
</ant-tabs>
`,paraId:12,tocIndex:9},{value:`<ant-tabs
  items="{{items}}"
  current="{{current}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
`,paraId:13,tocIndex:10},{value:`<ant-tabs items="{{items}}" scrollMode="center" />
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
`,paraId:15,tocIndex:12},{value:"Scrolling will correspond to tab.",paraId:16,tocIndex:13},{value:"Click tab to scroll to the corresponding tab title.",paraId:16,tocIndex:13},{value:"The onChange will only be triggered in tab switching. In the example, the custom title onTap can scroll current tab.",paraId:16,tocIndex:13},{value:"Sliding to the very top will suck the ceiling.",paraId:17,tocIndex:14},{value:"Toggling the tab content scrolls to the very top.",paraId:17,tocIndex:14},{value:` <ant-tabs items="{{items}}" current="{{current}}" onChange="onChange" className="sticky-tabs" />
`,paraId:18,tocIndex:14},{value:`.sticky-tabs {
  position: sticky;
  top: -1px;
  z-index: 999;
}
`,paraId:19,tocIndex:14},{value:` <ant-tabs
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
  </ant-tabs>
`,paraId:20,tocIndex:15},{value:"Property",paraId:21,tocIndex:18},{value:"Description",paraId:21,tocIndex:18},{value:"Type",paraId:21,tocIndex:18},{value:"Default Value",paraId:21,tocIndex:18},{value:"className",paraId:21,tocIndex:18},{value:"Class Name",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"current",paraId:21,tocIndex:18},{value:"Selected Index",paraId:21,tocIndex:18},{value:"number",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"defaultCurrent",paraId:21,tocIndex:18},{value:"Selected index initial value",paraId:21,tocIndex:18},{value:"number",paraId:21,tocIndex:18},{value:"0",paraId:21,tocIndex:18},{value:"direction",paraId:21,tocIndex:18},{value:"tabs direction,",paraId:21,tocIndex:18},{value:"horizontal",paraId:21,tocIndex:18},{value:"(Horizontal) ",paraId:21,tocIndex:18},{value:"vertical",paraId:21,tocIndex:18},{value:"(Vertical)",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"horizontal",paraId:21,tocIndex:18},{value:"items",paraId:21,tocIndex:18},{value:"option, quantity must be greater than 0",paraId:21,tocIndex:18},{value:"Item[]",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"plus",paraId:21,tocIndex:18},{value:"Operation button slot in upper right corner;",paraId:21,tocIndex:18},{value:" ",paraId:21,tocIndex:18},{value:"slot-scope",paraId:21,tocIndex:18},{value:" Include ",paraId:21,tocIndex:18},{value:"value",paraId:21,tocIndex:18},{value:"(Corresponding ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:") ",paraId:21,tocIndex:18},{value:"index",paraId:21,tocIndex:18},{value:"(Corresponding ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:" index of)",paraId:21,tocIndex:18},{value:"slot",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"scrollMode",paraId:21,tocIndex:18},{value:"Scrolling mode, optional 'edge', 'center'",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"edge",paraId:21,tocIndex:18},{value:"style",paraId:21,tocIndex:18},{value:"Style",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabsBarClassName",paraId:21,tocIndex:18},{value:"tabs bar class name",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabClassName",paraId:21,tocIndex:18},{value:"tab class name",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabsBarWrapClassName",paraId:21,tocIndex:18},{value:"tab wrap class name",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"tabActiveClassName",paraId:21,tocIndex:18},{value:"tab active class name",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"title",paraId:21,tocIndex:18},{value:"Custom ",paraId:21,tocIndex:18},{value:"Items",paraId:21,tocIndex:18},{value:" Title;",paraId:21,tocIndex:18},{value:" ",paraId:21,tocIndex:18},{value:"slot-scope",paraId:21,tocIndex:18},{value:" Include ",paraId:21,tocIndex:18},{value:"value",paraId:21,tocIndex:18},{value:"(Corresponding ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:") ",paraId:21,tocIndex:18},{value:"index",paraId:21,tocIndex:18},{value:"(Corresponding ",paraId:21,tocIndex:18},{value:"Item",paraId:21,tocIndex:18},{value:" index of)",paraId:21,tocIndex:18},{value:"slot",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"type",paraId:21,tocIndex:18},{value:"Type,",paraId:21,tocIndex:18},{value:"basic",paraId:21,tocIndex:18},{value:"(basis),",paraId:21,tocIndex:18},{value:"capsule",paraId:21,tocIndex:18},{value:"(capsule),",paraId:21,tocIndex:18},{value:"mixin",paraId:21,tocIndex:18},{value:"(Mixed)",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:"basic",paraId:21,tocIndex:18},{value:"#if ALIPAY onChange",paraId:21,tocIndex:18},{value:"When the panel is switched, the callback is triggered.",paraId:21,tocIndex:18},{value:"(index: number, e: ",paraId:21,tocIndex:18},{value:"Event",paraId:21,tocIndex:18},{value:") => void",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"#if WECHAT bindchange",paraId:21,tocIndex:18},{value:"When the panel is switched, the callback is triggered.",paraId:21,tocIndex:18},{value:"(index: number, e: ",paraId:21,tocIndex:18},{value:"Event",paraId:21,tocIndex:18},{value:") => void",paraId:21,tocIndex:18},{value:"-",paraId:21,tocIndex:18},{value:"Property",paraId:22,tocIndex:19},{value:"Description",paraId:22,tocIndex:19},{value:"Type",paraId:22,tocIndex:19},{value:"Default Value",paraId:22,tocIndex:19},{value:"title",paraId:22,tocIndex:19},{value:"Title",paraId:22,tocIndex:19},{value:"string",paraId:22,tocIndex:19},{value:"-",paraId:22,tocIndex:19},{value:"In addition to item can have ",paraId:23,tocIndex:19},{value:"title",paraId:23,tocIndex:19},{value:", you can also add custom properties, such. ",paraId:23,tocIndex:19},{value:"content",paraId:23,tocIndex:19},{value:", ",paraId:23,tocIndex:19},{value:"badge",paraId:23,tocIndex:19},{value:" and so on, these properties can be used. ",paraId:23,tocIndex:19},{value:"slot-scope",paraId:23,tocIndex:19},{value:" Visit:",paraId:23,tocIndex:19},{value:`Page({
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
`,paraId:25,tocIndex:19},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:26,tocIndex:21},{value:"Variable name",paraId:27,tocIndex:21},{value:"Light Mode Default",paraId:27,tocIndex:21},{value:"Dark Mode Default",paraId:27,tocIndex:21},{value:"Remarks",paraId:27,tocIndex:21},{value:"--tabs-basic-color",paraId:27,tocIndex:21},{value:"#333333",paraId:27,tocIndex:21},{value:"#c5cad1",paraId:27,tocIndex:21},{value:"Tabs Basic Colors",paraId:27,tocIndex:21},{value:"--tabs-weaken-color",paraId:27,tocIndex:21},{value:"#999999",paraId:27,tocIndex:21},{value:"#616161",paraId:27,tocIndex:21},{value:"Tabs Weaken Color",paraId:27,tocIndex:21},{value:"--tabs-inverse-color",paraId:27,tocIndex:21},{value:"#ffffff",paraId:27,tocIndex:21},{value:"#1a1a1a",paraId:27,tocIndex:21},{value:"Tabs Invert Color",paraId:27,tocIndex:21},{value:"--tabs-active-color",paraId:27,tocIndex:21},{value:"#1677ff",paraId:27,tocIndex:21},{value:"#3086ff",paraId:27,tocIndex:21},{value:"Tabs Activate Colors",paraId:27,tocIndex:21},{value:"--tabs-active-decorate-color",paraId:27,tocIndex:21},{value:"#1677ff",paraId:27,tocIndex:21},{value:"#3086ff",paraId:27,tocIndex:21},{value:"Tabs Activate Decorative Colors",paraId:27,tocIndex:21},{value:"--tabs-underline-border-color",paraId:27,tocIndex:21},{value:"#eeeeee",paraId:27,tocIndex:21},{value:"#2b2b2b",paraId:27,tocIndex:21},{value:"Tabs Underline Border Color",paraId:27,tocIndex:21},{value:"--tabs-plus-color",paraId:27,tocIndex:21},{value:"#000000",paraId:27,tocIndex:21},{value:"#000000",paraId:27,tocIndex:21},{value:"Tabs Plus Color",paraId:27,tocIndex:21},{value:"--tabs-capsule-title-bg",paraId:27,tocIndex:21},{value:"#f5f5f5",paraId:27,tocIndex:21},{value:"#121212",paraId:27,tocIndex:21},{value:"Tabs Capsule Title Background Color",paraId:27,tocIndex:21},{value:"--tabs-subtitle-color",paraId:27,tocIndex:21},{value:"#ffffff",paraId:27,tocIndex:21},{value:"#1a1a1a",paraId:27,tocIndex:21},{value:"Tabs Subtitle Color",paraId:27,tocIndex:21},{value:"--tabs-count-color",paraId:27,tocIndex:21},{value:"#cccccc",paraId:27,tocIndex:21},{value:"#474747",paraId:27,tocIndex:21},{value:"Tabs Count Color",paraId:27,tocIndex:21},{value:"can be used ",paraId:28,tocIndex:23},{value:"slot",paraId:28,tocIndex:23},{value:" From the definition.",paraId:28,tocIndex:23},{value:`<tabs
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
