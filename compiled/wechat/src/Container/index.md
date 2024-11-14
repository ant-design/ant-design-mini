---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Container 容器

通用卡片容器。

## 何时使用

当需要承载文字、列表、图片、段落等内容时，使用 Container 容器以方便用户浏览。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-container": "antd-mini/es/Container/index"
#endif
#if WECHAT
  "ant-container": "antd-mini/Container/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<ant-container title="标题">
  <view class="content" />
</ant-container>
```

### 自定义标题
```xml
<ant-container headerInBox="{{ false }}">
  <view slot="title">
    <view class="icon">
      <ant-icon
        type="SmileOutline"
        style="margin-right: 8px" />
      标题
    </view>
  </view>
  <view slot="headerRight">右侧内容</view>
  <view class="content" />
</ant-container>
```
### 


### Demo代码
<code src='../../demo/pages/Container/index'></code>

## API

以下是 `Container` 组件的参数列表：

| 属性        | 说明             | 类型         | 默认值 |
| ----------- | ---------------- | ------------ | ------ |
| className   | 类名             | string       | -      |
| headerRight | 头部右侧内容     | slot         | -      |
| headerInBox | 标题是否在容器中 | boolean      | true   |
| style       | 样式             | string       | -      |
| title       | 标题             | string\|slot | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                            | 备注         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --container-header-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 容器头部颜色 |
| --color-text-assist          | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 辅助文本颜色 |
| --container-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 容器背景颜色 |
