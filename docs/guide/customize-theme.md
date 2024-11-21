---
order: 4
toc: true
---

# 定制主题 & 深色模式

antd-mini 支持使用 CSS 变量 来自定义主题。antd-mini 内置了两套主题：基础主题和深色主题。
通过自定义 CSS 变量，可以使用不同的主题或修改主题颜色。同时默认支持了深色模式，通过 prefers-color-scheme 的值的变化可以随操作系统自动切换深色/浅色模式。

## 使用方式

> 全局设置主题，通过[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果；

### 通过 CSS 覆盖

#### 定制单个组件的主题

```xml
  <ant-button type="primary" icon="SmileOutline" className="custom-btn">自定义主题</ant-button>
```

```css
custom-btn {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
```

#### 定制多个组件的主题

与单个组件的定制方式类似，只需用一个 configProvider 或者一个任意的容器节点（比如 ant-container）包裹住需要定制的组件，并将 CSS 变量 设置在容器节点上。

```xml
<ant-container class="container" title="标题">
  <ant-button type="primary" icon="SmileOutline" className="custom-size">自定义主题</ant-button>
</ant-container>
```

```css
container {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
```

#### 定制全局的主题

在 app.less 中，写入 CSS 变量，即可对全局生效

```css
page {
  --actionsheet-danger-color: #ff3141;
  --actionsheet-title-color: #999999;
  --actionsheet-item-color: #333333;
  --actionsheet-item-active-bg: #eeeeee;
  --activesheet-item-cancel-bg: #f5f5f5;
}
```

### 通过 ConfigProvider 覆盖

除了通过 CSS 变量直接定制主题（目前默认支持 light 和 dark 主题），也可以通过 ConfigProvider 的 themeVars 来定制主题或指定内置主题。

#### 设置主题

```xml
<ant-config-provider theme="dark">
  <view>我是深色主题</view>
</ant-config-provider>

```

#### 设置 themeVars 定制主题

```xml
  <ant-config-provider themeVars={{themeVars}}>
    <ant-button type="primary" onTap="handleTap">
      主要按钮
    </ant-button>
  </ant-config-provider>

```

```js
Page({
  data: {
    themeVars: {
      'button-primary-color': 'yellow',
      'button-primary-background-color': 'green',
    },
  },
});
```

## CSS 变量

> 定制使用的 CSS 变量名称可以在每个组件的文档里查看，或者在[配置文件](https://github.com/ant-design/ant-design-mini/blob/master/src/style/variables.less)查看完整版便变量名称 ，下面是以 button 为例的列举的一些变量名称；

| 变量名                                   | 默认值                                                                                                                | 深色模式默认值                                                                                                        | 备注                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --button-disabled-opacity                | 0.4                                                                                                                   | 0.4                                                                                                                   | 按钮禁用透明度       |
| --button-color                           | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 按钮颜色             |
| --button-background-color                | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #000000;color: #fff;">#000000</div>                                     | 按钮背景颜色         |
| --button-border-color                    | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #0A0A0A;color: #fff;">#0A0A0A</div>                                     | 按钮边框颜色         |
| --button-primary-border-color            | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮边框颜色     |
| --button-primary-background-color        | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮背景颜色     |
| --button-primary-color                   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333;">#FFFFFF</div>                     | 主要按钮颜色         |
| --button-primary-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #E7F1FF; color: #333333;">#E7F1FF</div>                     | <div style="width: 150px; height: 40px; background-color: #0D2543;">#0D2543</div>                                     | 主要辅助按钮边框颜色 |
| --button-primary-aide-color              | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要辅助按钮颜色     |
| --button-default-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #F5F5F5; color: #333333;">#F5F5F5</div>                     | <div style="width: 150px; height: 40px; background-color: #121212; color: #fff;">#121212</div>                                     | 默认辅助按钮边框颜色 |
| --button-default-aide-background-color   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #000000; color: #fff;">#000000</div>                                     | 默认辅助按钮背景颜色 |
| --button-default-aide-color              | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                     | <div style="width: 150px; height: 40px; background-color: #C5CAD1;">#C5CAD1</div>                                     | 默认辅助按钮颜色     |
| --button-primary-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮背景颜色 |
| --button-primary-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮边框颜色 |
| --button-primary-danger-color            | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | 主要危险按钮颜色     |
| --button-default-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | 默认危险按钮背景颜色 |
| --button-default-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮边框颜色 |
| --button-default-danger-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮颜色     |
| --button-text-danger-color               | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮文字颜色     |
| --button-danger-default-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮默认颜色     |
| --button-active-bg                       | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | 按钮激活背景颜色     |
