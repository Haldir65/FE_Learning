<template>
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
