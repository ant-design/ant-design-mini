---
toc: false
---

## 定制主题

antd-mini 可使用less自定义主题。antd-mini 内置了两套主题，一套基础主题，一套深色主题。自定义less变量，可使用不同的主题、修改主题颜色。

## 使用方式
> 需要小程序开发者工具IDE >= 3.0.0、命令行工具 CLI >= 1.4.0

1. 使用 `antd-mini/less/组件`

```json
{
  "usingComponents": {
    "button": "antd-mini/less/Button/index"
  }
}
```

2. 在 `mini.project.json` 里可使用 modifyVars 修改 less变量，比如修改 `theme`：
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



## less变量
| 名称 | 说明 | 默认值 |
| -----|-----|-----|
| theme | 主题，可选 `default`, `dark` | default  |
| rpx | rpx | 0.5px |
| colorPrimary | 品牌色，默认值分别为 `default`, `dark` 对应 | #1677ff, #3086FF |
| colorWathet | 浅蓝色 | #E7F1FF, #0D2543 |
| colorRed | 红色 | #FF3141, #FF4A58 |
| colorYellow | 黄色 | #FF9F18, #FFA930 |
| colorGreen | 绿色 | #22B35E, #34B368 |
| colorTextPrimary | 主信息 | #333333, #E6E6E6 |
| colorWhite | 白色 | #FFFFFF, #FFFFFF |
| colorOrange | 橙色 | #FF6430, #E65A2B |
| colorBlack | 黑色 | #000000, #000000 |
| colorTextAssist | 辅助信息 | #999999, #808080 |
| colorBorder | 边界线 | #EEEEEE, #2B2B2B |
| colorBackground | 全局背景 | #F5F5F5, #0A0A0A |
| colorTextWeak | 弱信息 | #CCCCCC, #4D4D4D |
| colorCard | 卡片 | #FFFFFF, #1A1A1A |
| colorTextSecondary | 副信息 | #666666, #B3B3B3 |
| colorGreyCard | 灰色的卡片 | #F5F5F5, #2B2B2B |
