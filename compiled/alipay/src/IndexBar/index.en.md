---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# IndexBar

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Side Index Component

## When to use

Used to quickly locate a list index.

## Code example

### Basic use

<code src='../../demo/pages/IndexBar/index'></code>

### Use in conjunction with a list

<!-- <code src='pages/IndexBarScrollView/index'></code> -->

### Control Selected State

<!-- <code src='pages/IndexBarControl/index'></code> -->

## API

| Property            | Description                              | Type                                          | Default Value |
| --------------- | --------------------------------- | --------------------------------------------- | ------ |
| activeClassName | Style when index is active                  | string                                        | -      |
| className       | Class Name                              | string                                        | -      |
| current         | Index value                            | string                                        | -      |
| defaultCurrent  | Default Index                          | string                                        | -      |
| labelPreview    | Index preview content, receiving value and index | slot                                          | -      |
| items           | Index Array                          | [Item](#item)                                 | []     |
| style           | Style                              | string                                        | -      |
| size            | Dimensions of the index (width and height in px)       | number                                        | 16     |
| vibrate         | Whether it vibrates when the index changes                | boolean                                       | true   |
| onChange        | Callback when index changes                  | (value: [Item](#item), index: number) => void |

#### Item

| Property           | Description                     | Type    | Default Value |
| -------------- | ------------------------ | ------- | ------ |
| label          | Index ID                 | string  | -      |
| disablePreview | Disable preview effect when index is triggered | boolean | -      |
