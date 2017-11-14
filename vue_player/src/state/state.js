import Vuex from 'vuex'
import Vue from 'vue'

const ADD_MEMBER = 'addmember'
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

export {
  ADD_MEMBER,
  INCREMENT,
  DECREMENT
}

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    participants: [{name:'Jason',age:20},{name:'Bob',age:30},{name:'neo',age:32},{name:'oracle',age: 31}]
  },
  mutations: {
    [INCREMENT]: state => state.count++,
    [DECREMENT]: state => state.count--,
    [ADD_MEMBER](state, payload) {
      state.participants.push(payload)
      let array = state.participants
      array.forEach(function(val, ind, ar2) {
        console.log('Index ' + ind);
        console.log('Value ' + val);
        // console.log('Array '+ar2);
        // console.log('this '+this); undefined
      })
    }
  },


  actions: { // asyncEvents
    increment(context) {
      context.commit('increment')
    },
    incrementAsync({commit}) {
      let that = this
      setTimeout(() => {
        commit('increment')
        console.log('time up now we have '+that.state.count);
      }, 1000)
    },
    actionA ({commit}){
      return new Promise((resolve,reject) =>{
        setTimeout(() => {
          commit('increment')
          resolve()
        })
      },1000)
    }
  },


  getters: {
    participantsWithAgeAvoveThirty: state => {
      return state.participants.filter(individual => individual['age']>=30)
    }
  },
  modules: {}
})
