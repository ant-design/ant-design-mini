---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# SearchBar 搜索框
搜索场景的输入框组件
## 何时使用
搜索场景的输入框组件    在信息池中缩小范围，快速而轻松地获取目标信息

## 注意事项

- SearchBar 输入框在个别情况下会出现闪动的情况，需要使用 enableNative 进行处理，具体可参考 [input 输入框的使用限制](https://opendocs.alipay.com/mini/component/input#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6) 以及 [FAQ](https://opendocs.alipay.com/mini/component/input#FAQ) 部分的说明。

- SearchBar 输入框在手写输入情况下，部分安卓手机会出现连续输入现象，只需要将 controlled 属性设置为 false 即可。
## 代码示例
### 基本使用
<code src='../../demo/pages/SearchBar'></code>

## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | 搜索框的值 |
| autoFocus | boolean | 否 | false | 自动聚焦，ios 可能会失效 |
| bizIconType | string | 否 | 'AudioFill' | 辅助图标类型 |
| cancelText | string | 否 | '取消' | 取消按钮文案 |
| className | string | 否 | - | 类名 |
| controlled | boolean | 否 | false | 是否受控模式 |
| disabled | boolean | 否 | false | 是否禁用 |
| enableNative | boolean | 否 | false | 是否启用 Native 渲染 |
| id | string | 否 | - | 表单元素 id |
| maxLength | number | 否 | - | 最大长度 |
| name | string | 否 | - | 表单元素 name |
| placeholder | string | 否 | - | 提示文字 |
| showBizIcon | boolean | 否 | false | 是否展示辅助图标 |
| showCancelButton | boolean | 否 | false | 是否显示取消按钮 |
| showVoice | boolean | 否 | false | 是否展示语音图标 |
| type | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 否 | 'text' | 搜索框的类型 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | 表单触发变更回调 | (v: any) => void |
| onBlur | 失去焦点时触发回调 | (v: string) => void |
| onBizIconTap | 点击语音图标回调 | () => void |
| onCancel | 点击取消回调 | (v: string) => void |
| onClear | 点击删除回调 | (v: string) => void |
| onFocus | 聚焦时触发回调 | (v: string) => void |
| onInput | input 输入回调 | (v: string) => void |
| onSubmit | submit 回调 | (v: string) => void |
| onVoiceTap | 点击语音图标回调 | () => void |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-search-bar | 整体样式 |
| amd-search-bar-focus | 获取焦点时整体样式 |
| amd-search-bar-input | 内部输入框样式 |
| amd-search-bar-input-focus | 获取焦点时输入框样式 |
| amd-search-bar-synthetic | search 图标样式 |
| amd-search-bar-synthetic-icon | search 图标样式 |
| amd-search-bar-value | input 组件样式 |
| amd-search-bar-clear-icon | 清除图标样式 |
| amd-search-bar-biz-icon | 额外图标样式 |
| amd-search-bar-cancel-container | 取消按钮样式 |
| amd-search-bar-cancel-container-show |  取消按钮样式 |
| amd-search-bar-cancel | 取消按钮样式 |

## CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
| --am-color-brand-1 | 输入光标颜色 |
