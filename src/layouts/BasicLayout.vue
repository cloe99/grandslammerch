<template>
  <div class="basic-layout">
  <Menu/>
    <div id="advice" v-if="!token">
      <figure>
        <router-link to="/login">
          <h4>Log in to buy!</h4>
        </router-link>
      </figure>
    </div>

    <div class="">
        <slot/>
    </div>
  </div>
  <Cart/>
  <Footer/>
</template>

<script>
import Menu from "../components/Menu"
import Cart from "../components/Cart/Cart"
import Footer from "../components/Footer"
import { getTokenApi } from "../api/token";


export default {
    name: 'BasicLayout',
    components: {
        Menu,
        Cart,
        Footer
    },
    setup(){
      const token = getTokenApi();

      return {
      token,
    };
    }
}
</script>

<style lang="scss" scoped>
#advice{
  figure{
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    background-color:#6d04c6;

    h4 {
      width: 20%;
      text-align: center;
      font-family: "Besley";
      color: white;
      padding: 10px;
    }
  }
}

</style>