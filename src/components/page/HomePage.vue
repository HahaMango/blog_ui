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
            <img src="img/profile.jpg" class="card-img-top" alt="..." />
            <div class="card-body" style="padding-right:0px;padding-left:15px;">
              <h3 class="card-title text-monospace">Chiva Chen</h3>
              <p class="card-text text-monospace font-italic">Software Developers</p>
              <p class="card-text text-monospace font-italic">
                <ion-icon name="construct"></ion-icon>:ASP.NET Core,Web App.
              </p>
              <p class="card-text text-monospace font-italic">
                <ion-icon name="locate"></ion-icon>:Guangzhou China.
              </p>
              <p class="card-text text-monospace font-italic">
                <ion-icon name="logo-github"></ion-icon>:
                <a href="https://github.com/HahaMango" target="_blank">HahaMango</a>
              </p>
              <p class="card-text text-monospace font-italic">
                  <ion-icon name="logo-instagram"></ion-icon>:
                  <a href="https://www.instagram.com/chiva_mango/" target="_blank">Chiva Chen</a>
              </p>
              <p class="card-text text-monospace font-italic">
                <ion-icon name="mail"></ion-icon>:
                <a href="mailto:q932104843@outlook.com">q932104843@outlook.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-9 col-12">
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
import articleItem from "../ArticleItem.vue";
import ArticleItem from "../../ArticleItem.js";
import Http from "../../Communication.js";

let p = null;

export default {
  data() {
    return {
      articles: [
        new ArticleItem(
          "sdfw",
          "今天跟大家来介绍一下一个OPC UA协议的开源库，我们使用的现场设备为西门子的S7-1500 CPU，西门子的S7-1500在V2.1版本后就直接可以作为OPC UA的服务器来供其他客户端访问。所以用OPC协议来进行数据采集就是最好的方式。",
          "3",
          10,
          0,
          1,
          "dfww",
          new Date()
        ),
        new ArticleItem(
          "sdfwsxdf",
          "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.",
          "3",
          145,
          0,
          1,
          "dfww",
          new Date()
        )
      ]
    };
  },
  created: function() {
    p = this;
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