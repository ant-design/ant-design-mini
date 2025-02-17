---
nav:
  path: /copilot
group:
  title: General
  order: 1
toc: 'content'
---

# Bubble Dialogue Bubbles

## When to use

When you need to display the content of the dialogue, it supports a variety of bubble styles, typing animation and other effects.

## Code Sample

### Basic Usage

<code src='../../copilot-demo/pages/Bubble/index'></code>

## API

### Property

| Property             | Description               | Type                                               | Default Value    |
| ---------------- | ------------------ | -------------------------------------------------- | --------- |
| className        | Class Name               | string                                             | -         |
| style            | Style               | string                                             | -         |
| content          | Bubble Content           | string                                             | -         |
| placement        | Bubble position           | 'start' \| 'end'                                   | 'end'     |
| shape            | Bubble shape           | 'round' \| 'corner' \| 'default'                   | 'default' |
| variant          | Bubble Style           | 'filled' \| 'borderless' \| 'outlined' \| 'shadow' | 'filled'  |
| avatar           | avatar address           | string                                             | -         |
| loading          | Loading         | boolean                                            | false     |
| typing           | Typing Animation Configuration       | boolean \| { step?: number, interval?: number }    | false     |
| onTypingComplete | Triggers when typing animation completes | () => void                                         | -         |

### Slots

| Name    | Description                           |
| ------- | ------------------------------ |
| default | Custom bubble content                 |
| header  | Custom header content (such as user name)       |
| footer  | Customize the bottom content (e. g. custom actions, etc.) |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                         | Default Value           | Description               |
| ------------------------------ | ---------------- | ------------------ |
| --bubble-background-color      | #F7F7F7          | Bubble background color         |
| --bubble-user-background-color | #1677FF          | User message bubble background color |
| --bubble-outlined-color        | #EBEBEB          | The border color of the stroke style |
| --bubble-text-color            | rgba(0,0,0,0.88) | Text Color           |
| --bubble-text-color-user       | #ffffff          | User Message Text Color   |

## FAQ

### 1. How to achieve the typewriter effect?

The typing animation can be configured via the typing property:

- Setup `typing="{{true}}"` Use default configuration
- Setup `typing="{{{ step: 1, interval: 50 }}}"` Customize the number of characters per print and the interval
- By `onTypingComplete` Monitor typing animation complete

### 2. What bubble styles are supported?

A variety of bubble styles can be achieved through the combination of shape and variant attributes:

- shape: control bubble shape, support default/round/corner
- variant: control bubble appearance, support filled/borderless/outlined/shadow
