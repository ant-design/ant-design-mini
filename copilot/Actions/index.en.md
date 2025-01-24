---
nav:
  path: /copilot
group:
  title: Express
  order: 3
toc: 'content'
---

# Actions

## When to use

Use when you need to show a set of action options.

## Code Sample

### Basic Usage

<code src='../../copilot-demo/pages/Actions/index'></code>

## API

### Property

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| className | Class Name | string | - |
| style | Style | string | - |
| items | Action Item List | ActionItem[] | [] |
| onItemTap | Triggered when an action item is clicked | (item: ActionItem) => void | - |

### ActionItem

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| label | Action Item Text | string | - |
| icon | Action Item Icon | string | - |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name | Default Value | Description |
| --- | --- | --- |
| --actions-background-color | #F7F7F7 | Background Color |
| --actions-item-hover-background-color | #EEEEEE | Click background color |

