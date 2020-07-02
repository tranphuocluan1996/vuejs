<template>
  <div class="ass1-section__item">
        <div class="ass1-section">
           <post-list-item-head v-bind:post="post"
           />
            <post-list-item-content v-bind:post="post"/>
            <post-list-item-footer v-bind:post="post"/>
        </div>
    </div>
</template>

<script>
import PostListItemFooter from './PostListItemFooter'
import PostListItemContent from './PostListItemContent'
import PostListItemHead from './PostListItemHead'
export default {
    name:"post-list-item",
    props:{
        post:{type:Object, default:{}}
    },
    components:{
        PostListItemHead,
        PostListItemContent,
        PostListItemFooter
    }
}
</script>

<style>

</style>