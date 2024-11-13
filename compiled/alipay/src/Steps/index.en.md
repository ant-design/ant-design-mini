---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Steps

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A navigation bar that guides the user through the process.

## When to use

When the task is complex or there is a sequential relationship, it is broken down into a series of steps to simplify the task.

## Code Sample

### Basic use

<code src='../../demo/pages/Steps/index'></code>

### Controlled Mode

<!-- <code src='pages/StepsControl/index'></code> -->

## API

| Property        | Description                                         | Type            | Default Value       |
| ----------- | -------------------------------------------- | --------------- | ------------ |
| className   | Class Name                                         | string          | -            |
| current     | Current step                                     | number          | -            |
| description | Custom description content rendering, receiving index and value      | slot            | -            |
| direction   | direction, optional `horizontal` or `vertical`        | string          | `horizontal` |
| icon        | Custom icon rendering, receiving index and value          | slot            | -            |
| items       | Show Item                                       | [Item](#item)[] | -            |
| status      | Specifies the status of the current step, optional `finish` or `error` | string          | `finish`     |
| style       | Style                                         | string          | -            |
| title       | Custom title rendering, receiving index and value          | slot            | -            |

### Item

| Property        | Description | Type   | Default Value |
| ----------- | ---- | ------ | ------ |
| description | Content | string | -      |
| title       | Title | string | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                | Default Value                                                                                            | Remarks               |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --steps-non-active-bg | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div> | No active step background color |
| --steps-title-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Step Title Color       |
| --steps-desc-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Step Description Color       |
| --steps-default-bg    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | Default Step Background Color   |
| --steps-finish-bg     | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | Complete Steps Background Color   |
