Page({
  data: {
    rightOperateList: [{
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
    expandOperateList: [{
      left: [{
        type: 'primary',
        text: '顶置',
      }],
      content: '向右滑动',
      brief: '备注信息',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 4,
    }, {
      right: [{
        type: 'danger',
        text: '删除',
      }],
      left: [{
        type: 'primary',
        text: '顶置',
      }], 
      content: '双侧滑动',
      brief: '备注信息',
      autoClose: false,
      speed: 200,
      supportClear: true,
      id: 5,
    }],
  },
  onItemClick(e) {
    my.alert({
      content: `dada__${e.currentTarget.dataset.content}`,
    });
  },
  onRightOperateButtonClick(btnIndex, btnText) {
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
  onLeftOperateButtonClick(btnIndex, btnText) {
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
  }
});

