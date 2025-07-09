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
| flex             | string          |  否          |  请输入     |  占位符提示                   |
| fixedFooter               | number          |  否          |  --        |  最大长度前                    |
| protocolPrefix                | boolean         |  否          |  --        |  是否密码输入                  |
| showProtocolCheck                | boolean         |  否          |  --        |  是否密码输入                  |
| footer                | boolean         |  否          |  --        |  是否密码输入                  |
| protocols                | boolean         |  否          |  --        |  是否密码输入                  |

### 方法

## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormOperation/index'></code>
