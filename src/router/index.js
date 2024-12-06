import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/product/ProductList.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import CartOverview from "../views/cart/CartOverview.vue";
import NotFound from "../views/errors/NotFound.vue";

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
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "404" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 50);
      });
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
