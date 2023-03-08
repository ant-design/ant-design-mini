import { PINYIN_MAP } from './constants';
import { RareWordsKeyboardDefaultProps } from './props';
import { formatZDatas, loadFontFace, matchWordsRecommend } from './utils';
import { ZDATAS } from './zdatas';

const wordsData = formatZDatas(ZDATAS.datas);

Component({
  props: RareWordsKeyboardDefaultProps,
  data: {
    inputValue: [], // 已输入的字符数组
    displayStr: '', // 已输入的字符串
    matchWordsList: [], // 候选字列表
    showMoreWords: false, // 是否展示更多候选字
    pinyinMaps: PINYIN_MAP, // 拼音键盘
    maxDisplayNum: 0, // 一行最多展示的字数
    showErrorPage: false, // 是否展示错误页
  },
  didMount() {
    this.loadFont();
    this.computeMaxDisplayNum();
  },
  deriveDataFromProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      if (this.props.onShow) this.props.onShow();
    }
  },
  methods: {
    // 隐藏键盘，失去焦点
    onHide() {
      this.setData({ inputValue: [], matchWordsList: [], displayStr: '' });
      if (this.props.onClose) this.props.onClose();
    },

    // 点击键盘key值
    handleKeyClick(e) {
      const { value = '' } = e.target.dataset;
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
        this.onHide();
        return;
      }
      this.setData({
        showMoreWords: !this.data.showMoreWords,
      });
    },

    // 计算每行可以展示的最大字数
    computeMaxDisplayNum() {
      my.createSelectorQuery()
        .select('.ant-rare-words-keyboard-match_words_hidden')
        .boundingClientRect()
        .select('.ant-rare-words-keyboard-match_words_inner')
        .boundingClientRect()
        .exec((res) => {
          const [singleWords, wordsWrap] = res as any;
          if (!wordsWrap?.width || !singleWords?.width) return;
          const maxDisplayNumInOneLine = parseInt(
            (wordsWrap?.width / singleWords?.width).toString(),
            10
          );
          this.setData({ maxDisplayNum: maxDisplayNumInOneLine });
        });
    },

    // 加载字体
    loadFont() {
      loadFontFace()
        .catch((err) => {
          this.setData({ showErrorPage: true });
          if (this.props.onError) this.props.onError(err);
        });
    },

    // 点击重试
    handleRetry() {
      loadFontFace()
        .then(() => {
          this.setData({ showErrorPage: false });
        })
        .catch((err) => {
          if (this.props.onError) this.props.onError(err);
        });
    },

    handleWordClick(e) {
      const { value = '' } = e.target.dataset;
      if (!value) return;
      if (this.props.onChange) this.props.onChange(value);
      this.onHide();
    }
  },
});
