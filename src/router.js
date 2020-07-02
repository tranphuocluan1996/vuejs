import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import pages tương ứng với mỗi đường dẫn 
import HomePage from './pages/HomePage.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import ChangePassword from './pages/ChangePassword.vue';
import UserProfile from './pages/UserProfile.vue';
import PostDetail from './pages/PostDetail.vue';
import PostUpload from './pages/PostUpload.vue'
import UserPage from './pages/PostUpload.vue'


const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/user/:id/password", name: "password", component: ChangePassword },
  { path: "/user/:id/profile", name: "profile", component: UserProfile },
  { path: "/post-detail/:id", name: "post-detail", component: PostDetail },
  { path: "/upload", name: "upload", component: PostUpload },
  { path: "/user/:id", name: "user-page", component: UserPage }
];


const router = new VueRouter({
  routes // short for `routes: routes`
});



export default router;

/*

/user/foo ->/user/bar ==> /user/ giống nhau

*/