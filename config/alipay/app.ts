App({
  onLaunch(launchParams: any) {
    ac.call('navigateTo', {
      url: 'pages/index/index',
    });
  },
  onRelaunch(launchParams: any) {},
  onShow() {
    // App 进入前台运行
  },
  onHide() {
    // App 进入后台暂停运行
  },
  onDestroy() {
    // App 销毁
  },
});
