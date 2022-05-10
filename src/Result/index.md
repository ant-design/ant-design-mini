---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
          
# Result 操作结果
对前一步操作的结果进行反馈
## 何时使用
当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用
## 代码示例
### 基本使用
<code src='../../demo/pages/Result'></code>


    
## 属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| type | 内置类型 success=成功 danger=错误/危险 info=信息提示 wait=等待处理 | 'success' &verbar; 'danger' &verbar; 'info' &verbar; 'warn' &verbar; 'wait' | - |
| image |  自定义图片，如果配置了 type， 则不生效 | string &verbar; slot | - |
| title | 主文案 | string &verbar; slot | - |
| message |  副文案 |  string &verbar; slot | - |
| buttons | 按钮类型 | {text: string; type: 'default' &verbar; 'primary' &verbar; 'warn' &verbar; 'danger' &verbar; 'success' &verbar; 'light'}[] | - |  |
| className |  类名 | string | - |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onButtonTap | 弹窗关闭时，触发回调 | (idx: number) => void |

## 插槽
| 名称 | 说明 |
| ----|----|
| title | 标题 |
| message | 描述 |
| image | 图标 |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-result | 整体样式 |
| amd-result-main | 内容展示区域 |
| amd-result-image | icon 区域样式 |
| amd-result-buttons | 按钮区域样式 |
