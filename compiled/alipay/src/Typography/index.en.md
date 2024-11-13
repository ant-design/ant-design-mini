---
nav:
  path: /components
group:
  title: Other
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Typography

## When to use

- It is used when a piece of text needs to be displayed. It supports ellipsis and is compatible with bold on different platforms.
- It can be used when action point operation buttons with icons are required.

## Precautions

- `icon` properties can support `Icon` Components `type` property, you can also pass in the link address of the icon directly.
- In disabled mode, you can pass in `onDisabledTap` Event, used to listen for the user's click on the text in the disabled state.

## Code example

### Basic Usage

<code src='../../demo/pages/Typography/index'></code>

## Property

| Property        | Description                                                                                                                                    | Type                           | Default Value |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------- |
| text            | Text content                                                                                                                                   | string                         | -             |
| iconPosition    | Icon Location                                                                                                                                  | `left` \| `right`              | `right`       |
| icon            | Icon, you can support the type attribute of the Icon component, or you can directly pass in the link address of the icon.                      | IconType \| string             | ''            |
| className       | Style Class                                                                                                                                    | string                         | -             |
| activeClassName | Click to activate the style class.                                                                                                             | string                         | -             |
| style           | Style                                                                                                                                          | string                         | -             |
| disabled        | Disable                                                                                                                                        | boolean                        | false         |
| selectable      | Whether it can be selected                                                                                                                     | boolean                        | false         |
| fontWeight      | Word weight, compatible with iOS, Android platform bold effect                                                                                 | `normal` \| `medium` \| `bold` | `normal`      |
| lineThrough     | Add Strikethrough Style                                                                                                                        | boolean                        | false         |
| underline       | Add Underline Style                                                                                                                            | boolean                        | false         |
| ellipsisRow     | Multiple lines are omitted, and the value must be greater than or equal to 1, which is consistent with the-webkit-line-clamp attribute of css. | number                         | -             |
| onTap           | Click the button to trigger this callback                                                                                                      | (e: Event) => void             | -             |
| catchTap        | Click the button to trigger this callback, non-bubbling                                                                                        | (e: Event) => void             | -             |
| onDisabledTap   | In the disabled state, click the button to trigger this callback                                                                               | (e: Event) => void             | -             |
