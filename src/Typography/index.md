---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 15
toc: content
---

# Typography 排版

## 何时使用

- 需要对一段文本进行展示时使用，支持省略，兼容不同平台的加粗等。
- 当需要带图标的行动点操作按钮时可以使用。

## 注意事项

- `icon` 属性可以支持 `Icon` 组件的 `type` 属性，也可以直接传入图标的链接地址。
- 禁用模式下，可以传入 `onDisabledTap` 事件，用于监听禁用状态下，用户对文本的点击。

## 代码示例

### 基础用法

<code src='pages/Typography/index'></code>

## 属性

| 属性            | 说明                                                                | 类型                                                               | 默认值   |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- |
| text            | 文本内容                                                            | string                                                             | -        |
| type            | 类型                                                                | - \|`copy` \| `delete` \| `edit` \| `link` \|`location` \| `share` | -        |
| iconPosition    | 图标位置                                                            | `left` \| `right`                                                  | `right`  |
| icon            | 图标，可以支持 Icon 组件的 type 属性，也可以直接传入图标的链接地址  | IconType \| string                                                 | ''       |
| className       | 样式类                                                              | string                                                             | -        |
| activeClassName | 点击是激活态样式类                                                  | string                                                             | -        |
| style           | 样式                                                                | string                                                             | -        |
| disabled        | 是否禁用                                                            | boolean                                                            | false    |
| selectable      | 是否可被选中                                                        | boolean                                                            | false    |
| fontWeight      | 字重，兼容 iOS、Android 平台的加粗效果                              | `normal` \| `medium` \| `bold`                                     | `normal` |
| lineThrough     | 添加删除线样式                                                      | boolean                                                            | false    |
| underline       | 添加下划线样式                                                      | boolean                                                            | false    |
| ellipsisRow     | 多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致 | number                                                             | -        |
| onTap           | 点击按钮，触发此回调                                                | (e: Event) => void                                                 | -        |
| catchTap        | 点击按钮，触发此回调，非冒泡                                        | (e: Event) => void                                                 | -        |
| onDisabledTap   | 禁用状态下，点击按钮，触发此回调                                    | (e: Event) => void                                                 | -        |
