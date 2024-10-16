---
nav:
  path: /components
group:
  title: 实验性
  order: 15
toc: 'content'
---

# ConfigProvider 全局容器

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

用于全局配置 Antd-Mini 组件，提供主题定制能力。

## 何时使用

可以通过 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

## 代码示例

<!-- <code src='pages/ConfigProvider/index'></code> -->

### 主题定制

<!-- <code src='pages/ConfigProvider/index'></code> -->

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

#### 通过 ConfigProvider 覆盖

ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme 属性来配置一些主题变量。

## API

以下是 `ConfigProvider` 组件的参数列表：

| 属性      | 说明         | 类型                     | 默认值  |
| --------- | ------------ | ------------------------ | ------- |
| theme     | 设置主题     | `light｜dark`            | `light` |
| themeVars | 提供主题变量 | `Record<string, string>` | `-`     |
