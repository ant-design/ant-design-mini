---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: content
---

# Input 输入框

通过键盘输入内容，是最基础的表单域包装。

## 何时使用

一般用在表单页进行信息的收集。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-input": "antd-mini/es/Input/index",
  "ant-textarea": "antd-mini/es/Input/Textarea/index"
#endif
#if WECHAT
  "ant-input": "antd-mini/Input/index",
  "ant-textarea": "antd-mini/Input/Textarea/index"
#endif
}
```

## 代码示例

### Input 基本使用
```xml
<ant-input placeholder="请输入内容" onChange="onChange" />
<ant-input placeholder="请输入内容" defaultValue="initial value" onChange="onChange" />
<ant-input placeholder="请输入内容，带清除按钮" allowClear />
<ant-input placeholder="被禁用的输入框" disabled="{{ true }}" />
```

### 带前缀后缀
```xml
<ant-input placeholder="请输入内容" onChange="onChange" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### 受控模式
```xml
<ant-input controlled="{{ true }}" value="{{ value }}" placeholder="请输入内容" allowClear onChange="handleChange" />
```

### 输入金额
```xml
<ant-input placeholder="请输入金额" type="digit" focusClassName="border" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### SearchBar 搜索框
```xml
 <view class="search-line">
    <ant-input
      placeholder="请输入内容"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
      onConfirm="onConfirm"
    >
      <ant-icon slot="prefix" type="SearchOutline" />
      <ant-icon slot="suffix" type="AudioOutline" />
    </ant-input>
    <view class="cancel">取消</view>
  </view>
```
```css
.search-line {
  display: flex;
  align-items: center;
  padding: 16px;
}
.search-bar {
  padding: 4px 0 4px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.4s;
  flex: 1;

  &-focus {
    border-color: @COLOR_BRAND1;
  }
}
.cancel {
  color: @COLOR_TEXT_PRIMARY;
  margin-left: 8px;
}
```

### Textarea

#### 基础用法
```xml
 <ant-textarea placeholder="请输入内容" autoHeight onChange="onChange" />
 <ant-textarea placeholder="请输入内容" defaultValue="initial value" autoHeight onChange="onChange" />
```

#### 受控模式
```xml
 <ant-textarea value="{{ value }}" placeholder="请输入内容" allowClear onChange="handleChange" />
```

### 自定义
#### 带有边框
```xml
<ant-input className="custom" placeholder="请输入内容" onChange="onChange" />
```
```css
.custom {
  border: 1px solid @COLOR_BORDER;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
}
```
#### 自定义背景色
```xml
 <ant-input className="custom-color" placeholder="请输入内容" onChange="onChange" />
```
```css
.custom-color {
  margin-bottom: 12px;
  input, textarea {
    padding: 4px;
    background: #f5f5f5;
    border-radius: 4px;
  }
}
```


### Demo代码
<code src='../../demo/pages/Input/index'></code>

## API

### Input、Textarea 相同的属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 类名 | string | - |
| controlled | 有键盘输入问题，可使用 `controlled="{{false}}"` | boolean | - |
| defaultValue | 初始值 | string | - |
| disabled | 是否禁用 | boolean | false |
| maxLength | 最大长度 | number | 140 |
| placeholder | 占位符 | string | - |
| style | 样式 | string | - |
| value | 输入框的值。受控模式。 | string | - |
| onConfirm | 点击键盘完成时触发此回调 | (value: string, event: Event) => void | - |
| onFocus | 聚焦时触发此回调 | (value: string, event: Event) => void | - |
| onBlur | 失焦时触发此回调 | (value: string, event: Event) => void | - |
| onChange | 输入时触发此回调 | (value: string, event: Event) => void | - |

### Input 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | boolean | false |
| enableNative | 是否使用 native | boolean | - |
| focus | 聚焦，查看[详细说明](#input-focus) | boolean | - |
| password | 是否是密码类型 | boolean | false |
| prefix | input 前缀 | slot | - |
| suffix | input 后缀 | slot | - |

### Textarea 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoHeight | 是否自动增高。 | boolean | false |
| enableNative | 是否使用 native | boolean | - |
| showCount | 是否显示字数统计 | boolean | true |

### Input、Textarea 更多相同属性

- confirm-type
- name
- placeholder-class
- placeholder-style
- type

[Input](https://opendocs.alipay.com/mini/component/input)  
[Textarea](https://opendocs.alipay.com/mini/component/textarea)

### Input focus

使用 focus 属性需要在 app.json window 里加上 `"enableInPageRenderInput": "YES"`，否则无法在 iOS 里打开键盘。

### Input、Textarea 实例方法

实例方法需要小程序 `component2` 可使用。

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| update | 更新值 | (value: string) => void |
| getValue | 得到值 | () => string |

## FAQ

### Input focus 没有打开键盘

需要在 app.json window 里加上 `"enableInPageRenderInput": "YES"`。

### Input 出现光标问题

可查看 [此文档](https://opendocs.alipay.com/mini/component/input#FAQ) 使用 `enableNative` 属性解决。

### 使用 value 受控模式出现键盘问题

这个是由于 [输入框的一个已知问题](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip)。

解决方式为：不使用 value 受控模式，采用 ref 方式调用 input 更新方法。

```html
<input defaultValue="{{defaultValue}}" ref="handleRef" />
<button onTap="clear">clear</button>
```

```js
Page({
  handleRef(input) {
    this.input = input;
  },
  clear() {
    this.input.update('');
  },
});
```

从 v2.15.0 开始，受控模式下，不支持通过 update 方法更新值。

### 实例方法不可用

需要使用 `component2`，详情参见[ref 获取组件实例](https://opendocs.alipay.com/mini/framework/component-ref)。
