---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# RareWordsKeyboard uncommon character keyboard

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## When to use

The problem of rare characters has always been a difficult point in the society. Due to the development of different standards in different periods, various industries support different Chinese characters, which makes it very difficult to interconnect rare characters and names in Internet business and seriously affects the business handling of rare characters and names personnel. This rare word keyboard can help rare word users solve the problem that they cannot enter their names in the computer world.

## Tip

1. Developers can decide for themselves when to evoke a rare word keyboard.
2. After entering a rare word, the input of the rare word will be returned through the callback parameter, and the keyboard will be closed.

## Code example

### Basic use

<code src='../../demo/pages/RareWordsKeyboard/index'></code>

## API

| Property      | Description                                                           | Type                     | Default Value |
| --------- | -------------------------------------------------------------- | ------------------------ | ------ |
| visible   | Whether visible                                                       | boolean                  | false  |
| type      | Keyboard type, currently only supported `pinyin`(Pinyin)                         | string                   | pinyin |
| showMask  | Whether to show background layer                                               | boolean                  | true   |
| safeArea  | Whether to keep safe distance                                               | boolean                  | true   |
| onClose   | Callback triggered when keyboard is closed                                           | `() => void`             | -      |
| onChange  | Callback triggered when input completes                                           | `(value: string) => void`| -      |
| onError   | Open the callback that is triggered when the keyboard goes wrong                                       | `(err: Error) => void`   | -      |
