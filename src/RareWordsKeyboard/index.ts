import { PINYIN_MAP } from './constants';
import { RareWordsKeyboardProps, IRareWordsKeyboardProps } from './props';
import { formatZDatas, loadFontFace, matchWordsRecommend } from './utils';
import { ZDATAS } from './zdatas';
import '../_util/assert-component2';
import { useEffect, useEvent, useState } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { mountComponent } from '../_util/component';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';

const wordsData = formatZDatas(ZDATAS.datas);

const RareWordsKeyboard = (props: IRareWordsKeyboardProps) => {
  const [fontState, setFontState] = useState({
    showErrorPage: false, // 是否展示错误页
    loading: false,
  });
  const [maxDisplayNum, setMaxDisplayNum] = useState(0);
  const [keyboardState, setKeyboardState] = useState({
    inputValue: [], // 已输入的字符数组
    displayStr: '', // 已输入的字符串
    matchWordsList: [], // 候选字列表
    showMoreWords: false, // 是否展示更多候选字
  });

  const { triggerEvent, triggerEventOnly } = useComponentEvent(props);

  const handleHide = useStableCallback(() => {
    setKeyboardState({
      inputValue: [],
      matchWordsList: [],
      displayStr: '',
      showMoreWords: false,
    });
    triggerEventOnly('close');
  });

  // 计算展示值和候选字列表
  function computeMatchWords(inputValue) {
    const displayStr = Array.isArray(inputValue)
      ? inputValue.join('')
      : inputValue;
    const curMatchWords = matchWordsRecommend(wordsData, displayStr);
    return {
      displayStr,
      matchWordsList: curMatchWords,
    };
  }
  function loadFont() {
    setFontState((pre) => {
      return {
        ...pre,
        loading: true,
      };
    });
    loadFontFace()
      .then(() => {
        setFontState({ showErrorPage: false, loading: false });
      })
      .catch((err) => {
        setFontState({ showErrorPage: true, loading: false });
        triggerEvent('error', err);
      });
  }

  const { getBoundingClientRect } = useInstanceBoundingClientRect();
  async function computeMaxDisplayNum() {
    const [singleWords, wordsWrap] = await Promise.all([
      getBoundingClientRect('.ant-rare-words-keyboard-match_words_hidden'),
      getBoundingClientRect('.ant-rare-words-keyboard-match_words_inner'),
    ]);
    if (!wordsWrap?.width || !singleWords?.width) return;
    const maxDisplayNumInOneLine = parseInt(
      (wordsWrap?.width / singleWords?.width).toString(),
      10
    );
    setMaxDisplayNum(maxDisplayNumInOneLine);
  }

  useEffect(() => {
    loadFont();
    computeMaxDisplayNum();
  }, []);

  useEvent('handleRetry', () => {
    loadFont();
  });

  useEvent('handleWordClick', (e) => {
    const { value = '' } = e.currentTarget.dataset;
    if (!value) return;
    triggerEvent('change', value);
    handleHide();
  });

  useEvent('hanleLookMore', () => {
    if (keyboardState.matchWordsList.length <= maxDisplayNum) {
      handleHide();
      return;
    }
    setKeyboardState((old) => {
      return {
        ...old,
        showMoreWords: !old.showMoreWords,
      };
    });
  });

  // 隐藏键盘，失去焦点
  useEvent('handleHide', () => {
    handleHide();
  });

  // 点击键盘key值
  useEvent('handleKeyClick', (e) => {
    if (fontState.loading) {
      return;
    }
    const { value = '' } = e.target.dataset;
    if (!value) {
      return;
    }

    setKeyboardState((old) => {
      const inputValue = [...old.inputValue, value];
      return {
        ...old,
        inputValue,
        ...computeMatchWords(inputValue),
      };
    });
  });

  // 点击删除
  useEvent('handleDelete', () => {
    if (keyboardState.inputValue.length === 0) {
      return;
    }
    setKeyboardState((old) => {
      const inputValue = [...old.inputValue];
      inputValue.pop();
      return {
        ...old,
        inputValue: [...inputValue],
        ...computeMatchWords(inputValue),
      };
    });
  });

  return {
    ...fontState,
    maxDisplayNum,
    ...keyboardState,
    pinyinMaps: PINYIN_MAP, // 拼音键盘
  };
};

mountComponent(RareWordsKeyboard, RareWordsKeyboardProps);
