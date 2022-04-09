import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import formStoreFactory  from '../Form/store'

Component({
  props: ButtonDefaultProps,
  didMount() {
    if (this.props.htmlType ===  'submit') {
      this.handleSubmit = function() {
        const pageId = this.$page.$id;
        const uid = this.props.form;
        this.store = formStoreFactory.getStore({ pageId, uid })
        this.store?.emitSubmit()
      }
    }
  },
  methods: {
    onTap(e) {
      const { onTap, disabled, loading } = this.props;
      if (typeof this.handleSubmit === 'function' && !disabled && !loading) {
        this.handleSubmit();
      }
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
  },
});
