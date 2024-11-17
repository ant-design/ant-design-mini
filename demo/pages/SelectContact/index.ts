import { contacts, recommendUserInfos } from './contact';

Page({
  data: {
    recommendContactsList: recommendUserInfos,
    allContactsList: contacts,
  },
  onLoad: () => {
    // Android 必须设置 canPullDown 为 false，否则滚动会有问题
    my.setCanPullDown({
      canPullDown: false,
    });
  },
  onSelect: (user) => {
    console.log('user', user);
    my.confirm({
      content: JSON.stringify(user),
    });
  },
  onDeleteRecommendUserError(error) {
    console.error('onDeleteRecommendUserError', error);
  },
  onDeleteRecommendUser(userInfo) {
    console.log('onDeleteRecommendUser', userInfo);
  },
});
