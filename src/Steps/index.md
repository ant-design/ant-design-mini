---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---
# Steps 步骤条
引导用户按照流程完成任务的导航条
## 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务
## 代码示例

### 基本使用
<code src='pages/Steps/index'></code>

### 控制示例
<code src='pages/StepsControl/index'></code>


## API
  
#### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| current | number | 否 | 0 | 当前步骤 |
| direction | string | 否 | `horizontal` | 方向，可选 `horizontal` `vertical` |
| items | Items[] | 是 | - | 样式 |
| status | string | 否 | `finish` | 指定当前步骤的状态，可选 `finish` `error` |
| style | string | 否 | - | 样式 |

#### 插槽

| slot | slot-scope | 说明 |
| ----|----| ----|
| title | value: Item; index: number | 标题 |
| description | value: Item; index: number | 描述内容 |
| icon | value: Item; index: number | 图标插槽 |

#### Item
Item 里每一项
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| description | string | 否 | - | 内容 |
| title | string | 否 | - | 标题 |