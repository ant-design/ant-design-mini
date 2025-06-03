import { Form } from '../../../../src/Form/form';


Component({
  onInit() {
    this.form = new Form();
    this.form.setInitialValues(this.props.config.initialValues);
    this.form.reset();
  },

  methods: {
    handleRef(ref) {
      this.form.addItem(ref);
    },
    async submit() {
      const values = await this.form.submit();
      this.props.onSuccess(values);
    },
    reset() {
      this.form.reset();
    },
  }
});
