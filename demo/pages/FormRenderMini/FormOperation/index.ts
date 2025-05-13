import { get, pick } from 'lodash';
import { onSubmit, resetFieldsValue } from '../../../../src/SolutionForm';

const protocols = [
  {
    name: '《用户协议》',
    url: '/pages/sdk/result/scene/material/index',
  },
  {
    name: '《隐私政策》',
    url: '/pages/sdk/result/scene/material/index',
  },
];

const footer = [
  {
    text: '清空配置信息',
    type: 'default',
    id: 'clear',
  },
  {
    text: '确认提交',
    type: 'primary',
    disabled: false,
    id: 'submit',
  },
];

const disableFooter = [
  {
    text: '清空配置信息',
    type: 'default',
    id: 'clear',
  },
  {
    text: '确认提交',
    type: 'primary',
    disabled: true,
    id: 'submit',
  },
]

Page({
  data: {
    schema: {
      formId: 'demo-operation',
      type: 'object',
      radius: false,
      displayType: 'row',
      operation: {
        flex: true,
        fixedFooter: true,
        protocolPrefix: '我已阅读并同意',
        showProtocolCheck: true,
        footer,
        protocols,
        onProtocolTap: (item) => {
          my.alert({
            content: `点击了协议${item.name}`
          });
        },
        onActionTap: async (item) => {
          const { id } = item || {};
          if (id === 'submit') {
            try {
              const res = await onSubmit();
              console.log('<<<<res', res);
              
            } catch (error) {
              console.log('<<<error', error);
            }
          } else if (id === 'clear') {
            resetFieldsValue();
          }
        },
        onDisabledTap: (...arg) => {
          console.log('onDisabledTap', ...arg);
        },
        onProtocolChange: (checked) => {
          my.alert({
            content: checked ? '勾选了协议' : '取消协议选择',
          });
        },
        onFooterFirstAppear() {
          console.log('footer组件第一次展示');
        },
      },
      properties: {
        basicInfo: {
          title: '基本信息',
          type: 'object',
          properties: {
            flex: {
              title: '按钮布局',
              type: 'string',
              required: true,
              widget: 'selector',
              value: true,
              props: {
                options: [
                  { text: 'row', value: true },
                  { text: 'column', value: false },
                ],
              },
            },
            showProtocolCheck: {
              title: '协议check展示',
              type: 'boolean',
              required: true,
              value: false,
              widget: 'selector',
              props: {
                options: [
                  { text: '展示', value: true },
                  { text: '不展示', value: false },
                ],
              },
            },
            showProtocol: {
              title: '协议展示',
              type: 'boolean',
              required: true,
              value: true,
              widget: 'selector',
              props: {
                options: [
                  { text: '展示', value: true },
                  { text: '不展示', value: false },
                ],
              },
            },
            fixedFooter: {
              title: '按钮是否吸底',
              type: 'boolean',
              value: true,
              widget: 'switch',
            },
            disableSubmitButton: {
              title: '提交按钮置灰',
              type: 'boolean',
              value: false,
              widget: 'switch',
            },
          }
        }
      }
    }
  },
  onValueChange(_, formData) {
    const realShowProtocol = get(formData, 'basicInfo.showProtocol');
    this.setData({
      schema: {
        ...this.data.schema,
        operation: {
          ...get(this.data, 'schema.operation', {}),
          showProtocolCheck: get(formData.basicInfo || {}, 'showProtocolCheck'),
          fixedFooter: get(formData.basicInfo || {}, 'fixedFooter'),
          flex: get(formData.basicInfo || {}, 'flex'),
          protocols: realShowProtocol ? protocols : [],
          footer: get(formData, 'basicInfo.disableSubmitButton') ? disableFooter : footer,
        },
      }
    });
  }
}); 