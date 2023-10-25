---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Radio 单选框

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

在一组可选项中进行单选
## 何时使用
- 在一组可选项中进行单选时


## 代码示例
### Radio
<code src='pages/Radio/index'></code>

### RadioGroup
<code src='pages/RadioGroup/index'></code>

## API

### Radio
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中 | boolean | - |
| className | 类名| string | - |
| disabled | 是否禁用  | boolean | false | 
| color | 图标颜色 | string | - |
| defaultChecked | 是否选中 | boolean | false |
| style | 样式| string | - |
| value | checkbox 携带的 value 值 | string | - |
| onChange | 选中状态改变，触发回调 | (checked: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |


### RadioGroup

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| color | 图标颜色 | string | - |
| disabled | 是否禁用  | boolean | false |
| defaultValue | 初始值  | string | - |
| label | label区插槽，接收value（当前项可选项item）、index（索引） | slot | - | 
| options | 指定可选项 | `{label?: string; value?: string; disabled?: boolean;}[]` | - |
| position | 布局，可选`horizontal` `vertical` | string | `vertical` |
| style | 样式 | string | - |
| value | radio group 里选中的值 | string | - |
| onChange | 选中状态改变，触发回调 | (value: string, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
