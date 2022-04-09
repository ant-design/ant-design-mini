
import formStoreFactory from '../store'
import { cacheFieldName } from '../cache'

Component({
  props: {
    rules: [],
    name: 'default',
    position: 'horizontal',
    required: false,
    label: '',
  },

  data: {
    errorInfo: null,
    submitDisable: false,
    defaultLabelWidth:  0
  },

  onInit() {
    const pageId = this.$page.$id;
    const { form: uid } = this.props
    this.store = formStoreFactory.getStore({ pageId, uid })
    cacheFieldName(function() {
      return this.props.name
    }.bind(this))
    this.setFieldRules();
    this.onBindErrorInfoChange = this.onErrorInfoChange.bind(this);
    this.store.onErrorInfoChange(this.onBindErrorInfoChange);
  },

  didMount() {
    cacheFieldName(function() {
      return ''
    }.bind(this))
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

  didUnmount() {
    this.store?.offValuesChange(this.onBindErrorInfoChange);
  },

  methods: {
    setFieldRules() {
      const { name, required, label, rules } = this.props;
      let fieldRules = [];
      if (rules instanceof Array) {
        fieldRules = [...rules];
      } else {
        fieldRules = [rules];
      }
      const hasRequiredRule = fieldRules.some(rule => rule.required);
      if (required && !hasRequiredRule) {
        const requiredItem = { required: true, message: `请输入${label || name}` };
        fieldRules = [requiredItem, ...fieldRules];
      }
      if (fieldRules?.length > 0) {
        this.store.setFieldRules(name, fieldRules);
      }
    },

    onErrorInfoChange(formErrorInfo, options) {
      const fieldName = options?.fieldName
      if (!(fieldName && fieldName !== this.props.name)) {
        this.setData({
          errorInfo: formErrorInfo[this.props.name]?.[0] || {},
        });
      }
    },

    updateErrorInfo(payload) {
      this.setData({ errorInfo: payload });
    },
  
    updateSubmitButtonStatus(payload) {
      this.setData({ submitDisable: !!payload });
    },
  }

});
