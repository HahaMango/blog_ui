import ArticleItem from './ArticleItem.js'
import ArticleContent from './ArticleContent.js';
import Comment from './Comment.js'
import ls from './LoginServer.js'

let url = "/api/";

export default {
    GetArticle: function (id, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url + "articles/" + id, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp, function (responseBody) {
            var json = JSON.parse(responseBody);
            var datestring = ParseDate(json.date);
            return new ArticleItem(json.title, json.describe, '#article' + json.id, json.read, json.like, json.comment, json.category, datestring);
        }, success);
        xmlhttp.send();
    },
    GetArticles: function (startIndex, count, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url + "articles/" + startIndex + "/" + count, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp, function (responseBody) {
            var json = JSON.parse(responseBody);
            var articleItems = new Array();
            for (var i = 0; i < json.length; i++) {
                var article = json[i];
                var datestring = ParseDate(article.date);
                var articleitem = new ArticleItem(article.title, article.describe, '#article' + article.id, article.read, article.like, article.comment, article.category, datestring);
                articleItems.push(articleitem);
            }
            return articleItems;
        }, success);
        xmlhttp.send();
    },
    DeleteArticle: function (articleId, success) {
        var loginserver = ls.GetLoginServer();
        if (loginserver != null) {
            loginserver.getUser().then(function (user) {
                if (user) {
                    let xmlhttp = new XMLHttpRequest();
                    xmlhttp.open("Delete", url + "articles/" + articleId, true);
                    SetRequestHeader(xmlhttp);
                    xmlhttp.setRequestHeader("Authorization", "Bearer " + user.access_token);
                    RequestCallback(xmlhttp, null, success);
                    xmlhttp.send();
                } else {
                    console.log("用户授权失败");

                }
            });
        }
    },
    GetArticleContent: function (id, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url + "articles/content/" + id, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp,function(responseBody){
            var json = JSON.parse(responseBody);
            return new ArticleContent(json.articleId, json.content, json.contentType);
        },success);
        xmlhttp.send();
    },
    Like: function (id, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", url + "articles/like/" + id, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp,null,success);
        xmlhttp.send();
    },
    Read: function (id, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", url + "articles/read/" + id, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp,null,success);
        xmlhttp.send();
    },
    GetComments: function (id, date, count, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url + "comments/article/" + id + "/" + date + "/" + count, true);
        SetRequestHeader(xmlhttp);
        RequestCallback(xmlhttp,function(responseBody){
            var commentsJson = JSON.parse(responseBody);
            var comments = new Array();
            for (var i = 0; i < commentsJson.length; i++) {
                var commentJson = commentsJson[i];
                var datestring = ParseDate(commentJson.date);
                var comment = new Comment(commentJson.id, commentJson.userName, commentJson.comment, datestring);
                comments.push(comment);
            }
            return comments;
        },success);
        xmlhttp.send();
    },
    AddArticle: function (articleModel, token, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url + "articles", true);
        SetJsonRequestHeader(xmlhttp);
        xmlhttp.setRequestHeader("Authorization", "Bearer " + token);
        var jsonsource = JSON.stringify(articleModel);
        RequestCallback(xmlhttp,null,success);
        xmlhttp.send(jsonsource);
    },
    AddComment: function (id, comment, success) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url + "comments/article/" + id, true);
        SetJsonRequestHeader(xmlhttp);
        var jsonsource = JSON.stringify(comment);
        RequestCallback(xmlhttp,null,success);
        xmlhttp.send(jsonsource);
    }
}

function SetRequestHeader(xmlhttp) {
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("Accept", "application/json");
}

function SetJsonRequestHeader(xmlhttp) {
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "application/json")
}

function ParseDate(uDate) {
    return uDate.replace('T', " ").split('.')[0];
}

function RequestCallback(xmlhttp, action, success) {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = null;
            if (action != null) {
                result = action(xmlhttp.responseText);
            }
            if (success != null) {
                if (result == null) {
                    success();
                }
                else {
                    success(result);
                }
            }

            return;
        }
        if (xmlhttp.status != 200) {
            console.log("请求失败" + xmlhttp.status);
            return;
        }
    }
}