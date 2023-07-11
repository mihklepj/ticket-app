import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Assignments from '../views/assignments.vue'
import Chat from '../views/chat.vue'
import Departments from '../views/departments.vue'
import Processes from '../views/processes.vue'
import Tickets from '../views/tickets.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/assignments',
        name: 'Assignments',
        component: Assignments
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/departments',
        name: 'Departments',
        component: Departments
    },
    {
        path: '/processes',
        name: 'Processes',
        component: Processes
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets
    },
    // Catchall 404
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
