<template>
  <div>
    <div id="page-wrap">
      <div class="line"></div>
      <h3 v-if="empty" class="empty">Your cart is empty</h3>
      <CartView
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        v-on:remove-item="removeFromCart($event)"
      />
      <h3 id="total-price">Total : {{ totalPrice }}</h3>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartView from "../../components/CartView.vue";

export default {
  components: {
    CartView,
  },

  data() {
    return {
      cartItems: [],
    };
  },

  methods: {
    async removeFromCart(product) {
      await axios.delete(
        `http://localhost:8000/api/orders/user/1/product/${product}`
      );

      let indexCart = this.cartItems
        .map(function (item) {
          return item.code;
        })
        .indexOf(product);
      this.cartItems.splice(indexCart, 1);
      this.empty = this.cartItems.length === 0;
    },
  },

  computed: {
    totalPrice() {
      return this.cartItems
        .reduce(
          (sum, item) => sum + parseInt(item.price.replace(/\./g, ""), 10),
          0
        )
        .toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/\s/g, "");
    },

    empty() {
      return this.cartItems.length === 0;
    },
  },

  async created() {
    const result = await axios.get("http://localhost:8000/api/orders/user/1");

    let data = Object.assign(
      {},
      ...result.data.map((result) => ({
        cart_items: result.products,
      }))
    );

    this.cartItems = data.cart_items;
  },
};
</script>

<style scoped>
.line {
  border-bottom: 1px solid #ddd;
  margin: 0;
  margin-top: 100px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
  color: #b8860b;
}

#checkout-button {
  display: block;
  margin: 20px auto;
  width: 90%;
  max-width: 400px;
  padding: 12px;
}

.empty {
  text-align: center;
}
</style>
