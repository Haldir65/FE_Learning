<template>
  <div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <button class="mdl-button mdl-js-button mdl-button--raised">Save</button>
    <a href="https://getmdl.io/components/index.html#buttons-section" target='_blank'>Docs for fab</a>
  </div>



</template>


<script>
  export default{

    data () {
      return {
        name : 'ifstatement',
        type : 'C'
      }
    },
    comuted (){
      return {

      }
    },
    created :function () {

    },
    mounted:function () {

    }



  }

</script>


<style scoped>

</style>
