const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Login 3',
      path: '/auth/login',
      component: () => import('@/views/authentication/auth3/LoginPage3.vue')
    },
    {
      name: 'Register 3',
      path: '/auth/register',
      component: () => import('@/views/authentication/auth3/RegisterPage3.vue')
    },
    {
      name: 'Error 404',
      path: '/pages/error',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    }
  ]
};

export default AuthRoutes;
