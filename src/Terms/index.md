---
nav:
  path: /components
group:
  title: 表单类组件
toc: false
---

# Terms

## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例

<code src='../../demo/pages/Terms'></code>

## API

### 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| fixed | boolean | 否 | false | 是否固定在底部 |
| hasCheckbox | boolean | 否 | true | 是否需要勾选框 |
| disabled | boolean | 否 | false | 是否禁用 |
| mainButtonText | string | 是 | '同意' | 主按钮文本 |
| addonButtonText | string | 否 |  | 辅助按钮文本 |
| className | string | 否 | - | 类名 |


### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 点击 checkbox ，触发此回调 | ( v : boolean ) => void  |
| onMainBtnTap | 点击主按钮，触发此回调 | () => void  |
| onSubBtnTap | 点击辅助按钮，触发此回调 | () => void  |
### 插槽
| 名称 | 说明 |
| ----|----|
| 默认插槽 | 带协议的文案， 比如 同意<a>《用户授权协议》</a> |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-terms | 整体样式 |
| amd-terms-fixed | 整体样式 |
| amd-terms-term | term 区域样式 |
| amd-terms-term-checkbox | checkbox 组件样式 |
| amd-terms-content | 内容区域样式 |

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
}  
</style> 