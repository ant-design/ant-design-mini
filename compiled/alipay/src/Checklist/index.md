---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Checklist 可勾选列表

列表的勾选操作。

## 何时使用

- 在一组列表项中选择一个或多个。
- 可勾选列表的使用需要默认至少勾选一项，方便用户了解列表是可以勾选的。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-checklist": "antd-mini/es/Checklist/index",
#endif
#if WECHAT
  "ant-checklist": "antd-mini/Checklist/index",
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-checklist
  defaultValue="{{ [1] }}"
  options="{{ options }}"
  data-options="{{ options }}"
  onChange="onChange" />
```

```js
Page({
  data: {
    options: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '可勾选列表项2',
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
  },
  onChange(v, items, e) {
    console.log('当前选中的值为：', v, items, e);
  },
});
```

### 受控和多选

> 传入 `multiple` 属性支持多选模式。 `value` 属性和 `onChange` 事件配合使用实现状态受控。

```xml
<ant-checklist
  value="{{ value }}"
  options="{{ options }}"
  multiple
  onChange="onChangeControlled" />
```

```js
Page({
  data: {
    value: [1, 2],
    options: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '可勾选列表项2',
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ value });
#endif
#if WECHAT
    this.setData({ value: value.detail[0] });
#endif
  },
});
```

### 自定义

> 可以通过插槽，自定义勾选图标以及样式

```xml
<ant-checklist
  defaultValue="{{ [2] }}"
  options="{{ options }}"
  multiple
  onChange="onChange">
  <view slot="icon">
    <ant-icon
      style="color: red"
      type="LikeOutline"
      className="demo-checklist-checked-icon" />
  </view>
  <view
    slot="content"
    slot-scope="props">
    title: {{ props.item.title }}
  </view>
</ant-checklist>
```

## Demo 代码

<code src='../../demo/pages/Checklist/index'></code>

## API

| 属性                   | 说明                                                 | 类型                                                                                                                                                                                                             | 默认值 |
| ---------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| className              | 类名                                                 | string                                                                                                                                                                                                           | -      |
| content                | CheckListItem 自定义内容区作用域插槽，接收 item 参数 | slot                                                                                                                                                                                                             | -      |
| defaultValue           | 默认选中数据                                         | string \| number \| (string \| number)[]                                                                                                                                                                         | -      |
| icon                   | 自定义选中 Icon 插槽                                 | slot                                                                                                                                                                                                             | -      |
| multiple               | 是否支持多选                                         | boolean                                                                                                                                                                                                          | false  |
| options                | 配置每一列的选项                                     | [ChecklistItem](#checklistitem)[]                                                                                                                                                                                | []     |
| style                  | 样式                                                 | string                                                                                                                                                                                                           | -      |
| value                  | 选中数据                                             | string \| number \| (string \| number)[]                                                                                                                                                                         | -      |
| #if ALIPAY onChange    | 选中项发生变化时，触发回调                           | (value: string \| number \| (string \| number)[], column: [ChecklistItem](#checklistitem) \| [ChecklistItem](#checklistitem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:change | 选中项发生变化时，触发回调                           | (value: string \| number \| (string \| number)[], column: [ChecklistItem](#checklistitem) \| [ChecklistItem](#checklistitem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### ChecklistItem

| 参数        | 说明     | 类型    | 默认值 |
| ----------- | -------- | ------- | ------ |
| description | 描述     | string  | -      |
| disabled    | 是否禁用 | boolean | false  |
| image       | 图片     | string  | -      |
| readonly    | 是否只读 | boolean | false  |
| title       | 标题     | string  | -      |
| value       | 值       | string  | -      |
