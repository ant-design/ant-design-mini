---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-collapse": "antd-mini/es/Collapse/index"
#endif
#if WECHAT
  "ant-collapse": "antd-mini/Collapse/index"
#endif
}
```

## 代码示例

### Demo 代码

```xml
<ant-collapse
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
```

```js
Page({
  data: {
    items: [
      {
        title: 'item1 title',
        content: 'item1 content',
      },
      {
        title: 'item2 title',
        content: 'item2 content',
      },
      {
        title: 'item3 title',
        content: 'item3 content',
      },
    ],
  },
  onChange(current) {
    console.log(current);
  },
});
```

### 手风琴模式

```xml
<ant-collapse
  accordion="{{true}}"
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
```

### 列表项控制

```xml
<ant-button
  inline="{{true}}"
#if ALIPAY
  onTap="addItems"
#endif
#if WECHAT
  bindtap="addItems"
#endif
>
  添加items
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
        title: 'item1 title',
        content: 'item1 content',
      },
      {
        title: 'item2 title',
        content: 'item2 content',
      },
      {
        title: 'item3 title',
        content: 'item3 content',
      },
    ],
  },
  addItems() {
    const items = [
      ...this.data.items,
      {
        title: this.data.items.length,
        content: 'dynamic item content',
      },
    ];
    this.setData({
      items,
      current: [this.data.items.length],
    });
  },
});
```

### 带 Checkbox

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
由于微信小程序平台的限制, Collapse 在微信暂时不支持 Slot
#endif
```

### Demo 代码

<code src='../../demo/pages/Collapse/index'></code>

## API

| 属性                   | 说明                               | 类型                                                                                             | 默认值 |
| ---------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ | ------ |
| accordion              | 是否是手风琴模式，仅一个内容被展开 | boolean                                                                                          | false  |
| className              | 类名                               | string                                                                                           | -      |
| content                | 内容区插槽，接收 value、index      | slot                                                                                             | -      |
| current                | 当前展开的索引                     | number[]                                                                                         | -      |
| defaultCurrent         | 当前展开的默认索引                 | number[]                                                                                         | []     |
| items                  | 折叠面板列表                       | [CollapseItem](#collapseitem)[]                                                                  | []     |
| style                  | 样式                               | string                                                                                           | -      |
| title                  | 标题插槽，接收 value、index        | slot                                                                                             | -      |
| #if ALIPAY onChange    | 切换面板的回调                     | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bindchange | 切换面板的回调                     | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### CollapseItem

| 属性      | 说明     | 类型    | 默认值 |
| --------- | -------- | ------- | ------ |
| content   | 内容     | string  | -      |
| disabled  | 是否禁用 | boolean | false  |
| title     | 标题     | string  | -      |
| className | 类名     | string  | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。
| 变量名 | 默认值 | 深色模式默认值 | 备注 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| --collapse-title-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | 折叠面板标题背景颜色 |
| --collapse-title-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 折叠面板标题颜色 |
| --collapse-title-icon-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #ffffff;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 折叠面板标题图标颜色 |
| --collapse-content-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | 折叠面板内容背景颜色 |
| --collapse-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #fff;">#2b2b2b</div> | 折叠面板边框颜色 |
| --collapse-node-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 折叠面板节点文本颜色 |
| --collapse-container-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | 折叠面板容器背景颜色 |
