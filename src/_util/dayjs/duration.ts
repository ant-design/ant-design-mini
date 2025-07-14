/**
 * Duration utility for time calculations (simplified version)
 * Only supports asHours, asDays, and format methods
 *
 * see: https://github.com/iamkun/dayjs/blob/dev/src/duration.js
 */

import {
  MILLISECONDS_A_DAY,
  MILLISECONDS_A_HOUR,
  REGEX_FORMAT,
} from './constant';

// Type declarations for dayjs extension
declare module 'dayjs' {
  interface Dayjs {
    duration: (input?: number | DurationData, unit?: string) => Duration;
  }

  export function duration(
    input?: number | DurationData,
    unit?: string
  ): Duration;
}

interface DurationData {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  weeks?: number;
}

interface DurationUtils {
  s: (num: number, length: number, pad: string) => string;
  p: (unit: string) => string;
}

const unitToMS = {
  days: MILLISECONDS_A_DAY,
  hours: MILLISECONDS_A_HOUR,
};

let $u: DurationUtils;

const prettyUnit = (unit: string) => `${$u.p(unit)}s`;
const isNegative = (number: number) => number < 0;
const roundNumber = (number: number) =>
  isNegative(number) ? Math.ceil(number) : Math.floor(number);

class Duration {
  private $d: DurationData;
  private $ms: number;
  private $l: string;

  constructor(input?: number | DurationData, unit?: string, locale?: string) {
    this.$d = {};
    this.$l = locale || 'en';

    if (input === undefined) {
      this.$ms = 0;
      this.parseFromMilliseconds();
      return;
    }

    if (typeof input === 'number') {
      this.$ms = input;
      this.parseFromMilliseconds();
      return;
    }

    if (typeof input === 'object') {
      Object.keys(input).forEach((k) => {
        this.$d[prettyUnit(k) as keyof DurationData] =
          input[k as keyof DurationData];
      });
      this.calMilliseconds();
      return;
    }
  }

  private calMilliseconds() {
    this.$ms = Object.keys(this.$d).reduce(
      (total, unit) =>
        total +
        (this.$d[unit as keyof DurationData] || 0) *
          (unitToMS[unit as keyof typeof unitToMS] || 0),
      0
    );
  }

  private parseFromMilliseconds() {
    let { $ms } = this;
    this.$d.days = roundNumber($ms / MILLISECONDS_A_DAY);
    $ms %= MILLISECONDS_A_DAY;
    this.$d.hours = roundNumber($ms / MILLISECONDS_A_HOUR);
    $ms %= MILLISECONDS_A_HOUR;
    this.$d.minutes = roundNumber($ms / (60 * 1000));
    $ms %= 60 * 1000;
    this.$d.seconds = roundNumber($ms / 1000);
    $ms %= 1000;
    this.$d.milliseconds = $ms;
  }

  format(formatStr?: string): string {
    const str = formatStr || 'YYYY-MM-DDTHH:mm:ss';
    const matches = {
      Y: this.$d.years || 0,
      YY: $u.s(this.$d.years || 0, 2, '0'),
      YYYY: $u.s(this.$d.years || 0, 4, '0'),
      M: this.$d.months || 0,
      MM: $u.s(this.$d.months || 0, 2, '0'),
      D: this.$d.days || 0,
      DD: $u.s(this.$d.days || 0, 2, '0'),
      H: this.$d.hours || 0,
      HH: $u.s(this.$d.hours || 0, 2, '0'),
      m: this.$d.minutes || 0,
      mm: $u.s(this.$d.minutes || 0, 2, '0'),
      s: this.$d.seconds || 0,
      ss: $u.s(this.$d.seconds || 0, 2, '0'),
      SSS: $u.s(this.$d.milliseconds || 0, 3, '0'),
    };
    return str.replace(
      REGEX_FORMAT,
      (match, $1) => $1 || String(matches[match as keyof typeof matches])
    );
  }

  private as(unit: 'hours' | 'days'): number {
    return this.$ms / unitToMS[unit];
  }

  asHours(): number {
    return this.as('hours');
  }

  asDays(): number {
    return this.as('days');
  }
}

export default (option: any, Dayjs: any, dayjs: any) => {
  $u = dayjs().$utils();
  dayjs.duration = function (input?: number | DurationData, unit?: string) {
    const $l = dayjs.locale();
    return new Duration(input, unit, $l);
  };
};
