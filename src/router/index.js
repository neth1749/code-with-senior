import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading the views
const Home = () => import('@/views/Home.vue')
const ProductDetail = () => import('@/views/ProductDetail.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home - Vegetables Store',
      requiresAuth: false,
    },
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true, // Pass route params as props to the component
    meta: {
      title: 'Product Detail',
      requiresAuth: false,
    },
  },
  // 404 route
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('@/views/NotFound.vue'),
  //   meta: {
  //     title: '404 - Page Not Found',
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Navigation guards for dynamic title change and auth check
router.beforeEach((to, from, next) => {
  // Dynamically set the page title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  // Handle auth routes
  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
})

export default router

// Example function to check if the user is authenticated
function isUserAuthenticated() {
  // Implement your auth logic here
  return true; // or false based on your auth check
}
