<template>
  <BasicLayout>
    <div class="register">
      <h2>S i g n  U p</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Correo electronico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>

        <button
          type="submit"
          class="ui button fluid"
          :class="{ loading }"
        >
          Join
        </button>
      </form>

      <router-link to="/login" class="login"> Login </router-link>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import BasicLayout from "../layouts/BasicLayout";
import { registerApi } from "../api/user";
import { getTokenApi } from "../api/token";

export default {
  name: "Register",
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
      if (token) router.push("/");
    });
    
    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    });
    
    const register = async () => {
      formError.value = {};
      loading.value = true;
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await registerApi(formData.value);
          router.push("/login");
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
      loading.value = false;
    };
    
    return {
      formData,
      register,
      formError,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.register{
  text-align: center;
  height: 60vh;
  > h2{
    margin: 50px 0 30px 0;
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
  .login{
    color: #6d04c6;
  }
}

</style>