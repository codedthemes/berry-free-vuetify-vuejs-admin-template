import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

const rootRedirect = {
  path: '/',
  redirect: '/dashboard/default'
};

const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/pages/maintenance/error.vue'),
  meta: { requiresAuth: false }
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [rootRedirect, ...routes, notFoundRoute]
});
