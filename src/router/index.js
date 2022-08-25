import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: 'Light My Bricks!'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {title: 'About'
    }
  },
  {
    path: '/EditUsbBanks',
    name: 'EditUsbBanks',
    component: () => import('../views/EditUsbBanksView.vue'),
    meta: {title: 'Edit USB Banks'
    }
  },
  {
    path: '/SetColourTheme',
    name: 'SetColorTheme',
    component: () => import('../views/SetColorThemeView.vue'),
    meta: {title: 'Set Color Themes'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
