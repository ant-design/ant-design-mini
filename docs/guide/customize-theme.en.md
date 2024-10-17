---
order: 4
toc: false
---

# Custom Theme

antd-mini supports using less to customize themes. Two sets of themes are built into the antd-mini: the basic theme and the dark theme. You can use different themes or modify theme colors by customizing less variables.

## Mode of use

> The IDE version of the applet developer tool must be no less than 3.0.0, and the CLI version of the command line tool must be no less than 1.4.0.

1. Use `antd-mini/less/component`：

```json
{
  "usingComponents": {
    "button": "antd-mini/less/Button/index"
  }
}
```

2. In `mini.project.json` documents can be passed `modifyVars` Modifying the less variable, such as modifying `theme`：

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

## less variable

| Name               | Description                                        | Default Value               |
| ------------------ | ------------------------------------------- | -------------------- |
| theme              | Theme, selectable `default`、`dark`              | `default`            |
| rpx                | Rpx unit corresponding value                              | `0.5px`              |
| colorPrimary       | Main brand color, corresponding `default` and `dark` The default value | `#1677ff`、`#3086FF` |
| colorWathet        | Light blue                                      | `#E7F1FF`、`#0D2543` |
| colorRed           | Red                                        | `#FF3141`、`#FF4A58` |
| colorYellow        | Yellow                                        | `#FF9F18`、`#FFA930` |
| colorGreen         | Green                                        | `#22B35E`、`#34B368` |
| colorTextPrimary   | Primary Text Information Color                            | `#333333`、`#E6E6E6` |
| colorWhite         | White                                        | `#FFFFFF`、`#FFFFFF` |
| colorOrange        | Orange                                        | `#FF6430`、`#E65A2B` |
| colorBlack         | Black                                        | `#000000`、`#000000` |
| colorTextAssist    | Auxiliary Text Information Color                          | `#999999`、`#808080` |
| colorBorder        | Border Color                                    | `#EEEEEE`、`#2B2B2B` |
| colorBackground    | Global Background Color                                  | `#F5F5F5`、`#0A0A0A` |
| colorTextWeak      | Weak information                                      | `#CCCCCC`、`#4D4D4D` |
| colorCard          | Card Color                                    | `#FFFFFF`、`#1A1A1A` |
| colorTextSecondary | Secondary text information color                            | `#666666`、`#B3B3B3` |
| colorGreyCard      | Gray Card                                    | `#F5F5F5`、`#2B2B2B` |
