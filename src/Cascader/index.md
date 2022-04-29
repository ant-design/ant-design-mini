---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false

---

# Cascader 级联选择
在多组选项中进行级联选择


## 何时使用
选择地区、行政区划

## 注意事项

- 可通过**textKey**、**valueKey**、**childrenKey**指定属性名；
- 使用`lazy`标识是否需要动态获取数据,此时不传`options`代表所有数据都需要通过`lazyLoad`加载,首次加载通过 **root** 属性区分,当遇到非叶子节点时会调用`lazyLoad`方法,参数为当前节点和 **resolve** 方法,注意 **resolve** 方法必须调用,通过 **leaf** 识别是否是叶子节点。
## 代码示例
### 基本使用
<code src='../../demo/pages/Cascader'></code>

### 默认值&自定义配置
<code src='../../demo/pages/CascaderKeysConf'></code>

### 异步请求
<code src='../../demo/pages/CascaderLazy'></code>

## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| visible | boolean | 是 | false | 是否可见 |
| lazy | boolean | 是 | false | 是否开启异步加载 |
| title | String | 否 | - | 对话框标题 |
| maskClosable | boolean | 否 | true | 点击蒙层关闭对话框 |
| options | {value: string \| number; title: string,children:[\],leaf?:number}[] | 否 |  | 选项 |
| value | (string &verbar; number)[] | - | [] | 数据值 |
| confirmIcon | string | 否 | CheckOutLine | 选择icon类型 |
| valueKey | string | 否 | value | key配置 |
| titleKey | string | 否 | title | 文本配置 |
| childrenKey | string | 否 | children | 子配置 |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 最终选择改变，触发回调 | (node: {value: string \| number; title: string,children:[\],disabled:boolean,...},nodes:{value: string \| number; title: string,children:[\],...}[],disabled:boolean) => void|
| onClose | 组件关闭回调	 | () => void |
| onLazyLoad | 异步请求	 | (node, resolve) => resolve(node) |




## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-cascader | cascader popup  自定义样式|
| amd-cascader-content | popup  内容自定义样式 |
| amd-cascader-content-title | cascader  标题自定义样式 |
| amd-cascader-content-content | cascader popup tabs 自定义样式 |
|amd-cascader-node-disabled| cascader node 禁用自定义样式


