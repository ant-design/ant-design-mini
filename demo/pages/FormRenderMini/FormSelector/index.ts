import { onSubmit } from '../../../../src/SolutionForm/index';

Page({
  data: {
    schema: {
      type: 'object',
      displayType: 'row',
      operation: {
        flex: true,
        fixedFooter: true,
        footer: [
          {
            text: '提交',
            type: 'primary',
          },
        ],
      },
      properties: {
        card: {
          title: '内置组件 selector 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicSelector: {
              title: '基础选择',
              type: 'string',
              widget: 'selector',
              required: true,
              props: {
                options: [
                  { text: '选项1', value: '1' },
                  { text: '选项2', value: '2' }
                ],
                placeholder: '请选择'
              }
            },
            defaultSelector: {
              title: '默认值',
              displayType: 'column',
              type: 'string',
              widget: 'selector',
              value: '2',
              props: {
                options: [
                  { text: '选项一', subText: '描述文案一', value: '1' },
                  { text: '选项二', subText: '描述文案二', value: '2' },
                  { text: '选项三', subText: '描述文案三', value: '3' },
                ],
              },
              extra: '表单项 column 布局',
            },
            multipleSelector: {
              title: '多选',
              type: 'array',
              widget: 'selector',
              props: {
                options: [
                  { text: '选项1', value: '1' },
                  { text: '选项2', value: '2' },
                  { text: '选项3', value: '3', disabled: true }
                ],
                multiple: true,
              },
              extra: 'selector选项部分禁用，禁用选项3',
            },
            multipleMaxSelector: {
              title: '多选上限',
              type: 'array',
              widget: 'selector',
              props: {
                maxSelectedCount: 2,
                options: [
                  { text: '选项1', value: '1' },
                  { text: '选项2', value: '2' },
                  { text: '选项3', value: '3' }
                ],
                onSelectMax: () => {
                  my.alert({
                    content: '最多选择2个选项'
                  });
                },
                multiple: true,
              }
            },
            disabledSelector: {
              title: '禁用状态',
              type: 'string',
              widget: 'selector',
              value: '2',
              props: {
                options: [
                  { text: '选项1', value: '1' },
                  { text: '选项2', value: '2' },
                  { text: '选项3', value: '3' }
                ],
                disabled: true
              },
              extra: 'selector选项全部禁用',
            },
            customSelector: {
              title: '样式设置',
              type: 'string',
              widget: 'selector',
              props: {
                options: [
                  { text: '选项1', value: '1' },
                  { text: '选项2', value: '2' },
                ],
                className: 'custom-selector'
              },
              extra: '自定义className，border设置成4，border-radius设置成16,同时设置了选择块的宽度',
            },
          }
        }
      }
    }
  },
  
  async onTapOperation(e) {
    const { errors } = await onSubmit();
    if (errors.length > 0) {
      return;
    }
    my.alert({ content: `点击了按钮「${e.text}」` });
  },
}); 