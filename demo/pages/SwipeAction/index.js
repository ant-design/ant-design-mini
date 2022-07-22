Page({
  data: {
    singleLabelList: [{
      right: [{
        type: 'danger',
        text: '删除',
      }],
      content: '单按钮',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 1,
    },
    {
      right: [{
        type: 'default',
        text: '取消关注',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '双按钮',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 2,
    },
    {
      right: [{
        type: 'primary',
        text: '免打扰',
      }, {
        type: 'default',
        text: '取消关注',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '三按钮',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 3,
    }],
    doubleLabelList: [{
      right: [{
        type: 'danger',
        text: '删除',
      }],
      content: '单按钮',
      brief: '备注信息',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 4,
    },
    {
      right: [{
        type: 'default',
        text: '取消关注',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '双按钮',
      brief: '备注信息',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 5,
    },
    {
      right: [{
        type: 'primary',
        text: '免打扰',
      }, {
        type: 'default',
        text: '取消关注',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '三按钮',
      brief: '备注信息',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 6,
    }],
  },
  onItemClick(e) {
    my.alert({
      content: `dada__${e.currentTarget.dataset.content}`,
    });
  },
  onSingleRightItemClick(btnIndex, btnText) {
    my.confirm({
      title: '温馨提示',
      content: `确认${btnText}?`,
      confirmButtonText: btnText,
      cancelButtonText: '取消',
      success: (result) => {
        if (!result.confirm) return;
        my.alert({
          title: `${btnText}成功`,
        });
      },
    });
  },
});

