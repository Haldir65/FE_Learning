<template>
  <div >
  <h1>{{title}}</h1>
  <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title : "first vue file"
    }
  },
  methods: {
  greeting:function(){
    return "custom file"
  }
  }
}
</script>

<style lang="scss">

</style>
