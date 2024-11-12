---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# Empty 空状态

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

使用场景插画来作为空状态场景的反馈提示。

## 何时使用

需要展示空状态页面或者局部空状态区块时使用。

## 代码示例

<code src='../../demo/pages/Empty/index'></code>

## API

| 属性      | 说明                           | 类型           | 默认值 |
| --------- | ------------------------------ | -------------- | ------ |
| className | 根节点类名                     | string         | -      |
| title     | 标题文案                       | string \| slot | -      |
| image     | 图片，可传入字符串作为图片地址 | string \| slot | -      |
| message   | 描述文案                       | string \| slot | -      |
| style     | 样式                           | string         | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                    | 默认值                                                                                            | 备注               |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --empty-text-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 空状态文本颜色     |
| --empty-asisst-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 空状态辅助文本颜色 |
