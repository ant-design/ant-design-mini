---
toc: false
---

## 定制主题

antd-mini 内置了两套主题，一套基础主题，一套深色主题。使用自定义less变量，可使用不同的主题。

## 使用方式
1. 使用 `antd-mini/less/组件` 来使用组件。

```json
{
  "usingComponents": {
    "button": "antd-mini/less/Button/index"
  }
}
```

2. 在 `mini.project.json` 里可使用 modifyVars 修改 less变量 `theme`：
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