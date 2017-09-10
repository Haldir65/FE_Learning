<template>
  <div>
  <form-helper>
   <div slot='form-header'>
     <h3>this is the title of the form</h3>
     <p>information about this form</p>
   </div>
   <div slot='form-fields'>
      <input type="text" placeholder="name" required="true">
      <input type="password" name="pwd" placeholder="please input passwords" required="true">
   </div>
   <div slot='form-controls'>
     <button v-on:click='handleSubmit'>Submit</button>
   </div>
  </form-helper>
  </div>
</template>

<script>



import formHelper from './components/formHelper.vue';



export default {
  components:{
    'form-helper': formHelper
  
  } ,
  data () {
    return {
      
    }
  },
  methods:{
    handleSubmit:function () {
      // body...
      console.log('submited')
    }
  }

}
</script>

<style >
  

</style>
