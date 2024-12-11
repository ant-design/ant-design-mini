---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
---

# Selector 选择器组件

在一组选项中选择一个或多个。提供多个选项供用户选择，一般在筛选和表单中使用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-selector": "antd-mini/es/Selector/index"
#endif
#if WECHAT
  "ant-selector": "antd-mini/Selector/index"
#endif
}
```

## 代码示例

### 基本使用

> [options](#selectoritem) 属性是一个对象，包含 `text`（主文案）、 `subText`（副文案） 、 `value`（选项值）、 `disabled`（是否禁用）。

```xml
  <ant-selector defaultValue="2" options="{{options}}" />
```

### 多选

> 传入 `multiple` 属性可以支持多选。

```xml
  <ant-selector defaultValue="{{['1', '2']}}" options="{{options}}" multiple />
```

### 限制选择个数

> `maxSelectedCount`、`minSelectedCount` 属性可以限制选择个数，`selectMax`、`selectMin` 事件在超出限制的时候触发。

```xml
<ant-selector
  options="{{options}}"
  multiple
  maxSelectedCount="{{4}}"
  minSelectedCount="{{2}}"
#if ALIPAY
  onSelectMax="onSelectMax"
  onSelectMin="onSelectMin"
#endif
#if WECHAT
  bindselectmax="onSelectMax"
  bindselectmin="onSelectMin"
#endif
/>
```

```js
Page({
  data: {
    items: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' },
    ],
  },
  onSelectMin(value, item) {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: '不允许清空' });
#endif
#if ALIPAY
    my.alert({ content: '不允许清空' });
#endif
  },
  onSelectMax() {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: '选择已达上限' });
#endif
#if ALIPAY
    my.alert({ content: '选择已达上限' });
#endif
  },
});
```

### 不允许清空

> 想要实现不允许清空，使用 `minSelectedCount` 属性设置最小限制个数位 `1` ，即可。

```xml
<ant-selector defaultValue="1" options="{{options}}" minSelectedCount="{{1}}" />
```

### 受控模式

```xml
<ant-selector
  value="{{value}}"
  options="{{items}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-button
  size="large"
#if ALIPAY
  onTap="handleChangeValue"
#endif
#if WECHAT
  bindtap="handleChangeValue"
#endif
>
  改变选中值为选项三
</ant-button>
```

```js
Page({
  data: {
    items: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' },
    ],
    value: '1',
  },
  handleChangeValue() {
    this.setData({
      value: '3',
    });
  },
  handleChange(value, items, e) {
#if WECHAT
    this.setData({
      value: value.detail[0],
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
    console.log(value, items, e);
  },
});
```

### 使用 Selector 自定义 Filter

> 参考下面 [Demo 代码](#demo-代码) 中的实现。

### Demo 代码

<code src="../../demo/pages/Selector/index"></code>

## API

| 属性                      | 说明                                                    | 类型                                                                                                                                                                                                                                     | 默认值 |
| ------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| activeItemClassName       | 选中选项的类名                                          | string                                                                                                                                                                                                                                   | -      |
| activeItemStyle           | 选中选项的样式                                          | string                                                                                                                                                                                                                                   | -      |
| className                 | 类名                                                    | string                                                                                                                                                                                                                                   | -      |
| defaultValue              | 默认选择项，多选时类型为数组                            | string \| number \| string[] \| number[]                                                                                                                                                                                                 | -      |
| disabled                  | 是否整体禁用                                            | boolean                                                                                                                                                                                                                                  | false  |
| maxSelectedCount          | 最大可选中项的数量                                      | number                                                                                                                                                                                                                                   | -      |
| minSelectedCount          | 最小可选中项的数量                                      | number                                                                                                                                                                                                                                   | -      |
| multiple                  | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态 | boolean                                                                                                                                                                                                                                  | false  |
| options                   | 选项数据源                                              | [SelectorItem](#selectoritem)[]                                                                                                                                                                                                          | []     |
| style                     | 样式                                                    | string                                                                                                                                                                                                                                   | -      |
| value                     | 当前选择项，多选时类型为数组                            | string \| number \| string[] \| number[]                                                                                                                                                                                                 | -      |
| #if ALIPAY onChange       | 选中值发生变化，触发回调                                | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if ALIPAY onSelectMax    | 触发最大限制                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if ALIPAY onSelectMin    | 触发最小限制                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if WECHAT bindchange    | 选中值发生变化，触发回调                                | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindselectmax | 触发最大限制                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if WECHAT bindselectmin | 触发最小限制                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |

### SelectorItem

| 属性     | 说明         | 类型             | 默认值 |
| -------- | ------------ | ---------------- | ------ |
| disabled | 是否禁用     | boolean          | -      |
| subText  | 副文案       | string           | -      |
| text     | 文案         | string           | -      |
| value    | 当前项 value | string \| number | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --selector-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 选择器背景颜色       |
| --selector-item-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 选择器项背景颜色     |
| --selector-item-active-background | <div style="width: 150px; height: 30px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div> | <div style="width: 150px; height: 30px; background-color: #0d2543; color: #ffffff;">#0d2543</div> | 选择器激活项背景颜色 |
| --selector-item-color             | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 选择器项颜色         |
| --selector-item-sub-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 选择器项子颜色       |
