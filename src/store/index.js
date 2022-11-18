import Vue from "vue";
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      users: []
   },
   mutations: {
      SET_USERS_TO_STATE: (state, users) => {
         state.users = users;
      }
   },
   actions: {
      GET_USERS_FROM_API({ commit }) {
         return axios('https://jsonplaceholder.typicode.com/users')
            .then((users) => {
               commit('SET_USERS_TO_STATE', users.data);
               return users;
            }).catch((error) => {
               alert(error);
            })
      }
   },
   getters: {
      USERS(state) {
         return state.users;
      }
   }
})

export default store;