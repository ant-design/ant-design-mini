---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# ActionSheet 动作面板

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

从底部弹出的动作菜单面板。

## 何时使用

由用户操作触发，提供一组与操作相关的两个或多个选项，让用户在不离场的情况下完成操作。相比于对话框，动作面板的位置更适合于在大屏幕时代单手操作的场景。

## 代码示例

<code src='../../demo/pages/ActionSheet/index'></code>

## API

| 属性       | 说明                               | 类型                                                                                                                                          | 默认值 |
| ---------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| actions    | 面板选项列表                       | `[ActionSheetItem](#actionshetitem)`[]                                                                                                        | []     |
| cancelText | 取消按钮文字                       | string                                                                                                                                        | 取消   |
| className  | 类名                               | string                                                                                                                                        | -      |
| style      | 样式                               | string                                                                                                                                        | -      |
| title      | 标题                               | string                                                                                                                                        | -      |
| visible    | 是否展开                           | boolean                                                                                                                                       | false  |
| zIndex     | 弹窗层级                           | number                                                                                                                                        | 998    |
| onClose    | 关闭时触发                         | `(event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void                                                           | -      |
| onAction   | 点击选项时触发，禁用状态下不会触发 | `(item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void | -      |

### ActionSheetItem

| 属性        | 说明         | 类型    | 默认值 |
| ----------- | ------------ | ------- | ------ |
| icon        | 图标         | -       | -      |
| danger      | 是否危险模式 | boolean | false  |
| description | 描述         | string  | -      |
| disabled    | 是否禁用     | boolean | false  |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                           | 备注           |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | -------------- |
| --actionsheet-danger-color   | <div style="width: 150px; height: 30px; background-color: #ff3141;">#ff3141</div>                | 危险颜色       |
| --actionsheet-title-color    | <div style="width: 150px; height: 30px; background-color: #999999;">#999999</div>                | 标题颜色       |
| --actionsheet-item-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff">#333333</div> | 条目颜色       |
| --actionsheet-item-active-bg | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333">#eeeeee</div> | 条目激活背景色 |
| --activesheet-item-cancel-bg | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333">#f5f5f5</div> | 条目取消背景色 |
