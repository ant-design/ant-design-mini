---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
---

# PageContainer 页面容器

页面级容器组件，提供加载状态、页面异常处理、顶部/底部安全边距等常用能力，开箱即用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
  "ant-page": "antd-mini/es/PageContainer/index"
}
```

## 代码示例

### 基本使用

```xml
<ant-page
  loading="{{loading}}"
  status="{{status}}"
  title="{{title}}"
  message="{{message}}"
  image="{{image}}"
  safeArea="{{safeArea}}"
  loadingColor="#ccc"
  loadingSize="medium"
  loadingType="spin"
  actionText="refresh"
  secondaryActionText="internet error"
  onActionTap="handleRefresh"
  onSecondaryActionTap="handleSwitchToDisconnected"
>
  <view class="content">
   minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </view>
</ant-page>
```

```js
Page({
  data: {
    loading: true,
    status: 'failed',
    safeArea: 'both',
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        loading: false,
      });
    }, 1000);
  },
  handleRefresh() {
    my.reLaunch({
      url: 'index',
      fail(e) {
        console.log(e);
      },
    });
  },
  handleSwitchToDisconnected() {
    this.setData({
      status: 'disconnected',
      title: undefined,
      message: undefined,
      image: '',
    });
  },
});
```

### Demo 代码

<code src='../../demo/pages/PageContainer/index'></code>

## API

| 属性                 | 说明                                                    | 类型             | 默认值   |
| -------------------- | ------------------------------------------------------- | ---------------- | -------- |
| className            | 类名                                                    | string           | -        |
| style                | 样式                                                    | string           | -        |
| safeArea             | 安全区内边距位置，`top`、`bottom`、`both`               | string           | `both`   |
| loading              | 加载中                                                  | boolean \| slot  | false    |
| loadingType          | 加载样式类型，`spin`、`mini`                            | string           | `spin`   |
| loadingSize          | 加载样式大小，`small`、`medium`、`large`、`x-large`     | string           | `medium` |
| loadingColor         | 加载样式颜色                                            | string           | '#ccc'   |
| status               | 页面异常状态，`failed`、`busy`、`disconnected`、`empty` | string \| slot   | -        |
| image                | 页面异常状态自定义图片                                  | string           | -        |
| title                | 页面异常状态自定义标题                                  | string           | -        |
| message              | 页面异常状态自定义描述                                  | string           | -        |
| actionText           | 页面异常状态按钮文案                                    | string           | -        |
| secondaryActionText  | 页面异常状态次要按钮文案                                | string           | -        |
| extra                | 页面异常状态自定义按钮                                  | slot             | -        |
| onActionTap          | 页面异常状态按钮点击事件                                | (e: any) => void | -        |
| onSecondaryActionTap | 页面异常状态次要按钮点击事件                            | (e: any) => void | -        |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 默认值                                                                            | 深色模式默认值                                                                                    | 备注             |
| --------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --page-container-background-color | <div style="width: 150px; height: 30px; background-color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 页面容器背景颜色 |
