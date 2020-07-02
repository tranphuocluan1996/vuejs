<template>
  <div class="ass1-section__footer">
    <a href="#" class="ass1-section__btn-comment ass1-btn-icon"><i
            class="icon-Comment_Full"></i><span>{{getComment}}</span></a>
</div>
</template>

<script>
export default {
    name:"PostListItemFooter",
    props:{
        post:{type:Object, default:{}}
    },

    computed: {
      getComment(){
        return this.post.count;
      }
    },
}
</script>

<style>

</style>