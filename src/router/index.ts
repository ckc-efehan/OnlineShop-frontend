import { createRouter, createWebHistory } from 'vue-router';
import RegisterLoginSite from '../components/registerLoginSite.vue';
import AdminSite from '../components/AdminSite.vue';

const routes = [
  {
    path: '/',
    name: 'RegisterLoginSite',
    component: RegisterLoginSite,
  },
  {
    path: '/admin',
    name: 'AdminSite',
    component: AdminSite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
