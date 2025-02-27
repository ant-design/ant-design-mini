"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7681],{45440:function(d,n,e){e.r(n),e.d(n,{demos:function(){return o}});var a=e(67294),t=e(97702),o={"src-terms-demo-fixed":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,74533))})),asset:{type:"BLOCK",id:"src-terms-demo-fixed",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-terms-demo-terms":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,66197))})),asset:{type:"BLOCK",id:"src-terms-demo-terms",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},43740:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var a=e(97702);const t=[{value:"Used in scenarios such as product activation and agreement signing",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-terms": "antd-mini/es/Terms/index"
#endif
#if WECHAT
  "ant-terms": "antd-mini/Terms/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-terms
  termPrefix="\u8BF7\u9605\u8BFB\u5E76\u540C\u610F"
  terms="{{terms}}"
  buttons="{{buttons}}"
#if ALIPAY
  onButtonTap="handleButtonTap"
  onTermTap="handleTermTap"
#endif
#if WECHAT
  bindbuttontap="handleButtonTap"
  bindtermtap="handleTermTap"
#endif
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    buttons: [
      { text: '\u540C\u610F\u534F\u8BAE + \u884C\u52A8\u70B9\u63CF\u8FF0', type: 'primary' }
      { text: '\u53D6\u6D88', aide: true, type: 'default' }
    ],
    terms: [
      { name: '\u300A\u7528\u6237\u534F\u8BAE\u300B', key: 'user' }
    ],
  },
  handleButtonTap(item, index, checked, event) {
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u7B2C \${index + 1} \u4E2A\u6309\u94AE\` });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u7B2C \${item.detail[1] + 1} \u4E2A\u6309\u94AE\` });
#endif
  },
  handleTermTap(item, index, event) {
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u7B2C \${index + 1} \u4E2A\u534F\u8BAE\` });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u7B2C \${item.detail[1] + 1} \u4E2A\u534F\u8BAE\` });
#endif
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-terms
  type="check"
  termPrefix="\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F"
  terms="{{terms}}"
  buttons="{{buttons}}"
  checkboxTipsText="\u8BF7\u9605\u8BFB\u540E\u52FE\u9009\u670D\u52A1\u534F\u8BAE"
  checkboxTipsVisible="{{checkboxTipsVisible}}"
#if ALIPAY
  onButtonTap="handleButtonTap"
  onTermTap="handleTermTap"
  onCheckChange="handleCheckChange"
  onTermPrefixTap="handleTermPrefixTap"
#endif
#if WECHAT
  bindbuttontap="handleButtonTap"
  bindtermtap="handleTermTap"
  bindcheckchange="handleCheckChange"
  bindtermprefixtap="handleTermPrefixTap"
#endif
/>
`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    buttons: [
      { text: '\u884C\u52A8\u70B9\u63CF\u8FF0', type: 'primary' }
    ],
    terms: [
      { name: '\u300A\u7528\u6237\u534F\u8BAE\u300B', key: 'user' }
    ],
    checkboxTipsVisible: false,
  },
  handleButtonTap(item, checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !item.detail[2] });
#endif
  },
  handleTermTap(item, index) {
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u7B2C \${index + 1} \u4E2A\u534F\u8BAE\` });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u7B2C \${item.detail[1] + 1} \u4E2A\u534F\u8BAE\` });
#endif
  },
  handleCheckChange(checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
  },
  handleTermPrefixTap(checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
  },
});
`,paraId:6,tocIndex:4},{value:`<ant-terms
  type="read"
  termPrefix="\u5F53\u524D\u6B63In\u8BFB"
  terms="{{terms}}"
  buttons="{{buttons}}"
  readCurrent="{{readCurrent}}"
#if ALIPAY
  onButtonTap="handleButtonTap"
  onTermTap="handleTermTap"
  onCountdownFinish="handleCountdownFinish"
  onReadChange="handleReadChange"
#endif
#if WECHAT
  bindbuttontap="handleButtonTap"
  bindtermtap="handleTermTap"
  bindcountdownfinish="handleCountdownFinish"
  bindreadchange="handleReadChange"
#endif
>
  <scroll-view
    enhanced
    slot="read-content"
    style="height:300px;"
    id="scroll-view"
    scrollTop="{{scrollTop}}"
    scrollY="{{true}}"
    scrollWithAnimation="{{true}}"
    scrollAnimationDuration="{{300}}"
    lowerThreshold="{{100}}"
#if ALIPAY
    onScroll="onScroll"
    onTouchStart="onTouchStart"
    onScrollToLower="onScrollToLower"
#endif
#if WECHAT
    bindscroll="onScroll"
    binddragstart="onTouchStart"
    bindscrolltolower="onScrollToLower"
#endif
  >
    <image
      class="term-content"
      id="term-content-0"
      src="https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/966PR7FNh8cAAAAAAAAAAAAADoEQAQFr/original"
      mode="widthFix"
      onLoad="onImageLoad"
    />
    <image
      class="term-content"
      id="term-content-1"
      src="https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/966PR7FNh8cAAAAAAAAAAAAADoEQAQFr/original"
      mode="widthFix"
      onLoad="onImageLoad"
    />
    <image
      class="term-content"
      id="term-content-2"
      src="https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/966PR7FNh8cAAAAAAAAAAAAADoEQAQFr/original"
      mode="widthFix"
      onLoad="onImageLoad"
    />
  </scroll-view>
  <view slot="read-total">
    Total {{terms3.length}} agreements
  </view>
</ant-terms>

`,paraId:7,tocIndex:5},{value:`Page({
  data: {
    buttons: [
      { text: '\u8BF7\u9605\u8BFB\u5168\u90E8\u534F\u8BAE', disabled: true, type: 'primary', countdownTime: 30 }
    ],
    terms: [
      { name: '\u300A\u7528\u6237\u534F\u8BAE\u300B', key: 'user' },
      { name: '\u300A\u9690\u79C1\u534F\u8BAE\u300B', key: 'private' },
      { name: '\u300A\u7F51\u7EDC\u534F\u8BAE\u300B', key: 'internet' }
    ],
    readCurrent: 1,
  },
  handleButtonTap(item, index, checked, event) {
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u7B2C \${index + 1} \u4E2A\u6309\u94AE\` });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u7B2C \${item.detail[1] + 1} \u4E2A\u6309\u94AE\` });
#endif
  },
  handleTermTap(item, index, event) {
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u7B2C \${index + 1} \u4E2A\u534F\u8BAE\` });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u7B2C \${item.detail[1] + 1} \u4E2A\u534F\u8BAE\` });
#endif
  },
  handleCountdownFinish(item, index) {
    this.setData({
      buttons3: this.data.buttons3.map((button, idx) =>
        idx === index
          ? { ...button, text: '\u540C\u610F\u534F\u8BAE + \u884C\u52A8\u70B9\u63CF\u8FF0', disabled: false }
          : button
      ),
    });
  },
  handleReadChange(current) {
#if WECHAT
    current = current.detail;
#endif
    this.tap = true;
    this.setData({
      scrollTop:
        this.itemRectList[current].top -
        this.scrollViewRect.top +
        Math.random(),
    });
  },
  async onReady() {
    await this.updateRect();
  },
  async onImageLoad() {
    await this.updateRect();
  },
  async updateRect() {
    this.itemRectList = await Promise.all(
      this.data.terms3.map((item, index) =>
        this.getBoundingClientRect(\`#term-content-\${index}\`)
      )
    );
    this.scrollViewRect = await this.getBoundingClientRect('#scroll-view');
  },
  onTouchStart() {
    this.tap = false;
  },
  onScroll(e) {
    if (this.tap) {
      return;
    }
    this.scrollTop = e.detail.scrollTop;
    const scrollTop = this.scrollTop + this.itemRectList[0].top;
    for (let i = 0; i < this.itemRectList.length; i++) {
      const item = this.itemRectList[i];
      if (
        scrollTop > item.top &&
        (!this.itemRectList[i + 1] ||
          scrollTop < this.itemRectList[i + 1].top) &&
        i !== this.data.readCurrent
      ) {
        this.setData({
          readCurrent: i,
        });
        return;
      }
    }
  },
  onScrollToLower() {
    console.log('\u89E6\u5E95');
  },
  getBoundingClientRect(id) {
    if (typeof my === 'undefined') {
      return this.getInstanceBoundingClientRect(this, id);
    }
    return this.getInstanceBoundingClientRect(my, id);
  },
  getInstanceBoundingClientRect(instance, selector) {
    return new Promise((resolve) => {
      instance
        .createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            resolve(ret[0]);
          }
        });
    });
  },
});
`,paraId:8,tocIndex:5},{value:"Property",paraId:9,tocIndex:8},{value:"Description",paraId:9,tocIndex:8},{value:"Type",paraId:9,tocIndex:8},{value:"Default Value",paraId:9,tocIndex:8},{value:"type",paraId:9,tocIndex:8},{value:"Protocol Presentation Type",paraId:9,tocIndex:8},{value:'""',paraId:9,tocIndex:8},{value:" | ",paraId:9,tocIndex:8},{value:'"check"',paraId:9,tocIndex:8},{value:" | ",paraId:9,tocIndex:8},{value:'"read"',paraId:9,tocIndex:8},{value:'""',paraId:9,tocIndex:8},{value:"terms",paraId:9,tocIndex:8},{value:"Protocol List",paraId:9,tocIndex:8},{value:"Term",paraId:10,tocIndex:8},{value:"[]",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"buttons",paraId:9,tocIndex:8},{value:"Button List",paraId:9,tocIndex:8},{value:"Button",paraId:11,tocIndex:8},{value:"[]",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"buttonsFixed",paraId:9,tocIndex:8},{value:"Whether the button area sucks the bottom",paraId:9,tocIndex:8},{value:"boolean",paraId:9,tocIndex:8},{value:"false",paraId:9,tocIndex:8},{value:"buttonsDirection",paraId:9,tocIndex:8},{value:"Split line direction, default portrait",paraId:9,tocIndex:8},{value:'"horizontal"',paraId:9,tocIndex:8},{value:" | ",paraId:9,tocIndex:8},{value:'"vertical"',paraId:9,tocIndex:8},{value:'"vertical"',paraId:9,tocIndex:8},{value:"termPrefix",paraId:9,tocIndex:8},{value:"Protocol Prefix",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:'""',paraId:9,tocIndex:8},{value:"termSuffix",paraId:9,tocIndex:8},{value:"Protocol Suffix",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:'""',paraId:9,tocIndex:8},{value:"checkboxTipsText",paraId:9,tocIndex:8},{value:"Check the box to guide the copy",paraId:9,tocIndex:8},{value:"string",paraId:9,tocIndex:8},{value:'""',paraId:9,tocIndex:8},{value:"checkboxTipsVisible",paraId:9,tocIndex:8},{value:"Check box to guide display status",paraId:9,tocIndex:8},{value:"boolean",paraId:9,tocIndex:8},{value:"false",paraId:9,tocIndex:8},{value:"readCurrent",paraId:9,tocIndex:8},{value:"Current sequence number read",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"defaultReadCurrent",paraId:9,tocIndex:8},{value:"Current sequence number of default reading",paraId:9,tocIndex:8},{value:"number",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onButtonTap",paraId:9,tocIndex:8},{value:"Action point button click callback",paraId:9,tocIndex:8},{value:"(b?: Button, index?: number, checked?: boolean, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onTermTap",paraId:9,tocIndex:8},{value:"Protocol Click Callback",paraId:9,tocIndex:8},{value:"(t?: Term, index?: number, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onCheckChange",paraId:9,tocIndex:8},{value:"Check callback",paraId:9,tocIndex:8},{value:"(c?: boolean) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onTermPrefixTap",paraId:9,tocIndex:8},{value:"Protocol Prefix Click Callback",paraId:9,tocIndex:8},{value:"(c?: boolean) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onCountdownFinish",paraId:9,tocIndex:8},{value:"Countdown End Callback",paraId:9,tocIndex:8},{value:"(b?: Button, index?: number, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if ALIPAY onReadChange",paraId:9,tocIndex:8},{value:"Protocol reading switch",paraId:9,tocIndex:8},{value:"(index?: number) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindbuttontap",paraId:9,tocIndex:8},{value:"Action point button click callback",paraId:9,tocIndex:8},{value:"(b?: Button, index?: number, checked?: boolean, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindtermtap",paraId:9,tocIndex:8},{value:"Protocol Click Callback",paraId:9,tocIndex:8},{value:"(t?: Term, index?: number, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindcheckchange",paraId:9,tocIndex:8},{value:"Check callback",paraId:9,tocIndex:8},{value:"(c?: boolean) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindtermprefixtap",paraId:9,tocIndex:8},{value:"Protocol Prefix Click Callback",paraId:9,tocIndex:8},{value:"(c?: boolean) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindcountdownfinish",paraId:9,tocIndex:8},{value:"Countdown End Callback",paraId:9,tocIndex:8},{value:"(b?: Button, index?: number, event?) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"#if WECHAT bindreadchange",paraId:9,tocIndex:8},{value:"Protocol reading switch",paraId:9,tocIndex:8},{value:"(index?: number) => void",paraId:9,tocIndex:8},{value:"-",paraId:9,tocIndex:8},{value:"Property",paraId:12,tocIndex:9},{value:"Description",paraId:12,tocIndex:9},{value:"Type",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"key",paraId:12,tocIndex:9},{value:"Unique identification",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"name",paraId:12,tocIndex:9},{value:"Agreement Name",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"Property",paraId:13,tocIndex:10},{value:"Description",paraId:13,tocIndex:10},{value:"Type",paraId:13,tocIndex:10},{value:"Default Value",paraId:13,tocIndex:10},{value:"key",paraId:13,tocIndex:10},{value:"Unique identification",paraId:13,tocIndex:10},{value:"string",paraId:13,tocIndex:10},{value:"-",paraId:13,tocIndex:10},{value:"text",paraId:13,tocIndex:10},{value:"Button Copy",paraId:13,tocIndex:10},{value:"string",paraId:13,tocIndex:10},{value:"-",paraId:13,tocIndex:10},{value:"countdownTime",paraId:13,tocIndex:10},{value:"Timing seconds, in seconds",paraId:13,tocIndex:10},{value:"number",paraId:13,tocIndex:10},{value:"-",paraId:13,tocIndex:10},{value:"Transparent transmission ",paraId:13,tocIndex:10},{value:"ant-button",paraId:14,tocIndex:10},{value:" All Properties",paraId:13,tocIndex:10}]}}]);
