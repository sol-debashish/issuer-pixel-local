<template>
</template>

<script>
    import User from "../apis/User";
    export default {
        data() {
            return {
                events : ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],
                isLoggedIn : false,
                warningTimer : null,
                logoutTimer : null,
                conform : null,
                ignoreLogout : [
                    'videoQuestionnaire',
                    'audioQuestionnaire',
                ]
            }
        },

        methods: {
            setTimer : function(){

                this.warningTimer = setTimeout(this.warningMessage, 29 * 60 * 1000)
                this.logoutTimer = setTimeout(this.logoutUser, 30 * 60 * 1000)

            },
            resetTimer: function(){
                this.clearLogoutTimer()
                this.setTimer();
            },
            warningMessage: function () {
                if(!!jconfirm.instances[0]){
                    jconfirm.instances[0].close();
                }
                this.conform = $.confirm({
                    title: 'Warning!',
                    content: "Logout within a minute. Are you still with us?",
                    columnClass: 'medium',
                    type: 'orange',
                    typeAnimated: true,
                    buttons: {
                        ok: function () {
                        }
                    }
                });
            },
            logoutUser: function () {
                if(!!jconfirm.instances[0]){
                    jconfirm.instances[0].close();
                }
                let logoutFormData = new FormData();
                logoutFormData.append('type', 'auto');
                User.logout(logoutFormData).then(() => {
                    localStorage.clear();
                    this.isLoggedIn = false;
                    this.isLoggedInForQuestionnaire = false;
                    this.$router.push({name: "Home"});
                });
            },
            clearLogoutTimer: function(){
                clearTimeout(this.warningTimer)
                clearTimeout(this.logoutTimer)
            },
            setAutoLogout: function () {
                this.events.forEach(function(event){
                    window.addEventListener(event, this.resetTimer)
                }, this)
                this.setTimer();
            }
        },
        watch:{
            $route (to, from){
                this.isLoggedIn = !!localStorage.getItem("token");
                this.events.forEach(function(event){
                    window.removeEventListener(event, this.resetTimer)
                }, this)
                this.clearLogoutTimer()
                if(! this.ignoreLogout.includes(to.name) && this.isLoggedIn)
                {
                    this.setAutoLogout()
                }
            }
        },
    }
</script>

<style>
</style>
