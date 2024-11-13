---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Radio

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Single selection from a set of options.

## When to use

- When making a single selection in a group of selectable items.

## Code example

### Radio

<code src='../../demo/pages/Radio/index'></code>

### RadioGroup

<!-- <code src='pages/RadioGroup/index'></code> -->

## API

### Radio

| Property             | Description                | Type     | Default Value |
| ---------------- | ------------------- | -------- | ------ |
| checked          | Whether selected            | boolean  | -      |
| className        | Class Name                | string   | -      |
| disabled         | Disable            | boolean  | false  |
| color            | Icon Color            | string   | -      |
| defaultChecked   | Is selected by default        | boolean  | false  |
| style            | Style                | string   | -      |
| value            | value carried     | string   | -      |
| onChange         | Callback when state changes    | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |

### RadioGroup

| Property          | Description                | Type                           | Default Value    |
| ------------- | ------------------- | ------------------------------ | --------- |
| className     | Class Name                | string                         | -         |
| color         | Icon Color            | string                         | -         |
| disabled      | Disable            | boolean                        | false     |
| defaultValue  | Initial value              | string                         | -         |
| label         | slots, receiving values and indexes  | slot                           | -         |
| options       | Optional               | `{label?: string; value?: string; disabled?: boolean;}[]` | -     |
| position      | Layout mode            | string                         | `vertical` |
| style         | Style                | string                         | -         |
| value         | Selected value            | string                         | -         |
| onChange      | Callback when state changes    | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |
