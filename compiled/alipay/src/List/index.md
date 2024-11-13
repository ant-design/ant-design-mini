---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# List 列表

通用列表可以干净高效地承载文字、列表、图片、段落等元素。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/List/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/List/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<ant-list
  header="基础用法"
  radius="{{true}}"
>
  <ant-list-item>1</ant-list-item>
  <ant-list-item>2</ant-list-item>
  <ant-list-item>3</ant-list-item>
</ant-list>
```

### 列表项配置
```xml
<ant-list header="列表项配置">
  <ant-list-item
    className="ant-list-item"
    disabled="{{true}}"
    image="PayCircleOutline"
    brief="总资产数量"
    extra="详细信息"
    showDivider="{{true}}"
  >
    总资产
  </ant-list-item>
  <ant-list-item
    style=""
    image="SetOutline"
    arrow="right"
    extraBrief="详细信息"
  >
    设置
  </ant-list-item>
</ant-list>
```

### 列表项可点击
```xml
<ant-list
  header="可点击列表"
  radius="{{radius}}"
>
  <ant-list-item
    image="PayCircleOutline"
#if ALIPAY
    onTap="handleTap"
#endif
#if WECHAT
    bind:tap="handleTap"
#endif
    brief="总资产数量"
    extra="详细信息"
    data-info="总资产"
  >
    总资产
  </ant-list-item>
  <ant-list-item
    image="SetOutline"
    arrow="right"
    extraBrief="详细信息"
#if ALIPAY
    catchTap="handleTap"
#endif
#if WECHAT
    bind:catchTap="handleTap"
#endif
    data-info="设置"
  >
    设置
  </ant-list-item>
</ant-list>
```

### Demo 代码

<code src='../../demo/pages/List/index'></code>

## API

### List

| 属性      | 说明       | 类型           | 默认值 |
| --------- | ---------- | -------------- | ------ |
| className | 类名       | string         | -      |
| footer    | 底部说明   | string \| slot | -      |
| header    | 头部说明   | string \| slot | -      |
| radius    | 是否带圆角 | boolean        | false  |
| style     | 样式       | string         | -      |

### ListItem

| 属性        | 说明                                                     | 类型               | 默认值 |
| ----------- | -------------------------------------------------------- | ------------------ | ------ |
| arrow       | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean  | -      |
| brief       | 第二行信息                                               | string \| slot     | -      |
| className   | 类名                                                     | string             | -      |
| disabled    | 是否禁用                                                 | boolean            | false  |
| extra       | 右侧额外内容                                             | string \| slot     | -      |
| extraBrief  | 右侧辅助信息                                             | string \| slot     | -      |
| image       | 左侧图片                                                 | string             | -      |
| radius      | 是否带圆角                                               | boolean            | false  |
| showDivider | 是否显示下划线                                           | boolean            | true   |
| style       | 样式                                                     | string             | -      |
| title       | 标题信息                                                 | string \| slot     | -      |
| #if ALIPAY catchTap    | 点击时触发的回调                                         | (e: Event) => void |
| #if ALIPAY onTap       | 点击时触发的回调                                         | (e: Event) => void |
| #if WECHAT bind:catchTap    | 点击时触发的回调                                         | (e: Event) => void |
| #if WECHAT bind:tap       | 点击时触发的回调                                         | (e: Event) => void |


### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                   | 默认值                                                                                            | 备注             |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ---------------- |
| --list-header-color      | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 列表头部颜色     |
| --list-footer-color      | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 列表底部颜色     |
| --list-background-color  | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 列表背景颜色     |
| --list-content-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 列表内容文本颜色 |
| --list-extra-brief-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 列表额外简述颜色 |
| --list-item-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | 列表项边框颜色   |
| --list-item-text-color   | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | 列表项文本颜色   |
