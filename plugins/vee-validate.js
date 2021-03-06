import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email, alpha, digits, max, regex } from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import ko from 'vee-validate/dist/locale/ko.json';

extend('required', required);
extend('email', email);
extend('alpha', alpha);
extend('digits', digits);
extend('max', max);
extend('regex', regex);

localize({
  en,
  ko
});

localize('ko');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
