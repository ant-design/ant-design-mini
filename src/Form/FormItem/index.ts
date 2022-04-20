import { store } from '../store';

Component({
  props: {
    rules: [],
    name: 'default',
    form: 'default',
    initialValue: '',
    position: 'horizontal',
    required: false,
  },
  data: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setData: () => {},
    errorInfo: null,
    defaultLabelWidth: '',
  },
  onInit() {
    const { form, name: field, rules, initialValue, required } = this.props;
    if (form && field) {
      this.$page.data._getCurrentField = () => {
        return { form: () => this.props.form, field: () => this.props.name };
      };
      store.bootstrap(form, field, rules, initialValue, required);
    }
  },
  didMount() {
    this.data.setData = this.$page._currentSetData;
    if (!this.data.setData) return;
    const { form, name: field } = this.props;
    if (form && field) {
      store.setValueAfterUpdate(this.data.setData, form, field);
      store.setFieldUpdateInfoFn(form, field, this.updateErrorInfo.bind(this));

      if (field === 'submit') {
        store.setUpdateSubmitButtonStatusFn(form, field, this.updateSubmitButtonStatus.bind(this));
      }
    }

    my.createSelectorQuery()
      .select('.amd-form-item-label-horizontal')
      .boundingClientRect()
      .exec((ret) => {
        if (ret && ret[0] && ret[0].width) {
          this.setData({
            defaultLabelWidth: `${ret[0].width}px`,
          });
        }
      });
  },
  didUpdate(prevProps) {
    const currentField = prevProps.name;
    const { form, name: nextField } = this.props;
    if (currentField && nextField && currentField !== nextField) {
      store.setValueAfterUpdate(this.data.setData, form, nextField);
      store.updateFieldSet(form, currentField, nextField);
    }
  },
  didUnmount() {
    const { form, name: field } = this.props;
    store.delFieldSet(form, field);
  },
  methods: {
    updateErrorInfo(payload) {
      this.setData({ errorInfo: payload });
    },
    updateSubmitButtonStatus(payload) {
      this.setData({ submitDisable: !!payload });
    },
  },
});
