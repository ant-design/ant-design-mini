import { IWordsData, IFilterType } from './props';
import { ZDATAS } from './zdatas';
import { loadFontFace as loadFontFaceJSAPI } from '../_util/jsapi/load-font-face';

/**
 * json转字符串
 * @param {string} data 需要转json的字符串
 * @return {object} json 字符串
 */
export function safeJSONparse(data: string): object {
  let result;
  try {
    result = JSON.parse(data);
  } catch {
    result = {};
  }
  return result || {};
}

/**
 * 判断数组是否为空
 */
export function isWordsDataEmpty(arr) {
  if (!arr) return true;
  if (!Array.isArray(arr)) return true;
  if (arr.length === 0) return true;
  // 数据合法性校验
  if (!arr?.[0]?.charId) return true;
  return false;
}

/**
 * 清除字符串里的数字
 */
export function clearNumberInStr(str: string) {
  return str.replace(/[0-9]/gi, '');
}

/**
 * 格式化字库数据
 * @param datas ZDatas 数据
 * @return {IWordsData} 字库
 */
export function formatZDatas(datas = []) {
  return datas.map((item) => {
    return {
      ...item,
      pinYinChars: item.pinYinChars.map((i) => i.char),
      splitChars: item.splitChars.map((i) => i.char),
    };
  });
}

/**
 * 候选字推荐序函数
 * 考虑两个维度，一个是输入值和生僻字的匹配程度，比如你输入YA 雅是完全匹配，炎是模糊匹配，排列的时候肯定”雅“在前面，
 * 如果除了”雅“还有一个”亚“，两个都是完全匹配，这个时候就看哪个字占比高，哪个就排在前面
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function matchWordsRecommend(
  wordsData: IWordsData = [],
  inputValue = '',
  filterKey: IFilterType = 'all'
) {
  return wordsSorter(
    wordsFilter(wordsData, inputValue, filterKey),
    inputValue,
    filterKey
  );
}

/**
 * 字库过滤，只挑选符合要求的候选字
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function wordsFilter(
  wordsData: IWordsData = [],
  inputValue = '',
  filterKey: IFilterType = 'all'
): IWordsData {
  // 字库数据为空降级为使用本地数据
  if (!wordsData || isWordsDataEmpty(wordsData))
    wordsData = formatZDatas(ZDATAS.datas);
  if (!inputValue) return [];

  switch (filterKey) {
    case 'all':
      /* eslint-disable-next-line no-case-declarations */
      const matchPinyinArr = filterByPinyin(wordsData, inputValue);
      /* eslint-disable-next-line no-case-declarations */
      const matchSplitArr = filterBySplitWord(wordsData, inputValue);
      return mergeMatchWordsArr(matchPinyinArr, matchSplitArr);
    case 'pinyin':
      return filterByPinyin(wordsData, inputValue);
    case 'split':
      return filterBySplitWord(wordsData, inputValue);
    default:
      return [];
      break;
  }
}

/**
 * 根据拼音过滤候选项
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function filterByPinyin(
  wordsData: IWordsData = [],
  inputValue = ''
): IWordsData {
  const keyTranslate = inputValue.toUpperCase();
  return wordsData.filter((item) => {
    const pinYinChars = item?.pinYinChars || [];
    if (pinYinChars.length === 0) return false;
    return (
      pinYinChars.filter((pinyinItem) => {
        return pinyinItem.indexOf(keyTranslate) > -1;
      }).length > 0
    );
  });
}

/**
 * 根据拆字过滤候选项
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function filterBySplitWord(
  wordsData: IWordsData = [],
  inputValue = ''
): IWordsData {
  return wordsData.filter((item) => {
    const splitChars = item.splitChars || [];
    if (splitChars.length === 0) {
      return false;
    }
    return (
      splitChars.filter((splitItem) => {
        return splitItem.indexOf(inputValue) > -1;
      }).length > 0
    );
  });
}

/**
 * 合并多个候选项数组
 * @param {IWordsData} pinyinMatchArr 拼音匹配的候选项
 * @param {IWordsData} splitMatchArr 拼音匹配的候选项
 * @return {IWordsData} 返回合并后的候选项列表
 */
function mergeMatchWordsArr(
  pinyinMatchArr: IWordsData,
  splitMatchArr: IWordsData
) {
  const unDuplicate = [...pinyinMatchArr, ...splitMatchArr];
  if (unDuplicate.length === 0) return unDuplicate;

  const results = [];
  unDuplicate.forEach((item) => {
    const findDuplicateWords = results.filter((item2) => {
      return item.unicodeCodePoint === item2.unicodeCodePoint;
    });
    if (findDuplicateWords.length === 0) results.push(item);
  });
  return results;
}

/**
 * 候选项排序，用户选择可能性高的候选项排在前面
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function wordsSorter(
  wordsData: IWordsData,
  inputValue: string,
  filterKey: IFilterType = 'all'
): IWordsData {
  switch (filterKey) {
    case 'all':
      // 当输入值以字母开头使用拼音排序
      if (/^[a-zA-Z0-9]+$/.test(inputValue)) {
        return sortByPinyin(wordsData, inputValue);
      }
      return sortBySplitWord(wordsData, inputValue);
    case 'pinyin':
      return sortByPinyin(wordsData, inputValue);
    case 'split':
      return sortBySplitWord(wordsData, inputValue);
    default:
      return [];
      break;
  }
}

/**
 * 根据拼音给候选项排序
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function sortByPinyin(wordsData: IWordsData = [], inputValue = ''): IWordsData {
  const arr = wordsData.slice();
  // 清除输入值中的数字
  const keyTranslate = clearNumberInStr(inputValue.toUpperCase());

  arr.forEach((item) => {
    let sort = 0;
    const pinYinChars = (item.pinYinChars || []).map((pinyin) => {
      return clearNumberInStr(pinyin.toUpperCase());
    });

    // 拼音完全匹配 + 10000
    if (pinYinChars.indexOf(keyTranslate) > -1) sort += 10000;

    // 拼音模糊匹配 + 5000
    if (
      pinYinChars.filter((splitKey) => splitKey.indexOf(keyTranslate) === 0)
        .length > 0
    ) {
      sort += 5000;
    }

    // 加上当前字的权重
    sort += item.weight || 0;

    /* eslint-disable no-param-reassign */
    item.sort = sort;
  });

  // 根据最终排序值排序
  arr.sort((item1, item2) => (item2.sort || 0) - (item1.sort || 0));

  return arr;
}

/**
 * 根据拆字给候选项排序
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function sortBySplitWord(
  wordsData: IWordsData = [],
  inputValue = ''
): IWordsData {
  const arr = wordsData.slice();

  arr.forEach((item) => {
    let sort = 0;
    const p = item.splitChars || [];

    // 拆字完全匹配 + 10000
    if (p.indexOf(inputValue) > -1) sort += 10000;

    // 拆字模糊匹配 + 5000
    if (p.filter((splitKey) => splitKey.indexOf(inputValue) === 0).length > 0) {
      sort += 5000;
    }

    // 加上当前字的权重
    sort += item.weight || 0;

    /* eslint-disable no-param-reassign */
    item.sort = sort;
  });

  // 根据最终排序值排序
  arr.sort((item1, item2) => (item2.sort || 0) - (item1.sort || 0));
  return arr;
}

/**
 * 加载远程字体
 */
export async function loadFontFace() {
  const fontName = `url("${ZDATAS.fontUrl}")`;
  return loadFontFaceJSAPI({
    family: 'rare-words-font',
    source: fontName,
  });
}
