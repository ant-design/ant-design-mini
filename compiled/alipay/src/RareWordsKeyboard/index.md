---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# RareWordsKeyboard 生僻字键盘

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## 何时使用

生僻字问题一直是社会的一个难点，各行业由于不同时期、不同标准的开发，使得支持的汉字字符不一，导致生僻字姓名在互联网业务中的互联互通十分困难，严重影响了生僻字姓名人员的业务办理；此生僻字键盘能够帮助生僻字用户解决在计算机世界中无法输入姓名的问题。

## Tip

1. 开发者可以自己决定何时唤起生僻字键盘。
2. 输入完成生僻字后，会通过回调参数返回此次输入的生僻字，并关闭键盘。

## 代码示例

### 基本使用

<code src='../../demo/pages/RareWordsKeyboard/index'></code>

## API

| 属性     | 说明                                  | 类型                      | 默认值 |
| -------- | ------------------------------------- | ------------------------- | ------ |
| visible  | 是否可见                              | boolean                   | false  |
| type     | 键盘类型，目前只支持 `pinyin`（拼音） | string                    | pinyin |
| showMask | 是否展示背景蒙层                      | boolean                   | true   |
| safeArea | 是否保留安全距离                      | boolean                   | true   |
| onClose  | 关闭键盘时触发的回调                  | `() => void`              | -      |
| onChange | 输入完成时触发的回调                  | `(value: string) => void` | -      |
| onError  | 打开键盘出错时触发的回调              | `(err: Error) => void`    | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                             | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------ |
| --radio-header-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 单选按钮头部颜色         |
| --radio-border-color               | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 单选按钮边框颜色         |
| --radio-background-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 单选按钮背景颜色         |
| --radio-disabled-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 单选按钮禁用状态背景颜色 |
| --radio-text-color                 | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 单选按钮文本颜色         |
| --radio-fake-icon-background-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 单选按钮假图标背景颜色   |
| --radio-icon-color                 | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 单选按钮图标颜色         |
