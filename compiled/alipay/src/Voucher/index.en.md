---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Voucher

## When to use

Generic Coupon Component.

## Introduction

In `index.json` Introducing Components in

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

## Code Sample

### Basic Usage

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

### small size Voucher Style
```xml
<ant-voucher 
  size="small" 
  dataSource="{{dataSource}}" 
/>
```

### Horizontal (default)
```xml
<ant-voucher
  direction="horizontal"
  dataSource="{{dataSource}}"
/>
```

### Vertical arrangement
```xml
<ant-voucher
  direction="vertical"
  dataSource="{{dataSource}}"
/>
```

### Arrange in multiple columns
```xml
<ant-voucher
  direction="multipleColumn"
  dataSource="{{dataSource}}"
/>
```

### Slot
```xml
<voucher 
  size="small" 
  dataSource="{{dataSource}}" 
>
  <view 
    slot="voucher-action-area" 
    class="ant-voucher-slot-demo"
  >
    Expired
  </view>
</voucher>
```

### Demo Code

<code src="../../demo/pages/Voucher/index"></code>

## Property

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| className | string | No | "" | Container className |
| size | `small` &#124; `large` | No | `large` | Voucher Style  |
| direction | `horizontal` &#124; `vertical` &#124; `multipleColumn` | No | `horizontal` | Arrangement of multiple coupons |
| dataSource | [Item](#item)[] | Yes | [] | Data Source  |

### Item

| Property             | Type             | Default Value     | Description                  |
|----------------| ---------------- |---------|---------------------|
| title          | string           | None       | Title of the coupon               |
| desc           | string           | None       | Description of Voucher               |
| money          | string           | None       | Copy of the amount of the coupon             |
| moneyUnit      | string           | 'Yuan'     | The unit copy of the voucher, for example: xx yuan, xx discount  |
| threshold      | string           | None       | Restricted copy of coupons             |
| disabled       | bool             | `false` | Disable               |
| actionAreaInfo | [ActionAreaInfo] | None       | Area of action               |

### ActionAreaInfo

| Property     | Type   | Default Value  | Description                             |
| -------- | ------ | ------- | -------------------------------- |
| disabled | bool   | `false` | Disable                         |
| text     | string | None      | Button Copy                         |
| imageUrl | string | None      | The picture in the completed state does not show the button when there is a picture. |

## Event

| Event Name       | Description                           | Type                  |
| ------------ | ------------------------------ | --------------------- |
| #if ALIPAY onBtnTap     | Click the button to trigger this callback           | `(item, event)=>void` |
| #if ALIPAY onVoucherTap | Click the card to trigger this callback           | `(item, event)=>void` |
| #if WECHAT bind:btnTap     | Click the button to trigger this callback           | `(item, event)=>void` |
| #if WECHAT bind:voucherTap | Click the card to trigger this callback           | `(item, event)=>void` |

## Slot

| Name                | Description     |
| ------------------- | -------- |
| voucher-action-area | Area of action |
