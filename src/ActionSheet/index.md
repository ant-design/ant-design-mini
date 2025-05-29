---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# ActionSheet 动作面板

从底部弹出的动作菜单面板。由用户操作触发，提供一组与操作相关的两个或多个选项，让用户在不离场的情况下完成操作。相比于对话框，动作面板的位置更适合于在大屏幕时代单手操作的场景。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-action-sheet": "antd-mini/es/ActionSheet/index"
#endif
#if WECHAT
  "ant-action-sheet": "antd-mini/ActionSheet/index"
#endif
}
```

## 代码示例

### 基本使用

> `ant-action-sheet` 组件必须通过 `visible` 属性控制显示/隐藏状态。`actions` 属性传入数据驱动选项渲染。

```xml
<ant-action-sheet
  title="choose your operation"
  visible="{{visible}}"
  actions="{{actions}}"
#if ALIPAY
  onAction="handleAction"
  onClose="handleClose"
#endif
#if WECHAT
  bindaction="handleAction"
  bindclose="handleClose"
#endif
/>

<ant-button
  inline="{{true}}"
  size="large"
#if ALIPAY
  onTap="handleOpen"
#endif
#if WECHAT
  bindtap="handleOpen"
#endif
>
  打开面板
</ant-button>
```

```js
Page({
  data: {
    visible: true,
    actions: [
      {
        text: 'copy',
        key: 'copy',
      },
      {
        text: 'modify',
        key: 'modify',
      },
    ],
  },
  handleOpen() {
    this.setData({
      visible: true,
    });
  },
  handleClose(e) {
    this.setData({
      visible: false,
    });
  },
  handleAction(item, index, e) {
#if ALIPAY
    if (item.key === 'delete') {
      my.confirm({
        content: 'are you sure?',
      });
      return;
    }
    my.alert({ content: `you clicked ${item.key}` });
#endif
#if WECHAT
    const [clickItem, clickIndex] = item.detail;
    wx.showToast({ title: `you clicked ${clickItem.key}(${clickIndex})` });
#endif
  },
});
```

### 选项状态

> [actions](#actionsheetitem) 的每一项提供 `icon` `danger` `description` `disabled` 用来设置选项状态。

```xml
<ant-action-sheet
  title="请选择你要进行的操作"
  actions="{{actions}}"
/>
```

```js
Page({
  data: {
    actions: [
      {
        text: 'copy',
        key: 'copy',
        description: 'select copy content',
      },
      {
        text: 'modify',
        key: 'modify',
        disabled: true,
      },
      {
        text: 'delete',
        key: 'delete',
        danger: true,
      },
      {
        text: 'backup',
        key: 'backup',
        description: 'select backup content',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*I0oNS4RCQzUAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: 'save',
        key: 'save',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*BNczQ7hmp2gAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: 'sync',
        key: 'sync',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*eRaVSrV56dIAAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
```

### Demo 代码

<code src='../../demo/pages/ActionSheet/index'></code>

## API

| 属性                   | 说明                               | 类型                                                                                                                                        | 默认值 |
| ---------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| actions                | 面板选项列表                       | [ActionSheetItem](#actionsheetitem)[]                                                                                                       | []     |
| cancelText             | 取消按钮文字                       | string                                                                                                                                      | 取消   |
| className              | 类名                               | string                                                                                                                                      | -      |
| style                  | 样式                               | string                                                                                                                                      | -      |
| title                  | 标题                               | string                                                                                                                                      | -      |
| visible                | 是否展开                           | boolean                                                                                                                                     | false  |
| zIndex                 | 弹窗层级                           | number                                                                                                                                      | 998    |
| #if ALIPAY onClose     | 关闭时触发                         | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                           | -      |
| #if ALIPAY onAction    | 点击选项时触发，禁用状态下不会触发 | (item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindclose  | 关闭时触发                         | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                           | -      |
| #if WECHAT bindaction | 点击选项时触发，禁用状态下不会触发 | (item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### ActionSheetItem

| 属性        | 说明         | 类型    | 默认值 |
| ----------- | ------------ | ------- | ------ |
| text        | 文本         | string  | -      |
| icon        | 图标         | -       | -      |
| danger      | 是否危险模式 | boolean | false  |
| description | 描述         | string  | -      |
| disabled    | 是否禁用     | boolean | false  |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注           |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| --actionsheet-danger-color   | <div style="width: 150px; height: 30px; background-color: #ff3141;">#ff3141</div>                 | <div style="width: 150px; height: 30px; background-color: #ff4a58;">#ff4a58</div>                 | 危险颜色       |
| --actionsheet-title-color    | <div style="width: 150px; height: 30px; background-color: #999999;">#999999</div>                 | <div style="width: 150px; height: 30px; background-color: #616161;">#616161</div>                 | 标题颜色       |
| --actionsheet-item-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 条目颜色       |
| --actionsheet-item-active-bg | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #fff;">#2b2b2b</div> | 条目激活背景色 |
| --activesheet-item-cancel-bg | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #fff;">#121212</div> | 条目取消背景色 |
