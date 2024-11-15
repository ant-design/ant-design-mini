---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Table

## When to use

- Display row and column data

## Code Sample

### Basic Usage

<code src="../../demo/pages/Table/index"></code>

## API

| Property     | Type           | Default Value | Description|
|--------------|----------------|--------------| ---------------------- |
| className    | `string`       | ``           | Class Name |
| dataSource   | `any[]`        | `[]`         | Data source        |
| columns      | `any[]`        | `[]`         | The configuration description of the table columns |
| displayType  | `FULL、DEFAULT` | `DEFAULT`    | The table style type, where the default style will be displayed according to the configured width; under the FULL type, the table content will stretch to fill the entire screen |
| scrollHeight | `string`       | ``           | Specify the height of the scrollable area |
| item         | slot          | -            | Cell (the cell data can be obtained through slot-scope) |
| empty        | slot          | -            | Fallback style for empty content |
