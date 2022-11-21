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

<code src='pages/Footer/index'></code>

## API
### 属性
#### Footer
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式 | `string` | - |

#### FooterEnd
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式 | `string` | - |

#### FooterImage
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| src | 图片链接 | `string ` | - | 
| style | 样式 | `string` | - |


#### FooterLink
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名 | `string` | - |
| links | 链接文案 | `string`[] | - | 
| style | 样式 | `string` | - |
| onTap | 点击链接，触发回调 | (currentIdx: `number`) => void |


#### FooterTag
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名 | `string` | - |
| style | 样式 | `string` | - |
| tags | 标签文案 | `string`[] | - | 
| onTap | 点击链接，触发回调 | (currentIdx: `number`) => void |

#### FooterIext
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式 | `string` | - |

