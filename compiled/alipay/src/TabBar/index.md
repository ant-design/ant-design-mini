---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# TabBar 底部导航栏

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

用于在不同页面之间进行切换。

## 代码示例

<code src='../../demo/pages/TabBar/index'></code>

## API

| 属性            | 说明                                                    | 类型                      | 默认值 |
| --------------- | ------------------------------------------------------- | ------------------------- | ------ |
| activeClassName | 选项卡激活类名                                          | string                    | -      |
| activeStyle     | 选项卡激活样式                                          | string                    | -      |
| className       | 类名                                                    | string                    | -      |
| current         | 选中项                                                  | number                    | -      |
| defaultCurrent  | 初始选中项                                              | number                    | 0      |
| icon            | 选项卡图标作用域插槽，接收 item、index、active 参数     | slot                      | -      |
| items           | 底部图标配置                                            | [TabItem](#tabitem)[]     | []     |
| style           | 样式                                                    | string                    | -      |
| text            | 选项卡底部文字作用域插槽，接收 item、index、active 参数 | slot                      | -      |
| onChange        | Tab 切换时触发回调                                      | `(index: number) => void` | -      |

### TabItem

| 参数       | 说明                                               | 类型   | 默认值 |
| ---------- | -------------------------------------------------- | ------ | ------ |
| icon       | 底部图标，支持 [Icon](./Icon) 或图片地址           | string | -      |
| activeIcon | 激活状态的底部图标，支持 [Icon](./Icon) 或图片地址 | string | -      |
| text       | 底部文字                                           | string | -      |
| badge      | 徽标类型，参见 [Badge](./Badge) 组件               | object | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                | 默认值                                                                                            | 备注            |
| --------------------- | ------------------------------------------------------------------------------------------------- | --------------- |
| --tabbar-bg           | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | TabBar 背景颜色 |
| --tabbar-item-color   | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | TabBar 条目颜色 |
| --tabbar-active-color | <div style="width: 150px; height: 30px; background-color: #1677ff;">#1677ff</div>                 | TabBar 激活颜色 |
