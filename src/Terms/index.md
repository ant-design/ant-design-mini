---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Terms 协议

用于产品开通、签署协议等场景

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-terms": "antd-mini/es/Terms/index"
#endif
#if WECHAT
  "ant-terms": "antd-mini/Terms/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-terms
  termPrefix="请阅读并同意"
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
```

```js
Page({
  data: {
    buttons: [
      { text: '同意协议 + 行动点描述', type: 'primary' }
      { text: '取消', aide: true, type: 'default' }
    ],
    terms: [
      { name: '《用户协议》', key: 'user' }
    ],
  },
  handleButtonTap(item, index, checked, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个按钮` });
#endif
  },
  handleTermTap(item, index, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
#endif
  },
});
```

### 勾选型

```xml
<ant-terms
  type="check"
  termPrefix="我已阅读并同意"
  terms="{{terms}}"
  buttons="{{buttons}}"
  checkboxTipsText="请阅读后勾选服务协议"
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
```

```js
Page({
  data: {
    buttons: [
      { text: '行动点描述', type: 'primary' }
    ],
    terms: [
      { name: '《用户协议》', key: 'user' }
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
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
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
```

### 强制阅读

```xml
<ant-terms
  type="read"
  termPrefix="当前正在读"
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
    共{{terms3.length}}份协议
  </view>
</ant-terms>

```

```js
Page({
  data: {
    buttons: [
      { text: '请阅读全部协议', disabled: true, type: 'primary', countdownTime: 30 }
    ],
    terms: [
      { name: '《用户协议》', key: 'user' },
      { name: '《隐私协议》', key: 'private' },
      { name: '《网络协议》', key: 'internet' }
    ],
    readCurrent: 1,
  },
  handleButtonTap(item, index, checked, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个按钮` });
#endif
  },
  handleTermTap(item, index, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
#endif
  },
  handleCountdownFinish(item, index) {
    this.setData({
      buttons3: this.data.buttons3.map((button, idx) =>
        idx === index
          ? { ...button, text: '同意协议 + 行动点描述', disabled: false }
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
        this.getBoundingClientRect(`#term-content-${index}`)
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
    console.log('触底');
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
```

### 固定底部

<code src='../../demo/pages/Terms/Fixed/index'></code>

### Demo 代码

<code src='../../demo/pages/Terms/index'></code>

## API

| 属性                            | 说明                 | 类型                                                              | 默认值       |
| ------------------------------- | -------------------- | ----------------------------------------------------------------- | ------------ |
| type                            | 协议展示类型         | `""` \| `"check"` \| `"read"`                                     | `""`         |
| terms                           | 协议列表             | [Term](#term)`[]`                                                 | `-`          |
| buttons                         | 按钮列表             | [Button](#button)`[]`                                             | `-`          |
| buttonsFixed                    | 按钮区是否吸底       | `boolean`                                                         | `false`      |
| buttonsDirection                | 分割线方向，默认纵向 | `"horizontal"` \| `"vertical"`                                    | `"vertical"` |
| termPrefix                      | 协议前缀             | `string`                                                          | `""`         |
| termSuffix                      | 协议后缀             | `string`                                                          | `""`         |
| checkboxTipsText                | 勾选框引导文案       | `string`                                                          | `""`         |
| checkboxTipsVisible             | 勾选框引导显示状态   | `boolean`                                                         | `false`      |
| readCurrent                     | 阅读的当前序号       | `number`                                                          | `-`          |
| defaultReadCurrent              | 默认阅读的当前序号   | `number`                                                          | `-`          |
| #if ALIPAY onButtonTap          | 行动点按钮点击回调   | `(b?: Button, index?: number, checked?: boolean, event?) => void` | `-`          |
| #if ALIPAY onTermTap            | 协议点击回调         | `(t?: Term, index?: number, event?) => void`                      | `-`          |
| #if ALIPAY onCheckChange        | 勾选回调             | `(c?: boolean) => void`                                           | `-`          |
| #if ALIPAY onTermPrefixTap      | 协议前缀点击回调     | `(c?: boolean) => void`                                           | `-`          |
| #if ALIPAY onCountdownFinish    | 倒计时结束回调       | `(b?: Button, index?: number, event?) => void`                    | `-`          |
| #if ALIPAY onReadChange         | 协议阅读切换         | `(index?: number) => void`                                        | `-`          |
| #if WECHAT bindbuttontap       | 行动点按钮点击回调   | `(b?: Button, index?: number, checked?: boolean, event?) => void` | `-`          |
| #if WECHAT bindtermtap         | 协议点击回调         | `(t?: Term, index?: number, event?) => void`                      | `-`          |
| #if WECHAT bindcheckchange     | 勾选回调             | `(c?: boolean) => void`                                           | `-`          |
| #if WECHAT bindtermprefixtap   | 协议前缀点击回调     | `(c?: boolean) => void`                                           | `-`          |
| #if WECHAT bindcountdownfinish | 倒计时结束回调       | `(b?: Button, index?: number, event?) => void`                    | `-`          |
| #if WECHAT bindreadchange      | 协议阅读切换         | `(index?: number) => void`                                        | `-`          |

### Term

| 属性 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| key  | 唯一标识 | `string` | `-`    |
| name | 协议名称 | `string` | `-`    |

### Button

| 属性                                                  | 说明               | 类型     | 默认值 |
| ----------------------------------------------------- | ------------------ | -------- | ------ |
| key                                                   | 唯一标识           | `string` | `-`    |
| text                                                  | 按钮文案           | `string` | `-`    |
| countdownTime                                         | 计时秒数，单位为秒 | `number` | `-`    |
| 透传 [ant-button](/components/button#button) 所有属性 |
