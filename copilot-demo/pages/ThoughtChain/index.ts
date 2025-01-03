//@ts-ignore

Page({
  data: {
    basicList: [
      {
        status: 'success',
        title: '理解问题',
      },
      {
        status: 'fail',
        title: '没有在本地找到结果',
      },
      {
        status: 'loading',
        title: '在互联网上搜索问题',
      },
    ],
    secondLevelList: [
      {
        status: 'success',
        title: '理解问题',
        content: '解析语法结构',
        contentType: 'text',
      },
      {
        status: 'loading',
        title: '搜索问题',
        list: [
          {
            status: 'success',
            title: '理解问题',
          },
          {
            status: 'success',
            title: '联网搜索',
            content: ['当前主流电脑配置', '黑神话悟空所需显卡', '3A游戏'],
            contentType: 'tag',
          },
          {
            status: 'success',
            title: '已根据搜索结果精选3篇资料',
            contentType: 'link',
            content: [
              '1. 黑神话悟空介绍',
              '2. 对于1080p显示器，4060ti和4060该选哪个？',
              '3. 黑神话悟空官方建议配置',
            ],
          },
          {
            status: 'loading',
            title: '联想更多结果',
          },
        ],
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
        title: '搜索问题',
        list: [
          {
            status: 'success',
            title:
              '搜索中',
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
