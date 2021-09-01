<template>
  <div class="ui container">
    <div class="ui card product">
      <div class="image">
        <img :src="API_URL + product.image.url" :alt="product.name" />
      </div>

      <div class="content">
        <div class="header">{{ product.name }}</div>
        <div class="description">${{ product.price }}</div>
      </div>

      <div class="ui button" @click="addProductCart(product.id)">
        Add to cart
      </div>

    </div>
  </div>
</template>

<script>
import { API_URL } from "../utils/constants";
import { addProductCartApi } from "../api/cart";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  setup(props) {
    const addProductCart = (idProduct) => {
      addProductCartApi(idProduct);
    };
    
    return {
      API_URL,
      addProductCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.container{
  padding: 15px;
  margin-bottom: -20px;
  margin-top: 15px;
}

.product {
  &:hover {
    .ui.button {
      min-height: 36px;
    }
  }
  .ui.button {
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;
    background-color: #6d04c6;
    color: white;
  }
}
</style>