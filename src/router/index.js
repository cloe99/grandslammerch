import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Category from '../views/Category.vue'
import Cart2 from "../views/Cart2"
import Orders from "../views/Orders"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart2',
    component: Cart2
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/:category',
    component: Category
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
