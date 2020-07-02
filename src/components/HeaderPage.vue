<template>
  <header>
        <div class="ass1-header">
            <div class="container">
               <router-link to="/" class="ass1-logo">Meme ZendVn</router-link>
             
                <header-navigation />
                <header-search />
                <a href="#" class="ass1-header__btn-upload ass1-btn">
                    <i class="icon-Upvote"></i> Upload
                </a>

            </div>
        </div>

    </header>
</template>

<script>
import $ from "jquery";
import HeaderSearch from './HeaderSearch'
import HeaderNavigation from './HeaderNavigation'
export default {
    name:"header-page",
    components:{
        HeaderNavigation,
        HeaderSearch
    },
    mounted() {
         $(".ass1-header__menu li > a").click(function(e) {
            // $(".ass1-header__nav").hide();
            $(this).parents().find(".ass1-header__nav").slideToggle(300, 'swing');
        });
        $(".ass1-header__nav ul li >a").click(function (e) { 
            $(this).parents().find(".ass1-header__nav").hide();
         })
    },
}
</script>

<style>

</style>