<template>
  <div class="ass1-section__content">
        <p>{{post.post_content}}</p>
        <div class="ass1-section__image">
            <router-link v-bind:to="{name:'post-detail',params:{id:post.PID}}"><img v-bind:src=getImagePostContent
                    alt=""></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"post-list-item-content",
    props:{
        post:{type:Object, default:{}}
    },
    computed: {
        getImagePostContent(){
            if(this.post.url_image) return this.post.url_image
            return '/dist/images/microphone-1209816_1920.jpg'
        }
    },
}
</script>

<style>

</style>