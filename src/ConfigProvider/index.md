---
nav:
  path: /components
group:
  title: 实验性
  order: 16
toc: 'content'
---

# ConfigProvider 全局容器

用于全局配置 Ant Design Mini 组件，提供主题定制，国际化支持。

可以通过 `ConfigProvider` 组件来全局配置 Ant Design Mini 组件，包括：

- 全局设置主题，通过[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果；
- 全局设置国际化，通过设置 Locales 来实现多语言支持；

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 主题定制

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

#### 通过 ConfigProvider 覆盖

ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme 属性来配置一些主题变量。

### 国际化

Antd-Mini 提供了 ConfigProvider 组件用于全局配置国际化文案。目前支持以下 18 种语言，暂不支持 RTL 能力；

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
- 印尼语 ｜ in-ID
- 泰语（泰国）| th-TH
- 葡萄牙语（巴西）| pt-BR
- 日语（日本）| ja-JP
- 土耳其语（土耳其）｜ tr-TR
- 越南语｜ vi-VN

### 代码示例

<code src='../../demo/pages/ConfigProvider/index'></code>

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 英文语言包 的基础上创建一个新的语言包，并给我们发一个 Pull Request。

## API

以下是 `ConfigProvider` 组件的参数列表：

| 属性      | 说明         | 类型                     | 默认值  |
| --------- | ------------ | ------------------------ | ------- |
| theme     | 设置主题     | `light｜dark`            | `light` |
| themeVars | 提供主题变量 | `Record<string, string>` | `-`     |
| locale    | 设置多语言包 | `BaseLang`               | `zhCN`  |
