---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Card

Base card container. When you need to carry text, lists, pictures, paragraphs and other content, use Card card containers to facilitate users to browse.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-card": "antd-mini/es/Card/index"
#endif
#if WECHAT
  "ant-card": "antd-mini/Card/index"
#endif
}
```

## Code Sample

### Basic Usage

```xml
<ant-card
#if ALIPAY
  onOperateClick="handleLinkClick"
#endif
#if WECHAT
  bindoperateclick="handleLinkClick"
#endif
  title="title"
  operateText="operate"
>
  <view>
    I am the card content
  </view>
</ant-card>
```

### Content Separator

```xml
<ant-card
  divider="{{true}}"
  title="title"
  operateText="operate"
>
  <view>
    Title Content with Split Line
  </view>
</ant-card>
```

### Title ceiling

```xml
<ant-card
  title="title"
  headSticky="{{true}}"
#if ALIPAY
  onTitleSticky="handleTitleSticky"
#endif
#if WECHAT
  bindtitlesticky="handleLinkClick"
#endif
>
  <view style="height: 400px">
    Simulate a long card content
  </view>
</ant-card>
```

### Card Foldable

```xml
<ant-card
  title="title"
  needFold="{{true}}"
>
  <view>
    Content area can be expanded/collapsed
  </view>
</ant-card>
```

### Custom Action Buttons

```xml
<ant-card
  title="title"
  operateText="operateText"
>
  <view slot="headerRight">
    Custom
  </view>
  <view>
    I am the card content
  </view>
</ant-card>
```

### Demo Code

<code src="../../demo/pages/Card/index"></code>

## Property

| Property                         | Description                                                                | Type                        | Default Value |
| ---------------------------- | ------------------------------------------------------------------- | --------------------------- | ------ |
| className                    | Container className                                                      | string                      | -      |
| config                       | Card Configuration                                                            | [ICardConfig](#ICardConfig) | -      |
| title                        | Card Title                                                            | string                      | -      |
| divider                      | Whether there is a dividing line                                                        | boolean                     | false  |
| needFold                     | Whether a foldable card is required, the operateText needs to be empty, otherwise it needs to be manually unfolded and stowed. | boolean                     | false  |
| foldStatus                   | Whether it is collapsed or not, passing true will cause it to be collapsed, regardless of whether the needFold is true or not.             | boolean                     | false  |
| headSticky                   | Does the title need ceiling                                                    | boolean                     | false  |
| stickyTransparentTitle       | Whether the ceiling is on the transparent head page, if so, the height of the transparent head will be calculated automatically.                      | boolean                     | false  |
| stickyTop                    | How much distance should the title be from the top when it is sucked                                  | string                      | -      |
| operateText                  | Default title bar right action button text                                          | string                      | -      |
| #if ALIPAY onOperateClick    | Default title bar right operation button click callback                                      | () => void                  | -      |
| #if ALIPAY onFoldChange      | Default title bar right collapse expand button click callback                                  | () => void                  | -      |
| #if ALIPAY onTitleSticky     | Whether the title area is the callback when the ceiling changes.                                      | (status) => void            | -      |
| #if WECHAT bindoperateclick | Default title bar right operation button click callback                                      | () => void                  | -      |
| #if WECHAT bindfoldchange   | Default title bar right collapse expand button click callback                                  | () => void                  | -      |
| #if WECHAT bindtitlesticky  | Whether the title area is the callback when the ceiling changes.                                      | (status) => void            | -      |

### ICardConfig

| Configuration Item      | Description                                  | Type   | Default Value |
| ----------- | ------------------------------------- | ------ | ------ |
| foldTapArea | Collapse behavior trigger area, optional`btn`、`header` | string | 'btn'  |

## Slot

| Name        | Description                 |
| ----------- | -------------------- |
| Default Slot    | Card Content             |
| headerTitle | Custom Title Bar Left Title |
| headerRight | Customize the right content of the title bar |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                        | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks             |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --ant-card-bg                 | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Card background color     |
| --ant-card-header-title-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #000000;">#c5cad1</div> | Card head title color |
| --ant-card-header-link-color  | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Card Head Link Color |
| --ant-card-fold-btn-color     | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Card Fold Button Color |
