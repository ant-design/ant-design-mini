import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import formStoreFactory  from '../Form/store';
import { getFormInfo }  from '../Form/cache'

Component({
  props: ButtonDefaultProps,
  didMount() {
    if (this.props.htmlType ===  'submit') {
      const formInfo = getFormInfo()
      this.handleSubmit = function() {
        const pageId = this.$page.$id;
        const uid = this.props.form;
        this.store = formStoreFactory.getStore({ pageId, componentId: formInfo?.id , uid })
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
