---
nav:
  path: /components
group:
  title: 其他
toc: false
---

# Empty
空状态
## 代码示例
### 基本使用
<code src='../../demo/pages/Empty'></code>

## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | - | - | 类名 |
| mainButtonText | string | - | '操作2' | 右侧主操作按钮文案 |
| mainText | string | - | '' | 主文案 |
| mode | 'page' &verbar; 'section' | - | 'page' | 空状态模式, 'page'表示整页空状态，'section'表示局部空状态 |
| subButtonText | string | - | '操作1' | 左侧次操作按钮文案 |
| subText | string | - | '看看其它的吧' | 副文案 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onMainBtnClick | 点击右侧主按钮触发 | () => void |
| onSubBtnClick | 点击左侧次按钮触发 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| image | 图片区内容 |

## CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-empty | 整体样式 |
| amd-empty-page | 整体样式 |
| amd-empty-page-image | 图片区域样式 |
| amd-empty-page-text | 文案预期样式 |
| amd-empty-page-text-main | 主文案样式 |
| amd-empty-page-text-sub | 副文案样式 |
| amd-empty-page-btn | 按钮区域样式 |
| amd-empty-page-btn-main | 主按钮样式 |
| amd-empty-page-btn-sub | 副按钮样式 |
| amd-empty-section | 整体样式 |
| amd-empty-section-image | 图片区域样式 |
| amd-empty-section-text | 文案预期样式 |
| amd-empty-section-text-main | 主文案样式 |
| amd-empty-section-text-sub | 副文案样式 |
| amd-empty-section-btn | 按钮区域样式 |
| amd-empty-section-btn-main | 主按钮样式 |
| amd-empty-section-btn-sub | 副按钮样式 |


