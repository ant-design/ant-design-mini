---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Collapse 折叠面板

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码示例

### 基本使用

<code src='pages/Collapse/index'></code>

### 手风琴

<code src='pages/CollapseAccordion/index'></code>

### 控制

<code src='pages/CollapseControl/index'></code>

### 带 Checkbox

<code src="pages/CollapseWithCheckbox/index"></code>

### 更多自定义

<code src='pages/CollapseCustom/index'></code>


## API

| 属性       | 说明                         | 类型        | 默认值 |
| ---------- | ---------------------------- | ----------- | ------ |
| accordion  | 是否是手风琴模式，仅一个内容被展开 | boolean     | false  |
| className  | 类名                          | string      | -      | 
| content    | 内容区插槽，接收 value、index | slot        | -      | 
| current    | 当前展开的索引                 | number[]    | -      | 
| defaultCurrent | 当前展开的默认索引         | number[]    | []     |  
| items      | 折叠面板列表                   | [CollapseItem](#collapseitem)[] | [] |  
| style      | 样式                          | string      | -      | 
| title      | 标题插槽，接收 value、index   | slot        | -      | 
| onChange   | 切换面板的回调                 | (current: number[], e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### CollapseItem

| 属性       | 说明      | 类型    | 默认值 |
| ---------- | --------- | ------- | ------ |
| content    | 内容      | string  | -      |
| disabled   | 是否禁用   | boolean | false  |
| title      | 标题      | string  | -      |
