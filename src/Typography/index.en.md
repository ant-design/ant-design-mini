---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: content
---

# Typography

- It is used when a piece of text needs to be displayed. It supports ellipsis and is compatible with bold on different platforms.
- It can be used when action point operation buttons with icons are required.

## Precautions

- `icon` properties can support `Icon` Components `type` property, you can also pass in the link address of the icon directly.
- In disabled mode, you can pass in `onDisabledTap` Event, used to listen for the user's click on the text in the disabled state.

## Code Sample

### Basic Usage

<code src='../../demo/pages/Typography/index'></code>

## Property

| Property                        | Description                                                                | Type                           | Default Value   |
| --------------------------- | ------------------------------------------------------------------- | ------------------------------ | -------- |
| text                        | Text content                                                            | string                         | -        |
| iconPosition                | Icon Location                                                            | `left` \| `right`              | `right`  |
| icon                        | Icon, you can support the type attribute of the Icon component, or you can directly pass in the link address of the icon.  | IconType \| string             | ''       |
| className                   | Style Class                                                              | string                         | -        |
| activeClassName             | Click to activate the style class.                                                  | string                         | -        |
| style                       | Style                                                                | string                         | -        |
| disabled                    | Disable                                                            | boolean                        | false    |
| selectable                  | Whether it can be selected                                                        | boolean                        | false    |
| fontWeight                  | Heavy characters, compatible with iOS and Android platforms                              | `normal` \| `medium` \| `bold` | `normal` |
| lineThrough                 | Add Strikethrough Style                                                      | boolean                        | false    |
| underline                   | Add Underline Style                                                      | boolean                        | false    |
| ellipsisRow                 | Multiple lines are omitted, and the value must be greater than or equal to 1, which is consistent with the-webkit-line-clamp attribute of css. | number                         | -        |
| #if ALIPAY onTap            | Click the button to trigger this callback                                                | (e: Event) => void             | -        |
| #if ALIPAY catchTap         | Click the button to trigger this callback, non-bubbling                                        | (e: Event) => void             | -        |
| #if ALIPAY onDisabledTap    | In the disabled state, click the button to trigger this callback                                    | (e: Event) => void             | -        |
| #if WECHAT bindtap         | Click the button to trigger this callback                                                | (e: Event) => void             | -        |
| #if WECHAT binddisabledtap | In the disabled state, click the button to trigger this callback                                    | (e: Event) => void             | -        |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --typography-container-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | typography container color |
