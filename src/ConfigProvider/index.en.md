---
nav:
  path: /components
group:
  title: Other
  order: 16
toc: 'content'
---

# ConfigProvider

For global configuration Ant Design Mini components, provide theme customization, internationalization support.

can pass `ConfigProvider` component to globally configure Ant Design Mini components, including:

- Setting the theme globally,[CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) To organize styles, by overwriting these CSS variables, you can customize the theme, dynamically switch the theme and other effects;
- Global settings internationalization, through the setting of Locales to achieve multi-language support;

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-config-provider": "antd-mini/es/ConfigProvider/index"
#endif
#if WECHAT
  "ant-config-provider": "antd-mini/ConfigProvider/index"
#endif
}
```

## Code Sample

### Theme customization

#### Override via CSS

You can override these CSS variables directly in the code, and the style of the Button component will change accordingly:

#### Covered by ConfigProvider

ConfigProvider components provide the ability to override CSS variables, you need to wrap a ConfigProvider component in the root node and configure some theme variables through the theme property.

### Internationalization

Antd-Mini provides ConfigProvider components for global configuration of internationalized copy. Currently supports the following 18 languages, does not support RTL capability;

- 简体中文 | zh-CN
- 繁体中文（中国台湾） | zh-TW
- 繁体中文（中国香港） | zh-HK
- 阿拉伯语（沙特阿拉伯 ）| ar-SA
- 英语（美式） | en-US
- 朝鲜语（韩国）| ko-KR
- 德语（德国）| de-DE
- 俄语（俄罗斯）| ru-RU
- 法语（法国）| fr-FR
- 西班牙语（西班牙）| es-ES
- 意大利语（意大利）| it-IT
- 马来语（马来西亚）| ms-MY
- Indonesian | in-ID
- 泰语（泰国）| th-TH
- 葡萄牙语（巴西）| pt-BR
- 日语（日本）| ja-JP
- Turkish (Turkey) | tr-TR
- Vietnamese | vi-VN

### Code Sample

<code src='../../demo/pages/ConfigProvider/index'></code>

### Add Language Pack

If you can't find the language pack you need, you are welcome to create a new language pack based on the English language pack and send us a Pull Request.

## API

The following is `ConfigProvider` Parameter list for the component:

| Property      | Description         | Type                     | Default Value  |
| --------- | ------------ | ------------------------ | ------- |
| theme     | Set Theme     | `light｜dark`            | `light` |
| themeVars | Provide Subject Variables | `Record<string, string>` | `-`     |
| locale    | Set up a multi-language package | `BaseLang`               | `zhCN`  |
