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

#### TabBar
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tabs | Array | 是 | [] | 底部图标配置 |
| activeKey | number | 否 |  ''  |  默认高亮的 key |
| activeColor | string | 否 |  '#1677ff'  |  高亮的颜色 |
| maxTabCount | number | 否 |  5  |  最大展示的 Tab 数量 |

## 事件

#### TabBar
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | Tab 切换时候，触发回调 |(tab: object, index: number) => void|

<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(6) th:nth-of-type(2) {
    width: 300px;
}
.__dumi-default-mobile-previewer:nth-of-type(2)::after {
    border-bottom: none!important;
}
</style> 
