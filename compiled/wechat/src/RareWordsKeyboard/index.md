---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# RareWordsKeyboard 生僻字键盘

## 何时使用

生僻字问题一直是社会难点之一，各行业由于不同时期不同标准开发使得支持的汉字字符不同，导致生僻字姓名互联互通困难，严重影响生僻字人办理互联网业务；
此生僻字键盘可以帮助生僻字用户解决姓名无法在计算机世界中输入的问题。

## Tip

1. 开发者自己决定什么时候唤起生僻字键盘
2. 输入完成生僻字后会通过回调参数的方式返回此次输入的生僻字，并关闭键盘

## 代码示例

### 基本使用

<code src='pages/RareWordsKeyboard/index'></code>

## API

| 属性     | 说明                                                                             | 类型                    | 默认值 |
| -------- | -------------------------------------------------------------------------------- | ----------------------- | ------ |
| visible  | 是否可见                                                                         | boolean                 | false  |
| type     | 键盘类型, pinyin（拼音）、stroke（笔画）、handwriting（手写），目前只支持 pinyin | string                  | pinyin |
| showMask | 是否展示背景蒙层                                                                         | boolean                 | true   |
| safeArea | 安全距离                                                                         | boolean                 | true   |
| onClose  | 关闭的时候触发的回调                                                             | () => void              | -      |
| onChange | 输入完成的时候触发的回调                                                         | (value: string) => void | -      |
| onError  | 打开键盘出错的回调                                                               | (err: Error) => void    | -      |
