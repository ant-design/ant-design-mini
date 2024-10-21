---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# List

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Generic lists can be clean and efficient to carry text, lists, pictures, paragraphs and other elements.

## When to use
Used when information needs to be presented in the form of a list.

## Code example
<code src='../../demo/pages/List/index'></code>

## API

### List
| Property | Description | Type | Default Value |
| ----- | ----- | ----- | ----- |
| className | Class Name | string | - | 
| footer | Bottom Description | string \| slot | - |
| header | Head Description | string \| slot | - |
| radius | Whether with rounded corners | boolean | false | 
| style | Style | string | - |

### ListItem
| Property | Description | Type | Default Value |
| ----- | ----- | ----- | ----- |
| arrow | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean | - |
| brief | Second line of information | string \| slot | - | 
| className | Class Name | string | - | 
| disabled | Disable | boolean | false | 
| extra | Extra right | string \| slot | - | 
| extraBrief | Auxiliary information on the right side | string \| slot | - | 
| image | Picture on the left | string | - |  
| radius | Whether with rounded corners | boolean | false | 
| showDivider | Show underline or not | boolean | true | 
| style | Style | string | - |
| title | Header Information | string \| slot | - |
| catchTap | Callback triggered when clicked | (e: Event) => void |
| onTap | Callback triggered when clicked | (e: Event) => void |
