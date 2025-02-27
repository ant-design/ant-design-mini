---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: content
---

# Input 输入框

通过键盘输入内容，是最基础的表单域包装。一般用在表单页进行信息的收集。

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
<ant-input placeholder="input here" />
<ant-input placeholder="input here" defaultValue="initial value" />
<ant-input placeholder="input here, with clear button" allowClear />
<ant-input placeholder="disabled input" disabled="{{true}}" />
```

### 带前缀后缀

```xml
<ant-input placeholder="input here" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### 受控模式

```xml
<ant-input controlled="{{true}}" value="{{value}}" placeholder="input here" allowClear />
```

### 输入金额

```xml
<ant-input placeholder="input digit here" type="digit" focusClassName="border" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### SearchBar 搜索框

```xml
 <view class="search-line">
    <ant-input
      placeholder="input here"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
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
    border-color: #1677ff;
  }
}
.cancel {
  color: #fff;
  margin-left: 8px;
}
```

### Textarea

#### 基础用法

```xml
 <ant-textarea placeholder="input here" autoHeight />
 <ant-textarea placeholder="input here" defaultValue="initial value" autoHeight />
```

#### 受控模式

```xml
 <ant-textarea value="{{value}}" placeholder="input here" allowClear />
```

### 自定义

#### 带有边框

```xml
<ant-input className="custom" placeholder="input here" />
```

```css
.custom {
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
}
```

#### 自定义背景色

```xml
 <ant-input className="custom-color" placeholder="input here" />
```

```css
.custom-color {
  margin-bottom: 12px;
  input,
  textarea {
    padding: 4px;
    background: #f5f5f5;
    border-radius: 4px;
  }
}
```

### Demo 代码

<code src='../../demo/pages/Input/index'></code>

## API

### Input、Textarea 相同的属性

| 属性                   | 说明                                                                             | 类型                                  | 默认值 |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------------- | ------ |
| className              | 类名                                                                             | string                                | -      |
| controlled             | 有键盘输入问题，可使用 `controlled="{{false}}"`                                  | boolean                               | -      |
| defaultValue           | 初始值                                                                           | string                                | -      |
| disabled               | 是否禁用                                                                         | boolean                               | false  |
| maxLength              | 最大长度                                                                         | number                                | 140    |
| placeholder            | 占位符                                                                           | string                                | -      |
| style                  | 样式                                                                             | string                                | -      |
| max                    | 最大值，仅在 type 为 number、digit、numberpad、digitpad 时，且输入有效数字后生效 | number                                | -      |
| min                    | 最小值，仅在 type 为 number、digit、numberpad、digitpad 时，且输入有效数字后生效 | number                                | -      |
| precision              | 计算精度，保留几位小数，输入有效数字后生效                                       | number                                | -1     |
| value                  | 输入框的值。受控模式。                                                           | string                                | -      |
| #if ALIPAY onConfirm   | 点击键盘完成时触发此回调                                                         | (value: string, event: Event) => void | -      |
| #if ALIPAY onFocus     | 聚焦时触发此回调                                                                 | (value: string, event: Event) => void | -      |
| #if ALIPAY onBlur      | 失焦时触发此回调                                                                 | (value: string, event: Event) => void | -      |
| #if ALIPAY onChange    | 输入时触发此回调                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindconfirm | 点击键盘完成时触发此回调                                                         | (value: string, event: Event) => void | -      |
| #if WECHAT bindfocus   | 聚焦时触发此回调                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindblur    | 失焦时触发此回调                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindchange  | 输入时触发此回调                                                                 | (value: string, event: Event) => void | -      |

### Input 属性

| 属性         | 说明                               | 类型    | 默认值 |
| ------------ | ---------------------------------- | ------- | ------ |
| allowClear   | 可以点击清除图标删除内容           | boolean | false  |
| enableNative | 是否使用 native                    | boolean | -      |
| focus        | 聚焦，查看[详细说明](#input-focus) | boolean | -      |
| password     | 是否是密码类型                     | boolean | false  |
| prefix       | input 前缀                         | slot    | -      |
| suffix       | input 后缀                         | slot    | -      |

### Textarea 属性

| 属性         | 说明             | 类型    | 默认值 |
| ------------ | ---------------- | ------- | ------ |
| autoHeight   | 是否自动增高。   | boolean | false  |
| enableNative | 是否使用 native  | boolean | -      |
| showCount    | 是否显示字数统计 | boolean | true   |

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

| 属性     | 说明   | 类型                    |
| -------- | ------ | ----------------------- |
| update   | 更新值 | (value: string) => void |
| getValue | 得到值 | () => string            |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                         | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注               |
| ------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --input-item-color             | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 输入项文本颜色     |
| --input-item-placeholder-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 输入项占位符颜色   |
| --input-item-clear-color       | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 输入项清除按钮颜色 |
| --input-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 输入项背景颜色     |

## FAQ

### Input focus 没有打开键盘

需要在 app.json window 里加上 `"enableInPageRenderInput": "YES"`。

### Input 出现光标问题

可查看 [此文档](https://opendocs.alipay.com/mini/component/input#FAQ) 使用 `enableNative` 属性解决。

### 使用 value 受控模式出现键盘问题

这个是由于 [输入框的一个已知问题](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip)。

解决方式为：不使用 value 受控模式，采用 ref 方式调用 input 更新方法。

```xml
<input defaultValue="{{defaultValue}}" ref="handleRef" />
<button
#if ALIPAY
  onTap="clear"
#endif
#if WECHAT
  bindtap="clear"
#endif
>clear</button>
```

```js
Page({
  handleRef(input) {
#if ALIPAY
    this.input = input;
#endif
#if WECHAT
    this.input = input.detail;
#endif
  },
  clear() {
    this.input.update('');
  },
});
```

从 v2.15.0 开始，受控模式下，不支持通过 update 方法更新值。

### 实例方法不可用

需要使用 `component2`，详情参见[ref 获取组件实例](https://opendocs.alipay.com/mini/framework/component-ref)。

### Input 字体样式通过 css 覆盖，ios 端无法生效

需要传入 `always-system="{{true}}"`
