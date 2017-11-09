<template>
<div>

  <p>
    waha waha
  </p>
  <table class="table">
    <caption>基本的表格布局</caption>
    <thead>
      <tr>
        <th>名称</th>
        <th>城市</th>
      </tr>
    </thead>
    <tbody>
      <tr class="active">
        <td>Tanmay</td>
        <td>Bangalore</td>
      </tr>
      <tr class="success">
        <td>Sachin</td>
        <td>Mumbai</td>
      </tr>
      <tr class="warning">
        <td>Sachin</td>
        <td>Mumbai</td>
      </tr>
      <tr class="danger">
        <td>Sachin</td>
        <td>Mumbai</td>
      </tr>
      <tr class="success">
        <td>Sachin</td>
        <td>Mumbai</td>
      </tr>
    </tbody>
  </table>

  <small>本行内容是在标签内</small><br>
  <strong>本行内容是在标签内</strong><br>
  <em>本行内容是在标签内，并呈现为斜体</em><br>
  <p class="text-left">向左对齐文本</p>
  <p class="text-center">居中对齐文本</p>
  <p class="text-right">向右对齐文本</p>


</div>
</template>

<script>
export default {

  data() {
    return {

    }
  },
  computed: {

  },

  methods: {

  },
  created: function() {

  }


}
</script>

<style scoped>

</style>
