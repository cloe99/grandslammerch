<template>  
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <router-link to="/"><a><img class="image" src="../assets/Logo.png" alt="Logo"/></a></router-link>

        <ul>
            <router-link class="item" to="/australian-open"><li><a>Australian Open</a></li></router-link>
            <router-link class="item" to="/roland-garros"><li><a>Roland Garros</a></li></router-link>
            <router-link class="item" to="/wimbledon"><li><a>Wimbledon</a></li></router-link>
            <router-link class="item" to="/us-open"><li><a>Us Open</a></li></router-link>            
            
            <router-link class="item" to="/login" v-if="!token"><i class="user icon"/></router-link>

            <template v-if="token">
                <router-link class="item" to="/orders"><i class="edit icon"/></router-link>
                <span class="ui item cart cart" @click="openCart">
                    <a class="item"><i class="shopping cart icon"></i></a>
                </span>
                <span class="ui white item logout" @click="logout">
                    <a class="item"><i class="sign-out icon"></i></a>
                </span>
            </template>
        </ul>
    </nav>
   <section></section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getTokenApi, deleteTokenApi } from "../api/token";
import { getCategoriesApi } from "../api/category";

export default {
  name: "Menu",
  setup() {
    let categories = ref(null);
    const token = getTokenApi();
    const store = useStore();
    
    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });
    
    const logout = () => {
      deleteTokenApi();
      location.replace("/");
    };
    
    const openCart = () => {
      store.commit("setShowCart", true);
    };
    
    return {
      token,
      logout,
      categories,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Besley:wght@500&display=swap');
*{
    z-index:10 !important;
    padding: 0;
    margin: 0;
    scrollbar-color: #6969dd #e0e0e0;
}

nav{
    background: white;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    height: 80px;
    width: 100%; 
    position: fixed;

    .item{
    color: #6d04c6;
    font-family: "Besley";
    font-size: 17px;
    cursor: pointer;
    margin-left: 5px;

    a.active,a:hover{
    color: rgb(201, 199, 199);
    transition: .5s;
    }
    }
    
    .image{
        width: 130px;
        margin-top: 7px;
        margin-left: 35px;
    }
}

nav ul{
    float: right;
    margin-right: 10px;

    li{
        display: inline-block;
        line-height: 80px;
        font-family: "Besley"
    }
    li a{
        color: #6d04c6;
        font-size: 17px;
        padding: 7px 13px;
    }

    a.active, a:hover{
    color: rgb(201, 199, 199);
    transition: .5s;
    }
}

//responsive
#check{
    display: none;
}

.checkbtn{
    font-size: 30px;
    color: #6d04c6;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

@media (max-width: 952px){
    label.logo{
        font-size: 30px;
        padding-left: 50px;
    }
    nav ul li a{
        font-size: 16px;
    }
}
@media(max-width: 858px){
    .checkbtn{
        display: block;
    }
    ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: white; 
        top: 80px;
        left: -100%;
        text-align: center;
        transition: all .5s;
    }
    nav ul li{
        display: block;
        margin: 20px 0;
        line-height: 30px;
    }
    nav ul li a{
        font-size: 20px;
    }
    a:hover,a.active{
        background: none;
        color: rgb(201, 199, 199);
    }
    #check:checked ~ ul{
        left: 0;
    }
}

section{
    height: calc(100px - 20px);
}
</style>