---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# RareWordsKeyboard 生僻字键盘

生僻字问题一直是社会的一个难点，各行业由于不同时期、不同标准的开发，使得支持的汉字字符不一，导致生僻字姓名在互联网业务中的互联互通十分困难，严重影响了生僻字姓名人员的业务办理；此生僻字键盘能够帮助生僻字用户解决在计算机世界中无法输入姓名的问题。

## Tip

1. 开发者可以自己决定何时唤起生僻字键盘。
2. 输入完成生僻字后，会通过回调参数返回此次输入的生僻字，并关闭键盘。

## 代码示例

### 基本使用

<code src='../../demo/pages/RareWordsKeyboard/index'></code>

## API

| 属性                   | 说明                                  | 类型                      | 默认值 |
| ---------------------- | ------------------------------------- | ------------------------- | ------ |
| visible                | 是否可见                              | boolean                   | false  |
| type                   | 键盘类型，目前只支持 `pinyin`（拼音） | string                    | pinyin |
| showMask               | 是否展示背景蒙层                      | boolean                   | true   |
| safeArea               | 是否保留安全距离                      | boolean                   | true   |
| #if ALIPAY onClose     | 关闭键盘时触发的回调                  | `() => void`              | -      |
| #if ALIPAY onChange    | 输入完成时触发的回调                  | `(value: string) => void` | -      |
| #if ALIPAY onError     | 打开键盘出错时触发的回调              | `(err: Error) => void`    | -      |
| #if WECHAT bindclose  | 关闭键盘时触发的回调                  | `() => void`              | -      |
| #if WECHAT bindchange | 输入完成时触发的回调                  | `(value: string) => void` | -      |
| #if WECHAT binderror  | 打开键盘出错时触发的回调              | `(err: Error) => void`    | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                        | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --rare-words-bg               | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.45); color: #ffffff;">rgba(0, 0, 0, 0.45)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.45); color: #ffffff;">rgba(0, 0, 0, 0.45)</div> | 稀有字背景颜色     |
| --rare-keyboard-bg            | <div style="width: 150px; height: 30px; background-color: #d8d8d8; color: #000000;">#d8d8d8</div>                         | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | 稀有字键盘背景色   |
| --rare-words-keyboard-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #000000;">#c5cad1</div>                         | 稀有字键盘文字颜色 |
| --rare-words-border-color     | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #000000;">#eeeeee</div>                         | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div>                         | 稀有字边框颜色     |
| --rare-words-kb-bg            | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #000000;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | 稀有字键盘背景色   |
| --rare-words-pinyin-key-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | 稀有字拼音键颜色   |
| --rare-words-inner-bg         | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #000000;">#cccccc</div>                         | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div>                         | 稀有字内部背景色   |
| --rare-words-active-color     | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                         | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                         | 稀有字激活状态颜色 |
| --rare-words-pinyin-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #000000;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | 稀有字拼音颜色     |
| --rare-words-keyboard-bg      | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | 稀有字键盘背景色   |
| --rare-words-item-tips-color  | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div>                         | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div>                         | 稀有字项目提示颜色 |
