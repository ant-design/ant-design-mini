---
order: 2
nav:
  path: /form
group:
  title: 通用
  order: 0
---

# 组件 props

表单组件接收的方法和属性，通过组件 `props` 传入，有如下字段：

| 属性、方法            | 默认值                                                         |  功能描述                         |
| :--------           | :--------                                                     | :---                              |
| className           | --                                                            |  表单组件最外层的样式类名称                |
| schema              | `{} `                                                           |  驱动表单渲染的对象，包含表单全局配置、表单分组、表单子项的所有信息                 |
| initialValues       |  `{}`                                                           |  点击键盘完成时触发此回调              |
| initialValidate     |  `false`                                                        |  默认值填入的时候是否触发所有的表单校验              |
| onValueChange       | (changedValues: ObjectType, formData: ObjectType) => void;    |  表单值更改的时候触发              |
| onDisabledTap       |  (formItem) => void;                                          |  禁用表单项点击的时候触发             |
| onTapOperation      |  (footerItem) => void;                                        |  操作区按钮子项被点击的时候触发              |

传入方式如下：

```axml
<form-render-mini 
  className="form-class"
  schema="{{ schema }}"
  initialValues="{{ {} }}"
  initialValidate="{{ false }}"
  onValueChange="onValueChange"
  onDisabledTap="onDisabledTap"
  onTapOperation="onTapOperation"
/>
```

```js
Page({
  onValueChange(changeData, formData) {
    my.alert({ content: `修改的表单项的内容是：${JSON.stringify(changeData)}，当前表单的内容是：${JSON.stringify(formData)}` });
  },
  onDisabledTap(formItem) {
    my.alert({ content: `点击的表单项是「${formItem.title}」` });
  },
  onTapOperation(footerItem) {
    my.alert({ content: `点击了按钮「${footerItem.text}」` });
  }
})
```


