---
toc: false
---

## 常见问题

### antd-mobile 与 antd-mini 的关系

antd-mobile 是 h5 组件库，antd-mini 是支付宝小程序组件库。两者遵循一套设计规范，但是由于技术栈不同，组件的实现、使用等会有不同。

### mini-antui、mini-ali-ui 与 antd-mini 的关系

小程序组件库历经 mini-antui、mini-ali-ui 迭代至 antd-mini。现在 antd-mini 已经加入 ant design 大家庭，设计规范全新升级，并且将增强现有组件，新增基础组件以满足小程序开发者的需求。

### 升级指南

虽然 mini-antui、mini-ali-ui 与 antd-mini 可以共存，但是 mini-antui 与 mini-ali-ui 已经停止维护，建议大家升级至 antd-mini。使用方法上没有变化，但是组件组件名称及 API 会有 breaking change。

### 主题修改

antd-mini 内部使用了 [CSS 变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)来定义组件样式。但是，当前的 CSS 变量数目过少，不足以覆盖所有的组件。因此，目前还是建议直接使用 CSS 样式覆盖的方式来修改组件样式。不过，在不久的将来，我们会增加 CSS 变量数目。届时，可以取代现有“粗暴”的样式覆盖方法。

### 实验性组件

为了使 antd-mini 组件库能满足通用的业务需求，我们新增了一些探索性质的组件。这类组件通常在以往的 mini-antui 及 mini-ali-ui 中从未出现过，因此，我们需要收集用户的反馈并不断地对其进行打磨。在我们认为其足够稳定后，会将其移出实验性组件分组。当然，在那之前，实验性组件在迭代中可能会有 Breaking Change。
