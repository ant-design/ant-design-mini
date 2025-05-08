---
nav:
  path: /components
group:
  title: Layout
  order: 1
toc: 'content'
---

# Grid

The palace is used for navigation of multiple sub-functions in the business and has a higher screen effect than the form of a list.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-grid": "antd-mini/es/Grid/index"
#endif
#if WECHAT
  "ant-grid": "antd-mini/Grid/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-grid
  items="{{items}}"
  iconSize="{{36}}"
  columns="{{3}}"
/>
```

```js
Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
```

### 3 Columns-With Description

```xml
<ant-grid
  items="{{items3withDesc}}"
  iconSize="{{36}}"
  columns="{{3}}" />
```

```js
Page({
  data: {
    items: [
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
      {
        title: 'title text',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
        description: 'description',
      },
    ],
  },
});
```

### element horizontal layout

```xml
<ant-grid
  items="{{items}}"
  columns="{{3}}"
  gridItemLayout="horizontal"
/>
```

### Custom

```xml
#if ALIPAY
<ant-grid
  items="{{items}}"
  columns="{{5}}">
  <view
    slot="icon"
    slot-scope="props">
    <ant-badge
      a:if="{{props.value.tag}}"
      offsetX="-10px"
      type="text"
      text="{{props.value.tag}}">
      <image
        src="{{props.value.icon}}"
        style="width: 44px; height: 44px" />
    </ant-badge>
    <image
      a:else
      src="{{props.value.icon}}"
      style="width: 44px; height: 44px" />
  </view>
  <view
    slot="title"
    slot-scope="props">
    Item {{props.index 1}}
  </view>
  <view
    slot="description"
    slot-scope="props">
    Description {{props.index 1}}
  </view>
</ant-grid>

#endif
#if WECHAT
由于微信小程序平台的限制, Grid In微信暂时不支持 Slot
#endif
```

### Demo Code

<code src='../../demo/pages/Grid/index'></code>

## API

| Property                        | Description                                                   | Type                                  | Default Value     |
| --------------------------- | ------------------------------------------------------ | ------------------------------------- | ---------- |
| className                   | Class Name                                                   | string                                | -          |
| columns                     | The number of elements displayed per row,`default` Mode effective                 | number                                | 5          |
| description                 | Description slot, receiving value, index                            | slot                                  | -          |
| gridItemLayout              | item layout, optional `vertical`(Vertical)`horizontal`(Horizontal) | string                                | `vertical` |
| icon                        | Icon slot, receiving value, index                            | slot                                  | -          |
| iconSize                    | Icon size in px                                      | number                                | -          |
| iconStyle                   | Icon style type, optional `normal` `circle`                   | string                                | `normal`   |
| items                       | Content Text                                               | [GridItem](#griditem)[]               | -          |
| mode                        | Style type, optional `default`(Tile)`scroll`(Sliding)       | string                                | `default`  |
| paginationFillColor         | Page break background color,`scroll` Mode effective                        | string                                | -          |
| paginationFrontColor        | Page break color,`scroll` Mode effective                          | string                                | -          |
| showDivider                 | Show split line                                         | boolean                               | -          |
| style                       | Style                                                   | string                                | -          |
| title                       | Header slot, receiving value, index                            | slot                                  | -          |
| #if ALIPAY onTap            | Click on each element to trigger                                       | (item: [GridItem](#griditem)) => void |            |
| #if ALIPAY onFirstAppear    | Triggered when the first visible area of the current element reaches 50%                    | (item: [GridItem](#griditem)) => void |            |
| #if WECHAT bindtap         | Click on each element to trigger                                       | (item: [GridItem](#griditem)) => void | -          |
| #if WECHAT bindfirstappear | Triggered when the first visible area of the current element reaches 50%                    | (item: [GridItem](#griditem)) => void | -          |

#### GridItem

| Parameters        | Description                                                  | Type   | Default Value |
| ----------- | ----------------------------------------------------- | ------ | ------ |
| description | Description                                                  | string | -      |
| icon        | icons, support images and [Icon](./Icon)                       | string | -      |
| iconStyle   | Icon style type, with priority higher than grid, optional `normal` `circle` | string | -      |
| title       | Title                                                  | string | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --ant-grid-title-color       | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Grid Title Color |
| --ant-grid-description-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Grid Description Color |
| --ant-grid-border-color      | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Grid Border Color |
