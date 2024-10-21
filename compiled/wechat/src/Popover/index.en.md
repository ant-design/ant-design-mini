---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Popover Bubble Menu

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->
Click on the element to pop up the bubble menu

## When to use

The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.

## Code example

### Basic use

<code src='../../demo/pages/Popover/index' noChangeButton></code>

### Use with the List component

<!-- <code src='pages/PopoverList/index' noChangeButton></code> -->

## API

| Property                | Description                                                | Type                                                                 | Default Value |
|-------------------|---------------------------------------------------|--------------------------------------------------------------------|------|
| autoAdjustOverflow | Automatically adjust the position when the bubble is blocked                                    | boolean                                                            | true |
| className          | Class Name                                               | string                                                            | -    |
| color              | Background Color                                              | string                                                            | -    |
| contentClassName   | content Class Name                                        | string                                                            | -    |
| contentStyle       | content Style                                         | string                                                            | -    |
| content            | Content                                               | string \| slot                                                   | -    |
| defaultVisible     | Display by default                                            | boolean                                                           | false|
| destroyOnClose     | Whether to unload content when invisible                                        | boolean                                                           | false|
| maskClassName      | Class name of the layer                                            | string                                                            | -    |
| maskStyle          | The style of the layer                                            | string                                                            | -    |
| placement          | Bubble box position, optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` or `right-bottom` | string                                                            | top  |
| showMask           | Whether to show the layer, if true, click the blank to close the Popover.                  | boolean                                                           | true |
| style              | Style                                               | string                                                            | -    |
| visible            | Whether to display                                             | boolean                                                           | -    |
| onVisibleChange    | Callback at the time of visible change                                     | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -    |
