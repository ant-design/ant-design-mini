---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
supportPlatform: ['alipay']
---

# Sticky

## When to use

- There are situations where it needs to stick to certain places while scrolling.

## Code Sample

### Basic Usage

<code src="../../demo/pages/Sticky/index"></code>

## API

| Property     | Type    | Default Value | Description       |
|--------------|---------|------------|--------------------------|
| className    | `string` | ``         | Class Name           |
| top               | `string`        | ``          | The ceiling height should be written with units, such as 10px, 24rpx.  |
| check             | `bool`    | false        | Do we need to detect whether it has reached the ceiling, as there is still a certain cost associated with performing the ceiling check. |
| sticky            | `bool`    | true         | Whether to use a ceiling-mounted installation depends on the specific scenario, as it may not be necessary in all cases.         |
| transparentTitle  | `bool`    | false        | Whether it has a transparent header; a transparent header will automatically calculate the title bar height and by default adhere to the bottom of the title bar.|
| onStickyChange    | Function | (status) => {} | Is it in the ceiling-mounted state? Note that you need to enable the check function to receive this callback.  |
| onGetHeaderHeight | Function | (height) => {} | Calculated the height of the head, and threw it out as a side note.  |

## SLOT

There is only one default slot, used for wrapping the elements or components that you want to stick to the top.

## OTHER

It should be noted that in a transparent page scenario, the automatic calculation of header height is only convenient for cases where the header sticks to the top. If there is any offset, you will still need to calculate it manually.
