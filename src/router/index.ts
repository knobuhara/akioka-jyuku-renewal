import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Admission from '../pages/Admission.vue'
import Instructors from '../pages/Instructors.vue'
import Pricing from '../pages/Pricing.vue'
import News from '../pages/News.vue'
import FAQ from '../pages/FAQ.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admission',
    name: 'Admission',
    component: Admission
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: Instructors
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
