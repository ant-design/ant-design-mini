---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Tag 标签

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

用于标记和分类的小标签。

## 何时使用

- 用来标记事物的属性和维度。
- 进行分类。

## 代码示例

<code src='../../demo/pages/Tag/index'></code>

## API

| 属性      | 说明                                                                                     | 类型         | 默认值    |
| --------- | ---------------------------------------------------------------------------------------- | ------------ | --------- |
| className | 类名                                                                                     | string       | -         |
| color     | 标签颜色，内建 `primary`（蓝色）、`success`（绿色）、`warning`（黄色）、`danger`（红色） | string       | `primary` |
| icon      | 图标，支持 Icon 类型和插槽                                                               | string\|slot | -         |
| style     | 样式                                                                                     | string       | -         |
| type      | 类型，可选 `outline`、`fill`、`fill-light`                                               | string       | `fill`    |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                    | 默认值                                                                                                                            | 备注                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --tag-primary-color       | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                                 | 主要标签颜色         |
| --tag-warning-color       | <div style="width: 150px; height: 40px; background-color: #ff6430; color: #ffffff;">#ff6430</div>                                 | 警告标签颜色         |
| --tag-danger-color        | <div style="width: 150px; height: 40px; background-color: #ff3141; color: #ffffff;">#ff3141</div>                                 | 危险标签颜色         |
| --tag-success-color       | <div style="width: 150px; height: 40px; background-color: #22b35e; color: #ffffff;">#22b35e</div>                                 | 成功标签颜色         |
| --tag-primary-light-color | <div style="width: 150px; height: 40px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div>                                 | 主要标签浅色         |
| --tag-warning-light-color | <div style="width: 150px; height: 40px; background-color: #ffefdf; color: #333333;">#ffefdf</div>                                 | 警告标签浅色         |
| --tag-danger-light-color  | <div style="width: 150px; height: 40px; background-color: #ffece3; color: #333333;">#ffece3</div>                                 | 危险标签浅色         |
| --tag-success-light-color | <div style="width: 150px; height: 40px; background-color: #d4fff1; color: #333333;">#d4fff1</div>                                 | 成功标签浅色         |
| --tag-base-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                 | 基础标签颜色         |
| --tag-primary-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.3); color: #ffffff;">rgba(22, 119, 255, 0.3)</div> | 主要标签颜色（褪色） |
| --tag-warning-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(255, 100, 48, 0.7); color: #ffffff;">rgba(255, 100, 48, 0.7)</div> | 警告标签颜色（褪色） |
| --tag-danger-color-faded  | <div style="width: 150px; height: 40px; background-color: rgba(255, 49, 65, 0.7); color: #ffffff;">rgba(255, 49, 65, 0.7)</div>   | 危险标签颜色（褪色） |
| --tag-success-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(34, 179, 94, 0.7); color: #ffffff;">rgba(34, 179, 94, 0.7)</div>   | 成功标签颜色（褪色） |
