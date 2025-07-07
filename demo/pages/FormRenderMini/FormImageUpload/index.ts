import { onSubmit } from '../../../../src/SolutionForm/index';

const onUpload = (file) => {
  return file.path;
};

Page({
  data: {
    schema: {
      formId: 'demo-image-upload',
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
          title: '内置组件 image-upload 的使用',
          type: 'object',
          widget: 'card',
          properties: {
            basicImageUpload: {
              title: '基础图片上传',
              type: 'array',
              widget: 'image-upload',
              required: true,
              props: {
                maxCount: 3,
                onUpload: (file) => onUpload(file),
                uploadText: '上传图片'
              }
            },
            singleImageUpload: {
              title: '单图上传',
              type: 'string',
              widget: 'image-upload',
              props: {
                maxCount: 1,
                onUpload: (file) => onUpload(file),
                uploadText: '上传单张图片'
              }
            },
            defaultImageUpload: {
              title: '默认图片',
              type: 'array',
              widget: 'image-upload',
              value: [
                {
                  url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
                }
              ],
              props: {
                maxCount: 2,
                onUpload: (file) => onUpload(file),
                uploadText: '上传图片'
              }
            },
            disabledImageUpload: {
              title: '禁用状态',
              type: 'array',
              widget: 'image-upload',
              value: [
                {
                  url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
                }
              ],
              props: {
                maxCount: 3,
                onUpload: (file) => onUpload(file),
                uploadText: '上传图片',
                disabled: true
              }
            },
            customImageUpload: {
              title: '自定义样式',
              type: 'array',
              widget: 'image-upload',
              props: {
                maxCount: 3,
                uploadText: '上传图片',
                onUpload: (file) => onUpload(file),
                className: 'custom-image-upload'
              }
            },
            limitImageUpload: {
              title: '限制上传数量',
              type: 'array',
              widget: 'image-upload',
              props: {
                maxCount: 3,
                onUpload: (file) => onUpload(file),
                uploadText: '最多上传3张图片'
              }
            },
            previewImageUpload: {
              title: '预览模式',
              type: 'array',
              widget: 'image-upload',
              value: [
                {
                  url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
                },
                {
                  url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kStORbDQxwMAAAAAAAAAAAAAARQnAQ',
                }
              ],
              props: {
                maxCount: 2,
                uploadText: '上传图片',
                onUpload: (file) => onUpload(file),
                onPreview: (file) => {
                  my.previewImage({
                    urls: [file.url]
                  });
                }
              }
            }
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