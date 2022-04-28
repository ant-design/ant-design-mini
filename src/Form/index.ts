import formStoreFactory from './store';
import { IComponentProps, IComponentData, IComponentMethods, IComponentExtraThis } from './props'
import { cacheFormInfo, clearFormInfo } from './cache'

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
    requiredMarkStyle: 'asterisk',
    position: 'horizontal',
  },

  onInit() {
    const pageId = this.$page.$id;
    const componentId = this.$id;
    const { form: uid } = this.props
    this.store = formStoreFactory.createStore({ pageId, componentId, uid })
    this.onBindChangeFormFieldValue = this.onChangeFormFieldValue.bind(this);
    this.store.onValuesChange(this.onBindChangeFormFieldValue)
    this.onBindSubmit = this.onSubmit.bind(this);
    this.store.onSubmit(this.onBindSubmit)
    cacheFormInfo(function (this: any) {
      return { id: this.$id };
    }.bind(this))
  },

  didMount() {
    this.store?.setFieldsValue(this.props.initialValues, { formSilent: true });
    clearFormInfo();
  },

  didUnmount() {
    const pageId = this.$page.$id;
    const { form: uid } = this.props;
    this.store?.offValuesChange(this.onBindChangeFormFieldValue)
    this.store?.offSubmit(this.onBindSubmit)
    formStoreFactory.destroyStore({  pageId, uid  })
  },

  methods: {
    onChangeFormFieldValue(changedValues,  values, options) {
      if (!options?.formSilent) {
        this.props.onValuesChange?.(changedValues, values)
      }
    },

    async onSubmit() {
      const { valid, errors  } = await this.store.validate();
      const values = this.store.getFieldsValue();
      if (valid) {
        this.props.onFinish?.(values)
        return
      }
      this.props.onFinishFailed?.(values, errors)
    }
  },

  ref() {
    return {
      setFieldsValue: function ( this:any, values) {
        this.store.setFieldsValue(values, { formSilent: true});
      }.bind(this),

      getFieldsValue: function (this: any) {
        return this.store.getFieldsValue();
      }.bind(this),

      validate: async function (this: any, validateFields) {
        const errorInfo = await this.store.validate(validateFields);
        return errorInfo;
      }.bind(this),
    };
  },
});
