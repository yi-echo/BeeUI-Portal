<script lang="ts" setup>
import { register } from "@/api/auth.api";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userInfo = reactive({
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const handleRegister = async () => {
  const res = await register(userInfo);
  console.log(res.status);
  if(res.status === 201){
    router.push("/home");
  }
};
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form class="user">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="exampleInputUsername"
                    placeholder="Username"
                    v-model="userInfo.username"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      v-model="userInfo.password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                      v-model="userInfo.passwordConfirm"
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block" @click="handleRegister">
                  Register Account
                </button>
                <hr />
                <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a
                  href="index.html"
                  class="btn btn-facebook btn-user btn-block"
                >
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
              </form>
              <hr />
              <div class="text-center">
                <a class="small" href="forgot-password.html"
                  >Forgot Password?</a
                >
              </div>
              <div class="text-center">
                <router-link to="/login" class="small">Already have an account? Login!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
@import url("@/assets/css/sb-admin-2.min.css");
</style>