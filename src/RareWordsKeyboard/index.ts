import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, triggerEvent, triggerEventOnly } from '../_util/simply';
import { PINYIN_MAP } from './constants';
import { RareWordsKeyboardProps } from './props';
import { formatZDatas, loadFontFace, matchWordsRecommend } from './utils';
import { ZDATAS } from './zdatas';

const wordsData = formatZDatas(ZDATAS.datas);

Component({
  props: RareWordsKeyboardProps,
  data: {
    loading: false,
    inputValue: [], // 已输入的字符数组
    displayStr: '', // 已输入的字符串
    matchWordsList: [], // 候选字列表
    showMoreWords: false, // 是否展示更多候选字
    pinyinMaps: PINYIN_MAP, // 拼音键盘
    maxDisplayNum: 0, // 一行最多展示的字数
    showErrorPage: false, // 是否展示错误页
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    async getBoundingClientRect(query: string) {
      return await getInstanceBoundingClientRect(this.getInstance(), query);
    },
    // 隐藏键盘，失去焦点
    handleHide() {
      this.setData({
        inputValue: [],
        matchWordsList: [],
        displayStr: '',
        showMoreWords: false,
      });
      triggerEventOnly(this, 'close');
    },

    // 点击键盘key值
    handleKeyClick(e) {
      if (this.data.loading) return;
      const { value = '' } = e.currentTarget.dataset;
      if (!value) return;
      const inputValue = [...this.data.inputValue, value];
      this.setData({
        inputValue: [...inputValue],
        ...this.computeMatchWords(inputValue),
      });
    },

    // 点击删除
    handleDelete() {
      const inputValue = [...this.data.inputValue];
      if (this.data.inputValue.length === 0) return;
      inputValue.pop();
      this.setData({
        inputValue: [...inputValue],
        ...this.computeMatchWords(inputValue),
      });
    },

    // 计算展示值和候选字列表
    computeMatchWords(inputValue) {
      const displayStr = Array.isArray(inputValue)
        ? inputValue.join('')
        : inputValue;
      const curMatchWords = matchWordsRecommend(wordsData, displayStr);
      return {
        displayStr,
        matchWordsList: curMatchWords,
      };
    },

    // 点击查看更多
    hanleLookMore() {
      if (this.data.matchWordsList.length <= this.data.maxDisplayNum) {
        this.handleHide();
        return;
      }
      this.setData({
        showMoreWords: !this.data.showMoreWords,
      });
    },

    // 计算每行可以展示的最大字数
    async computeMaxDisplayNum() {
      const [singleWords, wordsWrap] = await Promise.all([
        this.getBoundingClientRect(
          '.ant-rare-words-keyboard-match_words_hidden'
        ),
        this.getBoundingClientRect(
          '.ant-rare-words-keyboard-match_words_inner'
        ),
      ]);
      if (!wordsWrap?.width || !singleWords?.width) return;
      const maxDisplayNumInOneLine = parseInt(
        (wordsWrap?.width / singleWords?.width).toString(),
        10
      );
      this.setData({ maxDisplayNum: maxDisplayNumInOneLine });
    },

    // 加载字体
    loadFont() {
      this.setData({
        loading: true,
      });
      loadFontFace()
        .then(() => {
          this.setData({ showErrorPage: false, loading: false });
        })
        .catch((err) => {
          this.setData({ showErrorPage: true, loading: false });
          triggerEvent(this, 'error', err);
        });
    },

    // 点击重试
    handleRetry() {
      this.loadFont();
    },

    handleWordClick(e) {
      const { value = '' } = e.currentTarget.dataset;
      if (!value) return;
      triggerEvent(this, 'change', value);
      this.handleHide();
    },
  },
  /// #if ALIPAY || BUNDLE2H
  didMount() {
    this.loadFont();
    this.computeMaxDisplayNum();
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.loadFont();
    this.computeMaxDisplayNum();
  },
  /// #endif
});
