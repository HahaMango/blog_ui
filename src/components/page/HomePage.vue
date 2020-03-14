<template>
  <div>
    <div id="home-background">
      <div class="container">
        <div id="home-title" class="row">
          <span class="col-md-10 col-12 text-monospace">Chiva Studio</span>
          <div class="col-md-2 col-12 d-block d-sm-none">
            <button id="profile-button" class="btn btn-light" v-on:click="ProfileClick">
              <ion-icon name="bookmark"></ion-icon>Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="home-context">
      <div class="row">
        <div class="col-md-3 col-0 d-none d-sm-block">
          <div class="card" style="width: 100%;margin-left:auto;margin-right:auto;margin-top:5px;">
            <img src="img/19171808.jpg" class="card-img-top" alt="..." />
            <div class="card-body" style="padding-right:0px;padding-left:15px;">
              <h3 class="card-title text-monospace"><b>Chiva Chen</b></h3>
              <p class="card-text text-monospace">Software Developers</p>
              <p class="card-text text-monospace">
                <ion-icon name="construct"></ion-icon>:ASP.NET Core,Web App.
              </p>
              <p class="card-text text-monospace">
                <ion-icon name="locate"></ion-icon>:Guangzhou China.
              </p>
              <p class="card-text text-monospace">
                <ion-icon name="logo-github"></ion-icon>:
                <a href="https://github.com/HahaMango" target="_blank">HahaMango</a>
              </p>
              <p class="card-text text-monospace">
                  <ion-icon name="logo-instagram"></ion-icon>:
                  <a href="https://www.instagram.com/chiva_mango/" target="_blank">Chiva Chen</a>
              </p>
              <p class="card-text text-monospace">
                <ion-icon name="mail"></ion-icon>:
                <a href="mailto:q932104843@outlook.com">q932104843@outlook.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-12" id="loading-articles">
          <div class="d-flex justify-content-center" v-if="articles.length == 0">
            <div class="spinner-border" role="status" style="margin-top:2em;">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <articleItem
            v-for="article in articles"
            :key="article.Href"
            :pagetitle="article.Title"
            :describe="article.Describe"
            :href="article.Href"
            :read="article.Read"
            :like="article.Like"
            :comment="article.Comment"
            :isAdmin="isAdmin"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//API：获取文章信息（分页）
import articleItem from "../ArticleItem.vue";
import ArticleItem from "../../ArticleItem.js";
import Http from "../../Communication.js";
import ls from "../../LoginServer.js"

let p = null;

export default {
  data() {
    return {
      articles: [
        
      ],
      currentUser:null,
      isAdmin:false
    };
  },
  created: function() {
    p = this;

    var loginserver = ls.GetLoginServer();
    if(loginserver != null){
      loginserver.getUser().then(function(user){
        if(user){
          p.currentUser = user;
          if(p.currentUser.profile.role != undefined){
            for(var i =0;i< p.currentUser.profile.role.length;i++){
              if(p.currentUser.profile.role[i] == "ADMIN"){
                p.isAdmin = true;
              }
            }
          }
        }
      });
    }
    
    Http.GetArticles(0, 10, function(articles) {
      for (var i = 0; i < articles.length; i++) {
        p.articles.push(articles[i]);
      }
    });
  },
  components: {
    articleItem
  },
  methods: {
    ProfileClick: function() {
      window.location.hash = "#profile";
    }
  }
};
</script>

<style>
#home-background {
  /*padding-top: 3.125em;*/
  background-color: rgb(49, 49, 49);
}

#home-title {
  padding-top: 3.125em;
  padding-bottom: 3.125em;
}

#home-title span {
  font-size: 3.75em;
  color: rgb(235, 235, 235);
}

#profile-button {
  margin-top: 2.5em;
}
</style>