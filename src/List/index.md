---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# List 列表
通用列表
## 何时使用
以列表的形式干净高效的承载文字、列表、图片、段落等
## 代码示例
### 基本使用
<code src='../../demo/pages/List'></code>



## 属性

#### List
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| radius | 是否带圆角  | boolean | false |
| header | 头部说明 | string | - |
| footer | 底部说明 | string | - |
| className | 类名 | string | - |

#### ListItem

| 属性 |  说明 |类型| 默认值 |
| -----|-----|-----|-----|
| image |  左侧图片  | string | - |
| imageSize |  左侧图片大小 | 'small'  &verbar; 'medium'  &verbar; 'large' | 'small' |
| arrow |  箭头方向，不传表示没有箭头  | 'right' &verbar; 'up' &verbar; 'down' | - |
| title |  标题信息 | string | - |
| brief |  第二行信息 | string | - |
| extra |  右侧额外内容| string | - |
| extraBrief | 右侧辅助信息  | string | - |
| disabled |   是否禁用 | boolean | false |
| last |  用于处理下划线是否显示 | boolean | false |
| className | 类名 | string | - |


## 插槽

#### List
| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| footer | 尾部内容插槽 |

#### ListItem
| 名称 | 说明 |
| ----|----|
| brief | 下方简介内容插槽 |
| extra | 右侧内容插槽 |
| image | 左侧图标插槽 |

## 事件

#### ListItem
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击图标，触发此回调 | ( e: [`Event`](https://opendocs.alipay.com/mini/framework/event-object) ) => void |

## 样式类
#### List
| 类名 | 说明 |
| -----|-----|
| amd-list | 整体样式 |
| amd-list-header | header 样式 |
| amd-list-body | 内部内容样式 |
| amd-list-footer | footer 样式 |

#### ListItem
| 类名 | 说明 |
| -----|-----|
| amd-list-item | 整体样式 |
| amd-list-item-line | 内容样式 |
| amd-list-item-content | 除 extra、brief 外内容样式 |
| amd-list-item-content-main | 主要内容样式 |
| amd-list-item-image | 左侧图片样式 |
| amd-list-item-brief | brief 样式 |
| amd-list-item-extra | extra 样式 |
| amd-list-item-arrow| 右侧 arrow 样式 |