---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# List
列表，内部配合 ListItem 使用。
## 代码示例

<code src='../../demo/pages/List'></code>

## API

### 属性

#### List
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| radius | boolean | 否 | false | 是否带圆角 |
| header | `string` | 否 | - | 头部说明 |
| footer | `string` | 否 | - | 底部说明 |
| className | string | 否 | - | 类名 |

#### ListItem

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| image | `string` | 否 | - | 左侧图片 |
| arrow | `'right'` &verbar; `'up'` &verbar; `'down'` | 否 | - | 箭头方向，不传表示没有箭头 |
| extra | `string` | 否 | - | 右侧额外内容 |
| brief | `string` | 否 | - | 第二行信息 |
| className | string | 否 | - | 类名 |


### 插槽

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

### 事件

#### ListItem
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击图标，触发此回调 | ( e: [`Event`](https://opendocs.alipay.com/mini/framework/event-object) ) => void |

### 样式类
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
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
</style> 