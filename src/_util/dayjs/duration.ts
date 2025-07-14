/**
 * Duration utility for time calculations
 *
 * see: https://github.com/iamkun/dayjs/blob/dev/src/plugin/duration/index.js
 */

export interface DurationObject {
  /**
   * Get as days (total number of days in duration)
   */
  asDays(): number;

  /**
   * Get as hours (total number of hours in duration)
   */
  asHours(): number;

  /**
   * Format duration using template
   * @param template 格式字符串，支持 HH, mm, ss
   */
  format(template: string): string;
}

/**
 * Create a Duration object
 * @param input 毫秒数
 * @returns Duration对象
 */
export function duration(input: number): DurationObject {
  const $ms = Math.abs(input);

  // 按照 dayjs 标准计算时间单位
  const $s = Math.floor($ms / 1000);
  const $m = Math.floor($s / 60);
  const $h = Math.floor($m / 60);
  const $d = Math.floor($h / 24);

  return {
    asDays(): number {
      return $d;
    },

    asHours(): number {
      return $h;
    },

    format(template: string): string {
      // 计算显示单位 (取余数)
      const hours = $h % 24;
      const minutes = $m % 60;
      const seconds = $s % 60;

      return template.replace(/HH|mm|ss/g, (match) => {
        switch (match) {
          case 'HH':
            return hours.toString().padStart(2, '0');
          case 'mm':
            return minutes.toString().padStart(2, '0');
          case 'ss':
            return seconds.toString().padStart(2, '0');
          default:
            return match;
        }
      });
    },
  };
}
