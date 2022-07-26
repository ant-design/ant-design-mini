/* eslint-disable @typescript-eslint/no-explicit-any */
export default function fmtEvent(
  props: Record<string, any>,
  e: Record<string, any> = {}
): Record<string, any> {
  const dataset = {};
  for (const key in props) {
    if (/data-/gi.test(key)) {
      dataset[key.replace(/data-/gi, '')] = props[key];
    }
  }
  return Object.assign({}, e, {
    currentTarget: { dataset },
    target: { dataset, targetDataset: dataset },
  });
}
