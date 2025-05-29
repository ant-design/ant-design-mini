---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Checkbox 复选框

在一组可选项中进行多选。单独使用时可以表示两种状态之间的切换，与 `switch` 类似。区别在于，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要与提交操作配合。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-checkbox": "antd-mini/es/Checkbox/index",
  "ant-checkbox-group": "antd-mini/es/Checkbox/CheckboxGroup/index"
#endif
#if WECHAT
  "ant-checkbox": "antd-mini/Checkbox/index",
  "ant-checkbox-group": "antd-mini/Checkbox/CheckboxGroup/index"
#endif
}
```

## 代码示例

### 基本使用

> 通过 `checked` 绑定复选框的勾选状态。

```xml
#if ALIPAY
<ant-checkbox checked="{{checked}}" onChange="handleCheckedChange">Basic usage</ant-checkbox>
#endif
#if WECHAT
<ant-checkbox checked="{{checked}}" bindchange="handleCheckedChange">Basic usage</ant-checkbox>
#endif
```

```js
Page({
  data: {
    checked: false,
  },
  handleCheckedChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
```

### 分组

```xml
#if ALIPAY
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  onChange="handleValueChange"
/>
#endif
#if WECHAT
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  bindchange="handleValueChange"
/>
#endif
```

```js
Page({
  data:{
    value: ['banana'],
     options: [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  handleValueChange(value) {
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
```

### 自定义分组

> `van-checkbox` 配合 `list` 一起使用，即可支持自定义分组选择

```xml
#if ALIPAY
<block
  a:for="{{customOptions}}"
  a:for-index="index"
  a:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      a:for="{{option.list}}"
      a:for-index="index"
      a:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          onChange="handleCustomChange"
        >
          {{item.title}}
        </ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
#if WECHAT
<block
  wx:for="{{customOptions}}"
  wx:for-index="index"
  wx:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      wx:for="{{option.list}}"
      wx:for-index="index"
      wx:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          bindchange="handleCustomChange"
        >{{item.title}}</ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
```

```js
Page({
  data: {
    customOptions: [
      {
        title: 'Group one',
        list: [
          {
            title: 'Option one',
            value: '1',
          },
        ],
      },
      {
        title: 'Group two',
        list: [
          {
            title: 'Option two',
            value: '2',
          },
        ],
      },
    ],
    customValue: [],
  },
  handleCustomChange(checked, e) {
    let value = this.data.customValue;

#if WECHAT
    const event = checked;
    if (event.detail) {
      value = value.concat(event.target.dataset.value);
    } else {
      value = value.filter((v) => v !== event.target.dataset.value);
    }
#endif

#if ALIPAY
    if (checked) {
      value = value.concat(e.target.dataset.value);
    } else {
      value = value.filter((v) => v !== e.target.dataset.value);
    }
#endif

    this.setData({ customValue: value });
    console.log(value);
  },
});
```

### Demo 代码

<code src='../../demo/pages/Checkbox/index'></code>

## API

#### Checkbox

| 属性                   | 说明                    | 类型                                                                                                | 默认值 |
| ---------------------- | ----------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| checked                | 是否选中                | boolean                                                                                             | -      |
| className              | 类名                    | string                                                                                              | -      |
| color                  | 选中的颜色，同 CSS 色值 | string                                                                                              | -      |
| defaultChecked         | 默认是否选中            | boolean                                                                                             | -      |
| disabled               | 是否禁用                | boolean                                                                                             | false  |
| style                  | 样式                    | string                                                                                              | -      |
| #if ALIPAY onChange    | 选中状态改变时触发回调  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindchange | 选中状态改变时触发回调  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

#### CheckboxGroup

| 属性                   | 说明                                                         | 类型                                                                                                 | 默认值     |
| ---------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| className              | 类名                                                         | string                                                                                               | -          |
| color                  | 选中的颜色，同 CSS 色值                                      | string                                                                                               | -          |
| defaultValue           | 默认选中的值                                                 | `string[]`                                                                                           | -          |
| disabled               | 是否禁用                                                     | boolean                                                                                              | false      |
| label                  | label 区插槽，接收 value（当前项可选项 item）、index（索引） | slot                                                                                                 | -          |
| options                | 指定可选项                                                   | `{label: string; value: string; disabled: boolean}[]`                                                | -          |
| position               | 布局，可选 `horizontal`、`vertical`                          | string                                                                                               | `vertical` |
| style                  | 样式                                                         | string                                                                                               | -          |
| value                  | CheckboxGroup 的值，决定子元素是否勾选                       | `string[]`                                                                                           | -          |
| #if ALIPAY onChange    | 勾选状态变化时触发此函数                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |
| #if WECHAT bindchange | 勾选状态变化时触发此函数                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                                | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --checkbox-header-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 复选框标题颜色       |
| --checkbox-border-color               | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #fff;">#474747</div> | 复选框边框颜色       |
| --checkbox-background-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 复选框背景颜色       |
| --checkbox-disabled-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #fff;">#121212</div> | 复选框禁用背景颜色   |
| --checkbox-text-color                 | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 复选框文本颜色       |
| --checkbox-fake-icon-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | 复选框假图标背景颜色 |
