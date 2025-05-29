---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay', 'wechat']
---

# SelectContact 选人能力

找人能力：共享类面向对 C 用户的业务，实际上都存在这找人的诉求。举例：亲情卡主卡用户“找人”赠送亲情卡，求赠卡用户“找人”帮忙开通，代付的用户在使用代付时找人帮忙代付，小荷包的用户拉群时需要“找人”来加入。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-select-contact": "antd-mini/es/SelectContact/index"
#endif
#if WECHAT
  "ant-select-contact": "antd-mini/SelectContact/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<SelectContact
  className="stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
```

```js
Page({
  handleChange(value) {
    console.log(value);
  },
});
```

### Demo 代码

<code src='../../demo/pages/SelectContact/index'></code>

## API

| 属性                  | 说明                         | 类型                      | 默认值 |
| --------------------- | ---------------------------- | ------------------------- | ------ |
| className             | 类名                         | string                    | -      |
| height                | 组件高度                     | string                    | -      |
| source                | 业务来源，区分场景监控、埋点 | string                    | -      |
| bizScene              | 接入方场景，后段校验         | number                    | -      |
| onError               | 获取数据接口报错触发         | (error: any) => void      | -      |
| #if ALIPAY onSelect   | 选中联系人时触发             | (IOnSelectParams) => void | -      |
| #if WECHAT bindselect | 选中联系人时触发             | (IOnSelectParams) => void | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                                  | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --select-contact-search-bar-focus-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 搜索栏聚焦颜色   |
| --select-contact-search-cancel-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 取消按钮颜色     |
| --select-contact-loading-bg             | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 加载背景颜色     |
| --select-contact-scroll-bg              | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 滚动背景颜色     |
| --select-contact-list-bg                | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 列表背景颜色     |
| --select-contact-title-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | 标题背景颜色     |
| --select-contact-title-color            | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | 标题文字颜色     |
| --select-contact-title-first-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333</div>    | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #000000;">#c5cad1</div> | 一级标题颜色     |
| --select-contact-title-first-border     | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eee</div>    | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 一级标题边框颜色 |
| --select-contact-tag-color              | <div style="width: 150px; height: 30px; background-color: #ff6010; color: #ffffff;">#ff6010</div> | <div style="width: 150px; height: 30px; background-color: #ff6010; color: #ffffff;">#ff6010</div> | 标签颜色         |
| --select-contact-tag-border             | <div style="width: 150px; height: 30px; background-color: #ffcfb7; color: #333333;">#ffcfb7</div> | <div style="width: 150px; height: 30px; background-color: #ffcfb7; color: #ffffff;">#ffcfb7</div> | 标签边框颜色     |
| --select-contact-empty-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 空状态背景颜色   |
| --select-contact-empty-color            | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 空状态文字颜色   |
| --select-contact-loading-bg             | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 加载状态背景颜色 |
| --select-contact-display-light-color    | <div style="width: 150px; height: 30px; background-color: #fa6300; color: #ffffff;">#fa6300</div> | <div style="width: 150px; height: 30px; background-color: #fa6300; color: #ffffff;">#fa6300</div> | 高亮显示颜色     |
