---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# RareWordsKeyboard

The problem of rare characters has always been a difficult point in the society. Due to the development of different standards in different periods, various industries support different Chinese characters, which makes it very difficult to interconnect rare characters and names in Internet business and seriously affects the business handling of rare characters and names personnel. This rare word keyboard can help rare word users solve the problem that they cannot enter their names in the computer world.

## Tip

1. Developers can decide for themselves when to evoke a rare word keyboard.
2. After entering a rare word, the input of the rare word will be returned through the callback parameter, and the keyboard will be closed.

## Code Sample

### Basic use

<code src='../../demo/pages/RareWordsKeyboard/index'></code>

## API

| Property                   | Description                                  | Type                      | Default Value |
| ---------------------- | ------------------------------------- | ------------------------- | ------ |
| visible                | Whether visible                              | boolean                   | false  |
| type                   | Keyboard type, currently only supported `pinyin`(Pinyin) | string                    | pinyin |
| showMask               | Whether to show background mask                      | boolean                   | true   |
| safeArea               | Whether to keep safe distance                      | boolean                   | true   |
| #if ALIPAY onClose     | Callback triggered when keyboard is closed                  | `() => void`              | -      |
| #if ALIPAY onChange    | Callback triggered when input completes                  | `(value: string) => void` | -      |
| #if ALIPAY onError     | Open the callback that is triggered when the keyboard goes wrong              | `(err: Error) => void`    | -      |
| #if WECHAT bindclose  | Callback triggered when keyboard is closed                  | `() => void`              | -      |
| #if WECHAT bindchange | Callback triggered when input completes                  | `(value: string) => void` | -      |
| #if WECHAT binderror  | Open the callback that is triggered when the keyboard goes wrong              | `(err: Error) => void`    | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                        | Default Value                                                                                                                    | Dark Mode Default                                                                                                            | Remarks               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --rare-words-bg               | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.45); color: #ffffff;">rgba(0, 0, 0, 0.45)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.45); color: #ffffff;">rgba(0, 0, 0, 0.45)</div> | Rare word background color     |
| --rare-keyboard-bg            | <div style="width: 150px; height: 30px; background-color: #d8d8d8; color: #000000;">#d8d8d8</div>                         | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | Rare word keyboard background color   |
| --rare-words-keyboard-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #000000;">#c5cad1</div>                         | Rare word keyboard text color |
| --rare-words-border-color     | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #000000;">#eeeeee</div>                         | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div>                         | Rare word border color     |
| --rare-words-kb-bg            | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #000000;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | Rare word keyboard background color   |
| --rare-words-pinyin-key-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | Rare word pinyin key color   |
| --rare-words-inner-bg         | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #000000;">#cccccc</div>                         | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div>                         | Rare word inner background color   |
| --rare-words-active-color     | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                         | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                         | Rare word activation status color |
| --rare-words-pinyin-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #000000;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | Rare word pinyin color     |
| --rare-words-keyboard-bg      | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | <div style="width: 150px; height: 30px; background-color: #4a4a4a; color: #ffffff;">#4a4a4a</div>                         | Rare word keyboard background color   |
| --rare-words-item-tips-color  | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div>                         | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div>                         | Rare Word Item Prompt Color |
