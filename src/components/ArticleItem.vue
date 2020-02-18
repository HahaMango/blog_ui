<template>
  <div class="article-item" onmouseover="this.className='article-item-hold'" onmouseout="this.className='article-item'">
    <div class="item-border">
      <a :href="href">
        <div>
          <h2>{{pagetitle}}</h2>
          <span class="article-item-desc"><p>{{describe}}</p></span>
          <articleInfo class="article-item-info" :read="read" :like="like" :comment="comment"/>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import articleInfo from './ArticleInfo.vue';

export default {
    props:["pagetitle","describe","href","read","like","comment"],
    components:{
        articleInfo
    },
    methods:{
    }
}
</script>

<style>

.article-item{
    margin: 0.313em 0em 0.313em 0em;
    padding: 1.44em 0.938em 1.44em 0.938em;
}

.article-item-hold{
    margin: 0.313em 0em 0.313em 0em;
    padding: 1.44em 0.938em 1.44em 0.938em;
    background-color: rgb(245, 245, 245);
    border-radius: 0.313em;
}

.article-item-info {
    float:right;
}

.article-item a {
  text-decoration:none;
  color: rgb(182, 182, 182);
}

.article-item-hold a {
  text-decoration:none;
  color: rgb(182, 182, 182);
}

.article-item-hold a:hover{
    color: black;
    text-decoration:none;
}

.item-border .article-item-desc{
  display:block;
  margin-bottom:0.625em;
}

.item-border span p{
  line-height:1.87em;
}

</style>