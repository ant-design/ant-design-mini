---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: false
---
# TabBar 底部导航栏
用于在不同页面之间进行切换。

## 注意事项

- 默认 2～5 个选项卡，默认按整体宽度等分居中排布
- 可以使用 Ant Design Mini 自带的图标库或者自定义图片作为图标

## 代码示例
### 基本使用
<code src='pages/TabBar/index'></code>

## 属性

#### TabBar
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| activeClassName |  选项卡激活类名 | `string` | ''  |
| activeStyle | 选项卡激活样式 | `string` | '' |
| className | 类名| `string` | - |
| current |  选中项| `number` |  -  |
| defaultCurrent |  初始选中项 | `number` |  0  |
| items | 底部图标配置 | [TabItem](#tabitem)[] | []  |
| style | 样式| `string` | - |
| text | 选项卡图标作用域插槽，接收item、index、active参数 | `slot` | - |
| text | 选项卡底部文字作用域插槽，接收item、index、active参数 | `slot` | - |
| onChange | Tab 切换时触发回调 |(item: [TabItem](#tabitem), index: `number`) => void|


#### TabItem

| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| icon | 底部图标，支持 [Icon](./Icon) 或图片地址 | `string` | - |
| activeIcon | 激活状态的底部图标，支持 [Icon](./Icon) 或图片地址 | `string` | - |
| text | 底部文字 | `string` | - |
| badge | 徽标类型，参见 [Badge](./Badge) 组件 | `object` | - |

