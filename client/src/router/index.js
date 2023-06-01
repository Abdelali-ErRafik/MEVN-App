import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddPostView from '../views/AddPostView.vue'
import PostView from '../views/PostView.vue'
import EditPostView from '../views/EditPostView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPostView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
