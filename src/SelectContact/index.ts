import { Component } from '../_util/simply';
import {
  IContactInfo,
  IContactUserInfo,
  SelectContactDefaultProps,
} from './props';
import { AlphabetMap, getFirstLetterInMap, getId } from './util';

Component(
  SelectContactDefaultProps,
  {
    init() {
      const { platform } = my.getSystemInfoSync();

      this.setData({
        isIOS: /ios/gi.test(platform),
      });

      try {
        const recommendContactsList = this.handleRecommendContacts(
          this.props.recommendContactsList
        );
        /** 全部联系人 */
        const allContactsList = this.handleAllContacts(
          this.props.allContactsList
        );

        /** 展示的联系人列表 */
        const contactsList = recommendContactsList.concat(allContactsList);

        /** 字母表 */
        const alphabet = this.generateAlphabet(contactsList);

        this.setData({
          recommendContactsList,
          allContactsList,
          alphabet,
          sessionId: this.props.sessionId,
        });
      } catch (error) {
        this.props.onError(error);
        this.setData({
          contactListEmpty: true,
        });
      } finally {
        this.setData({
          loading: false,
        });
      }
    },
    /** 搜索栏输入 */
    onSearchInput(searchValue: string) {
      // 无搜索内容时
      if (!searchValue) {
        this.setData({
          searchValue: '',
          searchList: [],
          searchStatus: 'normal',
        });
      } else {
        this.setData({
          searchValue,
          searchStatus: 'loading',
          searchList: [],
        });
        const { userInfos = [] } = this.props.searchContacts({
          keyword: searchValue,
        });

        // 将 em 标签包含的内容高亮显示
        userInfos.forEach((item) => {
          item.nodes = [];
          item.displayName
            .replace(/<\/em>/g, '<em>')
            .split('<em>')
            .forEach((str, index) => {
              if (index % 2) {
                item.nodes.push({
                  text: str,
                  className: 'display-name__light',
                });
              } else {
                item.nodes.push({
                  text: str,
                  className: 'display-name__normal',
                });
              }
            });
          item.displayName = item.displayName
            .replace(/<\/em>/g, '<em>')
            .replace(/<em>/g, '');
        });

        this.setData({
          searchList: userInfos,
          searchStatus: userInfos.length > 0 ? 'normal' : 'empty',
        });
      }
    },

    /** 清空输入框内容 */
    onSearchClear() {
      this.setData({
        searchValue: '',
        searchList: [],
        searchStatus: 'normal',
      });
    },

    /** 输入框聚焦 */
    onSearchFocus() {
      this.setData({
        showSearch: true,
      });
    },

    /** 搜索栏返回 */
    onSearchCancel() {
      this.setData({
        searchValue: '',
        showSearch: false,
        searchStatus: 'normal',
        searchList: [],
      });
    },

    /** 联系人点击事件 */
    onItemClick(e) {
      const { item, personSource } = e.target.dataset;

      this.props.onSelect({
        userInfo: item,
        personSource,
        sessionId: this.data.sessionId,
      });
    },

    /** 处理 推荐联系人 数据 */
    handleRecommendContacts(recommendUserInfos: IContactInfo[]) {
      const recommendContactsList: IContactUserInfo[] =
        recommendUserInfos.length === 0
          ? []
          : [
              {
                name: '推荐',
                value: recommendUserInfos,
                className: 'first-level',
                personSource: 'recommend',
              },
            ];

      return recommendContactsList;
    },

    /** 处理 全部联系人 数据 */
    handleAllContacts(contacts: IContactInfo[]) {
      if (contacts.length === 0) {
        return [];
      }

      const allContactsList: IContactUserInfo[] = [];
      const allContactsTempKey = [];

      contacts.forEach((item) => {
        const firstLetter = getFirstLetterInMap(item.displayName);

        if (allContactsTempKey.indexOf(firstLetter) === -1) {
          allContactsList.push({
            name: firstLetter,
            value: [item],
            personSource: 'all',
          });
          allContactsTempKey.push(firstLetter);
        } else {
          for (let index = 0; index < allContactsList.length; index++) {
            if (allContactsList[index].name === firstLetter) {
              allContactsList[index].value.push(item);
            }
          }
        }
      });
      allContactsList.sort((a, b) =>
        AlphabetMap[a.name] > AlphabetMap[b.name] ? 1 : -1
      );
      allContactsList.unshift({
        name: '全部联系人',
        value: [],
        className: 'first-level',
        personSource: 'all',
      });

      return allContactsList;
    },

    /** 根据 展示的联系人列表 生成 字母表 */
    generateAlphabet(contactsList: IContactUserInfo[]) {
      const alphabet: string[] = [];
      contactsList.forEach((item) => {
        if (item.name === '推荐') {
          alphabet.push('推');
        } else if (item.name !== '全部联系人') {
          alphabet.push(item.name);
        }
      });

      return alphabet;
    },

    /** 字母表滚动 */
    onScrollIntoView(alphabetItem: string) {
      const toView = getId(alphabetItem);

      this.setData({ toView });
    },

    onSwipeEnd(key) {
      if (key === this.data.currentSelectedDeleteUID) {
        /** 左滑功能点击后会再次执行onSwipeEnd */
        this.setData({ currentSelectedDeleteUID: null });
      } else {
        this.setData({ currentSelectedDeleteUID: key });
      }
    },

    onSwipeStart() {
      this.setData({ currentSelectedDeleteUID: null });
    },
    handleSearch() {
      console.log(this.data.searchable, '有点奇怪');
      this.setData({ searchable: true });
    },
    handleCancelSearch() {
      this.setData({ searchable: false });
    },
  },
  {
    /** 推荐联系人 */
    recommendContactsList: [],

    /** 全部联系人 */
    allContactsList: [],

    /** 字母表 */
    alphabet: [],

    /** 滚动到的 Element id */
    toView: '',

    /** 联系人为空 */
    contactListEmpty: false,

    /** 数据加载中 */
    loading: true,

    /** 输入框占位文案 */
    placeholder: '输入手机号、电子邮箱、好友姓名查找',

    /** 是否展示搜索页 */
    showSearch: false,

    /** 搜索关键词 */
    searchValue: '',

    /** 搜索页状态 */
    searchStatus: 'normal',

    /** 搜索结果 */
    searchList: [],

    /**
     * 是否是 IOS
     *
     * 由于 Andriod 对于 sticky 的兼容性太差（会覆盖右侧索引表），暂时只开放 IOS 的 sticky
     */
    isIOS: false,

    /** 推荐好友-左滑功能配置/ */
    right: [
      {
        type: 'delete',
        text: '取消推荐',
        bgColor: '#FF2B00',
        color: '#fff',
      },
    ],

    /** 当前选中删除推荐好友UID */
    currentSelectedDeleteUID: '',

    /** 当前请求会话ID */
    sessionId: '',
    /** 全局删除推荐好友标识 */
    deleteRecommendUserFlag: false,
    /** 是否正在搜索 */
    searchable: false
  },
  [],
  {
    onInit() {
      this.init();
    },
  }
);
