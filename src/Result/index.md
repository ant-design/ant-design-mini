---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
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
| -----|-----|-----|----- |
| className | 类名 | `string` |  - | 
| image | 自定义图片，如果配置了 type， 则不生效 | `string \| slot` | - | 
| message | 副文案 | `string \| slot` | - | 
| style | 样式 | `string` | - | 
| title | 主文案 | `string \| slot` | - | 
| type | 内置类型 success=成功 danger=错误/危险 info=信息提示 wait=等待处理 | `'success' \| 'danger' \| 'info' \| 'warn' \| 'wait'` | - | 

## 插槽
| 名称 | 说明 |
| ----|----|
| title | 标题 |
| message | 描述 |
| image | 图标 |
| buttons | 按钮 |