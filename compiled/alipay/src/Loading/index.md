---
nav:
  path: /components
group:
  title: 反馈引导
toc: 'content'
---

# Loading 加载

用于提示局部或页面在加载中。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-loading": "antd-mini/es/Loading/index"
#endif
#if WECHAT
  "ant-loading": "antd-mini/Loading/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-loading type="mini" />
```

### Spin 大小

```xml
<ant-loading type="spin" size="x-large" />
<ant-loading type="spin" size="large" />
<ant-loading type="spin" size="medium" />
<ant-loading type="spin" size="small" />
```

### 自定义颜色

```xml
<ant-loading type="mini" color="#1677ff" />
<ant-loading color="#34B368" />
```

### 自定义大小

```xml
<ant-loading style="width: 40px; height: 40px" />
<ant-loading className="custom-size" />
```

### Demo 代码

<code src='../../demo/pages/Loading/index' noChangeButton></code>

## API

| 属性      | 说明                                                                               | 类型   | 默认值   |
| --------- | ---------------------------------------------------------------------------------- | ------ | -------- |
| className | 根节点类名                                                                         | string | -        |
| color     | 加载时的颜色，当 type 为 `spin` 时，只支持十六进制颜色码                           | string | `#fff`   |
| size      | 加载图标尺寸，当 type 为 `spin` 时生效。可选 `small`、`medium`、`large`、`x-large` | string | `medium` |
| style     | 根节点 style                                                                       | string | -        |
| type      | 加载样式类型，可选 `spin`、`mini`                                                  | string | `spin`   |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                     | 默认值                                                                                                                              | 深色模式默认值                                                                                                                      | 备注                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --loading-text-color       | <div style="width: 150px; height: 40px; background-color: #d8d8d8; color: #333333;">#d8d8d8</div>                                   | <div style="width: 150px; height: 40px; background-color: #454955; color: #ffffff;">#454955</div>                                   | 加载文本颜色（铁黑） |
| --loading-icon-light-color | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.6); color: #333333;">rgba(255, 255, 255, 0.6)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.6); color: #333333;">rgba(255, 255, 255, 0.6)</div> | 加载图标浅色         |
