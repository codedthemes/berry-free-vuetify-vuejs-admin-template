<script setup lang="ts">
import { shallowRef } from 'vue';

const footerLink = shallowRef([
  {
    title: 'Home',
    url: 'https://berrydashboard.com/vue/free'
  },
  {
    title: 'Documentation',
    url: 'https://codedthemes.gitbook.io/berry-vuetify/'
  },
  {
    title: 'Support',
    url: 'https://codedthemes.support-hub.io/'
  }
]);
</script>
<template>
  <v-footer class="px-0 footer mt-2">
    <v-row justify="center" align="center" gap="0">
      <v-col cols="12" sm="6">
        <p class="text-body-medium mb-0 text-sm-left text-center">
          Berry ♥ crafted by Team
          <a href="https://themeforest.net/user/codedthemes" class="text-primary footer-link" target="_blank">Codedthemes</a>
        </p>
      </v-col>
      <v-col class="text-sm-right text-center" cols="12" sm="6">
        <a
          v-for="(item, i) in footerLink"
          :key="i"
          class="mx-2 text-body-medium text-darkText text-decoration-none"
          target="_blank"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  position: unset;
}
footer {
  a {
    &:hover {
      color: rgb(var(--v-theme-primary)) !important;
    }
  }
}
.footer-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
