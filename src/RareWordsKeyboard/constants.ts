import { IPinYinMapItem } from './props';

/**
 * 笔画键盘按钮
 */
export const STROKE_MAP = [
  { value: '一', label: '一' },
  { value: '丨', label: '丨' },
  { value: 'ノ', label: 'ノ' },
  { value: '丶', label: '丶' },
  { value: 'フ', label: 'フ' },
  { value: '*', label: '通配符', extraClassName: 'text-btn' },
];

/**
 * 拼音键盘按钮
 */
export const PINYIN_MAP: IPinYinMapItem[][] = [
  // 第一行
  [
    { label: 'Q', value: 'Q' },
    { label: 'W', value: 'W' },
    { label: 'E', value: 'E' },
    { label: 'R', value: 'R' },
    { label: 'T', value: 'T' },
    { label: 'Y', value: 'Y' },
    { label: 'U', value: 'U' },
    { label: 'I', value: 'I' },
    { label: 'O', value: 'O' },
    { label: 'P', value: 'P' },
  ],
  // 第二行
  [
    { label: 'A', value: 'A' },
    { label: 'S', value: 'S' },
    { label: 'D', value: 'D' },
    { label: 'F', value: 'F' },
    { label: 'G', value: 'G' },
    { label: 'H', value: 'H' },
    { label: 'J', value: 'J' },
    { label: 'K', value: 'K' },
    { label: 'L', value: 'L' },
  ],
  // 第三行
  [
    { label: 'Z', value: 'Z' },
    { label: 'X', value: 'X' },
    { label: 'C', value: 'C' },
    { label: 'V', value: 'V' },
    { label: 'B', value: 'B' },
    { label: 'N', value: 'N' },
    { label: 'M', value: 'M' },
  ],
];

export const BTN_TEXT = {
  SYMBOL: '符',
  RETRY: '重试',
  CONFIRM: '确认',
};


/**
 * 默认字体下载地址
 */
export const DEFAULT_FONT_URL = 'https://mdn.alipayobjects.com/huamei_2fq7mt/afts/file/A*kPXwSqFoRTQAAAAAAAAAAAAADh58AQ/contains-pua-v1.0.2.ttf';
