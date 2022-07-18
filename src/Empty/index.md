---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# Empty 空状态

使用场景插画来作为空状态场景的反馈提示

## 何时使用
需要展示空状态页面或者局部空状态区块时使用

## 代码示例
### 基本使用
<code src='../../demo/pages/Empty'></code>

## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| mainButtonText | string | 否 | '操作2' | 右侧主操作按钮文案 |
| mainText | string | 否 | '这里什么都没有' | 主文案 |
| mode | 'page' &verbar; 'section' | 否 | 'page' | 空状态模式, 'page'表示整页空状态，'section'表示局部空状态 |
| subButtonText | string | 否 | '操作1' | 左侧次操作按钮文案 |
| subText | string | 否 | '看看其它的吧' | 副文案 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onMainBtnClick | 点击右侧主按钮触发 | () => void |
| onSubBtnClick | 点击左侧次按钮触发 | () => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| image | 图片区内容 |

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


