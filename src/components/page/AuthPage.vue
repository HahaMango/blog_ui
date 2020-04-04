<template>
    
</template>

<script>
import ls from '../../LoginServer.js'

export default {
    created: function() {
        console.log("初始化");
    
        let p = this;
        var loginServer = ls.GetLoginServer();
        loginServer.getUser().then(function(user){
            if(user){
                window.location = "/";
            }else{
                loginServer.signinRedirect();
                console.log("登陆请求");
            }
        });
    }
}
</script>