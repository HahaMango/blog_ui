<template>
  <div class="blog-context">
    <div :class="[(hash.search('#article') == -1)?'context':'']">
      <homePage v-if="hash == '#home'" />
      <div v-if="hash.search('#article') >= 0">
        <articlePage/>
      </div>
      <authPage v-if="hash.search('#auth') >= 0"/>
      <profilePage v-if="hash == '#profile'"/>
    </div>
    <div>
      <div class="blog-footer">
        <span style="margin-left:40px;"><i>Power By .Net Core <a href="https://github.com/HahaMango/Mango-Blog-" target="_blank"><ion-icon name="logo-github"></ion-icon></a> /</i></span>
        <span><i>and Vue.js </i><a href="https://github.com/HahaMango/blog_ui" target="_blank"><ion-icon name="logo-github"></ion-icon></a></span>
      </div>
    </div>
  </div>
</template>

<script>
//API：获取文章信息（分页）
//API：获取文章信息
//API：获取文章内容
//API：点赞文章
//API：获取该文章中的评论（分页）
//API：发布评论
import homePage from "./page/HomePage.vue";
import articlePage from "./page/ArticlePage.vue";
import adminPage from './page/AdminPage.vue';
import profilePage from './page/ProfilePage.vue'
import authPage from './page/AuthPage.vue'

export default {
  props: ["hash"],
  components: {
    homePage,
    articlePage,
    adminPage,
    profilePage,
    authPage
  }
};
</script>

<style>

.blog-context{
  width: 100%;
}

.context{
  /*width: 900px;*/
  margin: 0px auto 0px auto;
}

.blog-footer{
  width: 335px;
  margin: 0px auto 0px auto;
  color: gray;
  padding-top: 10px;
  padding-bottom: 40px;
}

.blog-footer a{
  color: gray;
}

</style>