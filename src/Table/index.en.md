---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Table

Displays row and column data.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-table": "antd-mini/es/Table/index"
#endif
#if WECHAT
  "ant-table": "antd-mini/Table/index"
#endif
}
```

## Code Sample

### Basic Usage

```xml
<ant-table
  className='ant-table'
  dataSource="{{dataSource}}"
  columns="{{columns}}"
/>
```

```js
const nameArr = [
  '小明',
  '小何',
  '小花',
  '小美',
  '小白',
  '小黑',
  '小帅',
  '阿伟',
];
const sexArr = ['男', '女'];
const ageArr = ['40', '18', '32', '20', '33', '48', '28', '38'];
const favoriteArr = ['羽毛球', '乒乓球', '篮球', '桌球'];
const addressArr = ['北京', '上海', '浙江', '广州'];

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

Page({
  data: {
    dataSource: Array.from({ length: 7 }).map((v, i) => ({
      key: i,
      name: nameArr[i],
      sex: sexArr[getRandomNumber(sexArr.length)],
      age: ageArr[i],
      extra: '测试',
      favorite: favoriteArr[getRandomNumber(favoriteArr.length)],
      address: addressArr[getRandomNumber(addressArr.length)],
    })),
    columns: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        fixed: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        textAlignRight: true,
        width: 150,
        sorter: true,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 150,
      },
      {
        title: '爱好',
        dataIndex: 'favorite',
        key: 'favorite',
        width: 250,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 250,
      },
    ],
  },
});
```

### Local Scroll

```xml
<ant-table
  dataSource="{{dataSource}}"
  columns="{{columns}}"
  scrollHeight="300rpx"
/>
```

### Full display

```xml
<ant-table
  dataSource="{{dataSource}}"
  columns="{{fullColumns}}"
  displayType="FULL"
/>
```

### Empty data slot

```xml
<ant-table
  dataSource="{{[]}}"
  columns="{{columns}}"
>
  <image src="https://mdn.alipayobjects.com/huamei_9iifqq/afts/img/A*AWeXQYuIODwAAAAAAAAAAAAADjWYAQ/original" />
</ant-table>
```

### Beyond line break display
You can use the column configuration parameters.```ellipsisRow```Controls whether to wrap lines and how many lines are eventually displayed, beyond the ellipsis

```xml
<ant-table 
  dataSource="{{[{key: '0', name: '这是一行很长的数据，需要换行展示blablablabla', age: 18, sex: '男', address: '成都'}]}}" 
  columns="{{fullColumns}}"
/>
```

### Demo Code

<code src="../../demo/pages/Table/index"></code>

## Property

| Property         | Description                                                                   | Type                | Default Value  |
| ------------ | ---------------------------------------------------------------------- | ------------------- | ------- |
| className    | Container className                                                         | string              | -       |
| dataSource   | Data Source                                                                 | any[]               | -       |
| columns      | Configuration description of table columns                                                       | [Column](#column)[] | -       |
| displayType  | Table style type. The default style is displayed based on the configured width. Optional `FULL`、`DEFAULT` | string              | DEFAULT |
| scrollHeight | Specify scrollable area height                                                     | string              | -       |

### Column

| Property           | Description                         | Type    | Default Value |
| -------------- | ---------------------------- | ------- | ------ |
| title          | Column Header                       | string  | -      |
| dataIndex      | Column Value Field                   | string  | -      |
| key            | Column Unique Identifier                   | string  | -      |
| width          | Column Width                       | number  | -      |
| fixed          | Fixed column                   | boolean | -      |
| textAlignRight | Whether column text is right-justified             | boolean | -      |
| ellipsisRow    | The maximum number of rows displayed in a cell, which exceeds omission. | number  | -      |


## Slot

| Name     | Description                                                                                    |
| -------- | --------------------------------------------------------------------------------------- |
| Default Slot | Data source is empty slot                                                                          |
| item     | Cell Slot (Scope Slot, Exposed Properties `item`、`index`、`row`、`rowIndex`. WeChat is not supported) |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name               | Default Value                                                                                                                    | Dark Mode Default                                                                                                            | Remarks               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --table-item-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Table Item Color           |
| --table-item-bg      | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | Table Item Background Color       |
| --table-shadow-color | <div style="width: 150px; height: 30px; background-color: rgba(5, 5, 5, 0.06); color: #ffffff;">rgba(5, 5, 5, 0.06)</div> | <div style="width: 150px; height: 30px; background-color: rgba(5, 5, 5, 0.06); color: #ffffff;">rgba(5, 5, 5, 0.06)</div> | Table Shadow Color       |
| --table-empty-bg     | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                               | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Table empty state background color |
