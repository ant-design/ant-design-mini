---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Voucher 优惠券

## 何时使用

通用优惠券组件。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-voucher": "antd-mini/es/Voucher/index"
#endif
#if WECHAT
  "ant-voucher": "antd-mini/Voucher/index"
#endif
}
```

## 代码示例

### 基础用法

```xml
<ant-voucher
#if ALIPAY
  onTap="onTap"
#endif
#if WECHAT
  bind:tap="onTap"
#endif
  dataSource="{{dataSource}}"
/>
```

```js
Page({
  data: {
    dataSource: [
      {
        title: 'title',
        desc: 'subTitle',
        money: '50',
        threshold: '500 to use',
        actionAreaInfo: {
          disabled: false,
          text: 'to exchange',
        },
      },
    ],
  },
});
```

### 小号券样式

```xml
<ant-voucher
  size="small"
  dataSource="{{dataSource}}"
/>
```

### 水平排列（默认）

```xml
<ant-voucher
  direction="horizontal"
  dataSource="{{dataSource}}"
/>
```

### 竖直排列

```xml
<ant-voucher
  direction="vertical"
  dataSource="{{dataSource}}"
/>
```

### 多列方式排列

```xml
<ant-voucher
  direction="multipleColumn"
  dataSource="{{dataSource}}"
/>
```

### 插槽

```xml
<voucher
  size="small"
  dataSource="{{dataSource}}"
>
  <view
    slot="voucher-action-area"
    class="ant-voucher-slot-demo"
  >
    已过期
  </view>
</voucher>
```

### Demo 代码

<code src="../../demo/pages/Voucher/index"></code>

## 属性

| 属性       | 类型                                                   | 必填 | 默认值       | 说明                 |
| ---------- | ------------------------------------------------------ | ---- | ------------ | -------------------- |
| className  | string                                                 | 否   | ""           | 容器 className       |
| size       | `small` &#124; `large`                                 | 否   | `large`      | 券样式               |
| direction  | `horizontal` &#124; `vertical` &#124; `multipleColumn` | 否   | `horizontal` | 多张券时候的排列方式 |
| dataSource | [Item](#item)[]                                        | 是   | []           | 数据源               |

### Item

| 属性           | 类型             | 默认值  | 说明                             |
| -------------- | ---------------- | ------- | -------------------------------- |
| title          | string           | 无      | 券的标题                         |
| desc           | string           | 无      | 券的描述                         |
| money          | string           | 无      | 券的金额文案                     |
| moneyUnit      | string           | '元'    | 券的单位文案，例如：xx 元、xx 折 |
| threshold      | string           | 无      | 券的限制文案                     |
| disabled       | bool             | `false` | 是否禁用                         |
| actionAreaInfo | [ActionAreaInfo] | 无      | 行动区域                         |

### ActionAreaInfo

| 属性     | 类型   | 默认值  | 说明                             |
| -------- | ------ | ------- | -------------------------------- |
| disabled | bool   | `false` | 是否禁用                         |
| text     | string | 无      | 按钮文案                         |
| imageUrl | string | 无      | 完成态的图片，有图片时不展示按钮 |

## 事件

| 事件名                     | 说明                 | 类型                  |
| -------------------------- | -------------------- | --------------------- |
| #if ALIPAY onBtnTap        | 点击按钮，触发此回调 | `(item, event)=>void` |
| #if ALIPAY onVoucherTap    | 点击卡片，触发此回调 | `(item, event)=>void` |
| #if WECHAT bind:btnTap     | 点击按钮，触发此回调 | `(item, event)=>void` |
| #if WECHAT bind:voucherTap | 点击卡片，触发此回调 | `(item, event)=>void` |

## 插槽

| 名称                | 说明     |
| ------------------- | -------- |
| voucher-action-area | 行动区域 |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                             | 默认值                                                                                                                              | 深色模式默认值                                                                                                                      | 备注                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --voucher-multi-money-color        | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div>                                   | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div>                                   | 多金额优惠券颜色         |
| --voucher-threshold-color          | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | 阈值颜色                 |
| --voucher-action-btn-color         | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>                                   | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>                                   | 操作按钮颜色             |
| --voucher-action-bg                | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | 操作背景颜色             |
| --voucher-action-left-bg           | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | 操作左侧背景颜色         |
| --voucher-action-left-threshold-bg | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | 操作左侧阈值背景颜色     |
| --voucher-action-right-color       | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | 操作右侧颜色             |
| --voucher-action-right-title-color | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                   | 操作右侧标题颜色         |
| --voucher-action-right-desc-color  | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.8); color: #ffffff;">rgba(255, 255, 255, 0.8)</div> | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.8); color: #ffffff;">rgba(255, 255, 255, 0.8)</div> | 操作右侧描述颜色         |
| --voucher-item-right-title-color   | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>                                         | 项目右侧标题颜色（重复） |
