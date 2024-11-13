---
nav:
  path: /components
group:
  title: 信息展示
toc: 'content'
---

# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-divider": "antd-mini/es/Divider/index"
#endif
#if WECHAT
  "ant-divider": "antd-mini/Divider/index"
#endif
}
```

## 代码示例
### 基本使用
```xml
<ant-divider />
```

### 分割线带文字
```xml
<ant-divider text="中间内容" />
<ant-divider text="左侧内容" textPosition="left" />
<ant-divider text="右侧内容" textPosition="right" />
```

### 自定义样式
```xml
 <ant-divider
    text="自定义样式"
    textStyle="color:#1677ff; fontWeight:600"
    lineHeight="{{ 2 }}"
    lineType="dashed"
    lineColor="#1677ff" />
```

### 垂直分割线
```xml
 <view class="divider-vertical">
    <view>100m</view>
    <ant-divider direction="vertical" />
    <view>浙江省杭州市西湖区西溪路556号</view>
  </view>
```


### Demo代码
<code src='../../demo/pages/Divider/index'></code>

## API

| 属性       | 说明                    | 类型         | 默认值        |
| ---------- | ----------------------- | ------------ | ------------- |
| className  | 根节点类名              | string       | -             |
| direction  | 分割线方向，可选 `horizontal` `vertical` | string | `horizontal` |
| lineColor  | 分割线颜色              | string       | -             |
| lineHeight | 分割线高度，仅当 `direction` 为 `horizontal` 时生效，单位为 `px` | number  | - |
| lineType   | 分割线类型，可选 `solid` `dashed` `dotted`   | string | - |
| lineWidth  | 分割线宽度，仅当 `direction` 为 `vertical` 时生效，单位为 `px`  | number | - |
| style      | 样式                    | string       | -             |
| textClassName | 分割线文字类名      | string       | -             |
| textPosition | 分割线文字位置，可选 `left` `center` `right` | string | `center` |
| textStyle    | 分割线文字样式      | string       | -             |
| text         | 分割线文字          | string \| slot | -           |
