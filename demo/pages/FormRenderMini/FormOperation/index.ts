import { get } from 'lodash';

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
        footer: [
          {
            text: '清空配置信息',
            type: 'default',
          },
          {
            text: '确认提交',
            type: 'primary',
          },
        ],
        protocols,
        onProtocolTap: (item) => {
          my.alert({
            content: `点击了协议${item.name}`
          });
        },
      },
      properties: {
        basicInfo: {
          title: '基本信息',
          type: 'object',
          properties: {
            showProtocolCheck: {
              title: '协议check展示',
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
              required: true,
              value: true,
              widget: 'switch',
            },
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
            }
          }
        }
      }
    }
  },
  onTapOperation(e) {
    console.log('操作按钮点击', e);
    const { type } = e.detail;
    if (type === 'submit') {
      my.showToast({
        content: '提交成功'
      });
    } else if (type === 'cancel') {
      my.navigateBack();
    }
  },
  onValueChange(changeFormData) {
    console.log('<<<changeFormData', changeFormData);
    const {
      showProtocol,
      ...others
    } = changeFormData.basicInfo || {};
    if (showProtocol !== undefined) {
      this.setData({
        schema: {
          ...this.data.schema,
          operation: {
            ...get(this.data, 'schema.operation', {}),
            protocols: showProtocol ? protocols : [],
          },
        }
      });
    } else {
      this.setData({
        schema: {
          ...this.data.schema,
          operation: {
            ...get(this.data, 'schema.operation', {}),
            ...others,
          },
        }
      });
    }
  }
}); 