import foo from './src/foo.vue'
// import api from './APIconfig.js'
// import store from './src/stores'
foo.el = '#root'
export default new Vue(foo);
// new Vue({
//     el: '#root',
//     store,
//     render: h => h(foo)
// });
//   const data = await http({
//         url:api.cms,
//         type:'jsonp',
//         data: {
//             keyProms:(true?'channelGomeShopHaohuoEmployees':'channelGomeShopHaohuoNonemployees')
//         }
//   })
// store.dispatch('init')