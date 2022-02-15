const jsUnitRpx = '<ENV::jsUnitRpx>';

/* eslint-disable no-continue, prefer-spread */
export default function fmtUnit(oldUnit: string): string {
  let getUnit: string = oldUnit;

  if (jsUnitRpx === 'true') {
    if (typeof getUnit === 'string' && getUnit === 'px') {
      getUnit = 'rpx';
    } else if (typeof getUnit === 'string') {
      getUnit = `${parseInt(oldUnit.match(/(\d+|\d+\.\d+)(px)/)[1], 10) * 2}rpx`;
    }
  }

  return getUnit;
}

export const fmtUnitNumber = (oldUnit: number): number => {
  let getUnitNumber: number = oldUnit;
  if (jsUnitRpx === 'true') {
    getUnitNumber *= 2;
  }

  return getUnitNumber;
};
