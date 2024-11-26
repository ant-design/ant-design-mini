import getFirstLetter from 'pinyin-firstletter';

console.log('===> getFirstLetter', getFirstLetter)

/** 索引表枚举 */
export const AlphabetMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
  '#': 27,
};

/**
 * 获取首字母
 * A-Z之外的情况返回 #
 */
export function getFirstLetterInMap(str = '') {
  const [a] = getFirstLetter(str) || [];
  const letter = `${a}`.toUpperCase();
  const Letter = AlphabetMap[letter] >= 0 ? letter : '#';

  return Letter;
}

export function getId(str: string) {
  if (str === '推荐' || str === '推') {
    return 'tui';
  }

  return str;
}
