---
order: 4
toc: true
---

# 定制主题 WIP

antd-mini 支持使用 less 来自定义主题。antd-mini 内置了两套主题：基础主题和深色主题。通过自定义 less 变量，可以使用不同的主题或修改主题颜色。

## 使用方式

> 全局设置主题，通过[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果；

### 通过 CSS 覆盖

1. 使用 `antd-mini/less/组件`：

```json
{
  "usingComponents": {
    "button": "antd-mini/less/Button/index"
  }
}
```

2. 在 `mini.project.json` 文件中可通过 `modifyVars` 修改 less 变量，例如修改 `theme`：

```json
{
  "format": 2,
  "compileOptions": {
    "less": {
      "modifyVars": {
        "theme": "dark"
      }
    }
  }
}
```

### 通过 ConfigProvider 覆盖

## CSS 变量 WIP

> 定制使用的 CSS 变量名称可以在每个组件的文档里查看，或者在[配置文件](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)查看完整版便变量名称 ，下面是以 button 为例的列举的一些变量名称；

| 变量名                                   | 默认值                                                                                                                | 深色模式默认值                                                                                                        | 备注                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --button-disabled-opacity                | 0.4                                                                                                                   | 0.4                                                                                                                   | 按钮禁用透明度       |
| --button-color                           | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 30px; background-color: #3086FF;">#3086FF</div>                                     | 按钮颜色             |
| --button-background-color                | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 30px; background-color: #000000;">#000000</div>                                     | 按钮背景颜色         |
| --button-border-color                    | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 30px; background-color: #0A0A0A;">#0A0A0A</div>                                     | 按钮边框颜色         |
| --button-primary-border-color            | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 30px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮边框颜色     |
| --button-primary-background-color        | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 30px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮背景颜色     |
| --button-primary-color                   | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #FFFFFF;">#FFFFFF</div>                     | 主要按钮颜色         |
| --button-primary-aide-border-color       | <div style="width: 150px; height: 30px; background-color: #E7F1FF; color: #333333;">#E7F1FF</div>                     | <div style="width: 150px; height: 30px; background-color: #0D2543;">#0D2543</div>                                     | 主要辅助按钮边框颜色 |
| --button-primary-aide-color              | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 30px; background-color: #3086FF;">#3086FF</div>                                     | 主要辅助按钮颜色     |
| --button-default-aide-border-color       | <div style="width: 150px; height: 30px; background-color: #F5F5F5; color: #333333;">#F5F5F5</div>                     | <div style="width: 150px; height: 30px; background-color: #121212;">#121212</div>                                     | 默认辅助按钮边框颜色 |
| --button-default-aide-background-color   | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 30px; background-color: #000000;">#000000</div>                                     | 默认辅助按钮背景颜色 |
| --button-default-aide-color              | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div>                     | <div style="width: 150px; height: 30px; background-color: #C5CAD1;">#C5CAD1</div>                                     | 默认辅助按钮颜色     |
| --button-primary-danger-background-color | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮背景颜色 |
| --button-primary-danger-border-color     | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮边框颜色 |
| --button-primary-danger-color            | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #FFFFFF;">#FFFFFF</div>                     | 主要危险按钮颜色     |
| --button-default-danger-background-color | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #FFFFFF;">#FFFFFF</div>                     | 默认危险按钮背景颜色 |
| --button-default-danger-border-color     | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮边框颜色 |
| --button-default-danger-color            | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮颜色     |
| --button-text-danger-color               | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮文字颜色     |
| --button-danger-default-color            | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 30px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮默认颜色     |
| --button-active-bg                       | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | 按钮激活背景颜色     |
