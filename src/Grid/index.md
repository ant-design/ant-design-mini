---
nav:
  path: /components
group:
  title: 布局
  order: 1
toc: 'content'
---

# Grid 宫格

宫格用于业务中多个子功能的导航，相比于列表的形式，具有更高的屏效。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

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

### 3 列-带描述

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

### 元素横向布局

```xml
<ant-grid
  items="{{items}}"
  columns="{{3}}"
  gridItemLayout="horizontal"
/>
```

### 自定义

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
    第{{props.index + 1}}项
  </view>
  <view
    slot="description"
    slot-scope="props">
    描述{{props.index + 1}}
  </view>
</ant-grid>

#endif
#if WECHAT
由于微信小程序平台的限制, Grid 在微信暂时不支持 Slot
#endif
```

### Demo 代码

<code src='../../demo/pages/Grid/index'></code>

## API

| 属性                        | 说明                                                   | 类型                                  | 默认值     |
| --------------------------- | ------------------------------------------------------ | ------------------------------------- | ---------- |
| className                   | 类名                                                   | string                                | -          |
| columns                     | 每行展示的元素个数，`default` 模式生效                 | number                                | 5          |
| description                 | 描述插槽，接收 value、index                            | slot                                  | -          |
| gridItemLayout              | item 布局，可选 `vertical`（垂直）`horizontal`（水平） | string                                | `vertical` |
| icon                        | 图标插槽，接收 value、index                            | slot                                  | -          |
| iconSize                    | 图标尺寸，单位 px                                      | number                                | -          |
| iconStyle                   | 图标样式类型，可选 `normal` `circle`                   | string                                | `normal`   |
| items                       | 内容文字                                               | [GridItem](#griditem)[]               | -          |
| mode                        | 样式类型，可选 `default`（平铺）`scroll`（滑动）       | string                                | `default`  |
| paginationFillColor         | 分页符背景色，`scroll` 模式生效                        | string                                | -          |
| paginationFrontColor        | 分页符颜色，`scroll` 模式生效                          | string                                | -          |
| showDivider                 | 是否展示分割线                                         | boolean                               | -          |
| style                       | 样式                                                   | string                                | -          |
| title                       | 标题插槽，接收 value、index                            | slot                                  | -          |
| #if ALIPAY onTap            | 点击每个元素触发                                       | (item: [GridItem](#griditem)) => void |            |
| #if ALIPAY onFirstAppear    | 当前元素首次可见面积达到 50% 时触发                    | (item: [GridItem](#griditem)) => void |            |
| #if WECHAT bindtap         | 点击每个元素触发                                       | (item: [GridItem](#griditem)) => void | -          |
| #if WECHAT bindfirstappear | 当前元素首次可见面积达到 50% 时触发                    | (item: [GridItem](#griditem)) => void | -          |

#### GridItem

| 参数        | 说明                                                  | 类型   | 默认值 |
| ----------- | ----------------------------------------------------- | ------ | ------ |
| description | 描述                                                  | string | -      |
| icon        | 图标，支持图片和 [Icon](./Icon)                       | string | -      |
| iconStyle   | 图标样式类型，优先级高于 grid，可选 `normal` `circle` | string | -      |
| title       | 标题                                                  | string | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --ant-grid-title-color       | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 网格标题颜色 |
| --ant-grid-description-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 网格描述颜色 |
| --ant-grid-border-color      | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 网格边框颜色 |
