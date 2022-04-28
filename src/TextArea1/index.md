---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# TextArea 文本域
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集

## 代码示例
### 基本使用
<code src='../../demo/pages/TextArea/'></code>

## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | '' | 输入框的值 |
| disabled | boolean | 否 | false | 是否禁用 |
| placeholder | string | 否 | - | 占位符 |
| className | string | 否 | - | 类名 |
| placeholderClass | string | 否 | - | 指定 placeholder 的样式类 |
| placeholderStyle | string | 否 | - | 指定 placeholder 的样式，可设置间距 |
| maxLength | number | 否 | 140 | 最大长度 |
| autoHeight | boolean | 否 | false | 是否自动增高 |
| showCount | boolean | 否 | true | 是否渲染字数统计功能 |
| enableNative | boolean | 否 | - | 是否启用 Native 渲染 |
| controlled | boolean | 否 | false | 是否受控模式 |
| autoFocus | boolean | 否 | false | 自动聚焦，ios 可能会失效 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 输入时触发此回调 | (v: string) => void |
| onConfirm | 	点击键盘完成时触发此回调 | (v: string) => void |
| onFocus | 聚焦时触发触发此回调 | (v: string) => void |
| onBlur | 失焦时触发此回调 | (v: string) => void |

## 样式类
| 类名 | 说明 | 
| -----|-----|
| amd-textarea | 	整体样式 |
| amd-textarea-disabled | 	禁用样式 |

<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(3) th:first-of-type {
    width: 300px;
}
</style> 