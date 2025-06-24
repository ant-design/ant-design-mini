import { Component } from 'miniapp-store';
Component({
  props: {
    info: {},
  },
  computed: {
    message() {
      return this.info?.message || '';
    }
  },
});
