---
order: 4
toc: true
---

# Custom Theme & Dark Mode

antd-mini support using CSS variables to customize themes. Two sets of themes are built into the antd-mini: the basic theme and the dark theme. You can use different themes or modify theme colors by customizing CSS variables. Dark mode is supported by default. You can automatically switch between dark and light modes by prefers the value of-color-scheme as the operating system changes.

## Mode of use

> Setting the theme globally,[CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) To organize styles, by overwriting these CSS variables, you can customize the theme, dynamically switch the theme and other effects;

### Override via CSS

#### Customize the theme of individual components

```xml
  <ant-button type="primary" icon="SmileOutline" className="custom-btn">Custom Theme</ant-button>
```

```css
custom-btn {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
```

#### Customize themes for multiple components

Similar to the customization of a single component, you only need to wrap the component to be customized with a configProvider or an arbitrary container node (such as ant-container) and set CSS variables on the container node.

```xml
<ant-container class="container" title="标题">
  <ant-button type="primary" icon="SmileOutline" className="custom-size">Custom Theme</ant-button>
</ant-container>
```

```css
container {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
```

#### Customize the global theme

In app.less, write CSS variables to take effect globally.

```css
page {
  --actionsheet-danger-color: #ff3141;
  --actionsheet-title-color: #999999;
  --actionsheet-item-color: #333333;
  --actionsheet-item-active-bg: #eeeeee;
  --activesheet-item-cancel-bg: #f5f5f5;
}
```

### Covered by ConfigProvider

In addition to directly customizing themes through CSS variables (currently supporting light and dark themes by default), you can also customize themes or specify built-in themes through ConfigProvider themeVars.

#### Set Theme

```xml
<ant-config-provider theme="dark">
  <view>I am a dark theme</view>
</ant-config-provider>

```

#### Set themeVars custom theme

```xml
  <ant-config-provider themeVars={{themeVars}}>
    <ant-button type="primary" onTap="handleTap">
      Main button
    </ant-button>
  </ant-config-provider>

```

```js
Page({
  data: {
    themeVars: {
      'button-primary-color': 'yellow',
      'button-primary-background-color': 'green',
    },
  },
});
```

## CSS Variables

> The CSS variable names used for customization can be viewed in the documentation for each component, or in[Profile](https://github.com/ant-design/ant-design-mini/blob/master/src/style/variables.less)Check the full version of the variable names, the following is an example of button to list some variable names;

| Variable name                                   | Default Value                                                                                                                | Dark Mode Default                                                                                                        | Remarks                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --button-disabled-opacity                | 0.4                                                                                                                   | 0.4                                                                                                                   | Button Disable Transparency       |
| --button-color                           | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | Button Color             |
| --button-background-color                | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #000000;color: #fff;">#000000</div>                                     | Button background color         |
| --button-border-color                    | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #0A0A0A;color: #fff;">#0A0A0A</div>                                     | Button border color         |
| --button-primary-border-color            | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | Main button border color     |
| --button-primary-background-color        | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | Main button background color     |
| --button-primary-color                   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333;">#FFFFFF</div>                     | Main button color         |
| --button-primary-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #E7F1FF; color: #333333;">#E7F1FF</div>                     | <div style="width: 150px; height: 40px; background-color: #0D2543;">#0D2543</div>                                     | Primary Secondary Button Border Color |
| --button-primary-aide-color              | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | Primary Auxiliary Button Color     |
| --button-default-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #F5F5F5; color: #333333;">#F5F5F5</div>                     | <div style="width: 150px; height: 40px; background-color: #121212; color: #fff;">#121212</div>                                     | Default Auxiliary Button Border Color |
| --button-default-aide-background-color   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #000000; color: #fff;">#000000</div>                                     | Default Auxiliary Button Background Color |
| --button-default-aide-color              | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                     | <div style="width: 150px; height: 40px; background-color: #C5CAD1;">#C5CAD1</div>                                     | Default Auxiliary Button Color     |
| --button-primary-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Primary Danger Button Background Color |
| --button-primary-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Primary Hazard Button Border Color |
| --button-primary-danger-color            | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Primary Hazard Button Color     |
| --button-default-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Default Hazard Button Background Color |
| --button-default-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Default Hazard Button Border Color |
| --button-default-danger-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Default Hazard Button Color     |
| --button-text-danger-color               | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Hazard button text color     |
| --button-danger-default-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | Danger Button Default Color     |
| --button-active-bg                       | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | Button to activate background color     |
