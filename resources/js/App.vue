<template>
  <div id="app">
    <router-view />
      <Feedback />
      <auto-logout />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Feedback from './components/Feedback'
import AutoLogout from './components/AutoLogout'

export default {
    data() {
        return {
            appName: process.env.MIX_APP_NAME,
            isVisible: false,
        }
    },
    methods: {
        initToTopButton: function() {
            $(document).bind('scroll', function() {
                var backToTopButton = $('.back-to-top');
                if ($(document).scrollTop() > 250) {
                    backToTopButton.addClass('isVisible');
                    this.isVisible = true;
                } else {
                    backToTopButton.removeClass('isVisible');
                    this.isVisible = false;
                }
            }.bind(this));
        },
        backToTop: function() {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }
    },
    mounted: function() {
        this.initToTopButton();
    },
      components: {
        Feedback,
          AutoLogout,
        Navigation
      },
};
</script>

<style>
</style>
