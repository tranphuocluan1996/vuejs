<template>
   <nav>
    <ul class="ass1-header__menu">
        <li>
            <a href="#">Danh mục</a>
            <div class="ass1-header__nav" style="display: none;">
                <div class="container">
                    <ul>
                        <li
                         v-for="item in getter_get_state_categories"
                         v-bind:key="item.id"
                        ><router-link v-bind:to="getLinkCategory(item)">{{item.text}}</router-link></li>
                       
                    </ul>
                   
                </div>
                <div class="ass1-header__menu-transition" style="left: 319.594px; height: 30px; width: 73px;"></div>
            </div>
        </li>
   
    </ul>
</nav>
</template>

<script>
import {formatUrlVietname} from '../helpers'
import { mapGetters } from 'vuex'
export default {
name:"header-navigation",
computed: {
    ...mapGetters([
        'getter_get_state_categories'
    ]),
   
},
 methods: {
        getLinkCategory(item){
            return {
                name:'home-page',
                query:{
                    category:formatUrlVietname(item.text),
                    tagIndex:item.id
                }
            }
        }
    },
  

}
</script>

<style>
.ass1-header__nav > .container ul {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .ass1-header__nav > .container ul li {
        width: 25%;
    }
    .ass1-header__nav > .container ul li:first-child {
        margin-top: 8px;
    }
</style>