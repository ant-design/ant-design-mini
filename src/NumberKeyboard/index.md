---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
---

# NumberKeyboard 数字键盘

自定义数字键盘。

## 注意事项

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
<ant-number-keyboard visible="{{visible}}" />
```

#### 没有小数点

```xml
<ant-number-keyboard point="{{false}}" visible="{{visible}}" />
```

#### 带确认按钮

```xml
<ant-number-keyboard confirmText="confirm" visible="{{visible}}" />
```

#### 带关闭箭头

```xml
<ant-number-keyboard closeable="{{true}}" visible="{{visible}}" />
```

#### 乱序键盘

```xml
<ant-number-keyboard random="{{true}}" visible="{{visible}}" />
```

#### 自定义按钮

```xml
<ant-number-keyboard visible="{{visible}}" >
  <view
      slot="header"
      class="number-keyboard-header"
    >
      自定义标题
    </view>
</ant-number-keyboard>

<ant-number-keyboard visible="{{visible}}" >
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

### Demo 代码

<code src='../../demo/pages/NumberKeyboard/index'></code>

## API

| 属性                    | 说明             | 类型                  | 默认值 |
| ----------------------- | ---------------- | --------------------- | ------ |
| className               | 类名             | string                | -      |
| style                   | 样式             | string                | -      |
| value                   | 输入值           | string                | -      |
| visible                 | 展示             | boolean               | false  |
| vibrate                 | 震动             | boolean               | true   |
| closeable               | 关闭箭头         | boolean               | false  |
| point                   | 小数点           | boolean               | true   |
| random                  | 乱序             | boolean               | false  |
| confirmDisabled         | 禁用确认按钮     | boolean               | false  |
| safeArea                | 安全距离         | boolean               | true   |
| confirmText             | 确认按钮的文字   | string                | -      |
| header                  | 覆盖键盘的标题栏 | slot                  | -      |
| confirm                 | 覆盖键盘确认按钮 | slot                  | -      |
| #if ALIPAY onChange     | 数字变化时的回调 | (val: string) => void | -      |
| #if ALIPAY onClose      | 隐藏键盘时的回调 | () => void            | -      |
| #if ALIPAY onConfirm    | 点击确认时的回调 | () => void            | -      |
| #if WECHAT bindchange  | 数字变化时的回调 | (val: string) => void | -      |
| #if WECHAT bindclose   | 隐藏键盘时的回调 | () => void            | -      |
| #if WECHAT bindconfirm | 点击确认时的回调 | () => void            | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                                           | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------- |
| --number-key-board-active-background-color       | <div style="width: 150px; height: 30px; background-color: #d3d3d3; color: #333333;">#d3d3d3</div> | <div style="width: 150px; height: 30px; background-color: #d3d3d3; color: #333333;">#d3d3d3</div> | 数字键盘激活背景颜色               |
| --number-key-board-text-color                    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 数字键盘文本颜色                   |
| --number-key-board-none-text-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 数字键盘无文本颜色                 |
| --number-key-board-iphonex-safe-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 数字键盘 iPhone X 安全区域背景颜色 |
| --number-key-board-background-color              | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 数字键盘背景颜色                   |
| --number-key-board-border-color                  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 数字键盘边框颜色                   |
| --number-key-board-transfer-bg               | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | 数字键盘按钮背景               |
| --number-key-board-transfer-color                | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 数字键盘按钮颜色               |
