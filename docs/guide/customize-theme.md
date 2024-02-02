---
toc: false
---

## 定制主题

antd-mini 支持使用 less 来自定义主题。antd-mini 内置了两套主题：基础主题和深色主题。通过自定义 less 变量，可以使用不同的主题或修改主题颜色。

## 使用方式

> 小程序开发者工具 IDE 版本需不低于 3.0.0，命令行工具 CLI 版本需不低于 1.4.0。

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
  
## less 变量

| 名称             | 说明                        | 默认值                            |
| ---------------- | --------------------------- | --------------------------------- |
| theme            | 主题，可选择 `default`、`dark` | `default`                        |
| rpx              | rpx 单位对应值              | `0.5px`                          |
| colorPrimary     | 主品牌色，对应 `default` 和 `dark` 的默认值 | `#1677ff`、`#3086FF`           |
| colorWathet      | 浅蓝色                       | `#E7F1FF`、`#0D2543`             |
| colorRed         | 红色                         | `#FF3141`、`#FF4A58`             |
| colorYellow      | 黄色                         | `#FF9F18`、`#FFA930`             |
| colorGreen       | 绿色                         | `#22B35E`、`#34B368`             |
| colorTextPrimary | 主要文本信息颜色             | `#333333`、`#E6E6E6`             |
| colorWhite       | 白色                         | `#FFFFFF`、`#FFFFFF`             |
| colorOrange      | 橙色                         | `#FF6430`、`#E65A2B`             |
| colorBlack       | 黑色                         | `#000000`、`#000000`             |
| colorTextAssist  | 辅助性文本信息颜色           | `#999999`、`#808080`             |
| colorBorder      | 边框颜色                     | `#EEEEEE`、`#2B2B2B`             |
| colorBackground  | 全局背景色                   | `#F5F5F5`、`#0A0A0A`             |
| colorTextWeak    | 弱信息         | `#CCCCCC`、`#4D4D4D`             |
| colorCard        | 卡片颜色                     | `#FFFFFF`、`#1A1A1A`             |
| colorTextSecondary | 副级文本信息颜色           | `#666666`、`#B3B3B3`             |
| colorGreyCard    | 灰色卡片                     | `#F5F5F5`、`#2B2B2B`             |