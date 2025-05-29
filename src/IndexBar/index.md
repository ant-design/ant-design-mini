---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# IndexBar 索引

侧边索引组件。用于快速定位列表索引。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
  "ant-index-bar": "antd-mini/es/IndexBar/index"
}
```

## 代码示例

### 基本使用

```xml
<view class="base">
  <ant-list header="基本使用"></ant-list>
  <view class="indexbar">
    <ant-index-bar items="{{items}}" />
  </view>
</view>
```

```css
.base {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.indexbar {
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

```js
Page({
  data: {
    items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
      return { label: u };
    }),
  },
});
```

### 结合列表使用

```xml
#if ALIPAY
<view class="base">
  <ant-index-bar
    className="indexbar"
    items="{{items}}"
    defaultCurrent="H"
    onChange="onChange">
    <view slot-scope="props">
      <ant-list header="{{props.value.label}}">
        <ant-list-item
          a:for="{{4}}"
          a:for-item="itemX">
          {{props.value.label}}-{{itemX}}
        </ant-list-item>
      </ant-list>
    </view>
  </ant-index-bar>
</view>
#endif
#if WECHAT
因微信不支持作用域插槽，暂不支持此用法
#endif
```

```css
#if ALIPAY .base {
  width: 100%;
  height: 100vh;
}
.indexbar {
  position: fixed;
  right: 10px;
  top: 20vh;
}
#endif #if WECHAT 因微信不支持作用域插槽，暂不支持此用法 #endif;
```

```js
#if ALIPAY
Page({
  data: {
    items: [],
  },
  onLoad() {
    this.setData({
      items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
        return { label: u };
      }),
    });
  },
});
#endif
#if WECHAT
因微信不支持作用域插槽，暂不支持此用法
#endif
```

### 受控模式

> 参考下面 [Demo 代码](#demo-代码) 中的实现。

### Demo 代码

<code src='../../demo/pages/IndexBar/index'></code>

## API

| 属性                   | 说明                              | 类型                                          | 默认值 |
| ---------------------- | --------------------------------- | --------------------------------------------- | ------ |
| activeClassName        | 索引激活时的样式                  | string                                        | -      |
| className              | 类名                              | string                                        | -      |
| current                | 索引值                            | string                                        | -      |
| defaultCurrent         | 默认索引                          | string                                        | -      |
| labelPreview           | 索引预览内容，接收 value 和 index | slot                                          | -      |
| items                  | 索引数组                          | [Item](#item)                                 | []     |
| style                  | 样式                              | string                                        | -      |
| size                   | 索引的尺寸（宽高，单位 px）       | number                                        | 16     |
| vibrate                | 索引改变时是否震动                | boolean                                       | true   |
| #if ALIPAY onChange    | 索引改变时的回调                  | (value: [Item](#item), index: number) => void |
| #if WECHAT bindchange | 索引改变时的回调                  | (value: [Item](#item), index: number) => void |

#### Item

| 属性           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| label          | 索引标识                 | string  | -      |
| disablePreview | 禁用索引触发时的预览效果 | boolean | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                           | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注               |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --index-bar-tip-background-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | 索引栏提示背景颜色 |
| --index-bar-text-color           | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 索引栏文本颜色     |
| --index-bar-assist-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 索引栏辅助文本颜色 |
| --index-bar-active-color         | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 索引栏激活颜色     |
