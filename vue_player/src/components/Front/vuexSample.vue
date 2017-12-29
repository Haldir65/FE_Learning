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

    <div class='home' @click="()=> this.$router.push('/')" >
      Home
      // 字符串
this.$router.push('home')
<br>
// 对象
this.$router.push({ path: 'home' })
<br>

// 命名的路由
this.$router.push({ name: 'user', params: { userId: 123 }})
<br>

// 带查询参数，变成 /register?plan=private
this.$router.push({ path: 'register', query: { plan: 'private' }})


    </div>

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

.home{
  text-decoration: none;
  color: #fff;
  margin:20px;
  padding: 15px 30px;
  border: 1px #5e5e5e solid;
  display: inline-block;
  background: rgba(73,155,234,1);
background: -moz-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(73,155,234,1)), color-stop(100%, rgba(32,124,229,1)));
background: -webkit-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
background: -o-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
background: -ms-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
background: linear-gradient(135deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5', GradientType=1 );
}
</style>
