Page({
  data: {
    visible: false,
    demo1: {
      value: 2.5, //当前数，受控值
      count: 5, //star 总数	
      allowClear: true, //是否允许再次点击后清除	
      allowHalf: true,//是否允许半选	
      readOnly: false, //只读
    },
    demo2: {
      value: 4, //当前数，受控值
    },
    demo3: {
      value: 1.5, //当前数，受控值
      allowHalf: true,//是否允许半选	
    },
    demo4: {
      value: 1, //当前数，受控值
      count: 3, //star 总数	
    },
    demo5: {
      value: 2, //当前数，受控值
      count: 4, //star 总数
      readOnly: true, //只读
    },
    demo6: {
      value: 2.5, //当前数，受控值
      iconType: 'SmileFill',//自定义图标类型
      activeColor: '#2a6bc7' //激活颜色
    },
    demo7: {
      value: 2.5, //当前数，受控值
      count: 6, //star 总数	
      allowClear: true, //是否允许再次点击后清除	
      allowHalf: true,//是否允许半选	
      readOnly: false, //只读
      iconType: 'FireFill',//自定义图标类型
      activeColor: 'red' //激活颜色
    },
  },
  onChange(e) {
    this.setData({
      'demo7.value': e,
      'visible': true,
    })
  },
  handleClose() {
    this.setData({
      'visible': false,
    });
  }
});
