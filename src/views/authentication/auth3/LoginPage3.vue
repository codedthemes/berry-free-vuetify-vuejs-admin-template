<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
import AuthLogin from '../authForms/AuthLogin.vue';
</script>

<template>
  <v-row class="h-100vh" no-gutters>
    <!---Left Part-->
    <v-col cols="12" class="d-flex align-center bg-lightprimary">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="6" md="7">
              <v-card elevation="0" class="loginBox">
                <v-card variant="outlined">
                  <v-card-text class="pa-9">
                    <!---Left Part Logo -->
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <Logo />
                        <h2 class="text-secondary text-h2 mt-8">Hi, Welcome Back</h2>
                        <h4 class="text-disabled text-h4 mt-3">Enter your credentials to continue</h4>
                      </v-col>
                    </v-row>
                    <!---Left Part Logo -->

                    <!---Left Part Form-->
                    <AuthLogin />
                    <!---Left Part Form-->
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Left Part-->
  </v-row>
</template>
<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}

.cardAnimation {
  &:after {
    content: '';
    position: absolute;
    top: 32%;
    left: 40%;
    width: 313px;
    background-size: 380px;
    height: 280px;
    background-image: url('@/assets/images/auth/auth-purple-card.svg');
    background-repeat: no-repeat;
    background-position: center;
    animation: 15s wings ease-in-out infinite;
  }

  &:before {
    content: '';
    position: absolute;
    top: 23%;
    left: 37%;
    width: 243px;
    height: 210px;
    background-size: 380px;
    background-image: url('@/assets/images/auth/auth-blue-card.svg');
    background-repeat: no-repeat;
    background-position: center;
    animation: 15s wings ease-in-out infinite;
    animation-delay: 1s;
  }
}

.bgpattern {
  background: url('@/assets/images/auth/auth-pattern.svg') repeat;
}
</style>
