---
order: 1
toc: true
---

# Used in Alipay applet

Here is how to install and use the Ant Design Mini component library in the native Alipay applet.

### 1. Install dependencies

```shell
$ npm i antd-mini --save
```

### 2. Open the component2

From v2.11.0 onwards, small programs are required to open `component2`. When enabled, the applet custom component uses the new lifecycle run mode.

How to enable it: In Details> Project Configuration in the IDE, select Enable component2 Compilation ".

Details can refer[Upgrade to v2](https://2x-mini.ant.design/guide/migration-v2)。

### 3. Introduce components into the page JSON file.

```json
{
  "usingComponents": {
    "ant-button": "antd-mini/es/Button/index"
  }
}
```

### 4. Use in the AXML file.

```xml
<ant-button>I am a button.</ant-button>
```
