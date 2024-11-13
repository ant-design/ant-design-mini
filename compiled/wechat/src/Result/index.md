---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Result 操作结果

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

对前一步操作的结果进行反馈。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时，应使用 Result 组件。

## 代码示例

<code src='../../demo/pages/Result/index'></code>

## API

| 属性      | 说明                                                                                     | 类型           | 默认值 |
| --------- | ---------------------------------------------------------------------------------------- | -------------- | ------ |
| className | 类名                                                                                     | string         | -      |
| extra     | 底部自定义渲染                                                                           | slot           | -      |
| image     | 自定义图片                                                                               | string \| slot | -      |
| message   | 副文案                                                                                   | string \| slot | -      |
| style     | 样式                                                                                     | string         | -      |
| title     | 主文案                                                                                   | string \| slot | -      |
| type      | 内置类型 `success`（成功）、`error`（错误/危险）、`info`（信息提示）、`wait`（等待处理） | string         | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                   | 默认值                                                                                            | 备注                |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------- |
| --result-main-background | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Result 主背景颜色   |
| --result-title-color     | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | Result 标题颜色     |
| --result-desc-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Result 描述文字颜色 |
| --result-success-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | Result 成功状态颜色 |
| --result-error-color     | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | Result 错误状态颜色 |
| --result-warning-color   | <div style="width: 150px; height: 30px; background-color: #ff8f1f; color: #ffffff;">#ff8f1f</div> | Result 警告状态颜色 |
| --result-wait-color      | <div style="width: 150px; height: 30px; background-color: #00b578; color: #ffffff;">#00b578</div> | Result 等待状态颜色 |
