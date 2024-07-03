export const basicComponetMapping = {
  view: {
    catchLongTap: 'catchlongpress',
    onLongTap: 'bindlongpress',
  },
  text: {},
  block: {},
  page: {},
  component: {},
  canvas: {},
  button: {},
  'cover-view': {},
  'cover-image': {},
  'movable-view': {},
  'movable-area': {},
  'scroll-view': {},
  'swiper': {},
  'swiper-item': {},
  'picker-view': {},
  'picker-view-column': {},
  image: {},
  label: {},
  checkbox: {},
  'checkbox-group': {},
  radio: {},
  'radio-group': {},
};

export function isBasicComponet(tag: string): boolean {
  return Object.keys(basicComponetMapping).includes(tag);
}
