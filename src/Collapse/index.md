---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Collapse 折叠面板

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码示例

### 基本使用

<code src='../../demo/pages/Collapse/index'></code>

### 手风琴

<!-- <code src='pages/CollapseAccordion/index'></code> -->

### 控制

<!-- <code src='pages/CollapseControl/index'></code> -->

### 带 Checkbox

<code src="../../demo/pages/CollapseWithCheckbox/index"></code>

### 更多自定义

<!-- <code src='pages/CollapseCustom/index'></code> -->

## API

| 属性           | 说明                               | 类型                                                                                             | 默认值 |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ | ------ |
| accordion      | 是否是手风琴模式，仅一个内容被展开 | boolean                                                                                          | false  |
| className      | 类名                               | string                                                                                           | -      |
| content        | 内容区插槽，接收 value、index      | slot                                                                                             | -      |
| current        | 当前展开的索引                     | number[]                                                                                         | -      |
| defaultCurrent | 当前展开的默认索引                 | number[]                                                                                         | []     |
| items          | 折叠面板列表                       | [CollapseItem](#collapseitem)[]                                                                  | []     |
| style          | 样式                               | string                                                                                           | -      |
| title          | 标题插槽，接收 value、index        | slot                                                                                             | -      |
| onChange       | 切换面板的回调                     | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### CollapseItem

| 属性      | 说明     | 类型    | 默认值 |
| --------- | -------- | ------- | ------ |
| content   | 内容     | string  | -      |
| disabled  | 是否禁用 | boolean | false  |
| title     | 标题     | string  | -      |
| className | 类名     | string  | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。
| 变量名 | 默认值 | 备注 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --collapse-title-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 折叠面板标题背景颜色 |
| --collapse-title-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 折叠面板标题颜色 |
| --collapse-title-icon-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #ffffff;">#cccccc</div> | 折叠面板标题图标颜色 |
| --collapse-content-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 折叠面板内容背景颜色 |
| --collapse-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | 折叠面板边框颜色 |
| --collapse-node-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 折叠面板节点文本颜色 |
| --collapse-container-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 折叠面板容器背景颜色 |
