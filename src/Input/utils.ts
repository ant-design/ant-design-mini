/**
 * 检查给定值是否是一个数字或可以被解析为一个数字
 * @param value - 要检查的任意值，类型为 unknown
 * @returns 一个布尔值，指示值是否是数字或者可以被解析为数字
 */
export function isNumber(value: unknown): boolean {
  if (typeof value === 'number') {
    return !isNaN(value);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return !isNaN(Number(value));
  }

  return false;
}

/**
 * 格式化数字，同时限制其范围和小数精度。
 *
 * @param value - 要格式化的数值。
 * @param max - 数值允许的最大值。若 `value > max`，则将其限制为 `max`。
 * @param min - 数值允许的最小值。若 `value < min`，则将其限制为 `min`。
 * @param precision - 要保留的小数位数。如果为负值，则返回完整的原始数值（不限制精度）。
 * @returns 格式化后的数值字符串。
 */
export function formatNumberWithLimits(
  value: number,
  max: number,
  min: number,
  precision: number
): string {
  // 确保值在[min, max]范围内
  let formattedValue = Math.max(min, Math.min(max, value));

  if (precision < 0) {
    // 不限制精度，直接返回数值
    return String(formattedValue);
  } else {
    // 限制精度，保留指定的位数并补足零
    formattedValue = parseFloat(formattedValue.toFixed(precision));
    return formattedValue.toFixed(precision);
  }
}
