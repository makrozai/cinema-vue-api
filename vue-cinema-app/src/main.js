import Vue from 'vue'
import App from '@/App.vue'

// vue resource
import  VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:3333/api/v1/';
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Autorization', `Bearer ${window.localStorage.getItem('_token')}`);
    next();
});
// .vue resource

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
//.vuex

//blockui
import BlockUI from 'vue-blockui';
Vue.use(BlockUI);
//.blockui

//modulos y tipos
import globalTypes from '@/types/global'; 
//.modulos y tipos

//vee-validate
import VeeValidate, {Validator} from 'vee-validate';
//TODO Vlidator con traducciones;
Vue.use(VeeValidate);
//.vee-validate

//vue-tables-2
import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');
//.vue-tables-2

//global store
export const store = new Vuex.Store({
  state: {
    processing: false,
    lenguage: 'es'
  },
  actions: {
    [globalTypes.actions.changeLanguages]: ({commit}, lang) => {
      commit(globalTypes.mutations.setLanguage, lang);
      //TODO Validator con instrucciones
    }
  },
  getters: {
    [globalTypes.getters.processing]: state => state.processing,
    [globalTypes.getters.language]: state => state.language,
  },
  mutations: {
    [globalTypes.mutations.startProcessing] (state) {
      state.processing = true;
    },
    [globalTypes.mutations.stopProcessing] (state) {
      state.processing = false;
    },
    [globalTypes.mutations.setLanguage] (state, lang) {
      state.lenguage = lang;
    }
  },
  modules: {
    
  }
});
//.global store

new Vue({
  el: '#app',
  render: h => h(App)
})
