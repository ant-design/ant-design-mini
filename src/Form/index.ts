import formStoreFactory from './store';
import { IComponentProps, IComponentData, IComponentMethods, IComponentExtraThis } from './props'

Component<IComponentData, IComponentProps, IComponentMethods, IComponentExtraThis>({
  props: {
    initialValues: {
    },
    onValuesChange: (changedValues, totalValues) => {
      return {
        changedValues,
        totalValues,
      };
    },
    onFinish: function onFinish(totalValues) {
      return totalValues;
    },
    onFinishFailed: function onFinishFailed() {},
    className: '',
  },

  onInit() {
    const pageId = this.$page.$id;
    const { form: uid } = this.props
    this.store = formStoreFactory.createStore({ pageId, uid })
    this.onBindChangeFormFieldValue = this.onChangeFormFieldValue.bind(this);
    this.store.onValuesChange(this.onBindChangeFormFieldValue)
    this.onBindSubmit = this.onSubmit.bind(this);
    this.store.onSubmit(this.onBindSubmit)
  },

  didMount() {
    this.store.setFieldsValue(this.props.initialValues, { silent: true });
  },

  didUnmount() {
    const pageId = this.$page.$id;
    const { form: uid } = this.props;
    this.store.offValuesChange(this.onBindChangeFormFieldValue)
    this.store.offSubmit(this.onBindSubmit)
    formStoreFactory.destroyStore({  pageId, uid  })
  },

  methods: {
    onChangeFormFieldValue(changedValues,  values, options) {
      if (!options?.silent) {
        this.props.onValuesChange?.(changedValues, values)
      }
    },

    async onSubmit() {
      const { valid, errors  } = await this.store.validate();
      if (valid) {
        const values = this.store.getFieldsValue();
        this.props.onFinish?.(values)
        return
      }
      this.props.onFinishFailed?.(errors)
    }
  },

  ref() {
    return {
      setFieldsValue: function ( this:any, values) {
        this.store.setFieldsValue(values, { silent: true});
      }.bind(this),

      getFieldsValue: function (this: any) {
        return this.store.getFieldsValue();
      }.bind(this),

      validate: async function (this: any) {
        const errorInfo = await this.store.validate();
        return errorInfo;
      }.bind(this),
    };
  },
});
