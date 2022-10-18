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
<code src='../../demo/pages/TabBar'></code>

## 属性
``` typescript
interface ITabConfig {
    /** 底部图标，支持 Icon 或图片地址  */
    icon: string;
    /** 激活状态的底部图标，支持 Icon 或图片地址 */
    activeIcon: string;
    /** 底部文字 */
    text: string;
    /** 徽标类型，参见 Badge 组件 */
    badge?: object;
}
```

#### TabBar
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tabs | ITabConfig[] | 是 | [] | 底部图标配置，详情见下方 TabConfig 配置 |
| activeKey | number | 否 |  0  |  默认高亮的 key |
| activeClassName | string | 否 |  ''  |  选项卡激活类名 |
| activeStyle | string | 否 |  ''  |  选项卡激活样式 |
| maxTabCount | number | 否 |  5  |  最大展示的 Tab 数量 |
| className | string | 否 | -| 类名 |
| style | string | 否 | -| 整体样式 |



## 事件

#### TabBar
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | Tab 切换时触发回调 |(tab: ITabConfig, index: number) => void|

## 插槽

| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| icon | 选项卡图标 | item、index、active |
| text | 选项卡底部文字 | item、index、active |

