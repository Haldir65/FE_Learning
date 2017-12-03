<template>
<div>
  <div id="css_banner">
    <img  src="../../../static/imgs/scene1.jpg" height="200px"/>
    <h2 >Starry Starr Sky</h2>
  </div>
  <div class="span_wrapper">
    <span>
      Definitely center stuff
    </span>
    <span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span>
    <span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span>
    <span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span><span>
      Definitely center stuff
    </span>
  </div>

  <div class="section_content">
    <section>
        <h2>This is Column1</h2>
        <p>
          In ReactiveX an observer subscribes to an Observable. Then that observer reacts to whatever item or sequence of items the Observable emits. This pattern facilitates concurrent operations because it does not need to block while waiting for the Observable to emit objects, but instead it creates a sentry in the form of an observer that stands ready to react appropriately at whatever future time the Observable does so.
        </p>
        <p>
          This page explains what the reactive pattern is and what Observables and observers are (and how observers subscribe to Observables). Other pages show how you use the variety of Observable operators to link Observables together and change their behaviors.
        </p>
        <p>
          Most operators operate on an Observable and return an Observable. This allows you to apply these operators one after the other, in a chain. Each operator in the chain modifies the Observable that results from the operation of the previous operator.
        </p>
        <img src="../../../static/imgs/scene5.jpg" width=100%></img>

    </section>
    <aside>
      <h2>This is Column2 </h2>
      <p>
        This documentation accompanies its explanations with “marble diagrams.” Here is how marble diagrams represent Observables and transformations of Observables:
      </p>
      <p>
        There are other patterns, like the Builder Pattern, in which a variety of methods of a particular class operate on an item of that same class by modifying that object through the operation of the method. These patterns also allow you to chain the methods in a similar way. But while in the Builder Pattern, the order in which the methods appear in the chain does not usually matter, with the Observable operators order matters.
      </p>
      <img src="../../../static/imgs/scene2.jpg" width=100%></img>
    </aside>

  </div>

  <div>
    <h2>Spliting text into columns without using float</h2>
    <p class="column_para">
      In ReactiveX an observer subscribes to an Observable. Then that observer reacts to whatever item or sequence of items the Observable emits. This pattern facilitates concurrent operations because it does not need to block while waiting for the Observable to emit objects, but instead it creates a sentry in the form of an observer that stands ready to react appropriately at whatever future time the Observable does so.
    </p>
  </div>

  <div class="positioning_div">
    <h2>For positioning stuffs</h2>
    <p>
      In many software programming tasks, you more or less expect that the instructions you write will execute and complete incrementally, one-at-a-time, in order as you have written them. But in ReactiveX, many instructions may execute in parallel and their results are later captured, in arbitrary order, by “observers.” Rather than calling a method, you define a mechanism for retrieving and transforming the data, in the form of an “Observable,” and then subscribe an observer to it, at which point the previously-defined mechanism fires into action with the observer standing sentry to capture and respond to its emissions whenever they are ready.

An advantage of this approach is that when you have a bunch of tasks that are not dependent on each other, you can start them all at the same time rather than waiting for each one to finish before starting the next one — that way, your entire bundle of tasks only takes as long to complete as the longest task in the bundle.

There are many terms used to describe this model of asynchronous programming and design. This document will use the following terms: An observer subscribes to an Observable. An Observable emits items or sends notifications to its observers by calling the observers’ methods.

In other documents and other contexts, what we are calling an “observer” is sometimes called a “subscriber,” “watcher,” or “reactor.” This model in general is often referred to as the “reactor pattern”.
    </p>
    <p>
      This page uses Groovy-like pseudocode for its examples, but there are ReactiveX implementations in many languages.
In an ordinary method call — that is, not the sort of asynchronous, parallel calls typical in ReactiveX — the flow is something like this:

<h5>Call a method.</h5>
<h3>This line is awesome because we say position absolute,which means absolute in the document </h3>
<h3>Use that variable and its new value to do something useful</h3>
Or, something like this:
    </p>

    <p>
      The Subscribe method is how you connect an observer to an Observable. Your observer implements some subset of the following methods:
    </p>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  computed: {

  },
  methods: {
    methodName() {

    }
  },

  watch: {
    msg: function(val) { // the new value

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
span {
  display: inline-block;
  border: 1px #000 solid;
  margin: 5px 10px;
  padding: 2px 5px;
}

div span{
  width: 10%;
  height: 10%;
  display: inline-block;
  border-radius: 12px ;
}

.section_content:after{
  content: '';
  display: block;
  clear: both;
}
section,aside{
  float: left;
   width: 46%;
   padding: 1%;
   margin: 1%;
   border: 1px  solid #afafaf;
}

.column_para{
  border: 1px #afafaf solid;
  -webkit-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 50px;
  column-gap: 50px;
  -webkit-column-rule: 1px #afafaf solid;
  column-rule: 1px #afafaf solid;
  /*column属于比较新的属性，所以要加上vender-prefix,column rule就是每一栏之间的分割线*/
  text-align: justify;
}

.positioning_div p{
  position: relative;
  left: 50px;
  /*position relative的意思是相对于原本应该的位置挪一下，但元素原本在dom中占有的位置还是被它占有*/
  clear: left;
  border: 1px  solid #afafaf;

}

.positioning_div:nth-child(2){
  position: relative;
  left: 200px;
  border: 1px  solid #afafaf;

}

.positioning_div h3:nth-of-type(1){
  color: red;
  position: absolute;
  left: 10px;
}

#css_banner{
  margin: 10px auto;
  text-align: center;
  position: relative;
}

#css_banner img{
  width: 50%;
}

#css_banner h2{
  position: absolute;
  left: 25%;
  top: 1px;
  color: rgba(100, 200, 100, 0.5);
}


</style>
