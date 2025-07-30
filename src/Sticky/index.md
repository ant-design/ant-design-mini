---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Sticky 粘性吸附
用在需要在滚动中吸附在某些地方的情况。

## 注意事项

Sticky 组件实现依赖了 `position: sticky` 特性，该特性受父元素的影响可能会失效，若遇到 Sticky 组件不生效的情况可根据 [这篇文档](https://developer.mozilla.org/en-US/docs/Web/CSS/position) 检查页面的元素布局。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-sticky": "antd-mini/es/Sticky/index"
#endif
#if WECHAT
  "ant-sticky": "antd-mini/Sticky/index"
#endif
}
```

## 代码示例

### 基础用法

```xml
<ant-sticky>
  <view>
    我会吸顶
  </view>
</ant-sticky>
```

### 指定吸顶高度

```xml
<ant-sticky top="100px">
  <view>
    我会吸顶在距离顶部 100px 的地方
  </view>
</ant-sticky>
```

### 感知是否吸顶

```xml
<ant-sticky
  top="180px"
  check="{{true}}"
#if ALIPAY
  onStickyChange="handleStickyChange"
#endif
#if WECHAT
  bindstickychange="handleStickyChange"
#endif
>
  <view>
    <view>我会吸顶在距离顶部 180px 的地方</view>
    <view>是否吸上了 {{stickyStatus}}</view>
  </view>
</ant-sticky>
```

```js
Page({
  data: {
    stickyStatus: false,
  },
  handleStickyChange(status) {
    this.setData({ stickyStatus: status });
  },
});
```

### 透明头模式

```xml
<ant-sticky transparentTitle="{{true}}">
  <view>
    我会吸顶
  </view>
</ant-sticky>
```

### Demo 代码

<code src="../../demo/pages/Sticky/index"></code>

## 属性

| 属性                            | 类型     | 默认值         | 说明                                                                 |
| ------------------------------- | -------- | -------------- | -------------------------------------------------------------------- |
| className                       | string   | ""             | 容器 className                                                       |
| top                             | string   | ""             | 吸顶高度，需要写单位，比如 10px,24rpx                                |
| check                           | bool     | false          | 是否需要感知是否吸顶了，因为吸顶检查还是有一定成本的                 |
| sticky                          | bool     | true           | 是否要吸顶，某些场景不一定需要                                       |
| transparentTitle                | bool     | false          | 是否是透明头，透明头会自动计算 titleBar 高度，默认吸附在 titlebar 下 |
| #if ALIPAY onStickyChange       | Function | (status) => {} | 是否在吸顶状态，注意需要打开 check 功能才有这个回调                  |
| #if ALIPAY onGetHeaderHeight    | Function | (height) => {} | 计算头的高度完成                                                     |
| #if WECHAT bindstickychange    | Function | (status) => {} | 是否在吸顶状态，注意需要打开 check 功能才有这个回调                  |
| #if WECHAT bindgetheaderheight | Function | (height) => {} | 计算头的高度完成                                                     |

## 插槽

仅有一个默认插槽，用于包裹想吸顶的元素、组件。

## 其他

需要注意的是，透明页面场景下自动计算头高度仅方便吸在顶上的情况，如果有偏移，还是需要自行计算的。

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名            | 默认值                                                                                                                      | 深色模式默认值                                                                                                               | 备注           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| --sticky-check-bg | <div style="width: 150px; height: 40px; background-color:rgba(238, 238, 238, 0); color: #fff;">rgba(238, 238, 238, 0)</div> | <div style="width: 150px; height: 40px; background-color: rgba(238, 238, 238, 0); color: #fff;">rgba(238, 238, 238, 0)</div> | 选择器背景颜色 |
