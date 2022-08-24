---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---
# Footer 页脚

## 注意
- 可配合 `FooterEnd`， `FooterImage`， `FooterLink`， `FooterTag`， `FooterText` 组件使用

## 代码示例

<code src='../../demo/pages/Footer'></code>

## API
### 属性
#### Footer
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |

#### FooterEnd
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |

#### FooterImage
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| src | string | 否 | - | 图片链接 |
| className | string | 否 | - | 类名 |

#### FooterLink
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| links | string[] | 否 | - | 图片链接 |
| className | string | 否 | - | 类名 |

#### FooterTag
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tags | string[] | 否 | - | 图片链接 |
| className | string | 否 | - | 类名 |

#### FooterIext
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |

### 事件

#### FooterLink
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击链接，触发回调 | (currentIdx: number) => void|

#### FooterTag
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击标签，触发回调 |(currentIdx: number) => void|

## 样式类
#### Footer
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer            | 整体样式         |

#### FooterEnd
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer-end           | 整体样式         |
| amd-footer-end-divider          | 分割线样式        |
| amd-footer-end-text           | 文本样式         |

#### FooterImage
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer-image          | 整体样式         |

#### FooterLink
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer-link          | 整体样式         |
| amd-footer-link-divider         | 分割线样式         |
| amd-footer-link-text         | 文本样式         |

#### FooterTag
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer-tag         | 整体样式         |
| amd-footer-tag-text        | 文本样式       |

#### FooterIext
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-footer-text        | 整体样式         |

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
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(4)  {
    width: 50px
}
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(4)  {
    width: 50px
}
.__dumi-default-layout-content article table:nth-of-type(5) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(5) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(5) th:nth-of-type(4)  {
    width: 50px
}
.__dumi-default-layout-content article table:nth-of-type(6) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(6) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(6) th:nth-of-type(4)  {
    width: 50px
}
</style> 