---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# IndexBar 索引

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

侧边索引组件

## 何时使用

用于快速定位列表索引。

## 代码示例

### 基本使用

<code src='../../demo/pages/IndexBar/index'></code>

### 结合列表使用

<!-- <code src='pages/IndexBarScrollView/index'></code> -->

### 控制选中状态

<!-- <code src='pages/IndexBarControl/index'></code> -->

## API

| 属性            | 说明                              | 类型                                          | 默认值 |
| --------------- | --------------------------------- | --------------------------------------------- | ------ |
| activeClassName | 索引激活时的样式                  | string                                        | -      |
| className       | 类名                              | string                                        | -      |
| current         | 索引值                            | string                                        | -      |
| defaultCurrent  | 默认索引                          | string                                        | -      |
| labelPreview    | 索引预览内容，接收 value 和 index | slot                                          | -      |
| items           | 索引数组                          | [Item](#item)                                 | []     |
| style           | 样式                              | string                                        | -      |
| size            | 索引的尺寸（宽高，单位 px）       | number                                        | 16     |
| vibrate         | 索引改变时是否震动                | boolean                                       | true   |
| onChange        | 索引改变时的回调                  | (value: [Item](#item), index: number) => void |

#### Item

| 属性           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| label          | 索引标识                 | string  | -      |
| disablePreview | 禁用索引触发时的预览效果 | boolean | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                           | 默认值                                                                                            | 备注               |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --index-bar-tip-background-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | 索引栏提示背景颜色 |
| --index-bar-text-color           | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 索引栏文本颜色     |
| --index-bar-assist-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 索引栏辅助文本颜色 |
| --index-bar-active-color         | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | 索引栏激活颜色     |
