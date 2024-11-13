---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# TabBar 底部导航栏

用于在不同页面之间进行切换。

## 引入

在 `index.json` 中引入组件
```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/TabBar/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/TabBar/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<tab-bar items="{{tabs}}" />
<tab-bar items="{{tabs}}" activeStyle="color:red;" />
#if ALIPAY
<tab-bar items="{{tabs}}" current="{{current}}" onChange="handleChange" />
#endif
#if WECHAT
<tab-bar items="{{tabs}}" current="{{current}}" bind:change="handleChange" />
#endif
```

```js
Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],
    current: 0,
  },
  handleChange(index) {
    console.log(index);
  },
});
```

### Demo 代码

<code src='../../demo/pages/TabBar/index'></code>

## API

| 属性            | 说明                                                    | 类型                    | 默认值 |
| --------------- | ------------------------------------------------------- | ----------------------- | ------ |
| activeClassName | 选项卡激活类名                                          | string                  | -      |
| activeStyle     | 选项卡激活样式                                          | string                  | -      |
| className       | 类名                                                    | string                  | -      |
| current         | 选中项                                                  | number                  | -      |
| defaultCurrent  | 初始选中项                                              | number                  | 0      |
| icon            | 选项卡图标作用域插槽，接收 item、index、active 参数     | slot                    | -      |
| items           | 底部图标配置                                            | [TabItem](#tabitem)[] | []     |
| style           | 样式                                                    | string                  | -      |
| text            | 选项卡底部文字作用域插槽，接收 item、index、active 参数 | slot                    | -      |
| #if ALIPAY onChange    | Tab 切换时触发回调 | `(index: number) => void` | -      |
| #if WECHAT bind:change  | Tab 切换时触发回调 | `(index: number) => void` | -     |


### TabItem

| 参数       | 说明                                               | 类型   | 默认值 |
| ---------- | -------------------------------------------------- | ------ | ------ |
| icon       | 底部图标，支持 [Icon](./Icon) 或图片地址           | string | -      |
| activeIcon | 激活状态的底部图标，支持 [Icon](./Icon) 或图片地址 | string | -      |
| text       | 底部文字                                           | string | -      |
| badge      | 徽标类型，参见 [Badge](./Badge) 组件               | object | -      |
