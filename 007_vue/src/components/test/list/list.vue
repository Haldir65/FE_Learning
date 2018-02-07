<template>
  <div>
    {{name}}
    <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
    <ul>
       <li v-for="person in people">
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>  
        </li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-list',
  data () {
    return {
      name: 'john',
      visible: false,
      people: ['john', 'Doe', 'Mary']
    };
  },
  methods: {
    read (params) {
      console.log(params);
    }
  }
};
</script>

<style lang="stylus">
@import 'list.styl'
</style>


