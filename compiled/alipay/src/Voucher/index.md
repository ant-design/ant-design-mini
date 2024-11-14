---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
---

# Voucher 优惠券

## 何时使用

通用优惠券组件。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-voucher": "antd-mini/es/Voucher/index"
#endif
#if WECHAT
  "ant-voucher": "antd-mini/Voucher/index"
#endif
}
```

## 代码示例

### 基础用法

```xml
<ant-voucher
#if ALIPAY
  onTap="onTap"
#endif
#if WECHAT
  bind:tap="onTap"
#endif
  dataSource="{{dataSource}}"
/>
```

```js
Page({
  data: {
    dataSource: [
      {
        title: '主标题文案主标题文案',
        desc: '副标题文案副标题文案',
        money: '50',
        threshold: '满500可用',
        actionAreaInfo: {
          disabled: false,
          text: '去兑换',
        },
      },
    ],
  }
})
```

### 小号券样式
```xml
<ant-voucher 
  size="small" 
  dataSource="{{dataSource}}" 
/>
```

### 水平排列（默认）
```xml
<ant-voucher
  direction="horizontal"
  dataSource="{{dataSource}}"
/>
```

### 竖直排列
```xml
<ant-voucher
  direction="vertical"
  dataSource="{{dataSource}}"
/>
```

### 多列方式排列
```xml
<ant-voucher
  direction="multipleColumn"
  dataSource="{{dataSource}}"
/>
```

### 插槽
```xml
<voucher 
  size="small" 
  dataSource="{{dataSource}}" 
>
  <view 
    slot="voucher-action-area" 
    class="ant-voucher-slot-demo"
  >
    已过期
  </view>
</voucher>
```

### Demo 代码

<code src="../../demo/pages/Voucher/index"></code>

## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| className | string | 否 | "" | 容器 className |
| size | `small` &#124; `large` | 否 | `large` | 券样式  |
| direction | `horizontal` &#124; `vertical` &#124; `multipleColumn` | 否 | `horizontal` | 多张券时候的排列方式 |
| dataSource | [Item](#item)[] | 是 | [] | 数据源  |

### Item

| 属性             | 类型             | 默认值     | 说明                  |
|----------------| ---------------- |---------|---------------------|
| title          | string           | 无       | 券的标题               |
| desc           | string           | 无       | 券的描述               |
| money          | string           | 无       | 券的金额文案             |
| moneyUnit      | string           | '元'     | 券的单位文案，例如：xx元、xx折  |
| threshold      | string           | 无       | 券的限制文案             |
| disabled       | bool             | `false` | 是否禁用               |
| actionAreaInfo | [ActionAreaInfo] | 无       | 行动区域               |

### ActionAreaInfo

| 属性     | 类型   | 默认值  | 说明                             |
| -------- | ------ | ------- | -------------------------------- |
| disabled | bool   | `false` | 是否禁用                         |
| text     | string | 无      | 按钮文案                         |
| imageUrl | string | 无      | 完成态的图片，有图片时不展示按钮 |

## 事件

| 事件名       | 说明                           | 类型                  |
| ------------ | ------------------------------ | --------------------- |
| #if ALIPAY onBtnTap     | 点击按钮，触发此回调           | `(item, event)=>void` |
| #if ALIPAY onVoucherTap | 点击卡片，触发此回调           | `(item, event)=>void` |
| #if WECHAT bind:btnTap     | 点击按钮，触发此回调           | `(item, event)=>void` |
| #if WECHAT bind:voucherTap | 点击卡片，触发此回调           | `(item, event)=>void` |

## 插槽

| 名称                | 说明     |
| ------------------- | -------- |
| voucher-action-area | 行动区域 |
