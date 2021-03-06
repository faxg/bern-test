import Vue from 'vue';
import Vuex from 'vuex';
import discountsModule from './modules/discounts';
import productsModule from './modules/products';

export * from './modules/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    products: productsModule,
    discounts: discountsModule,
  },
  state: {},
});
