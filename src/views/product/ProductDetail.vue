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
      }, 2000);
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
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2c3e50;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
  animation: slide-in-out 3s forwards;
  z-index: 9999;
  max-width: 90%;
  color: #ecf0f1;
  text-align: center;
}

@keyframes slide-in-out {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }

  10%,
  90% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}
</style>
