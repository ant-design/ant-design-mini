---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# SearchBar 搜索框
搜索场景的输入框组件
## 何时使用
搜索场景的输入框组件	在信息池中缩小范围，快速而轻松地获取目标信息

## 注意事项

- SearchBar 输入框在个别情况下会出现闪动的情况，需要使用 enableNative 进行处理，具体可参考 [input 输入框的使用限制](https://opendocs.alipay.com/mini/component/input#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6) 以及 [FAQ](https://opendocs.alipay.com/mini/component/input#FAQ) 部分的说明。

- SearchBar 输入框在手写输入情况下，部分安卓手机会出现连续输入现象，只需要将 controlled 属性设置为 false 即可。
## 代码示例
### 基本使用
<code src='../../demo/pages/SearchBar'></code>


## 属性
| 属性 |  说明 | 类型 | 默认值 | 
| -----|-----|-----|-----|
| value | 搜索框的值 | string | - |
| borderColor |  输入框边框颜色 | string | - |
| enableNative |  是否启用 Native 渲染 | boolean | - |
| placeholder | 提示文字 | string | - |
| showCancelButton | 是否显示取消按钮 | boolean | false |
| cancelText |  取消按钮文案  | string | '取消' |
| maxLength |  最大长度 | number | - |
| showBizIcon | 是否展示额外图标 | boolean | false |
| bizIconType | 额外图标类型，同[Icon](./icon#代码示例)  | string | 'AudioFill' |
| autoFocus | 自动聚焦，ios 可能会失效  | boolean | false |
| id |  表单元素 id | string | - |
| name | 表单元素 name | string | - |
| disabled | 是否禁用 | boolean | false |
| controlled |   是否受控模式 | boolean | false |
| className | 类名  | string | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 输入文本，触发此回调 | ( v: string ) => void |
| onVoiceTap | 点击话筒图标，触发此回调 | () => void |
| onInput | 监听输入框输入动作，触发此回调 | ( v: string ) => void |
| onSubmit | input 组件的 onConfirm 事件 | ( v: string ) => void |
| onCancel | 点击最右侧取消按钮，触发此回调 | ( v: string ) => void |
| onClear | 点击清除图标，触发此回调 | ( v: string ) => void |
| onFocus | 输入框对焦，触发此回调 | ( v: string ) => void |
| onBlur | 输入框失焦，触发此回调 | ( v: string ) => void |
| onBizIconTap | 点击辅助图标，触发此回调 | ( ) => void |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-search-bar | 整体样式 |
| amd-search-bar-input | 内部输入框样式 |
| amd-search-bar-synthetic | search 图标样式 |
| amd-search-bar-synthetic-icon | search 图标样式 |
| amd-search-bar-value | input 组件样式 |
| amd-search-bar-clear-icon | 清除图标样式 |
| amd-search-bar-biz-icon | 额外图标样式 |