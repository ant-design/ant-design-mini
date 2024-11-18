---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# RareWordsKeyboard

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## When to use

The problem of rare characters has always been a difficult point in the society. Due to the development of different standards in different periods, various industries support different Chinese characters, which makes it very difficult to interconnect rare characters and names in Internet business and seriously affects the business handling of rare characters and names personnel. This rare word keyboard can help rare word users solve the problem that they cannot enter their names in the computer world.

## Tip

1. Developers can decide for themselves when to evoke a rare word keyboard.
2. After entering a rare word, the input of the rare word will be returned through the callback parameter, and the keyboard will be closed.

## Code Sample

### Basic use

<code src='../../demo/pages/RareWordsKeyboard/index'></code>

## API

| Property     | Description                                  | Type                      | Default Value |
| -------- | ------------------------------------- | ------------------------- | ------ |
| visible  | Whether visible                              | boolean                   | false  |
| type     | Keyboard type, currently only supported `pinyin`(Pinyin) | string                    | pinyin |
| showMask | Whether to show background mask                      | boolean                   | true   |
| safeArea | Whether to keep safe distance                      | boolean                   | true   |
| onClose  | Callback triggered when keyboard is closed                  | `() => void`              | -      |
| onChange | Callback triggered when input completes                  | `(value: string) => void` | -      |
| onError  | Open the callback that is triggered when the keyboard goes wrong              | `(err: Error) => void`    | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                             | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------ |
| --radio-header-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | radio button head color         |
| --radio-border-color               | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | radio button border color         |
| --radio-background-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Radio Button Background Color         |
| --radio-disabled-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | radio button disabled state background color |
| --radio-text-color                 | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | radio button text color         |
| --radio-fake-icon-background-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | radio button fake icon background color   |
| --radio-icon-color                 | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | radio button icon color         |
