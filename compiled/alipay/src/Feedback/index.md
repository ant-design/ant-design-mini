---
nav:
  path: /components
group:
  title: 反馈
  order: 15
toc: content
---

# Feedback 信息反馈

TODO

## 何时使用

TODO

## 代码示例

<code src='../../demo/pages/Feedback/index'></code>

## API

| 属性               | 说明                                                                                                                                                                | 类型                           | 默认值       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------ |
| visible            | 是否可见                                                                                                                                                            | boolean                        | false        |
| type               | 反馈类型                                                                                                                                                            | 'popover' \| 'card' \| 'float' | card         |
| title              | 反馈的标题                                                                                                                                                          | string                         | -            |
| placement          | 气泡框位置，可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` 或 `right-bottom` | string                         | bottom-right |
| list               | 反馈的列表                                                                                                                                                          | [FeedItem](#feeditem)[]        | -            |
| className          | 最外层的样式名                                                                                                                                                      | string                         | -            |
| style              | 最外层的样式字符串                                                                                                                                                  | string                         | -            |
| popoverType        | 气泡反馈的引导样式                                                                                                                                                  | 'circle' \| 'default'          | -            |
| autoAdjustOverflow | 气泡位置是否自适应                                                                                                                                                  | boolean                        | true         |
| onVisibleChange    | 展示状态改变的勾子                                                                                                                                                  | (visible: boolean) => void     | -            |
| onTapFeedItem      | 反馈项点击回调                                                                                                                                                      | (item: any) => void            | -            |

### FeedItem

| 属性  | 说明                                     | 类型   | 默认值 |
| ----- | ---------------------------------------- | ------ | ------ |
| icon  | 反馈项的图标                             | string | -      |
| text  | 反馈项的文案                             | string | -      |
| image | 反馈项的图片 和 icon 互斥，优先展示 icon | string | -      |
| id    | 反馈项的唯一标识                         | string | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                              | 默认值                                                                                                                                | 备注             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --feedback-text-color               | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | 反馈文本颜色     |
| --feedback-background-color         | <div style="width: 150px; height: 30px; background-color: rgba(216, 216, 216, 0.42); color: #333333;">rgba(216, 216, 216, 0.42)</div> | 反馈背景颜色     |
| --feedback-mask-color               | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.25); color: #FFFFFF;">rgba(0, 0, 0, 0.25)</div>             | 反馈遮罩颜色     |
| --feedback-content-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                                     | 反馈内容背景颜色 |
| --feedback-list-background-color    | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                                     | 反馈列表背景颜色 |
| --feedback-list-text-color          | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | 反馈列表文本颜色 |
