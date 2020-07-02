<template>
  <main>
		<div class="container">
			
			<!--sections-->
			<div class="row">
				<div class="col-lg-8">
					<div class="ass1-section__list">
						<post-list v-if="getter_get_resultPost_api.length"/>
						<h1 v-else>
							rỗng
						</h1>
					</div>
				</div>
				<div class="col-lg-4">
					<aside class="ass1-aside">
						<div class="ass1-content-head__t">
							<div>Bài viết gần đây của bạn.</div>
						</div>
						<div>Vui lòng đăng nhập để xem nội dung này 
							<a href="#">Đăng nhập</a>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import PostList from '../components/PostList'
export default {
	name:"home-page",
	  watch: {
    $route(to, from) {
		var tagIndex = to.query.tagIndex
		if(tagIndex){
			//commit thang actions category
			this.getListNewByCategory({tagIndex});

		}else{
			//tagIndex không có giá trị 
			//comiiit lại thằng pagination
			this.getListPostHasPaging({})
		}
     
    }
  },
   computed: {
      ...mapGetters([
        'getter_get_resultPost_api'
      ])
    },
  methods: {
	  ...mapActions([
		  'getListNewByCategory',
		  'getListPostHasPaging'
	  ])
  },
	components:{
		PostList
	}
}
</script>

<style>

</style>