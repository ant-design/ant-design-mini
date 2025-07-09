---
order: 3
nav:
  path: /form
group:
  title: 表单布局
  order: 4
---

# 操作区

表单解决方案内置了表单操作区，可以通过 `operation` 配置。可以设置操作区按钮的内容和布局、以及是否展示协议。

### 属性
| 属性                    |    类型          | 是否必须       | 默认值      |  功能描述              |
| :--------               | :--------       | :---         | :----      |  :---                  |
| flex                    | boolean         |  否          |  false     |  按钮的布局是否 flex                   |
| fixedFooter             | boolean         |  否          |  false     |  按钮是否吸底                    |
| protocolPrefix          | string          |  否          |  --        |  协议前面的文案                  |
| showProtocolCheck       | boolean         |  否          |  false     |  是否展示协议勾选的选择框                |
| footer                  | Footer[]        |  否          |  --        |  操作区按钮列表                  |
| protocols               | Protocol[]      |  否          |  --        |  协议列表                  |

### Footer

| 属性                    |    类型          |  功能描述              |
| :--------               | :--------      |  :---                  |
| text                    | string         |  按钮文案                |
| type                    | string         |  按钮 type 同 ant-button 的 type          |
| disabled                | boolean        |  是否置灰按钮                    |

### Protocol

| 属性                    |    类型          |  功能描述              |
| :--------               | :--------      |  :---                  |
| name                    | string         |  协议名称                |
| url                    | string         |  协议链接          |


### 方法
| 属性                    |    类型                         | 是否必须       | 默认值      |  功能描述              |
| :--------               | :--------                      | :---         | :----      |  :---                  |
| onProtocolTap           | (protocol: Protocol) => void   |  否          |  --        |  协议项点击的回调          |
| onActionTap             | (footer: Footer) => void       |  否          |  -         |  按钮点击的回调                    |
| onDisabledTap          | (footer: Footer) => void        |  否          |  --        |  按钮禁用点击的回调                  |
| onProtocolChange       | (checked: boolean) => void      |  否          |  --        |  协议勾选状态更改的回调                |
| onFooterFirstAppear    | () => void                       |  否          |  --       |  操作区第一次展示的回调                  |


## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormOperation/index'></code>
