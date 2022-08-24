import { FilterDefaultProps } from './props';
import { connect, inject } from '../_util/store';
import { FilterStore, IState } from './store';

interface IMappedData {
  currentFilterItemId: string;
  activeObj: Record<string, boolean>;
  placeHolderObj: Record<string, string>;
}
Component({
  props: FilterDefaultProps,
  data() {
    return {
      placeHolderObj: {},
      activeObj: {},
      currentFilterItemId: '',
    };
  },
  _store: null as FilterStore,
  mixins: [
    inject(FilterStore),
    connect<IState, IMappedData>({
      mapStateToData: ({ state }) => {
        const activeItem = state.filterItems.find((v) => v.active);
        return {
          placeHolderObj: state.filterItems.reduce((re, v) => {
            let selected;
            if (v.isMult) {
              selected =
                v.items?.filter((v1) => v.value?.indexOf(v1.value) > -1) || [];
            } else {
              selected = v.items?.find((v1) => v1.value === v.value) || null;
            }
            re[v.id] = v.onFormat(selected) || v.placeholder;
            return re;
          }, {}),
          activeObj: state.filterItems.reduce((re, v) => {
            if (v.isMult) {
              re[v.id] = v.value?.length > 0;
            } else {
              re[v.id] = !!v.value;
            }
            return re;
          }, {}),
          currentFilterItemId: activeItem?.id || '',
        };
      },
    }),
  ],
  methods: {
    showFilterItem(e) {
      const id = e.currentTarget.dataset.filterItemId;
      const { filterItems } = this._store.getState();
      filterItems.find((v) => v.id === id)?.triggleVisible();
    },
  },
});
