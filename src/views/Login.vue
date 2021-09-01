<template>
  <BasicLayout>
    <div class="login">
      <h2>L o g i n</h2>
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input
          type="text"
          placeholder="Username"
          v-model="formData.identifier"
          :class="{error: formError.identifier}"
          />
        </div>
        <div class="field">
          <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
          :class="{error: formError.password}"
          />
        </div>
        <button type="submit" class="ui button fluid" :class="{loading}">
          Login
        </button>
      </form>
      <router-link  class="account" to="/register">Create an account</router-link>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import BasicLayout from "../layouts/BasicLayout";
import { loginApi } from "../api/user";
import { setTokenApi, getTokenApi } from "../api/token";

export default {
  name: "Login",
  components: {
    BasicLayout,
  },
  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter();
    const token = getTokenApi();
    
    onMounted(() => {
      if (token) return router.push("/");
    });
    
    const schemaForm = Yup.object().shape({
      identifier: Yup.string().required(true),
      password: Yup.string().required(true),
    });
    
    const login = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await loginApi(formData.value);
          if (!response?.jwt) throw "El usuario o contraseña no son validos";
          setTokenApi(response.jwt);
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };
    
    return {
      formData,
      formError,
      loading,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login{
  text-align: center;
  height: 50vh;
  > h2 {
    margin: 50px 0 20px 0;
    font-family: "Besley";
    color: rgb(201, 199, 199);
  }

  .ui.form{
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;

    input.error{
      border-color: #faa;
      background-color: #ffeded;
    }
  }

  .button{
    background-color: #6d04c6;
    color: white;
  }

  .account{
    color: #6d04c6;
  }
}
</style>