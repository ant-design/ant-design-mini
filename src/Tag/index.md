---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
---

# Tag 标签

用于标记和分类的小标签。

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
<ant-tag>primary</ant-tag>
<ant-tag color="success">success</ant-tag>
<ant-tag color="warning">warning</ant-tag>
<ant-tag color="danger">danger</ant-tag>
```

### 填充模式

```xml
<ant-tag type="fill">fill</ant-tag>
<ant-tag type="outline">outline</ant-tag>
<ant-tag type="fill-light">fill-light</ant-tag>
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

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。


| 变量名                    | 浅色模式默认值                                                                                           | 深色模式默认值                                                                                           | 备注                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| --tag-primary-color       | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #ffffff;">#1677ff</div>       | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>       | 主要标签颜色         |
| --tag-warning-color       | <div style="width: 150px; height: 40px; background-color: #ff6430; color: #ffffff;">#ff6430</div>       | <div style="width: 150px; height: 40px; background-color: #e65a2b; color: #ffffff;">#e65a2b</div>       | 警告标签颜色         |
| --tag-danger-color        | <div style="width: 150px; height: 40px; background-color: #ff3141; color: #ffffff;">#ff3141</div>       | <div style="width: 150px; height: 40px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>       | 危险标签颜色         |
| --tag-success-color       | <div style="width: 150px; height: 40px; background-color: #22b35e; color: #ffffff;">#22b35e</div>       | <div style="width: 150px; height: 40px; background-color: #34b368; color: #ffffff;">#34b368</div>       | 成功标签颜色         |
| --tag-primary-light-color | <div style="width: 150px; height: 40px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div>       | <div style="width: 150px; height: 40px; background-color: #0d2543; color: #ffffff;">#0d2543</div>       | 主要标签浅色         |
| --tag-warning-light-color | <div style="width: 150px; height: 40px; background-color: #ffefdf; color: #333333;">#ffefdf</div>       | <div style="width: 150px; height: 40px; background-color: #ffefdf; color: #333333;">#ffefdf</div>       | 警告标签浅色         |
| --tag-danger-light-color  | <div style="width: 150px; height: 40px; background-color: #ffece3; color: #333333;">#ffece3</div>       | <div style="width: 150px; height: 40px; background-color: #ffece3; color: #333333;">#ffece3</div>       | 危险标签浅色         |
| --tag-success-light-color | <div style="width: 150px; height: 40px; background-color: #d4fff1; color: #333333;">#d4fff1</div>       | <div style="width: 150px; height: 40px; background-color: #d4fff1; color: #333333;">#d4fff1</div>       | 成功标签浅色         |
| --tag-base-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>       | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>       | 基础标签颜色         |
| --tag-primary-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.3); color: #ffffff;">rgba(22, 119, 255, 0.3)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.3); color: #ffffff;">rgba(22, 119, 255, 0.3)</div> | 主要标签颜色（褪色） |
| --tag-warning-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(255, 100, 48, 0.7); color: #ffffff;">rgba(255, 100, 48, 0.7)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 100, 48, 0.7); color: #ffffff;">rgba(255, 100, 48, 0.7)</div> | 警告标签颜色（褪色） |
| --tag-danger-color-faded  | <div style="width: 150px; height: 40px; background-color: rgba(255, 49, 65, 0.7); color: #ffffff;">rgba(255, 49, 65, 0.7)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(255, 49, 65, 0.7); color: #ffffff;">rgba(255, 49, 65, 0.7)</div>   | 危险标签颜色（褪色） |
| --tag-success-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(34, 179, 94, 0.7); color: #ffffff;">rgba(34, 179, 94, 0.7)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(34, 179, 94, 0.7); color: #ffffff;">rgba(34, 179, 94, 0.7)</div>   | 成功标签颜色（褪色） |
