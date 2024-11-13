---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# PopoverList 气泡菜单

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

点击元素，弹出气泡式的菜单

## 何时使用

用于导航功能的气泡菜单唤起，通常用于收纳低频使用的功能。该功能只能通过导航栏上的图标激活。

## 代码示例

### 基本使用

<!-- <code src='pages/Popover/index' noChangeButton></code> -->

### 结合 List 组件使用

<!-- <code src='pages/PopoverList/index' noChangeButton></code> -->

## API

| 属性               | 说明                                                                                                                                                                | 类型                                                                                                | 默认值 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow | 气泡被遮挡时的自动调整位置                                                                                                                                          | boolean                                                                                             | true   |
| className          | 类名                                                                                                                                                                | string                                                                                              | -      |
| color              | 背景颜色                                                                                                                                                            | string                                                                                              | -      |
| contentClassName   | content 类名                                                                                                                                                        | string                                                                                              | -      |
| contentStyle       | content 样式                                                                                                                                                        | string                                                                                              | -      |
| content            | 内容                                                                                                                                                                | string \| slot                                                                                      | -      |
| defaultVisible     | 默认是否显示                                                                                                                                                        | boolean                                                                                             | false  |
| destroyOnClose     | 不可见时是否卸载内容                                                                                                                                                | boolean                                                                                             | false  |
| maskClassName      | 蒙层的类名                                                                                                                                                          | string                                                                                              | -      |
| maskStyle          | 蒙层的样式                                                                                                                                                          | string                                                                                              | -      |
| placement          | 气泡框位置，可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` 或 `right-bottom` | string                                                                                              | top    |
| showMask           | 是否展示蒙层，为 true 时点击空白处可关闭 Popover                                                                                                                    | boolean                                                                                             | true   |
| style              | 样式                                                                                                                                                                | string                                                                                              | -      |
| visible            | 是否显示                                                                                                                                                            | boolean                                                                                             | -      |
| onVisibleChange    | visible 变更时的回调                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                                                    | 备注                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover 列表内容背景颜色 |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | Popover 列表内容颜色     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover 列表徽章颜色     |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | Popover 列表内容文字颜色 |