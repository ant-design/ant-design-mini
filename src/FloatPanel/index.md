---
nav:
  path: /components
group:
  title: 信息展示
  order: 1
toc: false
---

# FloatPanel 滑动面板
内容型面板，用户可自由灵活上下滑动浏览内容
1. 面板初始高度默认窗口高度 18%，手指向上滑动面板升起到默认 35 %，继续向上滑动面板高度达到最大默认 95%
2. 手指下滑面板先回到默认 35%，继续向下滑动回到默认 18%
3. 面板内容区域在面板达到最大高度后可滑动

## 基础使用

<code src='../../demo/pages/FloatPanel'></code>

## 事件监听
<code src='../../demo/pages/FloatPanelEvent'></code>


## API
### 属性
#### FloatPanel
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 组件根节点类 |
| minHeight | number | 否 | 0.18 | 面板最大高度，单位为页面高度百分比
| middleHeight | number | 否 | 0.35 | 面板次最大高度，单位为页面高度百分比 |
| maxHeight | number | 否 | 0.9 | 面板最小高度，单位为页面高度百分比 |
| lowerThreshold | number | 否 | 50 | 距离内容区域底部多远触发 onContentToBottom 回调 |
| onContentToBottom | function | 否 | - | 内容区域滚动到底部，常用于数据加载 |
| withMask | boolean | 否 | true | 开启蒙层，默认透明

### 插槽

| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| content | 滑动内容插槽 |
| footer | 尾部内容插槽 |

### 样式类
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-swiper-box               | 组件根节点         |
| amd-swiper-arrow-wrapper     | 指示器样式  |
| amd-swiper-header | 头部区域样式   |
| amd-swiper-scroll-view | 内容区域 scroll-view 样式   |
| amd-swiper-footer  | 底部区域样式 |
| amd-swiper-background | 蒙层样式 |