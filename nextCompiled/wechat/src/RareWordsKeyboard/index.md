---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# RareWordsKeyboard 生僻字键盘

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

## 何时使用

生僻字问题一直是社会的一个难点，各行业由于不同时期、不同标准的开发，使得支持的汉字字符不一，导致生僻字姓名在互联网业务中的互联互通十分困难，严重影响了生僻字姓名人员的业务办理；此生僻字键盘能够帮助生僻字用户解决在计算机世界中无法输入姓名的问题。

## Tip

1. 开发者可以自己决定何时唤起生僻字键盘。
2. 输入完成生僻字后，会通过回调参数返回此次输入的生僻字，并关闭键盘。

## 代码示例

### 基本使用

<code src='pages/RareWordsKeyboard/index'></code>

## API

| 属性      | 说明                                                           | 类型                     | 默认值 |
| --------- | -------------------------------------------------------------- | ------------------------ | ------ |
| visible   | 是否可见                                                       | boolean                  | false  |
| type      | 键盘类型，目前只支持 `pinyin`（拼音）                         | string                   | pinyin |
| showMask  | 是否展示背景蒙层                                               | boolean                  | true   |
| safeArea  | 是否保留安全距离                                               | boolean                  | true   |
| onClose   | 关闭键盘时触发的回调                                           | `() => void`             | -      |
| onChange  | 输入完成时触发的回调                                           | `(value: string) => void`| -      |
| onError   | 打开键盘出错时触发的回调                                       | `(err: Error) => void`   | -      |
