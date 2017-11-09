<template>
<div class="marginTop50">
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
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Ripple
    </button>

  <h4>内联列表</h4>
  <ul class="list-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

  <h4>有序列表</h4>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ol>

  <h4>无序列表</h4>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
  <h4>未定义样式列表</h4>
  <ul class="list-unstyled">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

  <h4>内联列表</h4>
  <ul class="list-inline">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

  <h4>定义列表</h4>
  <dl>
    <dt>Description 1</dt>
    <dd>Item 1</dd>
    <dt>Description 2</dt>
    <dd>Item 2</dd>
  </dl>

  <h4>水平的定义列表</h4>
  <dl class="dl-horizontal">
    <dt>Description 1</dt>
    <dd>Item 1</dd>
    <dt>Description 2</dt>
    <dd>Item 2</dd>
  </dl>

  <h2>排版</h2>
  <p class="text-lowercase">Lowercased text（小写文本）.</p>
  <p class="text-uppercase">Uppercased text（大写文本）.</p>
  <p class="text-capitalize">Capitalized text（首字母大写文本）.</p>
  <p class=" text-center">居中的文本</p>


  <p><code>&lt;header&gt;</code> 作为内联元素被包围。</p>
  <p>如果需要把代码显示为一个独立的块元素，请使用 &lt;pre&gt; 标签：</p>
  <pre>
  &lt;article&gt;
  	&lt;h1&gt;Article Heading&lt;/h1&gt;
  &lt;/article&gt;
  </pre>


  <p> .table-striped 类在 tbody 内添加斑马线形式的条纹 ( IE8 不支持):</p>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Firstname</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Anna</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Debbie</td>
      </tr>
      <tr>
        <td>3</td>
        <td>John</td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
export default {

  data() {
    return {
      name: 'ifstatement',
      type: 'C'
    }
  },
  computed: {

  },
  created: function() {

  },
  mounted: function() {

  }



}
</script>


<style scoped>

</style>
