---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Terms 协议

## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='../../demo/pages/Terms'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 类名 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| hasCheckbox | 是否需要勾选框 | `boolean` | `true` |
| mainButtonText | 主按钮文本 | `string` | '提交' | 
| subButtonText |  辅助按钮文本 | `string` | - |
| style |  样式 | `string` | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 点击 checkbox ，触发此回调 | ( v : boolean, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void  |
| onMainBtnTap | 点击主按钮，触发此回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void  |
| onSubBtnTap | 点击辅助按钮，触发此回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void  |

## 插槽
| 名称 | 说明 |
| -----|-----|
| default | 带协议的文案， 比如 同意<a>《用户授权协议》</a> |

