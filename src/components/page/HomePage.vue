<template>
    <div>
        <div id="home-background">
            <div class="container">
                <div id="home-title" class="row">
                    <span class="col-md-10 col-12">Chiva Studio</span>            
                    <div class="col-md-2 col-12">
                        <button id="profile-button" class="btn btn-light" v-on:click="ProfileClick">
                            <ion-icon name="bookmark"></ion-icon>Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="home-context">
            <div class="row">
                <div class="col">
                    <articleItem 
                        v-for="article in articles" 
                        :key="article.Href"
                        :pagetitle="article.Title"
                        :describe="article.Describe"
                        :href="article.Href"
                        :read="article.Read"
                        :like="article.Like"
                        :comment="article.Comment"
                        />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
//API：获取文章信息（分页）
import articleItem from '../ArticleItem.vue'
import ArticleItem from '../../ArticleItem.js'
import Http from '../../Communication.js'

let p = null;

export default {
    data(){
        return{
            articles:[
                new ArticleItem('sdfw','sdfw','3',10,0,1,'dfww',new Date()),
                new ArticleItem('sdfwsxdf','12dsdfws','3',145,0,1,'dfww',new Date()),
            ]
        }
    },
    created : function() {

        p = this;
        Http.GetArticles(0,10,function(articles) {
            for(var i =0;i<articles.length;i++){
                p.articles.push(articles[i]);
            }
        })
    },
    components:{
        articleItem
    },
    methods:{
        ProfileClick:function(){
            window.location.hash = "#profile";
        }
    }
}
</script>

<style>

#home-background{
    /*padding-top: 3.125em;*/
    background-color: rgb(49, 49, 49);
}

#home-title{
    padding-top: 3.125em;
    padding-bottom: 3.125em;
    
}

#home-title span{
    font-size: 3.75em;
    color: rgb(235, 235, 235);
}

#profile-button{
    margin-top: 2.5em;
}
</style>