---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Conversations 管理会话

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

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
      { key: '1', label: '给我推荐一首歌', description: '这是会话的部分富文本信息描述', icon: 'https://randomuser.me/api/portraits/thumb/women/4.jpg', timestamp: '10:23', disabled: false },
      { key: '2', label: '请根据图片里的提示，写一篇小学二年级的数学题目', description: '这首歌来自英国歌手艾德·希兰旋律轻快，歌曲写自上个世纪落日', icon: '', timestamp: '10:22', disabled: false },
      { key: '3', label: '禁用无法点击此条', description: '这是会话的部分富文本信息描述', icon: '', timestamp: '10:21', disabled: true },
      { key: '4', label: '菜单禁用无法滑动', description: '这是会话的部分富文本信息描述', icon: '', timestamp: '10:18', disabled: false, disabledMenu: true },
      { key: '5', label: '给我推荐一首歌', description: '这是会话的部分富文本信息描述', icon: '', timestamp: '09:11', disabled: false }
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

### Demo 代码

<code src='../../copilot-demo/pages/Conversations/index'></code>

## API

### Conversations

以下表格介绍了 Conversations 组件的 API 属性：

| 属性                       | 说明         | 类型                                                                                     | 默认值 |
| -------------------------- | ------------ | ---------------------------------------------------------------------------------------- | ------ |
| className                  | 类名         | string                                                                                   | -      |
| items                      | 会话列表     | [Conversation](#conversation)[]                                                          | []     |
| menus                      | 会话操作菜单 | [MenuItem](#menuitem) []                                                                 | []     |
| #if ALIPAY onItemTap       | 提示点击回调 | (item: [Conversation](#conversation),index:number) => void;                              | -      |
| #if WECHAT binditemtap     | 提示点击回调 | (item: [Conversation](#conversation),index:number) => void;                              | -      |
| #if ALIPAY onMenuItemTap   | 提示点击回调 | (item: {menuInfo:[MenuItem](#menuitem),itemInfo:[Conversation](#conversation)}) => void; | -      |
| #if WECHAT bindmenuitemtap | 提示点击回调 | (item: {menuInfo:[MenuItem](#menuitem),itemInfo:[Conversation](#conversation)}) => void; | -      |

### Conversation

| 属性         | 说明                     | 类型    | 默认值 |
| ------------ | ------------------------ | ------- | ------ |
| key          | 唯一标识用于区分每个会话 | string  | -      |
| label        | 会话名称                 | string  | -      |
| description  | 描述                     | string  | -      |
| icon         | 会话图标                 | string  | -      |
| timestamp    | 会话时间戳               | string  | -      |
| disabled     | 是否禁用点击             | boolean | false  |
| disabledMenu | 是否菜单禁用滑动         | boolean | false  |

### MenuItem

| 属性        | 说明                                      | 类型   | 默认值 |
| ----------- | ----------------------------------------- | ------ | ------ |
| text        | 按钮文字                                  | string | -      |
| width       | 按钮宽度                                  | number | 150    |
| bgColor     | 按钮背景颜色                              | string | -      |
| color       | 按钮字体颜色                              | string | #fff   |
| confirmText | 二次确认的文案描述；若为空，则展示 `text` | string | -      |

### 插槽 slot

| 插槽名称 | 说明           |
| -------- | -------------- |
| 默认插槽 | 列表项内容插槽 |
