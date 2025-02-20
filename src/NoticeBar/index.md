---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: content
---

# NoticeBar 通告栏

展示一组消息通知。通常用于当前页面内信息的通知，是一种较醒目的页面内通知方式。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-notice": "antd-mini/es/NoticeBar/index"
#endif
#if WECHAT
  "ant-notice": "antd-mini/NoticeBar/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
 <ant-notice type="default">default</ant-notice>
 <ant-notice type="info">info</ant-notice>
 <ant-notice type="error">error</ant-notice>
```

### 可关闭通告栏

```xml
<ant-notice mode="closeable">
  这条通知可以关闭
</ant-notice>
```

### 多行展示通告栏
```xml
<ant-notice type="default" ellipsisRow="{{2}}">
  文本溢出时，开启换行。文字不够继续添加文字凑数。文字不够继续添加文字凑数。
</ant-notice>
```

### 可滚动通告栏

```xml
<ant-notice
  type="default"
  enableMarquee="{{true}}"
  loop="{{true}}"
  onTap="handleTapLink"
  mode="link">
  文本溢出时，开启循环滚动。文字不够继续添加文字凑数。
</ant-notice>
```

### 自定义

```xml
<ant-notice type="primary" icon="GlobalOutline" mode="link">
  自定义左侧图标
</ant-notice>

<ant-notice type="primary" mode="link"
  icon="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
>自定义左侧图标图片</ant-notice>

<ant-notice mode="link" onTap="handleTapLink">
  自定义右侧按钮
  <view slot="extra" class="extra">
    <view onTap="handleTapAction">不再提示</view>
    <view onTap="handleTapAction">查看详情</view>
  </view>
</ant-notice>
```

### Demo 代码

<code src='../../demo/pages/NoticeBar/index'></code>

## API

| 属性          | 说明                                                                                           | 类型         | 默认值  |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------ | ------- |
| className     | 类名                                                                                           | string       | -       |
| enableMarquee | 是否开启滚动动画                                                                               | boolean      | false   |
| ellipsisRow     | 文案多行展示最大行数，和`enableMarquee`不能同时配置             | number\|boolean       | false       |
| extra         | 自定义右侧内容                                                                                 | slot         | -       |
| icon          | 左侧 icon，支持所有内置 iconType 和自定义链接，也支持自定义 slot （微信版本需要设置 slotIcon） | string       | -       |
| loop          | 是否循环滚动，`enableMarquee` 为 true 时有效                                                   | boolean      | false   |
| mode          | 通告类型，`link` 表示连接，整行可点；`closeable` 表示点击 x 可以关闭；不填时表示右侧没有图标   | string       | -       |
| style         | 样式                                                                                           | string       | -       |
| title         | 标题                                                                                           | string\|slot | -       |
| type          | 类型，可选 `default`, `error`, `primary`, `info`                                               | string       | default |
| slotIcon      | 微信版本需要通过此字段启用 icon 位置的插槽                                                     | boolean      | -       |
| onTap         | 点击通知栏右侧的图标（箭头或者叉），触发回调                                                   | () => void   | -       |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 默认值                                                                                                              | 深色模式默认值                                                                                                                      | 备注             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --notice-background-color         | <div style="width: 150px; height: 40px; background-color: #fff9ed; color: #333;">#fff9ed</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff9ed; color: #000000;">#fff9ed</div>                                   | 通知背景颜色     |
| --notice-border-color             | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #333;">#fff3d9</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #000000;">#fff3d9</div>                                   | 通知边框颜色     |
| --notice-color                    | <div style="width: 150px; height: 40px; background-color: #ff6010;">#ff6010</div>                                   | <div style="width: 150px; height: 40px; background-color: #ff6010; color: #ffffff;">#ff6010</div>                                   | 通知颜色         |
| --notice-error-border-color       | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #333;">#fff3d9</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #000000;">#fff3d9</div>                                   | 错误通知边框颜色 |
| --notice-error-color              | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                   | 错误通知颜色     |
| --notice-error-background-color   | <div style="width: 150px; height: 40px; background-color: #ff3141;">#ff3141</div>                                   | <div style="width: 150px; height: 40px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>                                   | 错误通知背景颜色 |
| --notice-primary-border-color     | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.72);">rgba(22, 119, 255, 0.72)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.72); color: #ffffff;">rgba(22, 119, 255, 0.72)</div> | 主要通知边框颜色 |
| --notice-primary-color            | <div style="width: 150px; height: 40px; background-color: #1677ff;">#1677ff</div>                                   | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                                   | 主要通知颜色     |
| --notice-primary-background-color | <div style="width: 150px; height: 40px; background-color: rgba(208, 228, 255, 1); color: #333;">rgba(208, 228, 255, 1)</div>     | <div style="width: 150px; height: 40px; background-color: rgba(208, 228, 255, 1); color: #000000;">rgba(208, 228, 255, 1)</div>     | 主要通知背景颜色 |
| --notice-info-text-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                   | 信息通知文字颜色 |
| --notice-info-background-color    | <div style="width: 150px; height: 40px; background-color: #666666;">#666666</div>                                   | <div style="width: 150px; height: 40px; background-color: #808080; color: #ffffff;">#808080</div>                                   | 信息通知背景颜色 |
