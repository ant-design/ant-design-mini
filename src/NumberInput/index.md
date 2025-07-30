---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# NumberInput 金额输入

需要输入金额并提供快捷金额选择时使用。支持单位自动转换、最大值限制等功能。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-number-input": "antd-mini/es/NumberInput/index"
#endif
#if WECHAT
  "ant-number-input": "antd-mini/NumberInput/index"
#endif
}
```

## 代码示例

### 基本使用

<code src='../../demo/pages/NumberInput/index'></code>

## API

### 属性

| 属性                   | 说明                 | 类型                    | 默认值       |
| ---------------------- | -------------------- | ----------------------- | ------------ |
| className              | 类名                 | string                  | -            |
| style                  | 样式                 | string                  | -            |
| value                  | 输入框的值           | string                  | -            |
| title                  | 标题                 | string                  | -            |
| linkText               | 右上角链接文案       | string                  | -            |
| quickAmounts           | 快捷金额选项         | number[]                | -            |
| placeholder            | 占位符文本           | string                  | '请输入金额' |
| prefix                 | 金额前缀             | string                  | '¥'          |
| maxValue               | 最大可输入金额       | number                  | -            |
| #if ALIPAY onChange    | 内容变化时的回调     | (value: string) => void | -            |
| #if ALIPAY onLinkTap   | 点击右上角链接的回调 | () => void              | -            |
| #if WECHAT bindchange  | 内容变化时的回调     | (value: string) => void | -            |
| #if WECHAT bindlinktap | 点击右上角链接的回调 | () => void              | -            |

### 插槽

目前只提供一个 footer 插槽,用于在输入框下方插入自定义内容。后续根据需求可能会开放更多内容。

使用示例：

```xml
<ant-number-input>
  <view slot="footer">
    <text>这是一条自定义内容</text>
  </view>
</ant-number-input>
```

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 浅色模式默认值                                                                                    | 深色模式默认值                                                                                    | 备注               |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --number-input-background-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 背景颜色           |
| --number-input-title-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 标题颜色           |
| --number-input-link-color         | <div style="width: 150px; height: 30px; background-color: #4b6b99; color: #ffffff;">#4b6b99</div> | <div style="width: 150px; height: 30px; background-color: #3f5980; color: #ffffff;">#3f5980</div> | 右上角链接颜色     |
| --number-input-unit-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 输入框上方单位颜色 |
| --number-input-border-color       | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 分割线颜色         |
| --number-input-prefix-color       | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 羊角符颜色         |
| --number-input-caret-color        | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 光标颜色           |
| --number-input-quick-text-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 快捷输入文本颜色   |
| --number-input-quick-border-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 快捷输入边框颜色   |
