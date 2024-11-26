import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/product/ProductList.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import CartOverview from "../views/cart/CartOverview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
  },

  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
  },

  {
    path: "/cart",
    name: "cart",
    component: CartOverview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
