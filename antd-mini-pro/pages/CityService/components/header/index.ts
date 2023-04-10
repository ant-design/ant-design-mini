Component({
  props: {
    placeholder: '',
    onChangeCity(info) {},
  },
  data: {
    statusBarHeight: 91,
  },
  didMount() {
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          statusBarHeight: res.statusBarHeight + res.titleBarHeight,
        });
      },
    });
  },
  methods: {
    handleChooseCity() {
      my.chooseCity({
        success: (res) => {
          this.props.onChangeCity({
            cityName: res.city,
            cityCode: res.adCode,
          });
        },
      });
    },
    handleSearch() {
      my.alert({ content: `搜索${this.props.placeholder}` });
    },
    handleGoSearch() {
      my.navigateTo({
        url: '/pages/search/index',
      });
    },
  },
});
