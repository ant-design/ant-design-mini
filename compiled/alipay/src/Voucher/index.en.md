---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Voucher

## When to use

- Universal Coupon Component

## Code Sample

### Basic Usage

<code src="../../demo/pages/Voucher/index"></code>

## API
| Property     | Type           | Required | Default Value     | Description      |
|--------------|----------------|----------|-------------------|------------------|
| className    | `string`       | false    | ``          | Class Name       |
| size | `small、large`  | false    | `large` | Coupon style     |
| direction | `horizontal、vertical、multipleColumn` | false    | `horizontal` | The arrangement method when there are multiple coupons |
| dataSource | [Item][]       | yes      | [] | DataSource       |
| styles | `{}`           | false    | [] | Custom style（title、desc、money、threshold） |

### Item

| Property             | Type             | Default Value     | Description              |
|----------------| ---------------- |---------|-----------------|
| title          | string           | -       | The title of the coupon         |
| desc           | string           | -       | The description of the coupon        |
| money          | string           | -       | The amount of the coupon        |
| moneyUnit      | string           | '元'     | The unit description for the coupon, such as: xx yuan, xx% off |
| threshold      | string           | -       | The restriction text of the coupon          |
| disabled       | bool             | `false` | Whether to disable            |
| actionAreaInfo | [ActionAreaInfo] | -       | Action area            |

### ActionAreaInfo

| Property             | Type             | Default Value     | Description              |
| -------- | ------ |---------| -------------------------------- |
| disabled | bool   | `false` | Whether to disable                         |
| text     | string | -       | Button Text                         |
| imageUrl | string | -       | The completed image; when there is an image, do not display the button. |

## Event

| Event Name       | Description                           | Type                  |
| ------------ | ------------------------------ |-----------------------|
| onBtnTap     | Click the button to trigger this callback.           | `(item, event)=>void` |
| onTap        | deprecated, use onBtnTap instead | `(item, event)=>void` |
| onVoucherTap | Click the card to trigger this callback.           | `(item, event)=>void` |

## SLOT

| Name                | Description     |
|---------------------| -------- |
| voucher-action-area | Action area |
