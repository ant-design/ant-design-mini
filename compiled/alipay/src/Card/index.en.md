---
nav:
  path: /components
group:
  title: Information Display
  order: 9
toc: content
---

# Card

## When to use

- Basic card container.

## Code Sample

### Basic Usage

<code src="../../demo/pages/Card/index"></code>

## API

| Property     | Type           | Default Value | Description     |
|--------------|----------------|--------------|-----------------|
| className    | `string`       | ``           | Class Name      |
| config | [ICardConfig](#ICardConfig)  | - | Card Config     |
| title | string  | - | Card Title      |
| divider | bool  | false | Divider line    |
| needFold | bool  | false | Do you need a collapsible card? If operateText is empty, then it's required; otherwise, you need to manually handle the expand and collapse functionality. |
| foldStatus | bool  | false | Whether to fold, passing true will cause it to collapse, regardless of whether needFold is true. |
| headSticky | bool  | false | Does the title need to be fixed at the top |
| stickyTransparentTitle | bool  | '' | Does the ceiling adhere to the transparent header? If so, it will automatically calculate the height of the transparent header. |
| stickyTop | string  | '' | When implementing a sticky header, at what distance from the top should it stick |
| operateText | string  | "" | The text for the operation buttons on the right side of the default title bar. |
| onOperateClick | () => void  | - | The callback for clicking the operation button on the right side of the default title bar. |
| onFoldChange | () => void  | - | The callback for the click event of the expand/collapse button on the right side of the default title bar. |
| onTitleSticky | (status) => void  | - | Callback for when the title area's sticky state changes |

### ICardConfig

| Configuration Item | Explanation | Default Value |
| --- |--------| --- |
| foldTapArea | The folding behavior trigger area is btn丨header, specifying that clicking anywhere on the entire header bar will cause it to collapse (you need to specify needFold). | 'btn' |

## SLOT

| Name        | Explanation                 |
|-------------| -------------------- |
| Default slot        | Card content             |
| headerTitle | Custom title on the left side of the title bar |
| headerRight | Customize the content on the right side of the title bar |
