---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Skeleton skeleton screen

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->
Provide a placeholder graphic combination where you need to wait for content to load
## When to use
- The network is slow, requires a long wait to load, and is only used when loading for the first time.
- On the premise of ensuring the performance of the mobile phone, try to use preloading, preferably without skeleton screen.
- It is suitable for home pages, lists and cards with more graphic information and important information. Do not use small module class components (such as pop-up windows).

## Code Sample

<code src='../../demo/pages/Skeleton/index'></code>

## API

### Skeleton

| Property     | Description                           | Type                       | Default Value  |
| -------- | ------------------------------ | -------------------------- | ------- |
| animate  | Show animation effect               | boolean                    | false   |
| avatar   | Whether to display avatar bitmap             | `boolean \| Avatar`        | false   |
| className| Class Name                           | string                     | -       |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean            | true    |
| paragraph| Paragraph                           | `number \| Paragraph`      | true    |
| style    | Style                           | CSSProperties              | -       |
| title    | Whether to display title bitmap             | boolean                    | true    |

### Avatar

| Property     | Description                             | Type         | Default Value   |
| -------- | -------------------------------- | ------------ | -------- |
| animate  | Show animation effect                 | boolean      | false    |
| className| Class Name                             | string       | -        |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean    | true     |
| shape    | 头像形状 `circle` 或 `square`   | string       | `square` |
| size     | 头像大小 `x-small`、`small`、`medium` 或 `large` | string  | `medium` |
| style    | Style                             | CSSProperties| -        |

#### Paragraph paragraph

| Property     | Description                            | Type         | Default Value  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | Show animation effect                | boolean      | false    |
| className| Class Name                            | string       | -       |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean  | true    |
| rows     | Number of paragraph lines, greater than 0          | number       | 3       |
| style    | Style                            | CSSProperties| -       |

#### Title Title

| Property     | Description                            | Type         | Default Value  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | Show animation effect                | boolean      | false    |
| className| Class Name                            | string       | -       |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean  | true    |
| style    | Style                            | CSSProperties| -       |

#### Button Button

| Property     | Description                            | Type         | Default Value  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | Show animation effect                | boolean      | false    |
| className| Class Name                            | string       | -       |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean  | true    |
| size     | 大小，`small`、`medium` 或 `large` | string       | `medium`|
| style    | Style                            | CSSProperties| -       |

#### Input input box

| Property     | Description                            | Type         | Default Value  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | Show animation effect                | boolean      | false    |
| className| Class Name                            | string       | -       |
| loading  | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean  | true    |
| style    | Style                            | CSSProperties| -       |
