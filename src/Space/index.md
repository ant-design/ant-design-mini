---
nav:
  path: /components
group:
  title: 布局
  order: 1
toc: 'content'
---

# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-space": "antd-mini/es/Space/index"
#endif
#if WECHAT
  "ant-space": "antd-mini/Space/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-space>
  <ant-button type="primary">按钮1</ant-button>
  <ant-button>按钮2</ant-button>
  <ant-button>按钮3</ant-button>
</ant-space>
```

### 垂直间距

```xml
<ant-space direction="vertical">
  <ant-button type="primary">按钮1</ant-button>
  <ant-button>按钮2</ant-button>
  <ant-button>按钮3</ant-button>
</ant-space>
```

### 间距大小

```xml
<ant-space size="small">
  <ant-button type="primary">按钮1</ant-button>
  <ant-button>按钮2</ant-button>
  <ant-button>按钮3</ant-button>
</ant-space>
```

### 对齐方式

```xml
<ant-space align="start">
  <ant-button type="primary">按钮1</ant-button>
  <view class="custom-box">高度不同的内容</view>
  <ant-button>按钮3</ant-button>
</ant-space>
```

### 自动换行

```xml
<ant-space wrap>
  <ant-button type="primary">按钮1</ant-button>
  <ant-button>按钮2</ant-button>
  <ant-button>按钮3</ant-button>
  <ant-button>按钮4</ant-button>
  <ant-button>按钮5</ant-button>
</ant-space>
```

### Demo 代码

<code src='../../demo/pages/Space/index'></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| size | 间距大小 | `'small'` \| `'middle'` \| `'large'` \| `number` | `'middle'` |
| align | 对齐方式 | `'start'` \| `'end'` \| `'center'` \| `'baseline'` | `'center'` |
| justify | 主轴对齐方式 | `'start'` \| `'end'` \| `'center'` \| `'space-around'` \| `'space-between'` | `'start'` |
| wrap | 是否自动换行 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `string` | - |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名 | 默认值 | 深色模式默认值 | 备注 |
| --- | --- | --- | --- |
| --space-gap | 8px | 8px | 间距大小 |
