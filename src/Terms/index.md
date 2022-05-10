---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Terms 协议

## 代码示例
### 基本使用
<code src='../../demo/pages/Terms'></code>



## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| fixed |  是否固定在底部  | boolean | false | 
| hasCheckbox | 是否需要勾选框   | boolean | true | 
| disabled |  是否禁用 | boolean | false |
| mainButtonText | 主按钮文本 | string | '同意' |
| addonButtonText |  辅助按钮文本  | string | - |
| className |  类名 | string | - |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 点击 checkbox ，触发此回调 | ( v : boolean ) => void  |
| onMainBtnTap | 点击主按钮，触发此回调 | () => void  |
| onSubBtnTap | 点击辅助按钮，触发此回调 | () => void  |

## 插槽
| 名称 | 说明 |
| ----|----|
| 默认插槽 | 带协议的文案， 比如 同意<a>《用户授权协议》</a> |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-terms | 整体样式 |
| amd-terms-fixed | 整体样式 |
| amd-terms-term | term 区域样式 |
| amd-terms-term-checkbox | checkbox 组件样式 |
| amd-terms-content | 内容区域样式 |