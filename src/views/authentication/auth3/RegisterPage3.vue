<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
import AuthRegister from '../authForms/AuthRegister.vue';
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
                        <h2 class="text-secondary text-h2 mt-8">Sign up</h2>
                        <h4 class="text-disabled text-h4 mt-3">Enter credentials to continue</h4>
                      </v-col>
                    </v-row>
                    <!---Left Part Logo -->

                    <!---Left Part Form-->
                    <AuthRegister />
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
    top: 45%;
    left: 35%;
    width: 260px;
    background-size: 380px;
    height: 290px;
    background-image: url('@/assets/images/auth/auth-signup-white-card.svg');
    background-repeat: no-repeat;
    background-position: center;
    animation: 15s wings ease-in-out infinite;
  }

  &:before {
    content: '';
    position: absolute;
    top: 12%;
    left: 25%;
    width: 360px;
    height: 350px;
    background-size: 460px;
    background-image: url('@/assets/images/auth/auth-signup-blue-card.svg');
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
