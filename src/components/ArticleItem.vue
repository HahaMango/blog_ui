<template>
  <div class="article-item" onmouseover="this.className='article-item-hold'" onmouseout="this.className='article-item'">
    <div class="item-border">
      <a :href="href">
        <div>
          <div class=".container-fluid">
            <div class="row">
              <div class="col-12 col-md-10">
                <h2 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{pagetitle}}</h2>
              </div>
              <div class="col-2 col-md-1" v-if="isAdmin">
                <button class="btn btn-danger" style="float:right;margin-left:10px" v-on:click="DeleteArticleEvent($event)">
                  <ion-icon name="trash"></ion-icon>
                </button>
              </div>
              <div class="col-2 col-md-1" v-if="isAdmin">
                <button class="btn btn-warning" style="float:right;" v-on:click="EditArticleEvent($event)">
                  <ion-icon name="settings"></ion-icon>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="article-item-desc"><p>{{describe}}</p></span>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <articleInfo class="article-item-info" :read="read" :like="like" :comment="comment"/>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import articleInfo from './ArticleInfo.vue';
import cm from '../Communication.js'

export default {
    props:["pagetitle","describe","href","read","like","comment","isAdmin"],
    components:{
        articleInfo
    },
    methods:{
      DeleteArticleEvent:function(e){
        var id = this.href;
        id = id.slice(8,id.length);
        cm.DeleteArticle(id,function(){
          console.log("删除文章成功");
        });
        e.stopPropagation();
        e.preventDefault();
      },
      EditArticleEvent:function(e){
        var id = this.href;
        id = id.slice(8,id.length);
        window.location = "#admin"+id;
        e.stopPropagation();
        e.preventDefault();
      }
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
    box-shadow:0.063em 0.063em 1.125em 0.189em rgb(197, 197, 197);
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