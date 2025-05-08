---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# PageContainer

The page-level container component provides common capabilities such as loading status, page exception handling, top/bottom safe margins, and so on, out of the box.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
  "ant-page": "antd-mini/es/PageContainer/index"
}
```

## Code Sample

### Basic use

```xml
<ant-page
  loading="{{loading}}"
  status="{{status}}"
  title="{{title}}"
  message="{{message}}"
  image="{{image}}"
  safeArea="{{safeArea}}"
  loadingColor="#ccc"
  loadingSize="medium"
  loadingType="spin"
  actionText="refresh"
  secondaryActionText="internet error"
  onActionTap="handleRefresh"
  onSecondaryActionTap="handleSwitchToDisconnected"
>
  <view class="content">
   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </view>
</ant-page>
```

```js
Page({
  data: {
    loading: true,
    status: 'failed',
    safeArea: 'both',
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        loading: false,
      });
    }, 1000);
  },
  handleRefresh() {
    my.reLaunch({
      url: 'index',
      fail(e) {
        console.log(e);
      },
    });
  },
  handleSwitchToDisconnected() {
    this.setData({
      status: 'disconnected',
      title: undefined,
      message: undefined,
      image: '',
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/PageContainer/index'></code>

## API

| Property                 | Description                                                    | Type             | Default Value   |
| -------------------- | ------------------------------------------------------- | ---------------- | -------- |
| className            | Class Name                                                    | string           | -        |
| style                | Style                                                    | string           | -        |
| safeArea             | Location of margin inside the safety zone,`top`、`bottom`、`both`               | string           | `both`   |
| loading              | Loading                                                  | boolean \| slot  | false    |
| loadingType          | Load style type,`spin`、`mini`                            | string           | `spin`   |
| loadingSize          | Load Style Size,`small`、`medium`、`large`、`x-large`     | string           | `medium` |
| loadingColor         | Load Style Color                                            | string           | '#ccc'   |
| status               | Page exception status,`failed`、`busy`、`disconnected`、`empty` | string \| slot   | -        |
| image                | Page Exception Status Custom Image                                  | string           | -        |
| title                | Page Exception Status Custom Title                                  | string           | -        |
| message              | Page Exception Status Custom Description                                  | string           | -        |
| actionText           | Page Exception Status Button Copy                                    | string           | -        |
| secondaryActionText  | Page Exception Secondary Button Copy                                | string           | -        |
| extra                | Page Exception Custom Button                                  | slot             | -        |
| onActionTap          | Page abnormal state button click event                                | (e: any) => void | -        |
| onSecondaryActionTap | Page Exception Status Secondary Button Click Event                            | (e: any) => void | -        |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Default Value                                                                            | Dark Mode Default                                                                                    | Remarks             |
| --------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --page-container-background-color | <div style="width: 150px; height: 30px; background-color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Page Container Background Color |
