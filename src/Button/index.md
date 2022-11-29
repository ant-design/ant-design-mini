---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---
# Button 按钮
用于开始一个即时操作

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑
## 代码示例
### 基本使用
<code src='pages/Button/index'></code>

### Inline
<code src='pages/ButtonInline/index'></code>

### Icon
<code src='pages/ButtonIcon/index'></code>

### 自定义
<code src='pages/ButtonCustom/index'></code>

## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| publicId | string | 否 | - | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。 |
| openType | string | 否 | - | 开放能力。 |
| scope | string | 否 | - | 当 openType 为 getAuthorize 时有效。 |
| type | string | 否 | 'default' | 按钮类型，可选 `primary` `default` `text`  |
| danger | boolean | 否 | false | 危险按钮 |
| disabled | boolean | 否 | false | 是否禁用 |
| activeClassName | string | 否 | - | 按下时的类名 |
| subText | string | 否 | - | 辅助文字，显示在第二行 |
| inline | boolean | 否 | false | 内联，不撑满父级宽度 |
| size | number | 否 | 'medium' | 内联尺寸 |
| icon | string | 否 | - | 按钮左侧图标 |
| loading | boolean | 否 | false | 是否加载中，加载中时不可点击 |
| htmlType | 'button' &verbar; 'submit' &verbar; 'reset' | 否 | 'button' | 按钮原生类型，在表单提交时有效 |
| stopPropagation | boolean | 否 | false | 是否阻止事件冒泡 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 样式 |
| onTap | (e: Event) => void  | - | - | 点击按钮，触发此回调 |
