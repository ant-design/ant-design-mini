---

nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Tag 标签


用于标记和分类的小标签。

## 何时使用
- 用来标记事物的属性和维度。
- 进行分类。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-tag": "antd-mini/es/Tag/index"
#endif
#if WECHAT
  "ant-tag": "antd-mini/Tag/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<ant-tag>标签</ant-tag>
```

### 语义标签
```xml
<ant-tag>default</ant-tag>
<ant-tag color="success">success</ant-tag>
<ant-tag color="warning">warning</ant-tag>
<ant-tag color="warning">danger</ant-tag>
```

### 填充模式
```xml
<ant-tag type="fill">fill</ant-tag>
<ant-tag type="outline">outline</ant-tag>
<ant-tag color="fill-light">fill-light</ant-tag>
```

### 自定义图标
```xml
<ant-tag icon="AlipayCircleFill">标签</ant-tag>
```

### Demo 代码
<code src='../../demo/pages/Tag/index'></code>

## API
| 属性      | 说明                                                                                     | 类型         | 默认值    |
| --------- | ---------------------------------------------------------------------------------------- | ------------ | --------- |
| className | 类名                                                                                     | string       | -         |
| color     | 标签颜色，内建 `primary`（蓝色）、`success`（绿色）、`warning`（黄色）、`danger`（红色） | string       | `primary` |
| icon      | 图标，支持 Icon 类型和插槽                                                               | string\|slot | -         |
| style     | 样式                                                                                     | string       | -         |
| type      | 类型，可选 `outline`、`fill`、`fill-light`                                               | string       | `fill`    |
