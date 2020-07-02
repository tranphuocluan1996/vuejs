<template>
  <div>
      <post-list-item 
      v-for="items in getter_get_resultPost_api"
      v-bind:key="items.PID"
      v-bind:post="items"
      />
      
   
    <button v-if="getter_get_resultPost_api &&getter_get_resultPost_api.length" class="load-more ass1-btn"><span>Xem thêm</span></button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PostListItem from '../components/PostListItem'
import {mapActions} from 'vuex'
export default {
    name:"post-list",
    // props:{
    //     post:{type:Object, default:{}}
    // },
    
    data() {
      return {
        
      }
    },
    components:{
        PostListItem
    },
    computed: {
      ...mapGetters([
        'getter_get_resultPost_api'
      ])
    },
}
</script>

<style>

</style>