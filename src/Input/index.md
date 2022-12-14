---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Input 输入框
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集，提供文本框、选择框两种类型

## 代码示例
### Input 基本使用
<code src='pages/Input/index'></code>

### InputBase 基本使用
InputBase是没有样式的Input
<code src='pages/InputBase/index'></code>

### SearchBar 搜索框 
<code src='pages/InputSearchBar/index'></code>


## API

### Input属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| allowClear | 可以点击清除图标删除内容 | boolean | false |
| inputClassName | input类名 | string | - |
| inputStyle | input样式 | string | - |

### Input, InputBase 相同的属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| defaultValue | 始值值 | boolean | - | 
| className | 类名| string | - |
| disabled | 是否禁用 | boolean | false |
| password | 是否是密码类型 | boolean | false |  |
| placeholder | 占位符 | string | - |
| style | 样式| string | - |
| value | 输入框的值。受控模式。 | string | - | 
| onConfirm | 点击键盘完成时触发此回调 | (value: string, event: Event => void | - |
| onFocus | 聚焦时触发触发此回调 | (value: string, event: Event) => void | - |
| onBlur | 失焦时触发此回调 | (value: string, event: Event) => void | - |
| onChange | 输入时触发此回调 | (value: string, event: Event) => void | - |

### Input, InputBase 更多相同属性

以下属性同 https://opendocs.alipay.com/mini/component/input
- focus
- enableNative
- always-system
- controlled
- password
- placeholder-style
- placeholder-class
- maxlength
- name
- random-number
- selection-start
- selection-end
- cursor
- confirm-type
- confirm-hold

### Input, InputBase 实例方法
实例方案需要小程序 `component2` 可使用
| 属性 | 说明 | 类型 |
| -----|-----|-----|
| update | 更新值 | (value: string) => void |
| getValue | 得到值 | () => string |

## FAQ
### Input出现光标问题
可查看 https://opendocs.alipay.com/mini/component/input#FAQ 使用 `enableNative` 属性解决

### 使用value受控模式出现键盘问题
这个是由于 https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip
解决方式为：不使用value受控模式，采用ref方式调用input更新方法
```html
<input defaultValue="{{defaultValue}}" ref="handelRef" />
<button onTap="clear">clear</button>
```

```js
Page({
  handelRef(input) {
    this.input = input;
  },
  clear() {
    this.input.update('');
  }
})
```

### 实例方法不可用
需要使用 `component2` https://opendocs.alipay.com/mini/framework/component-ref