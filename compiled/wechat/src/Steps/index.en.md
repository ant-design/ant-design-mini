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

## Code example

### Basic use

<code src='../../demo/pages/Steps/index'></code>

### Controlled Mode

<!-- <code src='pages/StepsControl/index'></code> -->

## API

| Property        | Description                               | Type        | Default Value           |
| ----------- | ---------------------------------- | ----------- | ---------------- |
| className   | Class Name                               | string      | -                |
| current     | Current step                           | number      | -                |
| description | Custom description content rendering, receiving index and value | slot        | -                |
| direction   | direction, optional `horizontal` or `vertical` | string      | `horizontal`     |
| icon        | Custom icon rendering, receiving index and value | slot        | -                |
| items       | Show Item                             | [Item](#item)[] | -                |
| status      | Specifies the status of the current step, optional `finish` or `error` | string      | `finish`         |
| style       | Style                               | string      | -                |
| title       | Custom title rendering, receiving index and value | slot        | -                |

### Item

| Property        | Description   | Type   | Default Value   |
| ----------- | ------ | ------ | -------- |
| description | Content   | string | -        |
| title       | Title   | string | -        |
