import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/product/ProductList.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import CartOverview from "../views/cart/CartOverview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
    meta: { title: "Home" },
  },

  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
    meta: { title: "Product Detail" },
  },

  {
    path: "/cart",
    name: "cart",
    component: CartOverview,
    meta: { title: "Shopping Cart" },
  },
];

const router = createRouter({
  // eslint-disable-next-line
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
