<template>
  <div>
    <div id="page-wrap" v-if="product">
      <h5 v-if="notif" class="notif">Item Added sucessfully</h5>
      <div id="img-wrap">
        <img
          :src="`http://localhost:8000${product.imageUrl}`"
          :alt="`Image of ${product.name}`"
        />
      </div>
      <div id="product-details">
        <h2>{{ product.name }}</h2>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p class="rate">Average Rating : {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">
          Add to Cart
        </button>
        <p class="desc">{{ product.description }}</p>
      </div>
    </div>
    <Notfound v-else />
  </div>
</template>

<script>
import axios from "axios";
import Notfound from "../errors/NotFound.vue";

export default {
  components: {
    Notfound,
  },

  data() {
    return {
      product: {},
      notif: false,
    };
  },

  methods: {
    async addToCart(product) {
      await axios.post("http://localhost:8000/api/orders/user/1/add", {
        product: product,
      });
      this.notif = true;
      setTimeout(() => {
        this.notif = false;
      }, 3000);
    },
  },

  async created() {
    const code = this.$route.params.id;
    const result = await axios.get(
      `http://localhost:8000/api/products/${code}`
    );
    this.product = result.data;
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 100px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 50%;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

.rate {
  color: #ffd700;
}

.desc {
  font-size: 1em;
  line-height: 1.5;
  color: #e0e0e0;
  text-align: justify;
}

#price {
  position: absolute;
  top: 20px;
  right: 16px;
  color: #b8860b;
}

.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}
</style>
