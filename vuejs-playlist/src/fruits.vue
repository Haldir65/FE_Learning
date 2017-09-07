<template>
<ul>
  <li v-for='fruit in Fruits'>{{fruit}}</li>
</ul>
</template>

<script>
export default {

  data () {
    return {
      Fruits:[
        'Apple','Orange','Banana'
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
