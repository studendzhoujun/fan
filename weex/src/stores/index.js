/*
 * @Author: zhouJun 
 * @Date: 2017-08-25 15:12:47 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2017-08-25 15:23:18
 */

import Vue from 'vue'
import Vuex from 'vuex'
// import host from 'gome-utils-host'
// import http from 'gome-utils-http'
// import {env} from 'gome-utils-env'
import api from '../../APIconfig.js'
// Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      message:'hello'
    },
    mutations:{
      init(state,data){
          console.log(data)
      }
    },
    actions:{
        init ({state, commit}) {
            const data=api.data
            commit('init',data)
        },
    }
});
