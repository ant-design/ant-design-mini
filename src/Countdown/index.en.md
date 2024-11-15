---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
supportPlatform: ['alipay']
---

# Countdown

## When to use

- Scenarios requiring a countdown display

## Code Sample

### Basic Usage

<code src="../../demo/pages/Countdown/index"></code>

## API

| Property     | Type        | Required | Default Value     | Description             |
|--------------|----------------|-------|-------------------|-------------------------|
| className    | `string`      | false | ``                | Class Name              |
| countdownEndTime | `string丨number` | 和time二选一必填 | ""                | End timestamp           |
| countdownStartTime | `string丨number` | false | Current timestamp | Starting timestamp      |
| time | number | Either countdownEndTime must be filled in | 0                 | The unit is seconds     |
| theme | [Theme](#theme) | false | -                 | Theme Configuration     |
| themeDisabled | boolean | false | false             | Disable theme color     |
| autoShowDay | boolean | false | true              | Automatically do not display days if less than one day |
| countdownType | string | false | ""                | An ultra-long countdown needs to display the number of days |
| onCountdownChange | Function | false | ""                | Callback for when the countdown changes, with properties including remaining time in milliseconds, days, hours, minutes, and seconds |
| onCountdownFinish | Function | false | ""                | The countdown end callback will be triggered when the countdown reaches zero, and it will also be called once if the countdown starts at zero |
| decisecond | boolean | false | false             | Supports countdown to the millisecond (the digit after seconds), effective only when the theme color is disabled |


### Theme

| Key name            | Explanation           | Type     |
| --------------- |-----------------------|----------|
| backgroundColor | time background color | `string` |
| timeColor       | time text color       | `string` |
| textColor       | text color            | `string` |

## SLOT

| Name         | Explanation      |
|--------------| --------- |
| Default slot | The slot-scope contains references for day, hour, min, and sec, as shown in the demo. Their types are all strings |
