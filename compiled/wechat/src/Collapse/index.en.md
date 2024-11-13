---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Collapse

A content area that can be collapsed/expanded.

- Group and hide complex areas to keep the page tidy.
- An accordion is a special type of folding panel that allows only a single content area to expand.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Collapse/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Collapse/index"
#endif
}
```

## Code Sample

### Demo Code

```xml
<ant-collapse
  items="{{items}}"
#if ALIPAY
  onChange="onChange" 
#endif
#if WECHAT
  bind:change="onChange" 
#endif
/>
```

```js
Page({
  data: {
    items: [
      {
        title: '第一项Title',
        content: '第一项Content'
      },
      {
        title: '第二项Title',
        content: '第二项Content'
      },
      {
        title: '第三项Title',
        content: '第三项Content'
      },
    ]
  },
  onChange(current) {
    console.log(current);
  }
});

```

### Accordion mode
```xml
<ant-collapse
  accordion="{{true}}"
  items="{{items}}"
#if ALIPAY
  onChange="onChange" 
#endif
#if WECHAT
  bind:change="onChange" 
#endif
/>
```

### List Item Control
```xml
<ant-button
  inline="{{true}}"
#if ALIPAY
  onTap="addItems" 
#endif
#if WECHAT
  bind:tap="addItems" 
#endif
>
  Add items
</ant-button>

<ant-collapse
  items="{{items}}"
/>
```
```js
Page({
  data: {
    items: [
      {
        title: '第一项Title',
        content: '第一项Content'
      },
      {
        title: '第二项Title',
        content: '第二项Content'
      },
      {
        title: '第三项Title',
        content: '第三项Content'
      },
    ]
  },
  addItems() {
    const items = [
      ...this.data.items,
      {
        title: this.data.items.length,
        content:
          '动态添加的Content',
      },
    ];
    this.setData({
      items,
      current: [this.data.items.length],
    });
  },
});
```

### With Checkbox

```xml
#if ALIPAY
<ant-collapse items="{{items}}">
  <view
    slot="title"
    slot-scope="item"
    class="title"
  >
    <view>
      <ant-checkbox
        data-index="{{item.index}}"
        onChange="onChange" 
      />
    </view>
    <view>{{item.value.title}}</view>
  </view>

  <view
    slot="content"
    slot-scope="item"
    class="content">
    {{item.value.content}}
  </view>
</ant-collapse>

#endif
#if WECHAT
由于微信小程序平台的限制, Collapse In微信暂时不支持 Slot
#endif
```

### Demo Code

<code src='../../demo/pages/Collapse/index'></code>

## API

| Property           | Description                               | Type                                                                                             | Default Value |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ | ------ |
| accordion      | Accordion mode, only one content is expanded | boolean                                                                                          | false  |
| className      | Class Name                               | string                                                                                           | -      |
| content        | Content area slot, receiving value, index      | slot                                                                                             | -      |
| current        | Current expanded index                     | number[]                                                                                         | -      |
| defaultCurrent | Default index for current expansion                 | number[]                                                                                         | []     |
| items          | Collapse Panel List                       | [CollapseItem](#collapseitem)[]                                                                  | []     |
| style          | Style                               | string                                                                                           | -      |
| title          | Header slot, receiving value, index        | slot                                                                                             | -      |
| onChange       | Toggle Panel Callback                     | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### CollapseItem

| Property      | Description     | Type    | Default Value |
| --------- | -------- | ------- | ------ |
| content   | Content     | string  | -      |
| disabled  | Disable | boolean | false  |
| title     | Title     | string  | -      |
| className | Class Name     | string  | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.
| Variable name | Default Value | Remarks |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --collapse-title-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Collapse Panel Title Background Color |
| --collapse-title-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Collapse Panel Title Color |
| --collapse-title-icon-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #ffffff;">#cccccc</div> | Collapse Panel Title Icon Color |
| --collapse-content-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Collapse Panel Content Background Color |
| --collapse-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | Collapse Panel Border Color |
| --collapse-node-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Collapse Panel Node Text Color |
| --collapse-container-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Folding panel container background color |