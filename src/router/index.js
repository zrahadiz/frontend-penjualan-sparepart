import { createRouter, createWebHistory } from 'vue-router'
import ManageView from '../views/ManageProduct.vue'
import SelectedProductEdit from '../views/SelectedProduct.vue'
import SelectedBuyProduct from '../views/SelectedBuyProduct.vue'
import DataPenjualan from '../views/Penjualan.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ManageView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: SelectedProductEdit
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/BuyProduct.vue')
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: SelectedBuyProduct
    },
    {
      path: '/data-penjualan',
      name: 'penjualan',
      component: DataPenjualan
    },
  ]
})

export default router
