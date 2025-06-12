---
nav:
  path: /copilot
group:
  title: General
  order: 1
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Conversations

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-conversations": "antd-mini/es/Conversations/index"
#endif
#if WECHAT
  "ant-conversations": "antd-mini/Conversations/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-conversations
  items="{{items}}"
  menus="{{menus}}"
#if ALIPAY
  onItemTap="handleItemTap"
  onMenuItemTap="handleMenuItemTap"
#endif
#if WECHAT
  binditemtap="handleItemTap"
  bindmenuitemtap="handleMenuItemTap"
#endif
/>
```

```js
Page({
  data: {
    items: [
      { key: '1', label: '给我推荐一首歌', description: '这是会话的部分富文本信息Description', icon: 'https://randomuser.me/api/portraits/thumb/women/4.jpg', timestamp: '10:23', disabled: false },
      { key: '2', label: '请根据图片里的提示，写一篇小学二年级的数学题目', description: '这首歌来自英国歌手艾德·希兰旋律轻快，歌曲写自上个世纪落日', icon: '', timestamp: '10:22', disabled: false },
      { key: '3', label: '禁用无法点击此条', description: '这是会话的部分富文本信息Description', icon: '', timestamp: '10:21', disabled: true },
      { key: '4', label: '菜单禁用无法滑动', description: '这是会话的部分富文本信息Description', icon: '', timestamp: '10:18', disabled: false, disabledMenu: true },
      { key: '5', label: '给我推荐一首歌', description: '这是会话的部分富文本信息Description', icon: '', timestamp: '09:11', disabled: false }
    ],
    menus: [
      { text: '编辑', bgColor: '#FFA91B', color: '#fff', width: 160 },
      { text: '删除', bgColor: '#FF2B00', color: '#fff', width: 160 }
    ]
  },
  handleItemTap(i) {
    let item = i;
#if ALIPAY
    my.showToast({ content: item.key });
#endif
#if WECHAT
    item = i.detail[0];
    wx.showToast({ title: item.key });
#endif
  },
  handleMenuItemTap(menuItem, item) {
#if ALIPAY
    console.log(menuItem, item);
    my.showToast({ content: `菜单${menuItem.index}_列表项${item.key}` });
#endif
#if WECHAT
    console.log(menuItem.detail[0], menuItem.detail[1]);
    wx.showToast({
      title: `菜单${menuItem.detail[0].index}_列表项${menuItem.detail[1].key}`,
    });
#endif
  },
});
```

### Demo Code

<code src='../../copilot-demo/pages/Conversations/index'></code>

## API

### Conversations

The following table describes the API properties for Conversations components:

| Property                       | Description         | Type                                                                                     | Default Value |
| -------------------------- | ------------ | ---------------------------------------------------------------------------------------- | ------ |
| className                  | Class Name         | string                                                                                   | -      |
| items                      | Session List     | [Conversation](#conversation)[]                                                          | []     |
| menus                      | Session Action Menu | [MenuItem](#menuitem) []                                                                 | []     |
| #if ALIPAY onItemTap       | Prompt for click callback | (item: [Conversation](#conversation),index:number) => void;                              | -      |
| #if WECHAT binditemtap     | Prompt for click callback | (item: [Conversation](#conversation),index:number) => void;                              | -      |
| #if ALIPAY onMenuItemTap   | Prompt for click callback | (item: {menuInfo:[MenuItem](#menuitem),itemInfo:[Conversation](#conversation)}) => void; | -      |
| #if WECHAT bindmenuitemtap | Prompt for click callback | (item: {menuInfo:[MenuItem](#menuitem),itemInfo:[Conversation](#conversation)}) => void; | -      |

### Conversation

| Property         | Description                     | Type    | Default Value |
| ------------ | ------------------------ | ------- | ------ |
| key          | Unique identification to distinguish each session | string  | -      |
| label        | Session Name                 | string  | -      |
| description  | Description                     | string  | -      |
| icon         | Session icon                 | string  | -      |
| timestamp    | Session timestamp               | string  | -      |
| disabled     | Whether to disable click             | boolean | false  |
| disabledMenu | Whether the menu disables sliding         | boolean | false  |

### MenuItem

| Property        | Description                                      | Type   | Default Value |
| ----------- | ----------------------------------------- | ------ | ------ |
| text        | Button Text                                  | string | -      |
| width       | Button width                                  | number | 150    |
| bgColor     | Button background color                              | string | -      |
| color       | Button Font Color                              | string | #fff   |
| confirmText | Copy description for secondary confirmation; if blank, display `text` | string | -      |

### Slot

| Slot Name | Description           |
| -------- | -------------- |
| Default slot | List Item Content Slot |
