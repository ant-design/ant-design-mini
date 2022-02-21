Page({
  data: {
    multiList: [{
      left: [
        {
          type: 'default',
          text: '新增一个',
        }, {
          type: 'primary',
          text: '取消收藏',
        },
        {
          type: 'danger',
          text: '删除',
        }],
      content: '仅左侧按钮+删除消失',
      autoClose: false,
      speed: 100,
      supportClear: true,
      id: 1,
    }, {
      right: [{
        type: 'default',
        text: '新增一个',
      }, {
        type: 'primary',
        text: '取消收藏',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '仅右侧按钮+删除消失',
      autoClose: false,
      speed: 20,
      supportClear: true,
      id: 2,
    }, {
      right: [{
        type: 'danger',
        text: '删除',
      }],
      left: [{
        type: 'primary',
        text: '取消收藏',
      }],
      content: '左右按钮各一个+删除消失',
      autoClose: true,
      speed: 15,
      supportClear: true,
      id: 3,
    }, {
      right: [{
        type: 'primary',
        text: '收藏取消',
      }, {
        type: 'danger',
        text: '删除',
      }],
      left: [{
        type: 'primary',
        text: '收藏取消',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '左右按钮各二个+删除不消失+不自动恢复',
      autoClose: false,
      speed: 10,
      supportClear: false,
      id: 4,
    }, {
      right: [
        {
          type: 'default',
          text: '免打扰',
        }, {
          type: 'primary',
          text: '取消关注',
        }, {
          type: 'danger',
          text: '删除',
        },
        {
          type: 'danger',
          text: '清空',
        },
      ],
      left: [
        {
          type: 'default',
          text: '免打扰',
        }, {
          type: 'primary',
          text: '收藏',
        }, {
          type: 'danger',
          text: '删除',
        }],
      content: '左右按钮各三个+删除不消失+自动恢复',
      autoClose: true,
      speed: 1,
      supportClear: false,
      id: 5,
    }],
    singleListDelete: [{
      right: [{
        type: 'default',
        text: '新增一个',
      }, {
        type: 'primary',
        text: '取消收藏',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '仅右侧按钮+删除消失',
      autoClose: false,
      speed: 20,
      supportClear: true,
      id: 6,
    }],
    singleList: [{
      right: [{
        type: 'default',
        text: '新增一个',
      }, {
        type: 'primary',
        text: '取消收藏',
      }, {
        type: 'danger',
        text: '删除',
      }],
      content: '仅右侧按钮+删除不消失',
      autoClose: false,
      speed: 20,
      supportClear: true,
      id: 7,
    }],
  },
  onItemClick(e) {
    my.alert({
      content: `dada__${e.currentTarget.dataset.content}`,
    });
  },
  onMultiRightItemClick(btnIndex, btnText, btnType, extraInfo) {
    const { sequence, supportClear } = extraInfo;
    my.confirm({
      title: '温馨提示',
      content: `确认${btnText}?`,
      confirmButtonText: btnText,
      cancelButtonText: '取消',
      success: (result) => {
        if (!result.confirm) return;
        if (btnType === 'danger' && sequence && supportClear) {
          const newList = this.data.multiList.filter((item, index) => index !== sequence - 1);
          this.setData({
            multiList: newList,
          });
        }
      },
    });
  },
  onMultiLeftItemClick(btnIndex, btnText, btnType, extraInfo) {
    const { sequence, supportClear } = extraInfo;
    my.confirm({
      title: '温馨提示',
      content: `确认${btnText}?`,
      confirmButtonText: btnText,
      cancelButtonText: '取消',
      success: (result) => {
        if (!result.confirm) return;
        if (btnType === 'danger' && sequence && supportClear) {
          const newList = this.data.multiList.filter((item, index) => index !== sequence - 1);
          this.setData({
            multiList: newList,
          }, () => {
            my.alert({
              title: `${btnText}成功`,
            });
          });
        }
      },
    });
  },
  onSingleRightItemClickDelete(btnIndex, btnText, btnType, extraInfo) {
    const { supportClear } = extraInfo;
    my.confirm({
      title: '温馨提示',
      content: `确认${btnText}?`,
      confirmButtonText: btnText,
      cancelButtonText: '取消',
      success: (result) => {
        if (!result.confirm) return;
        if (btnType === 'danger' && supportClear) {
          this.setData({
            singleListDelete: [],
          }, () => {
            my.alert({
              title: `${btnText}成功`,
            });
          });
        }
      },
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
