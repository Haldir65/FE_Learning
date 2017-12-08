<template>
<div id="css_positioning_contaier">
  <nav>
    <ul>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
    </ul>
  </nav>
  <h2>
      this template can be made in Atom via input vue in an .vue file ,darn simple。
    </h2>
  <section>
    Or maybe you can click temp... It will automatically notice
  </section>

</div>
</template>
<script>
export default {
  name: "css_positioning_contaier",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>

nav{
  background: #333;
  padding: 5px;
  position: fixed;
  /*fixed元素总是相对于document window摆放，所以用来做顶部导航栏非常好*/
  /*注意这时候fixed 元素也占据了document flow的一部分，所以剩下的内容不会被遮住*/
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  /*这个z轴的属性要小心使用，很容易写到非常大，无法维护*/
}

nav ul:after{
  content: '';
  clear: both;
  display: block;
}

nav li{
  list-style-type: none;
  margin: 0 10px;
  color: #fff;
  float: right;
}
</style>
