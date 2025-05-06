import { createWebHistory, createRouter } from 'vue-router'
// 公共路由
export const constantRoutes = [
    {
      path: '/login',
      component: () => import('./components/HelloWorld.vue'),
      hidden: true
    },
    {
        path: '/',
        component: () => import('./components/HelloWorld.vue'),
        hidden: true
      },
];
const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { top: 0 }
    },
  });
  
  router.beforeEach((to, from, next) => {
    // 路由跳转前
    console.log('[beforeEach]', to, from); // 路由跳转后
    next();
  });
  router.afterEach((to, from) => {
    
    // 路由跳转后 
  })
  export default router;