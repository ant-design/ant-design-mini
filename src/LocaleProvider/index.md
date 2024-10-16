---
nav:
  path: /components
group:
  title: 实验性
  order: 15
toc: 'content'
---

# LocaleProvider 多语言容器

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

用于全局配置 Antd-Mini 组件的国际化支持。

## 何时使用

Antd-Mini 提供了 LocaleProvider 组件用于全局配置国际化文案。目前支持以下 17 种语言，暂不支持 RTL 能力；

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
- 印尼语 ｜ id-ID
- 泰语（泰国）| th-TH
- 葡萄牙语（巴西）| pt-BR
- 日语（日本）| ja-JP
- 土耳其语（土耳其）｜ tr-TR

## 代码示例

<!--
<code src='pages/List/index'></code> -->

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 英文语言包 的基础上创建一个新的语言包，并给我们发一个 Pull Request。

## API

以下是 `LocaleProvider` 组件的参数列表：

| 属性   | 说明         | 类型       | 默认值  |
| ------ | ------------ | ---------- | ------- |
| locale | 设置多语言包 | `BaseLang` | `zh-CN` |
