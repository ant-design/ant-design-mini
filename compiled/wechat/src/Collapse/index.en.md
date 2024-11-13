---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Collapse

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A content area that can be collapsed/expanded.

## When to use

- Group and hide complex areas to keep the page tidy.
- An accordion is a special type of folding panel that allows only a single content area to expand.

## Code example

### Basic use

<code src='../../demo/pages/Collapse/index'></code>

### Accordion

<!-- <code src='pages/CollapseAccordion/index'></code> -->

### Control

<!-- <code src='pages/CollapseControl/index'></code> -->

### With Checkbox

<code src="../../demo/pages/CollapseWithCheckbox/index"></code>

### More Customizations

<!-- <code src='pages/CollapseCustom/index'></code> -->


## API

| Property       | Description                         | Type        | Default Value |
| ---------- | ---------------------------- | ----------- | ------ |
| accordion  | Accordion mode, only one content is expanded | boolean     | false  |
| className  | Class Name                          | string      | -      | 
| content    | Content area slot, receiving value, index | slot        | -      | 
| current    | Current expanded index                 | number[]    | -      | 
| defaultCurrent | Default index for current expansion         | number[]    | []     |  
| items      | Collapse Panel List                   | [CollapseItem](#collapseitem)[] | [] |  
| style      | Style                          | string      | -      | 
| title      | Header slot, receiving value, index   | slot        | -      | 
| onChange   | Toggle Panel Callback                 | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### CollapseItem

| Property       | Description      | Type    | Default Value |
| ---------- | --------- | ------- | ------ |
| content    | Content      | string  | -      |
| disabled   | Disable   | boolean | false  |
| title      | Title      | string  | -      |
| className  | Class Name      | string  | -      |
