<template>
	<div id="app">
		
		<header-page v-if="isHeader" />

		<router-view></router-view>
		<footer-page v-if="isFooter"/>
		<loading v-bind:class="{show: isLoading}"/>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Loading from './components/Loading'
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
export default {
	name: 'app',
	data () {
		return {
		//  title:"hello lifeCycle"
		}
	},
	components:{
		HeaderPage,
		FooterPage,
		Loading
	},
	//created để gọi api
		created() {
			//console.log(this.$store);
			this.$store.dispatch('getListPostHasPaging',{});
		},

	computed: {
		...mapState([
			'isLoading'
		]),
		isHeader(){
			//tạo 1 cái hàm xử lý :
			// nếu cái hàm này === true thì có header 
			// nếu hàm này === false thì không có header 
			
			var routeArr = this.$route.name;
			var NoHeader = ['login', 'register'];

			if(NoHeader.indexOf(routeArr) === -1){
				return true;
			}else return false;

		},

		

		isFooter(){
			var routeArr = this.$route.name;
			var NoHeader = ['home-page', 'post-detail'];

			if(NoHeader.indexOf(routeArr) === -1){
				return true;
			}else return false;
		},

	},

	// beforeCreate(){
	// 	//console.log('beforeCreate',this.title, document.querySelector('#app'));
	// 	//underfine bởi vì tại thời điểm này đối tượng vue chưa xây dựng dc hệ thống phản ứng
	// },
	// created(){
	// 	//gọi api, call ajax để lấy dữ liệu từ sever về 
	// 	//console.log('created',this.title,document.querySelector('#app'));
	// },
	// beforeMount(){
	// 	//console.log('beforeMount',this.title,document.querySelector('#app'));
	// },
	// mounted(){
	// 	// dùng thư viện liên quan đến jquerry, js thông thường truy suất vào thêm class
	// 	// phải qua mounted dữ liệu của chúng ta mới từ DOM - > cấu trúc HTML
	// 	//console.log('mounted',this.title,document.querySelector('#app'));
	// },
	// beforeUpdate(){
	// 	//dc chạy khi có bất kỳ sự thay đổi gì về dữ liệu bắt sự kiện
	// 	//console.log('beforeUpdate',this.title,document.querySelector('#app'));
	// },
	// updated() {
	// 	//console.log('updated',this.title,document.querySelector('#app'));
	// },
	// destroyed(){
	// 	// Huỷ bỏ các thư viện của bên thứ 3
	// 	//console.log('destroyed',this.title,document.querySelector('#app'));
	// }

}
</script>

<style>

</style>
