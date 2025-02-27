"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7554],{87312:function(n,d,e){e.r(d),e.d(d,{demos:function(){return o}});var a=e(67294),t=e(94990),o={"src-form-demo-formbasic":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,49563))})),asset:{type:"BLOCK",id:"src-form-demo-formbasic",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formlayout":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,35240))})),asset:{type:"BLOCK",id:"src-form-demo-formlayout",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-forminitialvalues":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,76970))})),asset:{type:"BLOCK",id:"src-form-demo-forminitialvalues",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-forminitialvaluesasync":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,72044))})),asset:{type:"BLOCK",id:"src-form-demo-forminitialvaluesasync",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formwatch":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,56667))})),asset:{type:"BLOCK",id:"src-form-demo-formwatch",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formrules":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,17152))})),asset:{type:"BLOCK",id:"src-form-demo-formrules",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formdynamic":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,68407))})),asset:{type:"BLOCK",id:"src-form-demo-formdynamic",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formdependency":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,70322))})),asset:{type:"BLOCK",id:"src-form-demo-formdependency",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formvalidate":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,87710))})),asset:{type:"BLOCK",id:"src-form-demo-formvalidate",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formvalidatemessages":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,34325))})),asset:{type:"BLOCK",id:"src-form-demo-formvalidatemessages",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formmultiple":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,41419))})),asset:{type:"BLOCK",id:"src-form-demo-formmultiple",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formreadonly":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,4322))})),asset:{type:"BLOCK",id:"src-form-demo-formreadonly",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formimageuploadrules":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,40843))})),asset:{type:"BLOCK",id:"src-form-demo-formimageuploadrules",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formjson":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,99742))})),asset:{type:"BLOCK",id:"src-form-demo-formjson",refAtomIds:[],dependencies:{},entry:"index.js"},context:{},renderOpts:void 0},"src-form-demo-formcustomerror":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,3162))})),asset:{type:"BLOCK",id:"src-form-demo-formcustomerror",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-formcustom":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,54162))})),asset:{type:"BLOCK",id:"src-form-demo-formcustom",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0},"src-form-demo-form":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,12827))})),asset:{type:"BLOCK",id:"src-form-demo-form",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},13289:function(n,d,e){e.r(d),e.d(d,{texts:function(){return t}});var a=e(94990);const t=[{value:"The Form form contains data entry, validation, and corresponding styles. The Form component requires ",paraId:0,tocIndex:0},{value:"component2",paraId:0,tocIndex:0},{value:" Support.",paraId:0,tocIndex:0},{value:"Used to create entities or collect information.",paraId:1,tocIndex:0},{value:"When the input data type needs to be verified.",paraId:1,tocIndex:0},{value:"Take the input box as an example",paraId:2,tocIndex:1},{value:"In ",paraId:3,tocIndex:1},{value:"index.json",paraId:3,tocIndex:1},{value:" Introducing Components in",paraId:3,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "form-input": "antd-mini/es/Form/FormInput/index"
#endif
#if WECHAT
  "form-input": "antd-mini/Form/FormInput/index"
#endif
}
`,paraId:4,tocIndex:1},{value:"The logic layer registers the input box component ref into the Form",paraId:5,tocIndex:1},{value:`<form-input
  label="\u7528\u6237\u540D"
  name="account"
  placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  tooltip="\u7528\u6237\u540DDescription"
  allowClear
  ref="handleRef"
/>
`,paraId:6,tocIndex:1},{value:`#if ALIPAY
import { Form } from 'antd-mini/es/Form/form';
#endif
#if WECHAT
import { Form } from 'antd-mini/Form/form';
#endif

Page({
  handleRef(ref) {
#if ALIPAY
    this.form.addItem(ref);
#endif
#if WECHAT
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
#endif
  },
});
`,paraId:7,tocIndex:1},{value:"Use ",paraId:8,tocIndex:17},{value:"validateStatus: success",paraId:8,tocIndex:17},{value:" and ",paraId:8,tocIndex:17},{value:"footer slot",paraId:8,tocIndex:17},{value:" Customize the error style.",paraId:8,tocIndex:17},{value:"by using ",paraId:9,tocIndex:18},{value:"FormItem",paraId:10,tocIndex:18},{value:"\u3001",paraId:9,tocIndex:18},{value:"createForm",paraId:11,tocIndex:18},{value:" Customizable form items. In the example ",paraId:9,tocIndex:18},{value:"form-checklist",paraId:9,tocIndex:18},{value:"\u3001",paraId:9,tocIndex:18},{value:"form-location",paraId:9,tocIndex:18},{value:" For custom form item components.",paraId:9,tocIndex:18},{value:"Properties Included in All Form Components",paraId:12,tocIndex:21},{value:"Property",paraId:13,tocIndex:21},{value:"Description",paraId:13,tocIndex:21},{value:"Type",paraId:13,tocIndex:21},{value:"Default Value",paraId:13,tocIndex:21},{value:"dependencies",paraId:13,tocIndex:21},{value:"Set Dependent Fields, View",paraId:13,tocIndex:21},{value:"Detailed Description",paraId:14,tocIndex:21},{value:"string[]",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"footer",paraId:13,tocIndex:21},{value:"Bottom slot, receiving errors, status",paraId:13,tocIndex:21},{value:"slot",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"name",paraId:13,tocIndex:21},{value:"Name",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"label",paraId:13,tocIndex:21},{value:"Text",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"labelWidth",paraId:13,tocIndex:21},{value:"Text Width",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"position",paraId:13,tocIndex:21},{value:"layout, optional ",paraId:13,tocIndex:21},{value:"horizontal",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"vertical",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"horizontal",paraId:13,tocIndex:21},{value:"validateStatus",paraId:13,tocIndex:21},{value:"The verification status. If it is not set, it will be automatically generated according to the verification rules. Optional ",paraId:13,tocIndex:21},{value:"default",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"success",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"error",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"validating",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"help",paraId:13,tocIndex:21},{value:"Prompt information, if not set, will be automatically generated according to the verification rules",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"header",paraId:13,tocIndex:21},{value:"Top slot, receiving errors, status",paraId:13,tocIndex:21},{value:"slot",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"tooltip",paraId:13,tocIndex:21},{value:"Form Item Prompt Information",paraId:13,tocIndex:21},{value:"string|slot",paraId:13,tocIndex:21},{value:"-",paraId:13,tocIndex:21},{value:"required",paraId:13,tocIndex:21},{value:"Required style settings. If it is not set, it will be automatically generated according to the verification rules.",paraId:13,tocIndex:21},{value:"boolean",paraId:13,tocIndex:21},{value:"false",paraId:13,tocIndex:21},{value:"message",paraId:13,tocIndex:21},{value:"Verify the error message. If it is not set, it will be automatically generated according to the verification rules.",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"false",paraId:13,tocIndex:21},{value:"requiredMark",paraId:13,tocIndex:21},{value:"Required optional tag style, optional ",paraId:13,tocIndex:21},{value:"asterisk",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"text-required",paraId:13,tocIndex:21},{value:" ",paraId:13,tocIndex:21},{value:"text-optional",paraId:13,tocIndex:21},{value:"string",paraId:13,tocIndex:21},{value:"asterisk",paraId:13,tocIndex:21},{value:"Property",paraId:15,tocIndex:22},{value:"Description",paraId:15,tocIndex:22},{value:"Type",paraId:15,tocIndex:22},{value:"rules",paraId:15,tocIndex:22},{value:"Optional, Validation Rules",paraId:15,tocIndex:22},{value:"View",paraId:15,tocIndex:22},{value:"rules",paraId:16,tocIndex:22},{value:"initialValues",paraId:15,tocIndex:22},{value:"Optional, initial value",paraId:15,tocIndex:22},{value:"Record<string, any>",paraId:15,tocIndex:22},{value:"validateMessages",paraId:15,tocIndex:22},{value:"Optional, Verify Message",paraId:15,tocIndex:22},{value:"View",paraId:15,tocIndex:22},{value:"validateMessages",paraId:17,tocIndex:22},{value:"Property",paraId:18,tocIndex:23},{value:"Description",paraId:18,tocIndex:23},{value:"Type",paraId:18,tocIndex:23},{value:"addItem",paraId:18,tocIndex:23},{value:"Add Form Item",paraId:18,tocIndex:23},{value:"(formItem: Ref) => void",paraId:18,tocIndex:23},{value:"updateRules",paraId:18,tocIndex:23},{value:"To update the verification rules of the form, you need to pass in the full number of rules each time.",paraId:18,tocIndex:23},{value:"(rules: Rules) => void, the type of Rules can be viewed",paraId:18,tocIndex:23},{value:"rules",paraId:19,tocIndex:23},{value:"getFieldValue",paraId:18,tocIndex:23},{value:"Get the value of a form item",paraId:18,tocIndex:23},{value:"(name: string) => any",paraId:18,tocIndex:23},{value:"getFieldsValue",paraId:18,tocIndex:23},{value:"Gets the value for a set of field names. If no nameList is passed, all fields pairs are returned.",paraId:18,tocIndex:23},{value:"(nameList?: string[]) => Record<string, any>",paraId:18,tocIndex:23},{value:"getFieldValidatorStatus",paraId:18,tocIndex:23},{value:"Get form check status",paraId:18,tocIndex:23},{value:"(name: string) => ",paraId:18,tocIndex:23},{value:"ValidatorStatus",paraId:20,tocIndex:23},{value:"getFieldsValidatorStatus",paraId:18,tocIndex:23},{value:"Get a set of form validation states. If no nameList is passed, all fields pairs are returned.",paraId:18,tocIndex:23},{value:"(nameList?: string[]) => Record<string, ",paraId:18,tocIndex:23},{value:"ValidatorStatus",paraId:21,tocIndex:23},{value:">",paraId:18,tocIndex:23},{value:"reset",paraId:18,tocIndex:23},{value:"Reset form to initial value",paraId:18,tocIndex:23},{value:"() => void",paraId:18,tocIndex:23},{value:"isFieldTouched",paraId:18,tocIndex:23},{value:"Determine whether a form item has been modified",paraId:18,tocIndex:23},{value:"() => boolean",paraId:18,tocIndex:23},{value:"onValueChange",paraId:18,tocIndex:23},{value:"Listen for the value modification of the specified form item, view",paraId:18,tocIndex:23},{value:"Detailed Description",paraId:22,tocIndex:23},{value:"(name: string, (changedValue: any, allValues: Record<string, any>) => void) => void",paraId:18,tocIndex:23},{value:"onValuesChange",paraId:18,tocIndex:23},{value:"Listen for the value modification of a form item, view",paraId:18,tocIndex:23},{value:"Detailed Description",paraId:23,tocIndex:23},{value:"((changedValues: Record<string, any>, allValues: Record<string, any>) => void) => void",paraId:18,tocIndex:23},{value:"setFieldValue",paraId:18,tocIndex:23},{value:"Set the value of a form item",paraId:18,tocIndex:23},{value:"(name: string, value: any) => void;",paraId:18,tocIndex:23},{value:"setFieldsValue",paraId:18,tocIndex:23},{value:"Set the value of a form item",paraId:18,tocIndex:23},{value:"(values: Record<string, any>) => void;",paraId:18,tocIndex:23},{value:"setFieldValidatorStatus",paraId:18,tocIndex:23},{value:"Set Form Verification Status",paraId:18,tocIndex:23},{value:"(name: string, validatorStatus: ",paraId:18,tocIndex:23},{value:"ValidatorStatus",paraId:24,tocIndex:23},{value:") => void",paraId:18,tocIndex:23},{value:"setFieldsValidatorStatus",paraId:18,tocIndex:23},{value:"Set a set of form validation states",paraId:18,tocIndex:23},{value:"(fieldsValidatorStatus: Record<string, ",paraId:18,tocIndex:23},{value:"ValidatorStatus",paraId:25,tocIndex:23},{value:">) => void",paraId:18,tocIndex:23},{value:"setInitialValues",paraId:18,tocIndex:23},{value:"Set Form Initial Values",paraId:18,tocIndex:23},{value:"(initialValues: Record<string, any>) => void",paraId:18,tocIndex:23},{value:"submit",paraId:18,tocIndex:23},{value:"Submit the form, return the promise form value, and the verification error will be thrown.",paraId:18,tocIndex:23},{value:"() => Promise<Record<string, any>>",paraId:18,tocIndex:23},{value:'Used when there is a dependency between fields. For example, the "Password" and "Confirm Password" fields of the registered user form, where the "Confirm Password" verification depends on the "Password" field. Setup ',paraId:26,tocIndex:24},{value:"dependencies",paraId:26,tocIndex:24},{value:' After that, the "Password" field update will automatically trigger the "Confirm Password" verification.',paraId:26,tocIndex:24},{value:"Example:",paraId:27,tocIndex:25},{value:`{
  account: [
    {
      required: true,
      message: '\u9700\u8981\u8F93\u5165\u7528\u6237\u540D'
    },
  ],
  password: [
    {
      required: true,
    },
  ],
  confirm: [
    {
      required: true,
      message: '\u9700\u8981\u8F93\u5165\u786E\u8BA4\u5BC6\u7801'
    },
    (form) => ({
      async validator(_, value) {
        if (!value || form.getFieldValue('password') === value) {
          return;
        }
        throw new Error('\u4E24\u6B21\u5BC6\u7801\u9700\u4E00\u81F4');
      },
    }),
  ]
}
`,paraId:28,tocIndex:25},{value:"rules",paraId:29,tocIndex:25},{value:" can be in ",paraId:29,tocIndex:25},{value:"new Form",paraId:29,tocIndex:25},{value:" can also be set in ",paraId:29,tocIndex:25},{value:"FormItem",paraId:29,tocIndex:25},{value:" By ",paraId:29,tocIndex:25},{value:"required",paraId:29,tocIndex:25},{value:" or ",paraId:29,tocIndex:25},{value:"message",paraId:29,tocIndex:25},{value:" Property settings.",paraId:29,tocIndex:25},{value:`<form-input
  label="\u7528\u6237\u540D"
  name="account"
  required
  message="\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  ref="handleRef"
></form-input>
`,paraId:30,tocIndex:25},{value:"can refer ",paraId:31,tocIndex:26},{value:"Asynchronous validator",paraId:31,tocIndex:26},{value:" message,antd-mini added on this basis. ",paraId:31,tocIndex:26},{value:"${label}",paraId:31,tocIndex:26},{value:",",paraId:31,tocIndex:26},{value:"${len}",paraId:31,tocIndex:26},{value:",",paraId:31,tocIndex:26},{value:"${min}",paraId:31,tocIndex:26},{value:",",paraId:31,tocIndex:26},{value:"${max}",paraId:31,tocIndex:26},{value:",",paraId:31,tocIndex:26},{value:"${pattern}",paraId:31,tocIndex:26},{value:"\u3002",paraId:31,tocIndex:26},{value:"Example:",paraId:32,tocIndex:26},{value:`{
  required: '\u9700\u8981\u8F93\u5165\${label}',
  string: {
    min: '\${label}\u6700\u5C11\${min}\u4E2A\u5B57\u7B26',
  },
  pattern: {
    mismatch: '\${label}\u9700\u8981\u6EE1\u8DB3\${pattern}\u6A21\u5F0F',
  },
}
`,paraId:33,tocIndex:26},{value:"setFieldValue",paraId:34,tocIndex:27},{value:" and ",paraId:34,tocIndex:27},{value:"setFieldsValue",paraId:34,tocIndex:27},{value:" Will not trigger ",paraId:34,tocIndex:27},{value:"onValueChange",paraId:34,tocIndex:27},{value:" and ",paraId:34,tocIndex:27},{value:"onValuesChange",paraId:34,tocIndex:27},{value:"\u3002",paraId:34,tocIndex:27},{value:"onValueChange",paraId:34,tocIndex:27},{value:" and ",paraId:34,tocIndex:27},{value:"onValuesChange",paraId:34,tocIndex:27},{value:" It is only triggered when a user action is taken. If in ",paraId:34,tocIndex:27},{value:"setFieldValue",paraId:34,tocIndex:27},{value:" or ",paraId:34,tocIndex:27},{value:"setFieldsValue",paraId:34,tocIndex:27},{value:" then want to trigger ",paraId:34,tocIndex:27},{value:"onValueChange",paraId:34,tocIndex:27},{value:" or ",paraId:34,tocIndex:27},{value:"onValuesChange",paraId:34,tocIndex:27},{value:"you need to call these methods manually.",paraId:34,tocIndex:27},{value:"Example",paraId:35,tocIndex:27},{value:"\uFF1A",paraId:35,tocIndex:27},{value:`const onValuesChangeCallback = (changedValues) => {
  console.log(changedValues);
};
this.form.onValuesChange(onValuesChangeCallback);
this.form.setFieldValue(name, value);
onValuesChangeCallback({
  [name]: value,
});
`,paraId:36,tocIndex:27},{value:`type ValidatorStatus = {
  status: 'default' | 'success' | 'error' | 'validating',
  errors: string[],
};
`,paraId:37,tocIndex:28},{value:`{
  values: Record<string, any>,
  errorFields: {
    name: string;
    errors: string[];
  }[]
}
`,paraId:38,tocIndex:29},{value:"with ",paraId:39,tocIndex:30},{value:"Input",paraId:39,tocIndex:30},{value:" Same.",paraId:39,tocIndex:30},{value:"with ",paraId:40,tocIndex:31},{value:"Textarea",paraId:40,tocIndex:31},{value:" Same.",paraId:40,tocIndex:31},{value:"with ",paraId:41,tocIndex:32},{value:"Switch",paraId:41,tocIndex:32},{value:" Same.",paraId:41,tocIndex:32},{value:"with ",paraId:42,tocIndex:33},{value:"Stepper",paraId:42,tocIndex:33},{value:" Same, but with the following added attributes:",paraId:42,tocIndex:33},{value:"Property",paraId:43,tocIndex:33},{value:"Description",paraId:43,tocIndex:33},{value:"Type",paraId:43,tocIndex:33},{value:"Default Value",paraId:43,tocIndex:33},{value:"stepperClassName",paraId:43,tocIndex:33},{value:"Corresponding ",paraId:43,tocIndex:33},{value:"Stepper",paraId:43,tocIndex:33},{value:" Components ",paraId:43,tocIndex:33},{value:"className",paraId:43,tocIndex:33},{value:"string",paraId:43,tocIndex:33},{value:"-",paraId:43,tocIndex:33},{value:"stepperStyle",paraId:43,tocIndex:33},{value:"Corresponding ",paraId:43,tocIndex:33},{value:"Stepper",paraId:43,tocIndex:33},{value:" Components ",paraId:43,tocIndex:33},{value:"style",paraId:43,tocIndex:33},{value:"string",paraId:43,tocIndex:33},{value:"-",paraId:43,tocIndex:33},{value:"with ",paraId:44,tocIndex:34},{value:"CheckGroup",paraId:44,tocIndex:34},{value:" Same, but with the following added attributes:",paraId:44,tocIndex:34},{value:"Property",paraId:45,tocIndex:34},{value:"Description",paraId:45,tocIndex:34},{value:"Type",paraId:45,tocIndex:34},{value:"Default Value",paraId:45,tocIndex:34},{value:"checkboxLabel",paraId:45,tocIndex:34},{value:"Corresponding ",paraId:45,tocIndex:34},{value:"CheckGroup",paraId:45,tocIndex:34},{value:" Components ",paraId:45,tocIndex:34},{value:"label",paraId:45,tocIndex:34},{value:"slot",paraId:45,tocIndex:34},{value:"-",paraId:45,tocIndex:34},{value:"checkboxPosition",paraId:45,tocIndex:34},{value:"Corresponding ",paraId:45,tocIndex:34},{value:"CheckGroup",paraId:45,tocIndex:34},{value:" Components ",paraId:45,tocIndex:34},{value:"position",paraId:45,tocIndex:34},{value:"string",paraId:45,tocIndex:34},{value:"-",paraId:45,tocIndex:34},{value:"with ",paraId:46,tocIndex:35},{value:"RadioGroup",paraId:46,tocIndex:35},{value:" Same, but with the following added attributes:",paraId:46,tocIndex:35},{value:"Property",paraId:47,tocIndex:35},{value:"Description",paraId:47,tocIndex:35},{value:"Type",paraId:47,tocIndex:35},{value:"Default Value",paraId:47,tocIndex:35},{value:"radioLabel",paraId:47,tocIndex:35},{value:"Corresponding ",paraId:47,tocIndex:35},{value:"RadioGroup",paraId:47,tocIndex:35},{value:" Components ",paraId:47,tocIndex:35},{value:"label",paraId:47,tocIndex:35},{value:"slot",paraId:47,tocIndex:35},{value:"-",paraId:47,tocIndex:35},{value:"radioPosition",paraId:47,tocIndex:35},{value:"Corresponding ",paraId:47,tocIndex:35},{value:"RadioGroup",paraId:47,tocIndex:35},{value:" Components ",paraId:47,tocIndex:35},{value:"position",paraId:47,tocIndex:35},{value:"string",paraId:47,tocIndex:35},{value:"-",paraId:47,tocIndex:35},{value:"with ",paraId:48,tocIndex:36},{value:"Picker",paraId:48,tocIndex:36},{value:" Same, but with the following added attributes:",paraId:48,tocIndex:36},{value:"Property",paraId:49,tocIndex:36},{value:"Description",paraId:49,tocIndex:36},{value:"Type",paraId:49,tocIndex:36},{value:"Default Value",paraId:49,tocIndex:36},{value:"arrow",paraId:49,tocIndex:36},{value:"right arrow, optional ",paraId:49,tocIndex:36},{value:"right",paraId:49,tocIndex:36},{value:"\u3001",paraId:49,tocIndex:36},{value:"up",paraId:49,tocIndex:36},{value:"\u3001",paraId:49,tocIndex:36},{value:"down",paraId:49,tocIndex:36},{value:", pass true ",paraId:49,tocIndex:36},{value:"right",paraId:49,tocIndex:36},{value:"string | boolean",paraId:49,tocIndex:36},{value:"-",paraId:49,tocIndex:36},{value:"with ",paraId:50,tocIndex:37},{value:"DatePicker",paraId:50,tocIndex:37},{value:" Same, but with the following added attributes:",paraId:50,tocIndex:37},{value:"Property",paraId:51,tocIndex:37},{value:"Description",paraId:51,tocIndex:37},{value:"Type",paraId:51,tocIndex:37},{value:"Default Value",paraId:51,tocIndex:37},{value:"arrow",paraId:51,tocIndex:37},{value:"right arrow, optional ",paraId:51,tocIndex:37},{value:"right",paraId:51,tocIndex:37},{value:"\u3001",paraId:51,tocIndex:37},{value:"up",paraId:51,tocIndex:37},{value:"\u3001",paraId:51,tocIndex:37},{value:"down",paraId:51,tocIndex:37},{value:", pass true ",paraId:51,tocIndex:37},{value:"right",paraId:51,tocIndex:37},{value:"string | boolean",paraId:51,tocIndex:37},{value:"-",paraId:51,tocIndex:37},{value:"with ",paraId:52,tocIndex:38},{value:"RangePicker",paraId:52,tocIndex:38},{value:" Same, but with the following added attributes:",paraId:52,tocIndex:38},{value:"Property",paraId:53,tocIndex:38},{value:"Description",paraId:53,tocIndex:38},{value:"Type",paraId:53,tocIndex:38},{value:"Default Value",paraId:53,tocIndex:38},{value:"arrow",paraId:53,tocIndex:38},{value:"right arrow, optional ",paraId:53,tocIndex:38},{value:"right",paraId:53,tocIndex:38},{value:"\u3001",paraId:53,tocIndex:38},{value:"up",paraId:53,tocIndex:38},{value:"\u3001",paraId:53,tocIndex:38},{value:"down",paraId:53,tocIndex:38},{value:", pass true ",paraId:53,tocIndex:38},{value:"right",paraId:53,tocIndex:38},{value:"string | boolean",paraId:53,tocIndex:38},{value:"-",paraId:53,tocIndex:38},{value:"with ",paraId:54,tocIndex:39},{value:"CascaderPicker",paraId:54,tocIndex:39},{value:" Same, but with the following added attributes:",paraId:54,tocIndex:39},{value:"Property",paraId:55,tocIndex:39},{value:"Description",paraId:55,tocIndex:39},{value:"Type",paraId:55,tocIndex:39},{value:"Default Value",paraId:55,tocIndex:39},{value:"arrow",paraId:55,tocIndex:39},{value:"right arrow, optional ",paraId:55,tocIndex:39},{value:"right",paraId:55,tocIndex:39},{value:"\u3001",paraId:55,tocIndex:39},{value:"up",paraId:55,tocIndex:39},{value:"\u3001",paraId:55,tocIndex:39},{value:"down",paraId:55,tocIndex:39},{value:", pass true ",paraId:55,tocIndex:39},{value:"right",paraId:55,tocIndex:39},{value:"string | boolean",paraId:55,tocIndex:39},{value:"-",paraId:55,tocIndex:39},{value:"with ",paraId:56,tocIndex:40},{value:"Slider",paraId:56,tocIndex:40},{value:" Same.",paraId:56,tocIndex:40},{value:"with ",paraId:57,tocIndex:41},{value:"Selector",paraId:57,tocIndex:41},{value:" Same.",paraId:57,tocIndex:41},{value:"with ",paraId:58,tocIndex:42},{value:"ImageUpload",paraId:58,tocIndex:42},{value:" Same.",paraId:58,tocIndex:42},{value:"createForm",paraId:59,tocIndex:43},{value:" is a ",paraId:59,tocIndex:43},{value:"mixin",paraId:59,tocIndex:43},{value:"for custom form items.",paraId:59,tocIndex:43},{value:`import { createForm } from 'antd-mini/es/Form/form';

Component({
  mixins: [createForm()],
  methods: {
    onChange(value) {
      this.emit('onChange', value);
    },
  },
});
`,paraId:60,tocIndex:43},{value:"createForm",paraId:61,tocIndex:43},{value:" The following is added to the component:",paraId:61,tocIndex:43},{value:"data",paraId:62,tocIndex:43},{value:"{\n  formData: {\n    value: undefined, // \u8868\u5355\u9879\u7684\u503C\n    status: 'default', // \u8868\u5355\u9879\u7684Calibration\u72B6\u6001\uFF0C\u5305\u62EC `default`\u3001`success`\u3001`error`\u3001`validating`\n    errors: [], // \u9519\u8BEF\u4FE1\u606F\n  },\n}\n",paraId:63,tocIndex:43},{value:"methods",paraId:64,tocIndex:43},{value:"// \u4FEE\u6539\u8868\u5355\u9879\u65F6\uFF0C\u9700\u8C03\u7528 `emit` \u65B9\u6CD5\u3002Custom Form Item\u7EC4\u4EF6In\u503C\u6539\u53D8\u65F6\uFF0C\u5E94\u8BE5\u8C03\u7528\u6B64\u65B9\u6CD5\u3002\nfunction emit(trigger: 'onChange' | 'onBlur' | 'onFocus', value: any): void;\n",paraId:65,tocIndex:43},{value:"For more methods, please refer ",paraId:66,tocIndex:43},{value:"createForm",paraId:66,tocIndex:43},{value:" Method-related documentation. Use ",paraId:66,tocIndex:43},{value:"formData",paraId:66,tocIndex:43},{value:" and ",paraId:66,tocIndex:43},{value:"emit",paraId:66,tocIndex:43},{value:" The implementation of the custom form item is complete.",paraId:66,tocIndex:43},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:67,tocIndex:45},{value:"Variable name",paraId:68,tocIndex:45},{value:"Default Value",paraId:68,tocIndex:45},{value:"Dark Mode Default",paraId:68,tocIndex:45},{value:"Remarks",paraId:68,tocIndex:45},{value:"--form-text-color",paraId:68,tocIndex:45},{value:"#cccccc",paraId:68,tocIndex:45},{value:"#474747",paraId:68,tocIndex:45},{value:"Form text color",paraId:68,tocIndex:45},{value:"--form-item-color",paraId:68,tocIndex:45},{value:"#666666",paraId:68,tocIndex:45},{value:"#808080",paraId:68,tocIndex:45},{value:"Form Item Color",paraId:68,tocIndex:45},{value:"--form-item-bg",paraId:68,tocIndex:45},{value:"#ffffff",paraId:68,tocIndex:45},{value:"#1a1a1a",paraId:68,tocIndex:45},{value:"Form Item Background Color",paraId:68,tocIndex:45},{value:"--form-error-color",paraId:68,tocIndex:45},{value:"#ff3141",paraId:68,tocIndex:45},{value:"#ff4a58",paraId:68,tocIndex:45},{value:"Form Error Color",paraId:68,tocIndex:45},{value:"--form-extra-color",paraId:68,tocIndex:45},{value:"#999999",paraId:68,tocIndex:45},{value:"#616161",paraId:68,tocIndex:45},{value:"Form extra information color",paraId:68,tocIndex:45},{value:"--form-asterisk-color",paraId:68,tocIndex:45},{value:"#ff3b30",paraId:68,tocIndex:45},{value:"#ff3b30",paraId:68,tocIndex:45},{value:"Form asterisk color",paraId:68,tocIndex:45}]}}]);
