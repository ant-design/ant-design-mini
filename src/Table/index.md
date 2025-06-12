---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Table 表格

展示行列数据。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基础用法

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

### 局部滚动

```xml
<ant-table
  dataSource="{{dataSource}}"
  columns="{{columns}}"
  scrollHeight="300rpx"
/>
```

### 铺满展示

```xml
<ant-table
  dataSource="{{dataSource}}"
  columns="{{fullColumns}}"
  displayType="FULL"
/>
```

### 空数据插槽

```xml
<ant-table
  dataSource="{{[]}}"
  columns="{{columns}}"
>
  <image src="https://mdn.alipayobjects.com/huamei_9iifqq/afts/img/A*AWeXQYuIODwAAAAAAAAAAAAADjWYAQ/original" />
</ant-table>
```

### 超出换行展示
可以使用列配置参数里的```ellipsisRow```控制是否换行以及最终展示多少行，超出以省略号展示

```xml
<ant-table 
  dataSource="{{[{key: '0', name: '这是一行很长的数据，需要换行展示blablablabla', age: 18, sex: '男', address: '成都'}]}}" 
  columns="{{fullColumns}}"
/>
```

### Demo 代码

<code src="../../demo/pages/Table/index"></code>

## 属性

| 属性         | 说明                                                                   | 类型                | 默认值  |
| ------------ | ---------------------------------------------------------------------- | ------------------- | ------- |
| className    | 容器 className                                                         | string              | -       |
| dataSource   | 数据源                                                                 | any[]               | -       |
| columns      | 表格列的配置描述                                                       | [Column](#column)[] | -       |
| displayType  | 表格样式类型，默认样式会根据配置的宽度进行展示，可选 `FULL`、`DEFAULT` | string              | DEFAULT |
| scrollHeight | 指定可滚动区域高度                                                     | string              | -       |

### Column

| 属性           | 说明                         | 类型    | 默认值 |
| -------------- | ---------------------------- | ------- | ------ |
| title          | 列标题                       | string  | -      |
| dataIndex      | 列取值字段                   | string  | -      |
| key            | 列唯一标识                   | string  | -      |
| width          | 列宽度                       | number  | -      |
| fixed          | 是否固定列                   | boolean | -      |
| textAlignRight | 列文本是否右对齐             | boolean | -      |
| ellipsisRow    | 单元格最大展示行数，超出省略 | number  | -      |


## 插槽

| 名称     | 说明                                                                                    |
| -------- | --------------------------------------------------------------------------------------- |
| 默认插槽 | 数据源为空插槽                                                                          |
| item     | 单元格插槽（作用域插槽，对外暴露的属性 `item`、`index`、`row`、`rowIndex`。微信不支持） |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名               | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --table-item-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | 表项颜色           |
| --table-item-bg      | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | 表项背景颜色       |
| --table-shadow-color | <div style="width: 150px; height: 30px; background-color: rgba(5, 5, 5, 0.06); color: #ffffff;">rgba(5, 5, 5, 0.06)</div> | <div style="width: 150px; height: 30px; background-color: rgba(5, 5, 5, 0.06); color: #ffffff;">rgba(5, 5, 5, 0.06)</div> | 表格阴影颜色       |
| --table-empty-bg     | <div style="width: 150px; height: 30px; background-color: #fff; color: #333333;">#fff</div>                               | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | 表格空状态背景颜色 |
