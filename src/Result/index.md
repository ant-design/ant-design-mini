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
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'success' &verbar; 'danger' &verbar; 'info' &verbar; 'warn' &verbar; 'wait' | 否 | - | 内置类型 success=成功 danger=错误/危险 info=信息提示 wait=等待处理 |
| image | string &verbar; slot | 否 | - | 自定义图片，如果配置了 type， 则不生效 |
| title | string &verbar; slot | 否 | - | 主文案 |
| message | string &verbar; slot | 否 | - | 副文案 |
| buttons | {text: string; type: 'default' &verbar; 'primary' &verbar; 'warn' &verbar; 'danger' &verbar; 'success' &verbar; 'light'}[] | 否 | - | 按钮类型 |
| className | string | 否 | - | 类名 |

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
