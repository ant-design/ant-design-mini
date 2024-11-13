---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# NumberKeyboard 数字键盘

## 何时使用

需要自定义数字键盘时。

## Tip

1. 数字键盘暂未解决键盘遮挡输入框的问题，需要开发者自行设置屏幕滚动来解决此类问题。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-number-keyboard": "antd-mini/es/NumberKeyboard/index"
#endif
#if WECHAT
  "ant-number-keyboard": "antd-mini/NumberKeyboard/index"
#endif
}
```

## 代码示例

### 基本使用
#### 默认键盘
```xml
<ant-number-keyboard visible="{{ visible }}" onClose="onTap" />
```

#### 没有小数点
```xml
<ant-number-keyboard point="{{ false }}" visible="{{ visible }}" onClose="onTap" />
```

#### 带确认按钮
```xml
<ant-number-keyboard confirmText="确认" visible="{{ visible }}" onClose="onTap" />
```

#### 带关闭箭头
```xml
<ant-number-keyboard closeable="{{ true }}" visible="{{ visible }}" onClose="onTap" />
```

#### 乱序键盘
```xml
<ant-number-keyboard random="{{ true }}" visible="{{ visible }}" onClose="onTap" />
```
#### 自定义按钮
```xml
<ant-number-keyboard visible="{{ visible }}" onClose="onTap" >
  <view
      slot="header"
      class="number-keyboard-header"
    >
      自定义标题
    </view>
</ant-number-keyboard>

<ant-number-keyboard visible="{{ visible }}" onClose="onTap" >
  <view
    slot="confirm"
    class="number-keyboard-confirm"
  >
    <!-- 自定义确认按钮 -->
    <ant-icon type="DownOutline"></ant-icon>
  </view>
</ant-number-keyboard>
```


### 数字输入框
<code src='../../demo/pages/NumberKeyboardNumber/index'></code>


### 验证码输入框
<code src='../../demo/pages/NumberKeyboardCode/index'></code>

### Demo代码
<code src='../../demo/pages/NumberKeyboard/index'></code>

## API

| 属性            | 说明               | 类型                     | 默认值 |
|-----------------|-------------------|------------------------|-------|
| className       | 类名              | string                | -     |
| style           | 样式              | string                | -     |
| value           | 输入值            | string               | -     |
| visible         | 展示              | boolean              | false |
| vibrate         | 震动              | boolean              | true  |
| closeable       | 关闭箭头          | boolean              | false |
| point           | 小数点            | boolean              | true  |
| random          | 乱序              | boolean              | false |
| confirmDisabled | 禁用确认按钮      | boolean              | false |
| safeArea        | 安全距离          | boolean              | true  |
| confirmText     | 确认按钮的文字    | string                | -     |
| header          | 覆盖键盘的标题栏  | slot                  | -     |
| confirm         | 覆盖键盘确认按钮  | slot                  | -     |
| onChange        | 数字变化时的回调  | (val: string) => void | -     |
| onClose         | 隐藏键盘时的回调  | () => void            | -     |
| onConfirm       | 点击确认时的回调  | () => void            | -     |
