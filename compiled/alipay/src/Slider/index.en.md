---
nav:
  path: /components
group:
  title: 信息输入
toc: 'content'
---

# Slider Slider

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

You can take values within a range by moving the slider.

## When to use

Used to move the slider within a certain range to obtain a single or interval value.

## Code Sample

<code src='../../demo/pages/Slider/index'></code>

## API

| Property                | Description                                         | Type                                 | Default Value |
|---------------------|--------------------------------------------|--------------------------------------|--------|
| activeDotClassName  | Class name of selected dot                               | string                               | -      |
| activeLineClassName | The style of the selected line                                 | string                               | -      |
| activeDotStyle      | Select the type of dot                               | string                               | -      |
| activeLineStyle     | The style of the selected line                                 | string                               | -      |
| className           | Class Name                                          | string                               | -      |
| defaultValue        | Initial value                                        | number \| [number, number]           | -      |
| disabled            | Disable                                       | boolean                              | false  |
| max                 | Maximum                                        | number                               | 100    |
| min                 | Minimum                                        | number                               | 0      |
| range               | Whether it is a double slider                                   | boolean                              | false  |
| showNumber          | Show data on scale                             | boolean                              | false  |
| step                | Step, the value must be greater than 0 and divisible by (max-min) | number                               | 1      |
| style               | Style                                          | string                               | -      |
| showTicks           | Show scale                                     | boolean                              | false  |
| showTooltip         | Whether to display the floating prompt when dragging, support the use of scope slot customization    | boolean                              | false  |
| slider              | Custom Slider                                      | slot                                 | -      |
| tick                | Custom Scale                                      | slot                                 | -      |
| tooltip             | Show hover prompt when custom drag                          | slot                                 | -      |
| value               | Current Value                                        | number \| [number, number]           | -      |
| onChange            | Triggers when the slider value changes                            | (value: number &verbar; [number, number]) => void | -      |
| onAfterChange       | Consistent with the touchend trigger timing, the current value is passed in as a parameter. | (value: number &verbar; [number, number]) => void | -      |
