---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Radio 单选框
在一组可选项中进行单选
## 何时使用
- 在一组可选项中进行单选时


## 代码示例
### Radio
<code src='pages/Radio/index'></code>

### RadioGroup
<code src='pages/RadioGroup/index'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中 | `boolean` | false |
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| color | 图标颜色 | `string` | - |
| style | 样式| `string` | - |
| value | checkbox 携带的 value 值 | `string` | - |
| onChange | 选中状态改变，触发回调 | (checked: `boolean`, event:  `Event` => void | - |


## RadioGroup属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| defaultValue | 初始值  | `string` | - | 
| style | 样式| `string` | - |
| options | 指定可选项 | `{label: string; value: string}[]` | - |
| onChange | 选中状态改变，触发回调 | (value: `string`, event:  `Event` => void | - |
