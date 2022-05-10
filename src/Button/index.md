---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: false
---
# Button 按钮
用于开始一个即时操作

## 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑
## 代码示例
### 基本使用
<code src='../../demo/pages/Button'></code>

### 内联按钮

<code src='../../demo/pages/ButtonInline'></code>

### 自定义Icon
<code src='../../demo/pages/ButtonIcon'></code>

### 辅助按钮
<code src='../../demo/pages/ButtonAddon'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值  |
| -----|-----|-----|-----|
| type | 填充样式 按钮类型 default=辅助按钮<br> primary=品牌色按钮<br>  warn=警示按钮<br>  danger=危险按钮<br>  success=成功按钮<br>  light=弱按钮 | 'default' &verbar; 'primary' &verbar; 'warn' &verbar; 'danger' &verbar; 'success' &verbar; 'light' | 'default' | 
| fill | 填充样式  | 'outline' &verbar; 'solid' &verbar; 'none' | 'solid'  |
| disabled | 是否禁用  | boolean | false  |
| subText | 辅助文字，显示在第二行 | string | - |
| publicId | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。 | string | - |
| openType | 开放能力 | string | - |
| scope | 当 openType 为 getAuthorize 时有效 | string | - |
| inline | 内联，不撑满父级宽度  | boolean | false |
| inlineSize | 内联尺寸 | 'small' &verbar; 'medium' &verbar; 'large'  &verbar; 'x-large' | 'medium' |
| icon |按钮左侧图标，支持[Icon](./icon#代码示例)和图片路径| string | - |
| loading | 是否加载中，加载中时不可点击 | boolean | false |
| loadingText| 加载中时的文字  | string | - |
| htmlType | 按钮原生类型，在表单提交时有效  | 'button' &verbar; 'submit' &verbar; 'reset' | 'button' |
| form | 表单 uid，当htmlType = 'submit' 且页面有多个表单时必传 | string | - |
| className | 类名  | string | - |
| activeClassName | 按下时的类名 | string | - |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击按钮，触发此回调 | ( e: [`Event`](https://opendocs.alipay.com/mini/framework/event-object) ) => void  |

## 插槽
| 名称 | 说明 |
| ----|----|
| icon | 图标插槽 |

## 样式类

| 类名 | 说明 |
| -----|-----|
| amd-button | 整体样式 |
| amd-button-content | 按钮内容样式 |
| amd-button-loading-container | 加载区域样式 |
| amd-button-loading-text | 加载区域文字样式 |
| amd-button-loading | 加载动画样式 |
| amd-button-wrap | 加载区域右侧样式 |
| amd-button-icon | 图标样式 |
| amd-button-text | 按钮文字样式 |
| amd-button-subtext | 副标题样式 |


<style> 
.__dumi-default-mobile-previewer:nth-of-type(2)::after,
.__dumi-default-mobile-previewer:nth-of-type(4)::after,
.__dumi-default-mobile-previewer:nth-of-type(6)::after,
.__dumi-default-mobile-previewer:nth-of-type(8)::after {
    border-bottom: none!important;
}
</style>
