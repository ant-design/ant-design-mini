---
nav:
  path: /components
group:
  title: 信息展示
  order: 12
toc: 'content'
---

# Progress progress bar

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Displays the progress of user operations and tasks.

## Code Sample

### line

<code src='../../demo/pages/ProgressLine/index'></code>

### circle

<!-- <code src='pages/ProgressCircle/index'></code> -->

## API

| Property        | Description                                                 | Type    | Default Value |
| ----------- | ---------------------------------------------------- | ------- | ------ |
| className   | Class Name                                                 | string  | -      |
| percent     | Percentage                                               | number  | 0      |
| status      | status, available in line mode only, optional `success` `exception` | string  | -      |
| strokeColor | Progress bar color                                           | string  | -      |
| strokeWidth | Width of progress bar, in px                                  | number  | 8      |
| style       | Style                                                 | string  | -      |
| trailColor  | Track Color                                             | string  | -      |
| type        | type, optional `line` `circle`                           | string  | `line` |
| width       | Circular progress bar canvas width, in px                          | number  | 100    |
| animation   | Whether to turn on transition animation                                     | boolean | true   |
