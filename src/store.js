import Vue from 'vue'
import Vuex from 'vuex'
import { resolve, reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'Neerajs vuex',
    links: [
      'http://www.google.com',
      'http://www.yahoo.com',
      'http://www.bing.com',
      'http://www.amazon.com',
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state,link) => {
      state.links.push(link);
    },
    REMOVE_LINKS: (state,link) => {
      state.links.splice(link,1);
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    }
  },
  actions: {
    removeLink: (context,link) => {
      context.commit("REMOVE_LINKS",link);
    },
    removeall: ({commit}) => {
      return new Promise((resolve,reject) => {
        commit("REMOVE_ALL");
        resolve();
      }).catch(err => {
        reject(err);
      })
    }
  }
})
