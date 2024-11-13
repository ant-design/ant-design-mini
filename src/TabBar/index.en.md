---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# TabBar

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Used to switch between different pages.

## Code example

<code src='../../demo/pages/TabBar/index'></code>

## API

| Property            | Description                                                    | Type                    | Default Value |
| --------------- | ------------------------------------------------------- | ----------------------- | ------ |
| activeClassName | Tab activation class name                                          | string                  | -      |
| activeStyle     | Tab Activation Style                                          | string                  | -      |
| className       | Class Name                                                    | string                  | -      |
| current         | Selected Items                                                  | number                  | -      |
| defaultCurrent  | Initial Checked                                              | number                  | 0      |
| icon            | Tab icon scope slot, receiving item, index, active parameters     | slot                    | -      |
| items           | Bottom Icon Configuration                                            | [TabItem](#tabitem)[] | []     |
| style           | Style                                                    | string                  | -      |
| text            | Tab bottom text scope slot, receiving item, index, active parameters | slot                    | -      |
| onChange        | Trigger callback on Tab switch                                      | `(index: number) => void` | -      |

### TabItem

| Parameters       | Description                                               | Type   | Default Value |
| ---------- | -------------------------------------------------- | ------ | ------ |
| icon       | bottom icon, support [Icon](./Icon) or picture address           | string | -      |
| activeIcon | bottom icon for active state, support [Icon](./Icon) or picture address | string | -      |
| text       | Bottom Text                                           | string | -      |
| badge      | Type of logo, see [Badge](./Badge) Components               | object | -      |
