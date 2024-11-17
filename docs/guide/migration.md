---
order: 6
toc: true
---

# 升级指南

Ant Design Mini v2 的最后一个版本是 `v2.36.8`，v3 的第一个版本是 `v3.0.0`。

我们针对 v3 版本做了什么？

- 组件视觉升级
- 支持暗黑模式
- 支持主题定制
- 支持国际化多语言

其中暗黑模式、主题定制、国际化多语言为全新功能，升级到 v3 可以直接使用。

对于组件视觉升级，我们修改了部分 v2 版本中组件的样式以满足最新的视觉规范，我们在升级过程中做了最大程度的向前兼容，未破坏 v2 版本的组件结构、className 前缀和 Props 参数，理论上从 v2 可以直接升级到 v3 而无 Breaking Change。虽然在新版本开发过程中做了尽可能的兼容保障，但我们仍然**强烈建议接入方在从 v2 升级到 v3 的过程中进行完整回归测试，防止因为某些预期外的 Edge Case 导致业务表现不一致。**

## 升级说明

| 组件名称       | 升级说明                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Button         | 新增 `aide` 属性；                                                                                                                     |
| Calendar       | 去掉 `localeText` 属性；`title` 属性由 `format` 属性替换；                                                                             |
| Empty          | 新增 `buttonInfo` 属性；新增 `onClickButton` 事件；                                                                                    |
| Popover        | 新增 `showCloseIcon` 属性； 新增 `imageUrl` 属性； 新增 `actionText` 属性； 新增 `onTapAction` 事件；                                  |
| Popup          | 新增 `backgroundImage` 属性；新增 `showClose` 属性；新增 `showBack` 属性；新增 `onClickBackIcon` 事件； 新增 `onClickCloseIcon` 事件； |
| Toast          | 原有的 `type` 属性新增 `alipay` 类型；新增 `textType` 属性；                                                                           |
| Card           | 🆕 全新组件                                                                                                                            |
| Dialog         | 🆕 全新组件                                                                                                                            |
| Alphabet       | 🆕 全新组件                                                                                                                            |
| AutoResize     | 🆕 全新组件                                                                                                                            |
| ConfigProvider | 🆕 全新组件                                                                                                                            |
| Countdown      | 🆕 全新组件                                                                                                                            |
| Countdown      | 🆕 全新组件                                                                                                                            |
| Feedback       | 🆕 全新组件                                                                                                                            |
| PopoverList    | 🆕 全新组件                                                                                                                            |
| SelectContact  | 🆕 全新组件                                                                                                                            |
| Sticky         | 🆕 全新组件                                                                                                                            |
| Voucher        | 🆕 全新组件                                                                                                                            |

<style>
    th:nth-of-type(1){
        width: 0px !important;
    }
</style>

## 历史版本

迁移指南：

- [从 v1 升级到 v2](https://2x-mini.ant.design/guide/migration-v2)
- [从 v0 升级到 v1](https://2x-mini.ant.design/guide/migration-v1)

完整文档地址：

- [v2 版本](https://2x-mini.ant.design)
- [v1 版本](https://1x-mini.ant.design)
- [v0 版本](https://0x-mini.ant.design)
