/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// '1.' '1x' 'xx' '' => are not complete numbers
export function isNotCompleteNumber(num: any): boolean {
  return (
    isNaN(num) ||
    num === '' ||
    num === null ||
    (num && num.toString().indexOf('.') === num.toString().length - 1)
  );
}

export function toNumber(num: string, precision?: number): undefined | number {
  // num.length > 16 => This is to prevent input of large numbers
  const numberIsTooLarge = num && num.length > 16;
  if (isNotCompleteNumber(num) || numberIsTooLarge) {
    return undefined;
  }

  if (precision != null) {
    return Math.round(+num * Math.pow(10, precision) / Math.pow(10, precision));
  }
  return Number(num);
}

export function getPrecision(value: any, precision?: number): number {
  if (precision != null) {
    return precision;
  }
  const valueString = String(value);
  if (valueString.indexOf('e-') >= 0) {
    return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
  }
  let p = 0;
  if (valueString.indexOf('.') >= 0) {
    p = valueString.length - valueString.indexOf('.') - 1;
  }
  return p;
}

// step={1.0} value={1.51}
// press +
// then value should be 2.51, rather than 2.5
// if this.props.precision is undefined
// https://github.com/react-component/input-number/issues/39
export function getMaxPrecision(
  currentValue: any,
  step?: number,
  precision?: number,
): number {
  if (precision != null) {
    return precision;
  }

  const stepPrecision = getPrecision(step, precision);
  const currentValuePrecision = getPrecision(currentValue, precision);
  if (!currentValue) {
    return stepPrecision;
  }
  return Math.max(currentValuePrecision, stepPrecision);
}

export function getPrecisionFactor(currentValue: any, precision?: number): number {
  const p = getMaxPrecision(currentValue, undefined, precision);
  return Math.pow(10, p);
}

export function upStep(val: any, step?: number, precision?: number): number {
  const precisionFactor = getPrecisionFactor(val, precision);
  const p = Math.abs(getMaxPrecision(val, step, precision));
  const result = (
    (precisionFactor * val + precisionFactor * (step as number)) /
    precisionFactor
  ).toFixed(p);
  return toNumber(result, precision);
}

export function downStep(val: any, step?: number, precision?: number): number {
  const precisionFactor = getPrecisionFactor(val, precision);
  const p = Math.abs(getMaxPrecision(val, step, precision));
  const result = (
    (precisionFactor * val - precisionFactor * (step as number)) /
    precisionFactor
  ).toFixed(p);
  return toNumber(result);
}
