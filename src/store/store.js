import Vuex from 'vuex';
// import state from './state'
// import mutation from './mutation'
// import action from './action'
export default ()=>{
    return new Vuex.Store({
       state:{
        isCollapse: false,
        logoShow: false,
       },
       actions:{
        //    接收collapse提交给mutations
        collapse ({commit},arg) {
            commit('collapse', arg)
          }
       },
       mutations:{
        //    接收actions参数collapse并处理
        collapse (state, arg) {
            state.isCollapse = !state.isCollapse
            if (state.logoShow) {
              setTimeout(function () {
                state.logoShow = false
              }, 300)
            } else {
              state.logoShow = true
            }
          }
       },
       getters:{
        isCollapse: state => state.isCollapse,
        logoShow:state =>state.logoShow
       }
    })
}