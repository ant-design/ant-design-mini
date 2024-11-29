---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# TODO create-component

# Footer

## 代码示例

<code src='../../demo/pages/Footer/index'></code>

## API

| 属性      | 说明             | 类型    | 默认值 |
| --------- | ---------------- | ------- | ------ |
| animation | 是否开启过渡动画 | boolean | true   |

## FAQ

### 这是一个假问题？

这是一个假答案

Popup 默认是通过 `display:none` 隐藏的，而 picker-view 不能放到 `display:none` 的组件里。有以下两种解决方式：

1. 在 picker-view 上添加属性 `a:if="{{popupVisible}}"`，在 Popup 显示时再显示 picker-view。
2. 在 Popup 上设置 `destroyOnClose="{{true}}"`，在 Popup 不可见时卸载内容。
