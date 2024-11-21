"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9706],{76835:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(31946),d={}},32764:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(74575),d={}},55215:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(98349),d={}},2568:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(3651),d={}},17821:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(18234),d={}},33588:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(86717),d={}},23289:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(61722),d={}},77690:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(82686),d={}},24458:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(9570),d={}},91654:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(145),d={}},99793:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(66693),d={}},86304:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(50323),d={}},55476:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(31946);const n=[]},97023:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(74575);const n=[]},6305:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(98349);const n=[{value:"Code Repository: ",paraId:0,tocIndex:1},{value:"https://github.com/ant-design/ant-design-mini/",paraId:0,tocIndex:1},{value:`$ git clone git@github.com:ant-design/ant-design-mini.git
`,paraId:1,tocIndex:1},{value:`$ npm i
`,paraId:2,tocIndex:2},{value:"Run ",paraId:3,tocIndex:3},{value:"dev",paraId:3,tocIndex:3},{value:" command to compile the source code ",paraId:3,tocIndex:3},{value:"compiled",paraId:3,tocIndex:3},{value:" directory.",paraId:3,tocIndex:3},{value:`$ npm run dev
`,paraId:4,tocIndex:3},{value:"Directly use WeChat developer tools to open the root directory of the project.",paraId:5,tocIndex:5},{value:"After opening the project, enter the WeChat directory and install dependencies:",paraId:6,tocIndex:5},{value:`$ cd compiled/wechat
$ npm i
`,paraId:7,tocIndex:5},{value:'After installing the dependency, click the menu bar in WeChat Developer Tool: "Tools --> Build npm". After the build is complete, the project is ready to run normally.',paraId:8,tocIndex:5},{value:"Directly use the Alipay applet developer tool to open the root directory of the project to run.",paraId:9,tocIndex:6},{value:`$ npm run dev:doc
`,paraId:10,tocIndex:7},{value:"When submitting a commit, you need to follow the following principles:",paraId:11,tocIndex:8},{value:"Minimize code changes: Ensure that the logic of each commit is independent and atomized. Even if the change is only 1 line of code, it should be committed independently;",paraId:12,tocIndex:8},{value:"Follow ",paraId:12,tocIndex:8},{value:"Conventional Commits principle",paraId:12,tocIndex:8},{value:`to avoid meaningless Commit Message. When the code is submitted, there will be a Commit Message format check, which you usually use extensively:
`,paraId:12,tocIndex:8},{value:"feat(scope): xxx",paraId:13,tocIndex:8},{value:" to describe a feature commit;",paraId:13,tocIndex:8},{value:"fix(scope): xxx",paraId:13,tocIndex:8},{value:" to describe the commit of a bug fix;",paraId:13,tocIndex:8},{value:"chore(scope): xxx",paraId:13,tocIndex:8},{value:" to describe small tweaks unrelated to feature and bug fixes;",paraId:13,tocIndex:8},{value:"Mention issue: If the change is related to issue, please indicate the issue number in the Commit Message, for example:",paraId:12,tocIndex:8},{value:"fix(scope): [#1] xxxxxx",paraId:12,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"Write a code (supports conditional compilation) and generate Alipay and WeChat applet view layer code at the same time:",paraId:14,tocIndex:10},{value:"Source code:",paraId:15,tocIndex:10},{value:`<view>
  <!-- #if ALIPAY -->
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <!-- #endif -->
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:16,tocIndex:10},{value:"Alipay applet:",paraId:17,tocIndex:10},{value:`<view>
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:18,tocIndex:10},{value:"micro letter small program:",paraId:19,tocIndex:10},{value:`<view>
  <text wx:if="{{a}}">a</text>
  <text wx:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
`,paraId:20,tocIndex:10}]},48600:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(3651);const n=[{value:"The development of antd-mini is inseparable from every user in the community. To help you participate in the co-construction, here is some necessary information.",paraId:0,tocIndex:0},{value:"When you encounter problems or requirements in the use of the component library, you can go to the issue area to consult or ask questions. We have prepared a variety of issue templates, please choose the applicable one according to the actual situation. At the same time, if you can help solve other people's doubts, we will also be very grateful.",paraId:1,tocIndex:2},{value:"If the current component library does not meet your development needs, please submit an issue to explain the functionality you need. Note, however, that not all submitted requirements will necessarily be fulfilled. The antd-mini is located in the base component library and does not contain business class components. We discuss each submitted requirement, and once it is confirmed that it is required for the underlying functionality, we initiate the development process.",paraId:2,tocIndex:3},{value:"When submitting bug feedback, please provide relevant information as complete as possible so that we can quickly reproduce and solve the problem.",paraId:3,tocIndex:4},{value:"Here are some considerations when submitting:",paraId:4,tocIndex:4},{value:"Provide device information, client version, component library version and specific components;",paraId:5,tocIndex:4},{value:"Explain what you expect the component to behave and what actually happens;",paraId:5,tocIndex:4},{value:"Describe in detail the steps to reproduce the problem;",paraId:5,tocIndex:4},{value:"If feasible, provide examples or demos that can reproduce the problem to speed up problem positioning.",paraId:5,tocIndex:4},{value:"We cordially invite you to contribute code to antd-mini. See",paraId:6,tocIndex:5},{value:"Contribution Guide",paraId:7,tocIndex:5},{value:"Learn more. Before contributing code, be sure to submit an RFC issue and describe your changes in detail so that we can fully discuss them in the RFC to save both parties time.",paraId:6,tocIndex:5}]},1869:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(18234);const n=[{value:"antd-mini supports using less to customize themes. Two sets of themes are built into the antd-mini: the basic theme and the dark theme. You can use different themes or modify theme colors by customizing less variables.",paraId:0,tocIndex:0},{value:"The IDE version of the applet developer tool must be no less than 3.0.0, and the CLI version of the command line tool must be no less than 1.4.0.",paraId:1,tocIndex:1},{value:"Use ",paraId:2,tocIndex:1},{value:"antd-mini/less/component",paraId:2,tocIndex:1},{value:"\uFF1A",paraId:2,tocIndex:1},{value:`{
  "usingComponents": {
    "button": "antd-mini/less/Button/index"
  }
}
`,paraId:3,tocIndex:1},{value:"In ",paraId:4,tocIndex:1},{value:"mini.project.json",paraId:4,tocIndex:1},{value:" documents can be passed ",paraId:4,tocIndex:1},{value:"modifyVars",paraId:4,tocIndex:1},{value:" Modifying the less variable, such as modifying ",paraId:4,tocIndex:1},{value:"theme",paraId:4,tocIndex:1},{value:"\uFF1A",paraId:4,tocIndex:1},{value:`{
  "format": 2,
  "compileOptions": {
    "less": {
      "modifyVars": {
        "theme": "dark"
      }
    }
  }
}
`,paraId:5,tocIndex:1},{value:"Name",paraId:6,tocIndex:2},{value:"Description",paraId:6,tocIndex:2},{value:"Default Value",paraId:6,tocIndex:2},{value:"theme",paraId:6,tocIndex:2},{value:"Theme, selectable ",paraId:6,tocIndex:2},{value:"default",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"dark",paraId:6,tocIndex:2},{value:"default",paraId:6,tocIndex:2},{value:"rpx",paraId:6,tocIndex:2},{value:"Rpx unit corresponding value",paraId:6,tocIndex:2},{value:"0.5px",paraId:6,tocIndex:2},{value:"colorPrimary",paraId:6,tocIndex:2},{value:"Main brand color, corresponding ",paraId:6,tocIndex:2},{value:"default",paraId:6,tocIndex:2},{value:" and ",paraId:6,tocIndex:2},{value:"dark",paraId:6,tocIndex:2},{value:" The default value",paraId:6,tocIndex:2},{value:"#1677ff",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#3086FF",paraId:6,tocIndex:2},{value:"colorWathet",paraId:6,tocIndex:2},{value:"Light blue",paraId:6,tocIndex:2},{value:"#E7F1FF",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#0D2543",paraId:6,tocIndex:2},{value:"colorRed",paraId:6,tocIndex:2},{value:"Red",paraId:6,tocIndex:2},{value:"#FF3141",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#FF4A58",paraId:6,tocIndex:2},{value:"colorYellow",paraId:6,tocIndex:2},{value:"Yellow",paraId:6,tocIndex:2},{value:"#FF9F18",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#FFA930",paraId:6,tocIndex:2},{value:"colorGreen",paraId:6,tocIndex:2},{value:"Green",paraId:6,tocIndex:2},{value:"#22B35E",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#34B368",paraId:6,tocIndex:2},{value:"colorTextPrimary",paraId:6,tocIndex:2},{value:"Primary Text Information Color",paraId:6,tocIndex:2},{value:"#333333",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#E6E6E6",paraId:6,tocIndex:2},{value:"colorWhite",paraId:6,tocIndex:2},{value:"White",paraId:6,tocIndex:2},{value:"#FFFFFF",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#FFFFFF",paraId:6,tocIndex:2},{value:"colorOrange",paraId:6,tocIndex:2},{value:"Orange",paraId:6,tocIndex:2},{value:"#FF6430",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#E65A2B",paraId:6,tocIndex:2},{value:"colorBlack",paraId:6,tocIndex:2},{value:"Black",paraId:6,tocIndex:2},{value:"#000000",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#000000",paraId:6,tocIndex:2},{value:"colorTextAssist",paraId:6,tocIndex:2},{value:"Auxiliary Text Information Color",paraId:6,tocIndex:2},{value:"#999999",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#808080",paraId:6,tocIndex:2},{value:"colorBorder",paraId:6,tocIndex:2},{value:"Border Color",paraId:6,tocIndex:2},{value:"#EEEEEE",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#2B2B2B",paraId:6,tocIndex:2},{value:"colorBackground",paraId:6,tocIndex:2},{value:"Global Background Color",paraId:6,tocIndex:2},{value:"#F5F5F5",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#0A0A0A",paraId:6,tocIndex:2},{value:"colorTextWeak",paraId:6,tocIndex:2},{value:"Weak information",paraId:6,tocIndex:2},{value:"#CCCCCC",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#4D4D4D",paraId:6,tocIndex:2},{value:"colorCard",paraId:6,tocIndex:2},{value:"Card Color",paraId:6,tocIndex:2},{value:"#FFFFFF",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#1A1A1A",paraId:6,tocIndex:2},{value:"colorTextSecondary",paraId:6,tocIndex:2},{value:"Secondary text information color",paraId:6,tocIndex:2},{value:"#666666",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#B3B3B3",paraId:6,tocIndex:2},{value:"colorGreyCard",paraId:6,tocIndex:2},{value:"Gray Card",paraId:6,tocIndex:2},{value:"#F5F5F5",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"#2B2B2B",paraId:6,tocIndex:2}]},12993:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(86717);const n=[{value:`\u56E0\u4E3A 1.x \u5347\u7EA7\u5230 2.x \u6CA1\u6709\u8FC1\u79FB\u6210\u672C\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u76F4\u63A5\u4ECE 1.x \u5347\u7EA7\u5230 2.x
\u5BF9\u4E8E 0.x, \u4F60\u53EF\u4EE5\u4F7F\u7528 npm \u522B\u540D\u6765\u5B89\u88C5\u3002`,paraId:0,tocIndex:1},{value:"In ",paraId:1,tocIndex:1},{value:"package.json",paraId:1,tocIndex:1},{value:" This is defined in the file:",paraId:1,tocIndex:1},{value:`{
  "dependencies": {
    "antd-mini": "^2.25.0",
    "antd-mini-v0": "npm:antd-mini@^0.0.26"
  }
}
`,paraId:2,tocIndex:1},{value:`$ npm install
`,paraId:3,tocIndex:1},{value:"Use:",paraId:4,tocIndex:1},{value:`{
  "usingComponents": {
    "button": "antd-mini/es/Button/index",
    "button-v0": "antd-mini-v0/es/Button/index"
  }
}
`,paraId:5,tocIndex:1},{value:`<button>\u8FD9\u662F2.x antd-mini</button>
<antd-mini-v0>\u8FD9\u662F0.x antd-mini</antd-mini-v0>
`,paraId:6,tocIndex:1},{value:"The new Alipay applet developer tool is configured for the created page by default ",paraId:7,tocIndex:2},{value:"styleIsolation: 'apply-shared'",paraId:7,tocIndex:2},{value:"This will result in the page style not being able to affect external components.",paraId:7,tocIndex:2},{value:"You can solve this problem by modifying the style isolation configuration of the corresponding page.json:",paraId:8,tocIndex:2},{value:`{
  "styleIsolation": "shared"
}
`,paraId:9,tocIndex:2},{value:"styleIsolation",paraId:10,tocIndex:2},{value:" Configuration items are available in the following two modes:",paraId:10,tocIndex:2},{value:"apply-shared",paraId:11,tocIndex:2},{value:": This means that the app.acss style and other settings have ",paraId:11,tocIndex:2},{value:"shared",paraId:11,tocIndex:2},{value:" page or custom component styles affect the current page, but styles in the current page acss are not applied externally.",paraId:11,tocIndex:2},{value:"shared",paraId:11,tocIndex:2},{value:"(default): indicates that the app.acss style and other settings are ",paraId:11,tocIndex:2},{value:"shared",paraId:11,tocIndex:2},{value:" the page or custom component styles will affect the current page, and the styles in the acss of the current page will also be applied externally.",paraId:11,tocIndex:2},{value:"Official documentation reference link:",paraId:12,tocIndex:2},{value:"Page Style Isolation",paraId:12,tocIndex:2}]},59985:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(61722);const n=[{value:"antd-mini v3 supports internationalization of global settings, and multi-language support is realized by setting Locale. The component uses Chinese by default;",paraId:0,tocIndex:0},{value:"Introducing components in the page JSON file",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:" Components to globally configure multilingual files;",paraId:1,tocIndex:1},{value:`{
  "usingComponents": {
    "ant-config-provider": "antd-mini/es/ConfigProvider/index"
  }
}
`,paraId:2,tocIndex:1},{value:"introduce the corresponding language source file into js",paraId:3,tocIndex:1},{value:`import enUS from '@antd-mini/locales/en-US';
Page({
  data: {
    locale: esES,
  },
});
`,paraId:4,tocIndex:1},{value:"Used in AXML, it is important to note that the entire project is only passed for the first time.",paraId:5,tocIndex:1},{value:"ConfigProvider",paraId:5,tocIndex:1},{value:"Setting Locale will take effect globally. Different languages are set on different pages of the same project and will only take effect once;",paraId:5,tocIndex:1},{value:`<ant-config-provider locale={{locale}}>
  <ant-button>
      I am a button.
  </ant-button>
</ant-config-provider>
`,paraId:6,tocIndex:1},{value:"Language",paraId:7,tocIndex:2},{value:"File Name",paraId:7,tocIndex:2},{value:"Supported Versions",paraId:7,tocIndex:2},{value:"Simplified Chinese",paraId:7,tocIndex:2},{value:"zh-CN",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Traditional Chinese (Taiwan)",paraId:7,tocIndex:2},{value:"zh-TW",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Traditional Chinese (Hong Kong)",paraId:7,tocIndex:2},{value:"zh-HK",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Arabic (Saudi Arabia)",paraId:7,tocIndex:2},{value:"ar-SA",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"English (American)",paraId:7,tocIndex:2},{value:"en-US",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Korean (South Korea)",paraId:7,tocIndex:2},{value:"ko-KR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"German (Germany)",paraId:7,tocIndex:2},{value:"de-DE",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Russian (Russia)",paraId:7,tocIndex:2},{value:"ru-RU",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"French (France)",paraId:7,tocIndex:2},{value:"fr-FR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Spanish (Spain)",paraId:7,tocIndex:2},{value:"es-ES",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Italian (Italy)",paraId:7,tocIndex:2},{value:"it-IT",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Malay (Malaysia)",paraId:7,tocIndex:2},{value:"ms-MY",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Indonesian",paraId:7,tocIndex:2},{value:"in-ID",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Thai (Thailand)",paraId:7,tocIndex:2},{value:"th-TH",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Portuguese (Brazil)",paraId:7,tocIndex:2},{value:"pt-BR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Japanese (Japan)",paraId:7,tocIndex:2},{value:"ja-JP",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Turkish (Turkey)",paraId:7,tocIndex:2},{value:"tr-TR",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"Vietnamese",paraId:7,tocIndex:2},{value:"vi-VN",paraId:7,tocIndex:2},{value:"3.0",paraId:7,tocIndex:2},{value:"TODO: This file has not been replaced.",paraId:8,tocIndex:2},{value:"View here",paraId:9,tocIndex:2},{value:"Language Pack Source Files",paraId:9,tocIndex:2},{value:"If you can't find the language pack you need, you are welcome to create a new language pack based on the English language pack and send us a Pull Request.",paraId:10,tocIndex:4}]},76694:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(82686);const n=[{value:"The last version of Ant Design Mini v2 was ",paraId:0,tocIndex:0},{value:"v2.36.8",paraId:0,tocIndex:0},{value:"The first version of v3 was ",paraId:0,tocIndex:0},{value:"v3.0.0",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"What did we do for the v3 version?",paraId:1,tocIndex:0},{value:"Component Visual Upgrade",paraId:2,tocIndex:0},{value:"Support dark mode",paraId:2,tocIndex:0},{value:"Support theme customization",paraId:2,tocIndex:0},{value:"Internationalized multi-language support",paraId:2,tocIndex:0},{value:"Among them, dark mode, theme customization and internationalization of multilingual are brand-new functions, which can be directly used when upgraded to v3.",paraId:3,tocIndex:0},{value:"For visual upgrade of components, we modified the styles of some components in v2 version to meet the latest visual specifications. During the upgrade process, we made maximum forward compatibility without destroying the component structure, className prefix and Props parameters of v2 version. Theoretically, v2 can be directly upgraded to v3 without Breaking Change. Although we have made as much compatibility guarantee as possible in the development of the new version, we still",paraId:4,tocIndex:0},{value:"It is strongly recommended that the access party conduct a complete regression test during the upgrade from v2 to v3 to prevent inconsistent business performance due to some unexpected Edge Case.",paraId:4,tocIndex:0},{value:"Component Name",paraId:5,tocIndex:1},{value:"Upgrade Description",paraId:5,tocIndex:1},{value:"Button",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"aide",paraId:5,tocIndex:1},{value:" Properties;",paraId:5,tocIndex:1},{value:"Calendar",paraId:5,tocIndex:1},{value:"\u{1F6E0}Remove ",paraId:5,tocIndex:1},{value:"localeText",paraId:5,tocIndex:1},{value:" attributes; original ",paraId:5,tocIndex:1},{value:"title",paraId:5,tocIndex:1},{value:" property is defined ",paraId:5,tocIndex:1},{value:"format",paraId:5,tocIndex:1},{value:" attribute substitution;",paraId:5,tocIndex:1},{value:"Empty",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"buttonInfo",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"onClickButton",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Popover",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"showCloseIcon",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"imageUrl",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"actionText",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"onTapAction",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Popup",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"backgroundImage",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"showClose",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"showBack",paraId:5,tocIndex:1},{value:" property,",paraId:5,tocIndex:1},{value:"onClickBackIcon",paraId:5,tocIndex:1},{value:" events,",paraId:5,tocIndex:1},{value:"onClickCloseIcon",paraId:5,tocIndex:1},{value:" the incident;",paraId:5,tocIndex:1},{value:"Toast",paraId:5,tocIndex:1},{value:"\u{1F6E0}New ",paraId:5,tocIndex:1},{value:"textType",paraId:5,tocIndex:1},{value:" attributes; original ",paraId:5,tocIndex:1},{value:"type",paraId:5,tocIndex:1},{value:" Property Added ",paraId:5,tocIndex:1},{value:"alipay",paraId:5,tocIndex:1},{value:" type;",paraId:5,tocIndex:1},{value:"Card",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Dialog",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"SafeArea",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"AutoResize",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"ConfigProvider",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Countdown",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Table",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Feedback",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"PopoverList",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"SelectContact",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Sticky",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Voucher",paraId:5,tocIndex:1},{value:"\u{1F195}New Components",paraId:5,tocIndex:1},{value:"Migration Guide:",paraId:6,tocIndex:2},{value:"Upgrade from v1 to v2",paraId:7,tocIndex:2},{value:"Upgrade from v0 to v1",paraId:7,tocIndex:2},{value:"Full Document Address:",paraId:8,tocIndex:2},{value:"Version v2",paraId:9,tocIndex:2},{value:"Version v1",paraId:9,tocIndex:2},{value:"v0 version",paraId:9,tocIndex:2}]},68706:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(9570);const n=[{value:"Here is how to install and use the Ant Design Mini component library in the native Alipay applet.",paraId:0,tocIndex:0},{value:`$ npm i antd-mini --save
`,paraId:1,tocIndex:1},{value:"From v2.11.0 onwards, small programs are required to open ",paraId:2,tocIndex:2},{value:"component2",paraId:2,tocIndex:2},{value:". When enabled, the applet custom component uses the new lifecycle run mode.",paraId:2,tocIndex:2},{value:'How to enable it: In Details> Project Configuration in the IDE, select Enable component2 Compilation ".',paraId:3,tocIndex:2},{value:"Details can refer",paraId:4,tocIndex:2},{value:"Upgrade to v2",paraId:5,tocIndex:2},{value:"\u3002",paraId:4,tocIndex:2},{value:`{
  "usingComponents": {
    "ant-button": "antd-mini/es/Button/index"
  }
}
`,paraId:6,tocIndex:3},{value:`<ant-button>\u6211\u662F\u4E00\u4E2A\u6309\u94AE</ant-button>
`,paraId:7,tocIndex:4}]},82189:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(145);const n=[{value:"Here is a button component (Button) as an example to explain how to use antd-mini in uni-app projects.",paraId:0,tocIndex:0},{value:"Create a new directory under the project path ",paraId:1,tocIndex:2},{value:"mycomponents",paraId:1,tocIndex:2},{value:"(must be this name and cannot be modified), and install antd-mini dependencies in this directory.",paraId:1,tocIndex:2},{value:"Reference command:",paraId:2,tocIndex:2},{value:`mkdir mycomponents
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
`,paraId:21,tocIndex:4},{value:"uni-app official website: applet custom component support",paraId:22,tocIndex:5},{value:"Example of using uniapp antd-mini",paraId:22,tocIndex:5}]},20497:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(66693);const n=[{value:"Starting from Ant Design Mini v2.12, we have modified the engineering implementation of some components to adapt to WeChat applets. At present, this set of capabilities is in the beta testing stage, and the related API and component list may change.",paraId:0,tocIndex:0},{value:"The following takes Button (button component) as an example to explain how to use antd-mini in WeChat applets.",paraId:1,tocIndex:0},{value:`# \u5B89\u88C5\u4F9D\u8D56
npm i antd-mini --save
`,paraId:2,tocIndex:1},{value:"The above commands will help you install the antd-mini dependencies in your project.",paraId:3,tocIndex:1},{value:'After the dependency installation is completed, please select "Tools"-> "Build npm" in the menu bar of WeChat Developer Tools ".',paraId:4,tocIndex:2},{value:"Please configure ",paraId:5,tocIndex:3},{value:"usingComponents",paraId:5,tocIndex:3},{value:" field, refer to the antd-mini component correctly, as in the following example:",paraId:5,tocIndex:3},{value:`{
  "usingComponents": {
+   "ant-button": "antd-mini/Button/index",
  }
}
`,paraId:6,tocIndex:3},{value:"Note that the case of the component path must be the same as that of the actual component. Otherwise, an error may be reported.",paraId:7,tocIndex:3},{value:"On the page, you can use the button components provided by the antd-mini as follows:",paraId:8,tocIndex:4},{value:`+   <ant-button type="primary" bind:tap="handleTap">\u4E3B\u8981\u6309\u94AE</ant-button>
`,paraId:9,tocIndex:4},{value:"At the same time, don't forget ",paraId:10,tocIndex:4},{value:".js",paraId:10,tocIndex:4},{value:" Add a method to the file that handles the click event:",paraId:10,tocIndex:4},{value:`Page({
+   handleTap: function (e) {
+      wx.showToast({
+            title: '\u70B9\u51FB\u6309\u94AE',
+       });
+   },
});
`,paraId:11,tocIndex:4},{value:"The following is a list of components that have been adapted to WeChat applets in the antd-mini. You can use these components directly in the project.",paraId:12,tocIndex:5},{value:"For more details, please refer to the official documents of WeChat applet on npm support:",paraId:13,tocIndex:6},{value:"WeChat applet document: npm support",paraId:14,tocIndex:6}]},48048:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(50323);const n=[{value:"Here is a summary of resources related to Ant Design Mini.",paraId:0,tocIndex:0},{value:"Ant Design Mini related design resources and design tools are available here for download. More design resources are being sorted out and improved.",paraId:1,tocIndex:1}]}}]);
