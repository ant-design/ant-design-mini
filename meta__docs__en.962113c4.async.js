"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9706],{76835:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(31946),d={}},32764:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(74575),d={}},55215:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(98349),d={}},2568:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(3651),d={}},17821:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(18234),d={}},33588:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(86717),d={}},23289:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(61722),d={}},77690:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(82686),d={}},24458:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(9570),d={}},91654:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(145),d={}},99793:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(66693),d={"docs-guide-using-wechat-demo-wechat-component":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,91047))})),asset:null,context:void 0,renderOpts:void 0}}},86304:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(50323),d={}},55476:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(31946);const n=[]},97023:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(74575);const n=[]},6305:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(98349);const n=[{value:"Code Repository: ",paraId:0,tocIndex:1},{value:"https://github.com/ant-design/ant-design-mini/",paraId:0,tocIndex:1},{value:`$ git clone git@github.com:ant-design/ant-design-mini.git
`,paraId:1,tocIndex:1},{value:`$ npm i
`,paraId:2,tocIndex:2},{value:"Run ",paraId:3,tocIndex:3},{value:"dev",paraId:3,tocIndex:3},{value:" command to compile the source code ",paraId:3,tocIndex:3},{value:"compiled",paraId:3,tocIndex:3},{value:" directory.",paraId:3,tocIndex:3},{value:`$ npm run dev
`,paraId:4,tocIndex:3},{value:"Directly use WeChat developer tools to open the root directory of the project.",paraId:5,tocIndex:5},{value:"After opening the project, enter the WeChat directory and install dependencies:",paraId:6,tocIndex:5},{value:`$ cd compiled/wechat
$ npm i
`,paraId:7,tocIndex:5},{value:'After installing the dependency, click the menu bar in WeChat Developer Tool: "Tools --> Build npm". After the build is complete, the project is ready to run normally.',paraId:8,tocIndex:5},{value:"If it is found that it cannot run normally, it may be that WeChat development tools build npm and package the dependency into a file, resulting in an error due to the failure to find the reference dependency in WeChat.",paraId:9,tocIndex:5},{value:"Such:",paraId:10,tocIndex:5},{value:"import duration from 'dayjs/plugin/duration'",paraId:10,tocIndex:5},{value:"After building npm,",paraId:10,tocIndex:5},{value:"dayjs/plugin",paraId:10,tocIndex:5},{value:"directory in ",paraId:10,tocIndex:5},{value:"miniprogram_npm",paraId:10,tocIndex:5},{value:" lost in. need to be ",paraId:10,tocIndex:5},{value:"dayjs/plugin",paraId:10,tocIndex:5},{value:" Manually copy directories ",paraId:10,tocIndex:5},{value:"miniprogram_npm",paraId:10,tocIndex:5},{value:" In, can be solved.",paraId:10,tocIndex:5},{value:"Directly use the Alipay applet developer tool to open the root directory of the project to run.",paraId:11,tocIndex:6},{value:`$ npm run dev:doc
`,paraId:12,tocIndex:7},{value:"When submitting a commit, you need to follow the following principles:",paraId:13,tocIndex:8},{value:"Minimize code changes: Ensure that the logic of each commit is independent and atomized. Even if the change is only 1 line of code, it should be committed independently;",paraId:14,tocIndex:8},{value:"Follow ",paraId:14,tocIndex:8},{value:"Conventional Commits principle",paraId:14,tocIndex:8},{value:`to avoid meaningless Commit Message. When the code is submitted, there will be a Commit Message format check, which you usually use extensively:
`,paraId:14,tocIndex:8},{value:"feat(scope): xxx",paraId:15,tocIndex:8},{value:" to describe a feature commit;",paraId:15,tocIndex:8},{value:"fix(scope): xxx",paraId:15,tocIndex:8},{value:" to describe the commit of a bug fix;",paraId:15,tocIndex:8},{value:"chore(scope): xxx",paraId:15,tocIndex:8},{value:" to describe small tweaks unrelated to feature and bug fixes;",paraId:15,tocIndex:8},{value:"Mention issue: If the change is related to issue, please indicate the issue number in the Commit Message, for example:",paraId:14,tocIndex:8},{value:"fix(scope): [#1] xxxxxx",paraId:14,tocIndex:8},{value:"\u3002",paraId:14,tocIndex:8},{value:"Write a code (supports conditional compilation) and generate Alipay and WeChat applet view layer code at the same time:",paraId:16,tocIndex:10},{value:"Source code:",paraId:17,tocIndex:10},{value:`<view>
  <!-- #comments if ALIPAY -->
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <!-- #comments endif -->
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:18,tocIndex:10},{value:"Alipay applet:",paraId:19,tocIndex:10},{value:`<view>
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:20,tocIndex:10},{value:"micro letter small program:",paraId:21,tocIndex:10},{value:`<view>
  <text wx:if="{{a}}">a</text>
  <text wx:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:22,tocIndex:10}]},48600:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(3651);const n=[{value:"The development of antd-mini is inseparable from every user in the community. To help you participate in the co-construction, here is some necessary information.",paraId:0,tocIndex:0},{value:"When you encounter problems or requirements in the use of the component library, you can go to the issue area to consult or ask questions. We have prepared a variety of issue templates, please choose the applicable one according to the actual situation. At the same time, if you can help solve other people's doubts, we will also be very grateful.",paraId:1,tocIndex:2},{value:"If the current component library does not meet your development needs, please submit an issue to explain the functionality you need. Note, however, that not all submitted requirements will necessarily be fulfilled. The antd-mini is located in the base component library and does not contain business class components. We discuss each submitted requirement, and once it is confirmed that it is required for the underlying functionality, we initiate the development process.",paraId:2,tocIndex:3},{value:"When submitting bug feedback, please provide relevant information as complete as possible so that we can quickly reproduce and solve the problem.",paraId:3,tocIndex:4},{value:"Here are some considerations when submitting:",paraId:4,tocIndex:4},{value:"Provide device information, client version, component library version and specific components;",paraId:5,tocIndex:4},{value:"Explain the behavior of the components you expect and the behavior that actually occurs;",paraId:5,tocIndex:4},{value:"Describe in detail the steps to reproduce the problem;",paraId:5,tocIndex:4},{value:"If feasible, provide examples or demos that can reproduce the problem to speed up problem positioning.",paraId:5,tocIndex:4},{value:"We cordially invite you to contribute code to antd-mini. See",paraId:6,tocIndex:5},{value:"Contribution Guide",paraId:7,tocIndex:5},{value:"Learn more. Before contributing code, be sure to submit an RFC issue and describe your changes in detail so that we can fully discuss them in the RFC to save both parties time.",paraId:6,tocIndex:5}]},1869:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(18234);const n=[{value:"antd-mini support using CSS variables to customize themes. Two sets of themes are built into the antd-mini: the basic theme and the dark theme. You can use different themes or modify theme colors by customizing CSS variables. Dark mode is supported by default. You can automatically switch between dark and light modes by prefers the value of-color-scheme as the operating system changes.",paraId:0,tocIndex:0},{value:"Setting the theme globally,",paraId:1,tocIndex:1},{value:"CSS Variables",paraId:1,tocIndex:1},{value:" To organize styles, by overwriting these CSS variables, you can customize the theme, dynamically switch the theme and other effects;",paraId:1,tocIndex:1},{value:`  <ant-button type="primary" icon="SmileOutline" className="custom-btn">Custom Theme</ant-button>
`,paraId:2,tocIndex:3},{value:`custom-btn {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
`,paraId:3,tocIndex:3},{value:"Similar to the customization of a single component, you only need to wrap the component to be customized with a configProvider or an arbitrary container node (such as ant-container) and set CSS variables on the container node.",paraId:4,tocIndex:4},{value:`<ant-container class="container" title="\u6807\u9898">
  <ant-button type="primary" icon="SmileOutline" className="custom-size">Custom Theme</ant-button>
</ant-container>
`,paraId:5,tocIndex:4},{value:`container {
  --button-color: #1677ff;
  --button-background-color: #ffffff;
  --button-border-color: #1677ff;
  --button-primary-border-color: #1677ff;
  --button-primary-background-color: #1677ff;
  --button-primary-color: #ffffff;
  --button-primary-aide-border-color: #e7f1ff;
}
`,paraId:6,tocIndex:4},{value:"In app.less, write CSS variables to take effect globally.",paraId:7,tocIndex:5},{value:`page {
  --actionsheet-danger-color: #ff3141;
  --actionsheet-title-color: #999999;
  --actionsheet-item-color: #333333;
  --actionsheet-item-active-bg: #eeeeee;
  --activesheet-item-cancel-bg: #f5f5f5;
}
`,paraId:8,tocIndex:5},{value:"In addition to directly customizing themes through CSS variables (currently supporting light and dark themes by default), you can also customize themes or specify built-in themes through ConfigProvider themeVars.",paraId:9,tocIndex:6},{value:`<ant-config-provider theme="dark">
  <view>I am a dark theme</view>
</ant-config-provider>

`,paraId:10,tocIndex:7},{value:`  <ant-config-provider themeVars={{themeVars}}>
    <ant-button type="primary" onTap="handleTap">
      Main button
    </ant-button>
  </ant-config-provider>

`,paraId:11,tocIndex:8},{value:`Page({
  data: {
    themeVars: {
      'button-primary-color': 'yellow',
      'button-primary-background-color': 'green',
    },
  },
});
`,paraId:12,tocIndex:8},{value:"The CSS variable names used for customization can be viewed in the documentation for each component, or in",paraId:13,tocIndex:9},{value:"Profile",paraId:13,tocIndex:9},{value:"Check the full version of the variable names, the following is an example of button to list some variable names;",paraId:13,tocIndex:9},{value:"Variable name",paraId:14,tocIndex:9},{value:"Default Value",paraId:14,tocIndex:9},{value:"Dark Mode Default",paraId:14,tocIndex:9},{value:"Remarks",paraId:14,tocIndex:9},{value:"--button-disabled-opacity",paraId:14,tocIndex:9},{value:"0.4",paraId:14,tocIndex:9},{value:"0.4",paraId:14,tocIndex:9},{value:"Button Disable Transparency",paraId:14,tocIndex:9},{value:"--button-color",paraId:14,tocIndex:9},{value:"#1677FF",paraId:14,tocIndex:9},{value:"#3086FF",paraId:14,tocIndex:9},{value:"Button Color",paraId:14,tocIndex:9},{value:"--button-background-color",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"#000000",paraId:14,tocIndex:9},{value:"Button background color",paraId:14,tocIndex:9},{value:"--button-border-color",paraId:14,tocIndex:9},{value:"#1677FF",paraId:14,tocIndex:9},{value:"#0A0A0A",paraId:14,tocIndex:9},{value:"Button border color",paraId:14,tocIndex:9},{value:"--button-primary-border-color",paraId:14,tocIndex:9},{value:"#1677FF",paraId:14,tocIndex:9},{value:"#3086FF",paraId:14,tocIndex:9},{value:"Main button border color",paraId:14,tocIndex:9},{value:"--button-primary-background-color",paraId:14,tocIndex:9},{value:"#1677FF",paraId:14,tocIndex:9},{value:"#3086FF",paraId:14,tocIndex:9},{value:"Main button background color",paraId:14,tocIndex:9},{value:"--button-primary-color",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"Main button color",paraId:14,tocIndex:9},{value:"--button-primary-aide-border-color",paraId:14,tocIndex:9},{value:"#E7F1FF",paraId:14,tocIndex:9},{value:"#0D2543",paraId:14,tocIndex:9},{value:"Primary Secondary Button Border Color",paraId:14,tocIndex:9},{value:"--button-primary-aide-color",paraId:14,tocIndex:9},{value:"#1677FF",paraId:14,tocIndex:9},{value:"#3086FF",paraId:14,tocIndex:9},{value:"Primary Auxiliary Button Color",paraId:14,tocIndex:9},{value:"--button-default-aide-border-color",paraId:14,tocIndex:9},{value:"#F5F5F5",paraId:14,tocIndex:9},{value:"#121212",paraId:14,tocIndex:9},{value:"Default Auxiliary Button Border Color",paraId:14,tocIndex:9},{value:"--button-default-aide-background-color",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"#000000",paraId:14,tocIndex:9},{value:"Default Auxiliary Button Background Color",paraId:14,tocIndex:9},{value:"--button-default-aide-color",paraId:14,tocIndex:9},{value:"#333333",paraId:14,tocIndex:9},{value:"#C5CAD1",paraId:14,tocIndex:9},{value:"Default Auxiliary Button Color",paraId:14,tocIndex:9},{value:"--button-primary-danger-background-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Primary Danger Button Background Color",paraId:14,tocIndex:9},{value:"--button-primary-danger-border-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Primary Hazard Button Border Color",paraId:14,tocIndex:9},{value:"--button-primary-danger-color",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"Primary Hazard Button Color",paraId:14,tocIndex:9},{value:"--button-default-danger-background-color",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"#FFFFFF",paraId:14,tocIndex:9},{value:"Default Hazard Button Background Color",paraId:14,tocIndex:9},{value:"--button-default-danger-border-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Default Hazard Button Border Color",paraId:14,tocIndex:9},{value:"--button-default-danger-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Default Hazard Button Color",paraId:14,tocIndex:9},{value:"--button-text-danger-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Hazard button text color",paraId:14,tocIndex:9},{value:"--button-danger-default-color",paraId:14,tocIndex:9},{value:"#FF3141",paraId:14,tocIndex:9},{value:"#FF4A58",paraId:14,tocIndex:9},{value:"Danger Button Default Color",paraId:14,tocIndex:9},{value:"--button-active-bg",paraId:14,tocIndex:9},{value:"rgba(255, 255, 255, 0.08)",paraId:14,tocIndex:9},{value:"rgba(255, 255, 255, 0.08)",paraId:14,tocIndex:9},{value:"Button to activate background color",paraId:14,tocIndex:9}]},12993:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(86717);const n=[{value:"Because there is no migration cost to upgrade from 2.x, 1.x to 3.x, you can do it directly from 2.x, 1.x. upgrade to 3.x, under reference",paraId:0,tocIndex:1},{value:"Upgrade Guide",paraId:0,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"For 0.x, you can use the npm alias to install.",paraId:1,tocIndex:1},{value:"In ",paraId:2,tocIndex:1},{value:"package.json",paraId:2,tocIndex:1},{value:" This is defined in the file:",paraId:2,tocIndex:1},{value:`{
  "dependencies": {
    "antd-mini": "^3.0.0",
    "antd-mini-v0": "npm:antd-mini@^0.0.26"
  }
}
`,paraId:3,tocIndex:1},{value:`$ npm install
`,paraId:4,tocIndex:1},{value:"Use:",paraId:5,tocIndex:1},{value:`{
  "usingComponents": {
    "button": "antd-mini/es/Button/index",
    "button-v0": "antd-mini-v0/es/Button/index"
  }
}
`,paraId:6,tocIndex:1},{value:`<button>\u8FD9\u662F3.x antd-mini</button>
<antd-mini-v0>\u8FD9\u662F0.x antd-mini</antd-mini-v0>
`,paraId:7,tocIndex:1},{value:"The new Alipay applet developer tool is configured for the created page by default ",paraId:8,tocIndex:2},{value:"styleIsolation: 'apply-shared'",paraId:8,tocIndex:2},{value:"This will result in the page style not being able to affect external components.",paraId:8,tocIndex:2},{value:"You can solve this problem by modifying the style isolation configuration of the corresponding page.json:",paraId:9,tocIndex:2},{value:`{
  "styleIsolation": "shared"
}
`,paraId:10,tocIndex:2},{value:"styleIsolation",paraId:11,tocIndex:2},{value:" Configuration items are available in the following two modes:",paraId:11,tocIndex:2},{value:"apply-shared",paraId:12,tocIndex:2},{value:": This means that the app.acss style and other settings have ",paraId:12,tocIndex:2},{value:"shared",paraId:12,tocIndex:2},{value:" page or custom component styles affect the current page, but styles in the current page acss are not applied externally.",paraId:12,tocIndex:2},{value:"shared",paraId:12,tocIndex:2},{value:"(default): indicates that the app.acss style and other settings are ",paraId:12,tocIndex:2},{value:"shared",paraId:12,tocIndex:2},{value:" the page or custom component styles will affect the current page, and the styles in the acss of the current page will also be applied externally.",paraId:12,tocIndex:2},{value:"Official documentation reference link:",paraId:13,tocIndex:2},{value:"Page Style Isolation",paraId:13,tocIndex:2}]},59985:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(61722);const n=[{value:"antd-mini v3 supports internationalization of global settings, and multi-language support is realized by setting Locale. The component uses Chinese by default;",paraId:0,tocIndex:0},{value:"Introducing components in the page JSON file",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:" Components to globally configure multilingual files;",paraId:1,tocIndex:1},{value:`{
  "usingComponents": {
    "ant-config-provider": "antd-mini/es/ConfigProvider/index"
  }
}
`,paraId:2,tocIndex:1},{value:"introduce the corresponding language source file in js",paraId:3,tocIndex:1},{value:`import enUS from 'antd-mini/es/_locale/en-US';
Page({
  data: {
    locale: esES,
  },
});
`,paraId:4,tocIndex:1},{value:"Used in AXML, it is important to note that the entire project is only passed for the first time.",paraId:5,tocIndex:1},{value:"ConfigProvider",paraId:5,tocIndex:1},{value:`\u8BBE\u7F6E Locale \u4F1A\u5168\u5C40\u751F\u6548\uFF0C
\u540C\u4E00\u4E2A\u9879\u76EE\u7684\u4E0D\u540C\u9875\u9762\u8BBE\u7F6E\u4E86\u4E0D\u540C\u7684Language\uFF0C\u53EA\u4F1A\u751F\u6548\u4E00\u6B21\uFF1B`,paraId:5,tocIndex:1},{value:`<ant-config-provider locale={{locale}}>
  <ant-button>
      I am a button.
  </ant-button>
</ant-config-provider>
`,paraId:6,tocIndex:1},{value:"Language",paraId:7,tocIndex:2},{value:"File Name",paraId:7,tocIndex:2},{value:"Supported version",paraId:7,tocIndex:2},{value:"Simplified Chinese",paraId:7,tocIndex:2},{value:"zh-CN",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Traditional Chinese (Taiwan)",paraId:7,tocIndex:2},{value:"zh-TW",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Traditional Chinese (Hong Kong)",paraId:7,tocIndex:2},{value:"zh-HK",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Arabic (Saudi Arabia)",paraId:7,tocIndex:2},{value:"ar-SA",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"English (American)",paraId:7,tocIndex:2},{value:"en-US",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Korean (South Korea)",paraId:7,tocIndex:2},{value:"ko-KR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"German (Germany)",paraId:7,tocIndex:2},{value:"de-DE",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Russian (Russia)",paraId:7,tocIndex:2},{value:"ru-RU",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"French (France)",paraId:7,tocIndex:2},{value:"fr-FR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Spanish (Spain)",paraId:7,tocIndex:2},{value:"es-ES",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Italian (Italy)",paraId:7,tocIndex:2},{value:"it-IT",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Malay (Malaysia)",paraId:7,tocIndex:2},{value:"ms-MY",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Indonesian",paraId:7,tocIndex:2},{value:"in-ID",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Thai (Thailand)",paraId:7,tocIndex:2},{value:"th-TH",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Portuguese (Brazil)",paraId:7,tocIndex:2},{value:"pt-BR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Japanese (Japan)",paraId:7,tocIndex:2},{value:"ja-JP",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Turkish (Turkey)",paraId:7,tocIndex:2},{value:"tr-TR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Vietnamese",paraId:7,tocIndex:2},{value:"vi-VN",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"View here",paraId:8,tocIndex:2},{value:"Language Pack Source Files",paraId:8,tocIndex:2},{value:"If you can't find the language pack you need, you are welcome to create a new language pack based on the English language pack and send us a Pull Request.",paraId:9,tocIndex:4}]},76694:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(82686);const n=[{value:"The last version of Ant Design Mini v2 was ",paraId:0,tocIndex:0},{value:"v2.36.8",paraId:0,tocIndex:0},{value:"The first version of v3 was ",paraId:0,tocIndex:0},{value:"v3.0.0",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"What did we do for the v3 version?",paraId:1,tocIndex:0},{value:"Component Visual Upgrade",paraId:2,tocIndex:0},{value:"Support dark mode",paraId:2,tocIndex:0},{value:"Support theme customization",paraId:2,tocIndex:0},{value:"Internationalized multi-language support",paraId:2,tocIndex:0},{value:"Among them, dark mode, theme customization and internationalization of multilingual are brand-new functions, which can be directly used when upgraded to v3.",paraId:3,tocIndex:0},{value:"For visual upgrade of components, we modified the styles of some components in v2 version to meet the latest visual specifications. During the upgrade process, we made maximum forward compatibility without destroying the component structure, className prefix and Props parameters of v2 version. Theoretically, v2 can be directly upgraded to v3 without Breaking Change. Although we have made as much compatibility guarantee as possible in the development of the new version, we still",paraId:4,tocIndex:0},{value:"It is strongly recommended that the access party conduct a complete regression test during the upgrade from v2 to v3 to prevent inconsistent business performance due to some unexpected Edge Case.",paraId:4,tocIndex:0},{value:"Component Name",paraId:5,tocIndex:1},{value:"Upgrade Description",paraId:5,tocIndex:1},{value:"Button",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"aide",paraId:5,tocIndex:1},{value:" Properties;",paraId:5,tocIndex:1},{value:"Calendar",paraId:5,tocIndex:1},{value:"\u{1F6E0}Remove ",paraId:5,tocIndex:1},{value:"localeText",paraId:5,tocIndex:1},{value:" attributes; original ",paraId:5,tocIndex:1},{value:"title",paraId:5,tocIndex:1},{value:" property is defined ",paraId:5,tocIndex:1},{value:"format",paraId:5,tocIndex:1},{value:" attribute substitution;",paraId:5,tocIndex:1},{value:"Empty",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"buttonInfo",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"imageMode",paraId:5,tocIndex:1},{value:" Properties;",paraId:5,tocIndex:1},{value:"onClickButton",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Popover",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"showCloseIcon",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"imageUrl",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"actionText",paraId:5,tocIndex:1},{value:" Properties;",paraId:5,tocIndex:1},{value:"onTapAction",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Popup",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"backgroundImage",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"showClose",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"showBack",paraId:5,tocIndex:1},{value:" Properties;",paraId:5,tocIndex:1},{value:"onClickBackIcon",paraId:5,tocIndex:1},{value:" \u3001",paraId:5,tocIndex:1},{value:"onClickCloseIcon",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Toast",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"textType",paraId:5,tocIndex:1},{value:" attributes; original ",paraId:5,tocIndex:1},{value:"type",paraId:5,tocIndex:1},{value:" Property Added ",paraId:5,tocIndex:1},{value:"alipay",paraId:5,tocIndex:1},{value:" type;",paraId:5,tocIndex:1},{value:"Card",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Dialog",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"SafeArea",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"AutoResize",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"ConfigProvider",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Countdown",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Table",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Feedback",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"PopoverList",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"SelectContact",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Sticky",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Voucher",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"NumberInput",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Postscript",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Migration Guide:",paraId:6,tocIndex:2},{value:"Upgrade from v1 to v2",paraId:7,tocIndex:2},{value:"Upgrade from v0 to v1",paraId:7,tocIndex:2},{value:"Full Document Address:",paraId:8,tocIndex:2},{value:"Version v2",paraId:9,tocIndex:2},{value:"Version v1",paraId:9,tocIndex:2},{value:"v0 version",paraId:9,tocIndex:2}]},68706:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(9570);const n=[{value:"Here is how to install and use the Ant Design Mini component library in the native Alipay applet.",paraId:0,tocIndex:0},{value:`$ npm i antd-mini --save
`,paraId:1,tocIndex:1},{value:"From v2.11.0 onwards, small programs are required to open ",paraId:2,tocIndex:2},{value:"component2",paraId:2,tocIndex:2},{value:". When enabled, the applet custom component uses the new lifecycle run mode.",paraId:2,tocIndex:2},{value:'How to enable it: In Details> Project Configuration in the IDE, select Enable component2 Compilation ".',paraId:3,tocIndex:2},{value:"Details can refer",paraId:4,tocIndex:2},{value:"Upgrade to v2",paraId:5,tocIndex:2},{value:"\u3002",paraId:4,tocIndex:2},{value:`{
  "usingComponents": {
    "ant-button": "antd-mini/es/Button/index"
  }
}
`,paraId:6,tocIndex:3},{value:`<ant-button>I am a button.</ant-button>
`,paraId:7,tocIndex:4}]},82189:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(145);const n=[{value:"Here is a button component (Button) as an example to explain how to use antd-mini in uni-app projects.",paraId:0,tocIndex:0},{value:"Create a new directory under the project path ",paraId:1,tocIndex:2},{value:"mycomponents",paraId:1,tocIndex:2},{value:"(must be this name and cannot be modified), and install antd-mini dependencies in this directory.",paraId:1,tocIndex:2},{value:"Reference command:",paraId:2,tocIndex:2},{value:`mkdir mycomponents
cd mycomponents

# \u5B89\u88C5\u4F9D\u8D56
npm init -y
npm i antd-mini --save
`,paraId:3,tocIndex:2},{value:"After the operation is completed, the project structure should be as follows:",paraId:4,tocIndex:2},{value:` .
  \u251C\u2500\u2500 App.vue
  \u251C\u2500\u2500 index.html
  \u251C\u2500\u2500 main.js
  \u251C\u2500\u2500 manifest.json
+ \u251C\u2500\u2500 mycomponents
+ \u2502   \u251C\u2500\u2500 node_modules
+ \u2502   \u2502   \u251C\u2500\u2500 antd-mini
+ \u2502   \u2502   \u2502   \u251C\u2500\u2500 es
+ \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 Button
+ \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 Calendar
+ \u2502   \u2502   \u2502   \u251C\u2500\u2500 package.json
  \u251C\u2500\u2500 pages
  \u251C\u2500\u2500 pages.json
  \u251C\u2500\u2500 static
  \u2514\u2500\u2500 unpackage
`,paraId:5,tocIndex:2},{value:"After the dependency is installed, you can modify pages.json in ",paraId:6,tocIndex:2},{value:"page.style",paraId:6,tocIndex:2},{value:" Add under Configuration ",paraId:6,tocIndex:2},{value:"usingComponents",paraId:6,tocIndex:2},{value:`\u3002
\u914D\u7F6E\u65F6\u9700\u8981\u6CE8\u610F\u8DEF\u5F84\u5927\u5C0F\u5199\u548C\u5B9E\u9645\u7EC4\u4EF6\u4E00\u81F4\uFF0C\u5426\u5219\u53EF\u80FD\u5F15\u53D1\u62A5\u9519\u3002`,paraId:6,tocIndex:2},{value:`{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
+       // #ifdef MP-ALIPAY
+       "usingComponents": {
+         "ant-button": "/mycomponents/node_modules/antd-mini/es/Button/index"
+       }
+       // #endif
        "navigationBarTitleText": "uni-app"
      }
    }
  ],
  ...
}
`,paraId:7,tocIndex:2},{value:"Create a new directory under the project path ",paraId:8,tocIndex:3},{value:"wxcomponents",paraId:8,tocIndex:3},{value:"(must be this name and cannot be modified), and install antd-mini dependencies in this directory.",paraId:8,tocIndex:3},{value:"Reference command:",paraId:9,tocIndex:3},{value:`mkdir wxcomponents
cd wxcomponents

# \u5B89\u88C5\u4F9D\u8D56
npm init -y
npm i antd-mini --save
`,paraId:10,tocIndex:3},{value:"After the operation is completed, the project structure should be as follows:",paraId:11,tocIndex:3},{value:` .
  \u251C\u2500\u2500 App.vue
  \u251C\u2500\u2500 index.html
  \u251C\u2500\u2500 main.js
  \u251C\u2500\u2500 manifest.json
  \u251C\u2500\u2500 pages
  \u251C\u2500\u2500 pages.json
  \u251C\u2500\u2500 static
  \u2514\u2500\u2500 unpackage
+ \u251C\u2500\u2500 wxcomponents
+ \u2502   \u251C\u2500\u2500 node_modules
+ \u2502   \u2502   \u251C\u2500\u2500 antd-mini
+ \u2502   \u2502   \u2502   \u251C\u2500\u2500 es
+ \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 Button
+ \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 Calendar
+ \u2502   \u2502   \u2502   \u251C\u2500\u2500 package.json
`,paraId:12,tocIndex:3},{value:'After the dependency installation is completed, click "run"> "run to applet simulator"> "wechat applet developer tool" in the uni-app to compile the project into wechat applet.',paraId:13,tocIndex:3},{value:'Use the WeChat applet developer tool to open the uni-app compiled WeChat applet. After that, in the WeChat applet developer tool, click "Tools"> "Build npm".',paraId:14,tocIndex:3},{value:"At this point the project structure should be as follows:",paraId:15,tocIndex:3},{value:`.
  \u251C\u2500\u2500 mp-weixin
+ \u2502   \u251C\u2500\u2500 wxcomponents
+ \u2502   \u2502   \u251C\u2500\u2500 node_modules
+ \u2502   \u2502   \u2502   \u251C\u2500\u2500 antd-mini
+ \u2502   \u2502   \u2502   miniprogram_npm
+ \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 antd-mini
+ \u2502   \u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 Button
`,paraId:16,tocIndex:3},{value:"Modify pages.json, in ",paraId:17,tocIndex:3},{value:"page.style",paraId:17,tocIndex:3},{value:" Add under Configuration ",paraId:17,tocIndex:3},{value:"usingComponents",paraId:17,tocIndex:3},{value:". When referencing components under the wxcomponents/miniprogram_npm, the configuration should also be aware that the case of the path is consistent with that of the actual component.",paraId:17,tocIndex:3},{value:`{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
+       // #ifdef MP-WEIXIN
+       "usingComponents": {
+         "ant-button": "/wxcomponents/miniprogram_npm/antd-mini/Button/index"
+       }
+       // #endif
        "navigationBarTitleText": "uni-app"
      }
    }
  ],
  ...
}
`,paraId:18,tocIndex:3},{value:"Can be used directly in the page.",paraId:19,tocIndex:4},{value:`+ <ant-button type="default" @tap="handleTap">\u6B21\u8981\u6309\u94AE</ant-button>
`,paraId:20,tocIndex:4},{value:`<script>
export default {
  methods: {
+   handleTap: function () {
+     console.log('this is handle tap');
+   }
  }
}
<\/script>
`,paraId:21,tocIndex:4},{value:"uni-app official website: applet custom component support",paraId:22,tocIndex:5},{value:"Example of using uniapp antd-mini",paraId:22,tocIndex:5}]},20497:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(66693);const n=[{value:"The following takes Button (button component) as an example to explain how to use antd-mini in WeChat applets.",paraId:0,tocIndex:0},{value:`# \u5B89\u88C5\u4F9D\u8D56
npm i antd-mini --save
`,paraId:1,tocIndex:1},{value:"The above commands will help you install the antd-mini dependencies in your project.",paraId:2,tocIndex:1},{value:'After the dependency installation is completed, please select "Tools"-> "Build npm" in the menu bar of WeChat Developer Tools ".',paraId:3,tocIndex:2},{value:"Please configure ",paraId:4,tocIndex:3},{value:"usingComponents",paraId:4,tocIndex:3},{value:" field, refer to the antd-mini component correctly, as in the following example:",paraId:4,tocIndex:3},{value:`{
  "usingComponents": {
+   "ant-button": "antd-mini/Button/index",
  }
}
`,paraId:5,tocIndex:3},{value:"Note that the case of the component path must be the same as that of the actual component. Otherwise, an error may be reported.",paraId:6,tocIndex:3},{value:"On the page, you can use the button components provided by the antd-mini as follows:",paraId:7,tocIndex:4},{value:`+   <ant-button type="primary" bindtap="handleTap">\u4E3B\u8981\u6309\u94AE</ant-button>
`,paraId:8,tocIndex:4},{value:"At the same time, don't forget ",paraId:9,tocIndex:4},{value:".js",paraId:9,tocIndex:4},{value:" Add a method to the file that handles the click event:",paraId:9,tocIndex:4},{value:`Page({
+   handleTap: function (e) {
+      wx.showToast({
+            title: '\u70B9\u51FB\u6309\u94AE',
+       });
+   },
});
`,paraId:10,tocIndex:4},{value:"The WeChat applet does not support setting default values and scope slots for slots, so the slot capability of components in the WeChat version is limited.",paraId:11,tocIndex:5},{value:`<!-- \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u672C\u8EAB\u4E0D\u652F\u6301\u4E0B\u9762\u4F8B\u5B50\u4E2D\u8FD9\u6837\u7684 \u7ED9\u63D2\u69FD\u8BBE\u7F6E\u9ED8\u8BA4\u503C -->
<slot>\u9ED8\u8BA4\u503C</slot>

<!-- \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u672C\u8EAB\u4E0D\u652F\u6301\u4E0B\u9762\u4F8B\u5B50\u4E2D\u8FD9\u6837\u7684 \u4F5C\u7528\u57DF\u63D2\u69FD -->
<slot item="{{item}}" index="{{index}}"></slot>
`,paraId:12,tocIndex:5},{value:"After introducing the component, encounter ",paraId:13,tocIndex:5},{value:"[WXML file compile error] undefined?",paraId:13,tocIndex:5},{value:"\u3001 ",paraId:13,tocIndex:5},{value:"[WXML file compile error] WXML file not found: ./xxx",paraId:13,tocIndex:5},{value:" Relevant report error. Remove the following configuration from app.json and try it.",paraId:13,tocIndex:5},{value:`{
  "pages": [
    "pages/index/index"
  ],
- "componentFramework": "glass-easel",
- "lazyCodeLoading": "requiredComponents
}
`,paraId:14,tocIndex:5},{value:"The following is a list of components that have been adapted to WeChat applets in the antd-mini. You can use these components directly in the project.",paraId:15,tocIndex:6},{value:"For more details, please refer to the official documents of WeChat applet on npm support:",paraId:16,tocIndex:7},{value:"WeChat applet document: npm support",paraId:17,tocIndex:7}]},48048:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(50323);const n=[{value:"Here is a summary of resources related to Ant Design Mini.",paraId:0,tocIndex:0},{value:"Ant Design Mini related design resources and design tools are available here for download. More design resources are being sorted out and improved.",paraId:1,tocIndex:1}]}}]);
