---
nav:
  path: /form
group:
  title: 进阶使用
  order: 1
---

# 表单联动
表单解决方案提供了通用强大的表单联动能力，你可以通过在对应表单项配置 `relation` 字段，该字段支持传入一个回调函数，在表单值发生变化会触发对应回调函数，该回调的参数为当前的表单值，同时将返回当前表单项要变更的配置，我们会自动进行相应配置的新增或覆盖，更多关于表单的联动使用方法可以通过下面的示例深入了解。

### 控制表单项的显示和隐藏

表单项可以通过 `relation` 获取当前表单的所有值通过判断决定当前表单项是否展示。如下 schema 示例，当表单中 qual 的值等于 a 的时候，姓名这个表单项就不展示了

```js
const name = {
    title: '姓名',
    type: 'string',
    required: true,
    widget: 'input',
    props: {
        placeholder: '请填写联系人姓名',
    },
    relation: (formData) => {
      return {
        visible: formData.group1.qual !== 'a',
      };
    },
}
```

### 根据表单上下文更改自身的值

表单项可以通过 `relation` 获取当前表单的所有值，通过自己的逻辑规则而改变自身的值。如下面的例子，当身份证号完整的时候自动获取出当前的年龄并修改年龄这个表单项的值。

```js
const age = {
  title: '年龄',
  type: 'string',
  widget: 'input',
  relation: (formData) => {
    return {
      value: new RegExp(idReg).test(formData.group2.number)
        ? new Date().getFullYear() - formData.group2.number.slice(6, 10)
        : ''
    }  
  },
  props: {
    disabled: true,
    placeholder: '请选输入年龄'
  }
}
```


除了表单子项外，表单分组也有  `relation` 方法勾子，可以通过这个来设置分组相关的属性，具体方法参考下面的demo。


## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormRelation/index'></code>

