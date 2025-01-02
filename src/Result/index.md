---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# Result 操作结果

对前一步操作的结果进行反馈。当有重要操作需告知用户处理结果，且反馈内容较为复杂时，应使用 Result 组件。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-result": "antd-mini/es/Result/index"
#endif
#if WECHAT
  "ant-result": "antd-mini/Result/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-result type="success" title="success" message="subtitle content" />

<ant-result type="wait" title="wait" message="subtitle content" />

<ant-result type="info" title="info" message="subtitle content" />

<ant-result type="warning" title="warning" message="subtitle content" />

<ant-result type="error" title="error" message="subtitle content" />
```

### 插槽

```xml
<ant-result
  image="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">
  <view slot="title">标题插槽</view>
  <view slot="message">描述插槽</view>
  <view slot="extra" class="extra">
    其他模块
  </view>
</ant-result>
```

### Demo 代码

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

| 变量名                   | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| --result-main-background | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Result 主背景颜色   |
| --result-title-color     | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Result 标题颜色     |
| --result-desc-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Result 描述文字颜色 |
| --result-success-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Result 成功状态颜色 |
| --result-error-color     | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | <div style="width: 150px; height: 30px; background-color: #ff544a; color: #ffffff;">#ff544a</div> | Result 错误状态颜色 |
| --result-warning-color   | <div style="width: 150px; height: 30px; background-color: #ff8f1f; color: #ffffff;">#ff8f1f</div> | <div style="width: 150px; height: 30px; background-color: #ff9c38; color: #ffffff;">#ff9c38</div> | Result 警告状态颜色 |
| --result-wait-color      | <div style="width: 150px; height: 30px; background-color: #00b578; color: #ffffff;">#00b578</div> | <div style="width: 150px; height: 30px; background-color: #12b57e; color: #ffffff;">#12b57e</div> | Result 等待状态颜色 |
