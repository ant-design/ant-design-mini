---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# SafeArea 安全区
当网页被全屏展示时，可借助安全区进行屏幕顶部和底部适配，如刘海屏。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-safe-area": "antd-mini/es/SafeArea/index"
#endif
#if WECHAT
  "ant-safe-area": "antd-mini/SafeArea/index"
#endif
}
```

## 代码示例

### 顶部安全区
```xml
<ant-safe-area 
  position="top" 
  className="ant-safe-area-top"
>
  内容区域
</ant-safe-area>
```

### 底部安全区
```xml
<ant-safe-area 
  position="bottom" 
  className="ant-safe-area-bottom"
>
  内容区域
</ant-safe-area>
```

### Demo 代码

<code src="../../demo/pages/SafeArea/index"></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
|-----|-----|-----|--------|
| className | 容器 className | string | - |
| position | 安全区的位置，可选`top`、`bottom` | string | - |

## 插槽

| 名称        | 说明                 |
| ----------- | -------------------- |
| 默认插槽    | 安全区中包含的内容 |
