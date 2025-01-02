//@ts-ignore

Page({
  data: {
    basicList: [
      {
        status: 'success',
        title: '理解问题',
      },
      {
        status: 'loading',
        title: '搜索问题',
      },
    ],
    customList: [
      {
        status: 'success',
        title: '理解问题',
        content: '这是自定义样式的内容',
        contentType: 'customType',
      },
      {
        status: 'success',
        title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
        content: [
          '1. 这是处理内容结果',
          '2. 步骤2，这是一条很长的步骤，所以需要进行换行。需要进行换行',
          '3. 结束搜索',
        ],
        contentType: 'text',
      },
      {
        status: 'success',
        title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
        content: ['1. 这是处理内容结果', '2. 步骤2', '3. 结束搜索'],
        contentType: 'link',
      },
      {
        status: 'success',
        title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
        content: ['这是处理内容结果', '步骤2', '结束搜索'],
        contentType: 'tag',
      },
      {
        status: 'success',
        title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
        list: [
          {
            status: 'loading',
            title: '理解问题',
            content: '这是处理内容结果',
            contentType: 'text',
          },
          {
            status: 'fail',
            title:
              '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
            content: [
              '1. 这是处理内容结果',
              '2. 步骤2，这是一条很长的步骤，所以需要进行换行。需要进行换行',
              '3. 结束搜索',
            ],
            contentType: 'text',
          },
          {
            status: 'success',
            title:
              '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
            content: ['1. 这是处理内容结果', '2. 步骤2', '3. 结束搜索'],
            contentType: 'link',
          },
          {
            status: 'success',
            title:
              '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
            content: ['这是处理内容结果', '步骤2', '结束搜索'],
            contentType: 'tag',
          },
          {
            status: 'success',
            title:
              '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
            content: '子节点中的自定义内容',
            contentType: 'customType',
          },
        ],
      },
    ],
  },
  onContentItemTap(e) {
    const { content } = e.target.dataset || {};
    my.alert({
      content: `点击了内容「${content}」`,
    });
  },
});
