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

### 更多自定义
<code src='pages/ButtonCustom/index'></code>

## API

### button
| 属性 | 说明 | 类型 | 默认值 |
| type | 按钮类型, 可选 `primary` `default` `text`  | string | `default` |
| danger | 是否为危险按钮 | boolean | false |
| disabled | 是否为失效按钮 | boolean | false |
| activeClassName | 按下时的类名 | string | - |
| className | 类名 | string | - |
| style | 样式 | string | - |
| inline | 是否为内联按钮  | boolean | false |
| icon | 按钮左侧图标 | string | - |
| loading | 是否加载中，加载中时不可点击 | boolean | - |
| size | 按钮大小。仅在 inline 下生效  | number | - |
| subText | 辅助文字，显示在第二行 | string | - |
| stopPropagation | 是否阻止事件冒泡 | boolean | false |
| onTap | 点击按钮，触发此回调 | (e: Event) => void  | - |

### 其他属性
| 属性 | 说明 | 类型 | 默认值 |
| publicId | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。| string | - |
| openType | 开放能力 | string | 否 | - |
| scope | 当 openType 为 getAuthorize 时有效string | 否 | - |
| htmlType | 按钮原生类型，在表单提交时有效 | string | - |

