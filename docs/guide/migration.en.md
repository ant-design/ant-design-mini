---
order: 6
toc: true
---

# Upgrade Guide

The last version of Ant Design Mini v2 was `v2.36.8`The first version of v3 was `v3.0.0`。

What did we do for the v3 version?

- Component Visual Upgrade
- Support dark mode
- Support theme customization
- Internationalized multi-language support

Among them, dark mode, theme customization and internationalization of multilingual are brand-new functions, which can be directly used when upgraded to v3.

For visual upgrade of components, we modified the styles of some components in v2 version to meet the latest visual specifications. During the upgrade process, we made maximum forward compatibility without destroying the component structure, className prefix and Props parameters of v2 version. Theoretically, v2 can be directly upgraded to v3 without Breaking Change. Although we have made as much compatibility guarantee as possible in the development of the new version, we still**It is strongly recommended that the access party conduct a complete regression test during the upgrade from v2 to v3 to prevent inconsistent business performance due to some unexpected Edge Case.**

## Upgrade Description

| Component Name       | Upgrade Description                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Button         | 🛠New `aide` Properties;                                                                                    |
| Calendar       | 🛠Remove `localeText` attributes; original `title` property is defined `format` attribute substitution;                                     |
| Empty          | 🛠New `buttonInfo` 、`imageMode` Properties;`onClickButton` the incident;                                          |
| Popover        | 🛠New `showCloseIcon` 、`imageUrl` 、`actionText` Properties;`onTapAction` the incident;                           |
| Popup          | 🛠New `backgroundImage` 、`showClose` 、`showBack` Properties;`onClickBackIcon` 、`onClickCloseIcon` the incident; |
| Toast          | 🛠New `textType` attributes; original `type` Property Added `alipay` type;                                          |
| Card           | 🆕New Components                                                                                             |
| Dialog         | 🆕New Components                                                                                             |
| SafeArea       | 🆕New Components                                                                                             |
| AutoResize     | 🆕New Components                                                                                             |
| ConfigProvider | 🆕New Components                                                                                             |
| Countdown      | 🆕New Components                                                                                             |
| Table          | 🆕New Components                                                                                             |
| Feedback       | 🆕New Components                                                                                             |
| PopoverList    | 🆕New Components                                                                                             |
| SelectContact  | 🆕New Components                                                                                             |
| Sticky         | 🆕New Components                                                                                             |
| Voucher        | 🆕New Components                                                                                             |
| NumberInput    | 🆕New Components                                                                                             |
| Postscript     | 🆕New Components                                                                                             |

<style>
    th:nth-of-type(1){
        width: 0px !important;
    }
</style>

## Historical Version

Migration Guide:

- [Upgrade from v1 to v2](https://2x-mini.ant.design/guide/migration-v2)
- [Upgrade from v0 to v1](https://2x-mini.ant.design/guide/migration-v1)

Full Document Address:

- [Version v2](https://2x-mini.ant.design)
- [Version v1](https://1x-mini.ant.design)
- [v0 version](https://0x-mini.ant.design)
