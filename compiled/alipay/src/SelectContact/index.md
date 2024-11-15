---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
---

# SelectContact 选人能力

找人能力：共享类面向对 C 用户的业务，实际上都存在这找人的诉求。举例：亲情卡主卡用户“找人”赠送亲情卡，求赠卡用户“找人”帮忙开通，代付的用户在使用代付时找人帮忙代付，小荷包的用户拉群时需要“找人”来加入。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-select-contact": "antd-mini/es/SelectContact/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<SelectContact
  className="stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
/>
```

```js
Page({
  handleChange(value) {
    console.log(value);
  },
});
```

### Demo 代码

<code src='../../demo/pages/SelectContact/index'></code>

## API

| 属性                          | 说明                         | 类型                      | 默认值 |
| ----------------------------- | ---------------------------- | ------------------------- | ------ |
| className                     | 类名                         | string                    | -      |
| height                        | 组件高度                     | string                    | -      |
| source                        | 业务来源，区分场景监控、埋点 | string                    | -      |
| bizScene                      | 接入方场景，后段校验         | number                    | -      |
| #if ALIPAY onSelect           | 选中联系人时触发             | (IOnSelectParams) => void | -      |
| #if ALIPAY onError            | 获取数据接口报错触发         | (error: any) => void      | -      |
| #if ALIPAY onContactListEmpty | 推荐列表为空时触发           | () => void                | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。
