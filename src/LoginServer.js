let LoginServer = null;

export default{
    GetLoginServer : function(){
        if(LoginServer != null){
            return LoginServer;
        }
        var config = {
            authority: "https://user.hahamango.cn",
            client_id: "blogjs",
            redirect_uri: "https://www.hahamango.cn/callback.html",
            response_type: "id_token token",
            scope: "openid profile mangoblogApi mango.profile",
            post_logout_redirect_uri: "https://www.hahamango.cn",
            userStore: new Oidc.WebStorageStateStore({ store: window.sessionStorage })
        };
        LoginServer = new Oidc.UserManager(config);
        return LoginServer;
    }
}