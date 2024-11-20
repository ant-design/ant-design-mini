---
nav:
  path: /components
group:
  title: Bizness Components
  order: 15
toc: content
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
        title: 'title',
        desc: 'subTitle',
        money: '50',
        threshold: '500 to use',
        actionAreaInfo: {
          disabled: false,
          text: 'to exchange',
        },
      },
    ],
  },
});
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

| Property   | Type                                                   | Required | Default Value | Description                     |
| ---------- | ------------------------------------------------------ | -------- | ------------- | ------------------------------- |
| className  | string                                                 | No       | ""            | Container className             |
| size       | `small` &#124; `large`                                 | No       | `large`       | Voucher Style                   |
| direction  | `horizontal` &#124; `vertical` &#124; `multipleColumn` | No       | `horizontal`  | Arrangement of multiple coupons |
| dataSource | [Item](#item)[]                                        | Yes      | []            | Data Source                     |

### Item

| Property       | Type             | Default Value | Description                                                     |
| -------------- | ---------------- | ------------- | --------------------------------------------------------------- |
| title          | string           | None          | Title of the coupon                                             |
| desc           | string           | None          | Description of Voucher                                          |
| money          | string           | None          | Copy of the amount of the coupon                                |
| moneyUnit      | string           | 'Yuan'        | The unit copy of the voucher, for example: xx yuan, xx discount |
| threshold      | string           | None          | Restricted copy of coupons                                      |
| disabled       | bool             | `false`       | Disable                                                         |
| actionAreaInfo | [ActionAreaInfo] | None          | Area of action                                                  |

### ActionAreaInfo

| Property | Type   | Default Value | Description                                                                          |
| -------- | ------ | ------------- | ------------------------------------------------------------------------------------ |
| disabled | bool   | `false`       | Disable                                                                              |
| text     | string | None          | Button Copy                                                                          |
| imageUrl | string | None          | The picture in the completed state does not show the button when there is a picture. |

## Event

| Event Name                 | Description                               | Type                  |
| -------------------------- | ----------------------------------------- | --------------------- |
| #if ALIPAY onBtnTap        | Click the button to trigger this callback | `(item, event)=>void` |
| #if ALIPAY onVoucherTap    | Click the card to trigger this callback   | `(item, event)=>void` |
| #if WECHAT bind:btntap     | Click the button to trigger this callback | `(item, event)=>void` |
| #if WECHAT bind:vouchertap | Click the card to trigger this callback   | `(item, event)=>void` |

## Slot

| Name                | Description    |
| ------------------- | -------------- |
| voucher-action-area | Area of action |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                      | Default Value                                                                                                                       | Dark Mode Default                                                                                                                   | Remarks                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| --voucher-multi-money-color        | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div>                                   | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div>                                   | Multi-amount coupon color                 |
| --voucher-threshold-color          | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | Threshold Color                           |
| --voucher-action-btn-color         | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>                                   | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>                                   | Operation button color                    |
| --voucher-action-bg                | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | Operation background color                |
| --voucher-action-left-bg           | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | Operation left background color           |
| --voucher-action-left-threshold-bg | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | Operation Left Threshold Background Color |
| --voucher-action-right-color       | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | Operation right color                     |
| --voucher-action-right-title-color | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | Manipulation Right Title Color            |
| --voucher-action-right-desc-color  | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.8); color: #ffffff;">rgba(255, 255, 255, 0.8)</div> | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.8); color: #ffffff;">rgba(255, 255, 255, 0.8)</div> | Operation right description color         |
| --voucher-item-right-title-color   | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | Item right title color (duplicate)        |
