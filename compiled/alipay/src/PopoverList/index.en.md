---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# PopoverList

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Click on the element to pop up the bubble menu

## When to use

The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.

## Code Sample

### Basic use

<!-- <code src='pages/Popover/index' noChangeButton></code> -->

### Use with List component

<!-- <code src='pages/PopoverList/index' noChangeButton></code> -->

## API

| Property               | Description                                                                                                                                                                | Type                                                                                                | Default Value |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow | Automatically adjust the position when the bubble is blocked                                                                                                                                          | boolean                                                                                             | true   |
| className          | Class Name                                                                                                                                                                | string                                                                                              | -      |
| color              | Background Color                                                                                                                                                            | string                                                                                              | -      |
| contentClassName   | content Class Name                                                                                                                                                        | string                                                                                              | -      |
| contentStyle       | content Style                                                                                                                                                        | string                                                                                              | -      |
| content            | Content                                                                                                                                                                | string \| slot                                                                                      | -      |
| defaultVisible     | Display by default                                                                                                                                                        | boolean                                                                                             | false  |
| destroyOnClose     | Whether to unload content when invisible                                                                                                                                                | boolean                                                                                             | false  |
| maskClassName      | Class name of the layer                                                                                                                                                          | string                                                                                              | -      |
| maskStyle          | The style of the layer                                                                                                                                                          | string                                                                                              | -      |
| placement          | Bubble box position, optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` or `right-bottom` | string                                                                                              | top    |
| showMask           | Whether to show the layer, if true, click the blank to close the Popover.                                                                                                                    | boolean                                                                                             | true   |
| style              | Style                                                                                                                                                                | string                                                                                              | -      |
| visible            | Display                                                                                                                                                            | boolean                                                                                             | -      |
| onVisibleChange    | Callback at the time of visible change                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                                                    | Remarks                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover List Content Background Color |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | Popover List Content Color     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover List Badge Color     |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | Popover List Content Text Color |
