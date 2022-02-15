---
title: SearchBar
group:
  path: /display
  title: 数据展示
---

# SearchBar

- 搜索提供了用户进行文本查询的功能，用户可以针对当前页面的内容通过精确搜索和模糊搜索进行内容筛选和定位，提高查询效率。
- 搜索栏激活后出现取消按钮。
- 内部通过 input 组件实现。

## 注意事项

- SearchBar 输入框在个别情况下会出现闪动的情况，需要使用 enableNative 进行处理，具体可参考 [input 输入框的使用限制](https://opendocs.alipay.com/mini/component/input#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6) 以及 [FAQ](https://opendocs.alipay.com/mini/component/input#FAQ) 部分的说明。

- SearchBar 输入框在手写输入情况下，部分安卓手机会出现连续输入现象，只需要将 controlled 属性设置为 false 即可。
## 代码示例

<code src='../../demo/pages/SearchBar'></code>

## API
### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | 是否受控模式 |
| borderColor | string | "" | false | 输入框边框颜色 |
| enableNative | boolean | 否 | - | 是否启用 Native 渲染 |
| value | string | 否 | - | 搜索框的值 |
| placeholder | string | 否 | - | 提示文字 |
| showCancelButton | boolean | 否 | false | 是否显示取消按钮 |
| cancelText | string | 否 | "取消" | 取消按钮文案 |
| maxLength | number | 否 | - | 最大长度 |
| showBizIcon | boolean | 否 | false | 是否展示额外图标 |
| autoFocus | boolean | 否 | false | 自动聚焦，ios 可能会失效 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onVoiceTap | 点击话筒图标，触发此回调 | () => void |
| onInput | 监听输入框输入动作，触发此回调 | ( v: string ) => void |
| onSubmit | input 组件的 onConfirm 事件 | ( v: string ) => void |
| onCancel | 点击最右侧取消按钮，触发此回调 | ( v: string ) => void |
| onClear | 点击清除图标，触发此回调 | ( v: string ) => void |
| onFocus | 输入框对焦，触发此回调 | ( v: string ) => void |
| onBlur | 输入框失焦，触发此回调 | ( v: string ) => void |
| onChange | 输入文本，触发此回调 | ( v: string ) => void |
| onBizIconTap | 点击辅助图标，触发此回调 | ( ) => void |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-search-bar | 整体样式 |
| amd-search-bar-input | 内部输入框样式 |
| amd-search-bar-synthetic | search 图标样式 |
| amd-search-bar-synthetic-icon | search 图标样式 |
| amd-search-bar-value | input 组件样式 |
| amd-search-bar-clear-icon | 清除图标样式 |
| amd-search-bar-biz-icon | 额外图标样式 |

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