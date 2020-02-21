<template>
    <div id="article-background">
        <div id="article-head">
            <div class="container">
                <span>
                    <a href="#home">
                        <span>
                            <ion-icon name="arrow-round-back"></ion-icon>
                        </span>
                    </a>
                <span>Chiva Studio</span>
            </span>
            </div>
        </div>
        <hr/>
        <div id="article-title" class="container">
            <div class="row">
                <h2 class="col-12">{{title}}</h2>
                <div class="row col-12" id="article-subtitle">
                    <p class="col-md-10 col-12">{{date}}</p>
                    <articleInfo class="col-md-2 col-12" :read="read" :like="like" :comment="comment"/>                    
                </div>
                <div class="d-flex justify-content-center col-12" v-if="content == null">
                    <div class="spinner-border" role="status" style="margin-top:2em;">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="col-12" id="editor">
                </div>
            </div>
        </div>
        <hr/>
        <div class="container">
            <div class="row" v-if="commentItems.length != 0">
                <h3 class="col-12">评论</h3>
                <commentItem 
                    v-for="c in commentItems"
                    class="commentitem-test col-12" 
                    :key="c.Id"
                    v-on:reply="ClickEvent" 
                    :username="c.UserName"
                    :comment="c.Comment"
                    :date="c.Date"/>
                <div class="d-flex justify-content-center col-12" v-if="spinnersDisplayControl">
                    <div class="spinner-border" role="status" style="margin-top:2em;">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="text-center col-12" style="margin-top:20px;">
                    <button id="more-comment" v-on:click="GetMoreComment">更多 <ion-icon name="arrow-dropdown"></ion-icon></button>
                </div>
            </div>
            <div class="row reply-div">
                <div class="col-md-6 col-12">
                </div>
                <div class="col-md-6 col-12">
                    <comment id="comment-test" v-on:CommentClick="commentClick"/>
                </div>                
            </div>
        </div>
        <div id="like-div" class="d-none d-sm-block">
            <button class="btn btn-light" id="to-top-button" v-on:click="ToTopButton"><ion-icon name="arrow-round-up"></ion-icon></button>            
            <button class="btn btn-light" id="like-button" v-on:click="LikeButton"><ion-icon name="heart-empty"></ion-icon></button>
        </div>
    </div>
</template>

<script>
//API获取文章信息
//API获取文章内容
//API点赞文章
//API阅读数加一
//API获取该文章中的评论（分页）
import articleInfo from '../ArticleInfo.vue';
import comment from '../Comment.vue'
import commentItem from '../CommentItem.vue'
import Http from '../../Communication.js'
import Comment from '../../Comment.js'
import Helper from '../../Helper.js'

let p = null;

export default {
    data(){
        return{
            id:null,
            title:null,
            date:null,
            content:null,
            read:0,
            like:0,
            comment:0,
            commentItems:[],
            replyText :"",
            currentDate:new Date(),
            spinnersDisplayControl:false
        }
    },
    created:function(){  
        p = this;
        var id = window.location.hash;
        id = id.slice(8,id.length);
        p.id = id;
        Http.GetArticle(id,function(article) {
            p.id = id;
            p.title = article.Title;
            p.date = article.Date;
            p.read = article.Read;
            p.like = article.Like;
            p.comment = article.Comment;
        });        
        
        Http.GetArticleContent(id,function(content) {
            p.content = content.Content;
            var testView = editormd.markdownToHTML("editor",{
                markdown:p.content,
                padding:"0px"
            });
            Http.Read(p.id,function(){
                p.read = p.read + 1;
            });
        });

        var s = Helper.LocalToPlues8String(new Date());
        p.currentDate = s;

        Http.GetComments(id,s,10,function(comments) {
            for(var i =0;i<comments.length;i++){
                p.commentItems.push(comments[i]);
            }
        });

        var i =1;
    },
    mounted:function(){
        var likediv = document.getElementById('like-div');
        var width = document.body.clientWidth; 
        var scrollheight = document.documentElement.scrollTop;
        likediv.style.left = (width - 100) + 'px';
        likediv.style.top = (scrollheight + 400) + 'px';
        likediv.style.position = "absolute";
        likediv.style.width = "50px";
        likediv.style.height = "130px";
        window.onscroll = function(){
            scrollheight = document.documentElement.scrollTop;
            likediv.style.top = (scrollheight + 400) + 'px';
        }
    },
    methods:{
        ClickEvent:function(event){
            window.alert(event);
        },
        commentClick:function(username,content) {
            var comment = new Comment("",username,content,Helper.LocalToPlues8String(new Date()));
            Http.AddComment(this.id,comment,function() {
                p.commentItems.unshift(comment);
            });
        },
        ToTopButton:function(){
            document.documentElement.scrollTop = 0;
        },
        LikeButton:function(){
            Http.Like(this.id,function(){
                p.like = p.like + 1;
                alert("点赞成功");
            });
        },
        GetMoreComment:function(){
            p.spinnersDisplayControl = true;
            var cl = p.commentItems.length-1;
            p.currentDate = p.commentItems[cl].Date;
            Http.GetComments(p.id,p.currentDate,10,function(comments) {
                for(var i =0;i<comments.length;i++){
                    p.spinnersDisplayControl = false;
                    p.commentItems.push(comments[i]);
                }
            });
        }
    },
    components:{
        articleInfo,
        comment,
        commentItem
    }
}
</script>

<style>
.reply-div{
    margin-top: 1em;
}

#more-comment{
    background-color: rgb(243, 243, 243);
    border-color: transparent;
    border-radius: 0.625em;
    width: 18.75em;
}

#article-head{
    background-color: rgb(49, 49, 49);
    padding-top: 2.5em;
}

#article-head span{
    font-size: 1.475em;
    color: rgb(221, 221, 221);
}

#article-head a{
    color: rgb(221, 221, 221);
}

#article-head a:hover{
    color: rgb(139, 139, 139);
}

#article-title{
    margin-top: 0.625em;
}

#article-subtitle{
    margin-top: 1.25em;
    color: gray;
}

#comment-test{
    width: 100%;
    /*margin-top: 10px;*/
    /*margin-left: 370px;*/
}

.commentitem-test{
    width: 90%;
    margin: 0.625em auto 0px auto;
    color: gray;
}

#to-top-button{
    margin: 0.125em 0px 0.125em 0px;
    font-size: 1.5em;
}

#like-button{
    margin: 0.125em 0px 0.125em 0px;
    font-size: 1.5em;
}
</style>