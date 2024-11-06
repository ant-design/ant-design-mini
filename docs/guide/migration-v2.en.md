---
order: 6
toc: false
---

# Upgrade to v2

The last version of Ant Design Mini v1 was v1.10.6 and the first version of v2 was v2.11.0.

The code composition of v2 version is as follows:

- all component code of v1 version is completely inherited, and the behavior of the component is consistent with v1.
- v2 version required to be enabled `component2` attribute, otherwise it will not run. If this feature is not turned on, the developer will receive an error message "The project is not open component2 the Ant Design Mini component library cannot be used".

For developers, the impact of upgrading to v2 can be evaluated in the following ways:

- If your project has been enabled before `component2`then upgrading from v1 to v2 is fully compatible.
- If your project was not previously enabled `component2`, then this upgrade requires you to turn on this feature and test the behavior of each custom component of the applet.

> `component2` It provides more and more stable life cycle methods for Alipay applets. For specific information, please refer:[Introduction to Custom Components](https://opendocs.alipay.com/mini/framework/custom-component-overview)

### How to open Alipay applet `component2`

The mini.project.json file in the root directory of the project can be used to determine whether the project has been opened. `component2` Characteristics.

1. If the file contains `"format": 2` field, will `compileOptions.component2` Set `true`：

```json
{
  "format": 2,
  "compileOptions": {
    "component2": true
  }
}
```

2. If there is no `format` field, add the following configuration directly:

```json
{
  "component2": true
}
```

You can also use the details panel of the applet developer tool (IDE) to complete the configuration. configure the path: check "enable component2 compilation" in "details> project configuration" of the IDE ".

![](https://mdn.alipayobjects.com/huamei_384ylk/afts/img/A*MvGAQoOLfUQAAAAAAAAAAAAADk97AQ/original)

### Reference Documentation

- [applet global configuration](https://opendocs.alipay.com/mini/03dbc3)
- [Introduction to Custom Components](https://opendocs.alipay.com/mini/framework/custom-component-overview)
