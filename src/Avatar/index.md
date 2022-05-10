---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# Avatar 头像
用来代表用户或事物
## 何时使用
需要更加直观的展现人物或事物特征

## 代码示例
### 基本使用

<code src="../../demo/pages/Avatar"></code>




## 属性

| 属性 | 说明   | 类型| 默认值 |
| --- | --- | --- | --- |
| size | x-small(80 x 80)；small(88 x 88)；medium(104 x 104)；large(120 x 120) | 'x-small' &verbar; 'small' &verbar; 'medium' &verbar; 'large'  | 'medium' |
| src | 头像地址，默认为灰色的内置图片 | string | - |
| name |  第一行信息 | string | - | 
| desc |  第二行补充信息，当 name 不存在时，不显示；当 size=x-small，不显示  | string | - |
| className | 类名  | string | - | 

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-avatar | 整体样式 |
| amd-avatar-src | 图片样式 |
| amd-avatar-content | 头像描述样式 |
| amd-avatar-name | name 样式 |
| amd-avatar-desc | desc 样式 |