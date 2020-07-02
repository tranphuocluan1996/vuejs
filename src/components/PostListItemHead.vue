<template>
  <div class="ass1-section__head">
        <router-link v-bind:to="{name:'user-page', params:{id:post.USERID}}" class="ass1-section__avatar ass1-avatar"><img
                v-bind:src=getImageHeaderPost v-bind:alt="post.fullname"></router-link>
        <div>
            <router-link v-bind:to="{name:'user-page', params:{id:post.USERID}}"  class="ass1-section__name">{{post.fullname}}</router-link>
            <span class="ass1-section__passed">{{getTimeMomentTimeAgo}}</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name:"post-list-item-head",
    props:{
        post:{type:Object, default:{}}
    },
   
    computed: {
        getTimeMomentTimeAgo(){
            if(moment(this.post.time_added).fromNow()) return moment(this.post.time_added).fromNow()
            return 0;
        },
        getImageHeaderPost(){
           if(this.post.profilepicture)  return this.post.profilepicture
           return '/dist/images/avatar-02.png'
        },
    },
    
}
</script>

<style>

</style>