---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Postscript 资金附言组件

需要在表单或内容下方添加补充说明时使用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-postscript": "antd-mini/es/Postscript/index"
#endif
#if WECHAT
  "ant-postscript": "antd-mini/Postscript/index"
#endif
}
```

## 代码示例

### 基础用法

<code src='../../demo/pages/Postscript/index'></code>

## API

### 属性

| 属性                  | 说明             | 类型                    | 默认值            |
| --------------------- | ---------------- | ----------------------- | ----------------- |
| className             | 类名             | string                  | -                 |
| style                 | 样式             | string                  | -                 |
| title                 | 标题             | string                  | -                 |
| maxLength             | 最大输入长度     | number                  | Infinity          |
| quickInputs           | 快捷输入选项     | string[]                | []                |
| placeholder           | 占位符文本       | string                  | '给 TA 带句话吧~' |
| placeholderClassName  | 占位符类名       | string                  | -                 |
| combineSymbol         | 快捷输入连接符号 | string                  | -                 |
| #if ALIPAY onChange   | 内容变化时的回调 | (value: string) => void | -                 |
| #if WECHAT bindchange | 内容变化时的回调 | (value: string) => void | -                 |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                          | 浅色模式默认值                                                                                    | 深色模式默认值                                                                                    | 备注         |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --postscript-background-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333;">#ffffff</div>    | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 背景颜色     |
| --postscript-title-color        | <div style="width: 150px; height: 30px; background-color: #333; color: #ffffff;">#333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 标题颜色     |
| --postscript-input-color        | <div style="width: 150px; height: 30px; background-color: #333; color: #ffffff;">#333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 输入文字颜色 |
| --postscript-caret-color        | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 插入符颜色   |
| --postscript-placeholder-color  | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #ffffff;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 占位符颜色   |
| --postscript-quick-text-color   | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>       | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | 快捷文本颜色 |
| --postscript-quick-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333;">#eeeeee</div>    | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 快捷边框颜色 |

## FAQ

### 如何使用快捷输入拼接功能？

设置 combineSymbol 属性为需要的连接符号(如 "+" 或空格),点击快捷输入选项时会自动与已有内容拼接。

如果需要快捷输入内容覆盖已有内容,请移除 combineSymbol 属性。
