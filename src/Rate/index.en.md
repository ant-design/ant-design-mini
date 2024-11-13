---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Rate

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A component for showing things ratings and quick scoring.

## Code example

<code src='../../demo/pages/Rate/index'></code>

### Custom

<!-- <code src='pages/RateCustom/index'></code> -->

## Property


| Property | Description | Type | Default Value |
| ---- | ---- | ---- | ---- |
| allowHalf | Whether to allow half a star | `boolean` | `false` |
| allowClear | Allow to clear after clicking again | `boolean` | `true` |
| className | Class Name | `string` | - |
| character | Custom Characters | `slot` | `<icon type="StarFill" />` |
| characterActiveClassName | Custom Character Checked State Class Name | `string` | - |
| characterClassName | Custom Character Class Name | `string` | - |
| count | total number of stars | `number` | `5` |
| defaultValue | Initial value | `number` | `0` |
| gutter | Spacing, unit `px` | `number` | `4` |
| readonly | Read-only, unable to interact | `boolean` | `false` |
| style | Style | `string` | - |
| value | Star rating (controlled) | `number` | - |
| onChange | scoring callback function | `(rate: number) => void` | - |
