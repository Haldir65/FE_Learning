<template>
<div>
  <p>
    you clicked {{getCount}} Times
  </p>
  <ul class="list-unstyled">
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="() => count++">
        Stuff
      </button>
    </li>
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="commitIncrement">
        Commit an change
      </button>
    </li>
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="commitMutationWithPayload">
        Now with payload
      </button>
    </li>
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="commitAsync">
      Now go Async
      </button>
    </li>
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="getterAge">
          filter Mature members
      </button>
    </li>
    <li style='margin-top: 20px'>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect marginTop50" @click="chainActions">
        Chain those members
      </button>
    </li>

  </ul>


<h1>接收参数的路由</h1>
    <h1> params.id：{{ $route.params }}</h1>
    <h1>query.status:{{ $route.query.queryId }}</h1>

</div>
</template>

<script>
import {
  ADD_MEMBER,
  INCREMENT,
  DECREMENT
} from '../../state/state'
import {
  mapMutations
} from 'vuex'

export default {
  data() {
    return {
      count: 0,
      msg: ''
    }
  },
  computed: {
    getCount: function() {
      return this.count
    }
  },
  methods: {
    methodName() {

    },
    commitIncrement() {
      this.$store.commit(INCREMENT)
      console.log(this.$store.state.count);
    },
    commitMutationWithPayload() {
      console.log(ADD_MEMBER);
      this.$store.commit(ADD_MEMBER, {
        name: 'John',
        age: 27
      })
    },
    commitAsync() {
      this.$store.dispatch('incrementAsync', {
        amount: 10
      })
    },
    getterAge() { // gathering useful information from store
      let array = this.$store.getters.participantsWithAgeAvoveThirty
      console.log(array);
      array.forEach(function(val, ind, arg2) {
        console.log(val['name'] + ' ' + val['age']);
      })
    },

    chainActions() {
      let garage = this.$store
      garage.dispatch('actionA').then(() => {
        this.log(garage.state.count)
      })
    }

  },


  watch: {
    count: function(val) {
      this.log('new count = ' + val + ' original count ' + this.count)
    }
  },
  created() {
    //do something after creating vue instance

  },
  beforeCreate() {
    //do something before creating vue instance

  }



}
</script>

<style scoped>
@import "../../common/stylebase.css";
</style>
