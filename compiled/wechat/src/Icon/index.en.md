---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
---

# Icon

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Semantic vector graphics.

## When to use

Icon icons can be used when graphics are needed to metaphorically present basic operating functions and give users correct, friendly and clear operating guidelines.

## Introduction
Introducing components in index.json
```json
"usingComponents": {
  "ant-icon": "antd-mini/es/Icon/index"
}
```

## Icon List

Search and view the icon, click the icon to copy.

<Icon></Icon>

## Code example

### Basic use
```xml
<ant-icon type="SmileOutline" />
```

### Custom size and color
```xml
<ant-icon type="SmileOutline" style="font-size: 20px" />
<ant-icon type="SmileOutline" style="color: red" />
```



### Demo Code
<code src='../../demo/pages/Icon/index' noChangeButton></code>


## API

| Property       | Description                       | Type                       | Default Value |
| :--------- | :------------------------- | :------------------------- | :----- |
| className  | Class Name                       | string                     | -      |
| style      | Style                       | string                     | -      |
| type       | Types of icons                 | string                     | -      |
| catchTap   | Callback function triggered when the icon is clicked   | (e: Event) => void         | -      |
| onTap      | Callback function triggered when the icon is clicked   | (e: Event) => void         | -      |
