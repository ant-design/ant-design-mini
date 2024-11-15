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

其中 暗黑模式、主题定制、国际化多语言 为全新功能，完全兼容 v2 版本。

组件视觉升级 则是修改了部分 v2 版本中组件的样式，难以避免引入样式上的兼容，所以需要在 v2 升级 v3 的过程中，关注已使用的组件样式。

## 升级说明

> 所有组件基本都涉及细节样式调整，须自行检查；下面提到的 <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>，如果对该组件进行样式覆盖需要更关注。

| 组件名称       | 升级说明                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button         | 新增 `aide` 属性；                                                                                                                                                                                                   |
| Calendar       | 去掉 `localeText` 属性；`title` 属性由 `format` 属性替换；                                                                                                                                                           |
| Empty          | 新增 `buttonInfo` 属性；新增 `onClickButton` 事件； <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                  |
| Grid           | <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                                                                      |
| List           | <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                                                                      |
| Popover        | 新增 `showCloseIcon` 属性； 新增 `imageUrl` 属性； 新增 `actionText` 属性； 新增 `onTapAction` 事件；<span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span> |
| Popup          | 新增 `backgroundImage` 属性；新增 `showClose` 属性；新增 `showBack` 属性；新增 `onClickBackIcon` 事件； 新增 `onClickCloseIcon` 事件；                                                                               |
| Result         | <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                                                                      |
| Steps          | <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                                                                      |
| TabBar         | <span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                                                                                      |
| Toast          | 原有的 `type` 属性新增 `alipay` 类型；新增 `textType` 属性；<span style="color: #d46b08;background: #fff7e6;padding: 1px 5px;border-radius: 4px;">模板标签结构有调整</span>                                          |
| Card           | 🆕 新增组件                                                                                                                                                                                                          |
| Dialog         | 🆕 新增组件                                                                                                                                                                                                          |
| Alphabet       | 🆕 新增组件                                                                                                                                                                                                          |
| AutoResize     | 🆕 新增组件                                                                                                                                                                                                          |
| ConfigProvider | 🆕 新增组件                                                                                                                                                                                                          |
| Countdown      | 🆕 新增组件                                                                                                                                                                                                          |
| Countdown      | 🆕 新增组件                                                                                                                                                                                                          |
| Feedback       | 🆕 新增组件                                                                                                                                                                                                          |
| PopoverList    | 🆕 新增组件                                                                                                                                                                                                          |
| SelectContact  | 🆕 新增组件                                                                                                                                                                                                          |
| Sticky         | 🆕 新增组件                                                                                                                                                                                                          |
| Voucher        | 🆕 新增组件                                                                                                                                                                                                          |

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
